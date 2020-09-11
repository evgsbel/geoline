/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/img/svg sync recursive \\.svg$":
/*!****************************************!*\
  !*** ./src/assets/img/svg sync \.svg$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./case-back.svg": "./src/assets/img/svg/case-back.svg",
	"./case-next.svg": "./src/assets/img/svg/case-next.svg",
	"./close.svg": "./src/assets/img/svg/close.svg",
	"./fb.svg": "./src/assets/img/svg/fb.svg",
	"./icon-back.svg": "./src/assets/img/svg/icon-back.svg",
	"./in.svg": "./src/assets/img/svg/in.svg",
	"./logo-blue.svg": "./src/assets/img/svg/logo-blue.svg",
	"./logo.svg": "./src/assets/img/svg/logo.svg",
	"./news-arrow.svg": "./src/assets/img/svg/news-arrow.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/img/svg sync recursive \\.svg$";

/***/ }),

/***/ "./src/assets/img/svg/case-back.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/case-back.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "case-back-usage",
      viewBox: "0 0 27 22",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#case-back",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/case-next.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/case-next.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "case-next-usage",
      viewBox: "0 0 26 22",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#case-next",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/close.svg":
/*!**************************************!*\
  !*** ./src/assets/img/svg/close.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "close-usage",
      viewBox: "0 0 23 22",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#close",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/fb.svg":
/*!***********************************!*\
  !*** ./src/assets/img/svg/fb.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "fb-usage",
      viewBox: "0 0 10 19",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#fb",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/icon-back.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/icon-back.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-back-usage",
      viewBox: "0 0 58 8",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#icon-back",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/in.svg":
/*!***********************************!*\
  !*** ./src/assets/img/svg/in.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "in-usage",
      viewBox: "0 0 20 20",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#in",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/logo-blue.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/logo-blue.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "logo-blue-usage",
      viewBox: "0 0 276 399",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#logo-blue",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/logo.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/logo.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "logo-usage",
      viewBox: "0 0 276 399",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#logo",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/news-arrow.svg":
/*!*******************************************!*\
  !*** ./src/assets/img/svg/news-arrow.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "news-arrow-usage",
      viewBox: "0 0 42 12",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#news-arrow",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/sass/app.sass":
/*!**********************************!*\
  !*** ./src/assets/sass/app.sass ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/assets/sass/media.sass":
/*!************************************!*\
  !*** ./src/assets/sass/media.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/assets/sass/utils/libs.sass":
/*!*****************************************!*\
  !*** ./src/assets/sass/utils/libs.sass ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slick_carousel_slick_slick_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel/slick/slick.min */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel_slick_slick_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var owl_carousel_dist_owl_carousel_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel/dist/owl.carousel.min */ "./node_modules/owl.carousel/dist/owl.carousel.min.js");
