window.onload = function(){
  newsletter.addEventListener('blur', newsletterValidatation),
  subscribeBtn.addEventListener('click', newsletterValidatation);
  subscribeBtn.addEventListener('click', porukaNews);
  newsletter.addEventListener('blur', newsletterValidatation), subscribeBtn.addEventListener('click', porukaNews)
};

let newsletter = document.querySelector('#newsletter'),
    subscribeBtn = document.querySelector('#subscribeBtn');

        newsletterValidatation = () => {
        let a = newsletter.value,
            b = /^[a-zšđžćč]{4,}(\.)?[a-zšđžćč]{4,}([0-9]{0,5})?\@((gmail)|(outlook)|(msn)|(live)|(hotmail)|(yahoo)|\w)\.com$/,
            c = document.querySelector('#envelope');
            b.test(a) ? c.classList.add('icon-success') : c.classList.add('icon-danger');
         };

let msg = alertify.message('Welcome to Metro Exodus!');
msg.delay(3);

porukaNews = () =>{
  if(newsletter.value){
    let msg = alertify.message('Thanks!');
    msg.delay(3);
  }
  else {
    let msg = alertify.message('Please write your email!');
    msg.delay(3);
  }
}
// slajder
var dotIndex = 1
var slajderIndex = 1;
showSlides(slajderIndex);
// Next/previous kontrole
function plusSlides(n) {
  showSlides(slajderIndex += n);
}

function trenutniSlajd(n) {
  showSlides(slajderIndex = n);
}

function showSlides(n) {
  let i;
  let slajder = document.getElementsByClassName("carousel-item");
  var dots = document.getElementsByClassName("dot");
  if (n > slajder.length) {slajderIndex = 1}
  if (n < 1) {slajderIndex = slajder.length}
  for (i = 0; i < slajder.length; i++) {
      slajder[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slajder[slajderIndex-1].style.display = "block";
  dots[slajderIndex-1].className += " active";
}
