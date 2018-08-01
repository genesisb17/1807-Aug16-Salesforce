window.onload = function() {
    $(`#getPokemon`).on('click', getPokemonTeam);
    $(`.sprite`).attr("src", "../Project 0/img/ball.jpg");
    $(`#enter`).on('click', enter);
    $(`#mulligan`).on('click', mulligan);
    $(`#findOpponent`).on('click', startBattle);
    progressBar = document.getElementById("progress"),
    loadBtn = document.getElementById("getPokemon"),
    progBar = document.getElementById("progress"),
    pokemonTeam = ['','','','','',''],
    enemyTeam = ['','','','','',''],
    numBattles = 0;
    mull=false;
}
var activeAjaxConnections = 0;
var stage = 0;
var battleState = {
playerTeam: [],
enemyTeam: [],
weatherEffects: "none",
}
function enter() {
    $(`#teamInfo`).removeAttr("hidden");
    $(`#briefing`).attr("hidden", true);
}
//Create a random team of pokemon for the player
//Picks randomly from possible configurations of each pokemon
function getPokemonTeam() {
    this.setAttribute("hidden", true);
    //create XHR objects for each pokemon
    let xhr1 = new XMLHttpRequest();
    let xhr2 = new XMLHttpRequest();
    let xhr3 = new XMLHttpRequest();
    let xhr4 = new XMLHttpRequest();
    let xhr5 = new XMLHttpRequest();
    let xhr6 = new XMLHttpRequest();
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
            activeAjaxConnections--;
            //process response
            let resp = xhr1.responseText;
            let pokemon = JSON.parse(resp);
            pokemonTeam[0] = pokemon;
            setPokemonValues(pokemonTeam[0], 1);
        }
    };
    xhr2.onreadystatechange = function (){
        if(xhr2.readyState == 4 && xhr2.status == 200) {
            activeAjaxConnections--;
            //process response
            let resp = xhr2.responseText;
            let pokemon = JSON.parse(resp);
            pokemonTeam[1] = pokemon;
            setPokemonValues(pokemonTeam[1], 2);
        }
    };
    xhr3.onreadystatechange = function (){
        if(xhr3.readyState == 4 && xhr3.status == 200) {
            activeAjaxConnections--;
            //process response
            let resp = xhr3.responseText;
            let pokemon = JSON.parse(resp);
            pokemonTeam[2] = pokemon;
            setPokemonValues(pokemonTeam[2], 3);
        }
    };
    xhr4.onreadystatechange = function (){
        if(xhr4.readyState == 4 && xhr4.status == 200) {
            activeAjaxConnections--;
            //process response
            let resp = xhr4.responseText;
            let pokemon = JSON.parse(resp);
            pokemonTeam[3] = pokemon;
            setPokemonValues(pokemonTeam[3], 4);
        }
    };
    xhr5.onreadystatechange = function (){
        if(xhr5.readyState == 4 && xhr5.status == 200) {
            activeAjaxConnections--;
            //process response
            let resp = xhr5.responseText;
            let pokemon = JSON.parse(resp);
            pokemonTeam[4] = pokemon;
            setPokemonValues(pokemonTeam[4], 5);
        }
    };
    xhr6.onreadystatechange = function (){
        if(xhr6.readyState == 4 && xhr6.status == 200) {
            activeAjaxConnections--;
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
    activeAjaxConnections = 6;
    //send
    xhr1.send();
    xhr2.send();
    xhr3.send();
    xhr4.send();
    xhr5.send();
    xhr6.send();
    progBar.value = 25;

}
//function for enabling screen functionality once Ajax requests are done.
function enable(i) {
    if(i == 0) {
        progBar.value = 100;
        $(`.sprite`).on('click', clearSelect);
        $(`.sprite`).on('click', dispPokemon);    
        $(`.move-btn`).on('click', dispMove);
        $(`#Name`).html("Select a Pokemon to view information");
    }
    if(i == 1) {
        //$(`#loadScreen`).attr("hidden", true);
        clearInterval();
       // $(`#storeScreen`).removeAttr("hidden");
    }
}
/*
Separate function for generating enemy teams
since less work needs to be done than for the player team.
*/
function generateEnemyTeam() {
    //create XHR objects for each pokemon
    let xhr1 = new XMLHttpRequest();
    let xhr2 = new XMLHttpRequest();
    let xhr3 = new XMLHttpRequest();
    let xhr4 = new XMLHttpRequest();
    let xhr5 = new XMLHttpRequest();
    let xhr6 = new XMLHttpRequest();
    activeAjaxConnections = 6;
    //Define callback functions, generates a moveset for each
    var ids = [Math.floor(Math.random() * 712) + 1,
        Math.floor(Math.random() * 712) + 1,
        Math.floor(Math.random() * 712) + 1,
        Math.floor(Math.random() * 712) + 1,
        Math.floor(Math.random() * 712) + 1,
        Math.floor(Math.random() * 712) + 1];


    //callback functions
    xhr1.onreadystatechange = function (){
        if(xhr1.readyState == 4 && xhr1.status == 200) {
            activeAjaxConnections--;
            //process response
            let resp = xhr1.responseText;
            let pokemon = JSON.parse(resp);
            enemyTeam[0] = pokemon;
            determineMoveset(enemyTeam[0], 1);
            displayEnemy(enemyTeam[0], 1);
        }
    };
    xhr2.onreadystatechange = function (){
        if(xhr2.readyState == 4 && xhr2.status == 200) {
            activeAjaxConnections--;
            //process response
            let resp = xhr2.responseText;
            let pokemon = JSON.parse(resp);
            enemyTeam[1] = pokemon;
            determineMoveset(enemyTeam[1], 2);
            displayEnemy(enemyTeam[1], 2);
        }
    };
    xhr3.onreadystatechange = function (){
        if(xhr3.readyState == 4 && xhr3.status == 200) {
            activeAjaxConnections--;
            //process response
            let resp = xhr3.responseText;
            let pokemon = JSON.parse(resp);
            enemyTeam[2] = pokemon;
            determineMoveset(enemyTeam[2], 3);
            displayEnemy(enemyTeam[2], 3);
        }
    };
    xhr4.onreadystatechange = function (){
        if(xhr4.readyState == 4 && xhr4.status == 200) {
            activeAjaxConnections--;
            //process response
            let resp = xhr4.responseText;
            let pokemon = JSON.parse(resp);
            enemyTeam[3] = pokemon;
            determineMoveset(enemyTeam[3], 4);
            displayEnemy(enemyTeam[3], 4);
        }
    };
    xhr5.onreadystatechange = function (){
        if(xhr5.readyState == 4 && xhr5.status == 200) {
            activeAjaxConnections--;
            //process response
            let resp = xhr5.responseText;
            let pokemon = JSON.parse(resp);
            enemyTeam[4] = pokemon;
            determineMoveset(enemyTeam[4], 5);
            displayEnemy(enemyTeam[4], 5);
        }
    };
    xhr6.onreadystatechange = function (){
        if(xhr6.readyState == 4 && xhr6.status == 200) {
            activeAjaxConnections--;
            //process response
            let resp = xhr6.responseText;
            let pokemon = JSON.parse(resp);
            enemyTeam[5] = pokemon;
            determineMoveset(enemyTeam[5], 6);
            displayEnemy(enemyTeam[5], 6);
        }
    };

    //open requests
    var url = `https://pokeapi.co/api/v2/pokemon/${ids[0]}/`; xhr1.open("GET", url, true);
    url = `https://pokeapi.co/api/v2/pokemon/${ids[1]}/`; xhr2.open("GET", url, true);
    url = `https://pokeapi.co/api/v2/pokemon/${ids[2]}/`; xhr3.open("GET", url, true);
    url = `https://pokeapi.co/api/v2/pokemon/${ids[3]}/`; xhr4.open("GET", url, true);
    url = `https://pokeapi.co/api/v2/pokemon/${ids[4]}/`; xhr5.open("GET", url, true);
    url = `https://pokeapi.co/api/v2/pokemon/${ids[5]}/`; xhr6.open("GET", url, true);

    //send
    xhr1.send();
    xhr2.send();
    xhr3.send();
    xhr4.send();
    xhr5.send();
    xhr6.send();

}
function setPokemonValues(pokemon, i) {
    //Party Display
    let image= $(`#sprite${i}`);
    let shiny = Math.floor(Math.random() * 1000) + 1;
    if(shiny % 15 == 0) {
        image.attr("src", pokemon.sprites.front_shiny);
    }
    else {
        image.attr("src", pokemon.sprites.front_default);
    }
    image.attr("alt", pokemon.name);

    //Determine Ability
    activeAjaxConnections++;
    let xhrAbility = new XMLHttpRequest();
    xhrAbility.onreadystatechange = function (){
        if(xhrAbility.readyState == 4 && xhrAbility.status==200){
            activeAjaxConnections--;
            let resp = xhrAbility.responseText;
            let ability = JSON.parse(resp);
            pokemon.abilities = [ability.name, ability.effect_entries[0].effect];
            if(activeAjaxConnections==0) {
                enable(stage);
                stage++;
            }
        }
    }
    let numAbilities = pokemon.abilities.length;
    let abilityNum = Math.floor(Math.random() * numAbilities) + 0;
    var url = `https://pokeapi.co/api/v2/ability/${pokemon.abilities[abilityNum].ability.name}/`;
    xhrAbility.open("GET", url, true);
    xhrAbility.send();
    progBar.value = 80;
    for(i=0; i < 4; i++) {
        determineMoveset(pokemon, i);
    }
    determineRarity(pokemon);
};
//Determine Rarity
function determineRarity(pokemon) {
    let xhrRare = new XMLHttpRequest();
    activeAjaxConnections++;
    xhrRare.onreadystatechange = function (){
        if(xhrRare.readyState == 4 && xhrRare.status == 200){
            activeAjaxConnections--;
            let resp = xhrRare.responseText;
            let rare = JSON.parse(resp);
            pokemon.rarity = rare.capture_rate;
            if(activeAjaxConnections==0) {
                enable(stage);
                stage++;
            }
        }
    }
    var url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}/`;
    xhrRare.open("GET", url, true);

    //send XHTTP request
    xhrRare.send();
}
//Determine Moveset
function determineMoveset(pokemon, slotNum) {
    let xhrMoves = new XMLHttpRequest();
    activeAjaxConnections++;
    xhrMoves.onreadystatechange = function (){
        if(xhrMoves.readyState == 4 && xhrMoves.status == 200){
            activeAjaxConnections--;
            let resp = xhrMoves.responseText;
            let move = JSON.parse(resp);
            pokemon.moves[slotNum] = move;
            if(activeAjaxConnections==0) {
                enable(stage);
                stage++;
            }
        }
    }


    let numMoves = pokemon.moves.length;
    let movesNum = Math.floor(Math.random() * numMoves) + 0;
    var url = `https://pokeapi.co/api/v2/move/${pokemon.moves[movesNum].move.name}/`;
    xhrMoves.open("GET", url, true);

    //send XHTTP request
    xhrMoves.send();
}
function displayEnemy(pokemon, i) {
    let image= $(`#esprite${i}`);
    image.attr("src", pokemon.sprites.front_default);
    image.attr("alt", pokemon.name);
}