/* harmony import */ var owl_carousel_dist_owl_carousel_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel_dist_owl_carousel_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var malihu_custom_scrollbar_plugin_jquery_mCustomScrollbar_concat_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min */ "./node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js");
/* harmony import */ var malihu_custom_scrollbar_plugin_jquery_mCustomScrollbar_concat_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(malihu_custom_scrollbar_plugin_jquery_mCustomScrollbar_concat_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery_sticky_jquery_sticky__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery-sticky/jquery.sticky */ "./node_modules/jquery-sticky/jquery.sticky.js");
/* harmony import */ var jquery_sticky_jquery_sticky__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_sticky_jquery_sticky__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_scrollAnimations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/scrollAnimations.js */ "./src/js/scrollAnimations.js");
/* harmony import */ var _assets_sass_utils_libs_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/sass/utils/libs.sass */ "./src/assets/sass/utils/libs.sass");
/* harmony import */ var _assets_sass_utils_libs_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_utils_libs_sass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/sass/app.sass */ "./src/assets/sass/app.sass");
/* harmony import */ var _assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/sass/media.sass */ "./src/assets/sass/media.sass");
/* harmony import */ var _assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_9__);
// JS
//import * as $ from 'jquery'






 // SCSS



 // svg sprite

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__("./src/assets/img/svg sync recursive \\.svg$"));
fetch("./assets/img/svg/sprite.svg").then(function (res) {
  return res.text();
}).then(function (data) {
  document.getElementById('svg-icons').innerHTML = data;
});

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, jQuery) {function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//preloader
$(function () {
  setTimeout(function () {
    $('.preloader__wrp').fadeOut();
  }, 1500);
}); //select languageф

$('.language__link').hover(function () {
  $('.language__link').removeClass('is-active');
  $(this).toggleClass('is-active');
});
$(function () {
  var owl = $(".top-slider-js");
  owl.owlCarousel({
    nav: false,
    // must be true
    items: 1,
    loop: true,
    mouseDrag: false,
    autoplay: false,
    smartSpeed: 1600,
    margin: 0,
    dotsClass: 'owl-dots',
    responsive: {
      0: {
        animateIn: 'fadeIn',
        // add this
        animateOut: 'fadeOut' // and this

      }
    },
    onInitialized: function onInitialized() {
      addDotCurrent();
      posUpdate();
    },
    onChanged: posUpdate
  });
  owl.on('changed.owl.carousel', function (e) {
    $('.slider__counter').html('<div class="slider__number">0' + ++e.page.index + '</div>' + '<div class="slider__count">0' + e.item.count + '</div>');
  });

  function addDotCurrent() {
    $('.owl-dots').wrap('<div class="dots-wrap slider__dots"></div>'); //$('.owl-dots button').wrap('<li></li>');

    $('.dots-wrap').append('<div class="dot-current-bg"></div>');
  }

  function posUpdate(event) {
    if ($('.dots-wrap')[0]) {
      var dot = $('.dot-current-bg');
      var active = $('.owl-dot.active');
      var activeX = active.position().left;
      dot.animate({
        'left': activeX
      });
    } else {
      addDotCurrent();
    }
  }

  function callback(event) {
    var current = event.item.index; // Position of the current item

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
}); //open sub menu

$(function () {
  var el = document.getElementsByClassName('js-open-sub');

  for (var i = 0; i < el.length; i++) {
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
}); // fix blocks

$(function () {
  function checkWidth() {
    var windowWidth = $('body').innerWidth();

    if (windowWidth > 769) {
      var _$$mCustomScrollbar;

      $("#aside1").sticky({
        topSpacing: 0,
        bottomSpacing: 148
      });
      $('.js-content-scroll').mCustomScrollbar((_$$mCustomScrollbar = {
        axis: 'y',
        scrollInertia: '300',
        scrollButtons: {
          enable: false
        },
        advanced: {
          extraDraggableSelectors: ".myClass, #myID"
        }
      }, _defineProperty(_$$mCustomScrollbar, "advanced", {
        extraDraggableSelectors: ".myClass, #myID"
      }), _defineProperty(_$$mCustomScrollbar, "callbacks", {
        onTotalScroll: function onTotalScroll() {
          $(this).disable();
        },
        onSelectorChange: function onSelectorChange() {
          console.log("Scrollbars updated");
        }
      }), _$$mCustomScrollbar));
    } else {
      $('.fullpage').find('.js-animate-section').removeClass("fullpage__section");
    }
  }

  checkWidth();
  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });
});
$(function () {
  $('.js-menu__open').on('click', function headerHambClick() {
    $('body').toggleClass('menu-open');
  });
  $('.js-menu__close').on('click', function popupCloseBtnClick() {
    $('body').removeClass('menu-open');
  });
  $('.js-open-mobile-sub').on('click', function openMobileSub() {
    $('.js-open-mobile-sub').removeClass('is-open');
    $(this).addClass('is-open');
    $(this).find('a').removeAttr('href'); // $('.js-open-mobile-sub').find('.sub__menu_mobile').slideUp(400)

    $(this).find('.sub__menu_mobile').slideToggle(400);
  });
  $('.js-open-map-right').on('click', function openMapRight() {
    var th = $(this);
    $(this).removeAttr('href');
    $(this).closest('.contacts__item').find('.map').toggleClass('is-active is-active_right');
    $(this).closest('.contacts__wr').toggleClass('is-active');
    $(this).toggleClass('is-active');

    if (th.hasClass("is-active")) {
      th.html("Скрыть карту");
    } else {
      th.html("Посмотреть на карте");
    }
  });
  $('.js-close-map').on('click', function closeMap() {
    th = $(this).closest('.contacts__wr').find('.js-open-map');
    $(this).closest('.map').removeClass('is-active is-active_right');
    $(this).closest('.contacts__wr').removeClass('is-active');
    $(this).closest('.contacts__wr').find('.js-open-map').removeClass('is-active');

    if (th.hasClass("is-active")) {
      th.html("Скрыть карту");
    } else {
      th.html("Посмотреть на карте");
    }
  });
  $('.js-open-map-left').on('click', function openMapLeft() {
    var th = $(this);
    $(this).removeAttr('href');
    $(this).closest('.contacts__item').find('.map').toggleClass('is-active is-active_left');
    $(this).closest('.contacts__wr').toggleClass('is-active');
    $(this).toggleClass('is-active');

    if (th.hasClass("is-active")) {
      th.html("Скрыть карту");
    } else {
      th.html("Посмотреть на карте");
    }
  });
}); //ancors

$(function () {
  $("a.js-ancor-link").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    console.log(destination);
    return false;
  });
}); // carousel case

