window.onload = function() {
    $(`#getPokemon`).on('click', getPokemonTeam);
    $(`.sprite`).attr("src", "../Project 0/img/ball.jpg");
    $(`#enter`).on('click', enter);
    $(`#mulligan`).on('click', mulligan);
    progressBar = document.getElementById("progress"),
    loadBtn = document.getElementById("getPokemon"),
    progBar = document.getElementById("progress"),
    pokemonTeam = ['','','','','',''],
    enemyTeam = ['','','','','',''],
    numBattles = 0;
    mull=false;
}
function enter() {
    $(`#teamInfo`).removeAttr("hidden");
    $(`#briefing`).attr("hidden", true);
}
//Create a random team of pokemon for the player
//Picks randomly from possible configurations of each pokemon
function getPokemonTeam() {
    this.setAttribute("hidden", true);
    //create XHR objects
    xhr1 = new XMLHttpRequest();
    xhr2 = new XMLHttpRequest();
    xhr3 = new XMLHttpRequest();
    xhr4 = new XMLHttpRequest();
    xhr5 = new XMLHttpRequest();
    xhr6 = new XMLHttpRequest();
    progBar.max = 100;

    /*
        AJAX request to pokeapi 
    */
    var ids = [Math.floor(Math.random() * 712) + 1,
        Math.floor(Math.random() * 712) + 1,
        Math.floor(Math.random() * 712) + 1,
        Math.floor(Math.random() * 712) + 1,
        Math.floor(Math.random() * 712) + 1,
        Math.floor(Math.random() * 712) + 1];


    //callback functions
    xhr1.onreadystatechange = function (){
        if(xhr1.readyState == 4 && xhr1.status == 200) {
            //process response
            let resp = xhr1.responseText;
            let pokemon = JSON.parse(resp);
            pokemonTeam[0] = pokemon;
            setPokemonValues(pokemonTeam[0], 1);
        }
    };
    xhr2.onreadystatechange = function (){
        if(xhr2.readyState == 4 && xhr2.status == 200) {
            //process response
            let resp = xhr2.responseText;
            let pokemon = JSON.parse(resp);
            pokemonTeam[1] = pokemon;
            setPokemonValues(pokemonTeam[1], 2);
        }
    };
    xhr3.onreadystatechange = function (){
        if(xhr3.readyState == 4 && xhr3.status == 200) {
            //process response
            let resp = xhr3.responseText;
            let pokemon = JSON.parse(resp);
            pokemonTeam[2] = pokemon;
            setPokemonValues(pokemonTeam[2], 3);
        }
    };
    xhr4.onreadystatechange = function (){
        if(xhr4.readyState == 4 && xhr4.status == 200) {
            //process response
            let resp = xhr4.responseText;
            let pokemon = JSON.parse(resp);
            pokemonTeam[3] = pokemon;
            setPokemonValues(pokemonTeam[3], 4);
        }
    };
    xhr5.onreadystatechange = function (){
        if(xhr5.readyState == 4 && xhr5.status == 200) {
            //process response
            let resp = xhr5.responseText;
            let pokemon = JSON.parse(resp);
            pokemonTeam[4] = pokemon;
            setPokemonValues(pokemonTeam[4], 5);
        }
    };
    xhr6.onreadystatechange = function (){
        if(xhr6.readyState == 4 && xhr6.status == 200) {
            //process response
            let resp = xhr6.responseText;
            let pokemon = JSON.parse(resp);
            pokemonTeam[5] = pokemon;
            setPokemonValues(pokemonTeam[5], 6);
        }
    };

    //open requests
    var url = `https://pokeapi.co/api/v2/pokemon/${ids[0]}/`; xhr1.open("GET", url, true);
    url = `https://pokeapi.co/api/v2/pokemon/${ids[1]}/`; xhr2.open("GET", url, true);
    url = `https://pokeapi.co/api/v2/pokemon/${ids[2]}/`; xhr3.open("GET", url, true);
    url = `https://pokeapi.co/api/v2/pokemon/${ids[3]}/`; xhr4.open("GET", url, true);
    url = `https://pokeapi.co/api/v2/pokemon/${ids[4]}/`; xhr5.open("GET", url, true);
    url = `https://pokeapi.co/api/v2/pokemon/${ids[5]}/`; xhr6.open("GET", url, true);
    progBar.value = 10;

    //send
    xhr1.send();
    xhr2.send();
    xhr3.send();
    xhr4.send();
    xhr5.send();
    xhr6.send();
    progBar.value = 25;
}
function setPokemonValues(pokemon, i) {

    //Party Display
    let image= $(`#sprite${i}`);
    image.attr("src", pokemon.sprites.front_default);
    image.attr("alt", pokemon.name);

    //Determine Ability
    let xhrAbility = new XMLHttpRequest();
    xhrAbility.onreadystatechange = function (){
        if(xhrAbility.readyState == 4 && xhrAbility.status==200){
            let resp = xhrAbility.responseText;
            let ability = JSON.parse(resp);
            pokemon.abilities = [ability.name, ability.effect_entries[0].effect];
        }
    }
    let numAbilities = pokemon.abilities.length;
    let abilityNum = Math.floor(Math.random() * numAbilities) + 0;
    var url = `https://pokeapi.co/api/v2/ability/${pokemon.abilities[abilityNum].ability.name}/`;
    xhrAbility.open("GET", url, true);
    xhrAbility.send();
    progBar.value = 50;


    //Determine Moveset
    function determineMoveset(pokemon, slotNum) {
        let xhrMoves = new XMLHttpRequest();

        xhrMoves.onreadystatechange = function (){
            if(xhrMoves.readyState == 4 && xhrMoves.status == 200){
                let resp = xhrMoves.responseText;
                let move = JSON.parse(resp);
                pokemon.moves[slotNum] = move;
            }
        }


        let numMoves = pokemon.moves.length;
        let movesNum = Math.floor(Math.random() * numMoves) + 0;
        var url = `https://pokeapi.co/api/v2/move/${pokemon.moves[movesNum].move.name}/`;
        xhrMoves.open("GET", url, true);
        //enable page functionality once Pokemon are loaded (close enough)
        xhrMoves.onloadend = function(e) {
            if(xhrMoves.readyState == 4 && xhrMoves.status == 200) {
                progBar.value = 100;
                $(`.sprite`).on('click', clearSelect);
                $(`.sprite`).on('click', dispPokemon);    
                $(`.move-btn`).on('click', dispMove);
            }
        };
        //send XHTTP request
        xhrMoves.send();
    }
    progBar.value = 80;
    for(i=0; i < 4; i++) {
        determineMoveset(pokemon, i);
    }
};
function dispPokemon() {
    //Add selection display
    addSelect(this);

    //Hide progress bar
    progressBar.setAttribute("hidden", true);
    var sprite = this.getAttribute("id");
    let pokeNum = sprite.substring(6,7);
    pokeNum = parseInt(pokeNum) - 1;

    //Set Focus
    let image= $(`#focus`);
    curr_pokemon = pokemonTeam[pokeNum];
    image.attr("src", curr_pokemon.sprites.front_default);
    image.attr("alt", curr_pokemon.name);
    $(`#focus`).removeClass(`pokeNum-0 pokeNum-1 pokeNum-2 pokeNum-3 pokeNum-4 pokeNum-5`);
    $(`#focus`).addClass(`pokeNum-${pokeNum}`);
    $(`#Name`).html(curr_pokemon.name.charAt(0).toUpperCase() + curr_pokemon.name.substring(1,));
    //Display Types
    let i=1;
    curr_pokemon.types.forEach(element => {
        if(i == 1) {
            $(`#Type1`).removeClass("normal fighting flying poison ground rock bug ghost steel fire water grass electric psychic ice dragon dark fairy");
            $(`#Type1`).addClass(`${element.type.name}`);
            $(`#Type1`).html(`${element.type.name}`[0].toUpperCase()+`${element.type.name}`.substring(1,`${element.type.name}`.length));
            $(`#Type2`).html('');
        }

        if(i == 2) {
            $(`#Type2`).removeClass("normal fighting flying poison ground rock bug ghost steel fire water grass electric psychic ice dragon dark fairy");
            $(`#Type2`).addClass(`${element.type.name}`);
            $(`#Type2`).html(`${element.type.name}`[0].toUpperCase()+`${element.type.name}`.substring(1,`${element.type.name}`.length));
        }
        i++;
    });
    displayStats();
    $(`#abilityPanel`).removeAttr("hidden");
    $(`#statPanel`).removeAttr("hidden");
    $(`.move-btn`).removeAttr("hidden");
    $(`.move-btn`).removeClass("normal fighting flying poison ground rock bug ghost steel fire water grass electric psychic ice dragon dark fairy");
    if(mull == false) {
        $(`#mulligan`).removeAttr("hidden");
    }

    $(`#desc`).html(curr_pokemon.abilities[1]);
    $(`#abilityPanelHead`).html(curr_pokemon.abilities[0].toUpperCase());

    $(`#move1Btn`).html(curr_pokemon.moves[0].name.toUpperCase());
    $(`#move1Btn`).addClass(`${curr_pokemon.moves[0].type.name}`);
    $(`#move1`).attr("pokeNum", `${pokeNum}`);

    $(`#move2Btn`).html(curr_pokemon.moves[1].name.toUpperCase());
    $(`#move2Btn`).addClass(`${curr_pokemon.moves[1].type.name}`);
    $(`#move2`).attr("pokeNum", `${pokeNum}`);

    $(`#move3Btn`).html(curr_pokemon.moves[2].name.toUpperCase());
    $(`#move3Btn`).addClass(`${curr_pokemon.moves[2].type.name}`);
    $(`#move3`).attr("pokeNum", `${pokeNum}`);

    $(`#move4Btn`).html(curr_pokemon.moves[3].name.toUpperCase());
    $(`#move4Btn`).addClass(`${curr_pokemon.moves[3].type.name}`);
    $(`#move4`).attr("pokeNum", `${pokeNum}`);

    function displayStats(){
        for(var j=0; j<curr_pokemon.stats.length; j++) {
            $(`#${curr_pokemon.stats[j].stat.name}`).html(`${curr_pokemon.stats[j].stat.name}: ${curr_pokemon.stats[j].base_stat}`);
        }
    }
    
}

