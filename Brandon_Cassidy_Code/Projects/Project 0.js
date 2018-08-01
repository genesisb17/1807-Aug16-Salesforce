const numStars = 200;

//Numbers for dict:
//23,22,21,13,12,11,10,9,5,15
// const dict={1:"5",
//             2:"9",
//             3:"10",
//             4:"11",
//             5:"12",
//             6:"13",
//             7:"21",
//             8:"22",
//             9:"23",
//             10:"15"
//             }

window.onload = function(){
  populateOptions();
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");  
        star.className = "star";
        var xy = getRandomPosition();
        star.style.top = xy[0] + 'px';
        star.style.left = xy[1] + 'px';
        document.body.append(star);
      }//for
      $('#getShip').on('click',getShip);
}//onload
// Gets random x, y values based on the size of the container
function getRandomPosition() {  
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random()*x);
  var randomY = Math.floor(Math.random()*y);
  return [randomX,randomY];
}
function populateOptions(){
    //1 create xhr object
    console.log("popopts");
    var xhr = new XMLHttpRequest();

    //2 callback function
    xhr.onreadystatechange = function(){
        console.log(Date() + " " + xhr.readyState);
        if(xhr.readyState==4 && xhr.status==200){
            //response processing code
              var resp = xhr.responseText;
              let ships = JSON.parse(resp);
              let numShips=1;
              for(var shipnum in ships.results){
                let selectShip = document.createElement('option');
                let ship = ships.results[shipnum];
                selectShip.text=ship.name;
                urlBreakdown = ship.url.split('/');
                selectShip.value = urlBreakdown[5];
                console.log(selectShip.value);
                $('#searchName').append(selectShip);
                numShips++;
              }
            }//if ready and ok
    }//function/readystatechange
  
    //3 open request
    var url=`https://www.swapi.co/api/starships`;
    console.log(url);
    xhr.open("GET",url,true);
      //4 send request, has requestbody param
    xhr.send();
}//populateOptions

function getShip(){
  //get id from input
  var id=$('#searchName').val();
  console.log("getship " +id);
  $('#showCrew').html('');
  $('#showSize').html('');
  $('#showCost').html('');
  $('#showName').html('');
  $('#content').removeClass("content");
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
            // let shipName = document.createElement('output');
            // let shipCost = document.createElement('output');
            // let shipLength = document.createElement('output');
            // let shipCrew = document.createElement('output');
            $('#showCrew').html('Crew size:  ' +ship.crew);
            $('#showSize').html('Length(in meters):  ' +ship.length);
            $('#showCost').html('Cost(in credits):  ' +ship.cost_in_credits);
            $('#showName').html(ship.name);
            // console.log(shipCrew);
            // console.log(shipCost);
            $('#content').addClass("content");
            // console.log(ship.name + "ship name");
            // console.log(ship.cost_in_credits + "ship cost");
          }//if ready and ok
  }//function/readystatechange

  //3 open request
  var url=`https://www.swapi.co/api/starships/${id}/`;
  console.log(url);
  xhr.open("GET",url,true);

  //4 send request, has requestbody param
  xhr.send();

  //following this, execution continues as if request never happened; non-waiting
  //response does not hold up remainder of program
  console.log("CODE AFTER REQUEST WAS SENT");


}//getShip


