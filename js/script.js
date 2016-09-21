var width = 0

var clickScroll = false;
var isScrolling = false;
var topScroll = 0;
var home = 0;
var about = 0;
var projects = 0;
var contact = 0;

$(document).ready(function() {
    $(window).resize(function() {
        var bodyheight = $(this).height();
        $("#welcome").height(bodyheight);
    }).resize();
});

$(document).ready(function() {
    $("#before-dom-loaded").fadeOut(500);
    $(window).resize(function() {
        var bodyheight = $(this).height();
        width = $(this).width();
        if (width <= 321){
        $("#about-section").height(bodyheight+335);
        $("#projects-section").height(bodyheight+30); 
        $("#contact-section").height(bodyheight-25); 
        $(".project-slider").height(bodyheight-85);
        $(".demo-wrapper").height(bodyheight-85); 
        $(".single-project-text").height(bodyheight-85);   
        }
        else if (width > 321 && width <= 640){
          console.log("iphone6 width!!!");
        $("#about-section").height(bodyheight + 300);  
        $("#projects-section").height(bodyheight+30); 
        $("#contact-section").height(bodyheight+40);
        $(".project-slider").height(bodyheight-115);
        $(".demo-wrapper").height(bodyheight-115);
        $(".single-project-text").height(bodyheight-115);
        } else if (width > 640 && width <= 1024){
        $("#about-section").height(bodyheight); 
        $(".content-section").height(bodyheight-90);
        $(".project-slider").height(bodyheight-260);
        $(".demo-wrapper").height(bodyheight-540);
        $(".single-project-text").height(bodyheight-250); 
        } else {
        $(".content-section").height(bodyheight-120);
        $(".project-slider").height(bodyheight-280);
        $(".demo-wrapper").height(bodyheight-260);
        $(".single-project-text").height(bodyheight-250);
      }
    }).resize();
});

$(document).ready(function(){
  $('.project-slider').slick({
    dots: true,
    infinite: true,
    arrows: true
  });
});


$(document).ready(function() {
  $(".menu").delay(300).fadeIn(800); 
  $(".namebox").delay(600).fadeIn(1500);
  $("#phrase-1").delay(2200).fadeIn(1000);
  $("#phrase-2").delay(3700).fadeIn(1000);
});




function scrollDown(currentTop){
  if (currentTop > home && currentTop < about){
        $('#about-nav-link').addClass("active");
         $('html, body').animate({
        scrollTop: about
    }, 1000); 
      
    console.log("scroll down to about");
  } else if (currentTop > about && currentTop < projects){
    $('#projects-nav-link').addClass("active");
          $('html, body').animate({
        scrollTop: projects
    }, 1000); 
       
      console.log("scroll down to projects");
  } else if (currentTop > projects && currentTop < contact){
    $('#contact-nav-link').addClass("active");
            $('html, body').animate({
        scrollTop: contact
    }, 1000); 
        
      console.log("scroll down to contact");
  } else {
    console.log("no scroll down");
  }
}

function scrollUp(currentTop){
  if (currentTop >= home && currentTop < about){
    $('#home-nav-link').addClass("active");
         $('html, body').animate({
        scrollTop: home
    }, 1000); 
      
    console.log("scroll up to home");
  } else if (currentTop >= about && currentTop < projects){
    $('#about-nav-link').addClass("active");
          $('html, body').animate({
        scrollTop: about
    }, 1000);
      
    console.log("scroll up to about");
  } else if (currentTop >= projects && currentTop < contact){
    $('#projects-nav-link').addClass("active");
            $('html, body').animate({
        scrollTop: projects
    }, 1000); 
           
    console.log("scroll up to projects");
  } else {
    console.log("no scroll up");
  }
}



$('.main-link').click(function(){
  clickScroll = true;
  console.log("entering click: ",clickScroll);
  $('.top-bar a').removeClass("active");
  // if($(this).attr("id") !== "projects-nav-link" && $(this).attr("id") !== "resume-link" && $('.project-btn').hasClass("active")){
  //   $('.project-btn').removeClass("active");
  //   $('.projects-text').slideUp(200);
  //   $('.desktop-img, .mobile-img, .big-mobile-img, #big-iphone-container').fadeOut(200);
  //   $('#iphone-container, #imac-container, #project-intro-box, #screensaver, #iphone-lock-screen').fadeIn(1000);
  // }
  if ($(this).attr("id") !== "resume-link" && clickScroll){
  $(this).addClass("active");
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
    setTimeout(function(){
      clickScroll = false; 
      console.log("exiting click: ",clickScroll);
    }, 1000);
    topScroll = $( $(this).attr('href') ).offset().top;
    return false;
  }
});


 $('.main-link').click(function(evt) {
    var width = $(window).width();
    if (width <= 640){
    $('.top-bar').hide();
  }
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







// $('.project-btn').click(function(){
//   if ($(this).hasClass('active')){
//   return true
//   }
//   $('.project-btn, .svg-text').removeClass("active");
//    $('.projects-text').slideUp(200);
//   $('#project-intro-box, .desktop-img, .mobile-img, .big-mobile-img, #big-iphone-container, #screensaver').fadeOut(200);
//   $(this).addClass("active");
//   jQuery(this).find(".svg-text").addClass("active");
//   if ($("#homeventory-btn").hasClass('active')){
//     $("#homeventory-text-body").delay(300).slideDown(600);  
//     $("#iphone-container, #imac-container, #homeventory-desktop, #homeventory-mobile").delay(300).fadeIn(800);  
//   } else if ($("#connect-four-btn").hasClass('active')){
//     $("#connect-four-text-body").delay(300).slideDown(600); 
//     $("#iphone-container, #imac-container, #connect-four-desktop, #connect-four-mobile").delay(300).fadeIn(800);  
//     } else if ($("#studytime-btn").hasClass('active')){
//       $("#studytime-text-body").delay(300).slideDown(600); 
//       $("#iphone-container, #imac-container, #studytime-desktop, #studytime-mobile").delay(300).fadeIn(800);    
//       } else if ($("#road-warrior-btn").hasClass('active')){
//         $('#imac-container, #iphone-container').fadeOut(300);
//         $("#road-warrior-text-body").delay(300).slideDown(600); 
//         $("#big-iphone-container, #road-warrior-mobile").delay(300).fadeIn(800);
//         }
// });
