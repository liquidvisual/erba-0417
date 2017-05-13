/*
    HERO.JS - Last updated: 11.05.17
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

;(function($) {
    'use strict';

    //-----------------------------------------------------------------
    // VARIABLES
    //-----------------------------------------------------------------

    var isTablet = $(window).width() < 1025; // no more touch

    //-----------------------------------------------------------------
    // ON READY (IMPORTANT)
    // Multiple slides trigger the hero carousel
    //-----------------------------------------------------------------

    $(function() {
        if ($('.lv-hero-item').length > 1) launchCarousel();
    });

    //-----------------------------------------------------------------
    // LAUNCH CAROUSEL
    //-----------------------------------------------------------------

    function launchCarousel() {
        $('.lv-hero').bxSlider({
            auto: !isTablet,
            mode: 'fade', // fade (much have fixed height or won't work)
            adaptiveHeight: true,
            responsive: true,
            touchEnabled: true,
            speed: 1200,
            pause: 6000,
            slideMargin: 0,
            slideSelector: ".lv-hero-item",
            minSlides: 1,
            controls: false, // true
            nextSelector: ".lv-hero-carousel-next-btn",
            prevSelector: ".lv-hero-carousel-prev-btn",
            nextText: "",
            prevText: "",
            infiniteLoop: true,
            useCSS: true,
            pager: false,
            pagerSelector: '.lv-hero-carousel-bullets'
            // onSliderLoad:  function(){  $('.lv-hero-caption').show().addClass('fadeInLeft');},
            // onSlideBefore: function(){  $('.lv-hero-caption').hide().removeClass('fadeInLeft');},
            // onSlideAfter:  function(){  $('.lv-hero-caption').show().addClass('fadeInLeft');}
        });
    }
}(jQuery));

//==================================================
//
//==================================================