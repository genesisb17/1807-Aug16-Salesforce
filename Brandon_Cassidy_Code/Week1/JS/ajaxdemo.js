window.onload=function(){
//    getShip();
    $('#getShip').on('click',getShip);
};

function getShip(){
    //get id from input
    var id=$('#shipID').val();

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
            $('#shipName').html(ship.name);
            $('#shipCost').html(ship.cost_in_credits);
        }//if
    }//function/readystatechange
    //3 open request
    var url=`https://www.swapi.co/api/starships/${id}/`;
    xhr.open("GET",url,true);

    //4 send request, has requestbody param
    xhr.send();

    //following this, execution continues as if request never happened; non-waiting
    //response does not hold up remainder of program
    console.log("CODE AFTER REQUEST WAS SENT");


}//getShip