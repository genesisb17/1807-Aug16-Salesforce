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
    // Send AJAX request immediately to create a new deck and grab deck_id
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            resp = xhr.responseText; // JSON string representing the deck
            deck = JSON.parse(resp); // Parse response into JS object
            deckId = deck.deck_id; // Important to keep track of throughout entire session
            console.log(resp);
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
        }
    }
    var drawCardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
    xhr.open("GET", drawCardUrl, true); // Might have to change true to false?
    xhr.send();

    document.getElementById('pickedCard').innerHTML = 'hello world'; // Just testing, remove later

    // TODO write some code to show the card, compare it to picked option
    
    function showCards(deck) {
        $('#pickedCard').html(deck.code); // Card name text
        var pic = $('#pickedCardImg');
        pic.attr("src", deck.images);
        pic.attr("alt", deck.code);
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
        }
    }
    var shuffleCardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`;
    xhr.open("GET", shuffleCardUrl, true);
    xhr.send();

    // TODO reset the score, which as of now doesn't exist
}