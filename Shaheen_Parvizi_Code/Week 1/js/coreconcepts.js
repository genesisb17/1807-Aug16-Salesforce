/** 
    @author Shaheen Parvizi
*/

/*
JavaScript is a scripting language for client-side operations 
-supports prototypal inheritance
-loosely typed; variable types are dynamically allocated
-declare variables with keyword var, let, const
-var types: number, string, object, boolean, null, NaN, undefined
*/

//JavaScript uses a concept known as type coercion in order to compare and manipulate disparate types 
//As a loosely typed programming language that is interpreted and not compiled, JS has to accomodate functions that operate on variables of different
//types.

var a= 5;
var b= '5';

a==b;//TRUE, forces type coercion and compares variable values disregarding types

a===b; //false


function truthorfalsy(cond){
if("hello"){
    //if true
    console.log("condition = T")
}else{
    //if false
    console.log("condition = F")
}
}

//Truth of Falsy
//Flasy - 0, NaN, null, undefined, '', false
//Truthy - everything else


///////////////------------------Operator---------------------------------
// Arithmetic: + - * / %
var mod = 4%2;

// Bitwise: & | >> >>> <<
//10: 1010     0*1 + 1*2 + 0*4 + 1*8 
// & 11: 1011
//       1010
// | 11: 1011

//Comparison: < > <= >= == === != !==

//Logical: && || ! !!

/*GUARD operator &&
-if the first operand is truthy, return the 2nd operand,
    otherwise, it returns the first operand
    ****** returns the actual operand NOT true or false (unless thats the operand)
    */

var currSession = null;
var userInfo = {username:"sp", password:'123'};
var getUser = function(){
    return currSession && userInfo;
};

/* DEFAULT OPERATOR ||
        if the first operand is truthy, return it
        otherwies, return the second operand
*/

var earlyLeave = 1;
var outTime = 5;

var leaveToday = earlyLeave || outTime;


/******************** STRINGS *********************************

- 0 or more 16-bit characters
- "OR ', but cannot do things like 'hello" -> 'hello' or "hello"
- == similar strings are equal
- string.length
- charAt, concat, indexOf, replace, split, splice, substring, etc
- search -- regex
- immutable


*/

var str = 'hi';
x= str.indexOf('i');

////////////// ARRAY 

var arr = ['hi', 0, NaN, undefined, null, {name:'Shaheen', age: 24}, 235];


/************************FUNCTIONS
 -objects
 -can be stored in variables, passed as arguments to other functions,
 created within other functions, and returned from functions
 */

 var x = add(3,4); //7

 function add(a,b){
     return a + b;
 }

 function doThings(){
     alert('HELLO');
 }

 //arrow notation; new in ES6
 var multiply = function(x,y){ return x*y};
 var multiply = (x,y) => {return x*y};

 /*CALLBACK FUNCTION
    AKA a higher-order function, is a function passed into another function as a parameter. 
    The callback function is called/executed inside of the other function.
 */


var friends = ["me", 'myself', 'i'];
friends.forEach(function(friend, index){
    console.log(`${index}: ${friend}`);
});

///////////////////////////////////////////////////////////////////////////////////////////////
//VAR SCOPES

function test(){
    var functionScope="this variable is only available in the function test()";
    console.log(functionScope);
    var x = functionScope.split(' ');
}

var globalScope = "this is declared outside of a variable and hence is of global scope";

function test2(){
    console.log(globalScope);
    console.log(functionScope); //not in scope
}

/* CLOSURE
    - a closure is an inner function that has access to the outer enclosing
    function's variables. The inner function has access to the outer function's
    variables and parameters
*/

function showName( firstName, lastName){
    var greeting = "hello";

    function fullName(){
        var test = 'inner function';
        return `${greeting} ${firstName} ${lastName}`
    }

    console.log(test);

    return fullName();
}


function scopes(){
    var func = 'function scoped';
    if(func.length > 5){
        let blockScope = 10;
        var func = 6;
    }

    console.log(blockScope);
    console.log(func);
}


//HOISTING
