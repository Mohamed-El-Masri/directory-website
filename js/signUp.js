document.querySelector(".LoginHere").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href="Login.html";
   
})
document.getElementById('SignUPForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value.trim();
    let Password = document.getElementById('Password').value.trim();
    let YourEmail=document.getElementById('YourEmail').value.trim();
    let ConfirmPassword=document.getElementById('ConfirmPassword').value.trim();
    

    if (username === '' || Password === ''||ConfirmPassword===''||YourEmail==='') {
        alert('Please fill in both fields');
        return;
    }
    if (Password !== ConfirmPassword) {
        alert('Passwords do not match');
        return;
    }

    alert('Sign Up successful, redirecting to login...');
setTimeout(() => {
    window.location.href = "Login.html";
}, 1000);
});