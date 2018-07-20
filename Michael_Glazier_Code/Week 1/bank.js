window.onload = function(){
    $('#register').on('click', registerView);
    $('#login').on('click', login);
}

function login(){
    
    let url = `http://localhost:3000/users?userName=${$('#username').val()}`;
    console.log(url);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState == 4 && xhr.status == 200 ){
            var arr = JSON.parse(xhr.responseText);
            if(arr.length==0){
                $('#err').html("Username NonExistent, Try again");
                $('#err').attr("hidden", false);
                console.log("username nonexistent");
            }
            else{
                let user = arr[0];
                console.log(user);
                if(user.pwd == $('#pw').val()){
                    //creditentials are correct
                    $('#err').attr("hidden", true);
                    
                    console.log("Correct Creditentials");
                }
                else{
                    console.log("Incorrect Creditentials");
                }
            }
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}
function registerView(){
   // $('#registerView').attr('hidden', true);
    $('#registerView').hide();
   // $('#registerView').off("click");
    $("#register").on("click", register);
}

function register(){
    let user = {
        "firstName":  $('#fn').val(),
        "lastName":  $('#ln').val(),
        "userName":  $('#username').val(),
        "pwd": $('#pw').val(),
        "balance": 0.00
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.status==201 && xhr.readyState==4){
            console.log(xhr.responseText);
        }
    }

    let url = "http://localhost:3000/users";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(user));
    
}