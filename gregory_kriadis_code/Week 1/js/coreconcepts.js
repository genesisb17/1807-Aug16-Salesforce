/**
 * @author Greg Kriadis
 */

 /*
 JavaScript is a scripting language for client-side operations
    - supporst prototypcal inheritance
    - loosely typed; variable types are dynamically allocated
    - declare variables with keyword var, let, const
    - var types: number, string, object, boolean, null, NaN, undefined
 */

 /* Javascript uses a concept known as type coercion in order to
    compare and manipulate disparate types. As a loosely typed
    programming language that is interpreted and not compiled,
    JS has to accomodate functions that operate on variables
    of different types.

    Use the console inside Google Chrome to run any of the code in this file
*/
 var a = 5;
 var b = '5';
 a == b; // TRUE-> 2x Equals forces type coercion and compares variables' values disregarding types
 a === b; // FALSE -> 3x Equals does not use type coercion

 function truthyOrFalsy(cond) {
    if(cond) {
        console.log("condition = T")
    }
    else{
        console.log("condition = F")
    }
 }

 // TRUTHY AND FALSY
 // Falsy - o, NaN, null, undefined, '', false
 // Truthy - everything else

 ////// ---------------------------OPERATORS------------------------------------

 // Arithmetic: + - * / %
 var mod = 4 % 2;
 
 // Bitwise: & \ >> >>> <<
 // 10 1010   0*1 + 1*2 + 0*4 + 1*8
 //| 11 - 1011

 // Comparison < > <= >= == === != (type coercion) 1== (no type coercion)
 
 // Logical && || ! !!

 /* GUARD operator &&
    - if the first operand is truthy, return the 2nd operand,
    otherwise, it returns the first operand
    **** return the actual operand, NOT true or false (unless that's the operand)
*/

var currentSession = null;
var userInfo = {username: 'gk', password: '123'};
var getUser = function() {
    return currentSession && userInfo;
}

/* DEFAULT OPERATOR ||
    If the first operand is truthy, return it.
    Otherwise, return the second operand.
*/
var earlyLeave = 1;
var outTime = 5;
var leaveToday = earlyLeave || outTime; // If the first operand is falsy, || will take second operand

/* ------------------------ STRINGS ------------------------ 
- 0 or more 16-bit characters
- " OR ', but cannot combine like 'hello"; instead use 'hello' or "hello"
- == similar strings are equal
- string.length
- charAt, concat, indexOf, replace, split, slice, substring, etc.
- search -- regex
- immutable
*/
var str = 'hi';
x = str.indexOf('i');

/* ------------------------ ARRAYS ------------------------
- .push will add an element to the end of an array
- .pop will remove last element of an array
- .shift will remove first element of an array (pop and shift WILL change array length)
*/
var array = ['hi', 0, NaN, undefined, null, 235,
    {name: 'Greg', age: 100}] // This mess of an array is technically possible because of loose typing
array.push('Banana', 'Mango'); // Adds 'Banana' and "Mango' to the end of the above array

/* ------------------------ Functions ------------------------
- objects
- can be stored in variables, passed as arguments to other functions,
    created within other functions, and returned from functions
*/

var x = add(3, 4); // is 7

function add(a, b)) {
    return a + b;
}

function doThings() {
    alert('Hello!');
}

// Arrow notation; new in ES6
var multiply = function(x, y) { return x * y};
var mutiply = (x, y) => {return x * y};

/* Callback Function (AKA higher order function)
- Is a function pass into another function nas a parameter. The callback function
    is called/executed inside of the other function.
*/ 
var friends = ['me', 'myself', 'I'];
friends.forEach(function(friend, index){
    console.log(`${index}: ${friend}`);
    console.log(`this this is a string`); // ` can still be used to enclose string like ' or "
});

/* --------------------- VARIABLE SCOPE --------------------------
*/
function test() {
    var functionScope = 'This variable is only accessible in this test() function';
    console.log(functionScope);
    var x = functionScope.split(' ');
}

var globalScope = 'This is declared outside of a function and hence is of global scope';

function test2() {
    console.log(globalScope);
    console.log(functionScope); // not in scope since it's inside the above test() function, will give error
}

/* CLOSURE
- a closure is an inner function that has access to the outer enclosing function's variable
- The inner function has access to the outer function's variables and parameters
*/

function showName(firstName, lastName) {
    var greeting = "Hello!";

    function fullName() {
        var test = 'inner function';
        return `${greeting} ${firstName} ${lastName}`;
    }
    console.log(test);

    return fullName();
}

function scopes() {
    let func2 = 'this is also function scoped';
    var func = 'function scoped';
    if (func.length > 5) {
        blockScope = 5;
        let blockScope = 10;
        var func = 6;
    }
}

/* --------------------- HOISTING ------------------------

*/