
var NOP=function(){};
window.inf=console?console.log:NOP;

inf('Begin of my script.js code...');

$(function() {

    inf('ALL JS FILES WERE LOADED, RUNNING THE onReady CODE!!!');

    new WOW().init();

    $('.navbar-collapse').on('click', function () {
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });
    
    $('.home-slider').owlCarousel({
        animateOut: 'fadeOut',
        items:1,
        loop:true,
        dots:false,
        autoplayHoverPause:false,
        autoplay:true,
        smartSpeed:1000,
    })
    
    // Courses
    $('.owl-courses').owlCarousel({
        animateOut:'fadeOut',
        loop:true,
        autoplayHoverPause:true,
        autoplay:true,
        smartSpeed:1000,
        dots:false,
        nav:true,
        navText:[
            '<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>'
        ],
        responsiveClass:true,
        responsive: {
            0:{
                items:1,
            },
            1000: {
                items:3,
            }
        }
    });
    
    // Client
    
    $('.owl-client').owlCarousel({
        animateOut:'fadeOut',
        loop:true,
        autoplayHoverPause:false,
        autoplay:true,
        smartSpeed:1000,
        responsiveClass:true,
        responsive: {
            0:{
                items:1,
            },
            1000:{
                items:3,
            }
        }
    });
        
});

inf('After my script.js code body');

