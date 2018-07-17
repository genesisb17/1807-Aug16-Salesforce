/**
 * @author Guillermo Cidre
 * 
 */

 //JAVASCRIPT uses a concept knowed as type coercion in order to compare and manipulate
 //disparate types. As a loosely typed programming language that is interpreted and not compiled,
 //JS has to accomodate functions that operate on variables of different types.
 var a = 5;
 var b = '5';
 a == b; //TRUE
 a === b; //FALSE

 function truthyOrFalsy(cond){
 if(cond){
    console.log("condition = T")
 }
 else{
    console.log("condition = F")
 }
}
//truthy and falsy
//Falsy - 0, NaN, null, undefined, '', false

//------------operator------------------

//Arithmetic: + - * / %
var mod = 4%2;

// Bitwise: & / >> >>> <<

//10 - 1010
//& 11 - 1011
//10 

//Comparison < > <= >= == === != !==

//Logicalf && || ! !!
/*GUARD operator &&
    -if the first operand is truthy, return the 2nd operand,
        otherwise, it returns the first operand
*/

var currSession = null;
var userInfo = {username: 'gb', password: '123'};
var getUser = function () {
    return currSession && userInfo;
}

/* DEFAULT operator a || b
if a, return a. else return b.
*/
var earlyLeave = 1;
var outTime = 5;
var leaveToday = earlyLeave || outTime;

/* STRINGS ** 
- 0 or more 16 bit characters
- " OR ', but not interchange
- == similar string are equal
- string.length
- charAt, concat, indexOf, replace, split, slice, substring, etc
- search -- regex
- immutable
*/

var str = "hi";
x = str.indexOf('i');

/*ARRAY
- special objects
-length = 1 + last index
*/
var arr = ['hi', 0, NaN, undefined, null, {name: 'Genesis', age: 100000000000}, 235];

/* FUNCTIONS
-objexts
-can be stored in variables, passed as arguments to other functions, created within other functions, and returned from functions
*/
var x = add(3,4);

function add(a, b) {
    return a + b;
}
//alert('hello');

//arrow notation; new in ES6
var multiply = function (x, y) {return x * y};
var multiply = (x,y) => {return x*y};

/*CALLBACK FUNCTION
- AKA a higher order function is a function passed into another function as a parameter.
The callback funciton is called/executed inside of the other function.
*/

var friends = ['me', 'myself', 'I'];
friends.forEach(function(friend, index) {
    console.log(`${index}: ${friend}`)
});

/////////////////////////////////////////////////////////////////////////////////////////
// VAR SCOPE - global, function

function test(){
    var functionScope = "This variable is only accessible in the function test()";
    console.log(functionScope);
    var x = functionScope.split(' ');
}

var globalScope = "This is declared outside of a function and hence is of global scope";

function test2(){
    console.log(globalScope);
    console.log(functionScope);
}

/* CLOSURE 
- a closure is an inner function that has access to the outer enclosing
functionn's variables. the inner function has access to the outer function's
variables and parameters
*/

function showName( firstName, lastName){
    var greeting = "Hello!";

    function fullName(){
        var test = 'inner function';
        return `${greeting} ${firstName} ${lastName}`;
    }
    console.log(test);
    return fullName();
}

function scopes(){
    let func2 = 'this is also funciton scoped';
    var func = 'function scoped'
    if(func.length>5){
        blockScope = 5;
        let blockScope = 10;
        var func = 6;
    }
    console.log(blockScope);
    console.log(func);
}

//HOISTING
