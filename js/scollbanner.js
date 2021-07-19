
var didScroll1;
var lastScrollTop1 = 0;
var delta1 =5;
var navbarHeight1 = $('.popup').outerHeight();

$(window).scroll(function(event){
  didScroll1 = true;
});

setInterval(function(){
  if (didScroll1) {
    hasScrolled1();
    didScroll1 = false;
  }
},250);

function hasScrolled1() {
  var st1 = $(this).scrollTop();

  if(Math.abs(lastScrollTop1 - st1) <= delta1)
  return;

  if(st1 > lastScrollTop1 && st1 > navbarHeight1){
    $('.popup').removeClass('pop-down').addClass('pop-up');
  }else{
    if(st1 + $(window).height() < $(document).height()){
      $('.popup').removeClass('pop-up').addClass('pop-down')
    }
  }
  lastScrollTop1 = st1;
}

$(".popup button").click(function(){
  $(".popup").hide();
})