var a = 5;
var b = "5";
a == b;
a === b;

function truthyOrFalsy(cond){
    if(cond){
        console.log("condition = T");
    } else {
        console.log("condition = F");
    }
}

var mod = 4%2;

var currSession = '11:30:-- EST'
var userInfo = {username: "gb", password: "123"};
var getUser = function(){
    return currSession && userInfo;
}

var earlyLeave = 1;
var outTime = 5;

var leaveToday = earlyLeave || outTime;

var arr = ['hi', 0, NaN, undefined, null, {name: 'Tamara', age: 23}, 123]

arr.length;
arr[0];
arr[7];
arr[100] = 100;

function add(a, b){
    console.log(a + b);
}

add(1,3);

var name = prompt("What is your name?");
console.log("Hello " + name + "!");
console.log(`Hello ${name}!`);

var multiply = function(x, y){return x * y};
var multiply = (x, y) => {return x*y};

var friends = ['me', 'myself', 'i'];
friends.forEach(function(friend, index){
    console.log(`${index}: ${friend}`);
});

function test(){
    var functionScope = `this variable is only accessible in the function test()`;
    console.log(functionScope);
    var x = functionScope.split(` `);
}

var globalScope = `this is declared outside of a function and hence is of global scope`;

function test2(){
    console.log(globalScope);
    console.log(functionScope);
}

function showName(firstName, lastName){
    var greeting = `Hello!`;

    function fullName(){
        var testing = `inner function`;
        return `${greeting} ${firstName} ${lastName}`;
    }
    //console.log(testing);
    return fullName();
}

function scopes(){
    let func2 = "this is also function scoped";
    var func = "function scoped";
    if(func.length > 5){
        blockScope = 5;
        let blockScope = 10;
        var func = 6;
    }
   console.log(blockScope);
    console.log(func);
}