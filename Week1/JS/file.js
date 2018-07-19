/**
 * @author Genesis Bonds
 */

 /*
    JavaScript is a scripting language for client-side operations
    - supports prototypal interface
    - loosely typed; variable types are dynamically allocated
    - var types: number, string, object, boolean, null, NaN, undefined
      o Can use typeof() to find the data type of a variable
 */

 /* Javascript uses a concept known as type coercion in order to compare
    and manipulate disparate types. As a loosely typed programming
    language that is interpreted and not compiled, JS has to accommodate
    functions that operate on variables of different types. */
var a = 5;
var b = '5';
a == b; // TRUE - forces type coercion and compares variable VALUES disregarding types
a === b; // FALSE - Are they the same exact data type?

function truthyOrFalsy(cond) {  // No need to specify what type the variable is.
    if("hello") { // Condition
        // If true
        console.log("condition = T");
    } else {
        // If false
        console.log("condition = F");
    }
}

// All variables are true unless it has a 0 value.
// Falsy value: 0, NaN, null, undefined, '', false
// True value: everything else

// Anything divided by 0 is true

//------------------ ----------------------- OPERATOR ----------------------------
// Arithmetic + - * /
var mod = 4%2;

// Bitwise: & / >> >>> <<
//& 10 - 10100
//| 11 - 1011
//       1011
// >> << >>>

// Comparison: < > <= >= == === !=
// !== - compares types

// Logical && || ! !!
/* GUARD operator &&
    - if the first operand is thruthy, return the 2nd operand,
        otherwise, it returns the first operand
    ***** returns the actual operand NOT ture or false (unless that's the operand)
*/

// Research session handling
var currSession = null;
var userInfo = {username: 'gb', password: '123' };
var getUser = function(){
    return currSession && userInfo; // currSession is truthy, return userInfo. If not, return nothing.
}

/* DEFAULT OPERATOR ||
    If the first operand is truthy, return it.
    Otherwise, return the second operand.

    */
// Good interview question
var earlyLeave =1;
var outTime = 5;

var leaveToday = earlyLeave || outTime;

/* **************************** STRINGS **************************
- 0 or more 16-bit characters
- " 'OR', but cannot do things like "hello -> 'hello' or "hello"
- == similar strings are equal
- string.length
- charAt, concat, indexOf, replace,
    split (splits string into an array based on delimiter),
    slice, substring, etc    - Learn this
- search -- regex
- strings are immutable in JS.
*/

var str = 'hi';
x =str.indexOf('i');    // Index number of the character array (string)

stringVariable.concat("..."); // Doesn't

/* ARRAY
-- special objects
-- array.lengths
-- unshift, push, and other 'methods' */
var arr = ['hi', 0, NaN, undefined, null, {
    name: 'Genesis', age: 1000000000000
}, 235];        // Arrays can hold multiple data types

// Arrays are objects

arr.unshift
arr.push('end');

/* ******* FUNCTIONS
- objects
- can be stored in variables, passed as arguments to other functions,
 created within other functions, and returned from functions
 */
var x = add(3, 4);

function add(a, b) {
    return a + b;
}

function doThings() {
    alert("HELLO");      // Popup box
    prompt("Message");   // Prompt box for you to enter data. Returns the data.
}

// Arrow notation, new in ES6
var multiply = function(x, y) { return x * y };
var multiply = (x, y) -> {return x * y };   // Shorter notation than above

// Look up this keyword

/* CALLBACK FUNCTION
    AKA a higher-order function, is a function passed into another function
    as a parameter. The callback function is called/executed inside of the other
    function
    */

//.filter()

var friends = ['me', 'myself', 'i']
friends.forEach(function(friend, index){
    console.log('${index}: ${friend}');
});

///////////////////////////////////////////////////////////////
// VAR SCOPES
// 2 scopes in Java: global and function
function test() {
    var functionScope = 'this variable is only accessible in the function test()';
    console.log(functionScope);
    var x = functionScope.split(' ');
}

var globalScope = 'this is declared outside of a function and hence is of global scope';

function test2(){
    console.log(globalScope);
    console.log(functionScope); // Not in scope
}

/* CLOSURE: Nested functions
- a closure is an inner function that has access to the outer enclosing
    function's variables. The inner function has access to the outer
    function's and parameters
*/

function showName( firstName, lastName) {
    var greeting = "Hello";

    function fullName() {
        var test = 'inner function';
        return `$(greeting} ${firstName} $(lastName}`;
    }
    console.log(test);

    return fullName();
}

// let keyword
// Use let more than var
// Shadowing: no variable re-declaration in the same scope

function scope() {
    let func2 = 'this is also function scoped';
    var func = 'function scoped';
    if(func.length>5) {
        // JS will declare "let blockScope" up here since you declared blockScope below
        blockScope = 5;
        let blockScope = 10;
        var func = 6;
    }
    console.log(blockedScope);
    console.log(func);
}

// HOISTING: If you don't declare a variable, it will be a global variable

// Callback function