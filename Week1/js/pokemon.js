window.onload = function(){
    $("#getPokemon").on('click', getPokemon);
    loadOptions();
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


function loadOptions(){ //what can we see from SWAPI.co
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            let op = JSON.parse(xhr.responseText);
            for(let i in op){ 
                let elem = document.createElement("option");
                elem.innerHTML = i;
                elem.value = i;
                elem.text = i;
                $("#things").append(elem);
            }

            $('#sw').on('click', function(){
                var el = $('#things option:selected').val();
                console.log("IN GET INFO" + el);
                getInfo(el);
            }
            );
        }
    }
    xhr.open("GET", "https://swapi.co/api/", true);
    xhr.send();
}

function getInfo(el){
    
    console.log(el);
   // var selected = document.getElementById("genres").options[e.selectedIndex].value;
    var url=`https://swapi.co/api/${el}`;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            let entity = JSON.parse(xhr.responseText);
            $('#info1').html(`There are ${entity.count} ${el}. Enter the ID you'd like to view`);
            $('#cont').attr("hidden",false);
            $('#id').attr("max", entity.count);
            $('#sw2').off('click');
            $('#sw2').on('click', function(){
                getSW(url);}
            );
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}

function getSW(url){ 
    console.log(`${url}/${$('#id').val()}`);
}