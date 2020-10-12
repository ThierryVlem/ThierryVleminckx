jQuery(document).ready(function ($) {

    /* For the sticky nav */
    $('.js--section-aboutme').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '100px;'
    });


    /* Scroll down buttons */
    $('.scroll-to').click(function () {
        var scrollTo = $(this).data('scroll');
        $('html, body').animate({
            scrollTop: $('.js--section-' + scrollTo).offset().top
        }, 1000);
    });


    $('.mobile-nav-wrapper').click(function () {
        document.getElementById("myNav").style.width = "100%";
    });

    $('.closebtn, .off-canvas-full-screen-nav-element').click(function () {
        document.getElementById("myNav").style.width = "0%";
    });
});