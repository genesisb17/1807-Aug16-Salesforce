const clock = document.getElementById('clock');
window.setInterval(function(){
  clock.innerText = new Date().toLocaleTimeString();
}, 250);
