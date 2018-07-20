window.onload = function(){
    //getPokemon();
    $('#getPokemon').on('click', getPokemon);  
};

function getPokemon(){
    alert("functin called");
    /* 
        How to send an AJAX request and process the respons.
    */
   //Step 1:Create XHR request
    var xhr_var = new XMLHttpRequest();
    var pokeId = $('#pokemonIdBox').val();
   // Step 2: callback function 
    xhr_var.onreadystatechange = function(){
        console.log(Date() + " " + xhr_var.readyState);
        if(xhr_var.readyState == 4 && xhr_var.status==200){
            //code to process reponse
            var resp = xhr_var.responseText;
            pokemon = JSON.parse(resp);
            setPokemonValues(pokemon);
        }
         
    }

    //Step 3: open request  
    var url = `https://pokeapi.co/api/v2/pokemon/${pokeId}/`;
    xhr_var.open("GET", url, true);
    
    //Step 4: sne() <-- takes param of request body 
    xhr_var.send();

    //Anything following this will execte as if request never happened 
    //does not wait for the reposne before contining. 

}

function setPokemonValues(poke){
    //Manipulating dom with Response 
    $('#pokemonNAme').html(pokemon.name);
    var pic = $('#pokemonImg');
    pic.attr("src", pokemon.sprites.front_shiny);
    pic.attr("name", pokemon.name);
    $('#pokemonName').html(pokemon.name);
}