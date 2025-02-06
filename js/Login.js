document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Please fill in both fields');
        return;
    }

   
        if(username.length < 6) 
    {
        alert("username must be at least 6 character");
        return;
    }
 
    if (!/^\d{5,}$/.test(password))
    {
        alert("password  must be at least 5 digit and contain only numbers");
        return;
    }

    
    else {alert('Login successful');
        window.location.href = "newHome.html";
    }
});
document.getElementById('signupLink').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "signup.html";

});

document.getElementById("CloseLogin").addEventListener('click',function(event){
    document.querySelector('.card').style.display='none';
});

document.getElementById("ForgetPassword").addEventListener('click',function(event){
    event.preventDefault();
    window.location.href = "forgetPassword.html";
});