function dispPokemon() {
    //Add selection display
    addSelect(this);
    $(`.fa`).removeClass("checked");
    $(`.fa`).removeAttr("hidden");

    //Hide progress bar
    progressBar.setAttribute("hidden", true);
    var sprite = this.getAttribute("id");
    let pokeNum = sprite.substring(6,7);
    pokeNum = parseInt(pokeNum) - 1;

    //Show the Find Battle Button
    $(`#findOpponent`).removeAttr("hidden");

    //Set Focus
    let image= $(`#focus`);
    curr_pokemon = pokemonTeam[pokeNum];
    let rare = curr_pokemon.rarity;
    if(rare < 250) {
        $(`#star1`).addClass("checked");
    }
    if(rare < 200) {
        $(`#star2`).addClass("checked");
    }
    if(rare < 120) {
        $(`#star3`).addClass("checked");
    }
    if(rare < 60) {
        $(`#star4`).addClass("checked");
    }
    if(rare < 20) {
        $(`#star5`).addClass("checked");
    }
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
            $(`#Type1`).html(`${element.type.name}`.toUpperCase());
            $(`#Type2`).html('');
        }

        if(i == 2) {
            $(`#Type2`).removeClass("normal fighting flying poison ground rock bug ghost steel fire water grass electric psychic ice dragon dark fairy");
            $(`#Type2`).addClass(`${element.type.name}`);
            $(`#Type2`).html(`${element.type.name}`.toUpperCase());
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
            $(`#${curr_pokemon.stats[j].stat.name}`).html(`${curr_pokemon.stats[j].stat.name.toUpperCase()}: ${curr_pokemon.stats[j].base_stat}`);
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
    powerpp.innerHTML = `${curr_pokemon.moves[moveNum].type.name.toUpperCase()} / `+ `${curr_pokemon.moves[moveNum].damage_class.name} / ` + `${curr_pokemon.moves[moveNum].power}` + " Power / "
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
        if(xhr.readyState == 4 && xhr.status == 200) {
            //process response
            let resp = xhr.responseText;
            let pokemon = JSON.parse(resp);
            let number = parseInt($(`#focus`).attr("class").substring(23,24));
            pokemonTeam[number] = pokemon;
            setPokemonValues(pokemonTeam[number], number+1);
        }
    };
    let pnumber = parseInt($(`#focus`).attr("class").substring(23,24));
    $(`#sprite${pnumber+1}`).attr("src", "../Project 0/img/ball.jpg");
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
   $(`#movePanel`).attr("hidden", true);
}
function addSelect(tag) {
    tag.setAttribute("style", "border:2px solid rgb(233, 171, 88)");
    $(`#movePanel`).attr("hidden");
}
function quickDisp() {
    //Add selection display
    addSelect(this);
    var sprite = this.getAttribute("id");
    var pokeNum;

    if(/esprite/i.test(this.getAttribute("id"))) {
        pokeNum = sprite.substring(7,8);
        pokeNum = parseInt(pokeNum) - 1;
        curr_pokemon = enemyTeam[pokeNum];
    }
    else {
        pokeNum = sprite.substring(6,7);
        pokeNum = parseInt(pokeNum) - 1;
        curr_pokemon = pokemonTeam[pokeNum];
    }
    /*
    let i=1;
    curr_pokemon.types.forEach(element => {
        if(i == 1) {
            $(`#qType1`).removeClass("normal fighting flying poison ground rock bug ghost steel fire water grass electric psychic ice dragon dark fairy");
            $(`#qType1`).addClass(`${element.type.name}`);
            $(`#qType1`).html(`${element.type.name}`.toUpperCase());
            $(`#qType2`).html('');
        }

        if(i == 2) {
            $(`#qType2`).removeClass("normal fighting flying poison ground rock bug ghost steel fire water grass electric psychic ice dragon dark fairy");
            $(`#qType2`).addClass(`${element.type.name}`);
            $(`#qType2`).html(`${element.type.name}`.toUpperCase());
        }
        i++;
    });
    */

}

