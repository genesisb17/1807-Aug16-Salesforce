window.onload = function(){
    $('#register').on('click', register);
}
function login(){
    let url = `http://localhost:3000/users?username=${$('#username').val()}`;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var arr = JSON.parse(xhr.responseTest);
            if(arr.length==0){
                //username dos not exist
                $('#err').html("Username nonexistent. Try again");
                $('#err').attr("hidden",false);
                console.log("username nonexistent");
            }
            else {
                //does exitst. now check to see if [w ,atjes
                let user = arr[0];
                if (user.password == $('#pw').val()){
                    console.log("Correct credentials");
                }
                else{
                    console.log("incoreect credentials");
                }
            }
        }
    }
    xhr.open("GET",url,true);
    xhr.send();
}

function register(){
    $('#registerView').attr('hidden',false);
    $('#register').off('click');
    $('#register').on('click',register);

    let user = {
        firstName: $('#fn').val(),
        lastname: $('#ln').val(),
        username: $('#uname').val(),
        password:$('#pw').val(),
        balance:0.00
    }
    console.log(user);

    // ajax
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        console.log(req.status);
        if(req.status==200 && req.readyState==4){
            console.log(req.responseText);
        }

    }
    req.open("POST", "http://localhost:3000/users",true);
    req.setRequestHeader("Content-type","application/json");
    req.send(JSON.stringify(user));
}
let fn = $('#fn').val();
let ln= $('#ln').val();
let uname = $('#username').val();
let pw = $('#pw').val();