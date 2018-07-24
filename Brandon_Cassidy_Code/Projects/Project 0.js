const numStars = 200;
window.onload = function(){
    $('checkSafety').on('click',displaySafeState);
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");  
        star.className = "star";
        var xy = getRandomPosition();
        star.style.top = xy[0] + 'px';
        star.style.left = xy[1] + 'px';
        document.body.append(star);
      }//for
}//onload
// Gets random x, y values based on the size of the container
function getRandomPosition() {  
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random()*x);
  var randomY = Math.floor(Math.random()*y);
  return [randomX,randomY];
}

function displaySafeState(){
    
}
