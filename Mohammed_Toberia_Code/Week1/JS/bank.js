window.onload = function () {
    $('#login').on('click', login);
    $('#register').on('click', registerView);

}
function login() {
    let url = `http://localhost:3000/users?username=${$('#username').val()}`;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            var arr = JSON.parse(xhr.responseText);
            if (arr.length == 0) {
                // username does not exist
                console.log("username nonexistent");
            }
            else {
                // username does exist. Now check to see if password matches
                let user = arr[0];
                if (user.password == $('#pw').val()) {
                    // credentials are correct/ user is logged in
                    console.log("Correct credentials");
                }
                else {
                    console.log("incorrect credentials");
                }
            }
        }
        xhr.open("GET", url, true);
        xhr.send();
    }
}

function registerView() {
    $('#registerView').attr('hidden', false);
    $('#register').off('click');
    $('#register').on('click', register);
}



function register() {

    let user = {
        firstname: $('#fn').val(),
        lastName: $('#ln').val(),
        username: $('#username').val(),
        password: $('#pw').val(),
        balance: 0.00
    }

    //AJAX!!!
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        console.log(req.readyState);

        if(req.status == 201 && req.readyState == 4) {
            console.log("HI");

        }
    }

    req.open("POST", "http://localhost:3000/users", true);
    req.setRequestHeader("Content-type", "application/JSON");
    req.send(JSON.stringify(user));
}