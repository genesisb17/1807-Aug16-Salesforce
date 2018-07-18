/**
 * @author Harvey Hill
 * 
 */

var a = '5';
var b = 5;

function TruthyOrFalsey(cond) {
    if (cond) {
        console.log("condition = T");

    }
    else {
        console.log("condition - F");
    }
}

// Arithmatic Operators + - * / % 

//Bitwise & >> >>> << |

//Comparison < > <= >= == === != !==

//Logical operators && || ! !!

var currSession = null;
var userInfo = { username: 'gb', password: '123'};
var getUser = function() {return currSession && userInfo;}

/* Strings
0 or more 16 bit characters.

*/


/* functions 

Objects in javascript
can be stored as variables.
passed as arguments to other functions
created within functions and returned from functions.


*/

var x = add(3, 4);

function add(a, b)
{
    return a + b;
}

function doLittle()
{
    alert('Duck!');
}

//arrow notation

var multiply = function(x, y) {return x * y};

var  ulti = (x, y) => {return x*y};

//callback function
/*
a function in the parameter of another function, 
also called a higher order function 
and is a function passed into another fucntion as a parameter. */

var friends = ['me', 'myself', 'i'];
friends.forEach(function(friend, index){
    console.log(`${index}: ${friend}`);
});

/* Variable Scope



*/


/* closure is  an inner function that has access to the outer functions variables and parameters. */

