$(document).ready(function() {
    
    $('.js--section-aboutme').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '100px;'
    });
    
});