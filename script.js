document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();

    pwd = document.getElementById('password');
    confirm_pwd = document.getElementById('confirmPassword');

    if(!(pwd.value === confirm_pwd.value)){
        document.getElementById('validation').textContent = "*Passwords do not match";
        pwd.classList.add("invalid");
        confirm_pwd.classList.add("invalid");
    }


})