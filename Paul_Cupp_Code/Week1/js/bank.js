window.onload = function(){
    $('#register').on('click', register);
}

function register(){
    let user = {
        "firstName": $('#fn').val(),
        "lastName": $('#ln').val(),
        "username": $('#username').val(),
        "password": $('#pw').val(),
        "balance": 0.00
    }
    //AJAX! 
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        console.log(req.status);
        if(req.status==201 && req.readyState==4){
            console.log(req.responseText);
        }
    }
    req.open("POST", "http://localhost:3000/users", true);
    req.setRequestHeader("Content-type", "application/json");
    req.send(JSON.stringify(user));


}