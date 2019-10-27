$(document).ready(() => {
  $('#main-background').animate({height: `1000px`}, 1723);
  $('#main-text').animate({opacity: 2}, 2323);
});
//коли заходиш на сайт верхня анімація

$(window).scroll(() => {
  let scrollTop = $(window).scrollTop(); //вираховує к-сть пікселів які ми прокрутили зверху
  
  if (scrollTop > $('#main-background').height()/20) {
    $('#navbar').animate({opacity: `1`}, 1500)
  }
});
//коли ми скролимо то появляється навбар

$(window).scroll(() => {
 
  if($(this).scrollTop() != 0) {
   
  $('#toTop').fadeIn();
   
  } else {
   
  $('#toTop').fadeOut();
   
  }
   
  });
   
  $('#toTop').click(() => {
   
  $('body,html').animate({scrollTop:0},800);
   
  });

  //логіка кнопки топ

  const navbarScroll = (scrollTop) => {
    $('html, body').animate({
      scrollTop: scrollTop
    }, 1300);
  }
  //якщо в навбарі є менюшка, якої немає в html то вертає наверх


  $('#general-info').click(() => {
    navbarScroll($('#general').offset().top - 56);
  });
  $('#photos').click(() => {
    navbarScroll($('#photos-info').offset().top - 56);
  });
  $('#contact-info').click(() => {
    navbarScroll($('#contact').offset().top - 56);
  });
  $('#more-info').click(() => {
    navbarScroll($('#general').offset().top - 56)
  })