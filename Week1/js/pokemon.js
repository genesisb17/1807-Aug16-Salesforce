window.onload = function(){
    $("#getPokemon").on('click', getPokemon);
};

function getPokemon(){
    //get id from input 
    var id=$('#pokemonId').val();

    /* HOW TO SEND AN AJAX REQUEST AND PROCESS THE RESPONSE:
    */

    //STEP 1- create XHR object
    var xhr = new XMLHttpRequest();

    //STEP 2 - callback function 
    xhr.onreadystatechange = function(){
        console.log(Date() + " " + xhr.readyState);
        if(xhr.readyState == 4 && xhr.status==200){
            //CODE TO PROCESS RESPONSE
            let resp = xhr.responseText; //JSON STRING REPRESENTING POKEMON
            let pokemon = JSON.parse(resp); //PARSE RESPONSE INTO JS OBJECT
            setPokeValues(pokemon); //MANIPULATE DOM WITH POKE PROPERTIES
        }
    }
    //STEP 3 - open request
    var url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    xhr.open("GET", url, true);

    //STEP 4 - send() <-- takes param of request body
    xhr.send();

    //ANYTHING FOLLOWING THIS WILL EXECUTE AS IF REQUEST NEVER HAPPENED
    //DOES NOT WAIT FOR RESPONSE BEFORE CONTINUING
    console.log("CODE AFTER REQUEST WAS SENT");


}

function setPokeValues(poke) {
    //manipulate DOM with response
    $('#pokemonName').html(pokemon.name);
    var pic = $('#pokemonImg');
    pic.attr("src", pokemon.sprites.front_shiny);
    pic.attr("alt", pokemon.name);
}

