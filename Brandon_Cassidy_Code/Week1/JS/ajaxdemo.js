window.onload=function(){
//    getShip();
    $('#getShip').on('click',getShip);
};

function getShip(){
    //get id from input
    var id=$('#shipID').val();
    if(!id){
        var searchName = $('searchName');
    }//if
    //Send ajax req, process response

    //1 create xhr object
    var xhr = new XMLHttpRequest();

    //2 callback function
    xhr.onreadystatechange = function(){
        console.log(Date() + " " + xhr.readyState);
        if(xhr.readyState==4 && xhr.status==200){
            //response processing code
            var resp = xhr.responseText;
            let ship = JSON.parse(resp);
            $('#shipName').html("Starship: " + ship.name);
            $('#shipCost').html("Cost in credits: " + ship.cost_in_credits);
        }//if
    }//function/readystatechange
    //3 open request
    if(id>0){
    var url=`https://www.swapi.co/api/starships/${id}/`;
    }//if
    if(searchName){
        var url=`https://www.swapi.co/api/starships/?search=${searchName}/`;
    }//if
    xhr.open("GET",url,true);

    //4 send request, has requestbody param
    xhr.send();

    //following this, execution continues as if request never happened; non-waiting
    //response does not hold up remainder of program
    console.log("CODE AFTER REQUEST WAS SENT");


}//getShip