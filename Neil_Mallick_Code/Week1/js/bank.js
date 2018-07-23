window.onload = function(){
    $('#register').on('click', register);
    $('#login').on('click', login);
}

function login(){
    
    let url = `http://localhost:3000/users?username=${$('#username').val()}`;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState[\p])
    }

    }
}

function register(){

    let user = {
        "firstName": $('#fn').val(),
        "lastName":$('#ln').val(),
        "username": $('#username').val(),
        "password": $('#pw').val(),
        "balance": 0.00

    }
    console.log(user);

    let req = new XMLHttpRequest;
    req.onreadystatechange = function(){
        console.log(req.status);
        if(req.status==200 && req.readyState==4){
            console.log(req.responseText);
        }
    }

    req.open("POST", "http://localhost:3000/user", true);
    req.setRequestHeader("Content-type", "application/json");
    req.send(JSON.stringify(user));
}