import TimelineMax from 'TimelineMax'
import TweenLite from 'TweenLite'
import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'
import 'debug.addIndicators'
import scrollToPlugin from 'scrollToPlugin'


let ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});

// Create scene
// $("#one").each(function() {
//
//     let name = $(this).attr('id');
//
//     new ScrollMagic.Scene({
//         triggerElement: this
//     })
//         .setPin(this)
//         .loglevel(3)
//         .addTo(ctrl);
//
//     // Get window height
//     let wh = window.innerHeight;
//
//     new ScrollMagic.Scene({
//         offset: wh*1
//     })
//         .setClassToggle("header", "page-header")
//         .addTo(ctrl);
//
//
//     new ScrollMagic.Scene({
//         offset: wh*1,
//     })
//         .setClassToggle(".sidebar", "sidebar-start")
//         .addTo(ctrl);
//
//     new ScrollMagic.Scene({
//         offset: wh*1
//     })
//         .setClassToggle(".content", "content_scroll")
//         .addTo(ctrl);
// });


$(function () {
    let tl0 = new TimelineMax();
    let tl1 = new TimelineMax();
    let tl2 = new TimelineMax();
    const controller = new ScrollMagic.Controller();
    tl0
        .fromTo('.preloader__logo', .4, {x: 10, opacity: 0}, {x: 0, opacity: 1}, 0.5)
        .staggerFromTo('.preloader__caption', .3, {x: 10, opacity: 0}, {x: 0, opacity: 1}, 0.3)
        .staggerFromTo('.preloader__subtitle', .3, {x: 10, opacity: 0}, {x: 0, opacity: 1}, 0.3)
        .staggerFromTo('.preloader', 1, {scale: 1}, {
            scale: 1.1,
            ease: Linear.easeNone,
            repeatDelay: 0,
            repeat: -1,
            yoyo: true
        }, 0)
    tl1
        .fromTo('.footer__logo', .9, {x: -100, opacity: 0}, {x: 0, opacity: 1}, 0.5)
    const scene4p2 = new ScrollMagic.Scene({
        triggerElement: ".footer",
        triggerHook: .9,
        // reverse: false,
    })
        .setTween(tl1)
        .addTo(controller);

    tl2
        .fromTo('.sidebar__logo', .9, {x: 0, opacity: 1}, {x: -100, opacity: 0}, 0.5)
    const scene4p3 = new ScrollMagic.Scene({
        triggerElement: ".footer",
        triggerHook: .9,
        // reverse: false,
    })
        .setTween(tl2)
        .addTo(controller);


})


$(window).on('load', gsapScrollPanel);

function gsapScrollPanel() {
    var controllerScrollPanel,
        scrollSceneDefaultForward,
        scrollSceneDefaultReverse,
        resizeTimer;

    // If the .fullpage container exists, set up the fullpage section animations
    if ($('.fullpage').length) {
        initController();
        handleResize();
    }

    // Initialize the scrollMagic controller
    function initController() {

        // Init new controller
        controllerScrollPanel = new ScrollMagic.Controller();

        // Change behaviour of controller to animate scroll instead of jump
        controllerScrollPanel.scrollTo(function (newpos) {
            TweenMax.to(window, 0.5, {scrollTo: {y: newpos, autoKill: false}});
        });

        // Init the forward and reverse scenes
        scrollPanelScenes();
    }

    // If window is resized, destroy controller and reset once resize has stopped
    function handleResize() {
        $(window).resize(function () {
            destroyScrollPanels();
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(doneResizing, 500);
        });

        function doneResizing() {
            reInitScrollPanels();
        }
    }

    // Destroy scroll panels
    function destroyScrollPanels() {
        controllerScrollPanel.destroy();
        scrollSceneDefaultForward.destroy();
        scrollSceneDefaultReverse.destroy();
    }

    // Re-init scroll panels
    function reInitScrollPanels() {
        controllerScrollPanel = null;
        scrollSceneDefaultForward = null;
        scrollSceneDefaultReverse = null;
        initController();
    }

    // The forward and reverse scenes
    function scrollPanelScenes() {
        // Create scenes for panels, when scrolling forward
        $('.fullpage__section').each(function (index, elem) {
            var $scrollPanel = $(elem);
            var forwardScrollPos = $scrollPanel.offset().top;

            scrollSceneDefaultForward = new ScrollMagic.Scene({
                offset: 10, // Number of pixels user can scroll before panel snaps into place
                triggerElement: elem,
                triggerHook: 1,// Trigger this scene when top of panel enters view
            })
                .on('start', function (event) {
                    if (event.scrollDirection == 'FORWARD') {
                        controllerScrollPanel.scrollTo(forwardScrollPos); // If direction is forward, trigger scrollTo
                    } else if (event.scrollDirection == 'REVERSE') {
                        // Do nothing
                    }
                })
                // Prevent problems with momentum scrolling by pausing for a period of time
                // .on('enter', function(event) {
                //    // $('body').addClass('is-locked');
                //     setTimeout(function() {
                //         $('body').removeClass('is-locked');
                //     },1200)
                // })
                .addTo(controllerScrollPanel);
        })
        // Create scenes for panels, when scrolling reverse
        $('.fullpage__section:nth-child(n+2)').each(function (index, elem) {
            var $scrollPanel = $(elem);
            var reverseScrollPos = $scrollPanel.prev().offset().top;

            scrollSceneDefaultReverse = new ScrollMagic.Scene({
                offset: -10, // Number of pixels user can scroll before panel snaps into place
                triggerElement: elem,
                triggerHook: 0,// Trigger this scene when bottom of panel enters view
            })
                .on('start', function (event) {
                    if (event.scrollDirection == 'FORWARD') {
                        // Do nothing
                    } else if (event.scrollDirection == 'REVERSE') {
                        controllerScrollPanel.scrollTo(reverseScrollPos); // If direction is reverse, trigger scrollTo
                    }
                })
                // Prevent problems with momentum scrolling by pausing for a period of time
                // .on('leave', function(event) {
                //     $('body').addClass('is-locked');
                //     setTimeout(function() {
                //         $('body').removeClass('is-locked');
                //     },1200)
                // })
                .addTo(controllerScrollPanel);
        })
        // Get window height
        let wh = window.innerHeight;
        new ScrollMagic.Scene({
            offset: (wh * 1) - 70
        })
            .setClassToggle("header", "page-header")
            .addTo(ctrl);

        new ScrollMagic.Scene({
            offset: wh*1,
        })
            .setClassToggle(".sidebar", "sidebar-start")
            .addTo(ctrl);
    }
}