//Script for starting a battle
function startBattle() {
    //Set up prebattle screen
    $(`#info`).attr("hidden", true);
    $(`#movePanel`).attr("hidden", true);
    $(".sprite").prop("onclick", null).off("click");
    $(`.sprite`).on('click', quickDisp);
    $(`.sprite`).on('click', clearSelect);
    $(`.move-btn`).attr("hidden", true);
    $(`#enemies`).removeAttr("hidden");
    $(`#spacer`).removeAttr("hidden");
    $(`#findOpponent`).attr("hidden", true);
    //For the presentation, there will be no battle
    //Create enemy trainer and their team
    generateEnemyTeam();
    //display Enemy Team on the Load Screen
    //Set up pre-Battle/Battle Screens


    //Enable functionality of battle elements

}
//Ending a battle
function endBattle(numBattles) {
    /*
    Go back to the Team Info Screen if still in a battle set
    Take player to the Store Screen if between Battle Sets
    */
}

//These functions are used during a battle//

//Player functions
function useMove() {
    var move =  curr_pokemon.moves[parseInt(this.id.substring(4,5)) - 1];
    var effects_list = [/confuse/i, /burn/i, /sleep/i, /poison/i,
                        /infatuate/i, /paralyze/i, /freeze/i, /flinch/i];
    var stat_list = [/evasion/i, /special attack/i, /special defense/i,
                    /attack/i, /defense/i, /speed/i, /accuracy/i];
    var display = "";                
    let effects = move.effect_entries[0].short_effect;
    
    //determine damage_class
    if(move.damage_class.name == "status") {
        //status moves are either beneficial or detrimental based on target
        if(/user/i.test(move.target)) {
            //examine the move's effects for keywords
            effects_list.forEach(element => {
                if(element.test(effects)) {
                    curr_pokemon.active_effect = element.exec(effects);
                    break;
                }
            });
            z = 0;
            /*
            speed 0
            specD 1
            specA 2
            defense 3
            attack 4
            */
            stat_list.forEach(element => {
               let stat = element.exec(move.effect_entries[0].short_effect);
               if(stat) {
                    if(/speed/i.test(stat)) { 
                        curr_pokemon.stats[0].base_stat += Math.round(curr_pokemon.stats[0]*.25, 1);
                        display = `${curr_pokemon.name} raises its speed!`;
                    }
                    if(/special defense/i.test(stat)) { 
                        curr_pokemon.stats[1].base_stat += Math.round(curr_pokemon.stats[1]*.25, 1);
                        display = `${curr_pokemon.name} raises its special defense!`;
                    }
                    if(/special attack/i.test(stat)) { 
                        curr_pokemon.stats[2].base_stat += Math.round(curr_pokemon.stats[2]*.25, 1);
                        display = `${curr_pokemon.name} raises its special attack!`;
                    }
                    if(/defense/i.test(stat)) { 
                        curr_pokemon.stats[3].base_stat += Math.round(curr_pokemon.stats[3]*.25, 1);
                        display = `${curr_pokemon.name} raises its defense!`;
                    }
                    if(/attack/i.test(stat)) { 
                        curr_pokemon.stats[4].base_stat += Math.round(curr_pokemon.stats[4]*.25, 1);
                        display = `${curr_pokemon.name} raises its attack!`;
                    }
               }
            });
        }

    } 
    else {
        /*
        damage moves are either physical or special
            - may also inflict a status ailment
            - can critically hit
        */

        //determine if there is a status ailment
        if(move.effect);
    }
}
function changePokemon() {

}
//AI functions
function AIAbility() {

}
function AIChoosePokemon() {

}
//Battle State functions
function getWeather() {
    return battleState.weatherEffects;
}
function changeWeather(weatherEffect) {
    battleState.weatherEffects = weatherEffect;
}
function pokemonFainted() {

}
function abilityEffects() {

}
