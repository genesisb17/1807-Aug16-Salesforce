window.onload = function(){
    $('#register').on('click', register);
    $('#login').on('click', login);
}

function login(){
    let url = `http://localhost:3000/users?username=${$('#username').val()}`;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var arr = JSON.parse(xhr.responseText);
            if(arr.length==0){
                //username does not exist
                $('#err').html("Username NonExistent. Try again");
                $('#err').attr("hidden", false);
                console.log("username nonexistent");
            }
            else{
                //username does exist. now check to see if password matches
                let user = arr[0];
                if(user.password == $('pw').val()){
                    //credentials are correct
                    $('#err').attr("hidden", false);
                    $('#success').html("You have logged in!");
                    $('#success').attr("hidden", false);
                    console.log("correct credentials");
                }
                else{
                    console.log("incorrect credentials");
                }
            }
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}   

function registerView(){
    $('#registerView').attr('hidden', false);
    $('#register').off('click');
    $('#register').on('click', register);
}
function register(){
    $('#registerView').attr('hidden', false);
    let user = {
    first_name:$('#fn').val(), 
    last_name:$('#ln').val(), 
    username:$('#username').val(),
    password:$('#pw').val(), 
    balance: 0.00
    }

//AJAX!
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        console.log(req.status);
        if(req.status==200 && req.readyState==4){
            console.log(req.responseText);
        }
    }
    req.open("POST", "http://localhost:3000/users", true);
    req.setRequestHeader("Content-type", "application/json");
    req.send(JSON.stringify(user));
}