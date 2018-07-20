const key = "3eeae4d46af2a35001571f37cff8e8ed";
window.onload = function(){
    //getPokemon();
    $('#getChar').on('click', getChar);  
};

function getChar(){
    var xhr_var = new XMLHttpRequest();
    var searchString = $('#charIdBox').val();
   // Step 2: callback function 
    xhr_var.onreadystatechange = function(){
        console.log(Date() + " " + xhr_var.readyState);
        if(xhr_var.readyState == 4 && xhr_var.status==200){
            //code to process reponse
            let resp = xhr_var.responseText;
            let character = JSON.parse(resp);
            //setCharValues(character);
        }
         
    }

    //Step 3: open request  
    var url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchString}&apikey=3eeae4d46af2a35001571f37cff8e8ed`;
    xhr_var.open("GET", url, true);
    
    //Step 4: sne() <-- takes param of request body 
    xhr_var.send();

    //Anything following this will execte as if request never happened 
    //does not wait for the reposne before contining. 

}

// function setCharValues(character){
//     //Manipulating dom with Response 
//     $('#pokemonNAme').html(pokemon.name);
//     var pic = $('#pokemonImg');
//     pic.attr("src", pokemon.sprites.front_shiny);
//     pic.attr("name", pokemon.name);
//     $('#pokemonName').html(pokemon.name);
// }

