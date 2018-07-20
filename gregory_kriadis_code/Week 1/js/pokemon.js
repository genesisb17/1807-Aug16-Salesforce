window.onload = function() {
    $("#getPokemon").on('click', getPokemon);
};

function getPokemon() {
    // Get ID from input
    var id=$('#pokemonId').val();

    // HOW TO SEND AN AJAX REQUEST AND PROCESS THE RESPONSE
    
    // Step 1- create XHR object
    var xhr = new XMLHttpRequest(); // Capitilzation must be like this in XMLHttpRequest

    // Step 2- callback function
    xhr.onreadystatechange = function() {
        console.log(Date() + " " + xhr.readyState); // Just to test how long this takes
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Code to process response
            resp = xhr.responseText; // JSON string representing Pokemon
            pokemon = JSON.parse(resp); // Parse response into JS object
            setPokeValues(pokemon); // Manipulate DOM with Poke properties
        }
    }

    // Step 3- open request
    var url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    xhr.open("GET", url, true);

    // Step 4- send
    xhr.send();

    /* Anything following this will execute as if request never happened.
    Does not wait for response before continuing. */
    console.log("This code triggered after the request was sent.");

    // setPokeValues will display Pokemon name and sprite
    function setPokeValues(poke) { 
        // Manipulate DOM with response
        $('#pokemonName').html(pokemon.name);
        var pic = $('pokemonImg');
        pic.attr("src",pokemon.sprites.front_shiny);
        pic.attr("alt", pokemon.name);
    }
}