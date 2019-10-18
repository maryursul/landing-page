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

$(window).scroll(() => {
 
  if($(this).scrollTop() != 0) {
   
  $('#toTop').fadeIn();
   
  } else {
   
  $('#toTop').fadeOut();
   
  }
   
  });
   
  $('#toTop').click(function() {
   
  $('body,html').animate({scrollTop:0},800);
   
  });

  const navbarScroll = (scrollTop) => {
    $('html, body').animate({
      scrollTop: scrollTop
    }, 1300);
  }
  
  $(document).ready(() => {
    $(this).scrollTop(0);
  });
  

  $('#general-info').click(() => {
    navbarScroll($('#general').offset().top - 56);
  });
  $('#photoes').click(() => {
    navbarScroll($('#photoes-info').offset().top - 56);
  });
  $('#contact-info').click(() => {
    navbarScroll($('#contact').offset().top - 56);
  });
  $('#more-info').click(() => {
    navbarScroll($('#general').offset().top - 56)
  })