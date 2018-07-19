window.onload = function(){
    $('#register').on('click', register);
    $('#login').on('click', login);
}

function login(){
    let url = `http://localhost:3000/users?username=${$('#username').val}`;
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status==200){
            let arr = JSON.parse(xhr.responseText);
            if(arr.length == 0){
                console.log("You don't exist!!!")
            } else {
                let user = arr[0];
                if (user.password == $(`#pw`).val()){
                    console.log("Correct")
                } else {
                    console.log("NOPE!");
                }
            }
        }
    }
        xhr.open("GET", "http://localhost:3000/users", true);
        xhr.setRequestHeader("Content-type", "application/json")
        xhr.send(JSON.stringify(url));    
}

function registerView(){
    $(`#registerView`).attr('hidden',false);
    $(`#register`).off('click');
    $(`#register`).on('click', register);
}

function register(){
    let user = {
        firstName: $('#fn').val(),
        lastName: $('#ln').val(),
        username: $('#username').val(),
        password: $('#pw').val(),
        balance: 0.00
    }

    var req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        console.log(Date() + " " + req.readyState);
        if(req.readyState == 4 && req.status==201){
            console.log(req.responseText);
        }
    }
        req.open("POST", "http://localhost:3000/users", true);
        req.setRequestHeader("Content-type", "application/json")
        req.send(JSON.stringify(user));    
}