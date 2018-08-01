// Code inspired by https://youtu.be/c_ohDPWmsM0

window.onload = function () {
	$("#startGame").on('click', startGame);
	$("#proceed").on('click', getValue);
	$('#newGame').on('click', newGame);
	$('#getScore').on('click', getScore);
	$('#return').on('click', toStartMenu);

	populateButtons();
};

var interval = null;

function intervalManager(flag) {
	if (flag == true)
		interval = setInterval(countUp, 1000);
	else
		clearInterval(interval);
}

function ajaxRequestLevels(id) {
	let xhr = new XMLHttpRequest();
	reset();

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			resp = xhr.responseText;
			levels = JSON.parse(resp);
			let memory_array = levels.cards;
			newBoard(memory_array);
		}
	}
	let url = `http://localhost:3000/levels/${id}`;
	xhr.open("GET", url, true);
	xhr.send();
}

var memory_array = [];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var flipped_tiles = 0;
Array.prototype.memory_tile_shuffle = function () {
	var i = this.length, j, temp;
	while (--i > 0) {
		j = Math.floor(Math.random() * (i + 1));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	}
}
function newBoard(memory_array) {
	intervalManager(true);
	tiles_flipped = 0;
	var output = '';
	memory_array.memory_tile_shuffle();
	for (var i = 0; i < memory_array.length; i++) {
		output += '<div id="tile_' + i + '" onclick="memoryFlipTile(this,\'' + memory_array[i] + '\')"></div>';
	}
	document.getElementById('board').innerHTML = output;
}

function memoryFlipTile(tile, val) {
	if (tile.innerHTML == "" && memory_values.length < 2) {
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		flipped_tiles++;
		if (memory_values.length == 0) {
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if (memory_values.length == 1) {
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if (memory_values[0] == memory_values[1]) {
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
				memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if (tiles_flipped == 24) {
					alert("Congrats! You won!");
					$('#newGame').attr("hidden", false);
					intervalManager(false);
					ajaxRecordScore();
				}

			} else {
				function flip2Back() {
					// Flip the 2 tiles back over
					var tile_1 = document.getElementById(memory_tile_ids[0]);
					var tile_2 = document.getElementById(memory_tile_ids[1]);
					tile_1.style.background = 'url(unicorn.jpg) no-repeat';
					tile_1.innerHTML = "";
					tile_2.style.background = 'url(unicorn.jpg) no-repeat';
					tile_2.innerHTML = "";
					// Clear both arrays
					memory_values = [];
					memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}

function newGame() {
	document.getElementById('board').innerHTML = "";
	$('#newGame').attr("hidden", true);
	$('#board').attr("hidden", true);
	$('#clock').attr("hidden", true);
	$('#start').attr("hidden", false);
}

function pad(val) {
	let valString = val + "";
	if (valString.length < 2) {
		return "0" + valString;
	} else {
		return valString;
	}
}

function countUp() {
	++totalSeconds;
	let sec = pad(totalSeconds % 60);
	let min = pad(parseInt(totalSeconds / 60));

	let time = `\xa0\xa0\xa0${min}:${sec}`;

	document.getElementById('runTime').innerHTML = time;
}

function reset() {
	document.getElementById('runTime').innerHTML = `\xa0\xa0\xa0\xa000:00`;
	totalSeconds = 0;
}

var totalSeconds = 0;

function populateButtons() {
	for (let i = 1; i <= 3; i++) {
		ajaxRequestButtons(i);
	}
}

function ajaxRequestButtons(id) {
	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			resp = xhr.responseText;
			levels = JSON.parse(resp);
			document.getElementById(id).setAttribute("value", levels.id);
			document.getElementById(`${id}span`).innerHTML = levels.name;
		}
	}
	var url = `http://localhost:3000/levels/${id}`;
	xhr.open("GET", url, true);
	xhr.send();
}


function startGame() {
	$('#start').attr("hidden", true);
	$('#selection').attr("hidden", false);	
}

function toStartMenu(){
	$('#scoreTable').attr("hidden", true);
	$('#start').attr("hidden", false);
	$('#return').attr("hidden", true);
}

function getScore() {
	$('#start').attr("hidden", true);
	$('#scoreTable').attr("hidden", false);
	ajaxRetrieveScore();
	$('#return').attr("hidden", false);
}

function getValue() {
	let x = document.getElementsByName("level");
	let id = "";
	for (var i = 0, length = x.length; i < length; i++) {
		if (x[i].checked) {
			id = x[i].value;
			ajaxRequestLevels(id);
			$('#selection').attr("hidden", true);
			$('#board').attr("hidden", false);
			$('#clock').attr("hidden", false);
			break;
		}
	}
}

// Get Date
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();

if (dd < 10) {
	dd = '0' + dd
}
if (mm < 10) {
	mm = '0' + mm
}
today = mm + '/' + dd + '/' + yyyy;
//

function ajaxRecordScore() {
	let text = $('#runTime').text();
	text = text.replace(/\s/g, '');
	let user = {
		time: text,
		tiles_flipped: flipped_tiles,
		date: today
	}
	let req = new XMLHttpRequest();
	req.onreadystatechange = function () {
		console.log(req.status);
		if (req.status == 201 && req.readyState == 4) {
			console.log(req.responseText);
		}
	}
	req.open("POST", "http://localhost:3000/scores", true);
	req.setRequestHeader("Content-type", "application/json");
	req.send(JSON.stringify(user));
}

function ajaxRetrieveScore() {
	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			resp = xhr.responseText;
			let allScores = JSON.parse(resp);
			var col = [];
			for (var i = 0; i < allScores.length; i++) {
				for (var key in allScores[i]) {
					if (col.indexOf(key) === -1) {
						col.push(key);
					}
				}
			}

			// CREATE DYNAMIC TABLE.
			var table = document.createElement("table");

			// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

			var tr = table.insertRow(-1);

			for (var i = 0; i < col.length - 1; i++) {
				var th = document.createElement("th");

				var word = String(col[i]).toLowerCase();
				word = col[i].replace("_", " ");

				word = word.replace(/(^| )(\w)/g, function (x) {
					return x.toUpperCase();
				});

				th.innerHTML = word;
				tr.appendChild(th);
			}

			for (var i = 0; i < allScores.length; i++) {

				tr = table.insertRow(-1);

				for (var j = 0; j < col.length - 1; j++) {
					var tabCell = tr.insertCell(-1);
					tabCell.innerHTML = allScores[i][col[j]];
				}
			}

			// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
			var divContainer = document.getElementById("scoreTable");
			divContainer.innerHTML = "";
			divContainer.appendChild(table);
		}

	}
	let url = `http://localhost:3000/scores`;
	xhr.open("GET", url, true);
	xhr.send();
}
