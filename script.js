document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();

    pwd = document.getElementById('password');
    confirm_pwd = document.getElementById('confirmPassword');

    // remove validation if exists
    if(pwd.classList.contains('invalid') || confirm_pwd.classList.contains('invalid')){
        pwd.classList.remove('invalid');
        confirm_pwd.classList.remove('invalid');
        document.getElementById('validation').textContent = "";
    }

    if(!(pwd.value === confirm_pwd.value)){
        document.getElementById('validation').textContent = "*Passwords do not match";
        pwd.classList.add("invalid");
        confirm_pwd.classList.add("invalid");
    }
})