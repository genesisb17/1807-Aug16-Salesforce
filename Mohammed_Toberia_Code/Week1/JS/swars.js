window.onload = function(){
   
    $("#getStarwars").on('click', getStarwars);
};

function getStarwars(){

    // get id from input
    var id= $('#starwarsId').val();

    /* HOW TO SEND AN AJAX REQUEST AND PROCESS THE RESPONSE: 
    */

    // STEP 1 - create xhr object using ajax
    var xhr = new XMLHttpRequest();

    // STEP 2 - callback function
    xhr.onreadystatechange = function(){
        console.log(Date() + " " + xhr.readyState);
        if(xhr.readyState == 4 && xhr.status == 200){
            // ready state checks to see if status reaches 200 and goes through each step successfully
            // CODE TO PROCESS RESPONSE
            resp = xhr.responseText; // JSON STRING REPRESENTING STAR WARS
            starwars = JSON.parse(resp); // PARSE RESPONSE INTO JS OBJECT            
            setSwarsValues(starwars); // MANIPULATE DOM WITH POKE PROPERTIES
        }
    }

    // STEP 3 - open request
    var url = `https://swapi.co/api/people/${id}/`;
    xhr.open("GET", url, true);


    // STEP 4 - send() <---- takes param of request body
    xhr.send();

    //ANYTHING FOLLOWING THIS WILL EXECUTE AS IF REQUEST NEVER HAPPENED
    // DOES NOT WATI FOR RESPONSE BEFORE CONTINUING
    console.log("CODE AFTER REQUEST WAS SENT");
}

function setSwarsValues(star){
    // manipulate DOM with response
    $('starwarsName').html(starwars.name);
    var image = $('#starwarsImg');
    image.attr("src", starwars.sprites.vehicles);
    image.attr("alt", starwars.name);
}