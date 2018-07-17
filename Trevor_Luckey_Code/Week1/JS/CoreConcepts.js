/**
 * @author Trevor Luckey
 */

 var mod = 4 % 2

var currSession = null;
var userInfo = { username: 'gh', password: '123'};
var getUser = function(){
    return currSession && userInfo;
}

var earlyLeave = 1;
var outTime = 5;
var leavetoday = earlyLeave || outTime;

var str = 'hi';
x = str.indexof('i');

var arr = ['hi', 0, NaN, undefined, null, {name: "Trevor", age: 23}];
arr.length;
arr[0];
arr[100] = 100;
arr.unshift('first');

