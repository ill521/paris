$(".ham button").click(function(){
  $(".mobile-nav").addClass("active")
  $(".mobile-nav").css({display:"block"})
})
$(".mobile-closeBtn").click(function(){
  $(".mobile-nav").hide()
  $(".mobile-nav").removeClass("active")
})

$(".mobileProduct a").click(function(){
  $(".sub-menu").slideToggle()
})

$(".mobileProduct").click(function(){
  $(this).toggleClass("active")
})