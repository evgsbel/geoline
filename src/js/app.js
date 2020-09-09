//preloader
$(() => {
    setTimeout(function () {
        $('.preloader__wrp').fadeOut();
    }, 1500);
});
//select languageф
$('.language__link').hover(function () {
    $('.language__link').removeClass('is-active');
    $(this).toggleClass('is-active');
})


// top slider with counters
// $(document).ready(function () {
//     let $slider = $('.top-slider-js');
//
//     if ($slider.length) {
//         let currentSlide;
//         let slidesCount;
//         let wr = document.querySelectorAll('.first__ctn')
//         let sliderCounter = document.createElement('div');
//         sliderCounter.classList.add('slider__counter');
//         //wr.appendChild(sliderCounter)
//
//         let updateSliderCounter = function (slick, currentIndex) {
//             currentSlide = slick.slickCurrentSlide() + 1;
//             slidesCount = slick.slideCount;
//             $(sliderCounter).html('<div class="slider__number">0' + currentSlide + '</div>' + '<div class="slider__count">0' + slidesCount + '</div>')
//         };
//
//         $slider.on('init', function (event, slick) {
//             $slider.append(sliderCounter);
//             updateSliderCounter(slick);
//         });
//
//         $slider.on('afterChange', function (event, slick, currentSlide) {
//             updateSliderCounter(slick, currentSlide);
//         });
//
//         $slider.slick({
//             arrows: false,
//             dots: true,
//             dotsClass: 'slider__dots',
//             //fade: true,
//             cssEase: 'cubic-bezier(1,1,.75,.96)',
//             autoplay: false,
//             autoplaySpeed: 5000,
//         });
//
//         $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//             $('.slider__dots .slick-active button').toggleClass('askdjalkdsjaskdlj')
//         });
//
//     }
// })


// $(() => {
//     $('.top-slider-js').owlCarousel({
//         loop: true,
//         dots: true,
//         items: 1,
//         smartSpeed: 1600,
//         margin: 0,
//         nav: false,
//         mouseDrag: false,
//         // navText: ["<svg width='28' height='9'> <use xlink:href='#steps__arrow--prev'></use></svg><span class='ml-3 d-none d-xl-block'>Предыдущий шаг</span>","<span class='mr-3 d-none d-xl-block'>Следующий шаг</span><svg width='28' height='9'> <use xlink:href='#steps__arrow--next'></use></svg>"],
//         responsive : {
//             0   : {
//                 animateIn: 'fadeIn', // add this
//                 animateOut: 'fadeOut', // and this
//             },
//             1200 : {
//                 autoHeight: false
//             }
//         },
//         onInitialized: function(e) {
//             $('.slider__item-count').text('0' + this.items().length);
//         },
//         onChanged: function () {
//             $('.slider .owl-item').removeClass('hover-on-promo');
//         }
//     });
//
//     $('.js-slider-prev').on('click', function sliderPrevSlide () {
//         $('.slider__in').trigger('prev.owl.carousel');
//     });
//     $('.js-slider-next').on('click', function sliderNextSlide () {
//         $('.slider__in').trigger('next.owl.carousel');
//     });
//
//     const triggerElem = $('.slider .owl-item');
//     triggerElem.on('mouseenter', function triggerElemMouseEnter () {
//         $(this).siblings('.owl-item').addClass('hover-on-promo');
//     });
//     triggerElem.on('mouseleave', function triggerElemMouseLeave () {
//         $(this).siblings('.owl-item').removeClass('hover-on-promo');
//     });
// });

console.clear(); // for codepen preview



var owl = $(".top-slider-js");

owl.owlCarousel({
    nav: false, // must be true
    margin: 30,
    items: 1,
    mouseDrag: false,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dotsClass: 'owl-dots',
    onInitialized: function(){
        addDotCurrent();
        posUpdate();

    },
    onChanged: posUpdate,
});
owl.on('changed.owl.carousel', function(e) {
    $('.slider__counter').html('<div class="slider__number">0' + ++e.page.index + '</div>' + '<div class="slider__count">0' + e.item.count + '</div>')
});


