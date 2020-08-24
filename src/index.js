// JS
//import * as $ from 'jquery'
import 'slick-carousel/slick/slick.min';
import '@fancyapps/fancybox'
import 'jquery-ui/ui/widgets/accordion'

import './js/app'
import './js/accordeon'
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