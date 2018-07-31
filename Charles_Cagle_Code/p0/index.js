const express = require('express');
const newId = require('uuid/v4');
const shuffle = require('shuffle-array');

const last = arr => arr[arr.length - 1];

function getPromise3() {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return {promise: promise, resolve: resolve, reject: reject};
}

const cardDeck = [..."🂡🂢🂣🂤🂥🂦🂧🂨🂩🂪🂫🂭🂮🂱🂲🂳🂴🂵🂶🂷🂸🂹🂺🂻🂽🂾🃁🃂🃃🃄🃅🃆🃇🃈🃉🃊🃋🃍🃎🃑🃒🃓🃔🃕🃖🃗🃘🃙🃚🃛🃝🃞"];
const goesFirst = h => h.includes("🃒");
const isCard = c => cardDeck.includes(c);

function deal() {
  const deck = shuffle(cardDeck, {copy: true});
  return [0,1,2,3].map(i => deck.slice(i * 13, (i + 1) * 13).sort().join(''));
}

const suit = card => card.codePointAt(0) & 0xf0;
const rank = card => card.codePointAt(0) & 0xf;
const tRank = card => (rank(card) + 13) % 15;
const wins = (f, n) => suit(f) == suit(n) && tRank(f) < tRank(n) ? n : f;
const add = (a, b) => a + b;
const cardPoints = c => "🂱🂲🂳🂴🂵🂶🂷🂸🂹🂺🂻🂽🂾".includes(c) ? 1 : c == "🂭" ? 13 : 0;
const trickPoints = t => [...t].map(cardPoints).reduce(add);

function scoreRound(tricks, lead) {
  scores = [0, 0, 0, 0];
  tricks.map(trickPoints).forEach((s, i) => { scores[lead[i]] += s; });
  return scores.map((n) => n == 26 ? -n : n);
}

function winner(trickStr, lead) {
  let trick = [...trickStr];
  return (trick.indexOf(trick.reduce(wins)) + lead) % 4;
}

class Game {
  constructor() {
    this.round = -1;
    this.players = [];
    this.nextState = getPromise3();
    this.scores = [0, 0, 0, 0];
    this.nextRound();
  }

  addPlayer(player) {
    if (! this.players.includes(player))
      this.players.push(player);
  }

  get ready() {
    return this.players.length == 4;
  }

  get playedThisTrick() {
    return this.currentTrick.length / 2;
  }

  get nextPlayer() {
    return (this.currentLead + this.playedThisTrick) % 4;
  }

  get nextPlayerId() {
    return this.players[this.nextPlayer];
  }

  get currentLead() {
    return last(this.lead);
  }

  get currentTrick() {
    return last(this.tricks);
  }

  set currentTrick(s) {
    this.tricks[this.tricks.length - 1] = s;
  }

  get generation() {
    return this.round * 52 + this.tricks.length * 4 + this.playedThisTrick;
  }

  hasPlayer(p) {
    return this.players.includes(p);
  }

  wakeUp() {
    this.nextState.resolve();
    this.nextState = getPromise3();
  }

  start() {
    this.wakeUp();
  }

  nextRound() {
    ++this.round;
    this.hands = deal();
    this.tricks = [""];
    this.lead = [this.hands.findIndex(goesFirst)];
    this.pendingPlays = {};
  }

  async waitForGeneration(prev) {
    if (prev >= this.generation)
      await this.nextState.promise;
  }

  playCard(card) {
    this.currentTrick += card;
    if (this.playedThisTrick == 4) {
      this.lead.push(winner(this.currentTrick, this.currentLead));
      this.tricks.push("");
    }
    if (this.tricks.length == 14) {
      this.tricks.pop();
      this.lead.shift();
      scoreRound(this.tricks, this.lead).forEach((s, i) => { this.scores[i] += s; });
      this.nextRound();
    }
    this.wakeUp();
  }

  play(player, card) {
    if (! this.hasPlayer(player) || ! isCard(card))
      return false;
    this.pendingPlays[player] = card;
    while (this.pendingPlays[this.nextPlayerId]) {
      const player = this.nextPlayerId;
      this.hands[this.nextPlayer] = this.hands[this.nextPlayer]
                                        .replace(this.pendingPlays[player], '');
      this.playCard(this.pendingPlays[player]);
      delete this.pendingPlays[player];
    }
    return true;
  }

  handForPlayer(player) {
    return this.hands[this.players.indexOf(player)];
  }

  getStateForPlayer(player) {
    return {
      gen: this.generation,
      hand: this.handForPlayer(player),
      tricks: this.tricks,
      lead: this.lead,
      seat: this.players.indexOf(player)
    };
  }
}

let currentGame = newId();
const games = {};
const players = {};
games[currentGame] = new Game();

function startGame() {
  const game = games[currentGame];
  currentGame = newId();
  games[currentGame] = new Game();
  game.start();
}

const app = express();
app.use(express.static('css'));
app.use(express.static('html'));
app.use(express.static('js'));
app.use(express.json());
app.get('/', (req, res) => res.redirect('/ych.html'));

app.get('/poll', (req, res) => {
  const game = games[req.query.game];
  const player = req.query.player;
  const gen = Number.parseInt(req.query.gen);
  if (! game || ! game.hasPlayer(player) || Number.isNaN(gen))
    res.sendStatus(400);
  else
    game.waitForGeneration(gen).then(() =>
      res.status(200).json(game.getStateForPlayer(player)));
});

app.get('/play', (req, res) => {
  const gm = games[req.query.game];
  res.sendStatus(gm && gm.play(req.query.player, req.query.card) ? 200 : 400);
});

app.get('/new_player', (req, res) => {
  const id = newId();
  if (id in players)
    res.sendStatus(500);
  else {
    res.status(201);
    players[id] = {id: id};
    res.json(id);
  }
});

app.get('/find_game', (req, res) => {
  const player = players[req.query.player];
  if (! player)
    res.sendStatus(400);
  else {
    const game = games[currentGame];
    game.addPlayer(req.query.player);
    res.status(202);
    res.json(currentGame);
    if (game.ready)
      startGame();
  }
});

app.listen(1605);
console.log("http://localhost:1605/");
