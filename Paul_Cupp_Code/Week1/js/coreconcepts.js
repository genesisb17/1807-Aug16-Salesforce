/**
 * @author Paul Cupp
 */

/*
Javascript is a scripting language for client-side operations
- supports prototypal inheritance
- loosely typed; variable types are dynamically allocated
- declare variables with keyword var, let, const
- var types: number, string, object, boolean, null, NaN, undefined
*/

/* JAVASCRIPT uses a concept known as type coercion in order to compare
and manipulate disparate types.  As a loosely typed programming language that
is interpreted and not compiled, JS has to accomodate functions that operate
on variables of different types.
*/
var a = 5;
var b = '5';
a == b; // TRUE forces type coercion and compares variable values, while disregarding types

a === b; // FALSE

function truthyOrFalsy(cond) {
    if(cond) { // condition
        // if true
        console.log("condition = T");
    }
    else {
        //  if false
        console.log("condition = F");
    }
}

// TRUTHY AND FALSY 
// Falsy values: 0, NaN, null, undefined, '', false
// Truthy values: everything else

//////// -------------------------OPERATOR----------------------------------------

// Arithmetic: + - * / %
var mod = 4%2; 

// Bitwise: & | >> >>> <<

// Comparison < > <= >= == === != !==

// Logical && || ! !!

/*GUARD operator &&
    -if the first operand is truthy, return the 2nd operand,
    otherwise it returns the first operand
    ********* returns the actual operand, NOT true or false (unless thats the operand)
*/

var currSession = null;
var userInfo = {username: 'gb', password: '123'};
var getUser = function(){
    return currSession && userInfo;
}

/* DEFAULT OPERATOR ||
    if the first operand is truthy, return it
    otherwise, return the second operand.
*/
var earlyLeave = 1;
var outTime = 5;

var leaveToday = earlyLeave || outTime;

/* ******** STRINGS ***************
    - 0 or more 16-bit characters
    - " OR ' , but cannot do like 'hello" -> "hello" OR 'hello'
    - == similar strings are equal
    - string.length
    - charAt, concat, indexOf, replace, split, slice, substring, etc
    - search -- regex
*/

var str = 'hi';
x = str.indexOf('i');

/////////// ARRAY
-- special objects

var arr = ['hi', 0, NaN, undefined, null, {name: 'Paul', age: 22}, 235];


/* ********* FUNCTIONS *******
    - objects
    - can be stored as variables, passed as arguments to other functions,
      created within other functions, and returned from functions
*/

function add(a, b) {
    return a + b;
}

var x = add(3, 4); //7

function doThings() {
    alert('HELLO!');
}

// arrow notation, new in ES6
var multiply = function(x, y) {return x*y};
var multiply = (x, y) => {return x*y};

/* CALLBACK FUNCTION 
    AKA a higher-order function, is a function passed into
    another function as a parameter.  The callback function
    is called/executed inside of the other function.
*/

var friends = ['me', 'myself', 'i'];
friends.forEach(function(friend, index) {
    console.log(`${index}: ${friend}`);
});

/// VAR SCOPES: global, function

function test() {
    var functionScope = 'this variable is only accessible within this function';
    console.log(functionScope);
    var x = functionScope.split(' ');
}

/* CLOSURE
 - a closure is an inner function that has access to the outer enclosing function's
 variables.  The inner function has access to the outer function's variables and parameters
*/

function showName(firstName, lastName) {
    var greeting = "Hello!";

    function fullName(){
        var test = 'inner function';
        return '${greeting} ${firstName} ${lastName}';
    }
    console.log(test);
    return fullName();
}

function scopes(){
    var func = 'function scoped';
    if(func.length>5){
        blocksScope = 5;

        let blockScope = 10;
        var func = 6;
    }
    console.log(blockScope);
    console.log(func);
}

// HOISTING
