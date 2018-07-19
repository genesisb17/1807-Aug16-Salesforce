/*
 * @author Matt Smart
 */

 var a = 5;
 var b = '5';
 //falsey - NaN, 0, undefined, '', null, "", false

 var mod = 4 % 2;
 //Bitwise & \ >> >>> <<
 //10 - 1010
 //&11- 1011
 //   - 0001

 //Logical Operators  && || ! !!
 /* Guard operator &&
    - if the first operand is truthy, return the second operand (Actual operand not true/false)
 */
var currSession = null;
var userInfo = { username: 'gb', password: '123'};
var getUser = function() {
    return currSession && userInfo;
}
/*Default Operator ||
    if the First operand in truty return it, otherwise return the second operand

*/

/* *******************STRINGS **********************************
 0 or more 16 bit characters
 == similar strings are equal
 string.length
 -charAt, concat, indexOf, replace, split, slice, substring, etc
 - immutable
*/
// Arrays
/*
--special objects
-- 
*/
// Functions - objects, can be stored as variables, passed as arguments, 
// created within functions, and retruned from functions
//Callback function - higher order function that is passed as a parameter to another function

function callback() {

}

var friends = ['me', 'myself', 'I'];
friends.forEach(function(friend, index) {
    console.log(`${index}: ${friend}`);
} );

/*
CLOSURE
inner function that has access to the outer enclosing function variables.
*/
