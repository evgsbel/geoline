import TimelineMax from 'TimelineMax'
import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'
import 'debug.addIndicators'


(function ($) {
    let tl0 = new TimelineMax()

    // Init ScrollMagic
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
        }
    });


    // Создаем сцену
    $("#one").each(function () {

        new ScrollMagic.Scene({
            triggerElement: this
        })
            .setPin(this)
            .addTo(ctrl);

    });


})(jQuery);

$(function () {
    let tl0 = new TimelineMax();
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
})

