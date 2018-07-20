window.onload = function(){
    $("#registerBTN").on('click', registerView);
    $("#loginBTN").on*('click', login);

}

function registerView(){

    $('#registerView').attr('hidden', false);
    $("#registerBTN").off('click');
    $("#registerBTN").on('click', register);
}

function register(){
   

    let user = {

            fn:$('#firstname').val(),
            ln:$('#lastname').val(),
            username:$('#username').val(),
            pw: $('#password').val(),
            balance: 0.00
    }

    // console.log(user);

    //AJAX
    var xhr = new XMLHttpRequest();

    xhr.readyStateChange = function(){
        console.log(xhr.status);
        if(xhr.status == 200 && xhr.readyState == 4){
            console.log(xhr.responseText);
        }
    }

    xhr.open("POST", "http://localhost:3000/users", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(user));
}

function login(){
    let url = `https://localhost:3000/users?username=${$('#username').val()}`
    console.log(url);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200 ){
            //checking if user exists
            var arr = JSON.parse(xhr.responseText);
            if(arr.length == 0){
                //username does not exist
                $("#errorMessage").html("Username NonExistent. Try again.")
                $("#errorMessage").attr("hidden", false);

                console.log("User name nonexistent")

            }
            else{
                //username does exist, do input validation later to ensure no duplicate usernames
                // check to see if password matches
                let user = arr[0];
                if(user.password == $('#password').val()){
                    // credentials are correct
                    $("successMessage").attr()

                    console.log("Correct credentials");
                }
                else{
                    console.log("Incorrect credentials")
                }
            }
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}