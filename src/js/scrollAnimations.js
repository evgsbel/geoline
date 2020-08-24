import TimelineMax from 'TimelineMax'
import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'
import 'debug.addIndicators'
(function($) {

    // Init ScrollMagic
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
        }
    });

    // Создаем сцену
    $("#one").each(function() {

        new ScrollMagic.Scene({
            triggerElement: this
        })
            .setPin(this)
            .addTo(ctrl);

    });

})(jQuery);

