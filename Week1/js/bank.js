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
    console.log(user);

}