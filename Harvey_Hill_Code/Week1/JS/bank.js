window.onload = function(){
    $('#register').on('click', registerview);
    $('#login').on('click', login);
}

function register(){
    let user = {
        firstname:$('#firstname').val(),
        lastname:$('#lastname').val(),
        username:$('#username').val(),
        password:$('#password').val(),
        balance: 0.00
    }
    console.log(user);
    let xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function(){
        if(xhr.status == 200 && xhr.readyState == 4){
            console.log(xhr.responseText);
        }
    }
    xhr.open("POST", "http://localhost:3000/users", true);
    xhr.setRequestHeader("Content-type", "application/JSON");
    xhr.send(JSON.stringify(user));
}

function registerview(){
    $('#registerview').attr('hidden', false);
    $('#register').off('click')
    $('#register').on('click', register)

}

function Login2(){

}


function login(){
    let url = `http://localhost:3000/users?username=${$('#username').val()}`;
    let login = new XMLHttpRequest();
    login.onreadystatechange = function(){
        if(login.status == 200 && login.readyState == 4){
            console.log(login.responseText);
            var users = JSON.parse(login.responseText);
            CheckLogin(users);
        }
    }
    login.open("GET", url, true);
    login.send();
}

function CheckLogin(users){
    console.log(users)
    let user = $('#logusername').val();
    let password = $('#logpassword').val();
    console.log(user);

}

