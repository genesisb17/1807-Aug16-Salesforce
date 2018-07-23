window.onload = function(){
    $("#getClass").on('click', getClass);
};

function getClass(){
    var id=$('#class').val();

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        console.log(Date() + " " + xhr.readyState);
        if(xhr.readyState == 4 && xhr.status ==200){
            resp = xhr.responseText; //JSON STRING REPRESENTING POKEMON
            Class = JSON.parse(resp); //PARSE RESPONSE INTO JS OBJECT
        }
    }

    var url = `http://www.dnd5eapi.co/api/classes/${id}/`;
    xhr.open("GET", url, true);

    xhr.send();

    console.log("CODE AFTER REQUEST WAS SENT");
}

function get_instruments(){
    var ul = $("proficiency_list")
}

/*
function ajaxComplete(listOfWords){
    var ul = $("<ul />");
    for(var i = 0; i < listOfWords.length; i++)
        ul.append("<li>" + listOfWords[i] + "</li>");
    $("#someDiv").html(ul);
}*/