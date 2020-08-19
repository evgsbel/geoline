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
