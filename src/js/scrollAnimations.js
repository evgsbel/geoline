import TimelineMax from 'TimelineMax'
import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'
import 'debug.addIndicators'



let ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});

// Create scene
$("#one").each(function() {

    let name = $(this).attr('id');

    new ScrollMagic.Scene({
        triggerElement: this
    })
        .setPin(this)
        .loglevel(3)
        .addTo(ctrl);

    // Get window height
    let wh = window.innerHeight;

    new ScrollMagic.Scene({
        offset: wh*1
    })
        .setClassToggle("header", "page-header")
        .addTo(ctrl);

    new ScrollMagic.Scene({
        offset: wh*1
    })
        .setClassToggle(".sidebar", "sidebar-start")
        .addTo(ctrl);
});



$(function () {
    let tl0 = new TimelineMax();
    let tl1 = new TimelineMax();
    let tl2 = new TimelineMax();
    const controller = new ScrollMagic.Controller();
    tl0
        .fromTo('.preloader__logo', .4, {x: 10, opacity: 0}, {x: 0, opacity: 1}, 0.5)
        .staggerFromTo('.preloader__caption', .3, {x: 10, opacity: 0}, {x: 0, opacity: 1}, 0.3)
        .staggerFromTo('.preloader__subtitle', .3, {x:10,opacity:0},{x:0,opacity:1}, 0.3)
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
            triggerHook: 1,
            // reverse: false,
        })
            .setTween(tl1)
            .addTo(controller);

    tl2
        .fromTo('.sidebar__logo', .9, {x: 0, opacity: 1}, {x: -100, opacity: 0}, 0.5)
    const scene4p3 = new ScrollMagic.Scene({
        triggerElement: ".footer",
        triggerHook: 1,
        // reverse: false,
    })
        .setTween(tl2)
        .addTo(controller);


})

