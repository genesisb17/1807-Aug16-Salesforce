window.onload = function(){
    $('#register').on('click',register);
    $('#login').on('click',login);
}

function login(){
    let url= `http://localhost:3000/users?username=${$('#username').val()}`;
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState==4 && req.responseText==200){
            var arr = JSON.parse(req.responseText)
            if(arr.length==0){
                $('err').html("error logging in");
                $('err').attr("hidden",false);
            }//zero results
            else{
                //check pw if username exists
                let user=arr[0];
                if(user.password==$('password')){
                    //credentials correct
                    $('#err').attr("hidden", true);
                    $('#success').attr("hidden", false);
                    $('#success').html("Success! You are logged in");
                    //display home page
                }//if
                else{
                    $('err').html("error logging in");
                    $('err').attr("hidden",false);
                }//else
            }//more than zero results
        }//if

        req.open("get",url,true); //of import
        req.setRequestHeader("Content-type", "application/json"); //of import
        req.send(); //of import
    }
}
function register(){
    // let fn=$('firstName').val();
    // let ln=$('lastName').val();
    // let userName=$('userName').val();
    // let password=$('password').val();
    $('#loginGreeting').attr('hidden',true);
    $('#registerView').attr('hidden',false);
    $('#register').off('click');
    $('#register').on('click',register);
    let user = {
        "fn" : $('#firstName').val(),
        "ln" : $('#lastName').val(),
        "username" : $('#userName').val(),
        "password" : $('#password').val(),
        "balance" : 0.00
    }
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.status==200 && xhr.readyState==4){
            console.log(xhr.responseText);

        }//if
    }//readystatechange function
    xhr.open("POST","http://localhost:3000/users",true); //of import
    xhr.setRequestHeader("Content-type", "application/json"); //of import
    xhr.send(JSON.stringify(user)); //of import
    console.log("sent");
}//register