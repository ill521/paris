// $(".checkbox").click(function(e){
//   e.preventDefault();
//   $(".checklist").slideToggle();
// })

// $(".checkbox").click(function(e){
//     e.preventDefault();
//     $(".checklist").css({display:"block"}).animate({top: -350},500);
// })

// $(".checkbox").click(function(e){
//     e.preventDefault();
//     $(".checklist").animate({height:'+=250'},1000);
// })

$('.checkbox').click(function(e){
    e.preventDefault();
    $('.checklist').toggleClass('active');
  });