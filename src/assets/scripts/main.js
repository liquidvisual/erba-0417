/*
    MAIN.JS - Last updated: 10.05.17
*/
//-----------------------------------------------------------------
// ON LOAD
//-----------------------------------------------------------------

$(window).on('load', function(event) {
    $('html').addClass('has-loaded');
    lightbox();
});

//-----------------------------------------------------------------
// ADHOC THEME SWITCHING BETWEEN MICROSITE
//-----------------------------------------------------------------

if (window.location.hostname === 'erbas.yourwebvisual.com' ||
    window.location.hostname === 'localhost' ||
    window.location.hostname === '10.0.1.3') {

    var logo = document.querySelectorAll('.global-header .logo');

    // set temporary local storage variable - continue theme across pages
    if (!!localStorage.getItem('theme-sustain')) {
        setThemeSustain();
    }

    // logo toggle
    logo.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            var isDefault = this.classList.contains('is-default');
            var isSustain = this.classList.contains('is-sustain');

            // determine logo
            if (isDefault) unsetThemeSustain();
            if (isSustain) setThemeSustain();
        })
    });

    function setThemeSustain() {
        document.body.classList.add('theme-sustain');
        localStorage.setItem('theme-sustain', true);
        document.querySelector('.lv-hero > .lv-hero-item:first-child').style.backgroundImage = 'url(/assets/img/content/hero-sustain.jpg)';
        document.querySelector('.lv-hero-caption .panel-feature h1').innerHTML = 'Environmentally Sustainable Design';

        document.querySelector('.lv-hero-caption .panel-feature p').innerHTML = "Vndip samus eum que voloru mqui conserore videlis nusciis cidunt harum et et quam et adipsum corum est enihilitis autam renihil ipsunt laut officiis nosaess eculpa seque seruptatur, im ilit quo es as eicit, tempori animpe vident porest quibust voluptatquia dolorupici que nus, ersperi tatiandae. Nam et qui nonserunti am harum rem eosa doloria tempore dolorro videlis moluptate sequi volorem poreper ionsequ assedit, quod ullaboraerio odigend itatur re cores dita quatusciti omnist excearum hit quo qui conem quae pa nimo qui omniend emoluptas ilis sumquis re apienis exped qua.";
    }

    function unsetThemeSustain() {
        document.body.classList.remove('theme-sustain');
        localStorage.removeItem('theme-sustain');
        document.querySelector('.lv-hero > .lv-hero-item:first-child').style.backgroundImage = 'url(/assets/img/content/hero-1.jpg)';
        document.querySelector('.lv-hero-caption .panel-feature h1').innerHTML = 'Engineers for Building Services';
        document.querySelector('.lv-hero-caption .panel-feature p').innerHTML = "erbas™ is a multi-disciplinary consulting engineering firm serving clients in Commercial, Health, Education, Government, Industrial and Sustainability sectors.";
    }

} else {
    localStorage.removeItem('theme-sustain');
}

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

//==================================================
//
//==================================================