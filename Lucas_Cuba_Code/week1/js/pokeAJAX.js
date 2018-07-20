window.onload = () => {
    $('#getPokemon').on("click", getPokemon);
    $('#getPlanet').on("click", getPlanet);
};

function getPokemon() {
    /* HOW TO SEND AN AJAX REQUEST AND PROCESS A RESPONSE */

    //STEP 1 - create XHR object
    let xhr = new XMLHttpRequest();
    let id = $('#pokemonId').val();
    $('#pokemonId').val('');

    //STEP 2 - callback function
    xhr.onreadystatechange = () => {
        console.log(Date() + " " + xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            //code to process the response
            let resp = xhr.responseText;
            let pokemon = JSON.parse(resp);
            pokeUpdate(pokemon);
        }
    }

    //STEP 3 - open request
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    xhr.open("GET", url, true);

    //STEP 4 - send() takes a param of request body
    xhr.send();

    //Anything following this will execute as if request never happened; does not wait for response before continuing
    console.log('1-2');
}

function pokeUpdate(poke) {
    $('#pokeName').text(poke.name);
    $('img').attr('src', poke.sprites.front_default);
    $('img').attr('alt', poke.name);
    $('#pokeName').attr('class', '');
}

function getPlanet() {
    let xhr = new XMLHttpRequest();
    let id = Math.floor(Math.random() * 62);

    xhr.onreadystatechange = () => {
        console.log(Date() + " " + xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            //code to process the response
            let resp = xhr.responseText;
            let planets = JSON.parse(resp);
            planetUpdate(planets);
        }
    }

    let url = `https://swapi.co/api/planets/${id}`;
    xhr.open("GET", url, true);
    xhr.send();
}

function planetUpdate(planet) {
    $('#planetName').text(planet.name);
    $('#rotation').text(planet.rotation_period + " hours");
    $('#orbit').text(planet.orbital_period + " days");
    $('#diameter').text(planet.diameter + " miles");
    $('#climate').text(planet.climate);
    $('#gravity').text(planet.gravity);
    $('#terrain').text(planet.terrain);
    $('#water').text(planet.surface_water + "% surface water");
    $('#population').text(planet.population);
}