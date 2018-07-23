window.onload = function(){
 //   getPokemon();
    $("#getPokemon").on('click', getPokemon);
};

function getPokemon(){
    //get id from input
    var id=$("#pokemonId").val();

/*How to send an Ajax request and process the response:
*/
//Step 1: create xhr object
    var xhr = new XMLHttpRequest();


//Step 2 - callback function
//triggered every time the ready state

xhr.onreadystatechange = function(){
    console.log(Date() + " " + xhr.readyState);
    if(xhr.readyState == 4 && xhr.status==200){
        resp = xhr.responseText;
        pokemon = JSON.parse(resp);
        setPokeValues(pokemon);
    }
}

//Step 3 - open request
var url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
xhr.open("GET", url, true)

//STEP 4 - send() <-- takes param of request body 
xhr.send();

//ANYTHING FOLLOWING THIS WILL EXECUTE AS IF REQUEST NEVER HAPPENED
//DOES NOT WAIT FOR RESPONSE BEFORE CONTINUING

function setPokeValues(poke){
    $('#pokemonName').html(pokemon.name);
    var pic = $('#pokemonImg');
    pic.attr("src", pokemon.sprites.front_shiny);
    pic.attr("alt", pokemon.name);
    pic.attr("disabled", pokemon.name);
}

console.log(3);


}