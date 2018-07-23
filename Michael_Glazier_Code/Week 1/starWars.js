window.onload = function(){
    //getPokemon();
    $("#getStarship").on('click', getStarShip);
}
function getStarShip(){

    //get id from input
    var id = $('#starshipId').val();
    console.log(Date() + " code before request");
    //**HOW TO SEND AJAX REQUEST AND PREOCESS THE RESPONSE */
    var xhr = new XMLHttpRequest(); //step 1: create xhr object

    //step 2: callback function
    xhr.onreadystatechange = function(){
        console.log(Date() + " " + xhr.readyState);
        if(xhr.readyState == 4 && xhr.status == 200){
            //code to process response
            let resp = xhr.responseText;
            starship = JSON.parse(resp);

            fillTable(starship);      

         
        }
        else if(xhr.readyState == 4 && xhr.status == 404){
            alert("That piece of junk?! Try a different ship.");
        }
    }

    //step 3: open request
    var url = "https://swapi.co/api/starships/"+ id + "/";
    xhr.open("GET", url, true);

    //Step 4: send
    xhr.send();

    //anything following here will execute as if request never happed. Does not wait for response.
    console.log(Date() + " code after request");
}

function fillTable(starship){

    let tName = document.getElementById("tName");
    if(tName.hasChildNodes){
        for(let x = 0; x < tName.children; x++){
            if(tName[x].tagName =='td'){
                tname.remove();
            }
        }   
    }
    let dName = document.createElement("td");
    let name = starship.name;
    dName.innerText = name;
    dname.
    tName.appendChild(dName);

    let tModel = document.getElementById("tModel");
    let dModel = document.createElement("td");
    let model = starship.model;
    dModel.innerText = model;
    tModel.appendChild(dModel);

    let tMan = document.getElementById("tMan");
    let dMan = document.createElement("td");
    let man = starship.manufacturer;
    dMan.innerText = man;
    tMan.appendChild(dMan);

}