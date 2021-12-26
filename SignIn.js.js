function formValidation() {
    var email = document.querySelector('.text2').value;
    const reEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!reEmail.test(email)) {
        alert("email is incorrect")
    } else {
        alert('email is okay');
    }

    var password = document.querySelector('.text3').value;
    const rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!rePassword.test(password)) {
        alert("password is incorrect")
    } else {
        alert('password is okay');
    }

    if (password.length < 8) {
        alert("password should contain at least 8 characters")
    }


}