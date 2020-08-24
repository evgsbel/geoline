$('.language__link').hover(function () {
    $('.language__link').removeClass('is-active');
    $(this).toggleClass('is-active');
})

$(document).ready(function () {
    let $slider = $('.top-slider-js');

    if ($slider.length) {
        let currentSlide;
        let slidesCount;
        let wr = document.querySelectorAll('.first__ctn')
        let sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slider__counter');
        //wr.appendChild(sliderCounter)

        let updateSliderCounter = function (slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            $(sliderCounter).html('<div class="slider__number">0' + currentSlide + '</div>' + '<div class="slider__count">0' + slidesCount + '</div>')
        };

        $slider.on('init', function (event, slick) {
            $slider.append(sliderCounter);
            updateSliderCounter(slick);
        });

        $slider.on('afterChange', function (event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });

        $slider.slick({
            arrows: false,
            dots: true,
            dotsClass: 'slider__dots',
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000,
        });

    }
})

// $(function() {
//     var box = $('#aside1'); // float-fixed block
//
//     var top = box.offset().top - parseFloat(box.css('marginTop').replace(/auto/, 0));
//     $(window).scroll(function(){
//         var windowpos = $(window).scrollTop();
//         if(windowpos < top) {
//             box.css('position', 'static');
//         } else {
//             box.css('position', 'fixed');
//             box.css('top', 0);
//         }
//     });
// });

$(() => {
    $('.js-open-sub').hover(function () {
        $(this).find('.nav__sub').toggleClass('show')
    })
})
// $(() => {
//     $(function() {
//         var box = $('#page-header'); // float-fixed block
//
//         var top = box.offset().top - parseFloat(box.css('marginTop').replace(/auto/, 0));
//         $(window).scroll(function(){
//             var windowpos = $(window).scrollTop();
//             if(windowpos < top) {
//                 box.css('position', 'static');
//             } else {
//                 box.css('position', 'fixed');
//                 box.css('top', 0);
//                 box.css('width', '100%');
//                 box.css('background-color', '#fff')
//                 box.css('z-index', 100)
//             }
//         });
//     });
// })
$(() => {
    function checkWidth() {
        let windowWidth = $('body').innerWidth()
        if (windowWidth > 1025) {
            //remove scrollbar on mobile
            $(function () {
                var topPos = $('#aside1').offset().top;
                $(window).scroll(function () {
                    var top = $(document).scrollTop(),
                        pip = $('.footer').offset().top,
                        height = $('#aside1').outerHeight();
                    if (top > topPos && top < pip - height) {
                        $('#aside1').addClass('in-fix').removeAttr("style");
                    } else if (top > pip - height) {
                        $('#aside1').removeClass('in-fix').css({'position': 'absolute', 'bottom': '0'});
                    } else {
                        $('#aside1').removeClass('in-fix');
                    }
                });
            });
        }
    }

    checkWidth();
    $(window).resize(function () {
        checkWidth(); // проверит при изменении размера окна клиента
    });
});


