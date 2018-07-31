const hand = $("#hand");
const play = $("#play");
const trick = $("#trick");
const tricks = $("#tricks");
const playOrder = $("#playOrder");
const STATE = { gen: -1 };

const ordinals = ["first", "second", "third", "fourth"];

function makeCard(c) {
  const card = $(`<span class="card">${c}</span>`);
  if ("🂱🂲🂳🂴🂵🂶🂷🂸🂹🂺🂻🂽🂾🃁🃂🃃🃄🃅🃆🃇🃈🃉🃊🃋🃍🃎".includes(c))
    card.addClass('red');
  return card;
}

function makeCardSel(c) {
  const sel = $(`
    <label>
      <input type="radio" class="cardsel" name="card" id="${c}"></input>
    </label>
  `);
  sel.append(makeCard(c));
  return sel;
}

function makeTrick(tStr) {
  const tr = $("<li></li>");
  [...tStr].forEach((c) => tr.append(makeCard(c)));
  return tr;
}

function updateGameState(state) {
  if (state) {
    STATE.gen = state.gen;
    hand.html("");
    [...state.hand].forEach((c) => hand.append(makeCardSel(c)));
    trick.html("");
    const currentTrick = state.tricks.pop();
    [...currentTrick].forEach((c) => trick.append(makeCard(c)));
    tricks.html("");
    state.tricks.forEach((t) => tricks.append(makeTrick(t)));
    const order = (state.seat - state.lead.pop() + 4) % 4;
    play.prop("disabled", order != [...currentTrick].length);
    playOrder.text(ordinals[order]);
  }
  if (! (state && state.finished))
    $.getJSON("poll", STATE).done(updateGameState);
}

function initializeGame() {
  $.getJSON("new_player").done((pid) => {
    STATE.player = pid;
    $.getJSON("find_game", {player: STATE.player}).done((gid) => {
      STATE.game = gid;
      updateGameState();
    });
  });
}

play.click(() => {
  const checked = $(".cardsel:checked");
  const card = checked.attr('id');
  if (card) {
    $.get("play", Object.assign({card: card}, STATE));
    checked.parent().remove();
  }
});

initializeGame();
