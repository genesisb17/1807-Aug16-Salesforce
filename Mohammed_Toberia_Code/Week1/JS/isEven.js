function isEven(someNum){
    var x = someNum & 1;

    if(x == 0){
        return "The entered value is even";
    }
    else
    return "The entered value is odd"; 
}

function runEven(){
    let someNum = getElementById('evenN').value;
    document.getElementById("isEvenN").innerHTML = isEven(someNum);
}