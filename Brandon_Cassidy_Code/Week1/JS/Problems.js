//1.
window.onload = function(e)
{
    //alert('js works!');
    document.getElementById("runFib").addEventListener("click",runFib, true);
    console.log("stuff");
}

function fib (n){
    if(n==0)
    return 0;
    if (n==1)
    return 1;
    return fib(n-1) +fib(n-2);
}
function runFib(){
    let n = document.getElementById("fibN").value;
    document.getElementById("fibout").innerHTML=+fib(n);
    console.log("hi");
    
}

//2. bubble sort
function switcher(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
function bubblesort(ARay){
    var modified;
    do {
      modified = false;
      for(var i = 0; i < array.length; i++) {
        if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
          switcher(array, i, i + 1);
          modified = true;
        }//if
      }//for
    } while(modified); //do while
    return array;
  }//bubblesort

