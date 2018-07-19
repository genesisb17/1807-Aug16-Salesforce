window.onload = function (e) {
    //   alert('js works!');
    document.getElementById("runFib").
        addEventListener("click", bubbleSort, true);
    document.getElementById("reverse").
        addEventListener("click", reverseStr, true);
}

function bubbleSort(numArray) {
    let series = document.getElementById('fibN').value;
    let sorting = 0;

    numArray = series.split(' ');

    series = "";

    while (sorting < numArray.length) {
        for (i = 0; i + 1 < numArray.length; i++) {
            if (numArray[i].valueOf() > numArray[i + 1].valueOf()) {
                let placeHolder = numArray[i];
                numArray[i] = numArray[i + 1];
                numArray[i + 1] = placeHolder;
                sorting = 0;
            }
            else
                sorting++;
        }
    }
    for (i = 0; i < numArray.length; i++)
        series = series + ' ' + numArray[i];

    document.getElementById('fibOut').innerHTML = series;
}

function reverseStr(someStr) {
    let value = document.getElementById('input3').innerHTML;
    alert(value);
}