const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

confirmPassword.addEventListener('keyup', () => {
    if (password.value === confirmPassword.value)
    {
        password.classList.add("valid");
        password.classList.remove("invalid");
        confirmPassword.classList.add("valid");
        confirmPassword.classList.remove("invalid");
    }
    else
    {
        password.classList.remove("valid");
        password.classList.add("invalid");
        confirmPassword.classList.remove("valid");
        confirmPassword.classList.add("invalid");
    }
});