window.addEventListener('DOMContentLoaded', () => {
    const formEyeWrap = document.querySelector('.form__eye-wrap');
    const inputTel = document.getElementById("tel");
    const inputPassword = document.querySelector(".form__input-password");

    const phoneMask = IMask(inputTel, {
        mask: "+7 (000) 000 00 00",
    });


    formEyeWrap.addEventListener('click', () => {
        inputPassword.type === 'password' ? inputPassword.type = 'text' : inputPassword.type = 'password';
    });
});