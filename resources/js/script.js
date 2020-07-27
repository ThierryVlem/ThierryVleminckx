$(document).ready(function() {
    
    /* For the sticky nav */
    $('.js--section-aboutme').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '100px;'
    });
    
    
    
    /* Scroll down buttons */
    $('.js--scroll-to-aboutme').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-aboutme').offset().top}, 1000);
    });
    
    
    
    
    
    
});