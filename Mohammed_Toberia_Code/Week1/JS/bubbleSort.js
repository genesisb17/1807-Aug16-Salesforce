function bubbleSort(numArray){
    var arrLen = numArray.length;

    for(var i = arrLen - 1; i >= 0; i--){
        for(var j = 1; j <= i; j++){
            if(numArray[j - 1] > numArray[j]){
                var storeValue = numArray[j - 1];
                numArray[j - 1] = numArray[j];
                numArray[j] = storeValue;
            }
        }
    }
    return numArray;
}
function runSort(){
    let numArray = getElementById('BubbN').value;
    document.getElementById("sorted").innerHTML = bubbleSort(numArray);
}
