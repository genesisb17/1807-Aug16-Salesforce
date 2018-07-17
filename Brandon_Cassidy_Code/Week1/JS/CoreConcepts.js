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