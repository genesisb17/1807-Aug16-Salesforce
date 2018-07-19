window.onload=function(){
//    getShip();
    $('#getShip').on('click',getShip);
};

function getShip(){
    //get id from input
    var id=$('#shipID').val();
    var searchName = $('#searchName').val();
    console.log("getship " +id + " " + searchName);
    //Send ajax req, process response

    //1 create xhr object
    var xhr = new XMLHttpRequest();

    //2 callback function
    xhr.onreadystatechange = function(){
        console.log(Date() + " " + xhr.readyState);
        if(xhr.readyState==4 && xhr.status==200){
            //response processing code
                if(id<2){

                
                var resp = xhr.responseText;
                let ship = JSON.parse(resp);
                $('#shipName').html("Starship: " + ship.results[0].name);
                $('#shipCost').html("Cost in credits: " + ship.results[0].cost_in_credits);
                }//if not id
            else{
            var resp = xhr.responseText;
            let ship = JSON.parse(resp);
            $('#shipName').html("Starship: " + ship.name);
            $('#shipCost').html("Cost in credits: " + ship.cost_in_credits);
            }//else
            }//if ready and ok
    }//function/readystatechange
    //3 open request
    if(id>2){
    var url=`https://www.swapi.co/api/starships/${id}/`;
    }//if
    if(id<2){
        var url=`https://www.swapi.co/api/starships/?search=${searchName}`;
    }//if
    console.log(url, searchName);
    xhr.open("GET",url,true);

    //4 send request, has requestbody param
    xhr.send();

    //following this, execution continues as if request never happened; non-waiting
    //response does not hold up remainder of program
    console.log("CODE AFTER REQUEST WAS SENT");


}//getShip