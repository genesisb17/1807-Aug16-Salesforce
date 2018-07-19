window.onload = function () {
    //getPokemon();
    $('#getMovie').on("click", getMovie);
}

function getMovie() {
    var id = $('#movieNum').val();

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        console.log(Date() + " " + xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            $('#cast').innerHTML = '';
            let resp = xhr.responseText;
            let movie = JSON.parse(resp);
            getCharacters(movie);
        }
    }

    //var url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    var url2 = `https://swapi.co/api/films/${id}/`;
    console.log(url2);
    xhr.open("GET", url2, true);

    xhr.send();

    console.log("code after request was sent");
}

function getCharacters(movie) {
    $('#cast').append(document.createElement("H1")).html("<h3>" + movie.title + "</h3>");
    $('#cast').append(document.createElement("br"));
    $('#cast').append(document.createElement("br"));

    for (var i = 0; i < movie.characters.length; ++i) {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && xhr.status == 200){
                let resp = xhr.responseText;
                let character = JSON.parse(resp);
                addCharacter(character);
            }
        }

        xhr.open("GET", movie.characters[i]);

        xhr.send();
    }
}

function addCharacter(character){
    let person = document.createElement("label");
    person.innerHTML = character.name;
    $('#cast').append(person);
    $('#cast').append(document.createElement("br"));
}