/**
 * * @author Sunny
 
 */
/* JS is a scripting language for client-side ops
    -supports prototypeal inhertiance
    -loosely typed; variable
    -declare variables with keyword var, let, const
    -var types: number, string, object, boolean, null, NaN, undefined

*/

//JavaScript uses a conc. known as type coercion in order 
// to compare and manipulate disparate types. As a loosely 
// typed [rpgramming lanhuage that is interpreted and not compiled, JS
// has to accomodate functions that operate on variables of different
//types

var a = 5;
var b = '5';
a == b;//TRUE-forces type coercion and compares variale values disregarding types
a === b;//False

function truthyOrFalsy(cond) {
    if(cond){
        //if true
        console.log("conditon = T")
     }
     else{
         //if false
         console.log("condition = F")
     }
}
//everything in js has either truthy or falsy value..
//TRUTHY AND FALSY
//FALSY - 0, NaN, null, undefined, '', false
//TRUTHY - everything else




////--operator--////

//ARithmetic: + -*/%
var mod = 4%2;

//bitwise: & \ >> >>> <<
//10 1010 )*1 + 1*2 + 0*4 + 1*8
//& 11 - 1011
         1010
//| 11 1011

// Comparison < > <= >= == === != !==

//Logical && || ! !!

/* GUARD operator &&
    -if the first operandis truthy, return the 2nd operand,
    otherwise, it erturns the first operand
    **** returns the actual operand not true or false*/

var currSession = null;
var userInfo = {username: 'st', pasword: '23'};
var getUSer = function(){
    return currSession && userInfo;
}

/** DEfault operator || 
 * if the first operand is truthy, retuen it
 * prgerwise, return the second operand
 */
var earlyLeave = 1;
var outTime = 5;

var leaveToday = earlyLeave || outTime;

/*Strings//
0 or more 16-bit characters
- "OR', but cannot do things like 'hello"-> 'hello' or "hello"]
- == similar strings are equla
- string.length
-charAt, concat, indexOf, replace, split, slice, substring, etc.
search -- regex
*/

var str = 'hi';
x= str.indexOf('i');
/////Arrays
/*arr.length= 1+last element in array */
var arr = ['hi',0,NaN,undefined, null, {
    name: 'sunny', age: 23
}, 200];
arr.unshift('first');

//Functions//
/**
 *  objects 
 * can be stored in variables, passed as arguments, o other functions,
 * created within other functions and reutrned from functions
 * 
 */
var x = add(3,4);
 function add(a,b){
     return a + b;
 }
 function doThings(){
     alert('Hello');
 }

 //arrow notation; new in ES6
 var multiply = function(x,y) { return  x * y};
 var multiply = (x,y) => {return x*y};

 //callback function
/* AKA a higer order functionm us a function pass into another function as a parameter. The callvack function is called/executed inside of the other function*/ 
var friends = ['me','myself','i'];
friends.forEach(function(friend,index){
    console.log(`${index} : ${friend}`);
});


////////
//VAR SCOPES

function test(){
    var functionScope = 'This variable is onlt acessible in the function test';
    console.log(functionScope);
    var x = functionScope.split(' ');
}
var globalScope = 'This is declared out side of a function and hence it is glo scope';


function test2(){
    console.log(globalScope);
    console.log(functionScope);
}

//CLOSURES
/*
closure is a inner function that has access to the outer enclosing function's variables.
 The inner functino has acess to the outer function's variables and parameters
*/

function showName (firstName, lastName){
var greeting = "Hello";

function fullName(){
    var test = 'inner function';
    return `${greeting} ${firstName}${lastName}`;
}
console.log(test);
return fullName();
}

function scopes(){
   //let func2, func
    let func2 = 'this is also function scoped';
    var func = 'function scoped';
    if(func.length>5){
        //let blockscope;
        blockScope = 5;
        let blockScope = 10;
        var func = 6;
    }
    console.log(blockScope);
    console.log(func);
}
//Hoisting
