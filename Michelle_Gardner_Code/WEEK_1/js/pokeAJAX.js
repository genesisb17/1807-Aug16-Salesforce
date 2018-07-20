window.onload = function () {
    // getPokemon();
    $("#getPokemon").on('click', getPokemon);
    
}


function getPokemon() {

    // get id from input
    var id = $('#pokemonId').val(); // for Pokemon

    /** How to send an AJAX Request and process the Response    
     */

    // Step 1: create XHR object
    var xhr = new XMLHttpRequest();

    // Step 2: Callback function
    xhr.onreadystatechange = function () {
        // to see the chnage
        console.log(Date() + " " + xhr.readyState);

        if (xhr.readyState == 4 && xhr.status == 200) {
            // Code to process response
            resp = xhr.responseText; //global var, JSON string representing pokemon
            pokemon = JSON.parse(resp); //global var, Parse Response into JS object
         
            setPokeValues(pokemon); // Manipulate DOM with Poke Properties

        }
    }

    // Step 3: open xhr request
    var url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    xhr.open("GET", url, true);

    // Step 4 : send() <- takes in parameter of request body, but N/A for GET
    xhr.send();

    // Anything following this will execute as if Request Never Happened, does not wait for Response before continuing


    console.log("CODE AFTER REQUEST WAS SENT")



}

function setPokeValues(poke){
    //manipulate DOM with response
    $('#pokemonName').html(pokemon.name);
    var image = $('#pokePic');
    image.attr("src", pokemon.sprites.front_shiny);
    image.attr("alt", pokemon.name);
}