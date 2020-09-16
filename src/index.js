// JS
//import * as $ from 'jquery'
import 'slick-carousel/slick/slick.min';
import 'owl.carousel/dist/owl.carousel.min';
import '@fancyapps/fancybox'
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min'
import 'jquery-sticky/jquery.sticky'
import 'select2/dist/js/select2.min'
import './js/app'
import './js/scrollAnimations.js'
// SCSS
import './assets/sass/utils/libs.sass'
import './assets/sass/app.sass'
import './assets/sass/media.sass'

// svg sprite
function requireAll(r) {
    r.keys().forEach(r);
}

requireAll(require.context('./assets/img/svg/', true, /\.svg$/));

fetch(`./assets/img/svg/sprite.svg`).then(res => {
    return res.text();
}).then(data => {
    document.getElementById('svg-icons').innerHTML = data;
});

//swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});
