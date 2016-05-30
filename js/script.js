$(document).ready(function() {
  $(".menu").delay(300).fadeIn(800); 
  $("#namebox").delay(600).fadeIn(1500);
  $("#phrase-1").delay(2200).fadeIn(1000);
  $("#phrase-2").delay(3700).fadeIn(1000);
});

$(document).ready(function(){
  $("#homeventory-text-body, #road-warrior-text-body, #connect-four-text-body").show();
  $(".projects-text").delay(800).fadeOut();
});


$('.main-link').click(function(){
  $('.top-bar a').removeClass("active");
  if($(this).attr("id") !== "projects-nav-link" && $(this).attr("id") !== "resume-link" && $('.project-btn').hasClass("active")){
    $('.project-btn').removeClass("active");
    $('.projects-text').slideUp(200);
    $('.desktop-img, .mobile-img, .big-mobile-img, #big-iphone-container').fadeOut(200);
    $('#iphone-container, #imac-container, #project-intro-box, #screensaver, #iphone-lock-screen').fadeIn(1000);
    $('#road-warrior-btn, #homeventory-btn, #connect-four-btn').delay(200).addClass("button-rounded");
    $('#road-warrior-btn, #homeventory-btn, #connect-four-btn').delay(200).removeClass("button-half-rounded");
  }
  if ($(this).attr("id") !== "resume-link"){
  $(this).addClass("active");
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
    return false;
  }
});


 $('.main-link').click(function(evt) {
    var width = $(window).width();
    console.log(width);
    if (width <= 640){
    $('.top-bar').hide();
  }
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
        var width = $(this).width();
        if (width <= 640){
        $("#about-section").height(bodyheight+160);  
        $("#projects-section").height(bodyheight+80); 
        $("#contact-section").height(bodyheight+40);
        } else {
        $(".content-section").height(bodyheight-120);
      }
    }).resize();
});


$(function(){
 $(window).scroll(function() {
      var bodyheight = $('#welcome').height();
      var scroll = $(this).scrollTop();
        if ($(this).scrollTop() < (bodyheight - 50)) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
              $("#main-menu").addClass("not-scrolled");
            $("#main-menu").removeClass("scrolled");
            $("#main-menu ul").removeClass("scrolled");
        } else if ($(this).scrollTop() >= (bodyheight - 50)) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
             $("#main-menu").addClass("scrolled");
            $("#main-menu").removeClass("not-scrolled");
        }
    });
});







$('.project-btn').click(function(){
  if ($(this).hasClass('active')){
  return true
  }
  $('#road-warrior-btn, #homeventory-btn, #connect-four-btn').addClass("button-half-rounded");
  $('#road-warrior-btn, #homeventory-btn, #connect-four-btn').removeClass("button-rounded");
  $('.project-btn, .svg-text').removeClass("active");
   $('.projects-text').slideUp(200);
  $('#project-intro-box, .desktop-img, .mobile-img, .big-mobile-img, #big-iphone-container, #screensaver').fadeOut(200);
  $(this).addClass("active");
  jQuery(this).find(".svg-text").addClass("active");
  if ($("#homeventory-btn").hasClass('active')){
    $("#homeventory-text-body").delay(300).slideDown(600);  
    $("#iphone-container, #imac-container, #homeventory-desktop, #homeventory-mobile").delay(300).fadeIn(800);  
  } else if ($("#connect-four-btn").hasClass('active')){
    $("#connect-four-text-body").delay(300).slideDown(600); 
      $("#iphone-container, #imac-container, #connect-four-desktop, #connect-four-mobile").delay(300).fadeIn(800);  
    } else if ($("#road-warrior-btn").hasClass('active')){
    $('#imac-container, #iphone-container').fadeOut(300);
    $("#road-warrior-text-body").delay(300).slideDown(600); 
    $("#big-iphone-container, #road-warrior-mobile").delay(300).fadeIn(800);
    }
});
