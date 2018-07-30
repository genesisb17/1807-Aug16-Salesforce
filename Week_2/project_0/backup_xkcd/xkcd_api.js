window.onload = function() {
    $('#last').onclick('click', last);
    $('#first').onclick('click', first);
    $('#find').onclick('click', find);
    $('#prev').onclick('click', prev);
    $('#next').onclick('click', next);
};

function last() {

};

function first() {

};

function find() {
    let num = Number($('#find').val());
    if (Number.isInteger(num) == false || num < 0) {
        alert("Input a positive integer, ya dingus.");
        return;
    };

    var call = new XMLHttpRequest();

    call.onreadystatechange = function () {
        console.log(Date() + " " + call.readyState);
        if (call.readyState == 4 && call.status == 200) {
            resp = call.responseText;
            pokemon = JSON.parse(resp);
            //insert function here
        };
    };

    var url = `https://https://xkcd.com/${id}/json.html`;
    call.open("GET", url, true);

    call.send();

    console.log("CODE AFTER REQUEST WAS SENT");

}

function prev() {

};

function next() {

}
