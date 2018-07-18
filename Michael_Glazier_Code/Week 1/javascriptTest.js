/**
 * @author Michael Glazier
 */

 var a = 5;
 var b = '5';
 a == b; /*compares value*/ /*evalutates to true*/
 a === b /**compares type */ /**evaluates to false */

 function trueOrFalse(cond){
     if(cond){
        console.log("condition = T");
     }
     else{
        console.log("condition = F");
     }
    }

    var x = addEventListener(3, 4);

    function add(a, b){
        return a + b;
    }
    
    function doThings(){
        alert('HELLO');
    }

    //arrow notation
    var multiply = function(x, y){return x * y};
    var multiply = (x, y) => {return x*y};
  
    /* CALLBACK FUNCTION
    AKA a higher order function, is a function pass into another function as a parameter. The callback function is called/executed inside of the other function*/
    var friends = ['me', 'myself', 'i'];
    friends.forEach(function(friend, index){
        console.log(`${index}: ${friend}`);
    })

    //var scopes
    function test(){
        var functionScope = 'this variable is only accesible in the function test()';
        console.log(functionScope);
        var x = functionScope.split(' ');
    }

    var globalScope = 'this variable is declared outside of a variable ad hence is a global scope';
    function test2(){
        console.log(globalScope);
        console.log(functionScope); //not is scope :(
    }

    /**CLOSURE */
    /** a closure is an inner function that access to the outer enclosing function's variables. The inner function has accesss to the outer function's varaibles ad parameters */
    function showName(firstName, lastName){
        var greeting = "hello!";
        function fullName(){
            var test = 'inner function';
            return `${greeting} ${firstName} ${lastName}`
        }
        console.log(test);
        return fullName();
    }

    function scopes(){
        let func2 = 'this is also function scoped';
        var func = 'function  scoped';
        if(func.length>5){
            let blockScope = 10;
            var func = 6;
        }
        console.log(blockScope); //this will cause a runtime error
        console.log(func);
    }

    //HOISTING