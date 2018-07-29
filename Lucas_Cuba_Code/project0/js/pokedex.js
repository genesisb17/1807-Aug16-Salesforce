//binding event listeners to the two buttons
window.onload = () => {
  $('#pokeRun').on("click", pokeRun);
  $('#pokeRandom').on("click", pokeRandom);
}
//ajax call based on user input
function pokeRun() {
  let pokeXhr = new XMLHttpRequest();
  let id = $('#dexIn').val();
  $('#dexIn').val('');
  $('#loadingModal').modal('toggle');
  $('#type').off();
  $('#abilities').off();

  pokeXhr.onreadystatechange = () => {
    if (pokeXhr.status == 200 && pokeXhr.readyState == 4) {
      let pokeResponse = JSON.parse(pokeXhr.responseText);
      dexUpdate(pokeResponse);
    }
  }

  pokeXhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${id}`, true);

  pokeXhr.send();
}
//random value ajax call
function pokeRandom() {
  let pokeXhr = new XMLHttpRequest();
  let id = Math.floor(Math.random() * 801);
  $('#loadingModal').modal('toggle');
  $('#type').off();
  $('#abilities').off();

  pokeXhr.onreadystatechange = () => {
    if (pokeXhr.status == 200 && pokeXhr.readyState == 4) {
      let pokeResponse = JSON.parse(pokeXhr.responseText);
      dexUpdate(pokeResponse);
    }
  }

  pokeXhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${id}`, true);

  pokeXhr.send();
}

function dexUpdate(response) {
  $('#pokeName').text(capital(response.name));
  let dexInfo = document.createElement('small');
  dexInfo.innerHTML = `Dex #${response.id}`;
  $('#pokeName').append(dexInfo);

  //filling out the sprites section with img urls from the api response. gen 6 and after do not have back sprites, so checks are in place here so that only the right images/figures display
  $('#sprites').attr('hidden', false);
  $('#backShinyFigure, #backDefaultFigure').attr("hidden", false);
  $("#frontDefault").attr('src', response.sprites.front_default);
  if (response.sprites.back_default != null) {
    $("#backDefault").attr('src', response.sprites.back_default);
  }
  else {
    $("#backDefaultFigure").attr("hidden", true);
  }
  $("#frontShiny").attr('src', response.sprites.front_shiny);
  if (response.sprites.back_shiny != null) {
    $("#backShiny").attr('src', response.sprites.back_shiny);
  }
  else {
    $('#backShinyFigure').attr("hidden", true);
  }

  //rendering custom type badges. Assigning information important to the type click even/ajax call
  $("#typeAbilitiesHeightDimensions").attr("hidden", false);
  $('#type button').remove();
  typeUrlArray = [];
  for (let i = 0; i < response.types.length; ++i) {
    let item = document.createElement('button');
    item.innerHTML = capital(response.types[i].type.name);
    item.className = "badge badge-pill";
    item.id = response.types[i].type.name;
    typeUrlArray.push(response.types[i].type.url.toString());
    $('#type').append(item);
  }

  //rendering abilities, checking first for if an ability is hidden. Also assigning information important to the ability click event/ajax call
  $('#abilities span, #abilities small').remove();
  abilityUrlArray = [];
  for (let a = 0; a < response.abilities.length; ++a) {
    if (response.abilities[a].is_hidden == true) {
      let item1 = document.createElement('span');
      let item2 = document.createElement('small');
      item1.innerHTML = capital(response.abilities[a].ability.name);
      abilityUrlArray.push(response.abilities[a].ability.url);
      item2.innerHTML = "(Hidden Ability)";
      $('#abilities').append(item1);
      $('#abilities').append(item2);
    } else {
      let item = document.createElement('span');
      item.innerHTML = capital(response.abilities[a].ability.name);
      abilityUrlArray.push(response.abilities[a].ability.url);
      $('#abilities').append(item);
    }
  }

  //rendering heights and weights 
  $('#heightWeight span').remove();
  let kg = document.createElement('span');
  let m = document.createElement('span');
  kg.innerHTML = formatWeight(response.weight);
  m.innerHTML = formatHeight(response.height);
  $('#heightWeight').append(m);
  $('#heightWeight').append(kg);

  //canvasJS chart for pokemon stats
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
        { y: response.stats[0].base_stat, label: response.stats[0].stat.name },
        { y: response.stats[1].base_stat, label: response.stats[1].stat.name },
        { y: response.stats[2].base_stat, label: response.stats[2].stat.name },
        { y: response.stats[3].base_stat, label: response.stats[3].stat.name },
        { y: response.stats[4].base_stat, label: response.stats[4].stat.name },
        { y: response.stats[5].base_stat, label: response.stats[5].stat.name },
      ]
    }]
  });
  chart.render();

  //collapse loading modal once everything has loaded
  $('#loadingModal').modal('toggle');
  //bind event listeners to type and ability tds as well as modal toggles
  $('#type').on("click", getType);
  $('#type').attr("data-toggle", "modal");
  $('#type').attr("data-target", "#typeModal");

  $('#abilities').on("click", getAbility);
  $('#abilities').attr("data-toggle", "modal");
  $('#abilities').attr("data-target", "#abilityModal");
}

