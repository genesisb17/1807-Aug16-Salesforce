window.onload = function(e){
    //    this.alert('js works!');
    
    //document.getElementById('runFib').addEventListener("click", runFib, true);
    document.getElementById('Update').addEventListener("click", updateList, true);
    }
    
    
    //1. Fibonacci
    //Define function: fib(n)
    //Return the nth number in the Fibonacci sequence
    
    //0 1 1 2 3 5 8
    
    function fib(n){
        if(n==0) return 0;
        if(n==1) return 1;
        return fib(n-1) + fib(n-2);
    }
    
    function runFib(){
        let n = document.getElementById('fibN').value;
     //   console.log(fib(n));
     document.getElementById('fibOut').innerHTML = '=' + fib(n);
    }
    
    function updateList(){
        var li = document.createElement("li");
        let item = document.getElementById('list_item').value;
        li.innerText = item;
        var list= document.getElementById('list');
        list.appendChild(li);
        input.value = " ";
        
    }