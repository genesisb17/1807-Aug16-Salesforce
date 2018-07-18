/** 
*@author Jonathan Ponce
*
*/

/* 
javacript is a language for client side operations.
- Support prototypal inheretince.
- loosly typed; variabe types are dynamically allocated.
- declare varibales with keyword var, let, const
- var types: number, String, object, boolean, null, NaN, underfined.
*/

// Javascript uses a concept know as type coercion in order to 
// to comparre and manipulate disparate type. As a loosly typed programmin
//  language that is interpreted and not compiled.
// Js needs to be accompadted functions that operate on variables of different types. 
var a = 5;
var b = '5';

a == b; //TRUE: forces type coercion and compares variables disregarding types.

a === b; // FALSE: compares type as well as value of variable. 

function truhyOrFasly(cond) {


    if (cond) {
        //if true 
        console.log("condition = T")
    }
    else (
        console.log("condistion = F")
    )
}

// TRUTHY AND FALSY 
// FASLEY: 0, NaN, null, underfined, '', false
// TRUTHY: Everything else. 


//---------------------------------------Operator--------------------------------

// Arithmetic: =, +, -, /, %  

var mod = 4%2;

// Bitwise: &, \, >>(RIght SHIFT), >>>, <<(LEFT SHIFT), 
// 10: 1010 - 0*2 + 1*2, + 0*4 + 1*8
// 11: 1011
// 1010 & 1011 = 1010
// 1010 | 1011 = 1011

// Comparison: <, >, <=, >=, ==, ===, !=, !==

// Logical: &&, ||, !, !! 

/* GUARD operator &&
    - if the first operand is truthy, return the 2nd operand, 
        otherwise, it retunrs the first operand. 

*/

var currSession = null; 
var userInfo = {username: 'jpc', password: '123'};
var getUser = function(){
        return currSession && userInfo;
}


// DEFAULT operator ||
//  if the first operand is truthy retrun it, 
    // otherwise return the second operand
var earlyLeave = 1;
var outTime =5; 
var leaveToday = earlyLeave || outTime;


/* -----------------------------Strings------------------------------

- 0 or more 16-bit characters
- " or ' but cannot due things like 'Hello" or 'Hello"
- similar strrings are equal. 
- string.length
- charat, concatm indexOf, replace, split, slice, substring, etc
- search -- regex

*/

var str = 'hi';
x = str.indexOf('i');


//---------------------------Arrays----------------------------
/* 
    -- Special Objects. 
        - arr.length = 1 + last element in array. 

*/

var arr = ['hi', 0, Nan, null, undefined, { name: 'Jonathan', age: 20},225];


///* --------------------FUNCTIONS--------------------
/* - objects:
        - can be stored as variables, passed as arguments to other functions, 
            created within other functions, and returned from functions.
            */


var x = add(3,4); // 7 
function add(a,b){
   return a+b;
}

function doThings(){
    alert('HELP');
}

// Arrow notation, new is ES6 

var multiply = function(x,y){return x* y};
var multiply = (x,y) => {return x*y};

// CALLBACK FUNCTION 
/*
    Also known as a higherorder function, is a function passed into another function as a paramerer. 
    the callback function is called/executed inside the other function.

*/
/*
var frineds = ['me', 'you','i'];
freinds.forEach(function(frineds, index){
    console.log(`${index}: ${friend}`)
}
    
});*/

//------------------------------------------------------------------------------------------------------

// Var Scopes - global, function
function test() {
    var functionScope = 'this variable only accessible in the function Test90';
    console.log(functionScope);
    var x = functionScope.split(' ');

}

globalScope = 'This is declared outside of a variable and hence is of global scope';

function test2(){
    console.log(functionScope);
    console.log(globalScope);
}

// CLOSURE 
/* - closure is an inner function that has acces to the outer enclosing function's varaibles. 
- the inner function has acces to the outer Function's variables and parameters. 

*/

function showName(firstName, lastName){
    var greeting = "Hello!";
    
    function fullName(){
        var test = 'inner function';
        return `${greeting} ${firstName} ${lastName}`;

    }
    console.log(test);

    return fullName;
}

function scops(){
    let func2 = 'this is also funciton scoped';
    var func = 'function scoped';
    if(func.length > 5 ){
        blockScope = 10;
        let blockScope = 7;
        var func = 6;
    }
    console.log(blockScope);
    console.log(func);
}