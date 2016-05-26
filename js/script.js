$('.main-link').click(function(){
  $('.top-bar a').removeClass("active");
  $(this).addClass("active");
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
    return false;
});

$(document).ready(function() {
    $(window).resize(function() {
        var bodyheight = $(this).height();
        $("#welcome").height(bodyheight);
    }).resize();
});

$(document).ready(function() {
    $(window).resize(function() {
        var bodyheight = $(this).height();
        $(".content-section").height(bodyheight-120);
    }).resize();
});


$(function(){
 $(window).scroll(function() {
      var bodyheight = $('#welcome').height();
      var scroll = $(this).scrollTop();
        if ($(this).scrollTop() < (bodyheight - 50)) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
              $("header").addClass("not-scrolled");
            $("header").removeClass("scrolled");
            $("header ul").removeClass("scrolled");
        } else if ($(this).scrollTop() >= (bodyheight - 50)) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
             $("header").addClass("scrolled");
            $("header").removeClass("not-scrolled");
        }
    });
});


 $(document).ready(function() {
  $(".menu").delay(100).fadeIn(800); 
  $("#namebox").delay(600).fadeIn(1500);
  $("#phrase-1").delay(2200).fadeIn(1000);
  $("#phrase-2").delay(3700).fadeIn(1000);
});



$('.project-btn').click(function(){
  if ($(this).hasClass('active')){
  return true
  }
  $('.project-btn, .svg-text').removeClass("active");
   $('.projects-text').slideUp(200);
  $('#project-intro-box, .desktop-img, .mobile-img, .big-mobile-img, #big-iphone-container, #screensaver').fadeOut(200);
  $(this).addClass("active");
  jQuery(this).find(".svg-text").addClass("active");
  if ($("#homeventory-btn").hasClass('active')){
    $("#homeventory-text-body").delay(300).slideDown(400);  
    $("#iphone-container, #imac-container, #homeventory-desktop, #homeventory-mobile").delay(300).fadeIn(800);  
  } else if ($("#connect-four-btn").hasClass('active')){
    $("#connect-four-text-body").delay(300).slideDown(400); 
      $("#iphone-container, #imac-container, #connect-four-desktop, #connect-four-mobile").delay(300).fadeIn(800);  
    } else if ($("#road-warrior-btn").hasClass('active')){
    $('#imac-container, #iphone-container').fadeOut(300);
    $("#road-warrior-text-body").delay(300).slideDown(400); 
    $("#big-iphone-container, #road-warrior-mobile").delay(300).fadeIn(800);
    }
});
