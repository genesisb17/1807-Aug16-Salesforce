window.onload = function(){
    //getPokemon();
    $("#getPokemon").on('click', getPokemon);
    $("#getSpell").on('click', getSpell);
}
function getPokemon(){

    //get id from input
    var id = $('#pokemonId').val();
    console.log(Date() + " code before request");
    //**HOW TO SEND AJAX REQUEST AND PREOCESS THE RESPONSE */
    var xhr = new XMLHttpRequest(); //step 1: create xhr object

    //step 2: callback function
    xhr.onreadystatechange = function(){
        console.log(Date() + " " + xhr.readyState);
        if(xhr.readyState == 4 && xhr.status == 200){
            //code to process response
            let resp = xhr.responseText;
            pokemon = JSON.parse(resp);

            //Display pokemon info
            console.log(pokemon.sprites.front_default);
            document.getElementById("pokeImg").src = pokemon.sprites.front_default;
            document.getElementById("pokeImg").alt = pokemon.name;
            document.getElementById("pokeName").innerText = pokemon.name;
         
        }
    }

    //step 3: open request
    var url = "https://pokeapi.co/api/v2/pokemon/"+ id + "/";
    xhr.open("GET", url, true);

    //Step 4: send
    xhr.send();

    //anything following here will execute as if request never happed. Does not wait for response.
    console.log(Date() + " code after request");
}

function getSpell(){
    var id = $('#spellId').val();
    console.log("Request Sent");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("Response Recieved");
            let resp = xhr.responseText;
            spell = JSON.parse(resp);
        }
    }

    var url='https://swapi.co/api/people/' + id + '/';
    console.log(url)
    xhr.open("GET", url, true);

    xhr.send();
}