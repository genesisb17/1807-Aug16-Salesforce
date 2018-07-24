window.onload = () => {
  $('#pokeRun').on("click", pokeRun);
}

function pokeRun() {
  let pokeXhr = new XMLHttpRequest();
  let id = $('#dexIn').val();
  $('#dexIn').val('');

  pokeXhr.onreadystatechange = () => {
    if (pokeXhr.status == 200 && pokeXhr.readyState) {
      let pokeResponse = JSON.parse(pokeXhr.responseText);
      dexUpdate(pokeResponse);
    }
  }

  pokeXhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${id}`);

  pokeXhr.send();
}

function dexUpdate() {

}
