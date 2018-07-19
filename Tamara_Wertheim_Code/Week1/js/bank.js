window.onload == function(){
    $(`#register`).on('click', register);
}

function register(){
/*    let fn = $('#fn').val();
    let fn = $('#ln').val();
    let uname = $('#username').val();
    let pw = $('#pw').val();
    */
   let user = {
    "firstName": $('#fn').val(),
    "lastName": $('#ln').val(),
    "username": $('#username').val(),
    "password": $('#pw').val(),
    "balance": 0.00
   }
   console.log(user);
}