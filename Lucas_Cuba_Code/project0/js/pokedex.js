window.onload = () => {
  $('#pokeRun').on("click", pokeRun);
  $('#pokeRandom').on("click", pokeRandom);
}

function pokeRun() {
  let pokeXhr = new XMLHttpRequest();
  let id = $('#dexIn').val();
  $('#dexIn').val('');

  pokeXhr.onreadystatechange = () => {
    console.log(pokeXhr.readyState);
    if (pokeXhr.status == 200 && pokeXhr.readyState) {
      let pokeResponse = JSON.parse(pokeXhr.responseText);
      dexUpdate(pokeResponse);
    }
  }

  pokeXhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${id}`, true);

  pokeXhr.send();
}

function pokeRandom() {
  let pokeXhr = new XMLHttpRequest();
  let id = Math.floor(Math.random() * 801);

  pokeXhr.onreadystatechange = () => {
    console.log(pokeXhr.readyState);
    if (pokeXhr.status == 200 && pokeXhr.readyState) {
      let pokeResponse = JSON.parse(pokeXhr.responseText);
      dexUpdate(pokeResponse);
    }
  }

  pokeXhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${id}`, true);

  pokeXhr.send();
}

function dexUpdate(response) {
  $('#pokeName').text(capital(response.name));

  $('#sprites').attr('hidden', false);
  $('#backShinyFigure, #backDefaultFigure').attr("hidden", false);
  $("#frontDefault").attr('src', response.sprites.front_default);
  if (response.sprites.back_default != null){
    $("#backDefault").attr('src', response.sprites.back_default);
  }
  else {
    $("#backDefaultFigure").attr("hidden", true);
  }
  $("#frontShiny").attr('src', response.sprites.front_shiny);
  if (response.sprites.back_shiny != null){ 
    $("#backShiny").attr('src', response.sprites.back_shiny);
  }
  else {
    $('#backShinyFigure').attr("hidden", true);
  }

  $("#typeAbilitiesHeightDimensions").attr("hidden", false);
  $('#type button').remove();
  for (let i = 0; i < response.types.length; ++i) {
    let item = document.createElement('button');
    item.innerHTML = response.types[i].type.name;
    item.className = "badge badge-pill";
    item.id = response.types[i].type.name;
    $('#type').append(item);
  }

  $('#abilities span').remove();
  $('#abilities small').remove();
  for (let a = 0; a < response.abilities.length; ++a) {
    if (response.abilities[a].is_hidden == true) {
      let item1 = document.createElement('span');
      let item2 = document.createElement('small');
      item1.innerHTML = response.abilities[a].ability.name;
      item2.innerHTML = "Hidden Ability";
      $('#abilities').append(item1);
      $('#abilities').append(item2);
    } else {
      let item = document.createElement('span');
      item.innerHTML = response.abilities[a].ability.name;
      $('#abilities').append(item);
    }
  }

  let chart = new CanvasJS.Chart("statContainer", {
    animationEnabled: true,
    theme: "light1",
    title: {
      text: `Stats for ${capital(response.name)}`
    },
    axisY: {
      title: "Stat Values"
    },
    data: [{
      type: "column",
      showInLegend: false,
      dataPoints: [
        { y: response.stats[0].base_stat, label: response.stats[0].stat.name},
        { y: response.stats[1].base_stat, label: response.stats[1].stat.name},
        { y: response.stats[2].base_stat, label: response.stats[2].stat.name},
        { y: response.stats[3].base_stat, label: response.stats[3].stat.name},
        { y: response.stats[4].base_stat, label: response.stats[4].stat.name},
        { y: response.stats[5].base_stat, label: response.stats[5].stat.name},
      ]
    }]
  });
  chart.render();


}

function capital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getType(url) {
  //ajax for type info
}

function getAbility(url) {
  
}