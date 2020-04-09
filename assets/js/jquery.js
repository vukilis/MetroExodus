$(document).ready(function() {
  toggle.addEventListener('click', showSideBar);
  dropdown();
  $('#myBtnScroll').hide();
  var scrollTop = $("#myBtnScroll");
  $(window).scroll(function() {
    $('#myBtnScroll').show();
    var topPos = $(this).scrollTop();

    // prikaz
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }

  });

  // to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1200);
    return false;
 });
});

let sidebar = document.querySelector('.sidebar'),
    toggle = document.querySelector('.navbar-burger')

    let showSideBar = () => {
        sidebar.classList.toggle('sidebar-active'), toggle.classList.toggle('is-active')
    }


// scroll navigation
 var home = $("#home-exodus").position();
 var game = $("#game-exodus").position();
 var about = $("#about-exodus").position();
// scroll footer
var homeF = $("#home-exodus").position();
var gameF = $("#game-exodus").position();
var aboutF = $("#about-exodus").position();

 $("#home").on( "click", function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;});
 $("#game").on( "click", function() {
  $('html, body').animate({
    scrollTop: game.top
  }, 1200);
  return false;});
 $("#about").on( "click", function() {
  $('html, body').animate({
    scrollTop: about.top
  }, 1200);
  return false;});

// for footer
 $("#homeF").on( "click", function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;});
 $("#gameF").on( "click", function() {
  $('html, body').animate({
    scrollTop: game.top
   }, 1200);
   return false;});
 $("#aboutF").on( "click", function() {
  $('html, body').animate({
    scrollTop: about.top
   }, 1200);
   return false;});

// dropdown menu
function dropdown(){
   $('.dropdown').click(function () {
           $(this).attr('tabindex', 1).focus();
           $(this).toggleClass('active');
           $(this).find('.dropdown-menu').slideToggle(300);
       });
       $('.dropdown').focusout(function () {
           $(this).removeClass('active');
           $(this).find('.dropdown-menu').slideUp(300);
       });
       $('.dropdown .dropdown-menu li').click(function () {
           $(this).parents('.dropdown').find('span').text($(this).text());
           $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
       });
   }
