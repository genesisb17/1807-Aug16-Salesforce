window.onload = function(){
    //getPokemon();
    $('#getPokemon').on('click', getPokemon);
    $('#getSpell').on('click', getSpell);
};

function getSpell(){
    var id = getRndInteger();

    var dndxhr = new XMLHttpRequest();
    dndxhr.onreadystatechange = function(){
        console.log(Date() + "   " + dndxhr.readyState);
        if(dndxhr.readyState == 4 && dndxhr.status == 200)
        {
            dndresp = dndxhr.responseText;
            spell = JSON.parse(dndresp);
            setSpellValues(spell);
        }
    }

    var url = `https://swapi.co/api/people/${id}`;
    dndxhr.open("GET", url, true);

    //Step 4 - 
    dndxhr.send();
}

function getPokemon(){
var id = $('#pokemonID').val();
/** Ajax requests and process the response */

//step 1 -create xhr object
var xhr = new XMLHttpRequest();
// step 2 - callback function
xhr.onreadystatechange = function(){
    console.log(Date() + "   " + xhr.readyState)
    if(xhr.readyState == 4 && xhr.status == 200)
    {
        // code to process response.
        resp =  xhr.responseText;
        pokemon = JSON.parse(resp);
        setPokeValues(pokemon);
    }
}

//Step 3 - 
var url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
xhr.open("GET", url, true);

//Step 4 - 
xhr.send();

//Anything here will execute as if request happened, does not wait for response.
console.log("Chuckles");
}

function setPokeValues(){
    $('#pokeName').html(pokemon.name);
    var image = $('#pokePic');
    image.attr('src', pokemon.sprites.front_shiny);
    image.attr('alt', pokemon.name);

}

function setSpellValues(){
    getSpecies(spell.species);
    getHomeworld(spell.homeworld);
    $('#spellName').html(spell.name);
    $('#gender').html(spell.gender);
    $('#skin').html(spell.skin_color);
    $('#height').html(spell.height);
    $('#hair').html(spell.hair_color);
    //setHair(spell.hair_color);
    $('#eyes').html(spell.eye_color);


}

function getSpecies(url){
    var dndxhr = new XMLHttpRequest();
    dndxhr.onreadystatechange = function(){
        console.log(Date() + "   " + dndxhr.readyState);
        if(dndxhr.readyState == 4 && dndxhr.status == 200)
        {
            dndresp = dndxhr.responseText;
            spell = JSON.parse(dndresp);
            setSpecies(spell);
        }
    }
    dndxhr.open("GET", url, true);

    //Step 4 - 
    dndxhr.send();
}
function getHomeworld(url){
    var dndxhr = new XMLHttpRequest();
    dndxhr.onreadystatechange = function(){
        if(dndxhr.readyState == 4 && dndxhr.status == 200)
        {
            dndresp = dndxhr.responseText;
            spell = JSON.parse(dndresp);
            setHomeworld(spell);
        }
    }
    dndxhr.open("GET", url, true);
    dndxhr.send();
}

function setHair(hair){
    if(spell.hair_color == "None" || spell.hair_color == "n/a")
    {
        $('#hair').html("bald head")
    }
    else{
        $('#hair').html(hair.hair_color + "hair")
    }
}

function setSpecies(species){
$('#species').html(species.name);
}

function setHomeworld(homeworld){
    $('#homeworld').html(homeworld.name);
}

function getRndInteger() {
    return Math.floor(Math.random() * 88 ) + 1;
}