//get type information through ajax calls based on current pokemon type information reference url stored in urlarray
function getType() {
  $("#typeModal .modal-body *").remove();
  $('.modal-loading').attr('hidden', false);
  for (let i = 0; i < typeUrlArray.length; i++) {
    let pokeXhr = new XMLHttpRequest();
    pokeXhr.onreadystatechange = () => {
      if (pokeXhr.status == 200 && pokeXhr.readyState == 4) {
        let pokeResponse = JSON.parse(pokeXhr.responseText);
        //calling DOM update function and passing in response
        typeUpdate(pokeResponse);
        $('.modal-loading').attr('hidden', true);
      }
    }
    pokeXhr.open("GET", typeUrlArray[i], true);
    pokeXhr.send();
  }
}

//modal update function for types
function typeUpdate(response) {

  //updating modal body with type title
  let title = document.createElement('button');
  title.innerHTML = capital(response.name);
  title.className = "badge badge-pill";
  title.id = response.name;
  $("#typeModal .modal-body").append(title);

  //updating modal body with type immunities
  let immunityHeader = document.createElement('h5');
  immunityHeader.innerHTML = "Takes no damage from:";
  $("#typeModal .modal-body").append(immunityHeader);
  if (response.damage_relations.no_damage_from.length == 0) {
    let defaultMsg = document.createElement("p");
    defaultMsg.innerHTML = "This type has no immunities";
    $("#typeModal .modal-body").append(defaultMsg);
  }
  else {
    for (let i = 0; i < response.damage_relations.no_damage_from.length; ++i) {
      let resist = document.createElement("span");
      let type = response.damage_relations.no_damage_from[i].name;
      resist.innerHTML = capital(type);
      resist.className = "badge badge-pill";
      resist.id = type;
      $('#typeModal .modal-body').append(resist);
    }
  }

  //updating modal body with type resistances
  let resistHeader = document.createElement('h5');
  resistHeader.innerHTML = "Takes half damage from:";
  $("#typeModal .modal-body").append(resistHeader);
  if (response.damage_relations.half_damage_from.length == 0) {
    let defaultMsg = document.createElement("p");
    defaultMsg.innerHTML = "This type has no resistances";
    $("#typeModal .modal-body").append(defaultMsg);
  }
  else {
    for (let i = 0; i < response.damage_relations.half_damage_from.length; ++i) {
      let resist = document.createElement("span");
      let type = response.damage_relations.half_damage_from[i].name;
      resist.innerHTML = capital(type);
      resist.className = "badge badge-pill";
      resist.id = type;
      $('#typeModal .modal-body').append(resist);
    }
  }

  //updating modal body with type weaknesses
  let weakHeader = document.createElement('h5');
  weakHeader.innerHTML = "Takes double damage from:";
  $("#typeModal .modal-body").append(weakHeader);
  for (let i = 0; i < response.damage_relations.double_damage_from.length; ++i) {
    let weak = document.createElement("span");
    let type = response.damage_relations.double_damage_from[i].name;
    weak.innerHTML = capital(type);
    weak.className = "badge badge-pill";
    weak.id = type;
    $('#typeModal .modal-body').append(weak);
  }

  //updating modal body with offensive immunities
  let noEffectHeader = document.createElement('h5');
  noEffectHeader.innerHTML = "Deals no damage to:";
  $("#typeModal .modal-body").append(noEffectHeader);
  if (response.damage_relations.no_damage_to.length == 0) {
    let defaultMsg = document.createElement("p");
    defaultMsg.innerHTML = "This type has no offensive immunities";
    $("#typeModal .modal-body").append(defaultMsg);
  }
  else {
    for (let i = 0; i < response.damage_relations.no_damage_to.length; ++i) {
      let noEffect = document.createElement("span");
      let type = response.damage_relations.no_damage_to[i].name;
      noEffect.innerHTML = capital(type);
      noEffect.className = "badge badge-pill";
      noEffect.id = type;
      $('#typeModal .modal-body').append(noEffect);
    }
  }

  //updating modal body with offensive resistances
  let offensiveResistHeader = document.createElement('h5');
  offensiveResistHeader.innerHTML = "Deals half damage to:";
  $("#typeModal .modal-body").append(offensiveResistHeader);
  for (let i = 0; i < response.damage_relations.half_damage_to.length; ++i) {
    let halfDamage = document.createElement("span");
    let type = response.damage_relations.half_damage_to[i].name;
    halfDamage.innerHTML = capital(type);
    halfDamage.className = "badge badge-pill";
    halfDamage.id = type;
    $('#typeModal .modal-body').append(halfDamage);
  }

  //updating modal body with offensive advantages
  let doubleEffectHeader = document.createElement('h5');
  doubleEffectHeader.innerHTML = "Deals double damage to:";
  $("#typeModal .modal-body").append(doubleEffectHeader);
  if (response.damage_relations.double_damage_to.length == 0) {
    let defaultMsg = document.createElement("p");
    defaultMsg.innerHTML = "This type has no offensive advantages";
    $("#typeModal .modal-body").append(defaultMsg);
  }
  else {
    for (let i = 0; i < response.damage_relations.double_damage_to.length; ++i) {
      let doubleEffect = document.createElement("span");
      let type = response.damage_relations.double_damage_to[i].name;
      doubleEffect.innerHTML = capital(type);
      doubleEffect.className = "badge badge-pill";
      doubleEffect.id = type;
      $('#typeModal .modal-body').append(doubleEffect);
    }
  }
}

