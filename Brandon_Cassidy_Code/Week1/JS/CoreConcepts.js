/** 
 * @author Brandon Cassidy
 * **/
/*
Javascript is a scripting language for clientside operations, supports prototypal inheritance,
loosely typed (dynamic) var types: number, string, object, boolean, null, NaN, undefined
typeof(arg); determine type. declare variables with var, let, const.
*/

//JS uses type coercion to compare/manipulate diparate types. As a loosely typed programming language
//that is interpreted rather than compiled, it accomodates functions that operate on variables
//of different types.
var a=5;
var b ="5";
a==b; //true, forces type coersion
a===b;//false, does not force type coersion
console.log(typeof(a==b));//bool?
if("hello")
console.log("condition = T")
else
console.log("condition= F")

//truthy/falsy
//falsy: 0, NaN, Null, Undef, '', false
//truthy: not those
console.log(toString(true))

if( isNaN(1) )
{

}
else{
    console.log()
}

////// operators

/*
arithmetic stuff: + - * % /
bitwise: & \ >> >>> <<
10 & 11
10 | 11
etc

comparison: < > <= >= == === != !==
logical: && || ! !!
&& : Guard
if the first operand returns true, returns 2nd operand, otherwise first
returns actual operand
IE 
*/
var currSession= null;
var userInfo={username: 'bc', password:'123'};
var getUser = function() {
    return curSession && userInfo;
} //returns null unless curSession is changed to have a non-falsy value
/*
|| : Default
if 1st evaluates as true, return 2nd, else return first
*/
var earlyLeave = 1;
var outTime = 5;
var leaveToday = function()
{
    earlyLeave ||outTime;
}
//|| 'defaults' to the second operand
/*
Strings

0 or more 16-bit characters
'' OR "" but not at the same time
== similar strings for js return true
string.length length property is a num
charAt, concat, indexOf, replace, split, slice, substring, etc.
search -- regex

*/
var str='hi';
x = str.indexOf('i');//x = 1;
str = str.concat(' hello');
x = str.split(' '); //splits along spaces
y = x.join(' ');//joins placing spaces between elements
/* arrays
 :array.length - last element + 1
 :array.unshift(item) - places first element
 :array.shift() - removes & returns first element
 :array.push()
 :array.pop()

*/
var arr= ['hi', 0, NaN, undefined, null, {name:'bob' ,age:120},235]

/*
Functions
Also Objects
can be stored in variables, passed in arguments to other functions, created within other functions,
and returned from functions.

*/

function add(a,b){
return a+b
};
function doThings(){
    alert('Hello');
};
//prompt('message') returns some user input after displaying the message
//Arrow notation; new in ES6
var multiply = function(x,y) {return x*y;};
//using arrow notation instead to define funcationality
var multiply = (x,y) => {return x*y;};

/*
    Callback function: function passed as a parameter of another function
    AKA higher order function
    executed inside of the other function.
*/
multiply(multiply(5,10),10);
var friends = ['me', 'myself', 'i'];
friends.forEach(function(friend,index){
    console.log(`${index}: ${friend}`);}//function
)//foreach

/*
    VARIABLE SCOPE
    global vs function only prior to es6
    
*/
function test(){
    var funcScope = 'this is a function level scoped variable';
}
var globalscope = 'this is a global level scoped variable';

/*
JS: CLOSURE

closure is an inner function that has access to the outer enclosing function's variables
& parameters

*/
function showName(firstName,lastName) {
    var greeting = 'hello ';

    function fullName(){
        var test = 'inner function';
        return `${greeting} ${firstname} ${lastname}`
    }
}

function scopes(){
    var func= 'function scoped'
    if(func.length>5){
        let blockscope=10;
        var func= 6;
    }
}
/*
let creates variables in 'block scope', accessible only within their hierarchy block

*/

//JS: Hoisting
/*
brings declarations to the top of their particular scope; may be accessed before declaration due to this
*/
