




$('.main-link').click(function(){
  $('.top-bar a').removeClass("active");
  $(this).addClass("active");
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 700);
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
    
      console.log('Body height is: ',bodyheight);
      var scroll = $(this).scrollTop();
      console.log("Scroll top is: ",scroll)
        if ($(this).scrollTop() >= (bodyheight - 50)) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
            console.log("You've scrolled past welcome.");
             $("header").addClass("scrolled");
            $("header").removeClass("not-scrolled");
        }
    });
});


$(function(){
 $(window).scroll(function() {
      var bodyheight = $('#welcome').height();
    
      console.log('Body height is: ',bodyheight);
      var scroll = $(this).scrollTop();
      console.log("Scroll top is: ",scroll)
        if ($(this).scrollTop() < (bodyheight - 50)) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
            console.log("You've scrolled past welcome.");
              $("header").addClass("not-scrolled");
            $("header").removeClass("scrolled");
            $("header ul").removeClass("scrolled");
        }
    });
});


 // $(function(){
 //      $(".typetext").typed({
 //        strings: ["Creative problem solver.", "Experience-conscious full-stack developer."],
 //         typeSpeed: 40,
 //            // time before typing starts
 //            startDelay: 3000,
 //            // backspacing speed
 //            backSpeed: 35,
 //            // time before backspacing
 //            backDelay: 600,
 //            // loop
 //            loop: false,
 //            // false = infinite
 //            loopCount: false,
 //            // show cursor
 //            showCursor: true,
 //            // character for cursor
 //            cursorChar: "|",
 //            contentType: 'text'
 //      });
 //  });






 $(document).ready(function() {
  $(".menu").delay(200).fadeIn(1000); 
  $("#namebox").delay(1200).fadeIn(1500);
  $("#phrase-1").delay(2700).fadeIn(1500);
  $("#phrase-2").delay(4200).fadeIn(1500);
});





// $(document).ready(function() {
// function displayCursor(){
//  $(".typed-cursor").fadeIn(500);
// }
// setTimeout(displayCursor, 2500);
// });



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
    $("#homeventory-text-body").delay(300).slideDown(300);  
    $("#iphone-container, #imac-container, #homeventory-desktop, #homeventory-mobile").delay(300).fadeIn(800);  
  } else if ($("#connect-four-btn").hasClass('active')){
    $("#connect-four-text-body").delay(300).slideDown(300); 
      $("#iphone-container, #imac-container, #connect-four-desktop, #connect-four-mobile").delay(300).fadeIn(800);  
    } else if ($("#road-warrior-btn").hasClass('active')){
    $('#imac-container, #iphone-container').fadeOut(300);
    $("#road-warrior-text-body").delay(300).slideDown(300); 
    $("#big-iphone-container, #road-warrior-mobile").delay(300).fadeIn(800);
    }
});


// $(document).ready(function(){
//     $(".svg-framework-icon").hover(function(){
//         $( "book" ).slideDown( "slow", function() {
//     // Animation complete.
//   });
//     });
// });




