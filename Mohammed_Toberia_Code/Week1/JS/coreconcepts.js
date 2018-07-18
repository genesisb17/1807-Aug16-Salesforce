/**
 * @author Mohammed Toberia
 */

 /* 
 JavaScript is a scripting language for client-side operations
 - supports prototypal inheritance
 - loosely typed; variable types are dynamically allocated
 - declare variables with keyword var, let, const
 - var types: numnber, sring, object, boolean, null, NaN, undefined
 */

/*/ JavaScript uses a concept known as type coercion in order
        to compare and manupulare disparate types. As a loosely 
        typed language that is interpreted and not compiledm JS has
        to be accomodate funcitons that operate on variables of
        different types.

 */

 var a = 5;
 var b = '5';
 a == b; //TRUE == forces type coercion and compares variable VALUES disregarding data types

 a === b; //FALSE

 function truthyOrFalsey(cond){

 
    if("hello"){
        console.log("condition = T")
    }
    else(
         console.log("condition = F")
    )
 }

 //TRUTHY AND FALSY
 //Falsy - 0, Null, NaN, undefined, '', false
 // Truthy - everything else

 ////////---------------------OPERATOR------------------

// Arithmetic: + - * / %
var mod = 4%2;

// Bitwise: & | >> >>> << 
// 10 = 1010 in binary
// & 11 - 1011

// >>> this affects things mostly for negative numbers

// Comparison < > <= >= == === != !==

// Logical Operators && || ! !! 

/*GUARD Operator &&
    - if the operand is truthy, return the 2nd operand,
        otherwise, it returns the first operand
    - If it the first part is true, it will proceed to the second part
    ***** returns the actual operant NOT true or false (unless that's the operand)
*/

var currSession = null; // evaluates to falsey
var userInfo = {username: 'gb', password: '123'};
var getUser = function(){
    return currSession && userInfo;
}

/* DEFAULT OPERATOR ||
    If the first operand is truthy, return it
    othersie, return the second operand
*/

var earlyLeave = 1;
var outTIme = 5;

var leaveToday = earlyLeave || outTime;


/* ****** STRINGS*************
 - 0 or more 16-bit characters
 - 'OR', but cannot edo things like 'hello' -> 'hello' or "hello"
 - == similar strigns are equal
 - string.length
 - charAt, concat, indexOf, replace, split, slice, substring, etc.
 - search -- regex (regular expression)
 - Strings in java are immutable ( in order to change value i would have to change it)
 
 */

 var str = 'hi';
 x = str.indexOf('i');


 /* /////////////ARRAY[] 
 -- special objects
 -- arr.length = 1 + last element in array
 */
 var arr = ['hi', 0, NaN, undefined, null, {
     name: 'Mohammed', age: 10000000
    }, 235];


/**********FUNCTIONS
- objects
- can be stored as variables, passed as arguments to other functions, 
created within other funcitons, and returned from functions
*/

var x = add(3,4); // 7

function add(a, b){
    return a + b;
}

function doThings(){
    alert('HELLO!');
}

// ARROW NOTATION; new in ES6
var multiply = function(x,y) {return x * y};
var multiply = (x,y) => {return x * y};


/*CALLBACK FUNCTION --- INTERVIEW QUESTIONS!!!!!!!!!!!!!!!!!!
    AKA a higher order function, is a function passed into
    another function as a parameter. The callback function
    is called/exectured inside of the other function.
*/

var friends = ['me', 'myself', 'i'];
friends.forEach(function(friend, index){
    console.log(index + `: ` + friend)
    console.log('${index}: ${friend}');
    console.log('hi this is a string');
});

/////////////////////////////////////////////////////////////////////////////////////

// VAR SCOPES

function test(){
    var functionScope = 'this variable is only accessible in the function test()';
    console.log(functionScope);
    var x = functionScope.split(' ');
}

var globalScope = 'this is declared outside of a function and hence is of global scope';

function test2(){
    console.log(globalScope);
    console.log(functionScope); // not in scope
}

/* CLOSURE
 - a closure is an inner funciton that has access to the outer enclosing
    function's variables. The inner function has access to the outer function's 
    variables and parameters.
*/

function showName(firstName, lastName){
    var greeting = "Hello!";

    function fullName(){
        var test = 'inner function';
        return `${greeting} ${firstName} ${lastName}`;
    }

    console.log(test);

    return fullName();        
}



function scopes(){
    // let func2, func
    var func2 = 'this is also function scoped';
    var func = 'function scoped'

    if(func.length > 5){
        // let blockscope;
       blockScope = 10;
       let blockScope = 10;
       var blockScope = 20;
        var func = 6;
    }
    console.log(blockScope);
    console.log(func);
}


/*HOISTING
- brings up declarations
*/





