window.onload = function(){
    $('#login').on('click', login);
    $('#register').on('click', registerView);
}

function login(){

 let url = `http://localhost:3000/users?username=${$('#username').val()}`;
 let xhr = new XMLHttpRequest();
 xhr.onreadystatechange = function(){
     if(xhr.readyState==4 && xhr.status==200){
         var arr = JSON.parse(xhr.responseText);
         if(arr.length==0){
             //username does not exist
             $('#err').html("Username NonExistent. Try again");
             $('#err').attr("hidden", false);
             console.log("username nonexistent")
         }
         else{
             //username does exist. now check to see if pw matches
             let user = arr[0];
             if(user.password == $('#pw').val()){
                $('#err').attr("hidden", true);
                $('#success').attr("hidden", false);
                $('#success').html("Success! You are logged in");
                 //credentials are correct
                 console.log("Correct credentials");
             }
             else{
                $('#err').html("Incorrect Password. Try again");
                $('#err').attr("hidden", false);
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
    $('#register').on('click', register );
}

function register(){
    let user = {
        firstName: $('#fn').val(),
        lastName: $('#ln').val(),
        username: $('#username').val(),
        password: $('#pw').val(),
        balance: 0.00
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