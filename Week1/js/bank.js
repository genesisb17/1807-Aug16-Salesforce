window.onload = function(){
    $('#login').on('click', login);
    $('#register').on('click', registerView);

}


function login(){
    let url = `http://localhost:3000/users?username=${$('#username').val}`;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && req.status == 200){
            var arr = JSON.parse(xhr.responseText);
            if (arr.length == 0){
                //username doesnt exist
            }
            else {
                //user does exist. now check to see if password is valid. 
                let user = arr[0];
                if (user.password == $('#ps').val()){
                    //credentials are corret 
                    console.log("Correct credentials.")
                }
                else {
                    console.log("Correct credentials.")
                }
            }
        }
    }
}

function registerView(){
    $('#registerView').attr('hidden',true);
}

function register(){
    $('registerView').attr('hidden', false);
    let user = {
        firstName: $('#fn').val(),
        lastName : $('#ln').val(),
        username : $('#username').val(),
        password : $('#pw').val(),
        balance  : 0.00
    }
//    colsole.log(JSON.stringify(user));


    //AJAX ====
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        console.log(req.status);
        if(req.status ==201 && req.readyState==4){
            console.log(req.responseText);
        }
    }
    req.open("POST", "http://localhost:3000/users", true);
    req.setRequestHeader("Content-type", "application/json");
    req.send(JSON.stringify(user));


}