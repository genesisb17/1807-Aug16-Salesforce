window.onload = function () {
    $("#getSw").on('click', getSw);
};

function getSw() {
    //get id from input
    var id = $('#swId').val();

    /* HOW TO SEND AN AJAX REQUEST AND PROCESS THE RESPONSE:
    */

    //STEP 1- create XHR object
    var xhr = new XMLHttpRequest();

    //STEP 2 - callback function
    xhr.onreadystatechange = function () {
        console.log(Date() + " " + xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            //CODE TO PROCESS RESPONSE
            resp = xhr.responseText;
            sw = JSON.parse(resp);
            setSwValues(sw);
        }
    }
    //STEP 3 - open request
    var url = `https://swapi.co/api/people/${id}/`;
    xhr.open("GET", url, true);

    //STEP 4 - send() <-- takes param of request body
    xhr.send();

    //ANYTHING FOLLOWING THIS WILL EXECUTE AS IF REQUEST NEVER HAPPENED
    //DOES NOT WAIT FOR RESPONSE BEFORE CONTINUING
    console.log("CODE AFTER REQUEST WAS SENT");


}

function setSwValues(starWars) {
    //manipulate DOM with response
    $('#swName').html("<b>Name:</b> " + sw.name);
    $('#swHeight').html("<b>Height:</b> " + sw.height);
    $('#swMass').html("<b>Mass: </b>" + sw.mass);
    $('#swGender').html("<b>Gender:</b> " + sw.gender);
    var pic = $('#swImg');
    //pic.attr("src", sw.sprites.front_shiny);
    pic.attr("alt", sw.name);
}