$('.js-case-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: false,
  prevArrow: $('.slick-prev'),
  nextArrow: $('.slick-next'),
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true
    }
  }, {
    breakpoint: 1281,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 481,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
}); // scroll case

$(window).on('load', function () {
  $(".mcs-horizontal").mCustomScrollbar({
    axis: "x",
    theme: "dark-thick",
    autoExpandScrollbar: true,
    advanced: {
      autoExpandHorizontalScroll: true
    },
    updateOnContentResize: true,
    // scrollbarPosition: 'outside',
    scrollInertia: 200,
    documentTouchScroll: true
  });
}); //accordeon

$('.js-ui-accordion_click').click(function () {
  if ($(this).closest('.js-ui-accordion__item').find('.js-ui-accordion_open').is(':visible')) {
    $(this).closest('.js-ui-accordion__item').find('.js-ui-accordion_open').fadeOut();
  } else {
    $(this).closest('.js-ui-accordion__item').find('.js-ui-accordion_open').fadeIn();
  }

  $(this).toggleClass('is-active');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/scrollAnimations.js":
/*!************************************!*\
  !*** ./src/js/scrollAnimations.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var TimelineMax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! TimelineMax */ "./node_modules/gsap/src/minified/TimelineMax.min.js");
/* harmony import */ var TimelineMax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(TimelineMax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var TweenLite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! TweenLite */ "./node_modules/gsap/src/minified/TweenLite.min.js");
/* harmony import */ var TweenLite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(TweenLite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScrollMagic */ "./node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js");
/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ScrollMagic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var animation_gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animation.gsap */ "./node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js");
/* harmony import */ var animation_gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animation_gsap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var debug_addIndicators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug.addIndicators */ "./node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js");
/* harmony import */ var debug_addIndicators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug_addIndicators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var scrollToPlugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scrollToPlugin */ "./node_modules/gsap/src/minified/plugins/ScrollToPlugin.min.js");
/* harmony import */ var scrollToPlugin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(scrollToPlugin__WEBPACK_IMPORTED_MODULE_5__);






