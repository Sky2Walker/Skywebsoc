
const accountTitle = document.getElementById("accountTitle");
const accountSubtitle = document.getElementById("accountSubtitle");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const subformText = document.getElementById("subformText");
const logInLink = document.getElementById("logInLink");


logInLink.addEventListener("click", function (e) {
    e.preventDefault(); 

    
    if (accountTitle.innerText === "Create Account") {
        accountTitle.style.paddingLeft = "330px"; 
        accountTitle.style.paddingTop = "240px"; 
        accountTitle.innerText = "Log In";
        accountSubtitle.innerText = "Log in your account";
        subformText.innerText = "Haven't already an account?";
        logInLink.innerText = "Sign in";
        loginForm.style.display = "flex";
        registerForm.style.display = "none";
    } else {
        accountTitle.style.paddingLeft = "180px"; 
        accountTitle.style.paddingTop = "119px"; 
        accountTitle.innerText = "Create Account";
        accountSubtitle.innerText = "Sign in your account";
        subformText.innerText = "Have already an account?";
        logInLink.innerText = "Log In";
        registerForm.style.display = "flex";
        loginForm.style.display = "none";
    }
});


loginForm.style.display = "none";
