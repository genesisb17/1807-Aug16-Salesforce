window.onload = function() {
    $(`#getPokemon`).on('click', getPokemon);
    $(`.sprite`).on('click', clearSelect);
    $(`.sprite`).on('click', dispPokemon);
    $(`.sprite`).attr("src", "../img/ball.jpg");
}
var pokemonTeam = ['','','','','',''];
//Create a random team of pokemon
//Picks randomly from possible configurations
function getPokemon() {
    this.setAttribute("hidden", true);
    //create XHR objects
    xhr1 = new XMLHttpRequest();
    xhr2 = new XMLHttpRequest();
    xhr3 = new XMLHttpRequest();
    xhr4 = new XMLHttpRequest();
    xhr5 = new XMLHttpRequest();
    xhr6 = new XMLHttpRequest();

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

    //send
    xhr1.send();
    xhr2.send();
    xhr3.send();
    xhr4.send();
    xhr5.send();
    xhr6.send();

    //anything below here will execute as if request never happened
    //does not wait for response before executing
    function setPokemonValues(pokemon, i) {

        //Party Display
        let image= $(`#sprite${i}`);
        image.attr("src", pokemon.sprites.front_default);
        image.attr("alt", pokemon.name);


        //Determine Ability
        let xhrAbility = new XMLHttpRequest();
        xhrAbility.onreadystatechange = function (){
            let resp = xhrAbility.responseText;
            let ability = JSON.parse(resp);
            pokemon.abilities = [ability.name, ability.effect_entries[0].effect];
        }
        let numAbilities = pokemon.abilities.length;
        let abilityNum = Math.floor(Math.random() * numAbilities) + 0;
        var url = `https://pokeapi.co/api/v2/ability/${pokemon.abilities[abilityNum].ability.name}/`;
        xhrAbility.open("GET", url, true);
        xhrAbility.send();


        //Determine Moveset
        function determineMoveset(pokemon, slotNum) {
            let xhrMoves = new XMLHttpRequest();
            xhrMoves.onreadystatechange = function (){
                let resp = xhrMoves.responseText;
                let move = JSON.parse(resp);
                pokemon.moves[slotNum] = move;
            }
            let numMoves = pokemon.moves.length;
            let movesNum = Math.floor(Math.random() * numMoves) + 0;
            var url = `https://pokeapi.co/api/v2/move/${pokemon.moves[movesNum].move.name}/`;
            xhrMoves.open("GET", url, true);
            xhrMoves.send();
        }
        for(i=0; i < 4; i++) {
            determineMoveset(pokemon, i);
        }
    };
}

function dispPokemon() {
    addSelect(this);
    var sprite = this.getAttribute("id");
    let pokeNum = sprite.substring(6,7);
    pokeNum = parseInt(pokeNum) - 1;
    //Set Focus
    let image= $(`#focus`);
    image.attr("src", pokemonTeam[pokeNum].sprites.front_default);
    image.attr("alt", pokemonTeam[pokeNum].name);
    $(`#Name`).html(pokemonTeam[pokeNum].name.charAt(0).toUpperCase() + pokemonTeam[pokeNum].name.substring(1));
    //Display Types
    let i=1;
    pokemonTeam[pokeNum].types.forEach(element => {
        if(i == 1) {
            $(`#Type1`).html(`${element.type.name}`);
            $(`#Type2`).html('');
        }
        if(i == 2) {$(`#Type2`).html(`/${element.type.name}`)}
        i++;
    });
    function dispMove(id) {
        let element = document.getElementById(id);
        let pokeNum = element.getAttribute("pokeNum");
        let moveNum = parseInt(element.getAttribute("id").substring(4,5)) - 1;
        let desc = document.createElement("p");
        let pp = document.createElement("p");
        let power = document.createElement("p");
        let damageClass = document.createElement("p");
        let type = document.createElement("p");
        type.innerHTML = `${pokemonTeam[pokeNum].moves[moveNum].type.name}`;
        damageClass.innerHTML = `${pokemonTeam[pokeNum].moves[moveNum].damage_class.name}`;
        desc.innerHTML = `${pokemonTeam[pokeNum].moves[moveNum].effect_entries[0].effect}`;
        power.innerHTML = `${pokemonTeam[pokeNum].moves[moveNum].power}`;
        pp.innerHTML = `${pokemonTeam[pokeNum].moves[moveNum].pp}`;
        element.appendChild(type);
        element.appendChild(damageClass);
        element.appendChild(desc);
        element.appendChild(power);
        element.appendChild(pp);
    
    }

    $(`#desc`).html(pokemonTeam[pokeNum].abilities[0].toUpperCase() + ": " 
                    + pokemonTeam[pokeNum].abilities[1]);
    $(`#move1`).html(pokemonTeam[pokeNum].moves[0].name.toUpperCase());
    $(`#move1Btn`).html(pokemonTeam[pokeNum].moves[0].name.toUpperCase());
    $(`#move1`).attr("pokeNum", `${pokeNum}`);
    dispMove("move1");
    $(`#move2`).html(pokemonTeam[pokeNum].moves[1].name.toUpperCase());
    $(`#move2Btn`).html(pokemonTeam[pokeNum].moves[1].name.toUpperCase());
    $(`#move2`).attr("pokeNum", `${pokeNum}`);
    dispMove("move2");
    $(`#move3`).html(pokemonTeam[pokeNum].moves[2].name.toUpperCase());
    $(`#move3Btn`).html(pokemonTeam[pokeNum].moves[2].name.toUpperCase());
    $(`#move3`).attr("pokeNum", `${pokeNum}`);
    dispMove("move3");
    $(`#move4`).html(pokemonTeam[pokeNum].moves[3].name.toUpperCase());
    $(`#move4Btn`).html(pokemonTeam[pokeNum].moves[3].name.toUpperCase());
    $(`#move4`).attr("pokeNum", `${pokeNum}`);
    dispMove("move4");
}


//Functions fo Party Selection
function clearSelect() {
   let imgs = document.getElementsByTagName("img");
   for(i=0; i < imgs.length; i++) {
       imgs[i].style.border = "";
   }
}
function addSelect(tag) {
    tag.setAttribute("style", "border:2px solid rgb(233, 171, 88)");
}