var ctrl = new ScrollMagic__WEBPACK_IMPORTED_MODULE_2___default.a.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  }
}); // Create scene
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
  var tl0 = new TimelineMax__WEBPACK_IMPORTED_MODULE_0___default.a();
  var tl1 = new TimelineMax__WEBPACK_IMPORTED_MODULE_0___default.a();
  var tl2 = new TimelineMax__WEBPACK_IMPORTED_MODULE_0___default.a();
  var controller = new ScrollMagic__WEBPACK_IMPORTED_MODULE_2___default.a.Controller();
  tl0.fromTo('.preloader__logo', .4, {
    x: 10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.5).staggerFromTo('.preloader__caption', .3, {
    x: 10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.3).staggerFromTo('.preloader__subtitle', .3, {
    x: 10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.3).staggerFromTo('.preloader', 1, {
    scale: 1
  }, {
    scale: 1.1,
    ease: Linear.easeNone,
    repeatDelay: 0,
    repeat: -1,
    yoyo: true
  }, 0);
  tl1.fromTo('.footer__logo', .9, {
    x: -100,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.5);
  var scene4p2 = new ScrollMagic__WEBPACK_IMPORTED_MODULE_2___default.a.Scene({
    triggerElement: ".footer",
    triggerHook: .9 // reverse: false,

  }).setTween(tl1).addTo(controller);
  tl2.fromTo('.sidebar__logo', .9, {
    x: 0,
    opacity: 1
  }, {
    x: -100,
    opacity: 0
  }, 0.5);
  var scene4p3 = new ScrollMagic__WEBPACK_IMPORTED_MODULE_2___default.a.Scene({
    triggerElement: ".footer",
    triggerHook: .9 // reverse: false,

  }).setTween(tl2).addTo(controller);
});
$(window).on('load', gsapScrollPanel);

function gsapScrollPanel() {
  var controllerScrollPanel, scrollSceneDefaultForward, scrollSceneDefaultReverse, resizeTimer; // If the .fullpage container exists, set up the fullpage section animations

  if ($('.fullpage').length) {
    initController();
    handleResize();
  } // Initialize the scrollMagic controller


  function initController() {
    // Init new controller
    controllerScrollPanel = new ScrollMagic__WEBPACK_IMPORTED_MODULE_2___default.a.Controller(); // Change behaviour of controller to animate scroll instead of jump

    controllerScrollPanel.scrollTo(function (newpos) {
      TweenMax.to(window, 0.5, {
        scrollTo: {
          y: newpos,
          autoKill: false
        }
      });
    }); // Init the forward and reverse scenes

    scrollPanelScenes();
  } // If window is resized, destroy controller and reset once resize has stopped


  function handleResize() {
    $(window).resize(function () {
      destroyScrollPanels();
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(doneResizing, 500);
    });

    function doneResizing() {
      reInitScrollPanels();
    }
  } // Destroy scroll panels


  function destroyScrollPanels() {
    controllerScrollPanel.destroy();
    scrollSceneDefaultForward.destroy();
    scrollSceneDefaultReverse.destroy();
  } // Re-init scroll panels


  function reInitScrollPanels() {
    controllerScrollPanel = null;
    scrollSceneDefaultForward = null;
    scrollSceneDefaultReverse = null;
    initController();
  } // The forward and reverse scenes


  function scrollPanelScenes() {
    // Create scenes for panels, when scrolling forward
    $('.fullpage__section').each(function (index, elem) {
      var $scrollPanel = $(elem);
      var forwardScrollPos = $scrollPanel.offset().top;
      scrollSceneDefaultForward = new ScrollMagic__WEBPACK_IMPORTED_MODULE_2___default.a.Scene({
        offset: 10,
        // Number of pixels user can scroll before panel snaps into place
        triggerElement: elem,
        triggerHook: 1 // Trigger this scene when top of panel enters view

      }).on('start', function (event) {
        if (event.scrollDirection == 'FORWARD') {
          controllerScrollPanel.scrollTo(forwardScrollPos); // If direction is forward, trigger scrollTo
        } else if (event.scrollDirection == 'REVERSE') {// Do nothing
        }
      }) // Prevent problems with momentum scrolling by pausing for a period of time
      // .on('enter', function(event) {
      //    // $('body').addClass('is-locked');
      //     setTimeout(function() {
      //         $('body').removeClass('is-locked');
      //     },1200)
      // })
      .addTo(controllerScrollPanel);
    }); // Create scenes for panels, when scrolling reverse

    $('.fullpage__section:nth-child(n+2)').each(function (index, elem) {
      var $scrollPanel = $(elem);
      var reverseScrollPos = $scrollPanel.prev().offset().top;
      scrollSceneDefaultReverse = new ScrollMagic__WEBPACK_IMPORTED_MODULE_2___default.a.Scene({
        offset: -10,
        // Number of pixels user can scroll before panel snaps into place
        triggerElement: elem,
        triggerHook: 0 // Trigger this scene when bottom of panel enters view

      }).on('start', function (event) {
        if (event.scrollDirection == 'FORWARD') {// Do nothing
        } else if (event.scrollDirection == 'REVERSE') {
          controllerScrollPanel.scrollTo(reverseScrollPos); // If direction is reverse, trigger scrollTo
        }
      }) // Prevent problems with momentum scrolling by pausing for a period of time
      // .on('leave', function(event) {
      //     $('body').addClass('is-locked');
      //     setTimeout(function() {
      //         $('body').removeClass('is-locked');
      //     },1200)
      // })
      .addTo(controllerScrollPanel);
    }); // Get window height

    var wh = window.innerHeight;
    new ScrollMagic__WEBPACK_IMPORTED_MODULE_2___default.a.Scene({
      offset: wh * 1 - 70
    }).setClassToggle("header", "page-header").addTo(ctrl);
    new ScrollMagic__WEBPACK_IMPORTED_MODULE_2___default.a.Scene({
      offset: wh * 1
    }).setClassToggle(".sidebar", "sidebar-start").addTo(ctrl);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=app.7158d62f54f6ae221e1d.js.map