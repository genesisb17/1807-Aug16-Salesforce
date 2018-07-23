
function spliceElement(someArr){
    var someArr = [1, 2, 4, 5, 7];
    console.log(someArr);
    someArr.splice(2, 0, 3);
    console.log(someArr);

    someArr.splice(5, 1, 6);
    console.log(someArr);
}

function runSplice(){
    let someArr = getElementById('spliceN').value;
    document.getElementById("splice").innerHTML = spliceElement(someArr);
}


