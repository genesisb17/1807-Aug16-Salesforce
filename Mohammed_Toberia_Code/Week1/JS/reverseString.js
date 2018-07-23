function reverseStr(someStr){
    return someStr.split("").reverse().join("");
}

function runReverse(){
    let someStr = getElementById('revN').value;
    document.getElementById("reversed").innerHTML = reverseStr(someStr);
}