function getAbility() {
  $("#abilityModal .modal-body *").remove();
  $('.modal-loading').attr('hidden', false);
  for (let i = 0; i < abilityUrlArray.length; i++) {
    let pokeXhr = new XMLHttpRequest();
    pokeXhr.onreadystatechange = () => {
      if (pokeXhr.status == 200 && pokeXhr.readyState == 4) {
        let pokeResponse = JSON.parse(pokeXhr.responseText);
        //calling DOM update function and passing in response
        abilityUpdate(pokeResponse);
        $('.modal-loading').attr('hidden', true);
      }
    }
    pokeXhr.open("GET", abilityUrlArray[i], true);
    pokeXhr.send();
  }
}

function abilityUpdate(response) {

  //updating ability modal to display ability title
  let title = document.createElement('h5');
  title.innerHTML = capital(response.name);
  $('#abilityModal .modal-body').append(title);

  //updating ability modal to display ability description
  let desc = document.createElement('p');
  desc.innerHTML = response.effect_entries[0].effect;
  $('#abilityModal .modal-body').append(desc);
}

//for capitalization
function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
//for formatting weight JSON BS
function formatWeight(kg) {
  kg = kg.toString();
  return kg.substring(0, kg.length - 1) + "." + kg.slice(kg.length - 1) + "kg";
}
//for formatting height JSON BS
function formatHeight(m) {
  m = m.toString();
  return m.substring(0, m.length - 1) + "." + m.slice(m.length - 1) + "m";
}