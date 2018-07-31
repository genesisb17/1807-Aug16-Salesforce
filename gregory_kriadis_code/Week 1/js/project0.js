// http://deckofcardsapi.com/
window.onload = function() {    
    $("#drawCard").on('click', drawCard);
    $("#shuffleCards").on('click', shuffleCards);
};

/*  Self-invoking anonymous function to automatically create a new deck
    that will be persistent throughout runtime. That way, we're not creating
    new decks every time we want to draw cards. That would be a waste of
    valuable resources. I may also look into keep a persistent deck between
    sessions as well, but for now I will stick with this.
*/
(function () {
    score = 0;
    cardsRemaining = 52;
    // Send AJAX request immediately to create a new deck and grab deck_id
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            resp = xhr.responseText; // JSON string representing the deck
            deck = JSON.parse(resp); // Parse response into JS object
            deckId = deck.deck_id; // Important to keep track of throughout entire session
            shuffleCards();
        }
    }    
    var newDeckUrl = "https://deckofcardsapi.com/api/deck/new/";
    xhr.open("GET", newDeckUrl, true);
    xhr.send();
})();

function drawCard() {
    // AJAX to draw a card from our current deck
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            resp = xhr.responseText;
            deck = JSON.parse(resp);
            console.log(resp);
            showCards(deck);
            getUserCard(deck);
        }
    }
    var drawCardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
    xhr.open("GET", drawCardUrl, true);
    xhr.send();

    function getUserCard(deck) {
       // Grab user card from HTML <select>, then concat the two to match the API's card.code format (e.g. AS)       
        cardNums = document.getElementById("cardNums");
        userCardNum = cardNums.options[cardNums.selectedIndex].value; // note for future: .text would retrieve the actual text over the option name in the HTML
        cardSuits = document.getElementById("cardSuits");
        userCardSuit = cardSuits.options[cardSuits.selectedIndex].value;
        userCardCode = userCardNum.concat(userCardSuit);

        console.log("Card num: " + userCardNum + 
        ", Card suit: " + userCardSuit + ", Full code: " + userCardCode); // FOR TESTING PURPOSES

        // Compare user card and drawn card in order to assign score
        // TODO This shouldn't work once all cards have been drawn
        // TODO Colors should change based on match
        if (userCardCode == deck.cards[0].code) {
            score += 5; // If suit and number match, assign 5 points
            $('#scoreAwarded').html("It's a perfect match! +5");
        }
        else if (userCardCode.charAt(0) == deck.cards[0].code.charAt(0)) {
            score += 2; // If only numbers match, assign 1 point
            $('#scoreAwarded').html("Only numbers match! +2");
        }
        else if (userCardCode.charAt(1) == deck.cards[0].code.charAt(1)) {
            score += 1; // If only suits match, assign 2 points
            $('#scoreAwarded').html("Only suits match! +1");
        } else {
            $('#scoreAwarded').html("Completely wrong! No points!");
        }
        cardsRemaining--;
        $('#scoreTotal').html("Total score: " + score + ", Cards remaining: " + cardsRemaining);
    }

    // TODO write some code to show the card, compare it to picked option    
    function showCards(deck) {
        $('#drawnCard').html("You drew:"); // Card name text
        pic = $('#drawnCardImg');
        pic.attr("src", deck.cards[0].image);
        pic.attr("alt", deck.cards[0].code);
    }
}

// This function will essentially reset the game
function shuffleCards() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            resp = xhr.responseText;
            deck = JSON.parse(resp);
            console.log(resp);
            resetGame();
        }
    }
    var shuffleCardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`;
    xhr.open("GET", shuffleCardUrl, true);
    xhr.send();

    // TODO nested function to reset  score and visual elements of drawn cards
    function resetGame() {
        score = 0;
        cardsRemaining = 52;
        $('#scoreAwarded').html("Take a guess, if you dare.");
        $('#scoreTotal').html("Total score: " + score + ", Cards remaining: " + cardsRemaining);
    }
}