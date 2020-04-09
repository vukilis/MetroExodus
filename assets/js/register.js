window.onload = () => {
    email.addEventListener('blur', emailValid), pwd.addEventListener('blur', pwdValid), confirmPwd.addEventListener('blur', confirmValid), email.addEventListener('focus', removeClasses), pwd.addEventListener('focus', removeClasses), confirmPwd.addEventListener('focus', removeClasses), registerBtn.addEventListener('focus', porukaRegister)
};

let email = document.querySelector('#regEmail'),
    pwd = document.querySelector('#pwd'),
    confirmPwd = document.querySelector('#confirmPwd'),
    progress = document.querySelector('#progress'),
    notify = document.querySelector('.alertify-notifier'),
    counter = 0,
    registerBtn = document.querySelector('#registerBtn'),
    isFormOK = !0,
    regEmail = /^[a-zšđžćč]{4,}(\.)?([a-zšđžćč]{4,})*([0-9]{0,5})?\@((gmail)|(outlook)|(msn)|(live)|(hotmail)|(yahoo)|\w)\.com$/,
    regPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

let removeClasses = a => {
        a.target.classList.contains('is-danger') ? a.target.classList.remove('is-danger') : a.target.classList.contains('is-success') && a.target.classList.remove('is-success')
    },
    emailValid = () => {
        regEmail.test(email.value) ? (email.classList.add('is-success'), isFormOK = !0, progress.value += 33)  : (email.classList.add('is-danger'), isFormOK = !1, progress.value -= 33)
    },
    pwdValid = () => {
        regPwd.test(pwd.value) ? (pwd.classList.add('is-success'), isFormOK = !0, progress.value += 33) : (pwd.classList.add('is-danger'), isFormOK = !1, progress.value -= 33)
    },
    confirmValid = () => {
        pwd.value ? pwd.value === confirmPwd.value && (confirmPwd.classList.add('is-success'), isFormOK = !0, progress.value += 34) : (confirmPwd.classList.add('is-danger'), isFormOK = !1, progress.value -= 34)
    },
    porukaRegister = () => {
      if(regEmail.test(email.value) && regPwd.test(pwd.value) && pwd.value === confirmPwd.value){
        let msg = alertify.message('You have successfully registered, welcome to Metro Exodus!');
        msg.delay(3);
    }
      else{
        let msg = alertify.message('Please try again!');
        msg.delay(3);
     }
    }
