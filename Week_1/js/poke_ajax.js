window.onload = function () {
    getPokemon();
    $('#getPokemon').on('click', getPokemon);
};

function getPokemon() {
    //get ID from input
    var id = $('#pokemonID').val();

    // how to send an AJAX request and process response:

    //STEP 1: create XHR object
    var call = new XMLHttpRequest();

    //STEP 2: callback function
    call.onreadystatechange = function () {
        console.log(Date() + " " + call.readyState);
        if (call.readyState == 4 && call.status == 200) {
            //code to process response
            resp = call.responseText;
            pokemon = JSON.parse(resp);
            showPokemon();
        };
    };

    //STEP 3: open request
    var url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    call.open("GET", url, true);

    //STEP 4: send request <- takes parameter of request body
    call.send();

    //ANYTHING FOLLOWING THIS WILL EXECUTE AS IF REQUEST NEVER HAPPENED
    //DOES NOT WAIT FOR RESPONSE BEFORE CONTINUING
    console.log("CODE AFTER REQUEST WAS SENT");

};

function showPokemon() {
    $('#pokeName').val(pokemon.name);
    let img = $('#pokeIMG');
    img.attr("src", pokemon.sprites.front_default);
    img.attr("alt", pokemon.name);
};