$(document).ready(() => {
  $('#main-background').animate({height: `1000px`}, 1700);
  $('#main-text').animate({opacity: 2}, 100);
});


$(window).scroll(() => {
  let scrollTop = $(window).scrollTop();
  
  if (scrollTop > $('#main-background').height()/20) {
    $('#navbar').animate({opacity: `1`}, 1500)
  }
});