/**
 * @author Steven He
 */

/*
 declare variables with var, let, const
 var rtpes: number, string, boolean, null, NaN, undefined
*/

/* JS uses a concept known as type coercion in order to compare and manipulate multiple disparate types.
   As a loosely typed programming language that is interpereted and not compiled, JS has to accomodate
   functions that operate on vars of different types.
*/
var a = 5;
var b = "5";
a == b; //forces type coercion and compares vars VALUES disregarding types
a === b; //compares with type and value (exact same obj)

function truthyorfalsy(cond) {
    if (cond) {
        console.log("condition = T")
    }
    else {
        console.log("condition = F")
    }
}

//TRUTHY AND FALSY
//Falsy: 0, NaN, undefined, '', false
//Truthy: everything else

//OPERATORS

//Arithmetic: + - * / %
var mod = 4%2;

//Bitwise: & | >> >>> <<
//10     1010    0*1 + 1*2 + 0*4 + 1*8
//& 11   1011
//       1010

//10 | 11
//       1011

//>> and <<, add 0 to either back or front, shift other digits

//Comparison < > >= == === != !==

//Logical && || ! !!

/* GUARD operator &&
        -if the first operand is truthy, return 2nd operand,
        otherwise returns first
        ***** returns the actual operand, not true/false
*/

var currSession = null;
var userInfo = {username: "gb", password: "123"};
var getUser = function() {
    return currSession && userInfo
}

/* DEFAULT operator ||
    if the first operand is truthy, return it
    otherwise, return second operand
*/

var earlyLeave = 1;
var outTime = 5;
var leaveToday = earlyLeave || outTime;

/*STRING METHODS
0 or more 16-bit characters
" OR ', but cannot do things like 'hello" -> 'hello' or "hello"
== similar strings are equal
string.length
charAt, concat, indexOf, replace, split, slice, substring, etc
search -- regex
immutable
*/

var str = "hi"
x = str.indexOf("i")
str.concat(" hello"); //WONT WORK
str = str.concat(" hello");
 
/*ARRAY []
special objects, arr.length = 1 + last element
*/

var arr = ["hi", 0, NaN, undefined, null, "Steven"];
//functions include append, push, pop

/* FUNCTIONS
-objects
-can be stored in variables, passsed as arguments to other functions,
created within other functions, and returned from functions
*/

function add(a,b) {
    return a + b;
}

function doThings() {
    alert("Hello!");
}

//arrow notation; new in ES6
var multiply = function(x,y) {return x*y};
var multiply = (x,y) => {return x*y};

/* CALLBACK function
    AKA higher-order function, function passed into another funciton as paramater.
    Callback func is called/executed inside other function.
*/

var friends = ["me", "myself", "I"];
friends.forEach(function(friend, index) {
    console.log("${index}: ${friend}");
});

function test() {
    var functionScope = "this variable is only accessible in the func test()"
    console.log(functionScope);
    var x = functionScope.split(' ');
}

var globalScope = 'this is declared outside of a var and hence is global'

function test2(){
    console.log(globalScope);
    console.log(functionScope); // inaccessible
}

// PRIOR TO ES6, SCOPES ARE GLOBAL AND FUNCTION

/* CLOSURE
    a closures is an inner function that has access to the outer enclosing function's vars and params
*/

function showName(firstName, lastName) {
    var greeting = "Hello!";

    function fullName() {
        var test = "inner function";
        return "${greeting} ${firstName} ${lastName}";
    }
    console.log(test);

    return fullName();
}

function scopes() {
    let func2 = "this is also function scoped";
    var func = "fuction scoped";
    if (func.length > 5) {
        let blockScope = 10;
        var func = 6;
    }
    console.log(blockScope);
    console.log(func);
}

