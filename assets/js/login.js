window.onload = () => {
    loginMail.focus(), loginMail.addEventListener('blur', mailBlur), loginPwd.addEventListener('blur', pwdBlur), loginMail.addEventListener('focus', removeClasses), loginPwd.addEventListener('focus', removeClasses), loginBtn.addEventListener('focus', porukaLogin)
};
let loginBtn = document.querySelector('#loginBtn'),
    loginMail = document.querySelector('#loginMail'),
    loginPwd = document.querySelector('#loginPwd'),
    mailEnvelope = document.querySelector('#mailEnvelope'),
    pwdLock = document.querySelector('#pwdLock'),


    mailBlur = () => {
        let a = /^[a-zšđžćč]{4,}(\.)?[a-zšđžćč]{4,}([0-9]{0,5})?\@((gmail)|(outlook)|(msn)|(live)|(hotmail)|(yahoo)|\w)\.com$/;
        a.test(loginMail.value) ? (mailEnvelope.classList.add('icon-success'), loginBtn.removeAttribute('disabled', !0)) : (mailEnvelope.classList.add('icon-danger'), loginBtn.setAttribute('disabled', !0))
    },
    pwdBlur = () => {
        let a = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        a.test(loginPwd.value) ? (pwdLock.classList.add('icon-success'), loginBtn.removeAttribute('disabled', !0)) : (pwdLock.classList.add('icon-danger'), loginBtn.setAttribute('disabled', !0))
    };
let removeClasses = a => {
    a.target.classList.contains('icon-danger') ? a.target.classList.remove('icon-danger') : a.target.classList.contains('icon-success') && a.target.classList.remove('icon-success'), mailEnvelope.classList.contains('icon-success') && pwdLock.classList.contains('icon-success') && loginBtn.hasAttribute('disabled') && loginBtn.removeAttribute('disabled')
};

    porukaLogin = () => {
      if(!mailEnvelope.classList.add('icon-success') && !pwdLock.classList.add('icon-success')){
        let msg = alertify.message('You have successfully logged in, welcome to Metro Exodus!');
        msg.delay(3);
    }
      else{
        let msg = alertify.message('Please try again!');
        msg.delay(3);
     }
    }
