window.onload = function(){
    $("#getPokemon").on('click', getPokemon);
    $("#getStarWars").on('click', getStarWars);
};
function getPokemon() {
    //get id from input
    var id = $('#pokemonId').val();
    console.log();  
/*How to send an ajax req. and process the responseE:
*/
//step 1 - create xhr object
var shr = new XMLHttpRequest();

//step 2 = callback function
shr.onreadystatechange = function(){
    console.log(Date() + " " + shr.readyState);
    if(shr.readyState == 4 &&shr.status==200){
        //code to process response
        console.log("in callback");
        resp = shr.responseText;
        pokemon = JSON.parse(resp);
        setPokeValues();
    }
}

//step 3 - open request
var url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
shr.open("GET",url, true);

//step 4 - send() <-- takes param of request body
shr.send();

//anything following will as if rewurst never happened 
//does not wait for response before continuing
console.log(4);
}

function getStarWars(){

    var id = $('#starwarsId').val();
    console.log();

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        console.log(Date() + " " + xhr.readyState);
        if(xhr.readyState == 4 &&  xhr.status==200){
            //code to process response
            console.log("in callback");
            resp = xhr.responseText;
            people = JSON.parse(resp);
            setStarValues();
        }
    }

var url = `https://swapi.co/api/people/${id}/`;
xhr.open("GET",url, true);

//step 4 - send() <-- takes param of request body
xhr.send();

//anything following will as if rewurst never happened 
//does not wait for response before continuing
console.log(4);

}

function setPokeValues(poke){
    $('#pokemonName').html(pokemon.name);
    var pic = $('#pokemonImg');
    pic.attr("src", pokemon.sprites.front_shiny);
    pic.attr("alt",pokemon.name);
}

function setStarValues(star){
    $('#starwarsName').html(people.name);
    var pic = $('#starImg');
    pic.attr("src", people.sprites);
    pic.attr("alt",people.name);
}