function descendingOrder(numArray){
    var arrLen = numArray.length;

    for(var i = arrLen - 1; i >= 0; i--){
        for(var j = 1; j <= i; j++){
            if(numArray[j - 1] < numArray[j]){
                var temp = numArray[j - 1];
                numArray[j-1] = numArray[j];
                numArray[j] = temp;
            }
        }
    }
    return numArray;
}

function runDescOrder(){
    let numArray = getElementById(descOrd).value;
    document.getElementById("descOrder").innerHTML = descendingOrder(numArray);
}
