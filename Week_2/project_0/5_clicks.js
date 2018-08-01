$(document).ready(function () {
    //start the game when a start button is clicked
    $('.start').click(function() {
        startGame();
        getURL();
    });

    //bring up rules text when rules button is clicked
    $('#rules').click(function() {
        rules();
    });

    //check for game loss/win conditions
    $('#game-window').on('load', function () {
        checkWin();
        newURL = $(this).document.url;
        console.log(newURL);
    });

    /*code breaks here, this only works if domain matches
    else, need to track with load
    catch22, can't extract url from freshly loaded page, CORS blocks access*/
    $('#game-window').contents().find('.a').click(function(){
        newURL = $(this).attr('href');
        console.log($(this));
        getURL();
    });
    
});

var count = -1;
//set var equal to random featured wiki page
var newURL = "https://toolserver.org/~erwin85/randomarticle.php?categories=Featured_articles&family=wikipedia&lang=en";
var title = "";

//initialize game
function startGame() {
    $('#game-window').attr("src", "https://toolserver.org/~erwin85/randomarticle.php?categories=Featured_articles&family=wikipedia&lang=en");
    $('#start').prop("disabled", false);
    $('#rules').prop("disabled", false);
    $('#clicks').text("0");
    $('#loseOverlay').hide();
    $('#winOverlay').hide();
    count = -1;
};

//show rules textbox
function rules() {
    alert("No searching. \nNo Wiki links outside of page contents. \nNo leaving Wikipedia. \nNo home page.");
};

//check for win/loss
function checkWin() {
    count += 1;
    $('#clicks').text(count.toString());
    if (newURL.search("World War II") != -1) {
        win();
        return;
    }
    if (newURL.search("Wikipedia, the free encyclopedia") != -1) {
        $('#loseText').text("Main page is not allowed, you lose.");
        lose();
        return;
    }
    if (count >= 5) {
        $('#loseText').text("Too many clicks, you lose.");
        lose();
        return;
    };
};

//get components of wiki html using api
function getURL() {

     var call = new XMLHttpRequest();
 
     call.onreadystatechange = function () {
         console.log(Date() + " " + call.readyState);
         if (call.readyState == 4 && call.status == 200) {
             //code to process response
             resp = call.responseText;
             newURL = $(resp).filter("link[rel='canonical']").attr('href');
             title = $(resp).filter('title').text();
             /*here is where i hit a huge roadblock
             while i could fetch the url/title from a wiki page in the iframe using an api, i
             couldn't find a way to do this for each link clicked*/
             console.log(newURL);
             console.log(title);
         };
     };
 
     var url = `https://cors-anywhere.herokuapp.com/` + newURL;
     call.open("GET", url, true);
     call.send();

     console.log("CODE AFTER REQUEST WAS SENT");
 
};

//show victory screen
function win() {
    $('#winOverlay').show();
    $('#start').prop("disabled", true);
    $('#rules').prop("disabled", true);
};

//show defeat screen
function lose() {
    $('#loseOverlay').show();
    $('#start').prop("disabled", true);
    $('#rules').prop("disabled", true);
};