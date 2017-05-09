/*
    MAIN.JS - Last updated: 06.10.16
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

$(function() {

    //-----------------------------------------------------------------
    // WINDOW LOAD
    //-----------------------------------------------------------------

    $(window).on('load', function() {
        $('html').addClass('has-loaded');
        $('input, textarea').placeholder(); // IE9 Patch
        // $('[data-masonry]').masonry();
        lightbox();
    });

    //-----------------------------------------------------------------
    // POPUP GALLERY
    //-----------------------------------------------------------------

    function lightbox() {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });
    }

    //-----------------------------------------------------------------
    // LAUNCH MANAGE ON KEYPRESS
    //-----------------------------------------------------------------

    key('⌘+shift+m, ctrl+shift+m', function(){
      window.location = '/manage/';
    });

    //-----------------------------------------------------------------
    // HEADROOM.js
    //-----------------------------------------------------------------

    $(".global-header").headroom({
        // vertical offset in px before element is first unpinned
        offset : 60,
        // scroll tolerance in px before state changes
        tolerance : 0,
        // or you can specify tolerance individually for up/down scroll
        tolerance : {
            up : 5,
            down : 0
        },
        // css classes to apply
        classes : {
            // when element is initialised
            initial : "headroom",
            // when scrolling up
            pinned : "headroom--pinned",
            // when scrolling down
            unpinned : "headroom--unpinned",
            // when above offset
            top : "headroom--top",
            // when below offset
            notTop : "headroom--not-top",
            // when at bottom of scoll area
            bottom : "headroom--bottom",
            // when not at bottom of scroll area
            notBottom : "headroom--not-bottom"
        },
        // element to listen to scroll events on, defaults to `window`
        // scroller : someElement,
        // callback when pinned, `this` is headroom object
        onPin : function() {},
        // callback when unpinned, `this` is headroom object
        onUnpin : function() {},
        // callback when above offset, `this` is headroom object
        onTop : function() {},
        // callback when below offset, `this` is headroom object
        onNotTop : function() {},
        // callback when at bottom of page, `this` is headroom object
        onBottom : function() {},
        // callback when moving away from bottom of page, `this` is headroom object
        onNotBottom : function() {}
    });

//--
});

//==================================================
//
//==================================================