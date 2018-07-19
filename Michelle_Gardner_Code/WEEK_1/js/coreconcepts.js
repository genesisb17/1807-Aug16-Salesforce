/**
 * @author Michelle Gardner
 * 
 */

 /* 
 JS is a scripting lanauge for client side operations
 -supports protoypal inheritance
 -is loosely typed; meaning that variable types are dynamically allocated
 -delcare variables with keyword var, let, const
 -var types: numbers, stirngs, object, boolean, null, NaN, undefined
 */


// JavaScript uses a concept known as Type Coercion in order to compare and manipulte disparate types. 
// As a loosely typed programming language that is interpreted and not comiled, JS has to be accomodate function that oerate on variables of different types.
 var a = 5;
 var b = '5';
 a == b; // true; ==  forces type coercion and compares variable VALUES disgregarding types. 

 a === b;// false; === , don't coerce one type into another, we want to know if they are actually the same. 


function truthyOrFalsy(cond){
    if(cond){
     //if true 
        console.log("condition = T")
    }
    else{
        // if false
        console.log("condition = F")
    }
}

// Turthy or Falsy 
// Falsy - 0, Nan, Null, undefined, '' (emphty string), false
// Truthy - everything else. 

/* OPERATOR */ 
// Arithmetic: + _ * % /
var mod = 4%2;

// Bitwise: & \ >> (left shift), >>> (unsigned shift), << (right shift)
// 10 : 1010 = 0^1 + 1^2 + 0^4 + 1^8

// Comparison < > <= >= == === !=

// Logical && || ! !!
/* GUARD operator && 
    - if the first operand is turhty, return the 2nd operand,
    otherwise, it returns th first operand
    ** returns th actual operand NOT true or false (unless that's the operand)
*/

var currSession = null; 
var userInfo = {username: 'mg', password: 'password'};
var getUser = function(){
    return currSession && userInfo;
}

/* Default Operator || 
    If the first operand is turthy, return it
    otherwise, return the second operand
*/

var earlyLeave = 1;
var outTime = 5;

var leaveToday = earlyLeave || outTime;

/* STRINGS */
/* 
    - 0 or more 16-bit characters
    - " OR ' but can't use " ' at the same time. -> "hello" or 'hello'
    - == similar strings are equal
    - string.length
    - charAt, concat, indexOf ,replace, split, slice, substring, etc
    - search -- regular expressions 
    - immutable
*/

var str = 'hi';
x = str.indexOf('i');


/* ARRAY */
/**
 *  -special objects
 *  - arr.length = 1+last elemnt in array
 */
var arr = ['hi', 0, NaN,undefined, null, {name: 'Michelle', age:'23'}, 235];

/* FUNCTIONS */
/**
 * -objects
 * -can be stored as variables, passed as arguments to other functions, created within other functions, and returned from functions
 */

var x = add(3,4);

 function add(a, b){
     return a + b;
 }

 function doThings(){
     alert('HELLO!');
 }

 // arrow nottaion; new in ES6
 var multiply = function (x,y){
     return x * y
 };
 // this is the same thing as above
 var multiply = (x,y) => {return x * y};

 /* CALL BACK FUNCTION */
 /** a function in the parameter of a function
  * AKA a higher0-order function, is a function passed into another function as a parameter. 
  * The callback function is called/executed inside of the other function. 
  */

  var friends = ['me', 'myself', 'i'];
  friends.forEach(function(friend, index, ){
      console.log(`${index}: ${friend}`);
  });

  /************************************/
  /* VARIABLE SCOPE */
  /** Variable scope, where i can access my variable 
   *  global, function
  */

function test(){
    var vunctionScope = 'this variable is only accessible in teh function test()';
    console.log(functionScope);
    var x = functionScope.split(' ');
}

var globalScope = 'this is declared outside of a function and hense is of global scope';

function test2(){
    console.log(globalScope);
    console.log(functionScope); // not in scope
}

/** CLOSURES 
 * -a closure is an inner function that has acess to the outer enclosing function's variables. The inner function has access to the other function's variables and parameters.
 * 
 */ 

 function showName(firstName, lastName){
     var greeting = "Hello!";

     function fullName(){
         var test = 'inner funcion';
         return `${greeting} ${firstname} ${lastname}`;
     }
     console.log(test);
     return fullname();
 }



function scopes(){
    // let func2, func
    let func2 = 'this is also function scoped';
    var func = 'function scope';
    if(func.length > 5){
        //let blockscope;
        blockscope = 5;
        let blockScope = 10;
        var func = 6;
    }
    console.log(blockScope);
    console.log(func);
}


/** HOISTING
 * bring up to a particular scope of declarations
 */