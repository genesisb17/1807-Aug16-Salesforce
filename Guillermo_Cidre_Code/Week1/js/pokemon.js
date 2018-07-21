window.onload = function(){
    //getPokemon();
    $("#getPokemon").on('click', getPokemon);
}

function getPokemon() {

    /* HOW TO SEND AN AJAX REQUEST AND PROCESS THE RESPONSE */

    //get id from input
    var id = $('#pokemonId').val();
    //STEP 1 - create xhr
    var xhr = new XMLHttpRequest();

    //STEP 2 - Callback function
    xhr.onreadystatechange = function (){
        console.log(Date() + " " + xhr.readyState);
        if(xhr.readyState == 4 && xhr.status == 200) {
            //Code to process response
            let resp = xhr.responseText;
            let pokemon = JSON.parse(resp);
            //set name and img
            $('#pokeName').text(pokemon.name);


            $('#pokeImg').attr("src",pokemon.sprites.front_default);
        }
    }

    //STEP 3 - open request
    var url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    xhr.open("GET", url, true);

    //STEP 4 - send() <-- takes param of request body
    xhr.send();

    //Anything following this will execute as if request never happened
    //Does not wait for response before continuing

}