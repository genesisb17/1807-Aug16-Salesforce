window.onload = function (){
    $('#login').on('click', login);
    $('#register').on('click', registerView);
}

function login() {
    let url = `http://localhost:3000/users?username=${$('#username').val()}`;
    let xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status==200) {
            var arr = JSON.parse(xhr.responseText);
            if(arr.length==0){
                //invalid
                $('#failView').attr('hidden', false);
                $('#successView').attr('hidden', true);
            }
            else{
                //exist... check password
                let user = arr[0];
                if(user.password == $('#pw').val()){
                    //credentials are correct
                    $('#failView').attr('hidden', true);
                    $('#successView').attr('hidden', false);
                }
                else{
                    $('#failView').attr('hidden', false);
                    $('#successView').attr('hidden', true);
                }
            }
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}

function registerView () {
    $('#registerView').attr('hidden', false);
    $('#register').off('click');
    $('#register').on('click', register);
}

function register () {
    let user = {
        fistName: $('#fn').val(),
        lastName: $('#ln').val(),
        username: $('#username').val(),
        password: $('#pw').val(),
        balance: 0.00
    }
    let xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function () {
        console.log(xhr.status);
        if(xhr.status == 200 & xhr.readyState == 4){
            console.log(xhr.responseText);
        }
    }

    xhr.open("POST", "http://localhost:3000/users", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(user));
}