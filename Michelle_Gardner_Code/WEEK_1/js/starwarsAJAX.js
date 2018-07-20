window.onload = function(){
    // getStarWars();
    $("#getSWChar").on('click', getStarWars);
}


function getStarWars(){

    //get id from input
    var id = $('#characterId').val(); 

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        // to see the change
        console.log(Date() + " " + xhr.readyState);

        if (xhr.readyState == 4 && xhr.status == 200) {
            // Code to process response
            resp = xhr.responseText; //global var, JSON string representing pokemon
            people  = JSON.parse(resp); 
        }
    }
    var url = `https://swapi.co/api/people/${id}`;

    xhr.open("GET", url, true);
    xhr.send();

    console.log("TADA");

}
