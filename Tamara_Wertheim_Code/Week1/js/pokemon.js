window.onload = function(){
    //getPokemon();
    $("getPokemon").on('click', getPoekmon);
}

function getPokemon(){
    var id=$('#pokemonId').val();

    var xhr = new XMLHttpRequest

    xhr.onreadystatechange = function(){
        console.log(Date() + " " + xhr.readyState);
        if(xhr.readyState == 4 && xhr.status==200){
            resp = xhr.responseText;
            pokemon = JSON.parse(resp);
        }
    }

    var url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    xhr.open("GET", url, true);

    xhr.send();

}