const numStars = 200;
const picURLs = {"Death Star" : "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1izkue_bc561fd4.jpeg?region=0%2C0%2C1200%2C675",
                "CR90 Corvette" : "https://steamuserimages-a.akamaihd.net/ugc/385415243847790290/26703058FD9F4273238FF5CBDC4C8DB8D8B05849/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C637%3A358&composite-to=*,*%7C637%3A358&background-color=black",
                "Star Destroyer" : "https://cdn.shopify.com/s/files/1/0747/3829/products/mV0110_1024x1024.jpeg?v=1485014193",
                "Sentinel-class landing craft" : "https://vignette.wikia.nocookie.net/starwars/images/5/5b/Imperial_Sentinel-class_shuttle.png/revision/latest?cb=20161008235432",
                "Millennium Falcon" : "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/A_screenshot_from_Star_Wars_Episode_IV_A_New_Hope_depicting_the_Millennium_Falcon.jpg/250px-A_screenshot_from_Star_Wars_Episode_IV_A_New_Hope_depicting_the_Millennium_Falcon.jpg",
                "Y-wing" : "https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864&width=768",
                "" : ""};
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
