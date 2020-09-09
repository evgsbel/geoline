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

$(() => {
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
        onInitialized: function () {
            addDotCurrent();
            posUpdate();

        },
        onChanged: posUpdate,
    });
    owl.on('changed.owl.carousel', function (e) {
        $('.slider__counter').html('<div class="slider__number">0' + ++e.page.index + '</div>' + '<div class="slider__count">0' + e.item.count + '</div>')
    });


    function addDotCurrent() {
        $('.owl-dots').wrap('<div class="dots-wrap slider__dots"></div>');
        //$('.owl-dots button').wrap('<li></li>');
        $('.dots-wrap').append('<div class="dot-current-bg"></div>');
    }

    function posUpdate(event) {
        if ($('.dots-wrap')[0]) {
            var dot = $('.dot-current-bg');
            var active = $('.owl-dot.active');
            var activeX = active.position().left;
            dot.animate({'left': activeX});
        } else {
            addDotCurrent();
        }
    }

    function callback(event) {
        var current = event.item.index;     // Position of the current item
        $('.owl-item img').removeClass('active');
        $(event.target).find(".owl-item").eq(current).find("img").addClass('active');
    }

    $('.top-slider-js').on('translate.owl.carousel', function (e) {
        var index = e.item.index;
        $('.banner__ttl').removeClass('animated animate__animated fadeInDown');
        $('.banner__ttl').eq(index).addClass('animated animate__animated fadeInDown');
        $('.banner__subttl').removeClass('animated animate__animated fadeInUp');
        $('.banner__subttl').eq(index).addClass('animated animate__animated fadeInUp');
    });
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
    $('.js-content-scroll').mCustomScrollbar({
        axis: 'y',              // вертикальный скролл
        scrollInertia: '300',
        scrollbarPosition: "500",
        scrollButtons:{ enable: false }
    });
});

//accordeon
$('.js-ui-accordion_click').click(function () {
    if ($(this).closest('.js-ui-accordion__item').find('.js-ui-accordion_open').is(':visible')) {
        $(this).closest('.js-ui-accordion__item').find('.js-ui-accordion_open').hide('slow');

    } else {
        $(this).closest('.js-ui-accordion__item').find('.js-ui-accordion_open').show('slow');
    }
    $(this).toggleClass('is-active')
});
