/**
 * @author Abu Shohag
 */


//Guard Operator &&
var currSession = null;
var userInfo = {usrname: "ABC", password: "45678726536728"};
var getUser = function (){
    return currSession && userInfo; //if first one is true, evalutes the second one. Otherwise returns false. 
}


//Default Operator ||
var earlyLeave = 1;
var outTime = 5;
var leaveToday = outTime || outTime;

//using var as function 
var multipley = (x,y) => {return x*y;}
// multipley (5*5) should return 25,


//Scopes: It consitute where a variable is accessible. 
//by deafault undefined var are global. 
//Let (let x=3) makes var only accessible within the block. {}


//Closure -- Inner function have access to outer function's vars.


// Hoisting: this allows us to blockscope a var after it has been assinged somthing. such as
// x = 34. //x is now global. //than you can call "let x = 34" now let made the var
// accessile only within block (blockscope).

