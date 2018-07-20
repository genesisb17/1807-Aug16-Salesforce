window.onload = () => {
    $('#login').on('click', login);
    $('#register').on('click', register);
}

function login() {
    let url = `http://localhost:3000/users?username=${$('#username').val()}`;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState==4 && xhr.status==200) {
            let arr = JSON.parse(xhr.responseText);
            if (arr.length==0) {
                //username does not exist
                $('#err').html("Username Nonexistent. Try again");
                $('#err').attr("hidden", false);
            }
            else { //does exist. check pw now
                let user = arr[0]
                if (user.password == $('#pw').val()) {
                    //credentials correct
                    $('#success').html("Login Successful. You are now logged in");
                    $('#success').attr("hidden", false);
                    $('#err').attr("hidden", true);
                    console.log("correct credentials");
                }
                else { 
                    console.log("incorrect credentials");
                    $('#err').html("Password Nonexistent. Try again");
                    $('#err').attr("hidden", false);
                }
            }
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}

function register() {
    $('#registerView').attr("hidden", false);
    $('#register').off('click');
    $('#register').on('click', register);
    let user = {
        "firstName": $('#fn').val(),
        "lastName": $('#ln').val(),
        "username": $('#username').val(),
        "password": $('#pw').val(),
        "balance": 0.00
    }
    console.log(user);

    let request = new XMLHttpRequest;
    request.onreadystatechange = () => {
        console.log(request.status);
        if (request.status==200 && request.readyState==4){
            console.log(request.responseText);
        }
    }

    request.open("POST", "http://localhost:3000/users", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(user))
}