/**
 * @author Lucas Cuba
 */

 //Javascript uses a concept known as type coercion in order to compare and manipulate disparate types. As a loosely typed programming lanugauge that is interpreted and not complied, JS has to accomodate functions that operate on varibales of different types. 
 
 var a = 5;
 var b = '5';

 a == b; //true - forces type coercion and compares variable values disregarding types
 a === b; //false - doesn't use type coercion and compares types

 
 function truthyOrFalsy(cond) {
    if (cond) {
        console.log("condition = T")
    } 
    else {
        console.log("condition = F")
    }
}

//Truthy and Falsy
//Falsy - 0, NaN, null, undef, '', false
//Truthy - everything else...literally

//Operators//

//arithmatic: + - * / %
const mod = 4%2;

//bitwise: & | >> >>> <<
// 10 - 0101 0*1 + 1*2 + 0*4 + 1*8
// | 11 - 1011
//

//comparison < > <= >= == === != !==

//logical && || ! !!

/*Guard Operator &&
    - if the first operand is truthy, return the 2nd operand, otherwise, it returns the first operand
*/

let currSession = null;
let userInfo = {username: 'gb', password: '123'};
const getUser = () => {
    return currSession && userInfo;
}

/*Default Operator ||
    - if the first operand is truthy, return it otherwise, return the second operand
*/

let earlyLeave = 1;
let outTime = 5;
let leaveToday = earlyLeave || outTime; //evals to 1, the first operand


//Strings//


/*
- 0 or more 16-bit characters
- "OR', but cannot do things like 'hello" -> 'hello' or "hello"
- == similar strings are equal
- string.length
- charAt, concat, indexOf, replace, split, slice, substring, etc
- search -- regex
- immutable. cannot change by operating. have to reassign
*/

let str = "hi";
x = str.indexOf("i");


//Array//
/*
- special objects
- 0 indexed. last index is length - 1
*/
let arr = ["hi", 0, NaN, undefined, null, {name: 'Lucas', age: 24}, 235]; //this is valid!


// Functions //
/*
- objects
- can be stored in variables, passed as arguments to other functions, created within other functions, and returned from functions
*/

function add(a, b) {
    return a + b;
}

const x = add(3, 4);

//arrow notation: lambdas in ES6

const multiply = function(x,y) {return x * y};
const multiplyES6 = (x,y) => {return x*y};

// Callback Function //
/*
- AKA a higher-order function, is a function passed into another function as a parameter. The callback function is called/executed inside of the other function.
*/

let friends = ["me", "myself", "I"];
friends.forEach((friends, index) => {
    console.log(`${index}: ${friend}`);
});


//-----------------------------------------------------------//

//Variable Scopes

function test() {
    var functionScope = "this variable is only accessible in the function test()";
    console.log(functionScope);
    var x = functionScope.split(" ");

    var globalScope = "this is declared outside of a function and hence is of global scope";
}
function test2() {
    console.log(globalScope);
    console.log(functionScope); //not in scope
}


//Closure//

/*
- a closure is an inner function that has access to the outer enclosing function's variables. The inner function has access to the outer function's variables and parameters
*/

function showName(firstName, lastName) {
    var greeting = "Hello!";

    function fullName() {
        var test = "inner function";
        return `${greeting} ${firstName} ${lastName}`;
    }
    console.log(test);

    return fullName();
}

function scopes() {
    var func = 'function scoped';

    if (func.length > 5) {
        let blockScope = 10;
        var func = 6;
    }
    console.log(blockScope); //evals error because blockscope is only availbale in if block
    console.log(func);
}
//Hoisting//




