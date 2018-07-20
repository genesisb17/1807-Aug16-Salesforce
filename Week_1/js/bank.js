window.onload = function () {
    $('#login').on('click', login);
    $('#signUp').on('click', registerView);
    $('#signUp2').on('click', register);
};

function login() {
    //log in existing user
    let url = `http://localhost:3000/users?username=${$('#un').val()}`;
    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            console.log(Date() + " " + req.readyState);
            var arr = JSON.parse(req.responseText);
            console.log(arr);
            if (arr.length == 0) {
                alert("Username not recognized.");
                console.log("Username not recognized.");
                return;
            }
            else {
                let user = arr[0];
                if (user.pw == $('#pw').val()) {
                    alert("Login successful.");
                    console.log("Correct login.");
                }
                else {
                    alert("Incorrect password.");
                    console.log("Incorrect password.");
                    return;
                };
            };
        };
    };
    req.open("GET", url, true);
    req.send();
};

function registerView() {
    //change login view
    $('#registerView').attr("hidden", false);
    $('#registerView2').attr("hidden", false);
    $('#signUp').attr("hidden", true);
    $('#signUp2').attr("hidden", false);
    $('#login').attr("hidden", true);
};

function register() {
    if ($('#pw').val() != $('#pw2').val()) {
        alert("Passwords must match.");
        return;
    };
    //create new user
    let user = {
        fn: $("#fn").val(),
        ln: $('#ln').val(),
        un: $('#un').val(),
        pw: $('#pw').val(),
        balance: 0
    };
    //add user to db
    let newreq = new XMLHttpRequest();
    newreq.onreadystatechange = function () {
        if (newreq.readyState == 4 && newreq.status == 200) {
            console.log(newreq.responseText);
        };
    };
    newreq.open("POST", "http://localhost:3000/users", true);
    newreq.setRequestHeader("Content-type", "application/json");
    newreq.send(JSON.stringify(user));
    console.log("Code after request sent.");
};