function addDotCurrent() {
    $('.owl-dots').wrap('<div class="dots-wrap slider__dots"></div>');
    //$('.owl-dots button').wrap('<li></li>');
    $('.dots-wrap').append('<div class="dot-current-bg"></div>');
}
function posUpdate(event) {
    if($('.dots-wrap')[0]) {
        var dot = $('.dot-current-bg');
        var active = $('.owl-dot.active');
        var activeX = active.position().left;
        dot.animate({'left': activeX});
    } else {
        addDotCurrent();
    }
}
function callback(event) {
    var current  = event.item.index;     // Position of the current item
    $('.owl-item img').removeClass('active');
    $(event.target).find(".owl-item").eq(current).find("img").addClass('active');
}
$('.top-slider-js').on('translate.owl.carousel', function(e) {
    var index = e.item.index;
    $('.banner__ttl').removeClass('animated animate__animated fadeInDown');
    $('.banner__ttl').eq(index).addClass('animated animate__animated fadeInDown');
    $('.banner__subttl').removeClass('animated animate__animated fadeInUp');
    $('.banner__subttl').eq(index).addClass('animated animate__animated fadeInUp');
});

//open sub menu
$(() => {
let el = document.getElementsByClassName('js-open-sub');
for (let i = 0; i < el.length; i++) {
    el[i].addEventListener("mouseenter", showSub, false);
    el[i].addEventListener("mouseleave", hideSub, false);
}

function showSub(e) {
    if (this.children.length > 1) {
        this.children[1].style.height = "auto";
        this.children[1].style.overflow = "visible";
        this.children[1].style.opacity = "1";
    } else {
        return false;
    }
}

function hideSub(e) {
    if (this.children.length > 1) {
        this.children[1].style.height = "0px";
        this.children[1].style.overflow = "hidden";
        this.children[1].style.opacity = "0";
    } else {
        return false;
    }
}
});
// fix blocks
$(() => {
    function checkWidth() {
        let windowWidth = $('body').innerWidth()
        if (windowWidth > 769) {
            $("#aside1").sticky({topSpacing: 0, bottomSpacing: 148});
        }
    }
    checkWidth();
    $(window).resize(function () {
        checkWidth(); // проверит при изменении размера окна клиента
    });
});


$(() => {
    $('.js-menu__open').on('click', function headerHambClick() {
        $('body')
            .toggleClass('menu-open')
    });
    $('.js-menu__close').on('click', function popupCloseBtnClick() {
        $('body').removeClass('menu-open');
    });
    $('.js-open-mobile-sub').on('click', function openMobileSub() {
        $('.js-open-mobile-sub').removeClass('is-open')
        $(this).addClass('is-open')
        $(this).find('a').removeAttr('href')
       // $('.js-open-mobile-sub').find('.sub__menu_mobile').slideUp(400)
        $(this).find('.sub__menu_mobile').slideToggle(400)
    })
    $('.js-open-map-right').on('click', function openMapRight() {
        let th = $(this);
        $(this).removeAttr('href')
        $(this).closest('.contacts__item').find('.map').toggleClass('is-active is-active_right')
        $(this).closest('.contacts__wr').toggleClass('is-active')
        $(this).toggleClass('is-active')
        if (th.hasClass("is-active")) {
            th.html("Скрыть карту");
        } else {
            th.html("Посмотреть на карте");
        }
    })
    $('.js-open-map-left').on('click', function openMapLeft() {
        let th = $(this);
        $(this).removeAttr('href')
        $(this).closest('.contacts__item').find('.map').toggleClass('is-active is-active_left')
        $(this).closest('.contacts__wr').toggleClass('is-active')
        $(this).toggleClass('is-active')
        if (th.hasClass("is-active")) {
            th.html("Скрыть карту");
        } else {
            th.html("Посмотреть на карте");
        }
    })
});


//ancors
$(() => {
    $("a.js-ancor-link").click(function () {
        let elementClick = $(this).attr("href")
        let destination = $(elementClick).offset().top
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        console.log(destination)
        return false;
    });
});

// carousel case
$('.js-case-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    responsive: [
        {
            breakpoint: 1367,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 1281,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// scroll case
$(window).on('load', function () {
    $(".mcs-horizontal").mCustomScrollbar({
        axis: "x",
        theme: "dark-thick",
        autoExpandScrollbar: true,
        advanced: {autoExpandHorizontalScroll: true},
        updateOnContentResize: true,
        scrollbarPosition: 'outside',
        scrollInertia: 200,
    });
    // $('.js-content-scroll').mCustomScrollbar({
    //     axis: 'y',              // вертикальный скролл
    //     scrollInertia: '1000',
    //     scrollButtons:{ enable: false }
    // });
});

//accordeon
$('.js-ui-accordion_click').click(function() {
    if ($(this).closest('.js-ui-accordion__item').find('.js-ui-accordion_open').is(':visible')) {
        $(this).closest('.js-ui-accordion__item').find('.js-ui-accordion_open').hide('slow');

    }
    else {
        $(this).closest('.js-ui-accordion__item').find('.js-ui-accordion_open').show('slow');
    }
    $(this).toggleClass('is-active')
});
