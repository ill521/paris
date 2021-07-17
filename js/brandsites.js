// $(".checkbox").click(function(e){
//   e.preventDefault();
//   $(".checklist").slideToggle();
// })

jQuery('.checklist').slideUp(0);

                            jQuery(function($){
                                $('checklist a[href="#"]').removeAttr('href');
                                $('.checkbox').on('click', function(e){
                                    e.preventDefault();
                                    $('.checklist').slideToggle(400);

                                });
                            });