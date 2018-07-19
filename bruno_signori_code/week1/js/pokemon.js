window.onload = function(){
    //getPokemon();
    $("#getPokemon").on('click', getPokemon);
    $("#getDragon").on('click', getDragons);
    $("#getStarWar").on('click', getStarWars);
}

function getPokemon(){
    //get id from input
    var id = $('#pokemonId').val();
    //hot to send an ajax request and process the response:

    //step 1 - create XHR object
    var xhr = new XMLHttpRequest();

    //step 2 - callback function
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            //code to process response
            let resp = xhr.responseText;
            let pokemon = JSON.parse(resp);
            setPokeValues(pokemon);
        }
    }

    //step 3
    var url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    xhr.open("GET", url, true);

    //step 4 - send() <-- takes param of request body
    xhr.send();

    //anything following this will execute as if request never happened 
    //does not wait for response before continuing
    console.log("Code after request was sent")
}

function setPokeValues(pokemon){
    $('#pokemonName').html(pokemon.name);
    var pic = $('#pokemonImg');
    pic.attr("src", pokemon.sprites.front_shiny);
    pic.attr("alt", pokemon.name);
}

function getDragons(){
    //get id from input
    var id = $('#dragonsId').val();
    //hot to send an ajax request and process the response:

    //step 1 - create XHR object
    var xhr = new XMLHttpRequest();

    //step 2 - callback function
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            //code to process response
            let resp = xhr.responseText;
            let dragon = JSON.parse(resp);
            setDragonValues(dragon);
        }
    }

    //step 3
    var url = `http://www.dnd5eapi.co/api/monsters/${id}/`;
    xhr.open("GET", url, true);

    //step 4 - send() <-- takes param of request body
    xhr.send();

    //anything following this will execute as if request never happened 
    //does not wait for response before continuing
    console.log("Code after request was sent")
}

function setDragonValues(dragon){
    $('#dragonName').html(dragon.name);
    $('#dragonSpeed').html("Speed: "+dragon.speed);
    $('#dragonSenses').html("Senses: "+dragon.senses);
}

function getStarWars(){
    //get id from input
    list = $('#starId').val();
    var id = $('#starWarsId').val();
    //hot to send an ajax request and process the response:

    //step 1 - create XHR object
    var xhr = new XMLHttpRequest();

    //step 2 - callback function
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            //code to process response
            let resp = xhr.responseText;
            let starWar = JSON.parse(resp);
            setStarWarValues(starWar);
        }
    }

    //step 3
    var url = `https://www.swapi.co/api/${list}/${id}/`;
    xhr.open("GET", url, true);

    //step 4 - send() <-- takes param of request body
    xhr.send();

    //anything following this will execute as if request never happened 
    //does not wait for response before continuing
    console.log("Code after request was sent")
}

function setStarWarValues(starWar){
    $('#starWarsName').html(starWar.name);
    if(list == "people"){
        $('#starWar_1').html("Height: "+starWar.height);
        $('#starWar_2').html("Birth Year: "+starWar.birth_year);
    }
    if(list == "planets"){
        $('#starWar_1').html("Population: "+starWar.population);
        $('#starWar_2').html("Terrain: "+starWar.terrain);
    }
    if(list == "starships"){
        $('#starWar_1').html("Model: "+starWar.model);
        $('#starWar_2').html("Passengers: "+starWar.passengers);
    }
    
}