function dispMove() {
    $(`#movePanel`).removeAttr("hidden");
    $(`#movePanel`).removeClass("normal fighting flying poison ground rock bug ghost steel fire water grass electric psychic ice dragon dark fairy");
    let moveDisp = document.getElementById("moveDisplay");
    let container = document.createElement("div");
    let moveNum = parseInt(this.id.substring(4,5)) - 1;
    let powerpp = document.createElement("p");

    let flavor = document.createElement("p");
    let currChild = moveDisp.childNodes[0];

    $(`#movePanel`).addClass(`${curr_pokemon.moves[moveNum].type.name}`);
    powerpp.innerHTML = `${curr_pokemon.moves[moveNum].type.name} / `+ `${curr_pokemon.moves[moveNum].damage_class.name} / ` + `${curr_pokemon.moves[moveNum].power}` + " Power / "
    + `${curr_pokemon.moves[moveNum].pp}` + " PP";
    flavor.innerHTML = `${curr_pokemon.moves[moveNum].flavor_text_entries[2].flavor_text}`;

     container.appendChild(flavor);
     container.appendChild(powerpp);



     if (currChild != null) {
        moveDisp.replaceChild(container, moveDisp.childNodes[0]);
     } else {
         moveDisp.appendChild(container);
     }


}
//replace a pokemon with a new one
function mulligan() {
    mull = true;
    this.setAttribute("hidden", true);
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
        if(xhr.readyState == 4 && xhr1.status == 200) {
            //process response
            let resp = xhr.responseText;
            let pokemon = JSON.parse(resp);
            let number = parseInt($(`#focus`).attr("class").substring(8,9));
            pokemonTeam[number] = pokemon;
            setPokemonValues(pokemonTeam[number], number+1);
        }
    };
    var url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 712) + 1}/`; 
    xhr.open("GET", url, true);
    xhr.send();
}
//Functions for Party Selection
function clearSelect() {
   let imgs = document.getElementsByTagName("img");
   for(i=0; i < imgs.length; i++) {
       imgs[i].style.border = "";
   }
}
function addSelect(tag) {
    tag.setAttribute("style", "border:2px solid rgb(233, 171, 88)");
}

function buildFormData() {
    var fd = new FormData();
  
    for (var i = 0; i < 3000; i += 1) {
      fd.append('data[]', Math.floor(Math.random() * 999999));
    }
  
    return fd;
}

//Script for starting a battle
function startBattle() {
    //Set up 'loading screen'
    //Create enemy trainer and their team
    //Set up battle screen
    //Enable functionality of battle elements

}
function endBattle(numBattles) {
    //Return to the
}