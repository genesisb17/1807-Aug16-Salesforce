@author Neil Mallick

/*

JavaScript is a scripting language for client-side operations
-supports prototypical inheritance
- loosely typed; variable types are dynamically allocated
- declare variables with keyword var, let, const
- var types: number, string, object, boolean, null, NaN, undefined
*/

/* JAVASCRIPT uses a concept known as type coercison in order to 
compare and manipulate disparate types. As a loosely typed programming language that is interpreted
and not compiled, JS has to accommodate functions that operate on variables of different types. */

//Every object in Javascript has a truthy or falsy value

var a = 5; 
var b = '5'; 
a == b; //Forces TYPE COERSION and compares variable VALUES disregarding type - TRUE 
a === b; //Forces a direct comparison - FALSE

function truthyorFlasy(cond){
if(cond){
    coonsole.log("condition = T")
}
else{
    console.log("condition = F")
}
}

//TRUTHY AND FALSY
//Falsy - 0, NaN, null, undefined, '', false
//Truthy - everything else

//----- OPERATOR ------

//Arithmetic + - * / %

var mod = 4%2;

//Bitwise: & \ >> >>> -unsigned binary shift operator <<

//comparison < > <= >= == === != <--- Type coercion        !==   <-- Compare types

//logical && || ! !!

/*GUARD OPERATOR &&
    -IF the first operand is truthy, return the 2nd operand
        otherwise it returns the first operand
    ****** returns the actual operand NOT true or false (unless that's the operand)
*/

var currSession = null;
var userInfo = {username: 'gb', password: '123'};
var getUser = function(){
    return currSession && userInfo;
}

/* Default operator ||
  if the first operand is truthy, return it
  otherwise, return the second operand
*/

var earlyLeave = 1;
var outTime = 5;

var leaveToday = earlyLeave || outTime;

/********STRINGS ******* *
- 0 or more 16-bit characters
- '' OR ', but cannot do things like "hello" -> 'hello' or "hello"
- == similar strings are equal
- string.length
- charAt, concat, indexOf, replace, split, splice, substring, etc.
- search -- regex
- immutable string -- can't just operate on it, need to actually change it
*/

var str = 'hi';
x = str.indexOf('i');
str.indexOf('fefe')

/*/////////////// ARRAY []
-- special objects
-- arr.lengh 1 + last element in array
*/
var arr = ['hi', 0, NaN, undefined, null, {
    name: 'Neil', age: 100}, 235]
}

/**** FUNCTIONS
-objects 
-can be stored in variables, passed as arguments to other functions,
created within other functons, and returned from functions
*/

var x = add(3,4);

function add(a, b){
    return a+b;
}

function doThings(){
    alert('HELLO!');
}

//arrow notation; new in ES6
var multiply = function(x, y) {return x * y};
var multiply = (x, y) => {return x*y};

/* CALLBACK FUNCTION
 AKA a higher order function is a fucntion pass into another function as a parameter. The callback function is called
 /executed inside of the other function.
 */

var friends = ['me', 'myself', 'i']
friends.forEach(function(friend, index){
    console.log(index + ': ' + friend);
    console.log(`${index}: ${friend}`);
    console.log(`hi this is a string`);
});

//var scopes - global, function

function test(){
    var functionScope = 'this variable is only acceissible in the function test';
    console.log(functionScope);
    var x = functionScope.split(' ');
}

var globalScope = 'this is declared outside of a function and hence is of global scope';

function test2(){
    console.log(globalScope);
    console.log(functionScope); //not in scope
}

/* CLOSURES

- a closure is an inner function that has access to the outer enclosing function's variables. The inner
function has access to the outer function's variables and parameters
*/

function ShowName( firstName, lastName){
    var greeting = "Hello";
    
    function fullName(){
        var test = 'inner function';
        return `${greeting} ${firstName} ${lastName}`;
    }
    console.log(test);

    return fullName();
}

let x = 10;

function scopes(){
    //let func2, func
    let func2 = 'this is also a function scoped';
    var func = 'function scoped';
    if(func.length>5){
        //let blockscope;
        blockscope = 5;

        let blockScope = 10; //only accessible inside that block
        var func = 6;
    }
  //  console.log(blockScope);
    console.log(func);
}

//HOISTING 
//if you don't declare it, it assumes a certain scope