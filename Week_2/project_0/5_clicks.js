$(document).ready(function() {
    $('#start').onclick('click', start);
});

//start the game
function start() {
    $('#game-window').attr("src", $(this).attr("http://toolserver.org/~erwin85/randomarticle.php?categories=Featured_articles&family=wikipedia&lang=en"));
};