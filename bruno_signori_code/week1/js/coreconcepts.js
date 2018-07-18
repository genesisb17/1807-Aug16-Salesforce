var a = 5;
var b = "5";

a == b; //true
a === b; //false

function truthyorfalsey(cond){
    if(cond){
        console.log("condition = t")
    } else {
        console.log("condition = f")
    }
}

//truthy and falsy 
//falsy - 0, NaN, null, undefined, '', false
// truthy - everything else 

////////////-----operator-----//////////

//arithmetic: + = * / % 
var mod = 4%2;

/// bitwise: & | >> >>> <<

//comparison < > <= >= == === != !== 

//logical && || ! !!

// guard operator &&
    
//default operator ||
 //if the first operand is truthy , return it otherwise , return the second operand 
 var earlyLeave = 1; 
 var outTime = 5;

 var leaveToday = earlyLeave || outTime;

 /* *******************strings **********************************************
 0 or more 16-bit characters
 " or ' ,
 string.length
 charAt, concat, indexOf, replace, split, slice, substring, etc 
 search -- regex 
 immutable(needs to be reassign)
 
 var str = 'hi'
 x = str.indexOf('i');
 
 */

 /* *****************************array*******************88
arr = ['hi', 4, {key: "value", age:100},"hello"]
unshift, push, pop
 */

 /* **************functions 
 
 - objects
 - can be stored in variables, passed as arguments to other functions,
 
 */
function add(a, b){
    return a + b;
}

//arrow notation, new in ES6

var multiply = function (x, y) { return x * y };

var multiply = (x, y) => { return x * y };

/*callback function 

aka a higher order function, is a function pass into another function as a parameter. the callback function 
is called/executed inside of the other function
*/

var friends = ['me','myself','i'];
friends.forEach(function(friend, index){
    console.log(`${index}: ${friend}`);
});

////////////////variable scopes - global and function/////////////////

function test(){
    var functionscope = "this variable is only accessible in the function test()";
    console.log(functionscope);
    var x = functionscope.split(' ');
}

var globalScope = 'this is declared outside and hence is a global scope'

/* /// closures /////
a closure is an inner function that has access to the outer enclosing function's variables. the inner 
function has access to the outer function's variables and parameters.
when you dont declared a variable( name = 'bruno' instead of var = 'bruno') javascript declares it as global/
var is only function or global scope
let is only block scope
*/

function showName( firstName, lastName){
    var greeting = "hello";

    function fullName(){
        var test = 'inner function';
        return `${greeting} ${firstName} ${lastName}`;
    }
    console.log(test)

    return fullName();
}

function scopes(){
    var func = 'function scoped';
    if(func.length>5){
        let blockScope = 10;
        var func = 6;
    }
    console.log(blockScope) //this wont work because its outside of the blockscope
}

//hoisting