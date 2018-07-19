window.onload = function(){
    $("#getPokemon").on('click', getPokemon);
    $("#randomizePokemon").on('click', randomizePokemon);
};

function getPokemon(){
    let pokemonId=$('#pokemonId').val();
    ajaxRequest("pokemon", pokemonId)
}

function randomizePokemon(){
    let pokemonId=(Math.floor(Math.random() * 792) + 1);
    ajaxRequest("pokemon", pokemonId);
}

function ajaxRequest(id){
    var xhr = new XMLHttpRequest();
    let natureID=(Math.floor(Math.random() * 25) + 1);

    xhr.onreadystatechange = function(){
        console.log(Date() + " " + xhr.readyState);
        if(xhr.readyState == 4 && xhr.status==200){
            resp = xhr.responseText;
            nature = JSON.parse(resp);
            pokemon = JSON.parse(resp);
            setPokeValues(pokemon, nature);
        }
    }

        var url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
        xhr.open("GET", url, true);
        xhr.send();    

    console.log("CODE AFTER REQUEST WAS SENT");
}

function setPokeValues(pokemon, nature){
    $('#pokemonName').html(pokemon.name);
    $('#pokemonNature').html(nature.name);
    var image = $('#pokemonImg');
    image.attr("src", pokemon.sprites.front_default);
    image.attr("alt", pokemon.name);
}