$(document).ready(function() {
    var offset = 220;
    var duration = 500;
    $(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })


function random (min, max) { 
    return Math.floor(Math.random()*(max-min)+min); 
  } 
});