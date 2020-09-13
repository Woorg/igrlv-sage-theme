/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "./assets/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./markup/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../../../../../home/woorg/.config/nvm/10.22.0/lib/node_modules/tars-cli/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./markup/assets/js/main.js":
/*!**********************************!*\
  !*** ./markup/assets/js/main.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tabbyjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tabbyjs */ "./node_modules/tabbyjs/dist/js/tabby.min.js");
/* harmony import */ var tabbyjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tabbyjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sticky_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sticky-js */ "./node_modules/sticky-js/index.js");
/* harmony import */ var sticky_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sticky_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/highlight */ "./node_modules/highlight.js/lib/highlight.js");
/* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/lib/languages/javascript */ "./node_modules/highlight.js/lib/languages/javascript.js");
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js/lib/languages/php */ "./node_modules/highlight.js/lib/languages/php.js");
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highlight.js/lib/languages/css */ "./node_modules/highlight.js/lib/languages/css.js");
/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _blocks_nav_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/nav/nav */ "./markup/blocks/nav/nav.js");
/* harmony import */ var _blocks_hero_hero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../blocks/hero/hero */ "./markup/blocks/hero/hero.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_9__);







highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_3___default.a.registerLanguage('javascript', highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_4___default.a);
highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_3___default.a.registerLanguage('javascript', highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_5___default.a);
highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_3___default.a.registerLanguage('javascript', highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_6___default.a);





(function ($) {
  svg4everybody__WEBPACK_IMPORTED_MODULE_0___default()();
  var styles = ['padding: 2px 9px', 'background: #2948ff', 'color: #fff', 'line-height: 1.56', 'font-size: 16px'].join(';');
  console.log('%c Made with love ❤️ by Igor Gorlov https://igrl.ru', styles);
  /*
  Lazyload images
  */

  var lazyLoadInstance = new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_9___default.a({
    elements_selector: '.lazy',
    // load_delay: 500,
    use_native: true
  });

  if (lazyLoadInstance) {
    lazyLoadInstance.update();
  }

  $(function () {
    // Nav
    Object(_blocks_nav_nav__WEBPACK_IMPORTED_MODULE_7__["default"])(); // Slider

    Object(_blocks_hero_hero__WEBPACK_IMPORTED_MODULE_8__["heroSlider"])(); // Faq

    var $faqItem = $('.faq__item');
    $faqItem.on('click', function () {
      $(this).toggleClass('faq__item_active');
    }); // Hijs

    document.querySelectorAll('pre code').forEach(function (block) {
      highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_3___default.a.highlightBlock(block);
    }); // Table of content

    var $tocTop = $('.table-of-contents__top');
    var $toc = $('.table-of-contents');
    $tocTop.on('click', function () {
      $toc.toggleClass('table-of-contents_closed');
    });
    /* Tabs */

    var $worksTabs = document.querySelector('.works__tabs .tabs__nav');

    if ($worksTabs) {
      new tabbyjs__WEBPACK_IMPORTED_MODULE_1___default.a('[data-tabs]');
    } // Sticky side


    var $mainRow = document.querySelector('.main .page__row');
    var $side = document.querySelector('.side');

    if ($side) {
      $side.setAttribute('style', 'min-height:' + $mainRow.offsetHeight + 'px;');
    }

    var sideNavSticky = new sticky_js__WEBPACK_IMPORTED_MODULE_2___default.a('.side__block-w'); // Noise

    Object(_blocks_hero_hero__WEBPACK_IMPORTED_MODULE_8__["noise"])();
  });
})(jQuery);

/***/ }),

/***/ "./markup/blocks/hero/hero.js":
/*!************************************!*\
  !*** ./markup/blocks/hero/hero.js ***!
  \************************************/
/*! exports provided: noise, heroSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noise", function() { return noise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heroSlider", function() { return heroSlider; });
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");

var noise = function noise() {
  var canvas, ctx;
  var wWidth, wHeight;
  var noiseData = [];
  var frame = 0;
  var loopTimeout; // Create Noise

  var createNoise = function createNoise() {
    var idata = ctx.createImageData(wWidth, wHeight);
    var buffer32 = new Uint32Array(idata.data.buffer);
    var len = buffer32.length;

    for (var i = 0; i < len; i++) {
      if (Math.random() < 0.1) {
        buffer32[i] = 0xffffffff;
      }
    }

    noiseData.push(idata);
  }; // Play Noise


  var paintNoise = function paintNoise() {
    if (frame === 9) {
      frame = 0;
    } else {
      frame++;
    }

    ctx.putImageData(noiseData[frame], 0, 0);
  }; // Loop


  var loop = function loop() {
    paintNoise(frame);
    loopTimeout = window.setTimeout(function () {
      window.requestAnimationFrame(loop);
    }, 1000 / 25);
  }; // Setup


  var setup = function setup() {
    wWidth = window.innerWidth;
    wHeight = window.innerHeight;
    canvas.width = wWidth;
    canvas.height = wHeight;

    for (var i = 0; i < 10; i++) {
      createNoise();
    }

    loop();
  }; // Reset


  var resizeThrottle;

  var reset = function reset() {
    window.addEventListener('resize', function () {
      window.clearTimeout(resizeThrottle);
      resizeThrottle = window.setTimeout(function () {
        window.clearTimeout(loopTimeout);
        setup();
      }, 200);
    }, false);
  };

  canvas = document.querySelector('canvas');

  if (typeof canvas != 'undefined' && canvas != null) {
    // Init
    var init = function () {
      ctx = canvas.getContext('2d');
      setup();
    }();
  }
}; // noise();
// Slider

function heroSlider() {
  (function ($) {
    var $heroSlider = $('.hero__slider');

    if ($heroSlider.length > 0) {
      $heroSlider = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
        container: '.hero__slider',
        slideBy: 1,
        mode: 'gallery',
        // slideBy: 'page',
        controls: false,
        nav: false,
        autoplay: true,
        speed: 600,
        autoplayButtonOutput: false,
        animateIn: 'jackInTheBox',
        // animateNormal: '',
        // animateOut: 'jackInTheBox',
        touch: true,
        mouseDrag: true
      });
    }
  })(jQuery);
}

/***/ }),

/***/ "./markup/blocks/nav/nav.js":
/*!**********************************!*\
  !*** ./markup/blocks/nav/nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nav; });
function nav() {
  (function ($) {
    var $navButton = $('.nav_primary .nav__button');
    var $page = $('.page');
    $navButton.on('click', function (e) {
      e.preventDefault();
      $page.toggleClass('page_nav-active');
      $(this).parent('.nav_primary').toggleClass('nav_active');
      $(this).children('.nav__text').text($(this).children('.nav__text').text() === 'Меню' ? 'Закрыть' : 'Меню');
    });
    $('.table-of-contents__link, .article__gotop').on('click', function (e) {
      e.preventDefault();

      var _scroll = $(this).attr('href');

      if (_scroll !== '#' && $(_scroll).length) {
        $('html, body').animate({
          scrollTop: $(_scroll).offset().top - 130
        }, 100);
      }
    });
  })(jQuery);
}

/***/ }),

/***/ "./node_modules/highlight.js/lib/highlight.js":
/*!****************************************************!*\
  !*** ./node_modules/highlight.js/lib/highlight.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

(function(factory) {

  // Find the global object for export to both the browser and web workers.
  var globalObject = typeof window === 'object' && window ||
                     typeof self === 'object' && self;

  // Setup highlight.js for different environments. First is Node.js or
  // CommonJS.
  // `nodeType` is checked to ensure that `exports` is not a HTML element.
  if( true && !exports.nodeType) {
    factory(exports);
  } else if(globalObject) {
    // Export hljs globally even when using AMD for cases when this script
    // is loaded with others that may still expect a global hljs.
    globalObject.hljs = factory({});

    // Finally register the global hljs with AMD.
    if(true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return globalObject.hljs;
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }

}(function(hljs) {
  // Convenience variables for build-in objects
  var ArrayProto = [],
      objectKeys = Object.keys;

  // Global internal variables used within the highlight.js library.
  var languages = Object.create(null),
      aliases   = Object.create(null);

  // safe/production mode - swallows more errors, tries to keep running
  // even if a single syntax or parse hits a fatal error
  var SAFE_MODE = true;

  // Regular expressions used throughout the highlight.js library.
  var noHighlightRe    = /^(no-?highlight|plain|text)$/i,
      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
      fixMarkupRe      = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

  // The object will be assigned by the build tool. It used to synchronize API
  // of external language files with minified version of the highlight.js library.
  var API_REPLACES;

  var spanEndTag = '</span>';
  var LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  var options = {
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: undefined
  };

  // keywords that should have no default relevance value
  var COMMON_KEYWORDS = 'of and for in not or if then'.split(' ');


  /* Utility functions */

  function escape(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function tag(node) {
    return node.nodeName.toLowerCase();
  }

  function testRe(re, lexeme) {
    var match = re && re.exec(lexeme);
    return match && match.index === 0;
  }

  function isNotHighlighted(language) {
    return noHighlightRe.test(language);
  }

  function blockLanguage(block) {
    var i, match, length, _class;
    var classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    match = languagePrefixRe.exec(classes);
    if (match) {
      var language = getLanguage(match[1]);
      if (!language) {
        console.warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        console.warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : 'no-highlight';
    }

    classes = classes.split(/\s+/);

    for (i = 0, length = classes.length; i < length; i++) {
      _class = classes[i];

      if (isNotHighlighted(_class) || getLanguage(_class)) {
        return _class;
      }
    }
  }

  /**
   * performs a shallow merge of multiple objects into one
   *
   * @arguments list of objects with properties to merge
   * @returns a single new object
   */
  function inherit(parent) {  // inherit(parent, override_obj, override_obj, ...)
    var key;
    var result = {};
    var objects = Array.prototype.slice.call(arguments, 1);

    for (key in parent)
      result[key] = parent[key];
    objects.forEach(function(obj) {
      for (key in obj)
        result[key] = obj[key];
    });
    return result;
  }

  /* Stream merging */

  function nodeStream(node) {
    var result = [];
    (function _nodeStream(node, offset) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 3)
          offset += child.nodeValue.length;
        else if (child.nodeType === 1) {
          result.push({
            event: 'start',
            offset: offset,
            node: child
          });
          offset = _nodeStream(child, offset);
          // Prevent void elements from having an end tag that would actually
          // double them in the output. There are more void elements in HTML
          // but we list only those realistically expected in code display.
          if (!tag(child).match(/br|hr|img|input/)) {
            result.push({
              event: 'stop',
              offset: offset,
              node: child
            });
          }
        }
      }
      return offset;
    })(node, 0);
    return result;
  }

  function mergeStreams(original, highlighted, value) {
    var processed = 0;
    var result = '';
    var nodeStack = [];

    function selectStream() {
      if (!original.length || !highlighted.length) {
        return original.length ? original : highlighted;
      }
      if (original[0].offset !== highlighted[0].offset) {
        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
      }

      /*
      To avoid starting the stream just before it should stop the order is
      ensured that original always starts first and closes last:

      if (event1 == 'start' && event2 == 'start')
        return original;
      if (event1 == 'start' && event2 == 'stop')
        return highlighted;
      if (event1 == 'stop' && event2 == 'start')
        return original;
      if (event1 == 'stop' && event2 == 'stop')
        return highlighted;

      ... which is collapsed to:
      */
      return highlighted[0].event === 'start' ? original : highlighted;
    }

    function open(node) {
      function attr_str(a) {
        return ' ' + a.nodeName + '="' + escape(a.value).replace(/"/g, '&quot;') + '"';
      }
      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
    }

    function close(node) {
      result += '</' + tag(node) + '>';
    }

    function render(event) {
      (event.event === 'start' ? open : close)(event.node);
    }

    while (original.length || highlighted.length) {
      var stream = selectStream();
      result += escape(value.substring(processed, stream[0].offset));
      processed = stream[0].offset;
      if (stream === original) {
        /*
        On any opening or closing tag of the original markup we first close
        the entire highlighted node stack, then render the original tag along
        with all the following original tags at the same offset and then
        reopen all the tags on the highlighted stack.
        */
        nodeStack.reverse().forEach(close);
        do {
          render(stream.splice(0, 1)[0]);
          stream = selectStream();
        } while (stream === original && stream.length && stream[0].offset === processed);
        nodeStack.reverse().forEach(open);
      } else {
        if (stream[0].event === 'start') {
          nodeStack.push(stream[0].node);
        } else {
          nodeStack.pop();
        }
        render(stream.splice(0, 1)[0]);
      }
    }
    return result + escape(value.substr(processed));
  }

  /* Initialization */

  function dependencyOnParent(mode) {
    if (!mode) return false;

    return mode.endsWithParent || dependencyOnParent(mode.starts);
  }

  function expand_or_clone_mode(mode) {
    if (mode.variants && !mode.cached_variants) {
      mode.cached_variants = mode.variants.map(function(variant) {
        return inherit(mode, {variants: null}, variant);
      });
    }

    // EXPAND
    // if we have variants then essentially "replace" the mode with the variants
    // this happens in compileMode, where this function is called from
    if (mode.cached_variants)
      return mode.cached_variants;

    // CLONE
    // if we have dependencies on parents then we need a unique
    // instance of ourselves, so we can be reused with many
    // different parents without issue
    if (dependencyOnParent(mode))
      return [inherit(mode, { starts: mode.starts ? inherit(mode.starts) : null })];

    if (Object.isFrozen(mode))
      return [inherit(mode)];

    // no special dependency issues, just return ourselves
    return [mode];
  }

  function restoreLanguageApi(obj) {
    if(API_REPLACES && !obj.langApiRestored) {
      obj.langApiRestored = true;
      for(var key in API_REPLACES) {
        if (obj[key]) {
          obj[API_REPLACES[key]] = obj[key];
        }
      }
      (obj.contains || []).concat(obj.variants || []).forEach(restoreLanguageApi);
    }
  }

  function compileKeywords(rawKeywords, case_insensitive) {
      var compiled_keywords = {};

      if (typeof rawKeywords === 'string') { // string
        splitAndCompile('keyword', rawKeywords);
      } else {
        objectKeys(rawKeywords).forEach(function (className) {
          splitAndCompile(className, rawKeywords[className]);
        });
      }
    return compiled_keywords;

    // ---

    function splitAndCompile(className, str) {
      if (case_insensitive) {
        str = str.toLowerCase();
      }
      str.split(' ').forEach(function(keyword) {
        var pair = keyword.split('|');
        compiled_keywords[pair[0]] = [className, scoreForKeyword(pair[0], pair[1])];
      });
    }
  }

  function scoreForKeyword(keyword, providedScore) {
    // manual scores always win over common keywords
    // so you can force a score of 1 if you really insist
    if (providedScore)
      return Number(providedScore);

    return commonKeyword(keyword) ? 0 : 1;
  }

  function commonKeyword(word) {
    return COMMON_KEYWORDS.indexOf(word.toLowerCase()) != -1;
  }

  function compileLanguage(language) {

    function reStr(re) {
        return (re && re.source) || re;
    }

    function langRe(value, global) {
      return new RegExp(
        reStr(value),
        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
      );
    }

    function reCountMatchGroups(re) {
      return (new RegExp(re.toString() + '|')).exec('').length - 1;
    }

    // joinRe logically computes regexps.join(separator), but fixes the
    // backreferences so they continue to match.
    // it also places each individual regular expression into it's own
    // match group, keeping track of the sequencing of those match groups
    // is currently an exercise for the caller. :-)
    function joinRe(regexps, separator) {
      // backreferenceRe matches an open parenthesis or backreference. To avoid
      // an incorrect parse, it additionally matches the following:
      // - [...] elements, where the meaning of parentheses and escapes change
      // - other escape sequences, so we do not misparse escape sequences as
      //   interesting elements
      // - non-matching or lookahead parentheses, which do not capture. These
      //   follow the '(' with a '?'.
      var backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
      var numCaptures = 0;
      var ret = '';
      for (var i = 0; i < regexps.length; i++) {
        numCaptures += 1;
        var offset = numCaptures;
        var re = reStr(regexps[i]);
        if (i > 0) {
          ret += separator;
        }
        ret += "(";
        while (re.length > 0) {
          var match = backreferenceRe.exec(re);
          if (match == null) {
            ret += re;
            break;
          }
          ret += re.substring(0, match.index);
          re = re.substring(match.index + match[0].length);
          if (match[0][0] == '\\' && match[1]) {
            // Adjust the backreference.
            ret += '\\' + String(Number(match[1]) + offset);
          } else {
            ret += match[0];
            if (match[0] == '(') {
              numCaptures++;
            }
          }
        }
        ret += ")";
      }
      return ret;
    }

    function buildModeRegex(mode) {

      var matchIndexes = {};
      var matcherRe;
      var regexes = [];
      var matcher = {};
      var matchAt = 1;

      function addRule(rule, regex) {
        matchIndexes[matchAt] = rule;
        regexes.push([rule, regex]);
        matchAt += reCountMatchGroups(regex) + 1;
      }

      var term;
      for (var i=0; i < mode.contains.length; i++) {
        var re;
        term = mode.contains[i];
        if (term.beginKeywords) {
          re = '\\.?(?:' + term.begin + ')\\.?';
        } else {
          re = term.begin;
        }
        addRule(term, re);
      }
      if (mode.terminator_end)
        addRule("end", mode.terminator_end);
      if (mode.illegal)
        addRule("illegal", mode.illegal);

      var terminators = regexes.map(function(el) { return el[1]; });
      matcherRe = langRe(joinRe(terminators, '|'), true);

      matcher.lastIndex = 0;
      matcher.exec = function(s) {
        var rule;

        if( regexes.length === 0) return null;

        matcherRe.lastIndex = matcher.lastIndex;
        var match = matcherRe.exec(s);
        if (!match) { return null; }

        for(var i = 0; i<match.length; i++) {
          if (match[i] != undefined && matchIndexes["" +i] != undefined ) {
            rule = matchIndexes[""+i];
            break;
          }
        }

        // illegal or end match
        if (typeof rule === "string") {
          match.type = rule;
          match.extra = [mode.illegal, mode.terminator_end];
        } else {
          match.type = "begin";
          match.rule = rule;
        }
        return match;
      };

      return matcher;
    }

    function compileMode(mode, parent) {
      if (mode.compiled)
        return;
      mode.compiled = true;

      mode.keywords = mode.keywords || mode.beginKeywords;
      if (mode.keywords)
        mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);

      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

      if (parent) {
        if (mode.beginKeywords) {
          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
        }
        if (!mode.begin)
          mode.begin = /\B|\b/;
        mode.beginRe = langRe(mode.begin);
        if (mode.endSameAsBegin)
          mode.end = mode.begin;
        if (!mode.end && !mode.endsWithParent)
          mode.end = /\B|\b/;
        if (mode.end)
          mode.endRe = langRe(mode.end);
        mode.terminator_end = reStr(mode.end) || '';
        if (mode.endsWithParent && parent.terminator_end)
          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
      if (mode.illegal)
        mode.illegalRe = langRe(mode.illegal);
      if (mode.relevance == null)
        mode.relevance = 1;
      if (!mode.contains) {
        mode.contains = [];
      }
      mode.contains = Array.prototype.concat.apply([], mode.contains.map(function(c) {
        return expand_or_clone_mode(c === 'self' ? mode : c);
      }));
      mode.contains.forEach(function(c) {compileMode(c, mode);});

      if (mode.starts) {
        compileMode(mode.starts, parent);
      }

      mode.terminators = buildModeRegex(mode);
    }

    // self is not valid at the top-level
    if (language.contains && language.contains.indexOf('self') != -1) {
      if (!SAFE_MODE) {
        throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
      } else {
        // silently remove the broken rule (effectively ignoring it), this has historically
        // been the behavior in the past, so this removal preserves compatibility with broken
        // grammars when running in Safe Mode
        language.contains = language.contains.filter(function(mode) { return mode != 'self'; });
      }
    }
    compileMode(language);
  }


  /**
   * Core highlighting function.
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} code - the code to highlight
   * @param {boolean} ignore_illegals - whether to ignore illegal matches, default is to bail
   * @param {array<mode>} continuation - array of continuation modes
   *
   * @returns an object that represents the result
   * @property {string} language - the language name
   * @property {number} relevance - the relevance score
   * @property {string} value - the highlighted HTML code
   * @property {mode} top - top of the current mode stack
   * @property {boolean} illegal - indicates whether any illegal matches were found
  */
  function highlight(languageName, code, ignore_illegals, continuation) {
    var codeToHighlight = code;

    function escapeRe(value) {
      return new RegExp(value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
    }

    function endOfMode(mode, lexeme) {
      if (testRe(mode.endRe, lexeme)) {
        while (mode.endsParent && mode.parent) {
          mode = mode.parent;
        }
        return mode;
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, lexeme);
      }
    }

    function keywordMatch(mode, match) {
      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
    }

    function buildSpan(className, insideSpan, leaveOpen, noPrefix) {
      if (!leaveOpen && insideSpan === '') return '';
      if (!className) return insideSpan;

      var classPrefix = noPrefix ? '' : options.classPrefix,
          openSpan    = '<span class="' + classPrefix,
          closeSpan   = leaveOpen ? '' : spanEndTag;

      openSpan += className + '">';

      return openSpan + insideSpan + closeSpan;
    }

    function processKeywords() {
      var keyword_match, last_index, match, result;

      if (!top.keywords)
        return escape(mode_buffer);

      result = '';
      last_index = 0;
      top.lexemesRe.lastIndex = 0;
      match = top.lexemesRe.exec(mode_buffer);

      while (match) {
        result += escape(mode_buffer.substring(last_index, match.index));
        keyword_match = keywordMatch(top, match);
        if (keyword_match) {
          relevance += keyword_match[1];
          result += buildSpan(keyword_match[0], escape(match[0]));
        } else {
          result += escape(match[0]);
        }
        last_index = top.lexemesRe.lastIndex;
        match = top.lexemesRe.exec(mode_buffer);
      }
      return result + escape(mode_buffer.substr(last_index));
    }

    function processSubLanguage() {
      var explicit = typeof top.subLanguage === 'string';
      if (explicit && !languages[top.subLanguage]) {
        return escape(mode_buffer);
      }

      var result = explicit ?
                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Use case in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      if (explicit) {
        continuations[top.subLanguage] = result.top;
      }
      return buildSpan(result.language, result.value, false, true);
    }

    function processBuffer() {
      result += (top.subLanguage != null ? processSubLanguage() : processKeywords());
      mode_buffer = '';
    }

    function startNewMode(mode) {
      result += mode.className? buildSpan(mode.className, '', true): '';
      top = Object.create(mode, {parent: {value: top}});
    }


    function doBeginMatch(match) {
      var lexeme = match[0];
      var new_mode = match.rule;

      if (new_mode && new_mode.endSameAsBegin) {
        new_mode.endRe = escapeRe( lexeme );
      }

      if (new_mode.skip) {
        mode_buffer += lexeme;
      } else {
        if (new_mode.excludeBegin) {
          mode_buffer += lexeme;
        }
        processBuffer();
        if (!new_mode.returnBegin && !new_mode.excludeBegin) {
          mode_buffer = lexeme;
        }
      }
      startNewMode(new_mode);
      return new_mode.returnBegin ? 0 : lexeme.length;
    }

    function doEndMatch(match) {
      var lexeme = match[0];
      var matchPlusRemainder = codeToHighlight.substr(match.index);
      var end_mode = endOfMode(top, matchPlusRemainder);
      if (!end_mode) { return; }

      var origin = top;
      if (origin.skip) {
        mode_buffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          mode_buffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          mode_buffer = lexeme;
        }
      }
      do {
        if (top.className) {
          result += spanEndTag;
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== end_mode.parent);
      if (end_mode.starts) {
        if (end_mode.endSameAsBegin) {
          end_mode.starts.endRe = end_mode.endRe;
        }
        startNewMode(end_mode.starts);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }

    var lastMatch = {};
    function processLexeme(text_before_match, match) {

      var lexeme = match && match[0];

      // add non-matched text to the current mode buffer
      mode_buffer += text_before_match;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      // we've found a 0 width match and we're stuck, so we need to advance
      // this happens when we have badly behaved rules that have optional matchers to the degree that
      // sometimes they can end up matching nothing at all
      // Ref: https://github.com/highlightjs/highlight.js/issues/2140
      if (lastMatch.type=="begin" && match.type=="end" && lastMatch.index == match.index && lexeme === "") {
        // spit the "skipped" character that our regex choked on back into the output sequence
        mode_buffer += codeToHighlight.slice(match.index, match.index + 1);
        return 1;
      }

      // edge case for when illegal matches $ (end of line) which is technically
      // a 0 width match but not a begin/end match so it's not caught by the
      // first handler (when ignoreIllegals is true)
      // https://github.com/highlightjs/highlight.js/issues/2522
      if (lastMatch.type==="illegal" && lexeme === "") {
        mode_buffer += codeToHighlight.slice(match.index, match.index + 1);
        return 1;
      }

      lastMatch = match;

      if (match.type==="begin") {
        return doBeginMatch(match);
      } else if (match.type==="illegal" && !ignore_illegals) {
        // illegal match, we do not continue processing
        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');
      } else if (match.type==="end") {
        var processed = doEndMatch(match);
        if (processed != undefined)
          return processed;
      }

      /*
      Why might be find ourselves here?  Only one occasion now.  An end match that was
      triggered but could not be completed.  When might this happen?  When an `endSameasBegin`
      rule sets the end rule to a specific match.  Since the overall mode termination rule that's
      being used to scan the text isn't recompiled that means that any match that LOOKS like
      the end (but is not, because it is not an exact match to the beginning) will
      end up here.  A definite end match, but when `doEndMatch` tries to "reapply"
      the end rule and fails to match, we wind up here, and just silently ignore the end.

      This causes no real harm other than stopping a few times too many.
      */

      mode_buffer += lexeme;
      return lexeme.length;
    }

    var language = getLanguage(languageName);
    if (!language) {
      console.error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }

    compileLanguage(language);
    var top = continuation || language;
    var continuations = {}; // keep continuations for sub-languages
    var result = '', current;
    for(current = top; current !== language; current = current.parent) {
      if (current.className) {
        result = buildSpan(current.className, '', true) + result;
      }
    }
    var mode_buffer = '';
    var relevance = 0;
    try {
      var match, count, index = 0;
      while (true) {
        top.terminators.lastIndex = index;
        match = top.terminators.exec(codeToHighlight);
        if (!match)
          break;
        count = processLexeme(codeToHighlight.substring(index, match.index), match);
        index = match.index + count;
      }
      processLexeme(codeToHighlight.substr(index));
      for(current = top; current.parent; current = current.parent) { // close dangling modes
        if (current.className) {
          result += spanEndTag;
        }
      }
      return {
        relevance: relevance,
        value: result,
        illegal:false,
        language: languageName,
        top: top
      };
    } catch (err) {
      if (err.message && err.message.indexOf('Illegal') !== -1) {
        return {
          illegal: true,
          relevance: 0,
          value: escape(codeToHighlight)
        };
      } else if (SAFE_MODE) {
        return {
          relevance: 0,
          value: escape(codeToHighlight),
          language: languageName,
          top: top,
          errorRaised: err
        };
      } else {
        throw err;
      }
    }
  }

  /*
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

  */
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options.languages || objectKeys(languages);
    var result = {
      relevance: 0,
      value: escape(code)
    };
    var second_best = result;
    languageSubset.filter(getLanguage).filter(autoDetection).forEach(function(name) {
      var current = highlight(name, code, false);
      current.language = name;
      if (current.relevance > second_best.relevance) {
        second_best = current;
      }
      if (current.relevance > result.relevance) {
        second_best = result;
        result = current;
      }
    });
    if (second_best.language) {
      result.second_best = second_best;
    }
    return result;
  }

  /*
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

  */
  function fixMarkup(value) {
    if (!(options.tabReplace || options.useBR)) {
      return value;
    }

    return value.replace(fixMarkupRe, function(match, p1) {
        if (options.useBR && match === '\n') {
          return '<br>';
        } else if (options.tabReplace) {
          return p1.replace(/\t/g, options.tabReplace);
        }
        return '';
    });
  }

  function buildClassName(prevClassName, currentLang, resultLang) {
    var language = currentLang ? aliases[currentLang] : resultLang,
        result   = [prevClassName.trim()];

    if (!prevClassName.match(/\bhljs\b/)) {
      result.push('hljs');
    }

    if (prevClassName.indexOf(language) === -1) {
      result.push(language);
    }

    return result.join(' ').trim();
  }

  /*
  Applies highlighting to a DOM node containing code. Accepts a DOM node and
  two optional parameters for fixMarkup.
  */
  function highlightBlock(block) {
    var node, originalStream, result, resultNode, text;
    var language = blockLanguage(block);

    if (isNotHighlighted(language))
        return;

    if (options.useBR) {
      node = document.createElement('div');
      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
    } else {
      node = block;
    }
    text = node.textContent;
    result = language ? highlight(language, text, true) : highlightAuto(text);

    originalStream = nodeStream(node);
    if (originalStream.length) {
      resultNode = document.createElement('div');
      resultNode.innerHTML = result.value;
      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
    }
    result.value = fixMarkup(result.value);

    block.innerHTML = result.value;
    block.className = buildClassName(block.className, language, result.language);
    block.result = {
      language: result.language,
      re: result.relevance
    };
    if (result.second_best) {
      block.second_best = {
        language: result.second_best.language,
        re: result.second_best.relevance
      };
    }
  }

  /*
  Updates highlight.js global options with values passed in the form of an object.
  */
  function configure(user_options) {
    options = inherit(options, user_options);
  }

  /*
  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
  */
  function initHighlighting() {
    if (initHighlighting.called)
      return;
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
    ArrayProto.forEach.call(blocks, highlightBlock);
  }

  /*
  Attaches highlighting to the page load event.
  */
  function initHighlightingOnLoad() {
    window.addEventListener('DOMContentLoaded', initHighlighting, false);
    window.addEventListener('load', initHighlighting, false);
  }

  var PLAINTEXT_LANGUAGE = { disableAutodetect: true };

  function registerLanguage(name, language) {
    var lang;
    try { lang = language(hljs); }
    catch (error) {
      console.error("Language definition for '{}' could not be registered.".replace("{}", name));
      // hard or soft error
      if (!SAFE_MODE) { throw error; } else { console.error(error); }
      // languages that have serious errors are replaced with essentially a
      // "plaintext" stand-in so that the code blocks will still get normal
      // css classes applied to them - and one bad language won't break the
      // entire highlighter
      lang = PLAINTEXT_LANGUAGE;
    }
    languages[name] = lang;
    restoreLanguageApi(lang);
    lang.rawDefinition = language.bind(null,hljs);

    if (lang.aliases) {
      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
    }
  }

  function listLanguages() {
    return objectKeys(languages);
  }

  /*
    intended usage: When one language truly requires another

    Unlike `getLanguage`, this will throw when the requested language
    is not available.
  */
  function requireLanguage(name) {
    var lang = getLanguage(name);
    if (lang) { return lang; }

    var err = new Error('The \'{}\' language is required, but not loaded.'.replace('{}',name));
    throw err;
  }

  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  function autoDetection(name) {
    var lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /* Interface definition */

  hljs.highlight = highlight;
  hljs.highlightAuto = highlightAuto;
  hljs.fixMarkup = fixMarkup;
  hljs.highlightBlock = highlightBlock;
  hljs.configure = configure;
  hljs.initHighlighting = initHighlighting;
  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
  hljs.registerLanguage = registerLanguage;
  hljs.listLanguages = listLanguages;
  hljs.getLanguage = getLanguage;
  hljs.requireLanguage = requireLanguage;
  hljs.autoDetection = autoDetection;
  hljs.inherit = inherit;
  hljs.debugMode = function() { SAFE_MODE = false; }

  // Common regexps
  hljs.IDENT_RE = '[a-zA-Z]\\w*';
  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

  // Common modes
  hljs.BACKSLASH_ESCAPE = {
    begin: '\\\\[\\s\\S]', relevance: 0
  };
  hljs.APOS_STRING_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  hljs.COMMENT = function (begin, end, inherits) {
    var mode = hljs.inherit(
      {
        className: 'comment',
        begin: begin, end: end,
        contains: []
      },
      inherits || {}
    );
    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
    mode.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
      relevance: 0
    });
    return mode;
  };
  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
  hljs.NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE,
    relevance: 0
  };
  hljs.C_NUMBER_MODE = {
    className: 'number',
    begin: hljs.C_NUMBER_RE,
    relevance: 0
  };
  hljs.BINARY_NUMBER_MODE = {
    className: 'number',
    begin: hljs.BINARY_NUMBER_RE,
    relevance: 0
  };
  hljs.CSS_NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE + '(' +
      '%|em|ex|ch|rem'  +
      '|vw|vh|vmin|vmax' +
      '|cm|mm|in|pt|pc|px' +
      '|deg|grad|rad|turn' +
      '|s|ms' +
      '|Hz|kHz' +
      '|dpi|dpcm|dppx' +
      ')?',
    relevance: 0
  };
  hljs.REGEXP_MODE = {
    className: 'regexp',
    begin: /\//, end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      {
        begin: /\[/, end: /\]/,
        relevance: 0,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  hljs.TITLE_MODE = {
    className: 'title',
    begin: hljs.IDENT_RE,
    relevance: 0
  };
  hljs.UNDERSCORE_TITLE_MODE = {
    className: 'title',
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  hljs.METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  var constants = [
    hljs.BACKSLASH_ESCAPE,
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.PHRASAL_WORDS_MODE,
    hljs.COMMENT,
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.HASH_COMMENT_MODE,
    hljs.NUMBER_MODE,
    hljs.C_NUMBER_MODE,
    hljs.BINARY_NUMBER_MODE,
    hljs.CSS_NUMBER_MODE,
    hljs.REGEXP_MODE,
    hljs.TITLE_MODE,
    hljs.UNDERSCORE_TITLE_MODE,
    hljs.METHOD_GUARD
  ]
  constants.forEach(function(obj) { deepFreeze(obj); });

  // https://github.com/substack/deep-freeze/blob/master/index.js
  function deepFreeze (o) {
    Object.freeze(o);

    var objIsFunction = typeof o === 'function';

    Object.getOwnPropertyNames(o).forEach(function (prop) {
      if (o.hasOwnProperty(prop)
      && o[prop] !== null
      && (typeof o[prop] === "object" || typeof o[prop] === "function")
      // IE11 fix: https://github.com/highlightjs/highlight.js/issues/2318
      // TODO: remove in the future
      && (objIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true)
      && !Object.isFrozen(o[prop])) {
        deepFreeze(o[prop]);
      }
    });

    return o;
  };


  return hljs;
}));


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/css.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/css.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var FUNCTION_LIKE = {
    begin: /[\w-]+\(/, returnBegin: true,
    contains: [
      {
        className: 'built_in',
        begin: /[\w-]+/
      },
      {
        begin: /\(/, end: /\)/,
        contains: [
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.CSS_NUMBER_MODE,
        ]
      }
    ]
  }
  var ATTRIBUTE = {
    className: 'attribute',
    begin: /\S/, end: ':', excludeEnd: true,
    starts: {
      endsWithParent: true, excludeEnd: true,
      contains: [
        FUNCTION_LIKE,
        hljs.CSS_NUMBER_MODE,
        hljs.QUOTE_STRING_MODE,
        hljs.APOS_STRING_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        {
          className: 'number', begin: '#[0-9A-Fa-f]+'
        },
        {
          className: 'meta', begin: '!important'
        }
      ]
    }
  }
  var AT_IDENTIFIER = '@[a-z-]+' // @font-face
  var AT_MODIFIERS = "and or not only"
  var MEDIA_TYPES = "all print screen speech"
  var AT_PROPERTY_RE = /@\-?\w[\w]*(\-\w+)*/ // @-webkit-keyframes
  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
  var RULE = {
    begin: /(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/, returnBegin: true, end: ';', endsWithParent: true,
    contains: [
      ATTRIBUTE
    ]
  };

  return {
    case_insensitive: true,
    illegal: /[=\/|'\$]/,
    contains: [
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'selector-id', begin: /#[A-Za-z0-9_-]+/
      },
      {
        className: 'selector-class', begin: /\.[A-Za-z0-9_-]+/
      },
      {
        className: 'selector-attr',
        begin: /\[/, end: /\]/,
        illegal: '$',
        contains: [
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
        ]
      },
      {
        className: 'selector-pseudo',
        begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
      },
      // matching these here allows us to treat them more like regular CSS
      // rules so everything between the {} gets regular rule highlighting,
      // which is what we want for page and font-face
      {
        begin: '@(page|font-face)',
        lexemes: AT_IDENTIFIER,
        keywords: '@page @font-face'
      },
      {
        begin: '@', end: '[{;]', // at_rule eating first "{" is a good thing
                                 // because it doesn’t let it to be parsed as
                                 // a rule set but instead drops parser into
                                 // the default mode which is how it should be.
        illegal: /:/, // break on Less variables @var: ...
        returnBegin: true,
        contains: [
          {
            className: 'keyword',
            begin: AT_PROPERTY_RE
          },
          {
            begin: /\s/, endsWithParent: true, excludeEnd: true,
            relevance: 0,
            keywords: AT_MODIFIERS,
            contains: [
              {
                begin: /[a-z-]+:/,
                className:"attribute"
              },
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE,
              hljs.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: 'selector-tag', begin: IDENT_RE,
        relevance: 0
      },
      {
        begin: '{', end: '}',
        illegal: /\S/,
        contains: [
          hljs.C_BLOCK_COMMENT_MODE,
          RULE,
        ]
      }
    ]
  };
};

/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/javascript.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/javascript.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var FRAGMENT = {
    begin: '<>',
    end: '</>'
  };
  var XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/
  };
  var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var KEYWORDS = {
    keyword:
      'in of if for while finally var new function do return void else break catch ' +
      'instanceof with throw case default try this switch continue typeof delete ' +
      'let yield const export super debugger as async await static ' +
      // ECMAScript 6 modules import
      'import from as'
    ,
    literal:
      'true false null undefined NaN Infinity',
    built_in:
      'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
      'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
      'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
      'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
      'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
      'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
      'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
      'Promise'
  };
  var NUMBER = {
    className: 'number',
    variants: [
      { begin: '\\b(0[bB][01]+)n?' },
      { begin: '\\b(0[oO][0-7]+)n?' },
      { begin: hljs.C_NUMBER_RE + 'n?' }
    ],
    relevance: 0
  };
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{', end: '\\}',
    keywords: KEYWORDS,
    contains: []  // defined later
  };
  var HTML_TEMPLATE = {
    begin: 'html`', end: '',
    starts: {
      end: '`', returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'xml',
    }
  };
  var CSS_TEMPLATE = {
    begin: 'css`', end: '',
    starts: {
      end: '`', returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'css',
    }
  };
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`', end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  SUBST.contains = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ];
  var PARAMS_CONTAINS = SUBST.contains.concat([
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_LINE_COMMENT_MODE
  ]);

  return {
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: KEYWORDS,
    contains: [
      {
        className: 'meta',
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      },
      {
        className: 'meta',
        begin: /^#!/, end: /$/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      TEMPLATE_STRING,
      hljs.C_LINE_COMMENT_MODE,
      hljs.COMMENT(
        '/\\*\\*',
        '\\*/',
        {
          relevance : 0,
          contains : [
            {
              className : 'doctag',
              begin : '@[A-Za-z]+',
              contains : [
                {
                  className: 'type',
                  begin: '\\{',
                  end: '\\}',
                  relevance: 0
                },
                {
                  className: 'variable',
                  begin: IDENT_RE + '(?=\\s*(-)|$)',
                  endsParent: true,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                },
              ]
            }
          ]
        }
      ),
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBER,
      { // object attr container
        begin: /[{,\n]\s*/, relevance: 0,
        contains: [
          {
            begin: IDENT_RE + '\\s*:', returnBegin: true,
            relevance: 0,
            contains: [{className: 'attr', begin: IDENT_RE, relevance: 0}]
          }
        ]
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: IDENT_RE
                  },
                  {
                    begin: /\(\s*\)/,
                  },
                  {
                    begin: /\(/, end: /\)/,
                    excludeBegin: true, excludeEnd: true,
                    keywords: KEYWORDS,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          {
            className: '',
            begin: /\s/,
            end: /\s*/,
            skip: true,
          },
          { // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { begin: XML_TAG.begin, end: XML_TAG.end }
            ],
            subLanguage: 'xml',
            contains: [
              {
                begin: XML_TAG.begin, end: XML_TAG.end, skip: true,
                contains: ['self']
              }
            ]
          },
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'function', end: /\{/, excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE}),
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            contains: PARAMS_CONTAINS
          }
        ],
        illegal: /\[|%/
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      },
      hljs.METHOD_GUARD,
      { // ES6 class
        className: 'class',
        beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
        illegal: /[:"\[\]]/,
        contains: [
          {beginKeywords: 'extends'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'constructor get set', end: /\{/, excludeEnd: true
      }
    ],
    illegal: /#(?!!)/
  };
};

/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/php.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/php.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var VARIABLE = {
    begin: '\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*'
  };
  var PREPROCESSOR = {
    className: 'meta', begin: /<\?(php)?|\?>/
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, PREPROCESSOR],
    variants: [
      {
        begin: 'b"', end: '"'
      },
      {
        begin: 'b\'', end: '\''
      },
      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null})
    ]
  };
  var NUMBER = {variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]};
  return {
    aliases: ['php', 'php3', 'php4', 'php5', 'php6', 'php7'],
    case_insensitive: true,
    keywords:
      'and include_once list abstract global private echo interface as static endswitch ' +
      'array null if endwhile or const for endforeach self var while isset public ' +
      'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' +
      'return parent clone use __CLASS__ __LINE__ else break print eval new ' +
      'catch __METHOD__ case exception default die require __FUNCTION__ ' +
      'enddeclare final try switch continue endfor endif declare unset true false ' +
      'trait goto instanceof insteadof __DIR__ __NAMESPACE__ ' +
      'yield finally',
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.COMMENT('//', '$', {contains: [PREPROCESSOR]}),
      hljs.COMMENT(
        '/\\*',
        '\\*/',
        {
          contains: [
            {
              className: 'doctag',
              begin: '@[A-Za-z]+'
            }
          ]
        }
      ),
      hljs.COMMENT(
        '__halt_compiler.+?;',
        false,
        {
          endsWithParent: true,
          keywords: '__halt_compiler',
          lexemes: hljs.UNDERSCORE_IDENT_RE
        }
      ),
      {
        className: 'string',
        begin: /<<<['"]?\w+['"]?$/, end: /^\w+;?$/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          {
            className: 'subst',
            variants: [
              {begin: /\$\w+/},
              {begin: /\{\$/, end: /\}/}
            ]
          }
        ]
      },
      PREPROCESSOR,
      {
        className: 'keyword', begin: /\$this\b/
      },
      VARIABLE,
      {
        // swallow composed identifiers to avoid parsing them as keywords
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      },
      {
        className: 'function',
        beginKeywords: 'function', end: /[;{]/, excludeEnd: true,
        illegal: '\\$|\\[|%',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          {
            className: 'params',
            begin: '\\(', end: '\\)',
            contains: [
              'self',
              VARIABLE,
              hljs.C_BLOCK_COMMENT_MODE,
              STRING,
              NUMBER
            ]
          }
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class interface', end: '{', excludeEnd: true,
        illegal: /[:\(\$"]/,
        contains: [
          {beginKeywords: 'extends implements'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'namespace', end: ';',
        illegal: /[\.']/,
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      {
        beginKeywords: 'use', end: ';',
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      {
        begin: '=>' // No markup, just a relevance booster
      },
      STRING,
      NUMBER
    ]
  };
};

/***/ }),

/***/ "./node_modules/sticky-js/dist/sticky.compile.js":
/*!*******************************************************!*\
  !*** ./node_modules/sticky-js/dist/sticky.compile.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Sticky.js
 * Library for sticky elements written in vanilla javascript. With this library you can easily set sticky elements on your website. It's also responsive.
 *
 * @version 1.3.0
 * @author Rafal Galus <biuro@rafalgalus.pl>
 * @website https://rgalus.github.io/sticky-js/
 * @repo https://github.com/rgalus/sticky-js
 * @license https://github.com/rgalus/sticky-js/blob/master/LICENSE
 */
var Sticky = /*#__PURE__*/function () {
  /**
   * Sticky instance constructor
   * @constructor
   * @param {string} selector - Selector which we can find elements
   * @param {string} options - Global options for sticky elements (could be overwritten by data-{option}="" attributes)
   */
  function Sticky() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Sticky);

    this.selector = selector;
    this.elements = [];
    this.version = '1.3.0';
    this.vp = this.getViewportSize();
    this.body = document.querySelector('body');
    this.options = {
      wrap: options.wrap || false,
      wrapWith: options.wrapWith || '<span></span>',
      marginTop: options.marginTop || 0,
      marginBottom: options.marginBottom || 0,
      stickyFor: options.stickyFor || 0,
      stickyClass: options.stickyClass || null,
      stickyContainer: options.stickyContainer || 'body'
    };
    this.updateScrollTopPosition = this.updateScrollTopPosition.bind(this);
    this.updateScrollTopPosition();
    window.addEventListener('load', this.updateScrollTopPosition);
    window.addEventListener('scroll', this.updateScrollTopPosition);
    this.run();
  }
  /**
   * Function that waits for page to be fully loaded and then renders & activates every sticky element found with specified selector
   * @function
   */


  _createClass(Sticky, [{
    key: "run",
    value: function run() {
      var _this = this;

      // wait for page to be fully loaded
      var pageLoaded = setInterval(function () {
        if (document.readyState === 'complete') {
          clearInterval(pageLoaded);
          var elements = document.querySelectorAll(_this.selector);

          _this.forEach(elements, function (element) {
            return _this.renderElement(element);
          });
        }
      }, 10);
    }
    /**
     * Function that assign needed variables for sticky element, that are used in future for calculations and other
     * @function
     * @param {node} element - Element to be rendered
     */

  }, {
    key: "renderElement",
    value: function renderElement(element) {
      var _this2 = this;

      // create container for variables needed in future
      element.sticky = {}; // set default variables

      element.sticky.active = false;
      element.sticky.marginTop = parseInt(element.getAttribute('data-margin-top')) || this.options.marginTop;
      element.sticky.marginBottom = parseInt(element.getAttribute('data-margin-bottom')) || this.options.marginBottom;
      element.sticky.stickyFor = parseInt(element.getAttribute('data-sticky-for')) || this.options.stickyFor;
      element.sticky.stickyClass = element.getAttribute('data-sticky-class') || this.options.stickyClass;
      element.sticky.wrap = element.hasAttribute('data-sticky-wrap') ? true : this.options.wrap; // @todo attribute for stickyContainer
      // element.sticky.stickyContainer = element.getAttribute('data-sticky-container') || this.options.stickyContainer;

      element.sticky.stickyContainer = this.options.stickyContainer;
      element.sticky.container = this.getStickyContainer(element);
      element.sticky.container.rect = this.getRectangle(element.sticky.container);
      element.sticky.rect = this.getRectangle(element); // fix when element is image that has not yet loaded and width, height = 0

      if (element.tagName.toLowerCase() === 'img') {
        element.onload = function () {
          return element.sticky.rect = _this2.getRectangle(element);
        };
      }

      if (element.sticky.wrap) {
        this.wrapElement(element);
      } // activate rendered element


      this.activate(element);
    }
    /**
     * Wraps element into placeholder element
     * @function
     * @param {node} element - Element to be wrapped
     */

  }, {
    key: "wrapElement",
    value: function wrapElement(element) {
      element.insertAdjacentHTML('beforebegin', element.getAttribute('data-sticky-wrapWith') || this.options.wrapWith);
      element.previousSibling.appendChild(element);
    }
    /**
     * Function that activates element when specified conditions are met and then initalise events
     * @function
     * @param {node} element - Element to be activated
     */

  }, {
    key: "activate",
    value: function activate(element) {
      if (element.sticky.rect.top + element.sticky.rect.height < element.sticky.container.rect.top + element.sticky.container.rect.height && element.sticky.stickyFor < this.vp.width && !element.sticky.active) {
        element.sticky.active = true;
      }

      if (this.elements.indexOf(element) < 0) {
        this.elements.push(element);
      }

      if (!element.sticky.resizeEvent) {
        this.initResizeEvents(element);
        element.sticky.resizeEvent = true;
      }

      if (!element.sticky.scrollEvent) {
        this.initScrollEvents(element);
        element.sticky.scrollEvent = true;
      }

      this.setPosition(element);
    }
    /**
     * Function which is adding onResizeEvents to window listener and assigns function to element as resizeListener
     * @function
     * @param {node} element - Element for which resize events are initialised
     */

  }, {
    key: "initResizeEvents",
    value: function initResizeEvents(element) {
      var _this3 = this;

      element.sticky.resizeListener = function () {
        return _this3.onResizeEvents(element);
      };

      window.addEventListener('resize', element.sticky.resizeListener);
    }
    /**
     * Removes element listener from resize event
     * @function
     * @param {node} element - Element from which listener is deleted
     */

  }, {
    key: "destroyResizeEvents",
    value: function destroyResizeEvents(element) {
      window.removeEventListener('resize', element.sticky.resizeListener);
    }
    /**
     * Function which is fired when user resize window. It checks if element should be activated or deactivated and then run setPosition function
     * @function
     * @param {node} element - Element for which event function is fired
     */

  }, {
    key: "onResizeEvents",
    value: function onResizeEvents(element) {
      this.vp = this.getViewportSize();
      element.sticky.rect = this.getRectangle(element);
      element.sticky.container.rect = this.getRectangle(element.sticky.container);

      if (element.sticky.rect.top + element.sticky.rect.height < element.sticky.container.rect.top + element.sticky.container.rect.height && element.sticky.stickyFor < this.vp.width && !element.sticky.active) {
        element.sticky.active = true;
      } else if (element.sticky.rect.top + element.sticky.rect.height >= element.sticky.container.rect.top + element.sticky.container.rect.height || element.sticky.stickyFor >= this.vp.width && element.sticky.active) {
        element.sticky.active = false;
      }

      this.setPosition(element);
    }
    /**
     * Function which is adding onScrollEvents to window listener and assigns function to element as scrollListener
     * @function
     * @param {node} element - Element for which scroll events are initialised
     */

  }, {
    key: "initScrollEvents",
    value: function initScrollEvents(element) {
      var _this4 = this;

      element.sticky.scrollListener = function () {
        return _this4.onScrollEvents(element);
      };

      window.addEventListener('scroll', element.sticky.scrollListener);
    }
    /**
     * Removes element listener from scroll event
     * @function
     * @param {node} element - Element from which listener is deleted
     */

  }, {
    key: "destroyScrollEvents",
    value: function destroyScrollEvents(element) {
      window.removeEventListener('scroll', element.sticky.scrollListener);
    }
    /**
     * Function which is fired when user scroll window. If element is active, function is invoking setPosition function
     * @function
     * @param {node} element - Element for which event function is fired
     */

  }, {
    key: "onScrollEvents",
    value: function onScrollEvents(element) {
      if (element.sticky && element.sticky.active) {
        this.setPosition(element);
      }
    }
    /**
     * Main function for the library. Here are some condition calculations and css appending for sticky element when user scroll window
     * @function
     * @param {node} element - Element that will be positioned if it's active
     */

  }, {
    key: "setPosition",
    value: function setPosition(element) {
      this.css(element, {
        position: '',
        width: '',
        top: '',
        left: ''
      });

      if (this.vp.height < element.sticky.rect.height || !element.sticky.active) {
        return;
      }

      if (!element.sticky.rect.width) {
        element.sticky.rect = this.getRectangle(element);
      }

      if (element.sticky.wrap) {
        this.css(element.parentNode, {
          display: 'block',
          width: element.sticky.rect.width + 'px',
          height: element.sticky.rect.height + 'px'
        });
      }

      if (element.sticky.rect.top === 0 && element.sticky.container === this.body) {
        this.css(element, {
          position: 'fixed',
          top: element.sticky.rect.top + 'px',
          left: element.sticky.rect.left + 'px',
          width: element.sticky.rect.width + 'px'
        });

        if (element.sticky.stickyClass) {
          element.classList.add(element.sticky.stickyClass);
        }
      } else if (this.scrollTop > element.sticky.rect.top - element.sticky.marginTop) {
        this.css(element, {
          position: 'fixed',
          width: element.sticky.rect.width + 'px',
          left: element.sticky.rect.left + 'px'
        });

        if (this.scrollTop + element.sticky.rect.height + element.sticky.marginTop > element.sticky.container.rect.top + element.sticky.container.offsetHeight - element.sticky.marginBottom) {
          if (element.sticky.stickyClass) {
            element.classList.remove(element.sticky.stickyClass);
          }

          this.css(element, {
            top: element.sticky.container.rect.top + element.sticky.container.offsetHeight - (this.scrollTop + element.sticky.rect.height + element.sticky.marginBottom) + 'px'
          });
        } else {
          if (element.sticky.stickyClass) {
            element.classList.add(element.sticky.stickyClass);
          }

          this.css(element, {
            top: element.sticky.marginTop + 'px'
          });
        }
      } else {
        if (element.sticky.stickyClass) {
          element.classList.remove(element.sticky.stickyClass);
        }

        this.css(element, {
          position: '',
          width: '',
          top: '',
          left: ''
        });

        if (element.sticky.wrap) {
          this.css(element.parentNode, {
            display: '',
            width: '',
            height: ''
          });
        }
      }
    }
    /**
     * Function that updates element sticky rectangle (with sticky container), then activate or deactivate element, then update position if it's active
     * @function
     */

  }, {
    key: "update",
    value: function update() {
      var _this5 = this;

      this.forEach(this.elements, function (element) {
        element.sticky.rect = _this5.getRectangle(element);
        element.sticky.container.rect = _this5.getRectangle(element.sticky.container);

        _this5.activate(element);

        _this5.setPosition(element);
      });
    }
    /**
     * Destroys sticky element, remove listeners
     * @function
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this6 = this;

      window.removeEventListener('load', this.updateScrollTopPosition);
      window.removeEventListener('scroll', this.updateScrollTopPosition);
      this.forEach(this.elements, function (element) {
        _this6.destroyResizeEvents(element);

        _this6.destroyScrollEvents(element);

        delete element.sticky;
      });
    }
    /**
     * Function that returns container element in which sticky element is stuck (if is not specified, then it's stuck to body)
     * @function
     * @param {node} element - Element which sticky container are looked for
     * @return {node} element - Sticky container
     */

  }, {
    key: "getStickyContainer",
    value: function getStickyContainer(element) {
      var container = element.parentNode;

      while (!container.hasAttribute('data-sticky-container') && !container.parentNode.querySelector(element.sticky.stickyContainer) && container !== this.body) {
        container = container.parentNode;
      }

      return container;
    }
    /**
     * Function that returns element rectangle & position (width, height, top, left)
     * @function
     * @param {node} element - Element which position & rectangle are returned
     * @return {object}
     */

  }, {
    key: "getRectangle",
    value: function getRectangle(element) {
      this.css(element, {
        position: '',
        width: '',
        top: '',
        left: ''
      });
      var width = Math.max(element.offsetWidth, element.clientWidth, element.scrollWidth);
      var height = Math.max(element.offsetHeight, element.clientHeight, element.scrollHeight);
      var top = 0;
      var left = 0;

      do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
      } while (element);

      return {
        top: top,
        left: left,
        width: width,
        height: height
      };
    }
    /**
     * Function that returns viewport dimensions
     * @function
     * @return {object}
     */

  }, {
    key: "getViewportSize",
    value: function getViewportSize() {
      return {
        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      };
    }
    /**
     * Function that updates window scroll position
     * @function
     * @return {number}
     */

  }, {
    key: "updateScrollTopPosition",
    value: function updateScrollTopPosition() {
      this.scrollTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0;
    }
    /**
     * Helper function for loops
     * @helper
     * @param {array}
     * @param {function} callback - Callback function (no need for explanation)
     */

  }, {
    key: "forEach",
    value: function forEach(array, callback) {
      for (var i = 0, len = array.length; i < len; i++) {
        callback(array[i]);
      }
    }
    /**
     * Helper function to add/remove css properties for specified element.
     * @helper
     * @param {node} element - DOM element
     * @param {object} properties - CSS properties that will be added/removed from specified element
     */

  }, {
    key: "css",
    value: function css(element, properties) {
      for (var property in properties) {
        if (properties.hasOwnProperty(property)) {
          element.style[property] = properties[property];
        }
      }
    }
  }]);

  return Sticky;
}();
/**
 * Export function that supports AMD, CommonJS and Plain Browser.
 */


(function (root, factory) {
  if (true) {
    module.exports = factory;
  } else {}
})(this, Sticky);

/***/ }),

/***/ "./node_modules/sticky-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/sticky-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var Sticky = __webpack_require__(/*! ./dist/sticky.compile.js */ "./node_modules/sticky-js/dist/sticky.compile.js");

module.exports = Sticky;


/***/ }),

/***/ "./node_modules/svg4everybody/dist/svg4everybody.js":
/*!**********************************************************!*\
  !*** ./node_modules/svg4everybody/dist/svg4everybody.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {
     true ? // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return root.svg4everybody = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function() {
    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), 
                svg && src) {
                    if (polyfill) {
                        if (!opts.validate || opts.validate(src, svg, use)) {
                            // remove the <use> element
                            parent.removeChild(use);
                            // parse the src and get the url and id
                            var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                            // if the link is external
                            if (url.length) {
                                // get the cached xhr request
                                var xhr = requests[url];
                                // ensure the xhr request exists
                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                xhr._embeds.push({
                                    parent: parent,
                                    svg: svg,
                                    id: id
                                }), // prepare the xhr ready state change event
                                loadreadystatechange(xhr);
                            } else {
                                // embed the local id into the svg
                                embed(parent, svg, document.getElementById(id));
                            }
                        } else {
                            // increase the index when the previous value was not "valid"
                            ++index, ++numberOfSvgUseElementsToBypass;
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});

/***/ }),

/***/ "./node_modules/tabbyjs/dist/js/tabby.min.js":
/*!***************************************************!*\
  !*** ./node_modules/tabbyjs/dist/js/tabby.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tabbyjs v12.0.3 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/tabby */
Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),(function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return t(e)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t={idPrefix:"tabby-toggle_",default:"[data-tabby-default]"},r=function(t){if(t&&"true"!=t.getAttribute("aria-selected")){var r=document.querySelector(t.hash);if(r){var o=(function(e){var t=e.closest('[role="tablist"]');if(!t)return{};var r=t.querySelector('[role="tab"][aria-selected="true"]');if(!r)return{};var o=document.querySelector(r.hash);return r.setAttribute("aria-selected","false"),r.setAttribute("tabindex","-1"),o?(o.setAttribute("hidden","hidden"),{previousTab:r,previousContent:o}):{previousTab:r}})(t);!(function(e,t){e.setAttribute("aria-selected","true"),e.setAttribute("tabindex","0"),t.removeAttribute("hidden"),e.focus()})(t,r),o.tab=t,o.content=r,(function(t,r){var o;"function"==typeof e.CustomEvent?o=new CustomEvent("tabby",{bubbles:!0,cancelable:!0,detail:r}):(o=document.createEvent("CustomEvent")).initCustomEvent("tabby",!0,!0,r),t.dispatchEvent(o)})(t,o)}}},o=function(e,t){var o=(function(e){var t=e.closest('[role="tablist"]'),r=t?t.querySelectorAll('[role="tab"]'):null;if(r)return{tabs:r,index:Array.prototype.indexOf.call(r,e)}})(e);if(o){var n,i=o.tabs.length-1;["ArrowUp","ArrowLeft","Up","Left"].indexOf(t)>-1?n=o.index<1?i:o.index-1:["ArrowDown","ArrowRight","Down","Right"].indexOf(t)>-1?n=o.index===i?0:o.index+1:"Home"===t?n=0:"End"===t&&(n=i),r(o.tabs[n])}};return function(n,i){var a,u,l={};l.destroy=function(){var e=u.querySelectorAll("a");Array.prototype.forEach.call(e,(function(e){var t=document.querySelector(e.hash);t&&(function(e,t,r){e.id.slice(0,r.idPrefix.length)===r.idPrefix&&(e.id=""),e.removeAttribute("role"),e.removeAttribute("aria-controls"),e.removeAttribute("aria-selected"),e.removeAttribute("tabindex"),e.closest("li").removeAttribute("role"),t.removeAttribute("role"),t.removeAttribute("aria-labelledby"),t.removeAttribute("hidden")})(e,t,a)})),u.removeAttribute("role"),document.documentElement.removeEventListener("click",c,!0),u.removeEventListener("keydown",d,!0),a=null,u=null},l.setup=function(){if(u=document.querySelector(n)){var e=u.querySelectorAll("a");u.setAttribute("role","tablist"),Array.prototype.forEach.call(e,(function(e){var t=document.querySelector(e.hash);t&&(function(e,t,r){e.id||(e.id=r.idPrefix+t.id),e.setAttribute("role","tab"),e.setAttribute("aria-controls",t.id),e.closest("li").setAttribute("role","presentation"),t.setAttribute("role","tabpanel"),t.setAttribute("aria-labelledby",e.id),e.matches(r.default)?e.setAttribute("aria-selected","true"):(e.setAttribute("aria-selected","false"),e.setAttribute("tabindex","-1"),t.setAttribute("hidden","hidden"))})(e,t,a)}))}},l.toggle=function(e){var t=e;"string"==typeof e&&(t=document.querySelector(n+' [role="tab"][href*="'+e+'"]')),r(t)};var c=function(e){var t=e.target.closest(n+' [role="tab"]');t&&(e.preventDefault(),r(t))},d=function(e){var t=document.activeElement;t.matches(n+' [role="tab"]')&&(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Up","Down","Left","Right","Home","End"].indexOf(e.key)<0||o(t,e.key))};return a=(function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var r in t){if(!t.hasOwnProperty(r))return;e[r]=t[r]}})),e})(t,i||{}),l.setup(),(function(t){if(!(e.location.hash.length<1)){var o=document.querySelector(t+' [role="tab"][href*="'+e.location.hash+'"]');r(o)}})(n),document.documentElement.addEventListener("click",c,!0),u.addEventListener("keydown",d,!0),l}}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../../../../../../../home/woorg/.config/nvm/10.22.0/lib/node_modules/tars-cli/node_modules/webpack/buildin/global.js */ "../../../../../../../../../../../../home/woorg/.config/nvm/10.22.0/lib/node_modules/tars-cli/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addCSSRule.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addCSSRule.js ***!
  \************************************************************/
/*! exports provided: addCSSRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCSSRule", function() { return addCSSRule; });
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
// cross browsers addRule method

function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
    'insertRule' in sheet ?
      sheet.insertRule(selector + '{' + rules + '}', index) :
      sheet.addRule(selector, rules, index);
  // });
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addClass.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addClass.js ***!
  \**********************************************************/
/*! exports provided: addClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");

var addClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ?
    function (el, str) {
      if (!Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el,  str)) { el.classList.add(str); }
    } :
    function (el, str) {
      if (!Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el,  str)) { el.className += ' ' + str; }
    };



/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addEvents.js":
/*!***********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addEvents.js ***!
  \***********************************************************/
/*! exports provided: addEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvents", function() { return addEvents; });
/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveOption.js */ "./node_modules/tiny-slider/src/helpers/passiveOption.js");


function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__["passiveOption"] : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js ***!
  \*******************************************************************/
/*! exports provided: arrayFromNodeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFromNodeList", function() { return arrayFromNodeList; });
function arrayFromNodeList (nl) {
  var arr = [];
  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }
  return arr;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/caf.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/caf.js ***!
  \*****************************************************/
/*! exports provided: caf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caf", function() { return caf; });
var win = window;

var caf = win.cancelAnimationFrame
  || win.mozCancelAnimationFrame
  || function(id){ clearTimeout(id); };


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/calc.js":
/*!******************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/calc.js ***!
  \******************************************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");
// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 




function calc() {
  var doc = document, 
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      div = doc.createElement('div'), 
      result = false;

  body.appendChild(div);
  try {
    var str = '(10px * 10)',
        vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
        val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;
      if (div.offsetWidth === 100) { 
        result = val.replace(str, ''); 
        break;
      }
    }
  } catch (e) {}
  
  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : div.remove();

  return result;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/checkStorageValue.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/checkStorageValue.js ***!
  \*******************************************************************/
/*! exports provided: checkStorageValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStorageValue", function() { return checkStorageValue; });
function checkStorageValue (value) {
  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/classListSupport.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/classListSupport.js ***!
  \******************************************************************/
/*! exports provided: classListSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classListSupport", function() { return classListSupport; });
var classListSupport = 'classList' in document.createElement('_');

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/createStyleSheet.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/createStyleSheet.js ***!
  \******************************************************************/
/*! exports provided: createStyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyleSheet", function() { return createStyleSheet; });
// create and append style sheet
function createStyleSheet (media, nonce) {
  // Create the <style> tag
  var style = document.createElement("style");
  // style.setAttribute("type", "text/css");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")
  if (media) { style.setAttribute("media", media); }

  // Add nonce attribute for Content Security Policy
  if (nonce) { style.setAttribute("nonce", nonce); }

  // WebKit hack :(
  // style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.querySelector('head').appendChild(style);

  return style.sheet ? style.sheet : style.styleSheet;
};

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/docElement.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/docElement.js ***!
  \************************************************************/
/*! exports provided: docElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docElement", function() { return docElement; });
var docElement = document.documentElement;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/events.js":
/*!********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/events.js ***!
  \********************************************************/
/*! exports provided: Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
function Events() {
  return {
    topics: {},
    on: function (eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function (eventName, data) {
      data.type = eventName;
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data, eventName);
        });
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/extend.js":
/*!********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/extend.js ***!
  \********************************************************/
/*! exports provided: extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
function extend() {
  var obj, name, copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/forEach.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/forEach.js ***!
  \*********************************************************/
/*! exports provided: forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEach (arr, callback, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(scope, arr[i], i);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getAttr.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getAttr.js ***!
  \*********************************************************/
/*! exports provided: getAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttr", function() { return getAttr; });
function getAttr(el, attr) {
  return el.getAttribute(attr);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getBody.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getBody.js ***!
  \*********************************************************/
/*! exports provided: getBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBody", function() { return getBody; });
function getBody () {
  var doc = document,
      body = doc.body;

  if (!body) {
    body = doc.createElement('body');
    body.fake = true;
  }

  return body;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getCssRulesLength.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getCssRulesLength.js ***!
  \*******************************************************************/
/*! exports provided: getCssRulesLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCssRulesLength", function() { return getCssRulesLength; });
function getCssRulesLength(sheet) {
  var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;
  return rule.length;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getEndProperty.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getEndProperty.js ***!
  \****************************************************************/
/*! exports provided: getEndProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndProperty", function() { return getEndProperty; });
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
  var endProp = false;
  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }
  return endProp;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getSlideId.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getSlideId.js ***!
  \************************************************************/
/*! exports provided: getSlideId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideId", function() { return getSlideId; });
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  
  return 'tns' + window.tnsId;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getTouchDirection.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getTouchDirection.js ***!
  \*******************************************************************/
/*! exports provided: getTouchDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchDirection", function() { return getTouchDirection; });
function getTouchDirection(angle, range) {
  var direction = false,
      gap = Math.abs(90 - Math.abs(angle));
      
  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/has3DTransforms.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/has3DTransforms.js ***!
  \*****************************************************************/
/*! exports provided: has3DTransforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has3DTransforms", function() { return has3DTransforms; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");




function has3DTransforms(tf){
  if (!tf) { return false; }
  if (!window.getComputedStyle) { return false; }
  
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      el = doc.createElement('p'),
      has3d,
      cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';

  cssTF += 'transform';

  // Add it to the body to get the computed style
  body.insertBefore(el, null);

  el.style[tf] = 'translate3d(1px,1px,1px)';
  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);

  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : el.remove();

  return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
}


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hasAttr.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hasAttr.js ***!
  \*********************************************************/
/*! exports provided: hasAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAttr", function() { return hasAttr; });
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hasClass.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hasClass.js ***!
  \**********************************************************/
/*! exports provided: classListSupport, hasClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony import */ var _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classListSupport.js */ "./node_modules/tiny-slider/src/helpers/classListSupport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classListSupport", function() { return _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"]; });



var hasClass = _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ?
    function (el, str) { return el.classList.contains(str); } :
    function (el, str) { return el.className.indexOf(str) >= 0; };



/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hideElement.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hideElement.js ***!
  \*************************************************************/
/*! exports provided: hideElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideElement", function() { return hideElement; });
function hideElement(el, forceHide) {
  if (el.style.display !== 'none') { el.style.display = 'none'; }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/isNodeList.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/isNodeList.js ***!
  \************************************************************/
/*! exports provided: isNodeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeList", function() { return isNodeList; });
function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined"; 
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/isVisible.js":
/*!***********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/isVisible.js ***!
  \***********************************************************/
/*! exports provided: isVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
function isVisible(el) {
  return window.getComputedStyle(el).display !== 'none';
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/jsTransform.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/jsTransform.js ***!
  \*************************************************************/
/*! exports provided: jsTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsTransform", function() { return jsTransform; });
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      unit = (to.indexOf('%') >= 0) ? '%' : 'px',
      to = to.replace(unit, ''),
      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
      positionTick = (to - from) / duration * tick,
      running;

  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;
    if (duration > 0) { 
      setTimeout(moveElement, tick); 
    } else {
      callback();
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/mediaquerySupport.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/mediaquerySupport.js ***!
  \*******************************************************************/
/*! exports provided: mediaquerySupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaquerySupport", function() { return mediaquerySupport; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");




function mediaquerySupport () {
  if (window.matchMedia || window.msMatchMedia) {
    return true;
  }
  
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      div = doc.createElement('div'),
      style = doc.createElement('style'),
      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
      position;

  style.type = 'text/css';
  div.className = 'tns-mq-test';

  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];

  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : div.remove();

  return position === "absolute";
}


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/passiveOption.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/passiveOption.js ***!
  \***************************************************************/
/*! exports provided: passiveOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passiveOption", function() { return passiveOption; });
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = supportsPassive ? { passive: true } : false;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/percentageLayout.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/percentageLayout.js ***!
  \******************************************************************/
/*! exports provided: percentageLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentageLayout", function() { return percentageLayout; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");
// get subpixel support value
// @return - boolean




function percentageLayout() {
  // check subpixel layout supporting
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      wrapper = doc.createElement('div'),
      outer = doc.createElement('div'),
      str = '',
      count = 70,
      perPage = 3,
      supported = false;

  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";

  for (var i = 0; i < count; i++) {
    str += '<div></div>';
  }

  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);

  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;

  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : wrapper.remove();

  return supported;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/raf.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/raf.js ***!
  \*****************************************************/
/*! exports provided: raf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
var win = window;

var raf = win.requestAnimationFrame
  || win.webkitRequestAnimationFrame
  || win.mozRequestAnimationFrame
  || win.msRequestAnimationFrame
  || function(cb) { return setTimeout(cb, 16); };


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeAttrs.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeAttrs.js ***!
  \*************************************************************/
/*! exports provided: removeAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttrs", function() { return removeAttrs; });
/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNodeList.js */ "./node_modules/tiny-slider/src/helpers/isNodeList.js");


function removeAttrs(els, attrs) {
  els = (Object(_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__["isNodeList"])(els) || els instanceof Array) ? els : [els];
  attrs = (attrs instanceof Array) ? attrs : [attrs];

  var attrLength = attrs.length;
  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeCSSRule.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeCSSRule.js ***!
  \***************************************************************/
/*! exports provided: removeCSSRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCSSRule", function() { return removeCSSRule; });
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
// cross browsers addRule method

function removeCSSRule(sheet, index) {
  // return raf(function() {
    'deleteRule' in sheet ?
      sheet.deleteRule(index) :
      sheet.removeRule(index);
  // });
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeClass.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeClass.js ***!
  \*************************************************************/
/*! exports provided: removeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");

var removeClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ?
    function (el, str) {
      if (Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el,  str)) { el.classList.remove(str); }
    } :
    function (el, str) {
      if (Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, str)) { el.className = el.className.replace(str, ''); }
    };



/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeEvents.js":
/*!**************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeEvents.js ***!
  \**************************************************************/
/*! exports provided: removeEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEvents", function() { return removeEvents; });
/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveOption.js */ "./node_modules/tiny-slider/src/helpers/passiveOption.js");


function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__["passiveOption"] : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/resetFakeBody.js ***!
  \***************************************************************/
/*! exports provided: resetFakeBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetFakeBody", function() { return resetFakeBody; });
/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docElement.js */ "./node_modules/tiny-slider/src/helpers/docElement.js");


function resetFakeBody (body, docOverflow) {
  if (body.fake) {
    body.remove();
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow = docOverflow;
    // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].offsetHeight;
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setAttrs.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setAttrs.js ***!
  \**********************************************************/
/*! exports provided: setAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttrs", function() { return setAttrs; });
/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNodeList.js */ "./node_modules/tiny-slider/src/helpers/isNodeList.js");


function setAttrs(els, attrs) {
  els = (Object(_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__["isNodeList"])(els) || els instanceof Array) ? els : [els];
  if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }

  for (var i = els.length; i--;) {
    for(var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setFakeBody.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setFakeBody.js ***!
  \*************************************************************/
/*! exports provided: setFakeBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFakeBody", function() { return setFakeBody; });
/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docElement.js */ "./node_modules/tiny-slider/src/helpers/docElement.js");


function setFakeBody (body) {
  var docOverflow = '';
  if (body.fake) {
    docOverflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow;
    //avoid crashing IE8, if background image is used
    body.style.background = '';
    //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
    body.style.overflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow = 'hidden';
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].appendChild(body);
  }

  return docOverflow;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setLocalStorage.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setLocalStorage.js ***!
  \*****************************************************************/
/*! exports provided: setLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return setLocalStorage; });
function setLocalStorage(storage, key, value, access) {
  if (access) {
    try { storage.setItem(key, value); } catch (e) {}
  }
  return value;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/showElement.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/showElement.js ***!
  \*************************************************************/
/*! exports provided: showElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showElement", function() { return showElement; });
function showElement(el, forceHide) {
  if (el.style.display === 'none') { el.style.display = ''; }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/toDegree.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/toDegree.js ***!
  \**********************************************************/
/*! exports provided: toDegree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDegree", function() { return toDegree; });
function toDegree (y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/whichProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/whichProperty.js ***!
  \***************************************************************/
/*! exports provided: whichProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whichProperty", function() { return whichProperty; });
function whichProperty(props){
  if (typeof props === 'string') {
    var arr = [props],
        Props = props.charAt(0).toUpperCase() + props.substr(1),
        prefixes = ['Webkit', 'Moz', 'ms', 'O'];
        
    prefixes.forEach(function(prefix) {
      if (prefix !== 'ms' || props === 'transform') {
        arr.push(prefix + Props);
      }
    });

    props = arr;
  }

  var el = document.createElement('fakeelement'),
      len = props.length;
  for(var i = 0; i < props.length; i++){
    var prop = props[i];
    if( el.style[prop] !== undefined ){ return prop; }
  }

  return false; // explicit for ie9-
}


/***/ }),

/***/ "./node_modules/tiny-slider/src/tiny-slider.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/tiny-slider.js ***!
  \*****************************************************/
/*! exports provided: tns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tns", function() { return tns; });
/* harmony import */ var _helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
/* harmony import */ var _helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/caf.js */ "./node_modules/tiny-slider/src/helpers/caf.js");
/* harmony import */ var _helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/extend.js */ "./node_modules/tiny-slider/src/helpers/extend.js");
/* harmony import */ var _helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/checkStorageValue.js */ "./node_modules/tiny-slider/src/helpers/checkStorageValue.js");
/* harmony import */ var _helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/setLocalStorage.js */ "./node_modules/tiny-slider/src/helpers/setLocalStorage.js");
/* harmony import */ var _helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/getSlideId.js */ "./node_modules/tiny-slider/src/helpers/getSlideId.js");
/* harmony import */ var _helpers_calc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/calc.js */ "./node_modules/tiny-slider/src/helpers/calc.js");
/* harmony import */ var _helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/percentageLayout.js */ "./node_modules/tiny-slider/src/helpers/percentageLayout.js");
/* harmony import */ var _helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/mediaquerySupport.js */ "./node_modules/tiny-slider/src/helpers/mediaquerySupport.js");
/* harmony import */ var _helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/createStyleSheet.js */ "./node_modules/tiny-slider/src/helpers/createStyleSheet.js");
/* harmony import */ var _helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/addCSSRule.js */ "./node_modules/tiny-slider/src/helpers/addCSSRule.js");
/* harmony import */ var _helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/removeCSSRule.js */ "./node_modules/tiny-slider/src/helpers/removeCSSRule.js");
/* harmony import */ var _helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/getCssRulesLength.js */ "./node_modules/tiny-slider/src/helpers/getCssRulesLength.js");
/* harmony import */ var _helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers/toDegree.js */ "./node_modules/tiny-slider/src/helpers/toDegree.js");
/* harmony import */ var _helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/getTouchDirection.js */ "./node_modules/tiny-slider/src/helpers/getTouchDirection.js");
/* harmony import */ var _helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/forEach.js */ "./node_modules/tiny-slider/src/helpers/forEach.js");
/* harmony import */ var _helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");
/* harmony import */ var _helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/addClass.js */ "./node_modules/tiny-slider/src/helpers/addClass.js");
/* harmony import */ var _helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/removeClass.js */ "./node_modules/tiny-slider/src/helpers/removeClass.js");
/* harmony import */ var _helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helpers/hasAttr.js */ "./node_modules/tiny-slider/src/helpers/hasAttr.js");
/* harmony import */ var _helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./helpers/getAttr.js */ "./node_modules/tiny-slider/src/helpers/getAttr.js");
/* harmony import */ var _helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./helpers/setAttrs.js */ "./node_modules/tiny-slider/src/helpers/setAttrs.js");
/* harmony import */ var _helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helpers/removeAttrs.js */ "./node_modules/tiny-slider/src/helpers/removeAttrs.js");
/* harmony import */ var _helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./helpers/arrayFromNodeList.js */ "./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js");
/* harmony import */ var _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./helpers/hideElement.js */ "./node_modules/tiny-slider/src/helpers/hideElement.js");
/* harmony import */ var _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./helpers/showElement.js */ "./node_modules/tiny-slider/src/helpers/showElement.js");
/* harmony import */ var _helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./helpers/isVisible.js */ "./node_modules/tiny-slider/src/helpers/isVisible.js");
/* harmony import */ var _helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./helpers/whichProperty.js */ "./node_modules/tiny-slider/src/helpers/whichProperty.js");
/* harmony import */ var _helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./helpers/has3DTransforms.js */ "./node_modules/tiny-slider/src/helpers/has3DTransforms.js");
/* harmony import */ var _helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./helpers/getEndProperty.js */ "./node_modules/tiny-slider/src/helpers/getEndProperty.js");
/* harmony import */ var _helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./helpers/addEvents.js */ "./node_modules/tiny-slider/src/helpers/addEvents.js");
/* harmony import */ var _helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./helpers/removeEvents.js */ "./node_modules/tiny-slider/src/helpers/removeEvents.js");
/* harmony import */ var _helpers_events_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./helpers/events.js */ "./node_modules/tiny-slider/src/helpers/events.js");
/* harmony import */ var _helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./helpers/jsTransform.js */ "./node_modules/tiny-slider/src/helpers/jsTransform.js");
// Object.keys
if (!Object.keys) {
  Object.keys = function(object) {
    var keys = [];
    for (var name in object) {
      if (Object.prototype.hasOwnProperty.call(object, name)) {
        keys.push(name);
      }
    }
    return keys;
  };
}

// ChildNode.remove
if(!("remove" in Element.prototype)){
  Element.prototype.remove = function(){
    if(this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}




































var tns = function(options) {
  options = Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__["extend"])({
    container: '.slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    center: false,
    controls: true,
    controlsPosition: 'top',
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navPosition: 'top',
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayPosition: 'top',
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    lazyloadSelector: '.tns-lazy-img',
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    preventActionWhenRunning: false,
    preventScrollOnTouch: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true,
    nonce: false
  }, options || {});

  var doc = document,
      win = window,
      KEYS = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
      },
      tnsStorage = {},
      localStorageAccess = options.useLocalStorage;

  if (localStorageAccess) {
    // check browser version and local storage access
    var browserInfo = navigator.userAgent;
    var uid = new Date;

    try {
      tnsStorage = win.localStorage;
      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }
      if (!localStorageAccess) { tnsStorage = {}; }
    } catch(e) {
      localStorageAccess = false;
    }

    if (localStorageAccess) {
      // remove storage when browser version changes
      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });
      }
      // update browserInfo
      localStorage['tnsApp'] = browserInfo;
    }
  }

  var CALC = tnsStorage['tC'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tC']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tC', Object(_helpers_calc_js__WEBPACK_IMPORTED_MODULE_6__["calc"])(), localStorageAccess),
      PERCENTAGELAYOUT = tnsStorage['tPL'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tPL']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tPL', Object(_helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_7__["percentageLayout"])(), localStorageAccess),
      CSSMQ = tnsStorage['tMQ'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tMQ']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tMQ', Object(_helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_8__["mediaquerySupport"])(), localStorageAccess),
      TRANSFORM = tnsStorage['tTf'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tTf']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tTf', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__["whichProperty"])('transform'), localStorageAccess),
      HAS3DTRANSFORMS = tnsStorage['t3D'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['t3D']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 't3D', Object(_helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_28__["has3DTransforms"])(TRANSFORM), localStorageAccess),
      TRANSITIONDURATION = tnsStorage['tTDu'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tTDu']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tTDu', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__["whichProperty"])('transitionDuration'), localStorageAccess),
      TRANSITIONDELAY = tnsStorage['tTDe'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tTDe']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tTDe', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__["whichProperty"])('transitionDelay'), localStorageAccess),
      ANIMATIONDURATION = tnsStorage['tADu'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tADu']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tADu', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__["whichProperty"])('animationDuration'), localStorageAccess),
      ANIMATIONDELAY = tnsStorage['tADe'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tADe']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tADe', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__["whichProperty"])('animationDelay'), localStorageAccess),
      TRANSITIONEND = tnsStorage['tTE'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tTE']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tTE', Object(_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__["getEndProperty"])(TRANSITIONDURATION, 'Transition'), localStorageAccess),
      ANIMATIONEND = tnsStorage['tAE'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tAE']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tAE', Object(_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__["getEndProperty"])(ANIMATIONDURATION, 'Animation'), localStorageAccess);

  // get element nodes from selectors
  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
      tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'],
      optionsElements = {};

  tnsList.forEach(function(item) {
    if (typeof options[item] === 'string') {
      var str = options[item],
          el = doc.querySelector(str);
      optionsElements[item] = str;

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) { console.warn('Can\'t find', options[item]); }
        return;
      }
    }
  });

  // make sure at least 1 slide
  if (options.container.children.length < 1) {
    if (supportConsoleWarn) { console.warn('No slides found in', options.container); }
    return;
   }

  // update options
  var responsive = options.responsive,
      nested = options.nested,
      carousel = options.mode === 'carousel' ? true : false;

  if (responsive) {
    // apply responsive[0] to options and remove it
    if (0 in responsive) {
      options = Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__["extend"])(options, responsive[0]);
      delete responsive[0];
    }

    var responsiveTem = {};
    for (var key in responsive) {
      var val = responsive[key];
      // update responsive
      // from: 300: 2
      // to:
      //   300: {
      //     items: 2
      //   }
      val = typeof val === 'number' ? {items: val} : val;
      responsiveTem[key] = val;
    }
    responsive = responsiveTem;
    responsiveTem = null;
  }

  // update options
  function updateOptions (obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') { obj[key] = 'page'; }
        if (key === 'edgePadding') { obj[key] = false; }
        if (key === 'autoHeight') { obj[key] = false; }
      }

      // update responsive options
      if (key === 'responsive') { updateOptions(obj[key]); }
    }
  }
  if (!carousel) { updateOptions(options); }


  // === define and set variables ===
  if (!carousel) {
    options.axis = 'horizontal';
    options.slideBy = 'page';
    options.edgePadding = false;

    var animateIn = options.animateIn,
        animateOut = options.animateOut,
        animateDelay = options.animateDelay,
        animateNormal = options.animateNormal;
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      middleWrapper,
      container = options.container,
      containerParent = container.parentNode,
      containerHTML = container.outerHTML,
      slideItems = container.children,
      slideCount = slideItems.length,
      breakpointZone,
      windowWidth = getWindowWidth(),
      isOn = false;
  if (responsive) { setBreakpointZone(); }
  if (carousel) { container.className += ' tns-vpfix'; }

  // fixedWidth: viewport > rightBoundary > indexMax
  var autoWidth = options.autoWidth,
      fixedWidth = getOption('fixedWidth'),
      edgePadding = getOption('edgePadding'),
      gutter = getOption('gutter'),
      viewport = getViewportWidth(),
      center = getOption('center'),
      items = !autoWidth ? Math.floor(getOption('items')) : 1,
      slideBy = getOption('slideBy'),
      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      controls = getOption('controls'),
      controlsText = getOption('controlsText'),
      nav = getOption('nav'),
      touch = getOption('touch'),
      mouseDrag = getOption('mouseDrag'),
      autoplay = getOption('autoplay'),
      autoplayTimeout = getOption('autoplayTimeout'),
      autoplayText = getOption('autoplayText'),
      autoplayHoverPause = getOption('autoplayHoverPause'),
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
      sheet = Object(_helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_9__["createStyleSheet"])(null, getOption('nonce')),
      lazyload = options.lazyload,
      lazyloadSelector = options.lazyloadSelector,
      slidePositions, // collection of slide positions
      slideItemsOut = [],
      cloneCount = loop ? getCloneCountForLoop() : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
      rightBoundary = fixedWidth ? getRightBoundary() : null,
      updateIndexBeforeTransform = (!carousel || !loop) ? true : false,
      // transform
      transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
      getIndexMax = (function () {
        if (fixedWidth) {
          return function() { return center && !loop ? slideCount - 1 : Math.ceil(- rightBoundary / (fixedWidth + gutter)); };
        } else if (autoWidth) {
          return function() {
            for (var i = 0; i < slideCountNew; i++) {
              if (slidePositions[i] >= - rightBoundary) { return i; }
            }
          };
        } else {
          return function() {
            if (center && carousel && !loop) {
              return slideCount - 1;
            } else {
              return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
            }
          };
        }
      })(),
      index = getStartIndex(getOption('startIndex')),
      indexCached = index,
      displayIndex = getCurrentSlide(),
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,
      // resize
      resizeTimer,
      preventActionWhenRunning = options.preventActionWhenRunning,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new _helpers_events_js__WEBPACK_IMPORTED_MODULE_32__["Events"](),
      // id, class
      newContainerClasses = ' tns-slider tns-' + options.mode,
      slideId = container.id || Object(_helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_5__["getSlideId"])(),
      disable = getOption('disable'),
      disabled = false,
      freezable = options.freezable,
      freeze = freezable && !autoWidth ? getFreeze() : false,
      frozen = false,
      controlsEvents = {
        'click': onControlsClick,
        'keydown': onControlsKeydown
      },
      navEvents = {
        'click': onNavClick,
        'keydown': onNavKeydown
      },
      hoverEvents = {
        'mouseover': mouseoverPause,
        'mouseout': mouseoutRestart
      },
      visibilityEvent = {'visibilitychange': onVisibilityChange},
      docmentKeydownEvent = {'keydown': onDocumentKeydown},
      touchEvents = {
        'touchstart': onPanStart,
        'touchmove': onPanMove,
        'touchend': onPanEnd,
        'touchcancel': onPanEnd
      }, dragEvents = {
        'mousedown': onPanStart,
        'mousemove': onPanMove,
        'mouseup': onPanEnd,
        'mouseleave': onPanEnd
      },
      hasControls = hasOption('controls'),
      hasNav = hasOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = hasOption('autoplay'),
      hasTouch = hasOption('touch'),
      hasMouseDrag = hasOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      slideClonedClass = 'tns-slide-cloned',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
        'load': onImgLoaded,
        'error': onImgFailed
      },
      imgsComplete,
      liveregionCurrent,
      preventScroll = options.preventScrollOnTouch === 'force' ? true : false;

  // controls
  if (hasControls) {
    var controlsContainer = options.controlsContainer,
        controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
        prevButton = options.prevButton,
        nextButton = options.nextButton,
        prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
        nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
        prevIsButton,
        nextIsButton;
  }

  // nav
  if (hasNav) {
    var navContainer = options.navContainer,
        navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
        navItems,
        pages = autoWidth ? slideCount : getPages(),
        pagesCached = 0,
        navClicked = -1,
        navCurrentIndex = getCurrentNavIndex(),
        navCurrentIndexCached = navCurrentIndex,
        navActiveClass = 'tns-nav-active',
        navStr = 'Carousel Page ',
        navStrCurrent = ' (Current Slide)';
  }

  // autoplay
  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayButton = options.autoplayButton,
        autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayTimer,
        animating,
        autoplayHoverPaused,
        autoplayUserPaused,
        autoplayVisibilityPaused;
  }

  if (hasTouch || hasMouseDrag) {
    var initPosition = {},
        lastPosition = {},
        translateInit,
        disX,
        disY,
        panStart = false,
        rafIndex,
        getDist = horizontal ?
          function(a, b) { return a.x - b.x; } :
          function(a, b) { return a.y - b.y; };
  }

  // disable slider when slidecount <= items
  if (!autoWidth) { resetVariblesWhenDisable(disable || freeze); }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }

  }

  if (carousel) { container.className = container.className.replace('tns-vpfix', ''); }
  initStructure();
  initSheet();
  initSliderTransform();

  // === COMMON FUNCTIONS === //
  function resetVariblesWhenDisable (condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }

  function getCurrentSlide () {
    var tem = carousel ? index - cloneCount : index;
    while (tem < 0) { tem += slideCount; }
    return tem%slideCount + 1;
  }

  function getStartIndex (ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }

  function getAbsIndex (i) {
    if (i == null) { i = index; }

    if (carousel) { i -= cloneCount; }
    while (i < 0) { i += slideCount; }

    return Math.floor(i%slideCount);
  }

  function getCurrentNavIndex () {
    var absIndex = getAbsIndex(),
        result;

    result = navAsThumbnails ? absIndex :
      fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) :
          Math.floor(absIndex / items);

    // set active nav to the last one when reaches the right edge
    if (!loop && carousel && index === indexMax) { result = pages - 1; }

    return result;
  }

  function getItemsMax () {
    // fixedWidth or autoWidth while viewportMax is not available
    if (autoWidth || (fixedWidth && !viewportMax)) {
      return slideCount - 1;
    // most cases
    } else {
      var str = fixedWidth ? 'fixedWidth' : 'items',
          arr = [];

      if (fixedWidth || options[str] < slideCount) { arr.push(options[str]); }

      if (responsive) {
        for (var bp in responsive) {
          var tem = responsive[bp][str];
          if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }
        }
      }

      if (!arr.length) { arr.push(0); }

      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
    }
  }

  function getCloneCountForLoop () {
    var itemsMax = getItemsMax(),
        result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);
    result = Math.max(itemsMax, result);

    return hasOption('edgePadding') ? result + 1 : result;
  }

  function getWindowWidth () {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function getInsertPosition (pos) {
    return pos === 'top' ? 'afterbegin' : 'beforeend';
  }

  function getClientWidth (el) {
    if (el == null) { return; }
    var div = doc.createElement('div'), rect, width;
    el.appendChild(div);
    rect = div.getBoundingClientRect();
    width = rect.right - rect.left;
    div.remove();
    return width || getClientWidth(el.parentNode);
  }

  function getViewportWidth () {
    var gap = edgePadding ? edgePadding * 2 - gutter : 0;
    return getClientWidth(containerParent) - gap;
  }

  function hasOption (item) {
    if (options[item]) {
      return true;
    } else {
      if (responsive) {
        for (var bp in responsive) {
          if (responsive[bp][item]) { return true; }
        }
      }
      return false;
    }
  }

  // get option:
  // fixed width: viewport, fixedWidth, gutter => items
  // others: window width => all variables
  // all: items => slideBy
  function getOption (item, ww) {
    if (ww == null) { ww = windowWidth; }

    if (item === 'items' && fixedWidth) {
      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;

    } else {
      var result = options[item];

      if (responsive) {
        for (var bp in responsive) {
          // bp: convert string to number
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) { result = responsive[bp][item]; }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') { result = getOption('items'); }
      if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }

      return result;
    }
  }

  function getSlideMarginLeft (i) {
    return CALC ?
      CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' :
      i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
    var str = '';

    if (edgePaddingTem !== undefined) {
      var gap = edgePaddingTem;
      if (gutterTem) { gap -= gutterTem; }
      str = horizontal ?
        'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' :
        'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';'
    }

    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) { str += getTransitionDurationStyle(speedTem); }
    return str;
  }

  function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      return CALC ?
        CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' :
        slideCountNew * 100 / itemsTem + '%';
    }
  }

  function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
    var width;

    if (fixedWidthTem) {
      width = (fixedWidthTem + gutterTem) + 'px';
    } else {
      if (!carousel) { itemsTem = Math.floor(itemsTem); }
      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ?
        CALC + '(100% / ' + dividend + ')' :
        100 / dividend + '%';
    }

    width = 'width:' + width;

    // inner slider: overwrite outer slider styles
    return nested !== 'inner' ? width + ';' : width + ' !important;';
  }

  function getSlideGutterStyle (gutterTem) {
    var str = '';

    // gutter maybe interger || 0
    // so can't use 'if (gutter)'
    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop +  dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  function getCSSPrefix (name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();
    if (prefix) { prefix = '-' + prefix + '-'; }

    return prefix;
  }

  function getTransitionDurationStyle (speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle (speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function initStructure () {
    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = hasOption('gutter');

    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + '-ow';
    innerWrapper.id = slideId + '-iw';

    // set container properties
    if (container.id === '') { container.id = slideId; }
    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';
    if (autoWidth) { newContainerClasses += ' tns-autowidth'; }
    newContainerClasses += ' tns-' + options.axis;
    container.className += newContainerClasses;

    // add constrain layer for carousel
    if (carousel) {
      middleWrapper = doc.createElement('div');
      middleWrapper.id = slideId + '-mw';
      middleWrapper.className = 'tns-ovh';

      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    if (autoHeight) {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.className += ' tns-ah';
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);

    // add id, class, aria attributes
    // before clone slides
    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__["forEach"])(slideItems, function(item, i) {
      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, 'tns-item');
      if (!item.id) { item.id = slideId + '-item' + i; }
      if (!carousel && animateNormal) { Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, animateNormal); }
      Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    });

    // ## clone slides
    // carousel: n + slides + n
    // gallery:      slides + n
    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(),
          fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j%slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(cloneFirst, slideClonedClass);
        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__["removeAttrs"])(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(cloneLast, slideClonedClass);
          Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__["removeAttrs"])(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }

  }

  function initSliderTransform () {
    // ## images loaded/failed
    if (hasOption('autoHeight') || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img');

      // add img load event listener
      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__["forEach"])(imgs, function(img) {
        var src = img.src;

        if (!lazyload) {
          // not data img
          if (src && src.indexOf('data:image') < 0) {
            img.src = '';
            Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(img, imgEvents);
            Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(img, 'loading');

            img.src = src;
          // data img
          } else {
            imgLoaded(img);
          }
        }
      });

      // set imgsComplete
      Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__["raf"])(function(){ imgsLoadedCheck(Object(_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__["arrayFromNodeList"])(imgs), function() { imgsComplete = true; }); });

      // reset imgs for auto height: check visible imgs only
      if (hasOption('autoHeight')) { imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1)); }

      lazyload ? initSliderTransformStyleCheck() : Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__["raf"])(function(){ imgsLoadedCheck(Object(_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__["arrayFromNodeList"])(imgs), initSliderTransformStyleCheck); });

    } else {
      // set container transform property
      if (carousel) { doContainerTransformSilent(); }

      // update slider tools and events
      initTools();
      initEvents();
    }
  }

  function initSliderTransformStyleCheck () {
    if (autoWidth && slideCount > 1) {
      // check styles application
      var num = loop ? index : slideCount - 1;

      (function stylesApplicationCheck() {
        var left = slideItems[num].getBoundingClientRect().left;
        var right = slideItems[num - 1].getBoundingClientRect().right;

        (Math.abs(left - right) <= 1) ?
          initSliderTransformCore() :
          setTimeout(function(){ stylesApplicationCheck() }, 16);
      })();

    } else {
      initSliderTransformCore();
    }
  }


  function initSliderTransformCore () {
    // run Fn()s which are rely on image loading
    if (!horizontal || autoWidth) {
      setSlidePositions();

      if (autoWidth) {
        rightBoundary = getRightBoundary();
        if (freezable) { freeze = getFreeze(); }
        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
        resetVariblesWhenDisable(disable || freeze);
      } else {
        updateContentWrapperHeight();
      }
    }

    // set container transform property
    if (carousel) { doContainerTransformSilent(); }

    // update slider tools and events
    initTools();
    initEvents();
  }

  function initSheet () {
    // gallery:
    // set animation classes and left value for gallery slider
    if (!carousel) {
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        item.style.left = (i - index) * 100 / items + '%';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, animateIn);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, animateNormal);
      }
    }

    // #### LAYOUT

    // ## INLINE-BLOCK VS FLOAT

    // ## PercentageLayout:
    // slides: inline-block
    // remove blank space between slides by set font-size: 0

    // ## Non PercentageLayout:
    // slides: float
    //         margin-right: -100%
    //         margin-left: ~

    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet));
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '#' + slideId, 'font-size:0;', Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet));
      } else if (carousel) {
        Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__["forEach"])(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    }


    // ## BASIC STYLES
    if (CSSMQ) {
      // middle wrapper style
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '#' + slideId + '-mw', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet));
      }

      // inner wrapper styles
      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
      Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '#' + slideId + '-iw', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet));

      // container styles
      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '#' + slideId, str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet));
      }

      // slide styles
      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
      if (options.gutter) { str += getSlideGutterStyle(options.gutter); }
      // set gallery items transition-duration
      if (!carousel) {
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }
      }
      if (str) { Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet)); }

    // non CSS mediaqueries: IE8
    // ## update inner wrapper, container, slides if needed
    // set inline styles for inner wrapper & container
    // insert stylesheet (one line) for slides only (since slides are many)
    } else {
      // middle wrapper styles
      update_carousel_transition_duration();

      // inner wrapper styles
      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);

      // container styles
      if (carousel && horizontal && !autoWidth) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      }

      // slide styles
      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
      if (gutter) { str += getSlideGutterStyle(gutter); }

      // append to the last line
      if (str) { Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet)); }
    }

    // ## MEDIAQUERIES
    if (responsive && CSSMQ) {
      for (var bp in responsive) {
        // bp: convert string to number
        bp = parseInt(bp);

        var opts = responsive[bp],
            str = '',
            middleWrapperStr = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = !autoWidth ? getOption('items', bp) : null,
            fixedWidthBP = getOption('fixedWidth', bp),
            speedBP = getOption('speed', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            autoHeightBP = getOption('autoHeight', bp),
            gutterBP = getOption('gutter', bp);

        // middle wrapper string
        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
          middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
        }

        // inner wrapper string
        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
        }

        // container string
        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }
        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTransitionDurationStyle(speedBP);
        }
        if (containerStr) {
          containerStr = '#' + slideId + '{' + containerStr + '}';
        }

        // slide string
        if ('fixedWidth' in opts || (fixedWidth && 'gutter' in opts) || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }
        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        }
        // set gallery items transition-duration
        if (!carousel && 'speed' in opts) {
          if (TRANSITIONDURATION) { slideStr += getTransitionDurationStyle(speedBP); }
          if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }
        }
        if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }

        // add up
        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      }
    }
  }

  function initTools () {
    // == slides ==
    updateSlideStatus();

    // == live region ==
    outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
    liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current');

    // == autoplayInit ==
    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';
      if (autoplayButton) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(autoplayButton, {'data-action': txt});
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      }

      // add event
      if (autoplayButton) {
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(autoplayButton, {'click': toggleAutoplay});
      }

      if (autoplay) {
        startAutoplay();
        if (autoplayHoverPause) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(container, hoverEvents); }
        if (autoplayResetOnVisibility) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(container, visibilityEvent); }
      }
    }

    // == navInit ==
    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount;
      // customized nav
      // will not hide the navs in case they're thumbnails
      if (navContainer) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(navContainer, {'aria-label': 'Carousel Pagination'});
        navItems = navContainer.children;
        Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__["forEach"])(navItems, function(item, i) {
          Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(item, {
            'data-nav': i,
            'tabindex': '-1',
            'aria-label': navStr + (i + 1),
            'aria-controls': slideId,
          });
        });

      // generated nav
      } else {
        var navHtml = '',
            hiddenStr = navAsThumbnails ? '' : 'style="display:none"';
        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button type="button" data-nav="' + i +'" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) +'"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);

        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;
      }

      updateNavVisibility();

      // add transition
      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '[aria-controls^=' + slideId + '-item]', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet));
      }

      Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(navItems[navCurrentIndex], {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
      Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__["removeAttrs"])(navItems[navCurrentIndex], 'tabindex');
      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(navItems[navCurrentIndex], navActiveClass);

      // add events
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(navContainer, navEvents);
    }



    // == controlsInit ==
    if (hasControls) {
      if (!controlsContainer && (!prevButton || !nextButton)) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[1] + '</button></div>');

        controlsContainer = outerWrapper.querySelector('.tns-controls');
      }

      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      if (options.controlsContainer) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])([prevButton, nextButton], {
          'aria-controls': slideId,
          'tabindex': '-1',
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(prevButton, {'data-controls' : 'prev'});
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(nextButton, {'data-controls' : 'next'});
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);

      updateControlsStatus();

      // add events
      if (controlsContainer) {
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(controlsContainer, controlsEvents);
      } else {
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(prevButton, controlsEvents);
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(nextButton, controlsEvents);
      }
    }

    // hide tools if needed
    disableUI();
  }

  function initEvents () {
    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(container, eve);
    }

    if (touch) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(container, touchEvents, options.preventScrollOnTouch); }
    if (mouseDrag) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(container, dragEvents); }
    if (arrowKeys) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(doc, docmentKeydownEvent); }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(win, {'resize': onResize});
    }

    if (autoHeight) {
      if (nested === 'outer') {
        events.on('innerLoaded', doAutoHeight);
      } else if (!disable) { doAutoHeight(); }
    }

    doLazyLoad();
    if (disable) { disableSlider(); } else if (freeze) { freezeSlider(); }

    events.on('indexChanged', additionalUpdates);
    if (nested === 'inner') { events.emit('innerLoaded', info()); }
    if (typeof onInit === 'function') { onInit(info()); }
    isOn = true;
  }

  function destroy () {
    // sheet
    sheet.disabled = true;
    if (sheet.ownerNode) { sheet.ownerNode.remove(); }

    // remove win event listeners
    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(win, {'resize': onResize});

    // arrowKeys, controls, nav
    if (arrowKeys) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(doc, docmentKeydownEvent); }
    if (controlsContainer) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(controlsContainer, controlsEvents); }
    if (navContainer) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(navContainer, navEvents); }

    // autoplay
    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(container, hoverEvents);
    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(container, visibilityEvent);
    if (autoplayButton) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(autoplayButton, {'click': toggleAutoplay}); }
    if (autoplay) { clearInterval(autoplayTimer); }

    // container
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(container, eve);
    }
    if (touch) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(container, touchEvents); }
    if (mouseDrag) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(container, dragEvents); }

    // cache Object values in options && reset HTML
    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];

    tnsList.forEach(function(item, i) {
      var el = item === 'container' ? outerWrapper : options[item];

      if (typeof el === 'object' && el) {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
            parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    });


    // reset variables
    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
    // check variables
    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

    for (var a in this) {
      if (a !== 'rebuild') { this[a] = null; }
    }
    isOn = false;
  }

// === ON RESIZE ===
  // responsive || fixedWidth || autoWidth || !horizontal
  function onResize (e) {
    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__["raf"])(function(){ resizeTasks(getEvent(e)); });
  }

  function resizeTasks (e) {
    if (!isOn) { return; }
    if (nested === 'outer') { events.emit('outerResized', info(e)); }
    windowWidth = getWindowWidth();
    var bpChanged,
        breakpointZoneTem = breakpointZone,
        needContainerTransform = false;

    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone;
      // if (hasRightDeadZone) { needContainerTransform = true; } // *?
      if (bpChanged) { events.emit('newBreakpointStart', info(e)); }
    }

    var indChanged,
        itemsChanged,
        itemsTem = items,
        disableTem = disable,
        freezeTem = freeze,
        arrowKeysTem = arrowKeys,
        controlsTem = controls,
        navTem = nav,
        touchTem = touch,
        mouseDragTem = mouseDrag,
        autoplayTem = autoplay,
        autoplayHoverPauseTem = autoplayHoverPause,
        autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
        indexTem = index;

    if (bpChanged) {
      var fixedWidthTem = fixedWidth,
          autoHeightTem = autoHeight,
          controlsTextTem = controlsText,
          centerTem = center,
          autoplayTextTem = autoplayText;

      if (!CSSMQ) {
        var gutterTem = gutter,
            edgePaddingTem = edgePadding;
      }
    }

    // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    arrowKeys = getOption('arrowKeys');
    controls = getOption('controls');
    nav = getOption('nav');
    touch = getOption('touch');
    center = getOption('center');
    mouseDrag = getOption('mouseDrag');
    autoplay = getOption('autoplay');
    autoplayHoverPause = getOption('autoplayHoverPause');
    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

    if (bpChanged) {
      disable = getOption('disable');
      fixedWidth = getOption('fixedWidth');
      speed = getOption('speed');
      autoHeight = getOption('autoHeight');
      controlsText = getOption('controlsText');
      autoplayText = getOption('autoplayText');
      autoplayTimeout = getOption('autoplayTimeout');

      if (!CSSMQ) {
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');
      }
    }
    // update options
    resetVariblesWhenDisable(disable);

    viewport = getViewportWidth(); // <= edgePadding, gutter
    if ((!horizontal || autoWidth) && !disable) {
      setSlidePositions();
      if (!horizontal) {
        updateContentWrapperHeight(); // <= setSlidePositions
        needContainerTransform = true;
      }
    }
    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
                                          // fixedWidth: <= viewport, fixedWidth, gutter
      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
                                // fixedWidth: <= rightBoundary, fixedWidth, gutter
    }

    if (bpChanged || fixedWidth) {
      items = getOption('items');
      slideBy = getOption('slideBy');
      itemsChanged = items !== itemsTem;

      if (itemsChanged) {
        if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); } // <= items
        // check index before transform in case
        // slider reach the right edge then items become bigger
        updateIndex();
      }
    }

    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider(); // <= slidePositions, rightBoundary, indexMax
        }
      }
    }

    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
                            // <= fixedWidth: fixedWidth, gutter, rightBoundary
                            // <= others: items

      if (freeze !== freezeTem) {
        if (freeze) {
          doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          freezeSlider();
        } else {
          unfreezeSlider();
          needContainerTransform = true;
        }
      }
    }

    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
    if (!autoplay) { autoplayHoverPause = autoplayResetOnVisibility = false; }

    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ?
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(doc, docmentKeydownEvent) :
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(doc, docmentKeydownEvent);
    }
    if (controls !== controlsTem) {
      if (controls) {
        if (controlsContainer) {
          Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(controlsContainer);
        } else {
          if (prevButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(prevButton); }
          if (nextButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(nextButton); }
        }
      } else {
        if (controlsContainer) {
          Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(controlsContainer);
        } else {
          if (prevButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(prevButton); }
          if (nextButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(nextButton); }
        }
      }
    }
    if (nav !== navTem) {
      if (nav) {
        Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(navContainer);
        updateNavVisibility();
      } else {
        Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(navContainer)
      }
    }
    if (touch !== touchTem) {
      touch ?
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(container, touchEvents, options.preventScrollOnTouch) :
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(container, touchEvents);
    }
    if (mouseDrag !== mouseDragTem) {
      mouseDrag ?
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(container, dragEvents) :
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(container, dragEvents);
    }
    if (autoplay !== autoplayTem) {
      if (autoplay) {
        if (autoplayButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(autoplayButton); }
        if (!animating && !autoplayUserPaused) { startAutoplay(); }
      } else {
        if (autoplayButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(autoplayButton); }
        if (animating) { stopAutoplay(); }
      }
    }
    if (autoplayHoverPause !== autoplayHoverPauseTem) {
      autoplayHoverPause ?
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(container, hoverEvents) :
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(container, hoverEvents);
    }
    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
      autoplayResetOnVisibility ?
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(doc, visibilityEvent) :
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(doc, visibilityEvent);
    }

    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem || center !== centerTem) { needContainerTransform = true; }

      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) { innerWrapper.style.height = ''; }
      }

      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }

      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0,
            html = autoplayButton.innerHTML,
            len = html.length - autoplayTextTem[i].length;
        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    } else {
      if (center && (fixedWidth || autoWidth)) { needContainerTransform = true; }
    }

    if (itemsChanged || fixedWidth && !autoWidth) {
      pages = getPages();
      updateNavVisibility();
    }

    indChanged = index !== indexTem;
    if (indChanged) {
      events.emit('indexChanged', info());
      needContainerTransform = true;
    } else if (itemsChanged) {
      if (!indChanged) { additionalUpdates(); }
    } else if (fixedWidth || autoWidth) {
      doLazyLoad();
      updateSlideStatus();
      updateLiveRegion();
    }

    if (itemsChanged && !carousel) { updateGallerySlidePositions(); }

    if (!disable && !freeze) {
      // non-mediaqueries: IE8
      if (bpChanged && !CSSMQ) {
        // middle wrapper styles

        // inner wrapper styles
        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
        }

        if (horizontal) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          }

          // slide styles
          var str = getSlideWidthStyle(fixedWidth, gutter, items) +
                    getSlideGutterStyle(gutter);

          // remove the last line and
          // add new styles
          Object(_helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_11__["removeCSSRule"])(sheet, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet) - 1);
          Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet));
        }
      }

      // auto height
      if (autoHeight) { doAutoHeight(); }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }

    if (bpChanged) { events.emit('newBreakpointEnd', info(e)); }
  }





  // === INITIALIZATION FUNCTIONS === //
  function getFreeze () {
    if (!fixedWidth && !autoWidth) {
      var a = center ? items - (items - 1) / 2 : items;
      return  slideCount <= a;
    }

    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
        vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

    if (center) {
      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
    }

    return width <= vp;
  }

  function setBreakpointZone () {
    breakpointZone = 0;
    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number
      if (windowWidth >= bp) { breakpointZone = bp; }
    }
  }

  // (slideBy, indexMin, indexMax) => index
  var updateIndex = (function () {
    return loop ?
      carousel ?
        // loop + carousel
        function () {
          var leftEdge = indexMin,
              rightEdge = indexMax;

          leftEdge += slideBy;
          rightEdge -= slideBy;

          // adjust edges when has edge paddings
          // or fixed-width slider with extra space on the right side
          if (edgePadding) {
            leftEdge += 1;
            rightEdge -= 1;
          } else if (fixedWidth) {
            if ((viewport + gutter)%(fixedWidth + gutter)) { rightEdge -= 1; }
          }

          if (cloneCount) {
            if (index > rightEdge) {
              index -= slideCount;
            } else if (index < leftEdge) {
              index += slideCount;
            }
          }
        } :
        // loop + gallery
        function() {
          if (index > indexMax) {
            while (index >= indexMin + slideCount) { index -= slideCount; }
          } else if (index < indexMin) {
            while (index <= indexMax - slideCount) { index += slideCount; }
          }
        } :
      // non-loop
      function() {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
  })();

  function disableUI () {
    if (!autoplay && autoplayButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(autoplayButton); }
    if (!nav && navContainer) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(navContainer); }
    if (!controls) {
      if (controlsContainer) {
        Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(controlsContainer);
      } else {
        if (prevButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(prevButton); }
        if (nextButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(nextButton); }
      }
    }
  }

  function enableUI () {
    if (autoplay && autoplayButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(autoplayButton); }
    if (nav && navContainer) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(navContainer); }
    if (controls) {
      if (controlsContainer) {
        Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(controlsContainer);
      } else {
        if (prevButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(prevButton); }
        if (nextButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(nextButton); }
      }
    }
  }

  function freezeSlider () {
    if (frozen) { return; }

    // remove edge padding from inner wrapper
    if (edgePadding) { innerWrapper.style.margin = '0px'; }

    // add class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(slideItems[i], str); }
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    disableUI();

    frozen = true;
  }

  function unfreezeSlider () {
    if (!frozen) { return; }

    // restore edge padding for inner wrapper
    // for mordern browsers
    if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }

    // remove class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(slideItems[i], str); }
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    enableUI();

    frozen = false;
  }

  function disableSlider () {
    if (disabled) { return; }

    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), '');
    Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__["removeAttrs"])(container, ['style']);
    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(slideItems[j]); }
        Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(slideItems[slideCountNew - j - 1]);
      }
    }

    // vertical slider
    if (!horizontal || !carousel) { Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__["removeAttrs"])(innerWrapper, ['style']); }

    // gallery
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__["removeAttrs"])(item, ['style']);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, animateIn);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, animateNormal);
      }
    }

    // update tools
    disableUI();

    disabled = true;
  }

  function enableSlider () {
    if (!disabled) { return; }

    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(slideItems[j]); }
        Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(slideItems[slideCountNew - j - 1]);
      }
    }

    // gallery
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i],
            classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + '%';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, classN);
      }
    }

    // update tools
    enableUI();

    disabled = false;
  }

  function updateLiveRegion () {
    var str = getLiveRegionStr();
    if (liveregionCurrent.innerHTML !== str) { liveregionCurrent.innerHTML = str; }
  }

  function getLiveRegionStr () {
    var arr = getVisibleSlideRange(),
        start = arr[0] + 1,
        end = arr[1] + 1;
    return start === end ? start + '' : start + ' to ' + end;
  }

  function getVisibleSlideRange (val) {
    if (val == null) { val = getContainerTransformValue(); }
    var start = index, end, rangestart, rangeend;

    // get range start, range end for autoWidth and fixedWidth
    if (center || edgePadding) {
      if (autoWidth || fixedWidth) {
        rangestart = - (parseFloat(val) + edgePadding);
        rangeend = rangestart + viewport + edgePadding * 2;
      }
    } else {
      if (autoWidth) {
        rangestart = slidePositions[index];
        rangeend = rangestart + viewport;
      }
    }

    // get start, end
    // - check auto width
    if (autoWidth) {
      slidePositions.forEach(function(point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) { start = i; }
          if (rangeend - point >= 0.5) { end = i; }
        }
      });

    // - check percentage width, fixed width
    } else {

      if (fixedWidth) {
        var cell = fixedWidth + gutter;
        if (center || edgePadding) {
          start = Math.floor(rangestart/cell);
          end = Math.ceil(rangeend/cell - 1);
        } else {
          end = start + Math.ceil(viewport/cell) - 1;
        }

      } else {
        if (center || edgePadding) {
          var a = items - 1;
          if (center) {
            start -= a / 2;
            end = index + a / 2;
          } else {
            end = index + a;
          }

          if (edgePadding) {
            var b = edgePadding * items / viewport;
            start -= b;
            end += b;
          }

          start = Math.floor(start);
          end = Math.ceil(end);
        } else {
          end = start + items - 1;
        }
      }

      start = Math.max(start, 0);
      end = Math.min(end, slideCountNew - 1);
    }

    return [start, end];
  }

  function doLazyLoad () {
    if (lazyload && !disable) {
      var arg = getVisibleSlideRange();
      arg.push(lazyloadSelector);

      getImageArray.apply(null, arg).forEach(function (img) {
        if (!Object(_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__["hasClass"])(img, imgCompleteClass)) {
          // stop propagation transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(img, eve);

          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(img, imgEvents);

          // update src
          img.src = Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__["getAttr"])(img, 'data-src');

          // update srcset
          var srcset = Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__["getAttr"])(img, 'data-srcset');
          if (srcset) { img.srcset = srcset; }

          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(img, 'loading');
        }
      });
    }
  }

  function onImgLoaded (e) {
    imgLoaded(getTarget(e));
  }

  function onImgFailed (e) {
    imgFailed(getTarget(e));
  }

  function imgLoaded (img) {
    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(img, 'loaded');
    imgCompleted(img);
  }

  function imgFailed (img) {
    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(img, 'failed');
    imgCompleted(img);
  }

  function imgCompleted (img) {
    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(img, imgCompleteClass);
    Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(img, 'loading');
    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(img, imgEvents);
  }

  function getImageArray (start, end, imgSelector) {
    var imgs = [];
    if (!imgSelector) { imgSelector = 'img'; }

    while (start <= end) {
      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__["forEach"])(slideItems[start].querySelectorAll(imgSelector), function (img) { imgs.push(img); });
      start++;
    }

    return imgs;
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function doAutoHeight () {
    var imgs = getImageArray.apply(null, getVisibleSlideRange());
    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__["raf"])(function(){ imgsLoadedCheck(imgs, updateInnerWrapperHeight); });
  }

  function imgsLoadedCheck (imgs, cb) {
    // execute callback function if all images are complete
    if (imgsComplete) { return cb(); }

    // check image classes
    imgs.forEach(function (img, index) {
      if (!lazyload && img.complete) { imgCompleted(img); } // Check image.complete
      if (Object(_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__["hasClass"])(img, imgCompleteClass)) { imgs.splice(index, 1); }
    });

    // execute callback function if selected images are all complete
    if (!imgs.length) { return cb(); }

    // otherwise execute this functiona again
    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__["raf"])(function(){ imgsLoadedCheck(imgs, cb); });
  }

  function additionalUpdates () {
    doLazyLoad();
    updateSlideStatus();
    updateLiveRegion();
    updateControlsStatus();
    updateNavStatus();
  }


  function update_carousel_transition_duration () {
    if (carousel && autoHeight) {
      middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }
  }

  function getMaxSlideHeight (slideStart, slideRange) {
    var heights = [];
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }

    return Math.max.apply(null, heights);
  }

  // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateInnerWrapperHeight () {
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
        wp = middleWrapper ? middleWrapper : innerWrapper;

    if (wp.style.height !== maxHeight) { wp.style.height = maxHeight + 'px'; }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions
  function setSlidePositions () {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
        attr2 = horizontal ? 'right' : 'bottom',
        base = slideItems[0].getBoundingClientRect()[attr];

    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__["forEach"])(slideItems, function(item, i) {
      // skip the first slide
      if (i) { slidePositions.push(item.getBoundingClientRect()[attr] - base); }
      // add the end edge
      if (i === slideCountNew - 1) { slidePositions.push(item.getBoundingClientRect()[attr2] - base); }
    });
  }

  // update slide
  function updateSlideStatus () {
    var range = getVisibleSlideRange(),
        start = range[0],
        end = range[1];

    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__["forEach"])(slideItems, function(item, i) {
      // show slides
      if (i >= start && i <= end) {
        if (Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__["hasAttr"])(item, 'aria-hidden')) {
          Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__["removeAttrs"])(item, ['aria-hidden', 'tabindex']);
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, slideActiveClass);
        }
      // hide slides
      } else {
        if (!Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__["hasAttr"])(item, 'aria-hidden')) {
          Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
          Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, slideActiveClass);
        }
      }
    });
  }

  // gallery: update slide position
  function updateGallerySlidePositions () {
    var l = index + Math.min(slideCount, items);
    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];

      if (i >= index && i < l) {
        // add transitions to visible slides when adjusting their positions
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, 'tns-moving');

        item.style.left = (i - index) * 100 / items + '%';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, animateIn);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, animateNormal);
      } else if (item.style.left) {
        item.style.left = '';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, animateNormal);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, animateIn);
      }

      // remove outlet animation
      Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, animateOut);
    }

    // removing '.tns-moving'
    setTimeout(function() {
      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__["forEach"])(slideItems, function(el) {
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(el, 'tns-moving');
      });
    }, 300);
  }

  // set tabindex on Nav
  function updateNavStatus () {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];

        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(navPrev, {
          'tabindex': '-1',
          'aria-label': navStr + (navCurrentIndexCached + 1)
        });
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(navPrev, navActiveClass);

        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(navCurrent, {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__["removeAttrs"])(navCurrent, 'tabindex');
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(navCurrent, navActiveClass);

        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }

  function getLowerCaseNodeName (el) {
    return el.nodeName.toLowerCase();
  }

  function isButton (el) {
    return getLowerCaseNodeName(el) === 'button';
  }

  function isAriaDisabled (el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement (isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  }

  // set 'disabled' to true on controls when reach the edges
  function updateControlsStatus () {
    if (!controls || rewind || loop) { return; }

    var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = (index <= indexMin) ? true : false,
        disableNext = (!rewind && index >= indexMax) ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }
    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }
    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }
    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  }

  // set duration
  function resetDuration (el, str) {
    if (TRANSITIONDURATION) { el.style[TRANSITIONDURATION] = str; }
  }

  function getSliderWidth () {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
  }

  function getCenterGap (num) {
    if (num == null) { num = index; }

    var gap = edgePadding ? gutter : 0;
    return autoWidth ? ((viewport - gap) - (slidePositions[num + 1] - slidePositions[num] - gutter))/2 :
      fixedWidth ? (viewport - fixedWidth) / 2 :
        (items - 1) / 2;
  }

  function getRightBoundary () {
    var gap = edgePadding ? gutter : 0,
        result = (viewport + gap) - getSliderWidth();

    if (center && !loop) {
      result = fixedWidth ? - (fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() :
        getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
    }
    if (result > 0) { result = 0; }

    return result;
  }

  function getContainerTransformValue (num) {
    if (num == null) { num = index; }

    var val;
    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = - (fixedWidth + gutter) * num;
        if (center) { val += getCenterGap(); }
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        if (center) { num -= getCenterGap(); }
        val = - num * 100 / denominator;
      }
    } else {
      val = - slidePositions[num];
      if (center && autoWidth) {
        val += getCenterGap();
      }
    }

    if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }

    val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';

    return val;
  }

  function doContainerTransformSilent (val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
  }

  function doContainerTransform (val) {
    if (val == null) { val = getContainerTransformValue(); }
    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide (number, classOut, classIn, isOut) {
    var l = number + items;
    if (!loop) { l = Math.min(l, slideCountNew); }

    for (var i = number; i < l; i++) {
        var item = slideItems[i];

      // set item positions
      if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }

      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }
      Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, classOut);
      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, classIn);

      if (isOut) { slideItemsOut.push(item); }
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = (function () {
    return carousel ?
      function () {
        resetDuration(container, '');
        if (TRANSITIONDURATION || !speed) {
          // for morden browsers with non-zero duration or
          // zero duration for all browsers
          doContainerTransform();
          // run fallback function manually
          // when duration is 0 / container is hidden
          if (!speed || !Object(_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__["isVisible"])(container)) { onTransitionEnd(); }

        } else {
          // for old browser with non-zero duration
          Object(_helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_33__["jsTransform"])(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
        }

        if (!horizontal) { updateContentWrapperHeight(); }
      } :
      function () {
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(slideItems[indexCached], eve);
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(slideItems[index], eve);

        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn);

        // run fallback function manually
        // when transition or animation not supported / duration is 0
        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !Object(_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__["isVisible"])(container)) { onTransitionEnd(); }
      };
  })();

  function render (e, sliderMoved) {
    if (updateIndexBeforeTransform) { updateIndex(); }

    // render when slider was moved (touch or drag) even though index may not change
    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());
      if (autoHeight) { doAutoHeight(); }

      // pause autoplay when click or keydown from user
      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }

      running = true;
      transformCore();
    }
  }

  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */
  function strTrans (str) {
    return str.toLowerCase().replace(/-/g, '');
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd (event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i];
          // set item positions
          item.style.left = '';

          if (ANIMATIONDELAY && TRANSITIONDELAY) {
            item.style[ANIMATIONDELAY] = '';
            item.style[TRANSITIONDELAY] = '';
          }
          Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, animateOut);
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, animateNormal);
        }
      }

      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event'
       *    have to check event first, otherwise event.target will cause an error
       * => or 'gallery' mode:
       *   + event target is slide item
       * => or 'carousel' mode:
       *   + event target is container,
       *   + event.property is the same with transform attribute
       */
      if (!event ||
          !carousel && event.target.parentNode === container ||
          event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

        if (!updateIndexBeforeTransform) {
          var indexTem = index;
          updateIndex();
          if (index !== indexTem) {
            events.emit('indexChanged', info());

            doContainerTransformSilent();
          }
        }

        if (nested === 'inner') { events.emit('innerLoaded', info()); }
        running = false;
        indexCached = index;
      }
    }

  }

  // # ACTIONS
  function goTo (targetIndex, e) {
    if (freeze) { return; }

    // prev slideBy
    if (targetIndex === 'prev') {
      onControlsClick(e, -1);

    // next slideBy
    } else if (targetIndex === 'next') {
      onControlsClick(e, 1);

    // go to exact slide
    } else {
      if (running) {
        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
      }

      var absIndex = getAbsIndex(),
          indexGap = 0;

      if (targetIndex === 'first') {
        indexGap = - absIndex;
      } else if (targetIndex === 'last') {
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
      } else {
        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }

        if (!isNaN(targetIndex)) {
          // from directly called goTo function
          if (!e) { targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex)); }

          indexGap = targetIndex - absIndex;
        }
      }

      // gallery: make sure new page won't overlap with current page
      if (!carousel && indexGap && Math.abs(indexGap) < items) {
        var factor = indexGap > 0 ? 1 : -1;
        indexGap += (index + indexGap - slideCount) >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
      }

      index += indexGap;

      // make sure index is in range
      if (carousel && loop) {
        if (index < indexMin) { index += slideCount; }
        if (index > indexMax) { index -= slideCount; }
      }

      // if index is changed, start rendering
      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
        render(e);
      }

    }
  }

  // on controls click
  function onControlsClick (e, dir) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }
    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = getTarget(e);

      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }

      var targetIn = [prevButton, nextButton].indexOf(target);
      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }

    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo('last', e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo('first', e);
        return;
      }
    }

    if (dir) {
      index += slideBy * dir;
      if (autoWidth) { index = Math.floor(index); }
      // pass e when click control buttons or keydown
      render((passEventObject || (e && e.type === 'keydown')) ? e : null);
    }
  }

  // on nav click
  function onNavClick (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    e = getEvent(e);
    var target = getTarget(e), navIndex;

    // find the clicked nav item
    while (target !== navContainer && !Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__["hasAttr"])(target, 'data-nav')) { target = target.parentNode; }
    if (Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__["hasAttr"])(target, 'data-nav')) {
      var navIndex = navClicked = Number(Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__["getAttr"])(target, 'data-nav')),
          targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
          targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e);

      if (navCurrentIndex === navIndex) {
        if (animating) { stopAutoplay(); }
        navClicked = -1; // reset navClicked
      }
    }
  }

  // autoplay functions
  function setAutoplayTimer () {
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);

    animating = true;
  }

  function stopAutoplayTimer () {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton (action, txt) {
    Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(autoplayButton, {'data-action': action});
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay () {
    setAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }
  }

  function stopAutoplay () {
    stopAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }
  }

  // programaitcally play/pause the slider
  function play () {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }
  function pause () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }

  function toggleAutoplay () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function onVisibilityChange () {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause () {
    if (animating) {
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart () {
    if (autoplayHoverPaused) {
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  }

  // keydown events on document
  function onDocumentKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
  }

  // on key control
  function onControlsKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) { onControlsClick(e, -1); }
      } else if (!nextButton.disabled) {
        onControlsClick(e, 1);
      }
    }
  }

  // set focus
  function setFocus (el) {
    el.focus();
  }

  // on key nav
  function onNavKeydown (e) {
    e = getEvent(e);
    var curElement = doc.activeElement;
    if (!Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__["hasAttr"])(curElement, 'data-nav')) { return; }

    // var code = e.keyCode,
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
        navIndex = Number(Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__["getAttr"])(curElement, 'data-nav'));

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (navIndex > 0) { setFocus(navItems[navIndex - 1]); }
      } else if (keyIndex === 1) {
        if (navIndex < pages - 1) { setFocus(navItems[navIndex + 1]); }
      } else {
        navClicked = navIndex;
        goTo(navIndex, e);
      }
    }
  }

  function getEvent (e) {
    e = e || win.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }
  function getTarget (e) {
    return e.target || win.event.srcElement;
  }

  function isTouchEvent (e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  function getMoveDirectionExpected () {
    return Object(_helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_14__["getTouchDirection"])(Object(_helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_13__["toDegree"])(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
  }

  function onPanStart (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    if (autoplay && animating) { stopAutoplayTimer(); }

    panStart = true;
    if (rafIndex) {
      Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__["caf"])(rafIndex);
      rafIndex = null;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;
    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove (e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;

      if (carousel) {
        if (!rafIndex) { rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__["raf"])(function(){ panUpdate(e); }); }
      } else {
        if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
        if (moveDirectionExpected) { preventScroll = true; }
      }

      if ((typeof e.cancelable !== 'boolean' || e.cancelable) && preventScroll) {
        e.preventDefault();
      }
    }
  }

  function panUpdate (e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }
    Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__["caf"])(rafIndex);
    if (panStart) { rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__["raf"])(function(){ panUpdate(e); }); }

    if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e)) { preventScroll = true; }

      try {
        if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }
      } catch(err) {}

      var x = translateInit,
          dist = getDist(lastPosition, initPosition);
      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew): dist * 100 / (viewport + gutter);
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd (e) {
    if (panStart) {
      if (rafIndex) {
        Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__["caf"])(rafIndex);
        rafIndex = null;
      }
      if (carousel) { resetDuration(container, ''); }
      panStart = false;

      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);

      if (Math.abs(dist)) {
        // drag vs click
        if (!isTouchEvent(e)) {
          // prevent "click"
          var target = getTarget(e);
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(target, {'click': function preventClick (e) {
            preventDefaultBehavior(e);
            Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(target, {'click': preventClick});
          }});
        }

        if (carousel) {
          rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__["raf"])(function() {
            if (horizontal && !autoWidth) {
              var indexMoved = - dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = - (translateInit + dist);
              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
                index = indexMax;
              } else {
                var i = 0;
                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;
                  if (moved > slidePositions[i] && dist < 0) { index += 1; }
                  i++;
                }
              }
            }

            render(e, dist);
            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
          });
        } else {
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    }

    // reset
    if (options.preventScrollOnTouch === 'auto') { preventScroll = false; }
    if (swipeAngle) { moveDirectionExpected = '?'; }
    if (autoplay && !animating) { setAutoplayTimer(); }
  }

  // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight () {
    var wp = middleWrapper ? middleWrapper : innerWrapper;
    wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  function getPages () {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
    return Math.min(Math.ceil(rough), slideCount);
  }

  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
  function updateNavVisibility () {
    if (!nav || navAsThumbnails) { return; }

    if (pages !== pagesCached) {
      var min = pagesCached,
          max = pages,
          fn = _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"];

      if (pagesCached > pages) {
        min = pages;
        max = pagesCached;
        fn = _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"];
      }

      while (min < max) {
        fn(navItems[min]);
        min++;
      }

      // cache pages
      pagesCached = pages;
    }
  }

  function info (e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      displayIndex: getCurrentSlide(),
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      pages: pages,
      pagesCached: pagesCached,
      sheet: sheet,
      isOn: isOn,
      event: e || {},
    };
  }

  return {
    version: '2.9.3',
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy: destroy,
    rebuild: function() {
      return tns(Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__["extend"])(options, optionsElements));
    }
  };
};


/***/ }),

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"===( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){"use strict";var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),r={elements_selector:"img",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_poster:"poster",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},a=function(t,e){var n,o=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)};var s=function(t,e){return t.getAttribute("data-"+e)},i=function(t,e,n){var o="data-"+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)},c=function(t){return"true"===s(t,"was-processed")},l=function(t,e){return i(t,"ll-timeout",e)},u=function(t){return s(t,"ll-timeout")},d=function(t,e,n,o){t&&(void 0===o?void 0===n?t(e):t(e,n):t(e,n,o))},f=function(t,e){t.loadingCount+=e,0===t._elements.length&&0===t.loadingCount&&d(t._settings.callback_finish,t)},_=function(t){for(var e,n=[],o=0;e=t.children[o];o+=1)"SOURCE"===e.tagName&&n.push(e);return n},v=function(t,e,n){n&&t.setAttribute(e,n)},g=function(t,e){v(t,"sizes",s(t,e.data_sizes)),v(t,"srcset",s(t,e.data_srcset)),v(t,"src",s(t,e.data_src))},m={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&_(n).forEach(function(t){g(t,e)});g(t,e)},IFRAME:function(t,e){v(t,"src",s(t,e.data_src))},VIDEO:function(t,e){_(t).forEach(function(t){v(t,"src",s(t,e.data_src))}),v(t,"poster",s(t,e.data_poster)),v(t,"src",s(t,e.data_src)),t.load()}},h=function(t,e){var n,o,r=e._settings,a=t.tagName,i=m[a];if(i)return i(t,r),f(e,1),void(e._elements=(n=e._elements,o=t,n.filter(function(t){return t!==o})));!function(t,e){var n=s(t,e.data_src),o=s(t,e.data_bg);n&&(t.style.backgroundImage='url("'.concat(n,'")')),o&&(t.style.backgroundImage=o)}(t,r)},p=function(t,e){o?t.classList.add(e):t.className+=(t.className?" ":"")+e},b=function(t,e){o?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},y=function(t,e,n){t.addEventListener(e,n)},E=function(t,e,n){t.removeEventListener(e,n)},w=function(t,e,n){E(t,"load",e),E(t,"loadeddata",e),E(t,"error",n)},I=function(t,e,n){var o=n._settings,r=e?o.class_loaded:o.class_error,a=e?o.callback_loaded:o.callback_error,s=t.target;b(s,o.class_loading),p(s,r),d(a,s,n),f(n,-1)},k=function(t,e){var n=function n(r){I(r,!0,e),w(t,n,o)},o=function o(r){I(r,!1,e),w(t,n,o)};!function(t,e,n){y(t,"load",e),y(t,"loadeddata",e),y(t,"error",n)}(t,n,o)},A=["IMG","IFRAME","VIDEO"],L=function(t,e){var n=e._observer;O(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},x=function(t){var e=u(t);e&&(clearTimeout(e),l(t,null))},z=function(t,e){var n=e._settings.load_delay,o=u(t);o||(o=setTimeout(function(){L(t,e),x(t)},n),l(t,o))},O=function(t,e,n){var o=e._settings;!n&&c(t)||(A.indexOf(t.tagName)>-1&&(k(t,e),p(t,o.class_loading)),h(t,e),function(t){i(t,"was-processed","true")}(t),d(o.callback_reveal,t,e),d(o.callback_set,t,e))},N=function(t){return!!n&&(t._observer=new IntersectionObserver(function(e){e.forEach(function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e,n){var o=n._settings;d(o.callback_enter,t,e,n),o.load_delay?z(t,n):L(t,n)}(e.target,e,t):function(t,e,n){var o=n._settings;d(o.callback_exit,t,e,n),o.load_delay&&x(t)}(e.target,e,t)})},{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}),!0);var e},C=["IMG","IFRAME"],M=function(t,e){return function(t){return t.filter(function(t){return!c(t)})}((n=t||function(t){return t.container.querySelectorAll(t.elements_selector)}(e),Array.prototype.slice.call(n)));var n},S=function(t){var e=t._settings;e.container.querySelectorAll("."+e.class_error).forEach(function(t){b(t,e.class_error),function(t){i(t,"was-processed",null)}(t)}),t.update()},R=function(e,n){var o;this._settings=function(t){return _extends({},r,t)}(e),this.loadingCount=0,N(this),this.update(n),o=this,t&&window.addEventListener("online",function(t){S(o)})};return R.prototype={update:function(t){var n,o=this,r=this._settings;(this._elements=M(t,r),!e&&this._observer)?(function(t){return t.use_native&&"loading"in HTMLImageElement.prototype}(r)&&((n=this)._elements.forEach(function(t){-1!==C.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),O(t,n))}),this._elements=M(t,r)),this._elements.forEach(function(t){o._observer.observe(t)})):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){O(t,this,e)},loadAll:function(){var t=this;this._elements.forEach(function(e){L(e,t)})}},t&&function(t,e){if(e)if(e.length)for(var n,o=0;n=e[o];o+=1)a(t,n);else a(t,e)}(R,window.lazyLoadOptions),R});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9tYXJrdXAvYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2Jsb2Nrcy9oZXJvL2hlcm8uanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2Jsb2Nrcy9uYXYvbmF2LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2hpZ2hsaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qYXZhc2NyaXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9waHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0aWNreS1qcy9kaXN0L3N0aWNreS5jb21waWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdGlja3ktanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZzRldmVyeWJvZHkvZGlzdC9zdmc0ZXZlcnlib2R5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90YWJieWpzL2Rpc3QvanMvdGFiYnkubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9hZGRDU1NSdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9hZGRDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvYWRkRXZlbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9hcnJheUZyb21Ob2RlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvY2FmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9jYWxjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9jaGVja1N0b3JhZ2VWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvY2xhc3NMaXN0U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvY3JlYXRlU3R5bGVTaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZG9jRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2ZvckVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldEF0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldEJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldENzc1J1bGVzTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9nZXRFbmRQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZ2V0U2xpZGVJZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZ2V0VG91Y2hEaXJlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2hhczNEVHJhbnNmb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvaGFzQXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvaGFzQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2hpZGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9pc05vZGVMaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9pc1Zpc2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2pzVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9tZWRpYXF1ZXJ5U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcGFzc2l2ZU9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcGVyY2VudGFnZUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcmFmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9yZW1vdmVBdHRycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcmVtb3ZlQ1NTUnVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcmVtb3ZlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3JlbW92ZUV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcmVzZXRGYWtlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvc2V0QXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3NldEZha2VCb2R5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9zZXRMb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3Nob3dFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy90b0RlZ3JlZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvd2hpY2hQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL3Rpbnktc2xpZGVyLmpzIiwid2VicGFjazovLy9sYXp5bG9hZC5qcyJdLCJuYW1lcyI6WyJobGpzIiwicmVnaXN0ZXJMYW5ndWFnZSIsImphdmFzY3JpcHQiLCJwaHAiLCJjc3MiLCIkIiwic3ZnNGV2ZXJ5Ym9keSIsInN0eWxlcyIsImpvaW4iLCJjb25zb2xlIiwibG9nIiwibGF6eUxvYWRJbnN0YW5jZSIsIkxhenlMb2FkIiwiZWxlbWVudHNfc2VsZWN0b3IiLCJ1c2VfbmF0aXZlIiwidXBkYXRlIiwibmF2IiwiaGVyb1NsaWRlciIsIiRmYXFJdGVtIiwib24iLCJ0b2dnbGVDbGFzcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJibG9jayIsImhpZ2hsaWdodEJsb2NrIiwiJHRvY1RvcCIsIiR0b2MiLCIkd29ya3NUYWJzIiwicXVlcnlTZWxlY3RvciIsIlRhYmJ5IiwiJG1haW5Sb3ciLCIkc2lkZSIsInNldEF0dHJpYnV0ZSIsIm9mZnNldEhlaWdodCIsInNpZGVOYXZTdGlja3kiLCJTdGlja3kiLCJub2lzZSIsImpRdWVyeSIsImNhbnZhcyIsImN0eCIsIndXaWR0aCIsIndIZWlnaHQiLCJub2lzZURhdGEiLCJmcmFtZSIsImxvb3BUaW1lb3V0IiwiY3JlYXRlTm9pc2UiLCJpZGF0YSIsImNyZWF0ZUltYWdlRGF0YSIsImJ1ZmZlcjMyIiwiVWludDMyQXJyYXkiLCJkYXRhIiwiYnVmZmVyIiwibGVuIiwibGVuZ3RoIiwiaSIsIk1hdGgiLCJyYW5kb20iLCJwdXNoIiwicGFpbnROb2lzZSIsInB1dEltYWdlRGF0YSIsImxvb3AiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0dXAiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInJlc2l6ZVRocm90dGxlIiwicmVzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xlYXJUaW1lb3V0IiwiaW5pdCIsImdldENvbnRleHQiLCIkaGVyb1NsaWRlciIsInRucyIsImNvbnRhaW5lciIsInNsaWRlQnkiLCJtb2RlIiwiY29udHJvbHMiLCJhdXRvcGxheSIsInNwZWVkIiwiYXV0b3BsYXlCdXR0b25PdXRwdXQiLCJhbmltYXRlSW4iLCJ0b3VjaCIsIm1vdXNlRHJhZyIsIiRuYXZCdXR0b24iLCIkcGFnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudCIsImNoaWxkcmVuIiwidGV4dCIsIl9zY3JvbGwiLCJhdHRyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImdsb2JhbCIsImZhY3RvcnkiLCJleHBvcnRzIiwiX3R5cGVvZiIsIm1vZHVsZSIsImFtZCIsImRlZmluZSIsInRoaXMiLCJydW5uaW5nT25Ccm93c2VyIiwiaXNCb3QiLCJ0ZXN0IiwiZGVmYXVsdFNldHRpbmdzIiwidGhyZXNob2xkIiwidGhyZXNob2xkcyIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhX3NyY3NldCIsImRhdGFfc2l6ZXMiLCJkYXRhX2JnIiwiZGF0YV9wb3N0ZXIiLCJjbGFzc19sb2FkaW5nIiwiY2xhc3NfbG9hZGVkIiwiY2xhc3NfZXJyb3IiLCJsb2FkX2RlbGF5IiwiYXV0b191bm9ic2VydmUiLCJjYWxsYmFja19lbnRlciIsImNhbGxiYWNrX2V4aXQiLCJjYWxsYmFja19yZXZlYWwiLCJjYWxsYmFja19sb2FkZWQiLCJjYWxsYmFja19lcnJvciIsImNhbGxiYWNrX2ZpbmlzaCIsImdldEluc3RhbmNlU2V0dGluZ3MiLCJjcmVhdGVJbnN0YW5jZSIsImNsYXNzT2JqIiwib3B0aW9ucyIsImV2ZW50IiwiZGV0YWlsIiwiaW5zdGFuY2UiLCJDdXN0b21FdmVudCIsImVyciIsImNyZWF0ZUV2ZW50IiwiZXZlbnRTdHJpbmciLCJkaXNwYXRjaEV2ZW50IiwiZGF0YVByZWZpeCIsImVsZW1lbnQiLCJhdHRyaWJ1dGUiLCJwcm9jZXNzZWREYXRhTmFtZSIsInNldERhdGEiLCJ2YWx1ZSIsImdldERhdGEiLCJhdHRyTmFtZSIsInJlbW92ZUF0dHJpYnV0ZSIsImdldFdhc1Byb2Nlc3NlZERhdGEiLCJyZXNldFdhc1Byb2Nlc3NlZERhdGEiLCJzZXRUaW1lb3V0RGF0YSIsImdldFRpbWVvdXREYXRhIiwic2FmZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJhcmcxIiwiYXJnMiIsImFyZzMiLCJwdXJnZVByb2Nlc3NlZEVsZW1lbnRzIiwidW5kZWZpbmVkIiwiZWxlbWVudHMiLCJmaWx0ZXIiLCJ1cGRhdGVMb2FkaW5nQ291bnQiLCJwbHVzTWludXMiLCJfZWxlbWVudHMiLCJsb2FkaW5nQ291bnQiLCJfc2V0dGluZ3MiLCJjaGlsZFRhZyIsInNvdXJjZVRhZ3MiLCJwYXJlbnRUYWciLCJ0YWdOYW1lIiwic2V0QXR0cmlidXRlSWZWYWx1ZSIsInNldEltYWdlQXR0cmlidXRlcyIsInNldHRpbmdzIiwiZGF0YV9zcmMiLCJzZXRTb3VyY2VzRnVuY3Rpb25zIiwiSU1HIiwicGFyZW50Tm9kZSIsImdldFNvdXJjZVRhZ3MiLCJzb3VyY2VUYWciLCJJRlJBTUUiLCJzZXRTb3VyY2VzVmlkZW8iLCJzZXRTb3VyY2VzIiwiZWxlbWVudFRvUHVyZ2UiLCJzZXRTb3VyY2VzSW1nIiwiVklERU8iLCJzZXRTb3VyY2VzRnVuY3Rpb24iLCJzcmNEYXRhVmFsdWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImNvbmNhdCIsImJnRGF0YVZhbHVlIiwic2V0U291cmNlc0JnSW1hZ2UiLCJjbGFzc05hbWUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic3VwcG9ydHNDbGFzc0xpc3QiLCJyZXBsYWNlIiwiUmVnRXhwIiwiZXZlbnROYW1lIiwiaGFuZGxlciIsImdlbmVyaWNMb2FkRXZlbnROYW1lIiwibWVkaWFMb2FkRXZlbnROYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJsb2FkSGFuZGxlciIsImVycm9ySGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVycyIsInJlbW92ZSIsImV2ZW50SGFuZGxlciIsInN1Y2Nlc3MiLCJ0YXJnZXQiLCJyZXZlYWxBbmRVbm9ic2VydmUiLCJyZXZlYWxFbGVtZW50Iiwib2JzZXJ2ZXIiLCJ1bm9ic2VydmUiLCJvbkV4aXQiLCJ0aW1lb3V0SWQiLCJkZWxheUxvYWQiLCJsb2FkRGVsYXkiLCJjYW5jZWxEZWxheUxvYWQiLCJmb3JjZSIsIm1hbmFnZWRUYWdzIiwiaW5kZXhPZiIsImFkZE9uZVNob3RFdmVudExpc3RlbmVycyIsImVudHJpZXMiLCJzZXRXYXNQcm9jZXNzZWREYXRhIiwiZW50cnkiLCJjYWxsYmFja19zZXQiLCJfb2JzZXJ2ZXIiLCJyb290IiwiaXNJbnRlcnNlY3RpbmciLCJyb290TWFyZ2luIiwiZ2V0T2JzZXJ2ZXJTZXR0aW5ncyIsIm5hdGl2ZUxhenlUYWdzIiwibm9kZVNldCIsInF1ZXJ5RWxlbWVudHMiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsInJldHJ5TGF6eUxvYWQiLCJsb2FkQWxsTmF0aXZlIiwiY3VzdG9tU2V0dGluZ3MiLCJnZXRFbGVtZW50cyIsInNldE9ic2VydmVyIiwiZXJyb3JFbGVtZW50cyIsIkhUTUxJbWFnZUVsZW1lbnQiLCJvYnNlcnZlIiwibG9hZEFsbCIsImRlc3Ryb3kiLCJfdGhpczIiLCJzZXRPbmxpbmVDaGVjayIsImxvYWQiLCJfdGhpczMiLCJhdXRvSW5pdGlhbGl6ZSIsIm9wdGlvbnNJdGVtIiwibGF6eUxvYWRPcHRpb25zIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEy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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCLDRCQUE0QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQSxTQUFTLHVCQUF1QjtBQUNoQztBQUNBLGdEQUFnRCx1Q0FBdUM7QUFDdkY7QUFDQSx1QkFBdUIsYUFBYSxFQUFFLE9BQU8sc0JBQXNCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0Qyx1QkFBdUI7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhOztBQUU1QixpQ0FBaUMscURBQXFEO0FBQ3RGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUJBQW1COztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhGQUE4RjtBQUM5Rix5Q0FBeUM7QUFDekMsZ0ZBQWdGLHNEQUFzRDs7QUFFdEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGlCQUFpQixFQUFFOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7OztBQUdBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDOW9DRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxP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Z0osV0FxQkFDLFFBQWMsV0FBRyxJQUFBQyxFQUFBbEosS0FDUjZELEtBQUwrRCxZQUNLaEUsZUFBTGpKLFFBQUEsU0FBQXlILEdBQ1k4RyxFQUFadEIsVUFBQWQsVUFBQTFFLEtBRUErRyxLQUFjdkIsVUFBZCxNQTJCSTVILEtBQUsyRCxVQUFZLEtBeEJ6QjNKLEtBQVNxTyxVQUFZLE1BNEJqQmUsS0FBTSxTQUFTaEgsRUFBU2dGLEdBMUJwQlIsRUFBZXhFLEVBQUt5QixLQUFwQnVELElBRUE0QixRQUFJOUksV0FBZTBILFdBQ2Y1SCxLQUFLZ0osVUFBTHJPLFFBQUEsU0FBQXlILEdBQ0F1RSxFQUFBdkUsRUFBQWlILE9BS0hwSixHQS9ZVCxTQUFBd0IsRUFBQUMsR0FHQyxHQUFLQSxFQUROLEdBQUFBLEVBQVM0SCxPQUlSLElBQUksSUFBUzVNLEVBQVJnRixFQUFPLEVBQVM2SCxFQUFBN0gsRUFBQS9FLE1BQUEsRUFDcEI2RSxFQUFBQyxFQUFBOEgsUUFIQS9ILEVBQUFDLEVBQUFDLEdBeWFFNEgsQ0FBZXRQLEVBQVVrRCxPQUFPc00saUJBN0I1QnhQIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vYXNzZXRzL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21hcmt1cC9hc3NldHMvanMvbWFpbi5qc1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xuaW1wb3J0IFRhYmJ5IGZyb20gJ3RhYmJ5anMnO1xuaW1wb3J0IFN0aWNreSBmcm9tICdzdGlja3ktanMnO1xuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9oaWdobGlnaHQnO1xuaW1wb3J0IGphdmFzY3JpcHQgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvamF2YXNjcmlwdCc7XG5pbXBvcnQgcGhwIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BocCc7XG5pbXBvcnQgY3NzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Nzcyc7XG5cbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgnamF2YXNjcmlwdCcsIGphdmFzY3JpcHQpO1xuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCdqYXZhc2NyaXB0JywgcGhwKTtcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgnamF2YXNjcmlwdCcsIGNzcyk7XG5cbmltcG9ydCBuYXYgZnJvbSAnLi4vLi4vYmxvY2tzL25hdi9uYXYnO1xuaW1wb3J0IHtub2lzZX0gZnJvbSAnLi4vLi4vYmxvY2tzL2hlcm8vaGVybyc7XG5pbXBvcnQge2hlcm9TbGlkZXJ9IGZyb20gJy4uLy4uL2Jsb2Nrcy9oZXJvL2hlcm8nO1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3ZhbmlsbGEtbGF6eWxvYWQnO1xuXG5cbihmdW5jdGlvbiAoJCkge1xuXG5cbiAgICBzdmc0ZXZlcnlib2R5KCk7XG5cbiAgICBsZXQgc3R5bGVzID0gW1xuICAgICAgICAncGFkZGluZzogMnB4IDlweCcsXG4gICAgICAgICdiYWNrZ3JvdW5kOiAjMjk0OGZmJyxcbiAgICAgICAgJ2NvbG9yOiAjZmZmJyxcbiAgICAgICAgJ2xpbmUtaGVpZ2h0OiAxLjU2JyxcbiAgICAgICAgJ2ZvbnQtc2l6ZTogMTZweCcsXG4gICAgXS5qb2luKCc7Jyk7XG5cbiAgICBjb25zb2xlLmxvZygnJWMgTWFkZSB3aXRoIGxvdmUg4p2k77iPIGJ5IElnb3IgR29ybG92IGh0dHBzOi8vaWdybC5ydScsIHN0eWxlcyk7XG5cblxuICAgIC8qXG4gICAgTGF6eWxvYWQgaW1hZ2VzXG4gICAgKi9cblxuXG4gICAgbGV0IGxhenlMb2FkSW5zdGFuY2UgPSBuZXcgTGF6eUxvYWQoe1xuICAgICAgICBlbGVtZW50c19zZWxlY3RvcjogJy5sYXp5JyxcbiAgICAgICAgLy8gbG9hZF9kZWxheTogNTAwLFxuICAgICAgICB1c2VfbmF0aXZlOiB0cnVlXG4gICAgfSk7XG5cblxuICAgIGlmIChsYXp5TG9hZEluc3RhbmNlKSB7XG4gICAgICAgIGxhenlMb2FkSW5zdGFuY2UudXBkYXRlKCk7XG4gICAgfVxuXG5cblxuICAgICQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vIE5hdlxuXG4gICAgICAgIG5hdigpO1xuXG4gICAgICAgIC8vIFNsaWRlclxuXG4gICAgICAgIGhlcm9TbGlkZXIoKTtcblxuICAgICAgICAvLyBGYXFcblxuICAgICAgICBjb25zdCAkZmFxSXRlbSA9ICQoJy5mYXFfX2l0ZW0nKTtcblxuICAgICAgICAkZmFxSXRlbS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYXFfX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEhpanNcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUgY29kZScpLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICAgICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKGJsb2NrKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyBUYWJsZSBvZiBjb250ZW50XG5cbiAgICAgICAgY29uc3QgJHRvY1RvcCA9ICQoJy50YWJsZS1vZi1jb250ZW50c19fdG9wJyk7XG4gICAgICAgIGNvbnN0ICR0b2MgPSAkKCcudGFibGUtb2YtY29udGVudHMnKTtcblxuICAgICAgICAkdG9jVG9wLm9uKCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAkdG9jLnRvZ2dsZUNsYXNzKCd0YWJsZS1vZi1jb250ZW50c19jbG9zZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyogVGFicyAqL1xuXG4gICAgICAgIGNvbnN0ICR3b3Jrc1RhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya3NfX3RhYnMgLnRhYnNfX25hdicpO1xuXG4gICAgICAgIGlmICggJHdvcmtzVGFicyApIHtcbiAgICAgICAgICAgIG5ldyBUYWJieSgnW2RhdGEtdGFic10nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0aWNreSBzaWRlXG4gICAgICAgIGNvbnN0ICRtYWluUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4gLnBhZ2VfX3JvdycpO1xuICAgICAgICBjb25zdCAkc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlJyk7XG5cbiAgICAgICAgaWYgKCRzaWRlKSB7XG4gICAgICAgICAgICAkc2lkZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi1oZWlnaHQ6JyArICRtYWluUm93Lm9mZnNldEhlaWdodCArICdweDsnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaWRlTmF2U3RpY2t5ID0gbmV3IFN0aWNreSgnLnNpZGVfX2Jsb2NrLXcnKTtcblxuXG4gICAgICAgIC8vIE5vaXNlXG5cbiAgICAgICAgbm9pc2UoKTtcblxuXG5cbiAgICB9KTtcblxuXG5cblxufSkoalF1ZXJ5KTtcbiIsImltcG9ydCB7dG5zfSBmcm9tICd0aW55LXNsaWRlci9zcmMvdGlueS1zbGlkZXInO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgbm9pc2UgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgIGxldCBjYW52YXMsIGN0eDtcclxuXHJcbiAgICBsZXQgd1dpZHRoLCB3SGVpZ2h0O1xyXG5cclxuICAgIGxldCBub2lzZURhdGEgPSBbXTtcclxuICAgIGxldCBmcmFtZSA9IDA7XHJcblxyXG4gICAgbGV0IGxvb3BUaW1lb3V0O1xyXG5cclxuXHJcbiAgICAvLyBDcmVhdGUgTm9pc2VcclxuICAgIGNvbnN0IGNyZWF0ZU5vaXNlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkYXRhID0gY3R4LmNyZWF0ZUltYWdlRGF0YSh3V2lkdGgsIHdIZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcjMyID0gbmV3IFVpbnQzMkFycmF5KGlkYXRhLmRhdGEuYnVmZmVyKTtcclxuICAgICAgICBjb25zdCBsZW4gPSBidWZmZXIzMi5sZW5ndGg7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjEpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlcjMyW2ldID0gMHhmZmZmZmZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbm9pc2VEYXRhLnB1c2goaWRhdGEpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gUGxheSBOb2lzZVxyXG4gICAgY29uc3QgcGFpbnROb2lzZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZnJhbWUgPT09IDkpIHtcclxuICAgICAgICAgICAgZnJhbWUgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZyYW1lKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKG5vaXNlRGF0YVtmcmFtZV0sIDAsIDApO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gTG9vcFxyXG4gICAgY29uc3QgbG9vcCA9ICgpID0+IHtcclxuICAgICAgICBwYWludE5vaXNlKGZyYW1lKTtcclxuXHJcbiAgICAgICAgbG9vcFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcbiAgICAgICAgfSwgKDEwMDAgLyAyNSkpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gU2V0dXBcclxuICAgIGNvbnN0IHNldHVwID0gKCkgPT4ge1xyXG4gICAgICAgIHdXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHdIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd0hlaWdodDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZU5vaXNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb29wKCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBSZXNldFxyXG4gICAgbGV0IHJlc2l6ZVRocm90dGxlO1xyXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZXNpemVUaHJvdHRsZSk7XHJcblxyXG4gICAgICAgICAgICByZXNpemVUaHJvdHRsZSA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQobG9vcFRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgc2V0dXAoKTtcclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuXHJcbiAgICBpZiAoIHR5cGVvZihjYW52YXMpICE9ICd1bmRlZmluZWQnICYmIGNhbnZhcyAhPSBudWxsICkge1xyXG5cclxuICAgIC8vIEluaXRcclxuICAgIGNvbnN0IGluaXQgPSAoKCkgPT4ge1xyXG4gICAgICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICBzZXR1cCgpO1xyXG4gICAgfSkoKTtcclxuXHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gbm9pc2UoKTtcclxuXHJcblxyXG5cclxuLy8gU2xpZGVyXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGVyb1NsaWRlciAoKSB7XHJcblxyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICAgbGV0ICRoZXJvU2xpZGVyID0gJCgnLmhlcm9fX3NsaWRlcicpO1xyXG5cclxuICAgIGlmICggJGhlcm9TbGlkZXIubGVuZ3RoID4gMCApIHtcclxuXHJcbiAgICAgICAgJGhlcm9TbGlkZXIgPSB0bnMoe1xyXG4gICAgICAgICAgICBjb250YWluZXI6ICcuaGVyb19fc2xpZGVyJyxcclxuICAgICAgICAgICAgc2xpZGVCeTogMSxcclxuICAgICAgICAgICAgbW9kZTogJ2dhbGxlcnknLFxyXG4gICAgICAgICAgICAvLyBzbGlkZUJ5OiAncGFnZScsXHJcbiAgICAgICAgICAgIGNvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIHNwZWVkOiA2MDAsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5QnV0dG9uT3V0cHV0OiBmYWxzZSxcclxuICAgICAgICAgICAgYW5pbWF0ZUluOiAnamFja0luVGhlQm94JyxcclxuICAgICAgICAgICAgLy8gYW5pbWF0ZU5vcm1hbDogJycsXHJcbiAgICAgICAgICAgIC8vIGFuaW1hdGVPdXQ6ICdqYWNrSW5UaGVCb3gnLFxyXG4gICAgICAgICAgICB0b3VjaDogdHJ1ZSxcclxuICAgICAgICAgICAgbW91c2VEcmFnOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59KShqUXVlcnkpO1xyXG5cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXYoKSB7XG5cbihmdW5jdGlvbiAoJCkge1xuXG4gIGNvbnN0ICRuYXZCdXR0b24gPSAkKCcubmF2X3ByaW1hcnkgLm5hdl9fYnV0dG9uJyk7XG4gIGNvbnN0ICRwYWdlID0gJCgnLnBhZ2UnKTtcblxuICAkbmF2QnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICRwYWdlLnRvZ2dsZUNsYXNzKCdwYWdlX25hdi1hY3RpdmUnKTtcbiAgICAgICQodGhpcykucGFyZW50KCcubmF2X3ByaW1hcnknKS50b2dnbGVDbGFzcygnbmF2X2FjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdl9fdGV4dCcpLnRleHQoICQodGhpcykuY2hpbGRyZW4oJy5uYXZfX3RleHQnKS50ZXh0KCkgPT09ICfQnNC10L3RjicgPyAn0JfQsNC60YDRi9GC0YwnIDogJ9Cc0LXQvdGOJyApO1xuICB9KTtcblxuICAkKCcudGFibGUtb2YtY29udGVudHNfX2xpbmssIC5hcnRpY2xlX19nb3RvcCcpLm9uKCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IF9zY3JvbGwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcbiAgICAgIGlmICggX3Njcm9sbCAhPT0gJyMnICYmICQoX3Njcm9sbCkubGVuZ3RoICkge1xuICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoX3Njcm9sbCkub2Zmc2V0KCkudG9wIC0gMTMwfSwgMTAwKTtcbiAgICAgIH1cbiAgfSk7XG5cbn0pKGpRdWVyeSk7XG5cbn1cblxuXG4iLCIvKlxuU3ludGF4IGhpZ2hsaWdodGluZyB3aXRoIGxhbmd1YWdlIGF1dG9kZXRlY3Rpb24uXG5odHRwczovL2hpZ2hsaWdodGpzLm9yZy9cbiovXG5cbihmdW5jdGlvbihmYWN0b3J5KSB7XG5cbiAgLy8gRmluZCB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgZXhwb3J0IHRvIGJvdGggdGhlIGJyb3dzZXIgYW5kIHdlYiB3b3JrZXJzLlxuICB2YXIgZ2xvYmFsT2JqZWN0ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93IHx8XG4gICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgJiYgc2VsZjtcblxuICAvLyBTZXR1cCBoaWdobGlnaHQuanMgZm9yIGRpZmZlcmVudCBlbnZpcm9ubWVudHMuIEZpcnN0IGlzIE5vZGUuanMgb3JcbiAgLy8gQ29tbW9uSlMuXG4gIC8vIGBub2RlVHlwZWAgaXMgY2hlY2tlZCB0byBlbnN1cmUgdGhhdCBgZXhwb3J0c2AgaXMgbm90IGEgSFRNTCBlbGVtZW50LlxuICBpZih0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgIWV4cG9ydHMubm9kZVR5cGUpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMpO1xuICB9IGVsc2UgaWYoZ2xvYmFsT2JqZWN0KSB7XG4gICAgLy8gRXhwb3J0IGhsanMgZ2xvYmFsbHkgZXZlbiB3aGVuIHVzaW5nIEFNRCBmb3IgY2FzZXMgd2hlbiB0aGlzIHNjcmlwdFxuICAgIC8vIGlzIGxvYWRlZCB3aXRoIG90aGVycyB0aGF0IG1heSBzdGlsbCBleHBlY3QgYSBnbG9iYWwgaGxqcy5cbiAgICBnbG9iYWxPYmplY3QuaGxqcyA9IGZhY3Rvcnkoe30pO1xuXG4gICAgLy8gRmluYWxseSByZWdpc3RlciB0aGUgZ2xvYmFsIGhsanMgd2l0aCBBTUQuXG4gICAgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsT2JqZWN0LmhsanM7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufShmdW5jdGlvbihobGpzKSB7XG4gIC8vIENvbnZlbmllbmNlIHZhcmlhYmxlcyBmb3IgYnVpbGQtaW4gb2JqZWN0c1xuICB2YXIgQXJyYXlQcm90byA9IFtdLFxuICAgICAgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzO1xuXG4gIC8vIEdsb2JhbCBpbnRlcm5hbCB2YXJpYWJsZXMgdXNlZCB3aXRoaW4gdGhlIGhpZ2hsaWdodC5qcyBsaWJyYXJ5LlxuICB2YXIgbGFuZ3VhZ2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIGFsaWFzZXMgICA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgLy8gc2FmZS9wcm9kdWN0aW9uIG1vZGUgLSBzd2FsbG93cyBtb3JlIGVycm9ycywgdHJpZXMgdG8ga2VlcCBydW5uaW5nXG4gIC8vIGV2ZW4gaWYgYSBzaW5nbGUgc3ludGF4IG9yIHBhcnNlIGhpdHMgYSBmYXRhbCBlcnJvclxuICB2YXIgU0FGRV9NT0RFID0gdHJ1ZTtcblxuICAvLyBSZWd1bGFyIGV4cHJlc3Npb25zIHVzZWQgdGhyb3VnaG91dCB0aGUgaGlnaGxpZ2h0LmpzIGxpYnJhcnkuXG4gIHZhciBub0hpZ2hsaWdodFJlICAgID0gL14obm8tP2hpZ2hsaWdodHxwbGFpbnx0ZXh0KSQvaSxcbiAgICAgIGxhbmd1YWdlUHJlZml4UmUgPSAvXFxibGFuZyg/OnVhZ2UpPy0oW1xcdy1dKylcXGIvaSxcbiAgICAgIGZpeE1hcmt1cFJlICAgICAgPSAvKCheKDxbXj5dKz58XFx0fCkrfCg/OlxcbikpKS9nbTtcblxuICAvLyBUaGUgb2JqZWN0IHdpbGwgYmUgYXNzaWduZWQgYnkgdGhlIGJ1aWxkIHRvb2wuIEl0IHVzZWQgdG8gc3luY2hyb25pemUgQVBJXG4gIC8vIG9mIGV4dGVybmFsIGxhbmd1YWdlIGZpbGVzIHdpdGggbWluaWZpZWQgdmVyc2lvbiBvZiB0aGUgaGlnaGxpZ2h0LmpzIGxpYnJhcnkuXG4gIHZhciBBUElfUkVQTEFDRVM7XG5cbiAgdmFyIHNwYW5FbmRUYWcgPSAnPC9zcGFuPic7XG4gIHZhciBMQU5HVUFHRV9OT1RfRk9VTkQgPSBcIkNvdWxkIG5vdCBmaW5kIHRoZSBsYW5ndWFnZSAne30nLCBkaWQgeW91IGZvcmdldCB0byBsb2FkL2luY2x1ZGUgYSBsYW5ndWFnZSBtb2R1bGU/XCI7XG5cbiAgLy8gR2xvYmFsIG9wdGlvbnMgdXNlZCB3aGVuIHdpdGhpbiBleHRlcm5hbCBBUElzLiBUaGlzIGlzIG1vZGlmaWVkIHdoZW5cbiAgLy8gY2FsbGluZyB0aGUgYGhsanMuY29uZmlndXJlYCBmdW5jdGlvbi5cbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgY2xhc3NQcmVmaXg6ICdobGpzLScsXG4gICAgdGFiUmVwbGFjZTogbnVsbCxcbiAgICB1c2VCUjogZmFsc2UsXG4gICAgbGFuZ3VhZ2VzOiB1bmRlZmluZWRcbiAgfTtcblxuICAvLyBrZXl3b3JkcyB0aGF0IHNob3VsZCBoYXZlIG5vIGRlZmF1bHQgcmVsZXZhbmNlIHZhbHVlXG4gIHZhciBDT01NT05fS0VZV09SRFMgPSAnb2YgYW5kIGZvciBpbiBub3Qgb3IgaWYgdGhlbicuc3BsaXQoJyAnKTtcblxuXG4gIC8qIFV0aWxpdHkgZnVuY3Rpb25zICovXG5cbiAgZnVuY3Rpb24gZXNjYXBlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZyhub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRlc3RSZShyZSwgbGV4ZW1lKSB7XG4gICAgdmFyIG1hdGNoID0gcmUgJiYgcmUuZXhlYyhsZXhlbWUpO1xuICAgIHJldHVybiBtYXRjaCAmJiBtYXRjaC5pbmRleCA9PT0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm90SGlnaGxpZ2h0ZWQobGFuZ3VhZ2UpIHtcbiAgICByZXR1cm4gbm9IaWdobGlnaHRSZS50ZXN0KGxhbmd1YWdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJsb2NrTGFuZ3VhZ2UoYmxvY2spIHtcbiAgICB2YXIgaSwgbWF0Y2gsIGxlbmd0aCwgX2NsYXNzO1xuICAgIHZhciBjbGFzc2VzID0gYmxvY2suY2xhc3NOYW1lICsgJyAnO1xuXG4gICAgY2xhc3NlcyArPSBibG9jay5wYXJlbnROb2RlID8gYmxvY2sucGFyZW50Tm9kZS5jbGFzc05hbWUgOiAnJztcblxuICAgIC8vIGxhbmd1YWdlLSogdGFrZXMgcHJlY2VkZW5jZSBvdmVyIG5vbi1wcmVmaXhlZCBjbGFzcyBuYW1lcy5cbiAgICBtYXRjaCA9IGxhbmd1YWdlUHJlZml4UmUuZXhlYyhjbGFzc2VzKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHZhciBsYW5ndWFnZSA9IGdldExhbmd1YWdlKG1hdGNoWzFdKTtcbiAgICAgIGlmICghbGFuZ3VhZ2UpIHtcbiAgICAgICAgY29uc29sZS53YXJuKExBTkdVQUdFX05PVF9GT1VORC5yZXBsYWNlKFwie31cIiwgbWF0Y2hbMV0pKTtcbiAgICAgICAgY29uc29sZS53YXJuKFwiRmFsbGluZyBiYWNrIHRvIG5vLWhpZ2hsaWdodCBtb2RlIGZvciB0aGlzIGJsb2NrLlwiLCBibG9jayk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGFuZ3VhZ2UgPyBtYXRjaFsxXSA6ICduby1oaWdobGlnaHQnO1xuICAgIH1cblxuICAgIGNsYXNzZXMgPSBjbGFzc2VzLnNwbGl0KC9cXHMrLyk7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBjbGFzc2VzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBfY2xhc3MgPSBjbGFzc2VzW2ldO1xuXG4gICAgICBpZiAoaXNOb3RIaWdobGlnaHRlZChfY2xhc3MpIHx8IGdldExhbmd1YWdlKF9jbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIF9jbGFzcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcGVyZm9ybXMgYSBzaGFsbG93IG1lcmdlIG9mIG11bHRpcGxlIG9iamVjdHMgaW50byBvbmVcbiAgICpcbiAgICogQGFyZ3VtZW50cyBsaXN0IG9mIG9iamVjdHMgd2l0aCBwcm9wZXJ0aWVzIHRvIG1lcmdlXG4gICAqIEByZXR1cm5zIGEgc2luZ2xlIG5ldyBvYmplY3RcbiAgICovXG4gIGZ1bmN0aW9uIGluaGVyaXQocGFyZW50KSB7ICAvLyBpbmhlcml0KHBhcmVudCwgb3ZlcnJpZGVfb2JqLCBvdmVycmlkZV9vYmosIC4uLilcbiAgICB2YXIga2V5O1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIgb2JqZWN0cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICBmb3IgKGtleSBpbiBwYXJlbnQpXG4gICAgICByZXN1bHRba2V5XSA9IHBhcmVudFtrZXldO1xuICAgIG9iamVjdHMuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICAgIGZvciAoa2V5IGluIG9iailcbiAgICAgICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyogU3RyZWFtIG1lcmdpbmcgKi9cblxuICBmdW5jdGlvbiBub2RlU3RyZWFtKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgKGZ1bmN0aW9uIF9ub2RlU3RyZWFtKG5vZGUsIG9mZnNldCkge1xuICAgICAgZm9yICh2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7IGNoaWxkOyBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nKSB7XG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMylcbiAgICAgICAgICBvZmZzZXQgKz0gY2hpbGQubm9kZVZhbHVlLmxlbmd0aDtcbiAgICAgICAgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBldmVudDogJ3N0YXJ0JyxcbiAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgICAgbm9kZTogY2hpbGRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBvZmZzZXQgPSBfbm9kZVN0cmVhbShjaGlsZCwgb2Zmc2V0KTtcbiAgICAgICAgICAvLyBQcmV2ZW50IHZvaWQgZWxlbWVudHMgZnJvbSBoYXZpbmcgYW4gZW5kIHRhZyB0aGF0IHdvdWxkIGFjdHVhbGx5XG4gICAgICAgICAgLy8gZG91YmxlIHRoZW0gaW4gdGhlIG91dHB1dC4gVGhlcmUgYXJlIG1vcmUgdm9pZCBlbGVtZW50cyBpbiBIVE1MXG4gICAgICAgICAgLy8gYnV0IHdlIGxpc3Qgb25seSB0aG9zZSByZWFsaXN0aWNhbGx5IGV4cGVjdGVkIGluIGNvZGUgZGlzcGxheS5cbiAgICAgICAgICBpZiAoIXRhZyhjaGlsZCkubWF0Y2goL2JyfGhyfGltZ3xpbnB1dC8pKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgIGV2ZW50OiAnc3RvcCcsXG4gICAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgICAgICBub2RlOiBjaGlsZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH0pKG5vZGUsIDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZVN0cmVhbXMob3JpZ2luYWwsIGhpZ2hsaWdodGVkLCB2YWx1ZSkge1xuICAgIHZhciBwcm9jZXNzZWQgPSAwO1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgbm9kZVN0YWNrID0gW107XG5cbiAgICBmdW5jdGlvbiBzZWxlY3RTdHJlYW0oKSB7XG4gICAgICBpZiAoIW9yaWdpbmFsLmxlbmd0aCB8fCAhaGlnaGxpZ2h0ZWQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbC5sZW5ndGggPyBvcmlnaW5hbCA6IGhpZ2hsaWdodGVkO1xuICAgICAgfVxuICAgICAgaWYgKG9yaWdpbmFsWzBdLm9mZnNldCAhPT0gaGlnaGxpZ2h0ZWRbMF0ub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAob3JpZ2luYWxbMF0ub2Zmc2V0IDwgaGlnaGxpZ2h0ZWRbMF0ub2Zmc2V0KSA/IG9yaWdpbmFsIDogaGlnaGxpZ2h0ZWQ7XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICBUbyBhdm9pZCBzdGFydGluZyB0aGUgc3RyZWFtIGp1c3QgYmVmb3JlIGl0IHNob3VsZCBzdG9wIHRoZSBvcmRlciBpc1xuICAgICAgZW5zdXJlZCB0aGF0IG9yaWdpbmFsIGFsd2F5cyBzdGFydHMgZmlyc3QgYW5kIGNsb3NlcyBsYXN0OlxuXG4gICAgICBpZiAoZXZlbnQxID09ICdzdGFydCcgJiYgZXZlbnQyID09ICdzdGFydCcpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbDtcbiAgICAgIGlmIChldmVudDEgPT0gJ3N0YXJ0JyAmJiBldmVudDIgPT0gJ3N0b3AnKVxuICAgICAgICByZXR1cm4gaGlnaGxpZ2h0ZWQ7XG4gICAgICBpZiAoZXZlbnQxID09ICdzdG9wJyAmJiBldmVudDIgPT0gJ3N0YXJ0JylcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsO1xuICAgICAgaWYgKGV2ZW50MSA9PSAnc3RvcCcgJiYgZXZlbnQyID09ICdzdG9wJylcbiAgICAgICAgcmV0dXJuIGhpZ2hsaWdodGVkO1xuXG4gICAgICAuLi4gd2hpY2ggaXMgY29sbGFwc2VkIHRvOlxuICAgICAgKi9cbiAgICAgIHJldHVybiBoaWdobGlnaHRlZFswXS5ldmVudCA9PT0gJ3N0YXJ0JyA/IG9yaWdpbmFsIDogaGlnaGxpZ2h0ZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3Blbihub2RlKSB7XG4gICAgICBmdW5jdGlvbiBhdHRyX3N0cihhKSB7XG4gICAgICAgIHJldHVybiAnICcgKyBhLm5vZGVOYW1lICsgJz1cIicgKyBlc2NhcGUoYS52YWx1ZSkucmVwbGFjZSgvXCIvZywgJyZxdW90OycpICsgJ1wiJztcbiAgICAgIH1cbiAgICAgIHJlc3VsdCArPSAnPCcgKyB0YWcobm9kZSkgKyBBcnJheVByb3RvLm1hcC5jYWxsKG5vZGUuYXR0cmlidXRlcywgYXR0cl9zdHIpLmpvaW4oJycpICsgJz4nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlKG5vZGUpIHtcbiAgICAgIHJlc3VsdCArPSAnPC8nICsgdGFnKG5vZGUpICsgJz4nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlcihldmVudCkge1xuICAgICAgKGV2ZW50LmV2ZW50ID09PSAnc3RhcnQnID8gb3BlbiA6IGNsb3NlKShldmVudC5ub2RlKTtcbiAgICB9XG5cbiAgICB3aGlsZSAob3JpZ2luYWwubGVuZ3RoIHx8IGhpZ2hsaWdodGVkLmxlbmd0aCkge1xuICAgICAgdmFyIHN0cmVhbSA9IHNlbGVjdFN0cmVhbSgpO1xuICAgICAgcmVzdWx0ICs9IGVzY2FwZSh2YWx1ZS5zdWJzdHJpbmcocHJvY2Vzc2VkLCBzdHJlYW1bMF0ub2Zmc2V0KSk7XG4gICAgICBwcm9jZXNzZWQgPSBzdHJlYW1bMF0ub2Zmc2V0O1xuICAgICAgaWYgKHN0cmVhbSA9PT0gb3JpZ2luYWwpIHtcbiAgICAgICAgLypcbiAgICAgICAgT24gYW55IG9wZW5pbmcgb3IgY2xvc2luZyB0YWcgb2YgdGhlIG9yaWdpbmFsIG1hcmt1cCB3ZSBmaXJzdCBjbG9zZVxuICAgICAgICB0aGUgZW50aXJlIGhpZ2hsaWdodGVkIG5vZGUgc3RhY2ssIHRoZW4gcmVuZGVyIHRoZSBvcmlnaW5hbCB0YWcgYWxvbmdcbiAgICAgICAgd2l0aCBhbGwgdGhlIGZvbGxvd2luZyBvcmlnaW5hbCB0YWdzIGF0IHRoZSBzYW1lIG9mZnNldCBhbmQgdGhlblxuICAgICAgICByZW9wZW4gYWxsIHRoZSB0YWdzIG9uIHRoZSBoaWdobGlnaHRlZCBzdGFjay5cbiAgICAgICAgKi9cbiAgICAgICAgbm9kZVN0YWNrLnJldmVyc2UoKS5mb3JFYWNoKGNsb3NlKTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIHJlbmRlcihzdHJlYW0uc3BsaWNlKDAsIDEpWzBdKTtcbiAgICAgICAgICBzdHJlYW0gPSBzZWxlY3RTdHJlYW0oKTtcbiAgICAgICAgfSB3aGlsZSAoc3RyZWFtID09PSBvcmlnaW5hbCAmJiBzdHJlYW0ubGVuZ3RoICYmIHN0cmVhbVswXS5vZmZzZXQgPT09IHByb2Nlc3NlZCk7XG4gICAgICAgIG5vZGVTdGFjay5yZXZlcnNlKCkuZm9yRWFjaChvcGVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdHJlYW1bMF0uZXZlbnQgPT09ICdzdGFydCcpIHtcbiAgICAgICAgICBub2RlU3RhY2sucHVzaChzdHJlYW1bMF0ubm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZVN0YWNrLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlcihzdHJlYW0uc3BsaWNlKDAsIDEpWzBdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdCArIGVzY2FwZSh2YWx1ZS5zdWJzdHIocHJvY2Vzc2VkKSk7XG4gIH1cblxuICAvKiBJbml0aWFsaXphdGlvbiAqL1xuXG4gIGZ1bmN0aW9uIGRlcGVuZGVuY3lPblBhcmVudChtb2RlKSB7XG4gICAgaWYgKCFtb2RlKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbW9kZS5lbmRzV2l0aFBhcmVudCB8fCBkZXBlbmRlbmN5T25QYXJlbnQobW9kZS5zdGFydHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXhwYW5kX29yX2Nsb25lX21vZGUobW9kZSkge1xuICAgIGlmIChtb2RlLnZhcmlhbnRzICYmICFtb2RlLmNhY2hlZF92YXJpYW50cykge1xuICAgICAgbW9kZS5jYWNoZWRfdmFyaWFudHMgPSBtb2RlLnZhcmlhbnRzLm1hcChmdW5jdGlvbih2YXJpYW50KSB7XG4gICAgICAgIHJldHVybiBpbmhlcml0KG1vZGUsIHt2YXJpYW50czogbnVsbH0sIHZhcmlhbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRVhQQU5EXG4gICAgLy8gaWYgd2UgaGF2ZSB2YXJpYW50cyB0aGVuIGVzc2VudGlhbGx5IFwicmVwbGFjZVwiIHRoZSBtb2RlIHdpdGggdGhlIHZhcmlhbnRzXG4gICAgLy8gdGhpcyBoYXBwZW5zIGluIGNvbXBpbGVNb2RlLCB3aGVyZSB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBmcm9tXG4gICAgaWYgKG1vZGUuY2FjaGVkX3ZhcmlhbnRzKVxuICAgICAgcmV0dXJuIG1vZGUuY2FjaGVkX3ZhcmlhbnRzO1xuXG4gICAgLy8gQ0xPTkVcbiAgICAvLyBpZiB3ZSBoYXZlIGRlcGVuZGVuY2llcyBvbiBwYXJlbnRzIHRoZW4gd2UgbmVlZCBhIHVuaXF1ZVxuICAgIC8vIGluc3RhbmNlIG9mIG91cnNlbHZlcywgc28gd2UgY2FuIGJlIHJldXNlZCB3aXRoIG1hbnlcbiAgICAvLyBkaWZmZXJlbnQgcGFyZW50cyB3aXRob3V0IGlzc3VlXG4gICAgaWYgKGRlcGVuZGVuY3lPblBhcmVudChtb2RlKSlcbiAgICAgIHJldHVybiBbaW5oZXJpdChtb2RlLCB7IHN0YXJ0czogbW9kZS5zdGFydHMgPyBpbmhlcml0KG1vZGUuc3RhcnRzKSA6IG51bGwgfSldO1xuXG4gICAgaWYgKE9iamVjdC5pc0Zyb3plbihtb2RlKSlcbiAgICAgIHJldHVybiBbaW5oZXJpdChtb2RlKV07XG5cbiAgICAvLyBubyBzcGVjaWFsIGRlcGVuZGVuY3kgaXNzdWVzLCBqdXN0IHJldHVybiBvdXJzZWx2ZXNcbiAgICByZXR1cm4gW21vZGVdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdG9yZUxhbmd1YWdlQXBpKG9iaikge1xuICAgIGlmKEFQSV9SRVBMQUNFUyAmJiAhb2JqLmxhbmdBcGlSZXN0b3JlZCkge1xuICAgICAgb2JqLmxhbmdBcGlSZXN0b3JlZCA9IHRydWU7XG4gICAgICBmb3IodmFyIGtleSBpbiBBUElfUkVQTEFDRVMpIHtcbiAgICAgICAgaWYgKG9ialtrZXldKSB7XG4gICAgICAgICAgb2JqW0FQSV9SRVBMQUNFU1trZXldXSA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAob2JqLmNvbnRhaW5zIHx8IFtdKS5jb25jYXQob2JqLnZhcmlhbnRzIHx8IFtdKS5mb3JFYWNoKHJlc3RvcmVMYW5ndWFnZUFwaSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGlsZUtleXdvcmRzKHJhd0tleXdvcmRzLCBjYXNlX2luc2Vuc2l0aXZlKSB7XG4gICAgICB2YXIgY29tcGlsZWRfa2V5d29yZHMgPSB7fTtcblxuICAgICAgaWYgKHR5cGVvZiByYXdLZXl3b3JkcyA9PT0gJ3N0cmluZycpIHsgLy8gc3RyaW5nXG4gICAgICAgIHNwbGl0QW5kQ29tcGlsZSgna2V5d29yZCcsIHJhd0tleXdvcmRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdEtleXMocmF3S2V5d29yZHMpLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgIHNwbGl0QW5kQ29tcGlsZShjbGFzc05hbWUsIHJhd0tleXdvcmRzW2NsYXNzTmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICByZXR1cm4gY29tcGlsZWRfa2V5d29yZHM7XG5cbiAgICAvLyAtLS1cblxuICAgIGZ1bmN0aW9uIHNwbGl0QW5kQ29tcGlsZShjbGFzc05hbWUsIHN0cikge1xuICAgICAgaWYgKGNhc2VfaW5zZW5zaXRpdmUpIHtcbiAgICAgICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG4gICAgICBzdHIuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQpIHtcbiAgICAgICAgdmFyIHBhaXIgPSBrZXl3b3JkLnNwbGl0KCd8Jyk7XG4gICAgICAgIGNvbXBpbGVkX2tleXdvcmRzW3BhaXJbMF1dID0gW2NsYXNzTmFtZSwgc2NvcmVGb3JLZXl3b3JkKHBhaXJbMF0sIHBhaXJbMV0pXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNjb3JlRm9yS2V5d29yZChrZXl3b3JkLCBwcm92aWRlZFNjb3JlKSB7XG4gICAgLy8gbWFudWFsIHNjb3JlcyBhbHdheXMgd2luIG92ZXIgY29tbW9uIGtleXdvcmRzXG4gICAgLy8gc28geW91IGNhbiBmb3JjZSBhIHNjb3JlIG9mIDEgaWYgeW91IHJlYWxseSBpbnNpc3RcbiAgICBpZiAocHJvdmlkZWRTY29yZSlcbiAgICAgIHJldHVybiBOdW1iZXIocHJvdmlkZWRTY29yZSk7XG5cbiAgICByZXR1cm4gY29tbW9uS2V5d29yZChrZXl3b3JkKSA/IDAgOiAxO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tbW9uS2V5d29yZCh3b3JkKSB7XG4gICAgcmV0dXJuIENPTU1PTl9LRVlXT1JEUy5pbmRleE9mKHdvcmQudG9Mb3dlckNhc2UoKSkgIT0gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBjb21waWxlTGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcblxuICAgIGZ1bmN0aW9uIHJlU3RyKHJlKSB7XG4gICAgICAgIHJldHVybiAocmUgJiYgcmUuc291cmNlKSB8fCByZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsYW5nUmUodmFsdWUsIGdsb2JhbCkge1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICAgIHJlU3RyKHZhbHVlKSxcbiAgICAgICAgJ20nICsgKGxhbmd1YWdlLmNhc2VfaW5zZW5zaXRpdmUgPyAnaScgOiAnJykgKyAoZ2xvYmFsID8gJ2cnIDogJycpXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlQ291bnRNYXRjaEdyb3VwcyhyZSkge1xuICAgICAgcmV0dXJuIChuZXcgUmVnRXhwKHJlLnRvU3RyaW5nKCkgKyAnfCcpKS5leGVjKCcnKS5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIC8vIGpvaW5SZSBsb2dpY2FsbHkgY29tcHV0ZXMgcmVnZXhwcy5qb2luKHNlcGFyYXRvciksIGJ1dCBmaXhlcyB0aGVcbiAgICAvLyBiYWNrcmVmZXJlbmNlcyBzbyB0aGV5IGNvbnRpbnVlIHRvIG1hdGNoLlxuICAgIC8vIGl0IGFsc28gcGxhY2VzIGVhY2ggaW5kaXZpZHVhbCByZWd1bGFyIGV4cHJlc3Npb24gaW50byBpdCdzIG93blxuICAgIC8vIG1hdGNoIGdyb3VwLCBrZWVwaW5nIHRyYWNrIG9mIHRoZSBzZXF1ZW5jaW5nIG9mIHRob3NlIG1hdGNoIGdyb3Vwc1xuICAgIC8vIGlzIGN1cnJlbnRseSBhbiBleGVyY2lzZSBmb3IgdGhlIGNhbGxlci4gOi0pXG4gICAgZnVuY3Rpb24gam9pblJlKHJlZ2V4cHMsIHNlcGFyYXRvcikge1xuICAgICAgLy8gYmFja3JlZmVyZW5jZVJlIG1hdGNoZXMgYW4gb3BlbiBwYXJlbnRoZXNpcyBvciBiYWNrcmVmZXJlbmNlLiBUbyBhdm9pZFxuICAgICAgLy8gYW4gaW5jb3JyZWN0IHBhcnNlLCBpdCBhZGRpdGlvbmFsbHkgbWF0Y2hlcyB0aGUgZm9sbG93aW5nOlxuICAgICAgLy8gLSBbLi4uXSBlbGVtZW50cywgd2hlcmUgdGhlIG1lYW5pbmcgb2YgcGFyZW50aGVzZXMgYW5kIGVzY2FwZXMgY2hhbmdlXG4gICAgICAvLyAtIG90aGVyIGVzY2FwZSBzZXF1ZW5jZXMsIHNvIHdlIGRvIG5vdCBtaXNwYXJzZSBlc2NhcGUgc2VxdWVuY2VzIGFzXG4gICAgICAvLyAgIGludGVyZXN0aW5nIGVsZW1lbnRzXG4gICAgICAvLyAtIG5vbi1tYXRjaGluZyBvciBsb29rYWhlYWQgcGFyZW50aGVzZXMsIHdoaWNoIGRvIG5vdCBjYXB0dXJlLiBUaGVzZVxuICAgICAgLy8gICBmb2xsb3cgdGhlICcoJyB3aXRoIGEgJz8nLlxuICAgICAgdmFyIGJhY2tyZWZlcmVuY2VSZSA9IC9cXFsoPzpbXlxcXFxcXF1dfFxcXFwuKSpcXF18XFwoXFw/P3xcXFxcKFsxLTldWzAtOV0qKXxcXFxcLi87XG4gICAgICB2YXIgbnVtQ2FwdHVyZXMgPSAwO1xuICAgICAgdmFyIHJldCA9ICcnO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWdleHBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG51bUNhcHR1cmVzICs9IDE7XG4gICAgICAgIHZhciBvZmZzZXQgPSBudW1DYXB0dXJlcztcbiAgICAgICAgdmFyIHJlID0gcmVTdHIocmVnZXhwc1tpXSk7XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgIHJldCArPSBzZXBhcmF0b3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0ICs9IFwiKFwiO1xuICAgICAgICB3aGlsZSAocmUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGJhY2tyZWZlcmVuY2VSZS5leGVjKHJlKTtcbiAgICAgICAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0ICs9IHJlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldCArPSByZS5zdWJzdHJpbmcoMCwgbWF0Y2guaW5kZXgpO1xuICAgICAgICAgIHJlID0gcmUuc3Vic3RyaW5nKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgICAgICBpZiAobWF0Y2hbMF1bMF0gPT0gJ1xcXFwnICYmIG1hdGNoWzFdKSB7XG4gICAgICAgICAgICAvLyBBZGp1c3QgdGhlIGJhY2tyZWZlcmVuY2UuXG4gICAgICAgICAgICByZXQgKz0gJ1xcXFwnICsgU3RyaW5nKE51bWJlcihtYXRjaFsxXSkgKyBvZmZzZXQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXQgKz0gbWF0Y2hbMF07XG4gICAgICAgICAgICBpZiAobWF0Y2hbMF0gPT0gJygnKSB7XG4gICAgICAgICAgICAgIG51bUNhcHR1cmVzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldCArPSBcIilcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRNb2RlUmVnZXgobW9kZSkge1xuXG4gICAgICB2YXIgbWF0Y2hJbmRleGVzID0ge307XG4gICAgICB2YXIgbWF0Y2hlclJlO1xuICAgICAgdmFyIHJlZ2V4ZXMgPSBbXTtcbiAgICAgIHZhciBtYXRjaGVyID0ge307XG4gICAgICB2YXIgbWF0Y2hBdCA9IDE7XG5cbiAgICAgIGZ1bmN0aW9uIGFkZFJ1bGUocnVsZSwgcmVnZXgpIHtcbiAgICAgICAgbWF0Y2hJbmRleGVzW21hdGNoQXRdID0gcnVsZTtcbiAgICAgICAgcmVnZXhlcy5wdXNoKFtydWxlLCByZWdleF0pO1xuICAgICAgICBtYXRjaEF0ICs9IHJlQ291bnRNYXRjaEdyb3VwcyhyZWdleCkgKyAxO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGVybTtcbiAgICAgIGZvciAodmFyIGk9MDsgaSA8IG1vZGUuY29udGFpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJlO1xuICAgICAgICB0ZXJtID0gbW9kZS5jb250YWluc1tpXTtcbiAgICAgICAgaWYgKHRlcm0uYmVnaW5LZXl3b3Jkcykge1xuICAgICAgICAgIHJlID0gJ1xcXFwuPyg/OicgKyB0ZXJtLmJlZ2luICsgJylcXFxcLj8nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlID0gdGVybS5iZWdpbjtcbiAgICAgICAgfVxuICAgICAgICBhZGRSdWxlKHRlcm0sIHJlKTtcbiAgICAgIH1cbiAgICAgIGlmIChtb2RlLnRlcm1pbmF0b3JfZW5kKVxuICAgICAgICBhZGRSdWxlKFwiZW5kXCIsIG1vZGUudGVybWluYXRvcl9lbmQpO1xuICAgICAgaWYgKG1vZGUuaWxsZWdhbClcbiAgICAgICAgYWRkUnVsZShcImlsbGVnYWxcIiwgbW9kZS5pbGxlZ2FsKTtcblxuICAgICAgdmFyIHRlcm1pbmF0b3JzID0gcmVnZXhlcy5tYXAoZnVuY3Rpb24oZWwpIHsgcmV0dXJuIGVsWzFdOyB9KTtcbiAgICAgIG1hdGNoZXJSZSA9IGxhbmdSZShqb2luUmUodGVybWluYXRvcnMsICd8JyksIHRydWUpO1xuXG4gICAgICBtYXRjaGVyLmxhc3RJbmRleCA9IDA7XG4gICAgICBtYXRjaGVyLmV4ZWMgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgIHZhciBydWxlO1xuXG4gICAgICAgIGlmKCByZWdleGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgbWF0Y2hlclJlLmxhc3RJbmRleCA9IG1hdGNoZXIubGFzdEluZGV4O1xuICAgICAgICB2YXIgbWF0Y2ggPSBtYXRjaGVyUmUuZXhlYyhzKTtcbiAgICAgICAgaWYgKCFtYXRjaCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8bWF0Y2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobWF0Y2hbaV0gIT0gdW5kZWZpbmVkICYmIG1hdGNoSW5kZXhlc1tcIlwiICtpXSAhPSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICBydWxlID0gbWF0Y2hJbmRleGVzW1wiXCIraV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbGxlZ2FsIG9yIGVuZCBtYXRjaFxuICAgICAgICBpZiAodHlwZW9mIHJ1bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBtYXRjaC50eXBlID0gcnVsZTtcbiAgICAgICAgICBtYXRjaC5leHRyYSA9IFttb2RlLmlsbGVnYWwsIG1vZGUudGVybWluYXRvcl9lbmRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGNoLnR5cGUgPSBcImJlZ2luXCI7XG4gICAgICAgICAgbWF0Y2gucnVsZSA9IHJ1bGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIG1hdGNoZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcGlsZU1vZGUobW9kZSwgcGFyZW50KSB7XG4gICAgICBpZiAobW9kZS5jb21waWxlZClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbW9kZS5jb21waWxlZCA9IHRydWU7XG5cbiAgICAgIG1vZGUua2V5d29yZHMgPSBtb2RlLmtleXdvcmRzIHx8IG1vZGUuYmVnaW5LZXl3b3JkcztcbiAgICAgIGlmIChtb2RlLmtleXdvcmRzKVxuICAgICAgICBtb2RlLmtleXdvcmRzID0gY29tcGlsZUtleXdvcmRzKG1vZGUua2V5d29yZHMsIGxhbmd1YWdlLmNhc2VfaW5zZW5zaXRpdmUpO1xuXG4gICAgICBtb2RlLmxleGVtZXNSZSA9IGxhbmdSZShtb2RlLmxleGVtZXMgfHwgL1xcdysvLCB0cnVlKTtcblxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBpZiAobW9kZS5iZWdpbktleXdvcmRzKSB7XG4gICAgICAgICAgbW9kZS5iZWdpbiA9ICdcXFxcYignICsgbW9kZS5iZWdpbktleXdvcmRzLnNwbGl0KCcgJykuam9pbignfCcpICsgJylcXFxcYic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtb2RlLmJlZ2luKVxuICAgICAgICAgIG1vZGUuYmVnaW4gPSAvXFxCfFxcYi87XG4gICAgICAgIG1vZGUuYmVnaW5SZSA9IGxhbmdSZShtb2RlLmJlZ2luKTtcbiAgICAgICAgaWYgKG1vZGUuZW5kU2FtZUFzQmVnaW4pXG4gICAgICAgICAgbW9kZS5lbmQgPSBtb2RlLmJlZ2luO1xuICAgICAgICBpZiAoIW1vZGUuZW5kICYmICFtb2RlLmVuZHNXaXRoUGFyZW50KVxuICAgICAgICAgIG1vZGUuZW5kID0gL1xcQnxcXGIvO1xuICAgICAgICBpZiAobW9kZS5lbmQpXG4gICAgICAgICAgbW9kZS5lbmRSZSA9IGxhbmdSZShtb2RlLmVuZCk7XG4gICAgICAgIG1vZGUudGVybWluYXRvcl9lbmQgPSByZVN0cihtb2RlLmVuZCkgfHwgJyc7XG4gICAgICAgIGlmIChtb2RlLmVuZHNXaXRoUGFyZW50ICYmIHBhcmVudC50ZXJtaW5hdG9yX2VuZClcbiAgICAgICAgICBtb2RlLnRlcm1pbmF0b3JfZW5kICs9IChtb2RlLmVuZCA/ICd8JyA6ICcnKSArIHBhcmVudC50ZXJtaW5hdG9yX2VuZDtcbiAgICAgIH1cbiAgICAgIGlmIChtb2RlLmlsbGVnYWwpXG4gICAgICAgIG1vZGUuaWxsZWdhbFJlID0gbGFuZ1JlKG1vZGUuaWxsZWdhbCk7XG4gICAgICBpZiAobW9kZS5yZWxldmFuY2UgPT0gbnVsbClcbiAgICAgICAgbW9kZS5yZWxldmFuY2UgPSAxO1xuICAgICAgaWYgKCFtb2RlLmNvbnRhaW5zKSB7XG4gICAgICAgIG1vZGUuY29udGFpbnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIG1vZGUuY29udGFpbnMgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBtb2RlLmNvbnRhaW5zLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiBleHBhbmRfb3JfY2xvbmVfbW9kZShjID09PSAnc2VsZicgPyBtb2RlIDogYyk7XG4gICAgICB9KSk7XG4gICAgICBtb2RlLmNvbnRhaW5zLmZvckVhY2goZnVuY3Rpb24oYykge2NvbXBpbGVNb2RlKGMsIG1vZGUpO30pO1xuXG4gICAgICBpZiAobW9kZS5zdGFydHMpIHtcbiAgICAgICAgY29tcGlsZU1vZGUobW9kZS5zdGFydHMsIHBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIG1vZGUudGVybWluYXRvcnMgPSBidWlsZE1vZGVSZWdleChtb2RlKTtcbiAgICB9XG5cbiAgICAvLyBzZWxmIGlzIG5vdCB2YWxpZCBhdCB0aGUgdG9wLWxldmVsXG4gICAgaWYgKGxhbmd1YWdlLmNvbnRhaW5zICYmIGxhbmd1YWdlLmNvbnRhaW5zLmluZGV4T2YoJ3NlbGYnKSAhPSAtMSkge1xuICAgICAgaWYgKCFTQUZFX01PREUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRVJSOiBjb250YWlucyBgc2VsZmAgaXMgbm90IHN1cHBvcnRlZCBhdCB0aGUgdG9wLWxldmVsIG9mIGEgbGFuZ3VhZ2UuICBTZWUgZG9jdW1lbnRhdGlvbi5cIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNpbGVudGx5IHJlbW92ZSB0aGUgYnJva2VuIHJ1bGUgKGVmZmVjdGl2ZWx5IGlnbm9yaW5nIGl0KSwgdGhpcyBoYXMgaGlzdG9yaWNhbGx5XG4gICAgICAgIC8vIGJlZW4gdGhlIGJlaGF2aW9yIGluIHRoZSBwYXN0LCBzbyB0aGlzIHJlbW92YWwgcHJlc2VydmVzIGNvbXBhdGliaWxpdHkgd2l0aCBicm9rZW5cbiAgICAgICAgLy8gZ3JhbW1hcnMgd2hlbiBydW5uaW5nIGluIFNhZmUgTW9kZVxuICAgICAgICBsYW5ndWFnZS5jb250YWlucyA9IGxhbmd1YWdlLmNvbnRhaW5zLmZpbHRlcihmdW5jdGlvbihtb2RlKSB7IHJldHVybiBtb2RlICE9ICdzZWxmJzsgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBpbGVNb2RlKGxhbmd1YWdlKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENvcmUgaGlnaGxpZ2h0aW5nIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VOYW1lIC0gdGhlIGxhbmd1YWdlIHRvIHVzZSBmb3IgaGlnaGxpZ2h0aW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIC0gdGhlIGNvZGUgdG8gaGlnaGxpZ2h0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaWdub3JlX2lsbGVnYWxzIC0gd2hldGhlciB0byBpZ25vcmUgaWxsZWdhbCBtYXRjaGVzLCBkZWZhdWx0IGlzIHRvIGJhaWxcbiAgICogQHBhcmFtIHthcnJheTxtb2RlPn0gY29udGludWF0aW9uIC0gYXJyYXkgb2YgY29udGludWF0aW9uIG1vZGVzXG4gICAqXG4gICAqIEByZXR1cm5zIGFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIHJlc3VsdFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gbGFuZ3VhZ2UgLSB0aGUgbGFuZ3VhZ2UgbmFtZVxuICAgKiBAcHJvcGVydHkge251bWJlcn0gcmVsZXZhbmNlIC0gdGhlIHJlbGV2YW5jZSBzY29yZVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdmFsdWUgLSB0aGUgaGlnaGxpZ2h0ZWQgSFRNTCBjb2RlXG4gICAqIEBwcm9wZXJ0eSB7bW9kZX0gdG9wIC0gdG9wIG9mIHRoZSBjdXJyZW50IG1vZGUgc3RhY2tcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBpbGxlZ2FsIC0gaW5kaWNhdGVzIHdoZXRoZXIgYW55IGlsbGVnYWwgbWF0Y2hlcyB3ZXJlIGZvdW5kXG4gICovXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodChsYW5ndWFnZU5hbWUsIGNvZGUsIGlnbm9yZV9pbGxlZ2FscywgY29udGludWF0aW9uKSB7XG4gICAgdmFyIGNvZGVUb0hpZ2hsaWdodCA9IGNvZGU7XG5cbiAgICBmdW5jdGlvbiBlc2NhcGVSZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodmFsdWUucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyksICdtJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5kT2ZNb2RlKG1vZGUsIGxleGVtZSkge1xuICAgICAgaWYgKHRlc3RSZShtb2RlLmVuZFJlLCBsZXhlbWUpKSB7XG4gICAgICAgIHdoaWxlIChtb2RlLmVuZHNQYXJlbnQgJiYgbW9kZS5wYXJlbnQpIHtcbiAgICAgICAgICBtb2RlID0gbW9kZS5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGU7XG4gICAgICB9XG4gICAgICBpZiAobW9kZS5lbmRzV2l0aFBhcmVudCkge1xuICAgICAgICByZXR1cm4gZW5kT2ZNb2RlKG1vZGUucGFyZW50LCBsZXhlbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGtleXdvcmRNYXRjaChtb2RlLCBtYXRjaCkge1xuICAgICAgdmFyIG1hdGNoX3N0ciA9IGxhbmd1YWdlLmNhc2VfaW5zZW5zaXRpdmUgPyBtYXRjaFswXS50b0xvd2VyQ2FzZSgpIDogbWF0Y2hbMF07XG4gICAgICByZXR1cm4gbW9kZS5rZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShtYXRjaF9zdHIpICYmIG1vZGUua2V5d29yZHNbbWF0Y2hfc3RyXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZFNwYW4oY2xhc3NOYW1lLCBpbnNpZGVTcGFuLCBsZWF2ZU9wZW4sIG5vUHJlZml4KSB7XG4gICAgICBpZiAoIWxlYXZlT3BlbiAmJiBpbnNpZGVTcGFuID09PSAnJykgcmV0dXJuICcnO1xuICAgICAgaWYgKCFjbGFzc05hbWUpIHJldHVybiBpbnNpZGVTcGFuO1xuXG4gICAgICB2YXIgY2xhc3NQcmVmaXggPSBub1ByZWZpeCA/ICcnIDogb3B0aW9ucy5jbGFzc1ByZWZpeCxcbiAgICAgICAgICBvcGVuU3BhbiAgICA9ICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc1ByZWZpeCxcbiAgICAgICAgICBjbG9zZVNwYW4gICA9IGxlYXZlT3BlbiA/ICcnIDogc3BhbkVuZFRhZztcblxuICAgICAgb3BlblNwYW4gKz0gY2xhc3NOYW1lICsgJ1wiPic7XG5cbiAgICAgIHJldHVybiBvcGVuU3BhbiArIGluc2lkZVNwYW4gKyBjbG9zZVNwYW47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0tleXdvcmRzKCkge1xuICAgICAgdmFyIGtleXdvcmRfbWF0Y2gsIGxhc3RfaW5kZXgsIG1hdGNoLCByZXN1bHQ7XG5cbiAgICAgIGlmICghdG9wLmtleXdvcmRzKVxuICAgICAgICByZXR1cm4gZXNjYXBlKG1vZGVfYnVmZmVyKTtcblxuICAgICAgcmVzdWx0ID0gJyc7XG4gICAgICBsYXN0X2luZGV4ID0gMDtcbiAgICAgIHRvcC5sZXhlbWVzUmUubGFzdEluZGV4ID0gMDtcbiAgICAgIG1hdGNoID0gdG9wLmxleGVtZXNSZS5leGVjKG1vZGVfYnVmZmVyKTtcblxuICAgICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgIHJlc3VsdCArPSBlc2NhcGUobW9kZV9idWZmZXIuc3Vic3RyaW5nKGxhc3RfaW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgIGtleXdvcmRfbWF0Y2ggPSBrZXl3b3JkTWF0Y2godG9wLCBtYXRjaCk7XG4gICAgICAgIGlmIChrZXl3b3JkX21hdGNoKSB7XG4gICAgICAgICAgcmVsZXZhbmNlICs9IGtleXdvcmRfbWF0Y2hbMV07XG4gICAgICAgICAgcmVzdWx0ICs9IGJ1aWxkU3BhbihrZXl3b3JkX21hdGNoWzBdLCBlc2NhcGUobWF0Y2hbMF0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgKz0gZXNjYXBlKG1hdGNoWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0X2luZGV4ID0gdG9wLmxleGVtZXNSZS5sYXN0SW5kZXg7XG4gICAgICAgIG1hdGNoID0gdG9wLmxleGVtZXNSZS5leGVjKG1vZGVfYnVmZmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQgKyBlc2NhcGUobW9kZV9idWZmZXIuc3Vic3RyKGxhc3RfaW5kZXgpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzU3ViTGFuZ3VhZ2UoKSB7XG4gICAgICB2YXIgZXhwbGljaXQgPSB0eXBlb2YgdG9wLnN1Ykxhbmd1YWdlID09PSAnc3RyaW5nJztcbiAgICAgIGlmIChleHBsaWNpdCAmJiAhbGFuZ3VhZ2VzW3RvcC5zdWJMYW5ndWFnZV0pIHtcbiAgICAgICAgcmV0dXJuIGVzY2FwZShtb2RlX2J1ZmZlcik7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXN1bHQgPSBleHBsaWNpdCA/XG4gICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0KHRvcC5zdWJMYW5ndWFnZSwgbW9kZV9idWZmZXIsIHRydWUsIGNvbnRpbnVhdGlvbnNbdG9wLnN1Ykxhbmd1YWdlXSkgOlxuICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodEF1dG8obW9kZV9idWZmZXIsIHRvcC5zdWJMYW5ndWFnZS5sZW5ndGggPyB0b3Auc3ViTGFuZ3VhZ2UgOiB1bmRlZmluZWQpO1xuXG4gICAgICAvLyBDb3VudGluZyBlbWJlZGRlZCBsYW5ndWFnZSBzY29yZSB0b3dhcmRzIHRoZSBob3N0IGxhbmd1YWdlIG1heSBiZSBkaXNhYmxlZFxuICAgICAgLy8gd2l0aCB6ZXJvaW5nIHRoZSBjb250YWluaW5nIG1vZGUgcmVsZXZhbmNlLiBVc2UgY2FzZSBpbiBwb2ludCBpcyBNYXJrZG93biB0aGF0XG4gICAgICAvLyBhbGxvd3MgWE1MIGV2ZXJ5d2hlcmUgYW5kIG1ha2VzIGV2ZXJ5IFhNTCBzbmlwcGV0IHRvIGhhdmUgYSBtdWNoIGxhcmdlciBNYXJrZG93blxuICAgICAgLy8gc2NvcmUuXG4gICAgICBpZiAodG9wLnJlbGV2YW5jZSA+IDApIHtcbiAgICAgICAgcmVsZXZhbmNlICs9IHJlc3VsdC5yZWxldmFuY2U7XG4gICAgICB9XG4gICAgICBpZiAoZXhwbGljaXQpIHtcbiAgICAgICAgY29udGludWF0aW9uc1t0b3Auc3ViTGFuZ3VhZ2VdID0gcmVzdWx0LnRvcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBidWlsZFNwYW4ocmVzdWx0Lmxhbmd1YWdlLCByZXN1bHQudmFsdWUsIGZhbHNlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzQnVmZmVyKCkge1xuICAgICAgcmVzdWx0ICs9ICh0b3Auc3ViTGFuZ3VhZ2UgIT0gbnVsbCA/IHByb2Nlc3NTdWJMYW5ndWFnZSgpIDogcHJvY2Vzc0tleXdvcmRzKCkpO1xuICAgICAgbW9kZV9idWZmZXIgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydE5ld01vZGUobW9kZSkge1xuICAgICAgcmVzdWx0ICs9IG1vZGUuY2xhc3NOYW1lPyBidWlsZFNwYW4obW9kZS5jbGFzc05hbWUsICcnLCB0cnVlKTogJyc7XG4gICAgICB0b3AgPSBPYmplY3QuY3JlYXRlKG1vZGUsIHtwYXJlbnQ6IHt2YWx1ZTogdG9wfX0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZG9CZWdpbk1hdGNoKG1hdGNoKSB7XG4gICAgICB2YXIgbGV4ZW1lID0gbWF0Y2hbMF07XG4gICAgICB2YXIgbmV3X21vZGUgPSBtYXRjaC5ydWxlO1xuXG4gICAgICBpZiAobmV3X21vZGUgJiYgbmV3X21vZGUuZW5kU2FtZUFzQmVnaW4pIHtcbiAgICAgICAgbmV3X21vZGUuZW5kUmUgPSBlc2NhcGVSZSggbGV4ZW1lICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdfbW9kZS5za2lwKSB7XG4gICAgICAgIG1vZGVfYnVmZmVyICs9IGxleGVtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXdfbW9kZS5leGNsdWRlQmVnaW4pIHtcbiAgICAgICAgICBtb2RlX2J1ZmZlciArPSBsZXhlbWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzc0J1ZmZlcigpO1xuICAgICAgICBpZiAoIW5ld19tb2RlLnJldHVybkJlZ2luICYmICFuZXdfbW9kZS5leGNsdWRlQmVnaW4pIHtcbiAgICAgICAgICBtb2RlX2J1ZmZlciA9IGxleGVtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3RhcnROZXdNb2RlKG5ld19tb2RlKTtcbiAgICAgIHJldHVybiBuZXdfbW9kZS5yZXR1cm5CZWdpbiA/IDAgOiBsZXhlbWUubGVuZ3RoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvRW5kTWF0Y2gobWF0Y2gpIHtcbiAgICAgIHZhciBsZXhlbWUgPSBtYXRjaFswXTtcbiAgICAgIHZhciBtYXRjaFBsdXNSZW1haW5kZXIgPSBjb2RlVG9IaWdobGlnaHQuc3Vic3RyKG1hdGNoLmluZGV4KTtcbiAgICAgIHZhciBlbmRfbW9kZSA9IGVuZE9mTW9kZSh0b3AsIG1hdGNoUGx1c1JlbWFpbmRlcik7XG4gICAgICBpZiAoIWVuZF9tb2RlKSB7IHJldHVybjsgfVxuXG4gICAgICB2YXIgb3JpZ2luID0gdG9wO1xuICAgICAgaWYgKG9yaWdpbi5za2lwKSB7XG4gICAgICAgIG1vZGVfYnVmZmVyICs9IGxleGVtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghKG9yaWdpbi5yZXR1cm5FbmQgfHwgb3JpZ2luLmV4Y2x1ZGVFbmQpKSB7XG4gICAgICAgICAgbW9kZV9idWZmZXIgKz0gbGV4ZW1lO1xuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3NCdWZmZXIoKTtcbiAgICAgICAgaWYgKG9yaWdpbi5leGNsdWRlRW5kKSB7XG4gICAgICAgICAgbW9kZV9idWZmZXIgPSBsZXhlbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKHRvcC5jbGFzc05hbWUpIHtcbiAgICAgICAgICByZXN1bHQgKz0gc3BhbkVuZFRhZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRvcC5za2lwICYmICF0b3Auc3ViTGFuZ3VhZ2UpIHtcbiAgICAgICAgICByZWxldmFuY2UgKz0gdG9wLnJlbGV2YW5jZTtcbiAgICAgICAgfVxuICAgICAgICB0b3AgPSB0b3AucGFyZW50O1xuICAgICAgfSB3aGlsZSAodG9wICE9PSBlbmRfbW9kZS5wYXJlbnQpO1xuICAgICAgaWYgKGVuZF9tb2RlLnN0YXJ0cykge1xuICAgICAgICBpZiAoZW5kX21vZGUuZW5kU2FtZUFzQmVnaW4pIHtcbiAgICAgICAgICBlbmRfbW9kZS5zdGFydHMuZW5kUmUgPSBlbmRfbW9kZS5lbmRSZTtcbiAgICAgICAgfVxuICAgICAgICBzdGFydE5ld01vZGUoZW5kX21vZGUuc3RhcnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmlnaW4ucmV0dXJuRW5kID8gMCA6IGxleGVtZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgdmFyIGxhc3RNYXRjaCA9IHt9O1xuICAgIGZ1bmN0aW9uIHByb2Nlc3NMZXhlbWUodGV4dF9iZWZvcmVfbWF0Y2gsIG1hdGNoKSB7XG5cbiAgICAgIHZhciBsZXhlbWUgPSBtYXRjaCAmJiBtYXRjaFswXTtcblxuICAgICAgLy8gYWRkIG5vbi1tYXRjaGVkIHRleHQgdG8gdGhlIGN1cnJlbnQgbW9kZSBidWZmZXJcbiAgICAgIG1vZGVfYnVmZmVyICs9IHRleHRfYmVmb3JlX21hdGNoO1xuXG4gICAgICBpZiAobGV4ZW1lID09IG51bGwpIHtcbiAgICAgICAgcHJvY2Vzc0J1ZmZlcigpO1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgLy8gd2UndmUgZm91bmQgYSAwIHdpZHRoIG1hdGNoIGFuZCB3ZSdyZSBzdHVjaywgc28gd2UgbmVlZCB0byBhZHZhbmNlXG4gICAgICAvLyB0aGlzIGhhcHBlbnMgd2hlbiB3ZSBoYXZlIGJhZGx5IGJlaGF2ZWQgcnVsZXMgdGhhdCBoYXZlIG9wdGlvbmFsIG1hdGNoZXJzIHRvIHRoZSBkZWdyZWUgdGhhdFxuICAgICAgLy8gc29tZXRpbWVzIHRoZXkgY2FuIGVuZCB1cCBtYXRjaGluZyBub3RoaW5nIGF0IGFsbFxuICAgICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vaGlnaGxpZ2h0anMvaGlnaGxpZ2h0LmpzL2lzc3Vlcy8yMTQwXG4gICAgICBpZiAobGFzdE1hdGNoLnR5cGU9PVwiYmVnaW5cIiAmJiBtYXRjaC50eXBlPT1cImVuZFwiICYmIGxhc3RNYXRjaC5pbmRleCA9PSBtYXRjaC5pbmRleCAmJiBsZXhlbWUgPT09IFwiXCIpIHtcbiAgICAgICAgLy8gc3BpdCB0aGUgXCJza2lwcGVkXCIgY2hhcmFjdGVyIHRoYXQgb3VyIHJlZ2V4IGNob2tlZCBvbiBiYWNrIGludG8gdGhlIG91dHB1dCBzZXF1ZW5jZVxuICAgICAgICBtb2RlX2J1ZmZlciArPSBjb2RlVG9IaWdobGlnaHQuc2xpY2UobWF0Y2guaW5kZXgsIG1hdGNoLmluZGV4ICsgMSk7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICAvLyBlZGdlIGNhc2UgZm9yIHdoZW4gaWxsZWdhbCBtYXRjaGVzICQgKGVuZCBvZiBsaW5lKSB3aGljaCBpcyB0ZWNobmljYWxseVxuICAgICAgLy8gYSAwIHdpZHRoIG1hdGNoIGJ1dCBub3QgYSBiZWdpbi9lbmQgbWF0Y2ggc28gaXQncyBub3QgY2F1Z2h0IGJ5IHRoZVxuICAgICAgLy8gZmlyc3QgaGFuZGxlciAod2hlbiBpZ25vcmVJbGxlZ2FscyBpcyB0cnVlKVxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMjUyMlxuICAgICAgaWYgKGxhc3RNYXRjaC50eXBlPT09XCJpbGxlZ2FsXCIgJiYgbGV4ZW1lID09PSBcIlwiKSB7XG4gICAgICAgIG1vZGVfYnVmZmVyICs9IGNvZGVUb0hpZ2hsaWdodC5zbGljZShtYXRjaC5pbmRleCwgbWF0Y2guaW5kZXggKyAxKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIGxhc3RNYXRjaCA9IG1hdGNoO1xuXG4gICAgICBpZiAobWF0Y2gudHlwZT09PVwiYmVnaW5cIikge1xuICAgICAgICByZXR1cm4gZG9CZWdpbk1hdGNoKG1hdGNoKTtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2gudHlwZT09PVwiaWxsZWdhbFwiICYmICFpZ25vcmVfaWxsZWdhbHMpIHtcbiAgICAgICAgLy8gaWxsZWdhbCBtYXRjaCwgd2UgZG8gbm90IGNvbnRpbnVlIHByb2Nlc3NpbmdcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGxleGVtZSBcIicgKyBsZXhlbWUgKyAnXCIgZm9yIG1vZGUgXCInICsgKHRvcC5jbGFzc05hbWUgfHwgJzx1bm5hbWVkPicpICsgJ1wiJyk7XG4gICAgICB9IGVsc2UgaWYgKG1hdGNoLnR5cGU9PT1cImVuZFwiKSB7XG4gICAgICAgIHZhciBwcm9jZXNzZWQgPSBkb0VuZE1hdGNoKG1hdGNoKTtcbiAgICAgICAgaWYgKHByb2Nlc3NlZCAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZDtcbiAgICAgIH1cblxuICAgICAgLypcbiAgICAgIFdoeSBtaWdodCBiZSBmaW5kIG91cnNlbHZlcyBoZXJlPyAgT25seSBvbmUgb2NjYXNpb24gbm93LiAgQW4gZW5kIG1hdGNoIHRoYXQgd2FzXG4gICAgICB0cmlnZ2VyZWQgYnV0IGNvdWxkIG5vdCBiZSBjb21wbGV0ZWQuICBXaGVuIG1pZ2h0IHRoaXMgaGFwcGVuPyAgV2hlbiBhbiBgZW5kU2FtZWFzQmVnaW5gXG4gICAgICBydWxlIHNldHMgdGhlIGVuZCBydWxlIHRvIGEgc3BlY2lmaWMgbWF0Y2guICBTaW5jZSB0aGUgb3ZlcmFsbCBtb2RlIHRlcm1pbmF0aW9uIHJ1bGUgdGhhdCdzXG4gICAgICBiZWluZyB1c2VkIHRvIHNjYW4gdGhlIHRleHQgaXNuJ3QgcmVjb21waWxlZCB0aGF0IG1lYW5zIHRoYXQgYW55IG1hdGNoIHRoYXQgTE9PS1MgbGlrZVxuICAgICAgdGhlIGVuZCAoYnV0IGlzIG5vdCwgYmVjYXVzZSBpdCBpcyBub3QgYW4gZXhhY3QgbWF0Y2ggdG8gdGhlIGJlZ2lubmluZykgd2lsbFxuICAgICAgZW5kIHVwIGhlcmUuICBBIGRlZmluaXRlIGVuZCBtYXRjaCwgYnV0IHdoZW4gYGRvRW5kTWF0Y2hgIHRyaWVzIHRvIFwicmVhcHBseVwiXG4gICAgICB0aGUgZW5kIHJ1bGUgYW5kIGZhaWxzIHRvIG1hdGNoLCB3ZSB3aW5kIHVwIGhlcmUsIGFuZCBqdXN0IHNpbGVudGx5IGlnbm9yZSB0aGUgZW5kLlxuXG4gICAgICBUaGlzIGNhdXNlcyBubyByZWFsIGhhcm0gb3RoZXIgdGhhbiBzdG9wcGluZyBhIGZldyB0aW1lcyB0b28gbWFueS5cbiAgICAgICovXG5cbiAgICAgIG1vZGVfYnVmZmVyICs9IGxleGVtZTtcbiAgICAgIHJldHVybiBsZXhlbWUubGVuZ3RoO1xuICAgIH1cblxuICAgIHZhciBsYW5ndWFnZSA9IGdldExhbmd1YWdlKGxhbmd1YWdlTmFtZSk7XG4gICAgaWYgKCFsYW5ndWFnZSkge1xuICAgICAgY29uc29sZS5lcnJvcihMQU5HVUFHRV9OT1RfRk9VTkQucmVwbGFjZShcInt9XCIsIGxhbmd1YWdlTmFtZSkpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGxhbmd1YWdlOiBcIicgKyBsYW5ndWFnZU5hbWUgKyAnXCInKTtcbiAgICB9XG5cbiAgICBjb21waWxlTGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuICAgIHZhciB0b3AgPSBjb250aW51YXRpb24gfHwgbGFuZ3VhZ2U7XG4gICAgdmFyIGNvbnRpbnVhdGlvbnMgPSB7fTsgLy8ga2VlcCBjb250aW51YXRpb25zIGZvciBzdWItbGFuZ3VhZ2VzXG4gICAgdmFyIHJlc3VsdCA9ICcnLCBjdXJyZW50O1xuICAgIGZvcihjdXJyZW50ID0gdG9wOyBjdXJyZW50ICE9PSBsYW5ndWFnZTsgY3VycmVudCA9IGN1cnJlbnQucGFyZW50KSB7XG4gICAgICBpZiAoY3VycmVudC5jbGFzc05hbWUpIHtcbiAgICAgICAgcmVzdWx0ID0gYnVpbGRTcGFuKGN1cnJlbnQuY2xhc3NOYW1lLCAnJywgdHJ1ZSkgKyByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBtb2RlX2J1ZmZlciA9ICcnO1xuICAgIHZhciByZWxldmFuY2UgPSAwO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbWF0Y2gsIGNvdW50LCBpbmRleCA9IDA7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB0b3AudGVybWluYXRvcnMubGFzdEluZGV4ID0gaW5kZXg7XG4gICAgICAgIG1hdGNoID0gdG9wLnRlcm1pbmF0b3JzLmV4ZWMoY29kZVRvSGlnaGxpZ2h0KTtcbiAgICAgICAgaWYgKCFtYXRjaClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY291bnQgPSBwcm9jZXNzTGV4ZW1lKGNvZGVUb0hpZ2hsaWdodC5zdWJzdHJpbmcoaW5kZXgsIG1hdGNoLmluZGV4KSwgbWF0Y2gpO1xuICAgICAgICBpbmRleCA9IG1hdGNoLmluZGV4ICsgY291bnQ7XG4gICAgICB9XG4gICAgICBwcm9jZXNzTGV4ZW1lKGNvZGVUb0hpZ2hsaWdodC5zdWJzdHIoaW5kZXgpKTtcbiAgICAgIGZvcihjdXJyZW50ID0gdG9wOyBjdXJyZW50LnBhcmVudDsgY3VycmVudCA9IGN1cnJlbnQucGFyZW50KSB7IC8vIGNsb3NlIGRhbmdsaW5nIG1vZGVzXG4gICAgICAgIGlmIChjdXJyZW50LmNsYXNzTmFtZSkge1xuICAgICAgICAgIHJlc3VsdCArPSBzcGFuRW5kVGFnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWxldmFuY2U6IHJlbGV2YW5jZSxcbiAgICAgICAgdmFsdWU6IHJlc3VsdCxcbiAgICAgICAgaWxsZWdhbDpmYWxzZSxcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlTmFtZSxcbiAgICAgICAgdG9wOiB0b3BcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UgJiYgZXJyLm1lc3NhZ2UuaW5kZXhPZignSWxsZWdhbCcpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlsbGVnYWw6IHRydWUsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIHZhbHVlOiBlc2NhcGUoY29kZVRvSGlnaGxpZ2h0KVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChTQUZFX01PREUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgdmFsdWU6IGVzY2FwZShjb2RlVG9IaWdobGlnaHQpLFxuICAgICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZU5hbWUsXG4gICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgZXJyb3JSYWlzZWQ6IGVyclxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gIEhpZ2hsaWdodGluZyB3aXRoIGxhbmd1YWdlIGRldGVjdGlvbi4gQWNjZXB0cyBhIHN0cmluZyB3aXRoIHRoZSBjb2RlIHRvXG4gIGhpZ2hsaWdodC4gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG5cbiAgLSBsYW5ndWFnZSAoZGV0ZWN0ZWQgbGFuZ3VhZ2UpXG4gIC0gcmVsZXZhbmNlIChpbnQpXG4gIC0gdmFsdWUgKGFuIEhUTUwgc3RyaW5nIHdpdGggaGlnaGxpZ2h0aW5nIG1hcmt1cClcbiAgLSBzZWNvbmRfYmVzdCAob2JqZWN0IHdpdGggdGhlIHNhbWUgc3RydWN0dXJlIGZvciBzZWNvbmQtYmVzdCBoZXVyaXN0aWNhbGx5XG4gICAgZGV0ZWN0ZWQgbGFuZ3VhZ2UsIG1heSBiZSBhYnNlbnQpXG5cbiAgKi9cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0QXV0byhjb2RlLCBsYW5ndWFnZVN1YnNldCkge1xuICAgIGxhbmd1YWdlU3Vic2V0ID0gbGFuZ3VhZ2VTdWJzZXQgfHwgb3B0aW9ucy5sYW5ndWFnZXMgfHwgb2JqZWN0S2V5cyhsYW5ndWFnZXMpO1xuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICByZWxldmFuY2U6IDAsXG4gICAgICB2YWx1ZTogZXNjYXBlKGNvZGUpXG4gICAgfTtcbiAgICB2YXIgc2Vjb25kX2Jlc3QgPSByZXN1bHQ7XG4gICAgbGFuZ3VhZ2VTdWJzZXQuZmlsdGVyKGdldExhbmd1YWdlKS5maWx0ZXIoYXV0b0RldGVjdGlvbikuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICB2YXIgY3VycmVudCA9IGhpZ2hsaWdodChuYW1lLCBjb2RlLCBmYWxzZSk7XG4gICAgICBjdXJyZW50Lmxhbmd1YWdlID0gbmFtZTtcbiAgICAgIGlmIChjdXJyZW50LnJlbGV2YW5jZSA+IHNlY29uZF9iZXN0LnJlbGV2YW5jZSkge1xuICAgICAgICBzZWNvbmRfYmVzdCA9IGN1cnJlbnQ7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudC5yZWxldmFuY2UgPiByZXN1bHQucmVsZXZhbmNlKSB7XG4gICAgICAgIHNlY29uZF9iZXN0ID0gcmVzdWx0O1xuICAgICAgICByZXN1bHQgPSBjdXJyZW50O1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzZWNvbmRfYmVzdC5sYW5ndWFnZSkge1xuICAgICAgcmVzdWx0LnNlY29uZF9iZXN0ID0gc2Vjb25kX2Jlc3Q7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKlxuICBQb3N0LXByb2Nlc3Npbmcgb2YgdGhlIGhpZ2hsaWdodGVkIG1hcmt1cDpcblxuICAtIHJlcGxhY2UgVEFCcyB3aXRoIHNvbWV0aGluZyBtb3JlIHVzZWZ1bFxuICAtIHJlcGxhY2UgcmVhbCBsaW5lLWJyZWFrcyB3aXRoICc8YnI+JyBmb3Igbm9uLXByZSBjb250YWluZXJzXG5cbiAgKi9cbiAgZnVuY3Rpb24gZml4TWFya3VwKHZhbHVlKSB7XG4gICAgaWYgKCEob3B0aW9ucy50YWJSZXBsYWNlIHx8IG9wdGlvbnMudXNlQlIpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoZml4TWFya3VwUmUsIGZ1bmN0aW9uKG1hdGNoLCBwMSkge1xuICAgICAgICBpZiAob3B0aW9ucy51c2VCUiAmJiBtYXRjaCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICByZXR1cm4gJzxicj4nO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudGFiUmVwbGFjZSkge1xuICAgICAgICAgIHJldHVybiBwMS5yZXBsYWNlKC9cXHQvZywgb3B0aW9ucy50YWJSZXBsYWNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZENsYXNzTmFtZShwcmV2Q2xhc3NOYW1lLCBjdXJyZW50TGFuZywgcmVzdWx0TGFuZykge1xuICAgIHZhciBsYW5ndWFnZSA9IGN1cnJlbnRMYW5nID8gYWxpYXNlc1tjdXJyZW50TGFuZ10gOiByZXN1bHRMYW5nLFxuICAgICAgICByZXN1bHQgICA9IFtwcmV2Q2xhc3NOYW1lLnRyaW0oKV07XG5cbiAgICBpZiAoIXByZXZDbGFzc05hbWUubWF0Y2goL1xcYmhsanNcXGIvKSkge1xuICAgICAgcmVzdWx0LnB1c2goJ2hsanMnKTtcbiAgICB9XG5cbiAgICBpZiAocHJldkNsYXNzTmFtZS5pbmRleE9mKGxhbmd1YWdlKSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyAnKS50cmltKCk7XG4gIH1cblxuICAvKlxuICBBcHBsaWVzIGhpZ2hsaWdodGluZyB0byBhIERPTSBub2RlIGNvbnRhaW5pbmcgY29kZS4gQWNjZXB0cyBhIERPTSBub2RlIGFuZFxuICB0d28gb3B0aW9uYWwgcGFyYW1ldGVycyBmb3IgZml4TWFya3VwLlxuICAqL1xuICBmdW5jdGlvbiBoaWdobGlnaHRCbG9jayhibG9jaykge1xuICAgIHZhciBub2RlLCBvcmlnaW5hbFN0cmVhbSwgcmVzdWx0LCByZXN1bHROb2RlLCB0ZXh0O1xuICAgIHZhciBsYW5ndWFnZSA9IGJsb2NrTGFuZ3VhZ2UoYmxvY2spO1xuXG4gICAgaWYgKGlzTm90SGlnaGxpZ2h0ZWQobGFuZ3VhZ2UpKVxuICAgICAgICByZXR1cm47XG5cbiAgICBpZiAob3B0aW9ucy51c2VCUikge1xuICAgICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSBibG9jay5pbm5lckhUTUwucmVwbGFjZSgvXFxuL2csICcnKS5yZXBsYWNlKC88YnJbIFxcL10qPi9nLCAnXFxuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUgPSBibG9jaztcbiAgICB9XG4gICAgdGV4dCA9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgcmVzdWx0ID0gbGFuZ3VhZ2UgPyBoaWdobGlnaHQobGFuZ3VhZ2UsIHRleHQsIHRydWUpIDogaGlnaGxpZ2h0QXV0byh0ZXh0KTtcblxuICAgIG9yaWdpbmFsU3RyZWFtID0gbm9kZVN0cmVhbShub2RlKTtcbiAgICBpZiAob3JpZ2luYWxTdHJlYW0ubGVuZ3RoKSB7XG4gICAgICByZXN1bHROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByZXN1bHROb2RlLmlubmVySFRNTCA9IHJlc3VsdC52YWx1ZTtcbiAgICAgIHJlc3VsdC52YWx1ZSA9IG1lcmdlU3RyZWFtcyhvcmlnaW5hbFN0cmVhbSwgbm9kZVN0cmVhbShyZXN1bHROb2RlKSwgdGV4dCk7XG4gICAgfVxuICAgIHJlc3VsdC52YWx1ZSA9IGZpeE1hcmt1cChyZXN1bHQudmFsdWUpO1xuXG4gICAgYmxvY2suaW5uZXJIVE1MID0gcmVzdWx0LnZhbHVlO1xuICAgIGJsb2NrLmNsYXNzTmFtZSA9IGJ1aWxkQ2xhc3NOYW1lKGJsb2NrLmNsYXNzTmFtZSwgbGFuZ3VhZ2UsIHJlc3VsdC5sYW5ndWFnZSk7XG4gICAgYmxvY2sucmVzdWx0ID0ge1xuICAgICAgbGFuZ3VhZ2U6IHJlc3VsdC5sYW5ndWFnZSxcbiAgICAgIHJlOiByZXN1bHQucmVsZXZhbmNlXG4gICAgfTtcbiAgICBpZiAocmVzdWx0LnNlY29uZF9iZXN0KSB7XG4gICAgICBibG9jay5zZWNvbmRfYmVzdCA9IHtcbiAgICAgICAgbGFuZ3VhZ2U6IHJlc3VsdC5zZWNvbmRfYmVzdC5sYW5ndWFnZSxcbiAgICAgICAgcmU6IHJlc3VsdC5zZWNvbmRfYmVzdC5yZWxldmFuY2VcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLypcbiAgVXBkYXRlcyBoaWdobGlnaHQuanMgZ2xvYmFsIG9wdGlvbnMgd2l0aCB2YWx1ZXMgcGFzc2VkIGluIHRoZSBmb3JtIG9mIGFuIG9iamVjdC5cbiAgKi9cbiAgZnVuY3Rpb24gY29uZmlndXJlKHVzZXJfb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBpbmhlcml0KG9wdGlvbnMsIHVzZXJfb3B0aW9ucyk7XG4gIH1cblxuICAvKlxuICBBcHBsaWVzIGhpZ2hsaWdodGluZyB0byBhbGwgPHByZT48Y29kZT4uLjwvY29kZT48L3ByZT4gYmxvY2tzIG9uIGEgcGFnZS5cbiAgKi9cbiAgZnVuY3Rpb24gaW5pdEhpZ2hsaWdodGluZygpIHtcbiAgICBpZiAoaW5pdEhpZ2hsaWdodGluZy5jYWxsZWQpXG4gICAgICByZXR1cm47XG4gICAgaW5pdEhpZ2hsaWdodGluZy5jYWxsZWQgPSB0cnVlO1xuXG4gICAgdmFyIGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZSBjb2RlJyk7XG4gICAgQXJyYXlQcm90by5mb3JFYWNoLmNhbGwoYmxvY2tzLCBoaWdobGlnaHRCbG9jayk7XG4gIH1cblxuICAvKlxuICBBdHRhY2hlcyBoaWdobGlnaHRpbmcgdG8gdGhlIHBhZ2UgbG9hZCBldmVudC5cbiAgKi9cbiAgZnVuY3Rpb24gaW5pdEhpZ2hsaWdodGluZ09uTG9hZCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRIaWdobGlnaHRpbmcsIGZhbHNlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXRIaWdobGlnaHRpbmcsIGZhbHNlKTtcbiAgfVxuXG4gIHZhciBQTEFJTlRFWFRfTEFOR1VBR0UgPSB7IGRpc2FibGVBdXRvZGV0ZWN0OiB0cnVlIH07XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJMYW5ndWFnZShuYW1lLCBsYW5ndWFnZSkge1xuICAgIHZhciBsYW5nO1xuICAgIHRyeSB7IGxhbmcgPSBsYW5ndWFnZShobGpzKTsgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkxhbmd1YWdlIGRlZmluaXRpb24gZm9yICd7fScgY291bGQgbm90IGJlIHJlZ2lzdGVyZWQuXCIucmVwbGFjZShcInt9XCIsIG5hbWUpKTtcbiAgICAgIC8vIGhhcmQgb3Igc29mdCBlcnJvclxuICAgICAgaWYgKCFTQUZFX01PREUpIHsgdGhyb3cgZXJyb3I7IH0gZWxzZSB7IGNvbnNvbGUuZXJyb3IoZXJyb3IpOyB9XG4gICAgICAvLyBsYW5ndWFnZXMgdGhhdCBoYXZlIHNlcmlvdXMgZXJyb3JzIGFyZSByZXBsYWNlZCB3aXRoIGVzc2VudGlhbGx5IGFcbiAgICAgIC8vIFwicGxhaW50ZXh0XCIgc3RhbmQtaW4gc28gdGhhdCB0aGUgY29kZSBibG9ja3Mgd2lsbCBzdGlsbCBnZXQgbm9ybWFsXG4gICAgICAvLyBjc3MgY2xhc3NlcyBhcHBsaWVkIHRvIHRoZW0gLSBhbmQgb25lIGJhZCBsYW5ndWFnZSB3b24ndCBicmVhayB0aGVcbiAgICAgIC8vIGVudGlyZSBoaWdobGlnaHRlclxuICAgICAgbGFuZyA9IFBMQUlOVEVYVF9MQU5HVUFHRTtcbiAgICB9XG4gICAgbGFuZ3VhZ2VzW25hbWVdID0gbGFuZztcbiAgICByZXN0b3JlTGFuZ3VhZ2VBcGkobGFuZyk7XG4gICAgbGFuZy5yYXdEZWZpbml0aW9uID0gbGFuZ3VhZ2UuYmluZChudWxsLGhsanMpO1xuXG4gICAgaWYgKGxhbmcuYWxpYXNlcykge1xuICAgICAgbGFuZy5hbGlhc2VzLmZvckVhY2goZnVuY3Rpb24oYWxpYXMpIHthbGlhc2VzW2FsaWFzXSA9IG5hbWU7fSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGlzdExhbmd1YWdlcygpIHtcbiAgICByZXR1cm4gb2JqZWN0S2V5cyhsYW5ndWFnZXMpO1xuICB9XG5cbiAgLypcbiAgICBpbnRlbmRlZCB1c2FnZTogV2hlbiBvbmUgbGFuZ3VhZ2UgdHJ1bHkgcmVxdWlyZXMgYW5vdGhlclxuXG4gICAgVW5saWtlIGBnZXRMYW5ndWFnZWAsIHRoaXMgd2lsbCB0aHJvdyB3aGVuIHRoZSByZXF1ZXN0ZWQgbGFuZ3VhZ2VcbiAgICBpcyBub3QgYXZhaWxhYmxlLlxuICAqL1xuICBmdW5jdGlvbiByZXF1aXJlTGFuZ3VhZ2UobmFtZSkge1xuICAgIHZhciBsYW5nID0gZ2V0TGFuZ3VhZ2UobmFtZSk7XG4gICAgaWYgKGxhbmcpIHsgcmV0dXJuIGxhbmc7IH1cblxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1RoZSBcXCd7fVxcJyBsYW5ndWFnZSBpcyByZXF1aXJlZCwgYnV0IG5vdCBsb2FkZWQuJy5yZXBsYWNlKCd7fScsbmFtZSkpO1xuICAgIHRocm93IGVycjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExhbmd1YWdlKG5hbWUpIHtcbiAgICBuYW1lID0gKG5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGxhbmd1YWdlc1tuYW1lXSB8fCBsYW5ndWFnZXNbYWxpYXNlc1tuYW1lXV07XG4gIH1cblxuICBmdW5jdGlvbiBhdXRvRGV0ZWN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbGFuZyA9IGdldExhbmd1YWdlKG5hbWUpO1xuICAgIHJldHVybiBsYW5nICYmICFsYW5nLmRpc2FibGVBdXRvZGV0ZWN0O1xuICB9XG5cbiAgLyogSW50ZXJmYWNlIGRlZmluaXRpb24gKi9cblxuICBobGpzLmhpZ2hsaWdodCA9IGhpZ2hsaWdodDtcbiAgaGxqcy5oaWdobGlnaHRBdXRvID0gaGlnaGxpZ2h0QXV0bztcbiAgaGxqcy5maXhNYXJrdXAgPSBmaXhNYXJrdXA7XG4gIGhsanMuaGlnaGxpZ2h0QmxvY2sgPSBoaWdobGlnaHRCbG9jaztcbiAgaGxqcy5jb25maWd1cmUgPSBjb25maWd1cmU7XG4gIGhsanMuaW5pdEhpZ2hsaWdodGluZyA9IGluaXRIaWdobGlnaHRpbmc7XG4gIGhsanMuaW5pdEhpZ2hsaWdodGluZ09uTG9hZCA9IGluaXRIaWdobGlnaHRpbmdPbkxvYWQ7XG4gIGhsanMucmVnaXN0ZXJMYW5ndWFnZSA9IHJlZ2lzdGVyTGFuZ3VhZ2U7XG4gIGhsanMubGlzdExhbmd1YWdlcyA9IGxpc3RMYW5ndWFnZXM7XG4gIGhsanMuZ2V0TGFuZ3VhZ2UgPSBnZXRMYW5ndWFnZTtcbiAgaGxqcy5yZXF1aXJlTGFuZ3VhZ2UgPSByZXF1aXJlTGFuZ3VhZ2U7XG4gIGhsanMuYXV0b0RldGVjdGlvbiA9IGF1dG9EZXRlY3Rpb247XG4gIGhsanMuaW5oZXJpdCA9IGluaGVyaXQ7XG4gIGhsanMuZGVidWdNb2RlID0gZnVuY3Rpb24oKSB7IFNBRkVfTU9ERSA9IGZhbHNlOyB9XG5cbiAgLy8gQ29tbW9uIHJlZ2V4cHNcbiAgaGxqcy5JREVOVF9SRSA9ICdbYS16QS1aXVxcXFx3Kic7XG4gIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSA9ICdbYS16QS1aX11cXFxcdyonO1xuICBobGpzLk5VTUJFUl9SRSA9ICdcXFxcYlxcXFxkKyhcXFxcLlxcXFxkKyk/JztcbiAgaGxqcy5DX05VTUJFUl9SRSA9ICcoLT8pKFxcXFxiMFt4WF1bYS1mQS1GMC05XSt8KFxcXFxiXFxcXGQrKFxcXFwuXFxcXGQqKT98XFxcXC5cXFxcZCspKFtlRV1bLStdP1xcXFxkKyk/KSc7IC8vIDB4Li4uLCAwLi4uLCBkZWNpbWFsLCBmbG9hdFxuICBobGpzLkJJTkFSWV9OVU1CRVJfUkUgPSAnXFxcXGIoMGJbMDFdKyknOyAvLyAwYi4uLlxuICBobGpzLlJFX1NUQVJURVJTX1JFID0gJyF8IT18IT09fCV8JT18JnwmJnwmPXxcXFxcKnxcXFxcKj18XFxcXCt8XFxcXCs9fCx8LXwtPXwvPXwvfDp8O3w8PHw8PD18PD18PHw9PT18PT18PXw+Pj49fD4+PXw+PXw+Pj58Pj58PnxcXFxcP3xcXFxcW3xcXFxce3xcXFxcKHxcXFxcXnxcXFxcXj18XFxcXHx8XFxcXHw9fFxcXFx8XFxcXHx8fic7XG5cbiAgLy8gQ29tbW9uIG1vZGVzXG4gIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSA9IHtcbiAgICBiZWdpbjogJ1xcXFxcXFxcW1xcXFxzXFxcXFNdJywgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGhsanMuQVBPU19TVFJJTkdfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnXFwnJywgZW5kOiAnXFwnJyxcbiAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXVxuICB9O1xuICBobGpzLlFVT1RFX1NUUklOR19NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcIicsIGVuZDogJ1wiJyxcbiAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXVxuICB9O1xuICBobGpzLlBIUkFTQUxfV09SRFNfTU9ERSA9IHtcbiAgICBiZWdpbjogL1xcYihhfGFufHRoZXxhcmV8SSdtfGlzbid0fGRvbid0fGRvZXNuJ3R8d29uJ3R8YnV0fGp1c3R8c2hvdWxkfHByZXR0eXxzaW1wbHl8ZW5vdWdofGdvbm5hfGdvaW5nfHd0Znxzb3xzdWNofHdpbGx8eW91fHlvdXJ8dGhleXxsaWtlfG1vcmUpXFxiL1xuICB9O1xuICBobGpzLkNPTU1FTlQgPSBmdW5jdGlvbiAoYmVnaW4sIGVuZCwgaW5oZXJpdHMpIHtcbiAgICB2YXIgbW9kZSA9IGhsanMuaW5oZXJpdChcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY29tbWVudCcsXG4gICAgICAgIGJlZ2luOiBiZWdpbiwgZW5kOiBlbmQsXG4gICAgICAgIGNvbnRhaW5zOiBbXVxuICAgICAgfSxcbiAgICAgIGluaGVyaXRzIHx8IHt9XG4gICAgKTtcbiAgICBtb2RlLmNvbnRhaW5zLnB1c2goaGxqcy5QSFJBU0FMX1dPUkRTX01PREUpO1xuICAgIG1vZGUuY29udGFpbnMucHVzaCh7XG4gICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgYmVnaW46ICcoPzpUT0RPfEZJWE1FfE5PVEV8QlVHfFhYWCk6JyxcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH0pO1xuICAgIHJldHVybiBtb2RlO1xuICB9O1xuICBobGpzLkNfTElORV9DT01NRU5UX01PREUgPSBobGpzLkNPTU1FTlQoJy8vJywgJyQnKTtcbiAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSA9IGhsanMuQ09NTUVOVCgnL1xcXFwqJywgJ1xcXFwqLycpO1xuICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFID0gaGxqcy5DT01NRU5UKCcjJywgJyQnKTtcbiAgaGxqcy5OVU1CRVJfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGJlZ2luOiBobGpzLk5VTUJFUl9SRSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgaGxqcy5DX05VTUJFUl9NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgYmVnaW46IGhsanMuQ19OVU1CRVJfUkUsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGhsanMuQklOQVJZX05VTUJFUl9NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgYmVnaW46IGhsanMuQklOQVJZX05VTUJFUl9SRSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgaGxqcy5DU1NfTlVNQkVSX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICBiZWdpbjogaGxqcy5OVU1CRVJfUkUgKyAnKCcgK1xuICAgICAgJyV8ZW18ZXh8Y2h8cmVtJyAgK1xuICAgICAgJ3x2d3x2aHx2bWlufHZtYXgnICtcbiAgICAgICd8Y218bW18aW58cHR8cGN8cHgnICtcbiAgICAgICd8ZGVnfGdyYWR8cmFkfHR1cm4nICtcbiAgICAgICd8c3xtcycgK1xuICAgICAgJ3xIenxrSHonICtcbiAgICAgICd8ZHBpfGRwY218ZHBweCcgK1xuICAgICAgJyk/JyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgaGxqcy5SRUdFWFBfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgIGJlZ2luOiAvXFwvLywgZW5kOiAvXFwvW2dpbXV5XSovLFxuICAgIGlsbGVnYWw6IC9cXG4vLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFxbLywgZW5kOiAvXFxdLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIGhsanMuVElUTEVfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgYmVnaW46IGhsanMuSURFTlRfUkUsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICBobGpzLk1FVEhPRF9HVUFSRCA9IHtcbiAgICAvLyBleGNsdWRlcyBtZXRob2QgbmFtZXMgZnJvbSBrZXl3b3JkIHByb2Nlc3NpbmdcbiAgICBiZWdpbjogJ1xcXFwuXFxcXHMqJyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICB2YXIgY29uc3RhbnRzID0gW1xuICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICBobGpzLlBIUkFTQUxfV09SRFNfTU9ERSxcbiAgICBobGpzLkNPTU1FTlQsXG4gICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICBobGpzLkJJTkFSWV9OVU1CRVJfTU9ERSxcbiAgICBobGpzLkNTU19OVU1CRVJfTU9ERSxcbiAgICBobGpzLlJFR0VYUF9NT0RFLFxuICAgIGhsanMuVElUTEVfTU9ERSxcbiAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICBobGpzLk1FVEhPRF9HVUFSRFxuICBdXG4gIGNvbnN0YW50cy5mb3JFYWNoKGZ1bmN0aW9uKG9iaikgeyBkZWVwRnJlZXplKG9iaik7IH0pO1xuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdWJzdGFjay9kZWVwLWZyZWV6ZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuICBmdW5jdGlvbiBkZWVwRnJlZXplIChvKSB7XG4gICAgT2JqZWN0LmZyZWV6ZShvKTtcblxuICAgIHZhciBvYmpJc0Z1bmN0aW9uID0gdHlwZW9mIG8gPT09ICdmdW5jdGlvbic7XG5cbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBpZiAoby5oYXNPd25Qcm9wZXJ0eShwcm9wKVxuICAgICAgJiYgb1twcm9wXSAhPT0gbnVsbFxuICAgICAgJiYgKHR5cGVvZiBvW3Byb3BdID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAvLyBJRTExIGZpeDogaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMjMxOFxuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmVcbiAgICAgICYmIChvYmpJc0Z1bmN0aW9uID8gcHJvcCAhPT0gJ2NhbGxlcicgJiYgcHJvcCAhPT0gJ2NhbGxlZScgJiYgcHJvcCAhPT0gJ2FyZ3VtZW50cycgOiB0cnVlKVxuICAgICAgJiYgIU9iamVjdC5pc0Zyb3plbihvW3Byb3BdKSkge1xuICAgICAgICBkZWVwRnJlZXplKG9bcHJvcF0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG87XG4gIH07XG5cblxuICByZXR1cm4gaGxqcztcbn0pKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgRlVOQ1RJT05fTElLRSA9IHtcbiAgICBiZWdpbjogL1tcXHctXStcXCgvLCByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOiAvW1xcdy1dKy9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICBobGpzLkNTU19OVU1CRVJfTU9ERSxcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxuICB2YXIgQVRUUklCVVRFID0ge1xuICAgIGNsYXNzTmFtZTogJ2F0dHJpYnV0ZScsXG4gICAgYmVnaW46IC9cXFMvLCBlbmQ6ICc6JywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICBzdGFydHM6IHtcbiAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgRlVOQ1RJT05fTElLRSxcbiAgICAgICAgaGxqcy5DU1NfTlVNQkVSX01PREUsXG4gICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsIGJlZ2luOiAnI1swLTlBLUZhLWZdKydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLCBiZWdpbjogJyFpbXBvcnRhbnQnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbiAgdmFyIEFUX0lERU5USUZJRVIgPSAnQFthLXotXSsnIC8vIEBmb250LWZhY2VcbiAgdmFyIEFUX01PRElGSUVSUyA9IFwiYW5kIG9yIG5vdCBvbmx5XCJcbiAgdmFyIE1FRElBX1RZUEVTID0gXCJhbGwgcHJpbnQgc2NyZWVuIHNwZWVjaFwiXG4gIHZhciBBVF9QUk9QRVJUWV9SRSA9IC9AXFwtP1xcd1tcXHddKihcXC1cXHcrKSovIC8vIEAtd2Via2l0LWtleWZyYW1lc1xuICB2YXIgSURFTlRfUkUgPSAnW2EtekEtWi1dW2EtekEtWjAtOV8tXSonO1xuICB2YXIgUlVMRSA9IHtcbiAgICBiZWdpbjogLyg/OltBLVpcXF9cXC5cXC1dK3wtLVthLXpBLVowLTlfLV0rKVxccyo6LywgcmV0dXJuQmVnaW46IHRydWUsIGVuZDogJzsnLCBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAgQVRUUklCVVRFXG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBpbGxlZ2FsOiAvWz1cXC98J1xcJF0vLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci1pZCcsIGJlZ2luOiAvI1tBLVphLXowLTlfLV0rL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItY2xhc3MnLCBiZWdpbjogL1xcLltBLVphLXowLTlfLV0rL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItYXR0cicsXG4gICAgICAgIGJlZ2luOiAvXFxbLywgZW5kOiAvXFxdLyxcbiAgICAgICAgaWxsZWdhbDogJyQnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci1wc2V1ZG8nLFxuICAgICAgICBiZWdpbjogLzooOik/W2EtekEtWjAtOVxcX1xcLVxcK1xcKFxcKVwiJy5dKy9cbiAgICAgIH0sXG4gICAgICAvLyBtYXRjaGluZyB0aGVzZSBoZXJlIGFsbG93cyB1cyB0byB0cmVhdCB0aGVtIG1vcmUgbGlrZSByZWd1bGFyIENTU1xuICAgICAgLy8gcnVsZXMgc28gZXZlcnl0aGluZyBiZXR3ZWVuIHRoZSB7fSBnZXRzIHJlZ3VsYXIgcnVsZSBoaWdobGlnaHRpbmcsXG4gICAgICAvLyB3aGljaCBpcyB3aGF0IHdlIHdhbnQgZm9yIHBhZ2UgYW5kIGZvbnQtZmFjZVxuICAgICAge1xuICAgICAgICBiZWdpbjogJ0AocGFnZXxmb250LWZhY2UpJyxcbiAgICAgICAgbGV4ZW1lczogQVRfSURFTlRJRklFUixcbiAgICAgICAga2V5d29yZHM6ICdAcGFnZSBAZm9udC1mYWNlJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdAJywgZW5kOiAnW3s7XScsIC8vIGF0X3J1bGUgZWF0aW5nIGZpcnN0IFwie1wiIGlzIGEgZ29vZCB0aGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmVjYXVzZSBpdCBkb2VzbuKAmXQgbGV0IGl0IHRvIGJlIHBhcnNlZCBhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYSBydWxlIHNldCBidXQgaW5zdGVhZCBkcm9wcyBwYXJzZXIgaW50b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGRlZmF1bHQgbW9kZSB3aGljaCBpcyBob3cgaXQgc2hvdWxkIGJlLlxuICAgICAgICBpbGxlZ2FsOiAvOi8sIC8vIGJyZWFrIG9uIExlc3MgdmFyaWFibGVzIEB2YXI6IC4uLlxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgIGJlZ2luOiBBVF9QUk9QRVJUWV9SRVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9cXHMvLCBlbmRzV2l0aFBhcmVudDogdHJ1ZSwgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGtleXdvcmRzOiBBVF9NT0RJRklFUlMsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC9bYS16LV0rOi8sXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOlwiYXR0cmlidXRlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICBobGpzLkNTU19OVU1CRVJfTU9ERVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItdGFnJywgYmVnaW46IElERU5UX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAneycsIGVuZDogJ30nLFxuICAgICAgICBpbGxlZ2FsOiAvXFxTLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIFJVTEUsXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgRlJBR01FTlQgPSB7XG4gICAgYmVnaW46ICc8PicsXG4gICAgZW5kOiAnPC8+J1xuICB9O1xuICB2YXIgWE1MX1RBRyA9IHtcbiAgICBiZWdpbjogLzxbQS1aYS16MC05XFxcXC5fOi1dKy8sXG4gICAgZW5kOiAvXFwvW0EtWmEtejAtOVxcXFwuXzotXSs+fFxcLz4vXG4gIH07XG4gIHZhciBJREVOVF9SRSA9ICdbQS1aYS16JF9dWzAtOUEtWmEteiRfXSonO1xuICB2YXIgS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDpcbiAgICAgICdpbiBvZiBpZiBmb3Igd2hpbGUgZmluYWxseSB2YXIgbmV3IGZ1bmN0aW9uIGRvIHJldHVybiB2b2lkIGVsc2UgYnJlYWsgY2F0Y2ggJyArXG4gICAgICAnaW5zdGFuY2VvZiB3aXRoIHRocm93IGNhc2UgZGVmYXVsdCB0cnkgdGhpcyBzd2l0Y2ggY29udGludWUgdHlwZW9mIGRlbGV0ZSAnICtcbiAgICAgICdsZXQgeWllbGQgY29uc3QgZXhwb3J0IHN1cGVyIGRlYnVnZ2VyIGFzIGFzeW5jIGF3YWl0IHN0YXRpYyAnICtcbiAgICAgIC8vIEVDTUFTY3JpcHQgNiBtb2R1bGVzIGltcG9ydFxuICAgICAgJ2ltcG9ydCBmcm9tIGFzJ1xuICAgICxcbiAgICBsaXRlcmFsOlxuICAgICAgJ3RydWUgZmFsc2UgbnVsbCB1bmRlZmluZWQgTmFOIEluZmluaXR5JyxcbiAgICBidWlsdF9pbjpcbiAgICAgICdldmFsIGlzRmluaXRlIGlzTmFOIHBhcnNlRmxvYXQgcGFyc2VJbnQgZGVjb2RlVVJJIGRlY29kZVVSSUNvbXBvbmVudCAnICtcbiAgICAgICdlbmNvZGVVUkkgZW5jb2RlVVJJQ29tcG9uZW50IGVzY2FwZSB1bmVzY2FwZSBPYmplY3QgRnVuY3Rpb24gQm9vbGVhbiBFcnJvciAnICtcbiAgICAgICdFdmFsRXJyb3IgSW50ZXJuYWxFcnJvciBSYW5nZUVycm9yIFJlZmVyZW5jZUVycm9yIFN0b3BJdGVyYXRpb24gU3ludGF4RXJyb3IgJyArXG4gICAgICAnVHlwZUVycm9yIFVSSUVycm9yIE51bWJlciBNYXRoIERhdGUgU3RyaW5nIFJlZ0V4cCBBcnJheSBGbG9hdDMyQXJyYXkgJyArXG4gICAgICAnRmxvYXQ2NEFycmF5IEludDE2QXJyYXkgSW50MzJBcnJheSBJbnQ4QXJyYXkgVWludDE2QXJyYXkgVWludDMyQXJyYXkgJyArXG4gICAgICAnVWludDhBcnJheSBVaW50OENsYW1wZWRBcnJheSBBcnJheUJ1ZmZlciBEYXRhVmlldyBKU09OIEludGwgYXJndW1lbnRzIHJlcXVpcmUgJyArXG4gICAgICAnbW9kdWxlIGNvbnNvbGUgd2luZG93IGRvY3VtZW50IFN5bWJvbCBTZXQgTWFwIFdlYWtTZXQgV2Vha01hcCBQcm94eSBSZWZsZWN0ICcgK1xuICAgICAgJ1Byb21pc2UnXG4gIH07XG4gIHZhciBOVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogJ1xcXFxiKDBbYkJdWzAxXSspbj8nIH0sXG4gICAgICB7IGJlZ2luOiAnXFxcXGIoMFtvT11bMC03XSspbj8nIH0sXG4gICAgICB7IGJlZ2luOiBobGpzLkNfTlVNQkVSX1JFICsgJ24/JyB9XG4gICAgXSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgdmFyIFNVQlNUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICBiZWdpbjogJ1xcXFwkXFxcXHsnLCBlbmQ6ICdcXFxcfScsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXSAgLy8gZGVmaW5lZCBsYXRlclxuICB9O1xuICB2YXIgSFRNTF9URU1QTEFURSA9IHtcbiAgICBiZWdpbjogJ2h0bWxgJywgZW5kOiAnJyxcbiAgICBzdGFydHM6IHtcbiAgICAgIGVuZDogJ2AnLCByZXR1cm5FbmQ6IGZhbHNlLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICBTVUJTVFxuICAgICAgXSxcbiAgICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICB9XG4gIH07XG4gIHZhciBDU1NfVEVNUExBVEUgPSB7XG4gICAgYmVnaW46ICdjc3NgJywgZW5kOiAnJyxcbiAgICBzdGFydHM6IHtcbiAgICAgIGVuZDogJ2AnLCByZXR1cm5FbmQ6IGZhbHNlLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICBTVUJTVFxuICAgICAgXSxcbiAgICAgIHN1Ykxhbmd1YWdlOiAnY3NzJyxcbiAgICB9XG4gIH07XG4gIHZhciBURU1QTEFURV9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ2AnLCBlbmQ6ICdgJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgU1VCU1RcbiAgICBdXG4gIH07XG4gIFNVQlNULmNvbnRhaW5zID0gW1xuICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgIEhUTUxfVEVNUExBVEUsXG4gICAgQ1NTX1RFTVBMQVRFLFxuICAgIFRFTVBMQVRFX1NUUklORyxcbiAgICBOVU1CRVIsXG4gICAgaGxqcy5SRUdFWFBfTU9ERVxuICBdO1xuICB2YXIgUEFSQU1TX0NPTlRBSU5TID0gU1VCU1QuY29udGFpbnMuY29uY2F0KFtcbiAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERVxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsnanMnLCAnanN4JywgJ21qcycsICdjanMnXSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIHJlbGV2YW5jZTogMTAsXG4gICAgICAgIGJlZ2luOiAvXlxccypbJ1wiXXVzZSAoc3RyaWN0fGFzbSlbJ1wiXS9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogL14jIS8sIGVuZDogLyQvXG4gICAgICB9LFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIEhUTUxfVEVNUExBVEUsXG4gICAgICBDU1NfVEVNUExBVEUsXG4gICAgICBURU1QTEFURV9TVFJJTkcsXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICcvXFxcXCpcXFxcKicsXG4gICAgICAgICdcXFxcKi8nLFxuICAgICAgICB7XG4gICAgICAgICAgcmVsZXZhbmNlIDogMCxcbiAgICAgICAgICBjb250YWlucyA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lIDogJ2RvY3RhZycsXG4gICAgICAgICAgICAgIGJlZ2luIDogJ0BbQS1aYS16XSsnLFxuICAgICAgICAgICAgICBjb250YWlucyA6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXHsnLFxuICAgICAgICAgICAgICAgICAgZW5kOiAnXFxcXH0nLFxuICAgICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgICAgICAgICAgICBiZWdpbjogSURFTlRfUkUgKyAnKD89XFxcXHMqKC0pfCQpJyxcbiAgICAgICAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIGVhdCBzcGFjZXMgKG5vdCBuZXdsaW5lcykgc28gd2UgY2FuIGZpbmRcbiAgICAgICAgICAgICAgICAvLyB0eXBlcyBvciB2YXJpYWJsZXNcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbjogLyg/PVteXFxuXSlcXHMvLFxuICAgICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBOVU1CRVIsXG4gICAgICB7IC8vIG9iamVjdCBhdHRyIGNvbnRhaW5lclxuICAgICAgICBiZWdpbjogL1t7LFxcbl1cXHMqLywgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBJREVOVF9SRSArICdcXFxccyo6JywgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW3tjbGFzc05hbWU6ICdhdHRyJywgYmVnaW46IElERU5UX1JFLCByZWxldmFuY2U6IDB9XVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgLy8gXCJ2YWx1ZVwiIGNvbnRhaW5lclxuICAgICAgICBiZWdpbjogJygnICsgaGxqcy5SRV9TVEFSVEVSU19SRSArICd8XFxcXGIoY2FzZXxyZXR1cm58dGhyb3cpXFxcXGIpXFxcXHMqJyxcbiAgICAgICAga2V5d29yZHM6ICdyZXR1cm4gdGhyb3cgY2FzZScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgaGxqcy5SRUdFWFBfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICBiZWdpbjogJyhcXFxcKC4qP1xcXFwpfCcgKyBJREVOVF9SRSArICcpXFxcXHMqPT4nLCByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgICAgIGVuZDogJ1xcXFxzKj0+JyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBJREVOVF9SRVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IC9cXChcXHMqXFwpLyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBQQVJBTVNfQ09OVEFJTlNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICBiZWdpbjogL1xccy8sXG4gICAgICAgICAgICBlbmQ6IC9cXHMqLyxcbiAgICAgICAgICAgIHNraXA6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IC8vIEpTWFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgeyBiZWdpbjogRlJBR01FTlQuYmVnaW4sIGVuZDogRlJBR01FTlQuZW5kIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46IFhNTF9UQUcuYmVnaW4sIGVuZDogWE1MX1RBRy5lbmQgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogWE1MX1RBRy5iZWdpbiwgZW5kOiBYTUxfVEFHLmVuZCwgc2tpcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250YWluczogWydzZWxmJ11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24nLCBlbmQ6IC9cXHsvLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtiZWdpbjogSURFTlRfUkV9KSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBQQVJBTVNfQ09OVEFJTlNcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGlsbGVnYWw6IC9cXFt8JS9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwkWyguXS8gLy8gcmVsZXZhbmNlIGJvb3N0ZXIgZm9yIGEgcGF0dGVybiBjb21tb24gdG8gSlMgbGliczogYCQoc29tZXRoaW5nKWAgYW5kIGAkLnNvbWV0aGluZ2BcbiAgICAgIH0sXG4gICAgICBobGpzLk1FVEhPRF9HVUFSRCxcbiAgICAgIHsgLy8gRVM2IGNsYXNzXG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzJywgZW5kOiAvW3s7PV0vLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAvWzpcIlxcW1xcXV0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtiZWdpbktleXdvcmRzOiAnZXh0ZW5kcyd9LFxuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjb25zdHJ1Y3RvciBnZXQgc2V0JywgZW5kOiAvXFx7LywgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgaWxsZWdhbDogLyMoPyEhKS9cbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBWQVJJQUJMRSA9IHtcbiAgICBiZWdpbjogJ1xcXFwkK1thLXpBLVpfXFx4N2YtXFx4ZmZdW2EtekEtWjAtOV9cXHg3Zi1cXHhmZl0qJ1xuICB9O1xuICB2YXIgUFJFUFJPQ0VTU09SID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLCBiZWdpbjogLzxcXD8ocGhwKT98XFw/Pi9cbiAgfTtcbiAgdmFyIFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFLCBQUkVQUk9DRVNTT1JdLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnYlwiJywgZW5kOiAnXCInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ2JcXCcnLCBlbmQ6ICdcXCcnXG4gICAgICB9LFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge2lsbGVnYWw6IG51bGx9KSxcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7aWxsZWdhbDogbnVsbH0pXG4gICAgXVxuICB9O1xuICB2YXIgTlVNQkVSID0ge3ZhcmlhbnRzOiBbaGxqcy5CSU5BUllfTlVNQkVSX01PREUsIGhsanMuQ19OVU1CRVJfTU9ERV19O1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsncGhwJywgJ3BocDMnLCAncGhwNCcsICdwaHA1JywgJ3BocDYnLCAncGhwNyddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAga2V5d29yZHM6XG4gICAgICAnYW5kIGluY2x1ZGVfb25jZSBsaXN0IGFic3RyYWN0IGdsb2JhbCBwcml2YXRlIGVjaG8gaW50ZXJmYWNlIGFzIHN0YXRpYyBlbmRzd2l0Y2ggJyArXG4gICAgICAnYXJyYXkgbnVsbCBpZiBlbmR3aGlsZSBvciBjb25zdCBmb3IgZW5kZm9yZWFjaCBzZWxmIHZhciB3aGlsZSBpc3NldCBwdWJsaWMgJyArXG4gICAgICAncHJvdGVjdGVkIGV4aXQgZm9yZWFjaCB0aHJvdyBlbHNlaWYgaW5jbHVkZSBfX0ZJTEVfXyBlbXB0eSByZXF1aXJlX29uY2UgZG8geG9yICcgK1xuICAgICAgJ3JldHVybiBwYXJlbnQgY2xvbmUgdXNlIF9fQ0xBU1NfXyBfX0xJTkVfXyBlbHNlIGJyZWFrIHByaW50IGV2YWwgbmV3ICcgK1xuICAgICAgJ2NhdGNoIF9fTUVUSE9EX18gY2FzZSBleGNlcHRpb24gZGVmYXVsdCBkaWUgcmVxdWlyZSBfX0ZVTkNUSU9OX18gJyArXG4gICAgICAnZW5kZGVjbGFyZSBmaW5hbCB0cnkgc3dpdGNoIGNvbnRpbnVlIGVuZGZvciBlbmRpZiBkZWNsYXJlIHVuc2V0IHRydWUgZmFsc2UgJyArXG4gICAgICAndHJhaXQgZ290byBpbnN0YW5jZW9mIGluc3RlYWRvZiBfX0RJUl9fIF9fTkFNRVNQQUNFX18gJyArXG4gICAgICAneWllbGQgZmluYWxseScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNPTU1FTlQoJy8vJywgJyQnLCB7Y29udGFpbnM6IFtQUkVQUk9DRVNTT1JdfSksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICcvXFxcXConLFxuICAgICAgICAnXFxcXCovJyxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2RvY3RhZycsXG4gICAgICAgICAgICAgIGJlZ2luOiAnQFtBLVphLXpdKydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICdfX2hhbHRfY29tcGlsZXIuKz87JyxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHtcbiAgICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICAgICAgICBrZXl3b3JkczogJ19faGFsdF9jb21waWxlcicsXG4gICAgICAgICAgbGV4ZW1lczogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAvPDw8WydcIl0/XFx3K1snXCJdPyQvLCBlbmQ6IC9eXFx3Kzs/JC8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHtiZWdpbjogL1xcJFxcdysvfSxcbiAgICAgICAgICAgICAge2JlZ2luOiAvXFx7XFwkLywgZW5kOiAvXFx9L31cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBQUkVQUk9DRVNTT1IsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLCBiZWdpbjogL1xcJHRoaXNcXGIvXG4gICAgICB9LFxuICAgICAgVkFSSUFCTEUsXG4gICAgICB7XG4gICAgICAgIC8vIHN3YWxsb3cgY29tcG9zZWQgaWRlbnRpZmllcnMgdG8gYXZvaWQgcGFyc2luZyB0aGVtIGFzIGtleXdvcmRzXG4gICAgICAgIGJlZ2luOiAvKDo6fC0+KStbYS16QS1aX1xceDdmLVxceGZmXVthLXpBLVowLTlfXFx4N2YtXFx4ZmZdKi9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2Z1bmN0aW9uJywgZW5kOiAvWzt7XS8sIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcJHxcXFxcW3wlJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICdzZWxmJyxcbiAgICAgICAgICAgICAgVkFSSUFCTEUsXG4gICAgICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgIFNUUklORyxcbiAgICAgICAgICAgICAgTlVNQkVSXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UnLCBlbmQ6ICd7JywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogL1s6XFwoXFwkXCJdLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7YmVnaW5LZXl3b3JkczogJ2V4dGVuZHMgaW1wbGVtZW50cyd9LFxuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICduYW1lc3BhY2UnLCBlbmQ6ICc7JyxcbiAgICAgICAgaWxsZWdhbDogL1tcXC4nXS8sXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAndXNlJywgZW5kOiAnOycsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJz0+JyAvLyBObyBtYXJrdXAsIGp1c3QgYSByZWxldmFuY2UgYm9vc3RlclxuICAgICAgfSxcbiAgICAgIFNUUklORyxcbiAgICAgIE5VTUJFUlxuICAgIF1cbiAgfTtcbn07IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKipcbiAqIFN0aWNreS5qc1xuICogTGlicmFyeSBmb3Igc3RpY2t5IGVsZW1lbnRzIHdyaXR0ZW4gaW4gdmFuaWxsYSBqYXZhc2NyaXB0LiBXaXRoIHRoaXMgbGlicmFyeSB5b3UgY2FuIGVhc2lseSBzZXQgc3RpY2t5IGVsZW1lbnRzIG9uIHlvdXIgd2Vic2l0ZS4gSXQncyBhbHNvIHJlc3BvbnNpdmUuXG4gKlxuICogQHZlcnNpb24gMS4zLjBcbiAqIEBhdXRob3IgUmFmYWwgR2FsdXMgPGJpdXJvQHJhZmFsZ2FsdXMucGw+XG4gKiBAd2Vic2l0ZSBodHRwczovL3JnYWx1cy5naXRodWIuaW8vc3RpY2t5LWpzL1xuICogQHJlcG8gaHR0cHM6Ly9naXRodWIuY29tL3JnYWx1cy9zdGlja3ktanNcbiAqIEBsaWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZ2FsdXMvc3RpY2t5LWpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xudmFyIFN0aWNreSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBTdGlja3kgaW5zdGFuY2UgY29uc3RydWN0b3JcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIFNlbGVjdG9yIHdoaWNoIHdlIGNhbiBmaW5kIGVsZW1lbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zIC0gR2xvYmFsIG9wdGlvbnMgZm9yIHN0aWNreSBlbGVtZW50cyAoY291bGQgYmUgb3ZlcndyaXR0ZW4gYnkgZGF0YS17b3B0aW9ufT1cIlwiIGF0dHJpYnV0ZXMpXG4gICAqL1xuICBmdW5jdGlvbiBTdGlja3koKSB7XG4gICAgdmFyIHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RpY2t5KTtcblxuICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG4gICAgdGhpcy52ZXJzaW9uID0gJzEuMy4wJztcbiAgICB0aGlzLnZwID0gdGhpcy5nZXRWaWV3cG9ydFNpemUoKTtcbiAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgd3JhcDogb3B0aW9ucy53cmFwIHx8IGZhbHNlLFxuICAgICAgd3JhcFdpdGg6IG9wdGlvbnMud3JhcFdpdGggfHwgJzxzcGFuPjwvc3Bhbj4nLFxuICAgICAgbWFyZ2luVG9wOiBvcHRpb25zLm1hcmdpblRvcCB8fCAwLFxuICAgICAgbWFyZ2luQm90dG9tOiBvcHRpb25zLm1hcmdpbkJvdHRvbSB8fCAwLFxuICAgICAgc3RpY2t5Rm9yOiBvcHRpb25zLnN0aWNreUZvciB8fCAwLFxuICAgICAgc3RpY2t5Q2xhc3M6IG9wdGlvbnMuc3RpY2t5Q2xhc3MgfHwgbnVsbCxcbiAgICAgIHN0aWNreUNvbnRhaW5lcjogb3B0aW9ucy5zdGlja3lDb250YWluZXIgfHwgJ2JvZHknXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZVNjcm9sbFRvcFBvc2l0aW9uID0gdGhpcy51cGRhdGVTY3JvbGxUb3BQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlU2Nyb2xsVG9wUG9zaXRpb24oKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMudXBkYXRlU2Nyb2xsVG9wUG9zaXRpb24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnVwZGF0ZVNjcm9sbFRvcFBvc2l0aW9uKTtcbiAgICB0aGlzLnJ1bigpO1xuICB9XG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHdhaXRzIGZvciBwYWdlIHRvIGJlIGZ1bGx5IGxvYWRlZCBhbmQgdGhlbiByZW5kZXJzICYgYWN0aXZhdGVzIGV2ZXJ5IHN0aWNreSBlbGVtZW50IGZvdW5kIHdpdGggc3BlY2lmaWVkIHNlbGVjdG9yXG4gICAqIEBmdW5jdGlvblxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhTdGlja3ksIFt7XG4gICAga2V5OiBcInJ1blwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBydW4oKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAvLyB3YWl0IGZvciBwYWdlIHRvIGJlIGZ1bGx5IGxvYWRlZFxuICAgICAgdmFyIHBhZ2VMb2FkZWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChwYWdlTG9hZGVkKTtcbiAgICAgICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKF90aGlzLnNlbGVjdG9yKTtcblxuICAgICAgICAgIF90aGlzLmZvckVhY2goZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucmVuZGVyRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgMTApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGFzc2lnbiBuZWVkZWQgdmFyaWFibGVzIGZvciBzdGlja3kgZWxlbWVudCwgdGhhdCBhcmUgdXNlZCBpbiBmdXR1cmUgZm9yIGNhbGN1bGF0aW9ucyBhbmQgb3RoZXJcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge25vZGV9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGJlIHJlbmRlcmVkXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJFbGVtZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIC8vIGNyZWF0ZSBjb250YWluZXIgZm9yIHZhcmlhYmxlcyBuZWVkZWQgaW4gZnV0dXJlXG4gICAgICBlbGVtZW50LnN0aWNreSA9IHt9OyAvLyBzZXQgZGVmYXVsdCB2YXJpYWJsZXNcblxuICAgICAgZWxlbWVudC5zdGlja3kuYWN0aXZlID0gZmFsc2U7XG4gICAgICBlbGVtZW50LnN0aWNreS5tYXJnaW5Ub3AgPSBwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1tYXJnaW4tdG9wJykpIHx8IHRoaXMub3B0aW9ucy5tYXJnaW5Ub3A7XG4gICAgICBlbGVtZW50LnN0aWNreS5tYXJnaW5Cb3R0b20gPSBwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1tYXJnaW4tYm90dG9tJykpIHx8IHRoaXMub3B0aW9ucy5tYXJnaW5Cb3R0b207XG4gICAgICBlbGVtZW50LnN0aWNreS5zdGlja3lGb3IgPSBwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGlja3ktZm9yJykpIHx8IHRoaXMub3B0aW9ucy5zdGlja3lGb3I7XG4gICAgICBlbGVtZW50LnN0aWNreS5zdGlja3lDbGFzcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0aWNreS1jbGFzcycpIHx8IHRoaXMub3B0aW9ucy5zdGlja3lDbGFzcztcbiAgICAgIGVsZW1lbnQuc3RpY2t5LndyYXAgPSBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1zdGlja3ktd3JhcCcpID8gdHJ1ZSA6IHRoaXMub3B0aW9ucy53cmFwOyAvLyBAdG9kbyBhdHRyaWJ1dGUgZm9yIHN0aWNreUNvbnRhaW5lclxuICAgICAgLy8gZWxlbWVudC5zdGlja3kuc3RpY2t5Q29udGFpbmVyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RpY2t5LWNvbnRhaW5lcicpIHx8IHRoaXMub3B0aW9ucy5zdGlja3lDb250YWluZXI7XG5cbiAgICAgIGVsZW1lbnQuc3RpY2t5LnN0aWNreUNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5zdGlja3lDb250YWluZXI7XG4gICAgICBlbGVtZW50LnN0aWNreS5jb250YWluZXIgPSB0aGlzLmdldFN0aWNreUNvbnRhaW5lcihlbGVtZW50KTtcbiAgICAgIGVsZW1lbnQuc3RpY2t5LmNvbnRhaW5lci5yZWN0ID0gdGhpcy5nZXRSZWN0YW5nbGUoZWxlbWVudC5zdGlja3kuY29udGFpbmVyKTtcbiAgICAgIGVsZW1lbnQuc3RpY2t5LnJlY3QgPSB0aGlzLmdldFJlY3RhbmdsZShlbGVtZW50KTsgLy8gZml4IHdoZW4gZWxlbWVudCBpcyBpbWFnZSB0aGF0IGhhcyBub3QgeWV0IGxvYWRlZCBhbmQgd2lkdGgsIGhlaWdodCA9IDBcblxuICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW1nJykge1xuICAgICAgICBlbGVtZW50Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5zdGlja3kucmVjdCA9IF90aGlzMi5nZXRSZWN0YW5nbGUoZWxlbWVudCk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50LnN0aWNreS53cmFwKSB7XG4gICAgICAgIHRoaXMud3JhcEVsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9IC8vIGFjdGl2YXRlIHJlbmRlcmVkIGVsZW1lbnRcblxuXG4gICAgICB0aGlzLmFjdGl2YXRlKGVsZW1lbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXcmFwcyBlbGVtZW50IGludG8gcGxhY2Vob2xkZXIgZWxlbWVudFxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7bm9kZX0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYmUgd3JhcHBlZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid3JhcEVsZW1lbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd3JhcEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RpY2t5LXdyYXBXaXRoJykgfHwgdGhpcy5vcHRpb25zLndyYXBXaXRoKTtcbiAgICAgIGVsZW1lbnQucHJldmlvdXNTaWJsaW5nLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGFjdGl2YXRlcyBlbGVtZW50IHdoZW4gc3BlY2lmaWVkIGNvbmRpdGlvbnMgYXJlIG1ldCBhbmQgdGhlbiBpbml0YWxpc2UgZXZlbnRzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtub2RlfSBlbGVtZW50IC0gRWxlbWVudCB0byBiZSBhY3RpdmF0ZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFjdGl2YXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFjdGl2YXRlKGVsZW1lbnQpIHtcbiAgICAgIGlmIChlbGVtZW50LnN0aWNreS5yZWN0LnRvcCArIGVsZW1lbnQuc3RpY2t5LnJlY3QuaGVpZ2h0IDwgZWxlbWVudC5zdGlja3kuY29udGFpbmVyLnJlY3QudG9wICsgZWxlbWVudC5zdGlja3kuY29udGFpbmVyLnJlY3QuaGVpZ2h0ICYmIGVsZW1lbnQuc3RpY2t5LnN0aWNreUZvciA8IHRoaXMudnAud2lkdGggJiYgIWVsZW1lbnQuc3RpY2t5LmFjdGl2ZSkge1xuICAgICAgICBlbGVtZW50LnN0aWNreS5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbGVtZW50cy5pbmRleE9mKGVsZW1lbnQpIDwgMCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZWxlbWVudC5zdGlja3kucmVzaXplRXZlbnQpIHtcbiAgICAgICAgdGhpcy5pbml0UmVzaXplRXZlbnRzKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LnN0aWNreS5yZXNpemVFdmVudCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghZWxlbWVudC5zdGlja3kuc2Nyb2xsRXZlbnQpIHtcbiAgICAgICAgdGhpcy5pbml0U2Nyb2xsRXZlbnRzKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LnN0aWNreS5zY3JvbGxFdmVudCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0UG9zaXRpb24oZWxlbWVudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHdoaWNoIGlzIGFkZGluZyBvblJlc2l6ZUV2ZW50cyB0byB3aW5kb3cgbGlzdGVuZXIgYW5kIGFzc2lnbnMgZnVuY3Rpb24gdG8gZWxlbWVudCBhcyByZXNpemVMaXN0ZW5lclxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7bm9kZX0gZWxlbWVudCAtIEVsZW1lbnQgZm9yIHdoaWNoIHJlc2l6ZSBldmVudHMgYXJlIGluaXRpYWxpc2VkXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbml0UmVzaXplRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRSZXNpemVFdmVudHMoZWxlbWVudCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGVsZW1lbnQuc3RpY2t5LnJlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMzLm9uUmVzaXplRXZlbnRzKGVsZW1lbnQpO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGVsZW1lbnQuc3RpY2t5LnJlc2l6ZUxpc3RlbmVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBlbGVtZW50IGxpc3RlbmVyIGZyb20gcmVzaXplIGV2ZW50XG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtub2RlfSBlbGVtZW50IC0gRWxlbWVudCBmcm9tIHdoaWNoIGxpc3RlbmVyIGlzIGRlbGV0ZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lSZXNpemVFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveVJlc2l6ZUV2ZW50cyhlbGVtZW50KSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZWxlbWVudC5zdGlja3kucmVzaXplTGlzdGVuZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB3aGljaCBpcyBmaXJlZCB3aGVuIHVzZXIgcmVzaXplIHdpbmRvdy4gSXQgY2hlY2tzIGlmIGVsZW1lbnQgc2hvdWxkIGJlIGFjdGl2YXRlZCBvciBkZWFjdGl2YXRlZCBhbmQgdGhlbiBydW4gc2V0UG9zaXRpb24gZnVuY3Rpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge25vZGV9IGVsZW1lbnQgLSBFbGVtZW50IGZvciB3aGljaCBldmVudCBmdW5jdGlvbiBpcyBmaXJlZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25SZXNpemVFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25SZXNpemVFdmVudHMoZWxlbWVudCkge1xuICAgICAgdGhpcy52cCA9IHRoaXMuZ2V0Vmlld3BvcnRTaXplKCk7XG4gICAgICBlbGVtZW50LnN0aWNreS5yZWN0ID0gdGhpcy5nZXRSZWN0YW5nbGUoZWxlbWVudCk7XG4gICAgICBlbGVtZW50LnN0aWNreS5jb250YWluZXIucmVjdCA9IHRoaXMuZ2V0UmVjdGFuZ2xlKGVsZW1lbnQuc3RpY2t5LmNvbnRhaW5lcik7XG5cbiAgICAgIGlmIChlbGVtZW50LnN0aWNreS5yZWN0LnRvcCArIGVsZW1lbnQuc3RpY2t5LnJlY3QuaGVpZ2h0IDwgZWxlbWVudC5zdGlja3kuY29udGFpbmVyLnJlY3QudG9wICsgZWxlbWVudC5zdGlja3kuY29udGFpbmVyLnJlY3QuaGVpZ2h0ICYmIGVsZW1lbnQuc3RpY2t5LnN0aWNreUZvciA8IHRoaXMudnAud2lkdGggJiYgIWVsZW1lbnQuc3RpY2t5LmFjdGl2ZSkge1xuICAgICAgICBlbGVtZW50LnN0aWNreS5hY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnN0aWNreS5yZWN0LnRvcCArIGVsZW1lbnQuc3RpY2t5LnJlY3QuaGVpZ2h0ID49IGVsZW1lbnQuc3RpY2t5LmNvbnRhaW5lci5yZWN0LnRvcCArIGVsZW1lbnQuc3RpY2t5LmNvbnRhaW5lci5yZWN0LmhlaWdodCB8fCBlbGVtZW50LnN0aWNreS5zdGlja3lGb3IgPj0gdGhpcy52cC53aWR0aCAmJiBlbGVtZW50LnN0aWNreS5hY3RpdmUpIHtcbiAgICAgICAgZWxlbWVudC5zdGlja3kuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0UG9zaXRpb24oZWxlbWVudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHdoaWNoIGlzIGFkZGluZyBvblNjcm9sbEV2ZW50cyB0byB3aW5kb3cgbGlzdGVuZXIgYW5kIGFzc2lnbnMgZnVuY3Rpb24gdG8gZWxlbWVudCBhcyBzY3JvbGxMaXN0ZW5lclxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7bm9kZX0gZWxlbWVudCAtIEVsZW1lbnQgZm9yIHdoaWNoIHNjcm9sbCBldmVudHMgYXJlIGluaXRpYWxpc2VkXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbml0U2Nyb2xsRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRTY3JvbGxFdmVudHMoZWxlbWVudCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIGVsZW1lbnQuc3RpY2t5LnNjcm9sbExpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXM0Lm9uU2Nyb2xsRXZlbnRzKGVsZW1lbnQpO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGVsZW1lbnQuc3RpY2t5LnNjcm9sbExpc3RlbmVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBlbGVtZW50IGxpc3RlbmVyIGZyb20gc2Nyb2xsIGV2ZW50XG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtub2RlfSBlbGVtZW50IC0gRWxlbWVudCBmcm9tIHdoaWNoIGxpc3RlbmVyIGlzIGRlbGV0ZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lTY3JvbGxFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveVNjcm9sbEV2ZW50cyhlbGVtZW50KSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZWxlbWVudC5zdGlja3kuc2Nyb2xsTGlzdGVuZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB3aGljaCBpcyBmaXJlZCB3aGVuIHVzZXIgc2Nyb2xsIHdpbmRvdy4gSWYgZWxlbWVudCBpcyBhY3RpdmUsIGZ1bmN0aW9uIGlzIGludm9raW5nIHNldFBvc2l0aW9uIGZ1bmN0aW9uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtub2RlfSBlbGVtZW50IC0gRWxlbWVudCBmb3Igd2hpY2ggZXZlbnQgZnVuY3Rpb24gaXMgZmlyZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uU2Nyb2xsRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uU2Nyb2xsRXZlbnRzKGVsZW1lbnQpIHtcbiAgICAgIGlmIChlbGVtZW50LnN0aWNreSAmJiBlbGVtZW50LnN0aWNreS5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFpbiBmdW5jdGlvbiBmb3IgdGhlIGxpYnJhcnkuIEhlcmUgYXJlIHNvbWUgY29uZGl0aW9uIGNhbGN1bGF0aW9ucyBhbmQgY3NzIGFwcGVuZGluZyBmb3Igc3RpY2t5IGVsZW1lbnQgd2hlbiB1c2VyIHNjcm9sbCB3aW5kb3dcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge25vZGV9IGVsZW1lbnQgLSBFbGVtZW50IHRoYXQgd2lsbCBiZSBwb3NpdGlvbmVkIGlmIGl0J3MgYWN0aXZlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRQb3NpdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQb3NpdGlvbihlbGVtZW50KSB7XG4gICAgICB0aGlzLmNzcyhlbGVtZW50LCB7XG4gICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICB0b3A6ICcnLFxuICAgICAgICBsZWZ0OiAnJ1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnZwLmhlaWdodCA8IGVsZW1lbnQuc3RpY2t5LnJlY3QuaGVpZ2h0IHx8ICFlbGVtZW50LnN0aWNreS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWVsZW1lbnQuc3RpY2t5LnJlY3Qud2lkdGgpIHtcbiAgICAgICAgZWxlbWVudC5zdGlja3kucmVjdCA9IHRoaXMuZ2V0UmVjdGFuZ2xlKGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5zdGlja3kud3JhcCkge1xuICAgICAgICB0aGlzLmNzcyhlbGVtZW50LnBhcmVudE5vZGUsIHtcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIHdpZHRoOiBlbGVtZW50LnN0aWNreS5yZWN0LndpZHRoICsgJ3B4JyxcbiAgICAgICAgICBoZWlnaHQ6IGVsZW1lbnQuc3RpY2t5LnJlY3QuaGVpZ2h0ICsgJ3B4J1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQuc3RpY2t5LnJlY3QudG9wID09PSAwICYmIGVsZW1lbnQuc3RpY2t5LmNvbnRhaW5lciA9PT0gdGhpcy5ib2R5KSB7XG4gICAgICAgIHRoaXMuY3NzKGVsZW1lbnQsIHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICB0b3A6IGVsZW1lbnQuc3RpY2t5LnJlY3QudG9wICsgJ3B4JyxcbiAgICAgICAgICBsZWZ0OiBlbGVtZW50LnN0aWNreS5yZWN0LmxlZnQgKyAncHgnLFxuICAgICAgICAgIHdpZHRoOiBlbGVtZW50LnN0aWNreS5yZWN0LndpZHRoICsgJ3B4J1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZWxlbWVudC5zdGlja3kuc3RpY2t5Q2xhc3MpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbWVudC5zdGlja3kuc3RpY2t5Q2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsVG9wID4gZWxlbWVudC5zdGlja3kucmVjdC50b3AgLSBlbGVtZW50LnN0aWNreS5tYXJnaW5Ub3ApIHtcbiAgICAgICAgdGhpcy5jc3MoZWxlbWVudCwge1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIHdpZHRoOiBlbGVtZW50LnN0aWNreS5yZWN0LndpZHRoICsgJ3B4JyxcbiAgICAgICAgICBsZWZ0OiBlbGVtZW50LnN0aWNreS5yZWN0LmxlZnQgKyAncHgnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbFRvcCArIGVsZW1lbnQuc3RpY2t5LnJlY3QuaGVpZ2h0ICsgZWxlbWVudC5zdGlja3kubWFyZ2luVG9wID4gZWxlbWVudC5zdGlja3kuY29udGFpbmVyLnJlY3QudG9wICsgZWxlbWVudC5zdGlja3kuY29udGFpbmVyLm9mZnNldEhlaWdodCAtIGVsZW1lbnQuc3RpY2t5Lm1hcmdpbkJvdHRvbSkge1xuICAgICAgICAgIGlmIChlbGVtZW50LnN0aWNreS5zdGlja3lDbGFzcykge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGVsZW1lbnQuc3RpY2t5LnN0aWNreUNsYXNzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmNzcyhlbGVtZW50LCB7XG4gICAgICAgICAgICB0b3A6IGVsZW1lbnQuc3RpY2t5LmNvbnRhaW5lci5yZWN0LnRvcCArIGVsZW1lbnQuc3RpY2t5LmNvbnRhaW5lci5vZmZzZXRIZWlnaHQgLSAodGhpcy5zY3JvbGxUb3AgKyBlbGVtZW50LnN0aWNreS5yZWN0LmhlaWdodCArIGVsZW1lbnQuc3RpY2t5Lm1hcmdpbkJvdHRvbSkgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQuc3RpY2t5LnN0aWNreUNsYXNzKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbWVudC5zdGlja3kuc3RpY2t5Q2xhc3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY3NzKGVsZW1lbnQsIHtcbiAgICAgICAgICAgIHRvcDogZWxlbWVudC5zdGlja3kubWFyZ2luVG9wICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZWxlbWVudC5zdGlja3kuc3RpY2t5Q2xhc3MpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZWxlbWVudC5zdGlja3kuc3RpY2t5Q2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jc3MoZWxlbWVudCwge1xuICAgICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICAgdG9wOiAnJyxcbiAgICAgICAgICBsZWZ0OiAnJ1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZWxlbWVudC5zdGlja3kud3JhcCkge1xuICAgICAgICAgIHRoaXMuY3NzKGVsZW1lbnQucGFyZW50Tm9kZSwge1xuICAgICAgICAgICAgZGlzcGxheTogJycsXG4gICAgICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICAgICBoZWlnaHQ6ICcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB1cGRhdGVzIGVsZW1lbnQgc3RpY2t5IHJlY3RhbmdsZSAod2l0aCBzdGlja3kgY29udGFpbmVyKSwgdGhlbiBhY3RpdmF0ZSBvciBkZWFjdGl2YXRlIGVsZW1lbnQsIHRoZW4gdXBkYXRlIHBvc2l0aW9uIGlmIGl0J3MgYWN0aXZlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZm9yRWFjaCh0aGlzLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0aWNreS5yZWN0ID0gX3RoaXM1LmdldFJlY3RhbmdsZShlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5zdGlja3kuY29udGFpbmVyLnJlY3QgPSBfdGhpczUuZ2V0UmVjdGFuZ2xlKGVsZW1lbnQuc3RpY2t5LmNvbnRhaW5lcik7XG5cbiAgICAgICAgX3RoaXM1LmFjdGl2YXRlKGVsZW1lbnQpO1xuXG4gICAgICAgIF90aGlzNS5zZXRQb3NpdGlvbihlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBzdGlja3kgZWxlbWVudCwgcmVtb3ZlIGxpc3RlbmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgdGhpcy51cGRhdGVTY3JvbGxUb3BQb3NpdGlvbik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy51cGRhdGVTY3JvbGxUb3BQb3NpdGlvbik7XG4gICAgICB0aGlzLmZvckVhY2godGhpcy5lbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgX3RoaXM2LmRlc3Ryb3lSZXNpemVFdmVudHMoZWxlbWVudCk7XG5cbiAgICAgICAgX3RoaXM2LmRlc3Ryb3lTY3JvbGxFdmVudHMoZWxlbWVudCk7XG5cbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuc3RpY2t5O1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBjb250YWluZXIgZWxlbWVudCBpbiB3aGljaCBzdGlja3kgZWxlbWVudCBpcyBzdHVjayAoaWYgaXMgbm90IHNwZWNpZmllZCwgdGhlbiBpdCdzIHN0dWNrIHRvIGJvZHkpXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtub2RlfSBlbGVtZW50IC0gRWxlbWVudCB3aGljaCBzdGlja3kgY29udGFpbmVyIGFyZSBsb29rZWQgZm9yXG4gICAgICogQHJldHVybiB7bm9kZX0gZWxlbWVudCAtIFN0aWNreSBjb250YWluZXJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFN0aWNreUNvbnRhaW5lclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGlja3lDb250YWluZXIoZWxlbWVudCkge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50Tm9kZTtcblxuICAgICAgd2hpbGUgKCFjb250YWluZXIuaGFzQXR0cmlidXRlKCdkYXRhLXN0aWNreS1jb250YWluZXInKSAmJiAhY29udGFpbmVyLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihlbGVtZW50LnN0aWNreS5zdGlja3lDb250YWluZXIpICYmIGNvbnRhaW5lciAhPT0gdGhpcy5ib2R5KSB7XG4gICAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5wYXJlbnROb2RlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgZWxlbWVudCByZWN0YW5nbGUgJiBwb3NpdGlvbiAod2lkdGgsIGhlaWdodCwgdG9wLCBsZWZ0KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7bm9kZX0gZWxlbWVudCAtIEVsZW1lbnQgd2hpY2ggcG9zaXRpb24gJiByZWN0YW5nbGUgYXJlIHJldHVybmVkXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UmVjdGFuZ2xlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlY3RhbmdsZShlbGVtZW50KSB7XG4gICAgICB0aGlzLmNzcyhlbGVtZW50LCB7XG4gICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICB0b3A6ICcnLFxuICAgICAgICBsZWZ0OiAnJ1xuICAgICAgfSk7XG4gICAgICB2YXIgd2lkdGggPSBNYXRoLm1heChlbGVtZW50Lm9mZnNldFdpZHRoLCBlbGVtZW50LmNsaWVudFdpZHRoLCBlbGVtZW50LnNjcm9sbFdpZHRoKTtcbiAgICAgIHZhciBoZWlnaHQgPSBNYXRoLm1heChlbGVtZW50Lm9mZnNldEhlaWdodCwgZWxlbWVudC5jbGllbnRIZWlnaHQsIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0KTtcbiAgICAgIHZhciB0b3AgPSAwO1xuICAgICAgdmFyIGxlZnQgPSAwO1xuXG4gICAgICBkbyB7XG4gICAgICAgIHRvcCArPSBlbGVtZW50Lm9mZnNldFRvcCB8fCAwO1xuICAgICAgICBsZWZ0ICs9IGVsZW1lbnQub2Zmc2V0TGVmdCB8fCAwO1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICB9IHdoaWxlIChlbGVtZW50KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB2aWV3cG9ydCBkaW1lbnNpb25zXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Vmlld3BvcnRTaXplXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZpZXdwb3J0U2l6ZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApLFxuICAgICAgICBoZWlnaHQ6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKVxuICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB1cGRhdGVzIHdpbmRvdyBzY3JvbGwgcG9zaXRpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVTY3JvbGxUb3BQb3NpdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVTY3JvbGxUb3BQb3NpdGlvbigpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9wID0gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5zY3JvbGxUb3ApIC0gKGRvY3VtZW50LmNsaWVudFRvcCB8fCAwKSB8fCAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGxvb3BzXG4gICAgICogQGhlbHBlclxuICAgICAqIEBwYXJhbSB7YXJyYXl9XG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiAobm8gbmVlZCBmb3IgZXhwbGFuYXRpb24pXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJmb3JFYWNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY2FsbGJhY2soYXJyYXlbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gYWRkL3JlbW92ZSBjc3MgcHJvcGVydGllcyBmb3Igc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgICogQGhlbHBlclxuICAgICAqIEBwYXJhbSB7bm9kZX0gZWxlbWVudCAtIERPTSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb3BlcnRpZXMgLSBDU1MgcHJvcGVydGllcyB0aGF0IHdpbGwgYmUgYWRkZWQvcmVtb3ZlZCBmcm9tIHNwZWNpZmllZCBlbGVtZW50XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjc3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3NzKGVsZW1lbnQsIHByb3BlcnRpZXMpIHtcbiAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGlja3k7XG59KCk7XG4vKipcbiAqIEV4cG9ydCBmdW5jdGlvbiB0aGF0IHN1cHBvcnRzIEFNRCwgQ29tbW9uSlMgYW5kIFBsYWluIEJyb3dzZXIuXG4gKi9cblxuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5O1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuU3RpY2t5ID0gZmFjdG9yeTtcbiAgfVxufSkodGhpcywgU3RpY2t5KTsiLCJcbnZhciBTdGlja3kgPSByZXF1aXJlKCcuL2Rpc3Qvc3RpY2t5LmNvbXBpbGUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGlja3k7XG4iLCIhZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByb290LnN2ZzRldmVyeWJvZHkgPSBmYWN0b3J5KCk7XG4gICAgfSkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMgPyAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOiByb290LnN2ZzRldmVyeWJvZHkgPSBmYWN0b3J5KCk7XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgIC8qISBzdmc0ZXZlcnlib2R5IHYyLjEuOSB8IGdpdGh1Yi5jb20vam9uYXRoYW50bmVhbC9zdmc0ZXZlcnlib2R5ICovXG4gICAgZnVuY3Rpb24gZW1iZWQocGFyZW50LCBzdmcsIHRhcmdldCkge1xuICAgICAgICAvLyBpZiB0aGUgdGFyZ2V0IGV4aXN0c1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudCB0byBob2xkIHRoZSBjb250ZW50cyBvZiB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIHZpZXdCb3ggPSAhc3ZnLmhhc0F0dHJpYnV0ZShcInZpZXdCb3hcIikgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcInZpZXdCb3hcIik7XG4gICAgICAgICAgICAvLyBjb25kaXRpb25hbGx5IHNldCB0aGUgdmlld0JveCBvbiB0aGUgc3ZnXG4gICAgICAgICAgICB2aWV3Qm94ICYmIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIHZpZXdCb3gpO1xuICAgICAgICAgICAgLy8gY29weSB0aGUgY29udGVudHMgb2YgdGhlIGNsb25lIGludG8gdGhlIGZyYWdtZW50XG4gICAgICAgICAgICBmb3IgKC8vIGNsb25lIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBjbG9uZSA9IHRhcmdldC5jbG9uZU5vZGUoITApOyBjbG9uZS5jaGlsZE5vZGVzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2xvbmUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhcHBlbmQgdGhlIGZyYWdtZW50IGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpIHtcbiAgICAgICAgLy8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHJlcXVlc3RcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHJlcXVlc3QgaXMgcmVhZHlcbiAgICAgICAgICAgIGlmICg0ID09PSB4aHIucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICB2YXIgY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50O1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnQgYmFzZWQgb24gdGhlIHhociByZXNwb25zZVxuICAgICAgICAgICAgICAgIGNhY2hlZERvY3VtZW50IHx8IChjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIiksIFxuICAgICAgICAgICAgICAgIGNhY2hlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dCwgeGhyLl9jYWNoZWRUYXJnZXQgPSB7fSksIC8vIGNsZWFyIHRoZSB4aHIgZW1iZWRzIGxpc3QgYW5kIGVtYmVkIGVhY2ggaXRlbVxuICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnNwbGljZSgwKS5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdO1xuICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIGNhY2hlZCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IHx8ICh0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXSA9IGNhY2hlZERvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaWQpKSwgXG4gICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSB0YXJnZXQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICAgICAgICAgIGVtYmVkKGl0ZW0ucGFyZW50LCBpdGVtLnN2ZywgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgLy8gdGVzdCB0aGUgcmVhZHkgc3RhdGUgY2hhbmdlIGltbWVkaWF0ZWx5XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3ZnNGV2ZXJ5Ym9keShyYXdvcHRzKSB7XG4gICAgICAgIGZ1bmN0aW9uIG9uaW50ZXJ2YWwoKSB7XG4gICAgICAgICAgICAvLyB3aGlsZSB0aGUgaW5kZXggZXhpc3RzIGluIHRoZSBsaXZlIDx1c2U+IGNvbGxlY3Rpb25cbiAgICAgICAgICAgIGZvciAoLy8gZ2V0IHRoZSBjYWNoZWQgPHVzZT4gaW5kZXhcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDA7IGluZGV4IDwgdXNlcy5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCA8dXNlPlxuICAgICAgICAgICAgICAgIHZhciB1c2UgPSB1c2VzW2luZGV4XSwgcGFyZW50ID0gdXNlLnBhcmVudE5vZGUsIHN2ZyA9IGdldFNWR0FuY2VzdG9yKHBhcmVudCksIHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpIHx8IHVzZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICAgICAgICAgIGlmICghc3JjICYmIG9wdHMuYXR0cmlidXRlTmFtZSAmJiAoc3JjID0gdXNlLmdldEF0dHJpYnV0ZShvcHRzLmF0dHJpYnV0ZU5hbWUpKSwgXG4gICAgICAgICAgICAgICAgc3ZnICYmIHNyYykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9seWZpbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0cy52YWxpZGF0ZSB8fCBvcHRzLnZhbGlkYXRlKHNyYywgc3ZnLCB1c2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSA8dXNlPiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHVzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFyc2UgdGhlIHNyYyBhbmQgZ2V0IHRoZSB1cmwgYW5kIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNyY1NwbGl0ID0gc3JjLnNwbGl0KFwiI1wiKSwgdXJsID0gc3JjU3BsaXQuc2hpZnQoKSwgaWQgPSBzcmNTcGxpdC5qb2luKFwiI1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGluayBpcyBleHRlcm5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cmwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHhociByZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4aHIgPSByZXF1ZXN0c1t1cmxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIHhociByZXF1ZXN0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIgfHwgKHhociA9IHJlcXVlc3RzW3VybF0gPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSwgeGhyLm9wZW4oXCJHRVRcIiwgdXJsKSwgeGhyLnNlbmQoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzID0gW10pLCAvLyBhZGQgdGhlIHN2ZyBhbmQgaWQgYXMgYW4gaXRlbSB0byB0aGUgeGhyIGVtYmVkcyBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmc6IHN2ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgLy8gcHJlcGFyZSB0aGUgeGhyIHJlYWR5IHN0YXRlIGNoYW5nZSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSBsb2NhbCBpZCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1iZWQocGFyZW50LCBzdmcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2hlbiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIG5vdCBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK2luZGV4LCArK251bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICArK2luZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnRpbnVlIHRoZSBpbnRlcnZhbFxuICAgICAgICAgICAgKCF1c2VzLmxlbmd0aCB8fCB1c2VzLmxlbmd0aCAtIG51bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcyA+IDApICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShvbmludGVydmFsLCA2Nyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvbHlmaWxsLCBvcHRzID0gT2JqZWN0KHJhd29wdHMpLCBuZXdlcklFVUEgPSAvXFxiVHJpZGVudFxcL1s1NjddXFxifFxcYk1TSUUgKD86OXwxMClcXC4wXFxiLywgd2Via2l0VUEgPSAvXFxiQXBwbGVXZWJLaXRcXC8oXFxkKylcXGIvLCBvbGRlckVkZ2VVQSA9IC9cXGJFZGdlXFwvMTJcXC4oXFxkKylcXGIvLCBlZGdlVUEgPSAvXFxiRWRnZVxcLy4oXFxkKylcXGIvLCBpbklmcmFtZSA9IHdpbmRvdy50b3AgIT09IHdpbmRvdy5zZWxmO1xuICAgICAgICBwb2x5ZmlsbCA9IFwicG9seWZpbGxcIiBpbiBvcHRzID8gb3B0cy5wb2x5ZmlsbCA6IG5ld2VySUVVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKG9sZGVyRWRnZVVBKSB8fCBbXSlbMV0gPCAxMDU0NyB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCh3ZWJraXRVQSkgfHwgW10pWzFdIDwgNTM3IHx8IGVkZ2VVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIGluSWZyYW1lO1xuICAgICAgICAvLyBjcmVhdGUgeGhyIHJlcXVlc3RzIG9iamVjdFxuICAgICAgICB2YXIgcmVxdWVzdHMgPSB7fSwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0LCB1c2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1c2VcIiksIG51bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcyA9IDA7XG4gICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc3RhcnQgdGhlIGludGVydmFsIGlmIHRoZSBwb2x5ZmlsbCBpcyBhY3RpdmVcbiAgICAgICAgcG9seWZpbGwgJiYgb25pbnRlcnZhbCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTVkdBbmNlc3Rvcihub2RlKSB7XG4gICAgICAgIGZvciAodmFyIHN2ZyA9IG5vZGU7IFwic3ZnXCIgIT09IHN2Zy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICYmIChzdmcgPSBzdmcucGFyZW50Tm9kZSk7ICkge31cbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG4gICAgcmV0dXJuIHN2ZzRldmVyeWJvZHk7XG59KTsiLCIvKiEgdGFiYnlqcyB2MTIuMC4zIHwgKGMpIDIwMTkgQ2hyaXMgRmVyZGluYW5kaSB8IE1JVCBMaWNlbnNlIHwgaHR0cDovL2dpdGh1Yi5jb20vY2ZlcmRpbmFuZGkvdGFiYnkgKi9cbkVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN8fChFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzPUVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yfHxFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IpLChmdW5jdGlvbihlLHQpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sKGZ1bmN0aW9uKCl7cmV0dXJuIHQoZSl9KSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9dChlKTplLlRhYmJ5PXQoZSl9KShcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLChmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjt2YXIgdD17aWRQcmVmaXg6XCJ0YWJieS10b2dnbGVfXCIsZGVmYXVsdDpcIltkYXRhLXRhYmJ5LWRlZmF1bHRdXCJ9LHI9ZnVuY3Rpb24odCl7aWYodCYmXCJ0cnVlXCIhPXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiKSl7dmFyIHI9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0Lmhhc2gpO2lmKHIpe3ZhciBvPShmdW5jdGlvbihlKXt2YXIgdD1lLmNsb3Nlc3QoJ1tyb2xlPVwidGFibGlzdFwiXScpO2lmKCF0KXJldHVybnt9O3ZhciByPXQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJ0YWJcIl1bYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKTtpZighcilyZXR1cm57fTt2YXIgbz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHIuaGFzaCk7cmV0dXJuIHIuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLFwiZmFsc2VcIiksci5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiLTFcIiksbz8oby5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIixcImhpZGRlblwiKSx7cHJldmlvdXNUYWI6cixwcmV2aW91c0NvbnRlbnQ6b30pOntwcmV2aW91c1RhYjpyfX0pKHQpOyEoZnVuY3Rpb24oZSx0KXtlLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIixcInRydWVcIiksZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiMFwiKSx0LnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKSxlLmZvY3VzKCl9KSh0LHIpLG8udGFiPXQsby5jb250ZW50PXIsKGZ1bmN0aW9uKHQscil7dmFyIG87XCJmdW5jdGlvblwiPT10eXBlb2YgZS5DdXN0b21FdmVudD9vPW5ldyBDdXN0b21FdmVudChcInRhYmJ5XCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxkZXRhaWw6cn0pOihvPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIikpLmluaXRDdXN0b21FdmVudChcInRhYmJ5XCIsITAsITAsciksdC5kaXNwYXRjaEV2ZW50KG8pfSkodCxvKX19fSxvPWZ1bmN0aW9uKGUsdCl7dmFyIG89KGZ1bmN0aW9uKGUpe3ZhciB0PWUuY2xvc2VzdCgnW3JvbGU9XCJ0YWJsaXN0XCJdJykscj10P3QucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJcIl0nKTpudWxsO2lmKHIpcmV0dXJue3RhYnM6cixpbmRleDpBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHIsZSl9fSkoZSk7aWYobyl7dmFyIG4saT1vLnRhYnMubGVuZ3RoLTE7W1wiQXJyb3dVcFwiLFwiQXJyb3dMZWZ0XCIsXCJVcFwiLFwiTGVmdFwiXS5pbmRleE9mKHQpPi0xP249by5pbmRleDwxP2k6by5pbmRleC0xOltcIkFycm93RG93blwiLFwiQXJyb3dSaWdodFwiLFwiRG93blwiLFwiUmlnaHRcIl0uaW5kZXhPZih0KT4tMT9uPW8uaW5kZXg9PT1pPzA6by5pbmRleCsxOlwiSG9tZVwiPT09dD9uPTA6XCJFbmRcIj09PXQmJihuPWkpLHIoby50YWJzW25dKX19O3JldHVybiBmdW5jdGlvbihuLGkpe3ZhciBhLHUsbD17fTtsLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgZT11LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO0FycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZSwoZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlLmhhc2gpO3QmJihmdW5jdGlvbihlLHQscil7ZS5pZC5zbGljZSgwLHIuaWRQcmVmaXgubGVuZ3RoKT09PXIuaWRQcmVmaXgmJihlLmlkPVwiXCIpLGUucmVtb3ZlQXR0cmlidXRlKFwicm9sZVwiKSxlLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIiksZS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIpLGUucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIiksZS5jbG9zZXN0KFwibGlcIikucmVtb3ZlQXR0cmlidXRlKFwicm9sZVwiKSx0LnJlbW92ZUF0dHJpYnV0ZShcInJvbGVcIiksdC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIiksdC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIil9KShlLHQsYSl9KSksdS5yZW1vdmVBdHRyaWJ1dGUoXCJyb2xlXCIpLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixjLCEwKSx1LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZCwhMCksYT1udWxsLHU9bnVsbH0sbC5zZXR1cD1mdW5jdGlvbigpe2lmKHU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuKSl7dmFyIGU9dS5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTt1LnNldEF0dHJpYnV0ZShcInJvbGVcIixcInRhYmxpc3RcIiksQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlLChmdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUuaGFzaCk7dCYmKGZ1bmN0aW9uKGUsdCxyKXtlLmlkfHwoZS5pZD1yLmlkUHJlZml4K3QuaWQpLGUuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwidGFiXCIpLGUuc2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiLHQuaWQpLGUuY2xvc2VzdChcImxpXCIpLnNldEF0dHJpYnV0ZShcInJvbGVcIixcInByZXNlbnRhdGlvblwiKSx0LnNldEF0dHJpYnV0ZShcInJvbGVcIixcInRhYnBhbmVsXCIpLHQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsZS5pZCksZS5tYXRjaGVzKHIuZGVmYXVsdCk/ZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsXCJ0cnVlXCIpOihlLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIixcImZhbHNlXCIpLGUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIixcIi0xXCIpLHQuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsXCJoaWRkZW5cIikpfSkoZSx0LGEpfSkpfX0sbC50b2dnbGU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZTtcInN0cmluZ1wiPT10eXBlb2YgZSYmKHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuKycgW3JvbGU9XCJ0YWJcIl1baHJlZio9XCInK2UrJ1wiXScpKSxyKHQpfTt2YXIgYz1mdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldC5jbG9zZXN0KG4rJyBbcm9sZT1cInRhYlwiXScpO3QmJihlLnByZXZlbnREZWZhdWx0KCkscih0KSl9LGQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudDt0Lm1hdGNoZXMobisnIFtyb2xlPVwidGFiXCJdJykmJihbXCJBcnJvd1VwXCIsXCJBcnJvd0Rvd25cIixcIkFycm93TGVmdFwiLFwiQXJyb3dSaWdodFwiLFwiVXBcIixcIkRvd25cIixcIkxlZnRcIixcIlJpZ2h0XCIsXCJIb21lXCIsXCJFbmRcIl0uaW5kZXhPZihlLmtleSk8MHx8byh0LGUua2V5KSl9O3JldHVybiBhPShmdW5jdGlvbigpe3ZhciBlPXt9O3JldHVybiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywoZnVuY3Rpb24odCl7Zm9yKHZhciByIGluIHQpe2lmKCF0Lmhhc093blByb3BlcnR5KHIpKXJldHVybjtlW3JdPXRbcl19fSkpLGV9KSh0LGl8fHt9KSxsLnNldHVwKCksKGZ1bmN0aW9uKHQpe2lmKCEoZS5sb2NhdGlvbi5oYXNoLmxlbmd0aDwxKSl7dmFyIG89ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KycgW3JvbGU9XCJ0YWJcIl1baHJlZio9XCInK2UubG9jYXRpb24uaGFzaCsnXCJdJyk7cihvKX19KShuKSxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsYywhMCksdS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGQsITApLGx9fSkpOyIsIi8vIGNyb3NzIGJyb3dzZXJzIGFkZFJ1bGUgbWV0aG9kXG5pbXBvcnQgeyByYWYgfSBmcm9tICcuL3JhZi5qcyc7XG5leHBvcnQgZnVuY3Rpb24gYWRkQ1NTUnVsZShzaGVldCwgc2VsZWN0b3IsIHJ1bGVzLCBpbmRleCkge1xuICAvLyByZXR1cm4gcmFmKGZ1bmN0aW9uKCkge1xuICAgICdpbnNlcnRSdWxlJyBpbiBzaGVldCA/XG4gICAgICBzaGVldC5pbnNlcnRSdWxlKHNlbGVjdG9yICsgJ3snICsgcnVsZXMgKyAnfScsIGluZGV4KSA6XG4gICAgICBzaGVldC5hZGRSdWxlKHNlbGVjdG9yLCBydWxlcywgaW5kZXgpO1xuICAvLyB9KTtcbn0iLCJpbXBvcnQgeyBjbGFzc0xpc3RTdXBwb3J0LCBoYXNDbGFzcyB9IGZyb20gJy4vaGFzQ2xhc3MuanMnO1xudmFyIGFkZENsYXNzID0gY2xhc3NMaXN0U3VwcG9ydCA/XG4gICAgZnVuY3Rpb24gKGVsLCBzdHIpIHtcbiAgICAgIGlmICghaGFzQ2xhc3MoZWwsICBzdHIpKSB7IGVsLmNsYXNzTGlzdC5hZGQoc3RyKTsgfVxuICAgIH0gOlxuICAgIGZ1bmN0aW9uIChlbCwgc3RyKSB7XG4gICAgICBpZiAoIWhhc0NsYXNzKGVsLCAgc3RyKSkgeyBlbC5jbGFzc05hbWUgKz0gJyAnICsgc3RyOyB9XG4gICAgfTtcblxuZXhwb3J0IHsgYWRkQ2xhc3MgfTsiLCJpbXBvcnQgeyBwYXNzaXZlT3B0aW9uIH0gZnJvbSAnLi9wYXNzaXZlT3B0aW9uLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50cyhlbCwgb2JqLCBwcmV2ZW50U2Nyb2xsaW5nKSB7XG4gIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgdmFyIG9wdGlvbiA9IFsndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnXS5pbmRleE9mKHByb3ApID49IDAgJiYgIXByZXZlbnRTY3JvbGxpbmcgPyBwYXNzaXZlT3B0aW9uIDogZmFsc2U7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihwcm9wLCBvYmpbcHJvcF0sIG9wdGlvbik7XG4gIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gYXJyYXlGcm9tTm9kZUxpc3QgKG5sKSB7XG4gIHZhciBhcnIgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBubC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBhcnIucHVzaChubFtpXSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn0iLCJ2YXIgd2luID0gd2luZG93O1xuXG5leHBvcnQgdmFyIGNhZiA9IHdpbi5jYW5jZWxBbmltYXRpb25GcmFtZVxuICB8fCB3aW4ubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfHwgZnVuY3Rpb24oaWQpeyBjbGVhclRpbWVvdXQoaWQpOyB9O1xuIiwiLy8gZ2V0IGNzcy1jYWxjIFxuLy8gQHJldHVybiAtIGZhbHNlIHwgY2FsYyB8IC13ZWJraXQtY2FsYyB8IC1tb3otY2FsY1xuLy8gQHVzYWdlIC0gdmFyIGNhbGMgPSBnZXRDYWxjKCk7IFxuaW1wb3J0IHsgZ2V0Qm9keSB9IGZyb20gJy4vZ2V0Qm9keS5qcyc7XG5pbXBvcnQgeyBzZXRGYWtlQm9keSB9IGZyb20gJy4vc2V0RmFrZUJvZHkuanMnO1xuaW1wb3J0IHsgcmVzZXRGYWtlQm9keSB9IGZyb20gJy4vcmVzZXRGYWtlQm9keS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjKCkge1xuICB2YXIgZG9jID0gZG9jdW1lbnQsIFxuICAgICAgYm9keSA9IGdldEJvZHkoKSxcbiAgICAgIGRvY092ZXJmbG93ID0gc2V0RmFrZUJvZHkoYm9keSksXG4gICAgICBkaXYgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksIFxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICB0cnkge1xuICAgIHZhciBzdHIgPSAnKDEwcHggKiAxMCknLFxuICAgICAgICB2YWxzID0gWydjYWxjJyArIHN0ciwgJy1tb3otY2FsYycgKyBzdHIsICctd2Via2l0LWNhbGMnICsgc3RyXSxcbiAgICAgICAgdmFsO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICB2YWwgPSB2YWxzW2ldO1xuICAgICAgZGl2LnN0eWxlLndpZHRoID0gdmFsO1xuICAgICAgaWYgKGRpdi5vZmZzZXRXaWR0aCA9PT0gMTAwKSB7IFxuICAgICAgICByZXN1bHQgPSB2YWwucmVwbGFjZShzdHIsICcnKTsgXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cbiAgXG4gIGJvZHkuZmFrZSA/IHJlc2V0RmFrZUJvZHkoYm9keSwgZG9jT3ZlcmZsb3cpIDogZGl2LnJlbW92ZSgpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU3RvcmFnZVZhbHVlICh2YWx1ZSkge1xuICByZXR1cm4gWyd0cnVlJywgJ2ZhbHNlJ10uaW5kZXhPZih2YWx1ZSkgPj0gMCA/IEpTT04ucGFyc2UodmFsdWUpIDogdmFsdWU7XG59IiwiZXhwb3J0IHZhciBjbGFzc0xpc3RTdXBwb3J0ID0gJ2NsYXNzTGlzdCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnXycpOyIsIi8vIGNyZWF0ZSBhbmQgYXBwZW5kIHN0eWxlIHNoZWV0XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3R5bGVTaGVldCAobWVkaWEsIG5vbmNlKSB7XG4gIC8vIENyZWF0ZSB0aGUgPHN0eWxlPiB0YWdcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAvLyBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dC9jc3NcIik7XG5cbiAgLy8gQWRkIGEgbWVkaWEgKGFuZC9vciBtZWRpYSBxdWVyeSkgaGVyZSBpZiB5b3UnZCBsaWtlIVxuICAvLyBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBcInNjcmVlblwiKVxuICAvLyBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTAyNHB4KVwiKVxuICBpZiAobWVkaWEpIHsgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpOyB9XG5cbiAgLy8gQWRkIG5vbmNlIGF0dHJpYnV0ZSBmb3IgQ29udGVudCBTZWN1cml0eSBQb2xpY3lcbiAgaWYgKG5vbmNlKSB7IHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTsgfVxuXG4gIC8vIFdlYktpdCBoYWNrIDooXG4gIC8vIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKTtcblxuICAvLyBBZGQgdGhlIDxzdHlsZT4gZWxlbWVudCB0byB0aGUgcGFnZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gIHJldHVybiBzdHlsZS5zaGVldCA/IHN0eWxlLnNoZWV0IDogc3R5bGUuc3R5bGVTaGVldDtcbn07IiwiZXhwb3J0IHZhciBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsImV4cG9ydCBmdW5jdGlvbiBFdmVudHMoKSB7XG4gIHJldHVybiB7XG4gICAgdG9waWNzOiB7fSxcbiAgICBvbjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pIHtcbiAgICAgIHRoaXMudG9waWNzW2V2ZW50TmFtZV0gPSB0aGlzLnRvcGljc1tldmVudE5hbWVdIHx8IFtdO1xuICAgICAgdGhpcy50b3BpY3NbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgICB9LFxuICAgIG9mZjogZnVuY3Rpb24oZXZlbnROYW1lLCBmbikge1xuICAgICAgaWYgKHRoaXMudG9waWNzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRvcGljc1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMudG9waWNzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gICAgICAgICAgICB0aGlzLnRvcGljc1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZW1pdDogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgZGF0YS50eXBlID0gZXZlbnROYW1lO1xuICAgICAgaWYgKHRoaXMudG9waWNzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgdGhpcy50b3BpY3NbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgZm4oZGF0YSwgZXZlbnROYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJleHBvcnQgZnVuY3Rpb24gZXh0ZW5kKCkge1xuICB2YXIgb2JqLCBuYW1lLCBjb3B5LFxuICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWzBdIHx8IHt9LFxuICAgICAgaSA9IDEsXG4gICAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXG4gIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKG9iaiA9IGFyZ3VtZW50c1tpXSkgIT09IG51bGwpIHtcbiAgICAgIGZvciAobmFtZSBpbiBvYmopIHtcbiAgICAgICAgY29weSA9IG9ialtuYW1lXTtcblxuICAgICAgICBpZiAodGFyZ2V0ID09PSBjb3B5KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSBpZiAoY29weSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGFyZ2V0W25hbWVdID0gY29weTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufSIsIi8vIGh0dHBzOi8vdG9kZG1vdHRvLmNvbS9kaXRjaC10aGUtYXJyYXktZm9yZWFjaC1jYWxsLW5vZGVsaXN0LWhhY2svXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaCAoYXJyLCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY2FsbGJhY2suY2FsbChzY29wZSwgYXJyW2ldLCBpKTtcbiAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyKGVsLCBhdHRyKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoYXR0cik7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldEJvZHkgKCkge1xuICB2YXIgZG9jID0gZG9jdW1lbnQsXG4gICAgICBib2R5ID0gZG9jLmJvZHk7XG5cbiAgaWYgKCFib2R5KSB7XG4gICAgYm9keSA9IGRvYy5jcmVhdGVFbGVtZW50KCdib2R5Jyk7XG4gICAgYm9keS5mYWtlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBib2R5O1xufSIsImV4cG9ydCBmdW5jdGlvbiBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkge1xuICB2YXIgcnVsZSA9ICgnaW5zZXJ0UnVsZScgaW4gc2hlZXQpID8gc2hlZXQuY3NzUnVsZXMgOiBzaGVldC5ydWxlcztcbiAgcmV0dXJuIHJ1bGUubGVuZ3RoO1xufSIsIi8vIGdldCB0cmFuc2l0aW9uZW5kLCBhbmltYXRpb25lbmQgYmFzZWQgb24gdHJhbnNpdGlvbkR1cmF0aW9uXG4vLyBAcHJvcGluOiBzdHJpbmdcbi8vIEBwcm9wT3V0OiBzdHJpbmcsIGZpcnN0LWxldHRlciB1cHBlcmNhc2Vcbi8vIFVzYWdlOiBnZXRFbmRQcm9wZXJ0eSgnV2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uJywgJ1RyYW5zaXRpb24nKSA9PiB3ZWJraXRUcmFuc2l0aW9uRW5kXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW5kUHJvcGVydHkocHJvcEluLCBwcm9wT3V0KSB7XG4gIHZhciBlbmRQcm9wID0gZmFsc2U7XG4gIGlmICgvXldlYmtpdC8udGVzdChwcm9wSW4pKSB7XG4gICAgZW5kUHJvcCA9ICd3ZWJraXQnICsgcHJvcE91dCArICdFbmQnO1xuICB9IGVsc2UgaWYgKC9eTy8udGVzdChwcm9wSW4pKSB7XG4gICAgZW5kUHJvcCA9ICdvJyArIHByb3BPdXQgKyAnRW5kJztcbiAgfSBlbHNlIGlmIChwcm9wSW4pIHtcbiAgICBlbmRQcm9wID0gcHJvcE91dC50b0xvd2VyQ2FzZSgpICsgJ2VuZCc7XG4gIH1cbiAgcmV0dXJuIGVuZFByb3A7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldFNsaWRlSWQoKSB7XG4gIHZhciBpZCA9IHdpbmRvdy50bnNJZDtcbiAgd2luZG93LnRuc0lkID0gIWlkID8gMSA6IGlkICsgMTtcbiAgXG4gIHJldHVybiAndG5zJyArIHdpbmRvdy50bnNJZDtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hEaXJlY3Rpb24oYW5nbGUsIHJhbmdlKSB7XG4gIHZhciBkaXJlY3Rpb24gPSBmYWxzZSxcbiAgICAgIGdhcCA9IE1hdGguYWJzKDkwIC0gTWF0aC5hYnMoYW5nbGUpKTtcbiAgICAgIFxuICBpZiAoZ2FwID49IDkwIC0gcmFuZ2UpIHtcbiAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIH0gZWxzZSBpZiAoZ2FwIDw9IHJhbmdlKSB7XG4gICAgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb247XG59IiwiaW1wb3J0IHsgZ2V0Qm9keSB9IGZyb20gJy4vZ2V0Qm9keS5qcyc7XG5pbXBvcnQgeyBzZXRGYWtlQm9keSB9IGZyb20gJy4vc2V0RmFrZUJvZHkuanMnO1xuaW1wb3J0IHsgcmVzZXRGYWtlQm9keSB9IGZyb20gJy4vcmVzZXRGYWtlQm9keS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXMzRFRyYW5zZm9ybXModGYpe1xuICBpZiAoIXRmKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7IHJldHVybiBmYWxzZTsgfVxuICBcbiAgdmFyIGRvYyA9IGRvY3VtZW50LFxuICAgICAgYm9keSA9IGdldEJvZHkoKSxcbiAgICAgIGRvY092ZXJmbG93ID0gc2V0RmFrZUJvZHkoYm9keSksXG4gICAgICBlbCA9IGRvYy5jcmVhdGVFbGVtZW50KCdwJyksXG4gICAgICBoYXMzZCxcbiAgICAgIGNzc1RGID0gdGYubGVuZ3RoID4gOSA/ICctJyArIHRmLnNsaWNlKDAsIC05KS50b0xvd2VyQ2FzZSgpICsgJy0nIDogJyc7XG5cbiAgY3NzVEYgKz0gJ3RyYW5zZm9ybSc7XG5cbiAgLy8gQWRkIGl0IHRvIHRoZSBib2R5IHRvIGdldCB0aGUgY29tcHV0ZWQgc3R5bGVcbiAgYm9keS5pbnNlcnRCZWZvcmUoZWwsIG51bGwpO1xuXG4gIGVsLnN0eWxlW3RmXSA9ICd0cmFuc2xhdGUzZCgxcHgsMXB4LDFweCknO1xuICBoYXMzZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1RGKTtcblxuICBib2R5LmZha2UgPyByZXNldEZha2VCb2R5KGJvZHksIGRvY092ZXJmbG93KSA6IGVsLnJlbW92ZSgpO1xuXG4gIHJldHVybiAoaGFzM2QgIT09IHVuZGVmaW5lZCAmJiBoYXMzZC5sZW5ndGggPiAwICYmIGhhczNkICE9PSBcIm5vbmVcIik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFzQXR0cihlbCwgYXR0cikge1xuICByZXR1cm4gZWwuaGFzQXR0cmlidXRlKGF0dHIpO1xufSIsImltcG9ydCB7IGNsYXNzTGlzdFN1cHBvcnQgfSBmcm9tICcuL2NsYXNzTGlzdFN1cHBvcnQuanMnO1xuXG52YXIgaGFzQ2xhc3MgPSBjbGFzc0xpc3RTdXBwb3J0ID9cbiAgICBmdW5jdGlvbiAoZWwsIHN0cikgeyByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHN0cik7IH0gOlxuICAgIGZ1bmN0aW9uIChlbCwgc3RyKSB7IHJldHVybiBlbC5jbGFzc05hbWUuaW5kZXhPZihzdHIpID49IDA7IH07XG5cbmV4cG9ydCB7IGNsYXNzTGlzdFN1cHBvcnQsIGhhc0NsYXNzIH07IiwiZXhwb3J0IGZ1bmN0aW9uIGhpZGVFbGVtZW50KGVsLCBmb3JjZUhpZGUpIHtcbiAgaWYgKGVsLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykgeyBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZUxpc3QoZWwpIHtcbiAgLy8gT25seSBOb2RlTGlzdCBoYXMgdGhlIFwiaXRlbSgpXCIgZnVuY3Rpb25cbiAgcmV0dXJuIHR5cGVvZiBlbC5pdGVtICE9PSBcInVuZGVmaW5lZFwiOyBcbn0iLCJleHBvcnQgZnVuY3Rpb24gaXNWaXNpYmxlKGVsKSB7XG4gIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZGlzcGxheSAhPT0gJ25vbmUnO1xufSIsImV4cG9ydCBmdW5jdGlvbiBqc1RyYW5zZm9ybShlbGVtZW50LCBhdHRyLCBwcmVmaXgsIHBvc3RmaXgsIHRvLCBkdXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgdmFyIHRpY2sgPSBNYXRoLm1pbihkdXJhdGlvbiwgMTApLFxuICAgICAgdW5pdCA9ICh0by5pbmRleE9mKCclJykgPj0gMCkgPyAnJScgOiAncHgnLFxuICAgICAgdG8gPSB0by5yZXBsYWNlKHVuaXQsICcnKSxcbiAgICAgIGZyb20gPSBOdW1iZXIoZWxlbWVudC5zdHlsZVthdHRyXS5yZXBsYWNlKHByZWZpeCwgJycpLnJlcGxhY2UocG9zdGZpeCwgJycpLnJlcGxhY2UodW5pdCwgJycpKSxcbiAgICAgIHBvc2l0aW9uVGljayA9ICh0byAtIGZyb20pIC8gZHVyYXRpb24gKiB0aWNrLFxuICAgICAgcnVubmluZztcblxuICBzZXRUaW1lb3V0KG1vdmVFbGVtZW50LCB0aWNrKTtcbiAgZnVuY3Rpb24gbW92ZUVsZW1lbnQoKSB7XG4gICAgZHVyYXRpb24gLT0gdGljaztcbiAgICBmcm9tICs9IHBvc2l0aW9uVGljaztcbiAgICBlbGVtZW50LnN0eWxlW2F0dHJdID0gcHJlZml4ICsgZnJvbSArIHVuaXQgKyBwb3N0Zml4O1xuICAgIGlmIChkdXJhdGlvbiA+IDApIHsgXG4gICAgICBzZXRUaW1lb3V0KG1vdmVFbGVtZW50LCB0aWNrKTsgXG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgZ2V0Qm9keSB9IGZyb20gJy4vZ2V0Qm9keS5qcyc7XG5pbXBvcnQgeyBzZXRGYWtlQm9keSB9IGZyb20gJy4vc2V0RmFrZUJvZHkuanMnO1xuaW1wb3J0IHsgcmVzZXRGYWtlQm9keSB9IGZyb20gJy4vcmVzZXRGYWtlQm9keS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYXF1ZXJ5U3VwcG9ydCAoKSB7XG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYSB8fCB3aW5kb3cubXNNYXRjaE1lZGlhKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIHZhciBkb2MgPSBkb2N1bWVudCxcbiAgICAgIGJvZHkgPSBnZXRCb2R5KCksXG4gICAgICBkb2NPdmVyZmxvdyA9IHNldEZha2VCb2R5KGJvZHkpLFxuICAgICAgZGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgc3R5bGUgPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKSxcbiAgICAgIHJ1bGUgPSAnQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDoxcHgpey50bnMtbXEtdGVzdHtwb3NpdGlvbjphYnNvbHV0ZX19JyxcbiAgICAgIHBvc2l0aW9uO1xuXG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICBkaXYuY2xhc3NOYW1lID0gJ3Rucy1tcS10ZXN0JztcblxuICBib2R5LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcnVsZTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUocnVsZSkpO1xuICB9XG5cbiAgcG9zaXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRpdikucG9zaXRpb24gOiBkaXYuY3VycmVudFN0eWxlWydwb3NpdGlvbiddO1xuXG4gIGJvZHkuZmFrZSA/IHJlc2V0RmFrZUJvZHkoYm9keSwgZG9jT3ZlcmZsb3cpIDogZGl2LnJlbW92ZSgpO1xuXG4gIHJldHVybiBwb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiO1xufVxuIiwiLy8gVGVzdCB2aWEgYSBnZXR0ZXIgaW4gdGhlIG9wdGlvbnMgb2JqZWN0IHRvIHNlZSBpZiB0aGUgcGFzc2l2ZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZFxudmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xudHJ5IHtcbiAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLCBudWxsLCBvcHRzKTtcbn0gY2F0Y2ggKGUpIHt9XG5leHBvcnQgdmFyIHBhc3NpdmVPcHRpb24gPSBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlOyIsIi8vIGdldCBzdWJwaXhlbCBzdXBwb3J0IHZhbHVlXG4vLyBAcmV0dXJuIC0gYm9vbGVhblxuaW1wb3J0IHsgZ2V0Qm9keSB9IGZyb20gJy4vZ2V0Qm9keS5qcyc7XG5pbXBvcnQgeyBzZXRGYWtlQm9keSB9IGZyb20gJy4vc2V0RmFrZUJvZHkuanMnO1xuaW1wb3J0IHsgcmVzZXRGYWtlQm9keSB9IGZyb20gJy4vcmVzZXRGYWtlQm9keS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJjZW50YWdlTGF5b3V0KCkge1xuICAvLyBjaGVjayBzdWJwaXhlbCBsYXlvdXQgc3VwcG9ydGluZ1xuICB2YXIgZG9jID0gZG9jdW1lbnQsXG4gICAgICBib2R5ID0gZ2V0Qm9keSgpLFxuICAgICAgZG9jT3ZlcmZsb3cgPSBzZXRGYWtlQm9keShib2R5KSxcbiAgICAgIHdyYXBwZXIgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBvdXRlciA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIHN0ciA9ICcnLFxuICAgICAgY291bnQgPSA3MCxcbiAgICAgIHBlclBhZ2UgPSAzLFxuICAgICAgc3VwcG9ydGVkID0gZmFsc2U7XG5cbiAgd3JhcHBlci5jbGFzc05hbWUgPSBcInRucy10LXN1YnAyXCI7XG4gIG91dGVyLmNsYXNzTmFtZSA9IFwidG5zLXQtY3RcIjtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBzdHIgKz0gJzxkaXY+PC9kaXY+JztcbiAgfVxuXG4gIG91dGVyLmlubmVySFRNTCA9IHN0cjtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChvdXRlcik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgc3VwcG9ydGVkID0gTWF0aC5hYnMod3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gb3V0ZXIuY2hpbGRyZW5bY291bnQgLSBwZXJQYWdlXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSA8IDI7XG5cbiAgYm9keS5mYWtlID8gcmVzZXRGYWtlQm9keShib2R5LCBkb2NPdmVyZmxvdykgOiB3cmFwcGVyLnJlbW92ZSgpO1xuXG4gIHJldHVybiBzdXBwb3J0ZWQ7XG59IiwidmFyIHdpbiA9IHdpbmRvdztcblxuZXhwb3J0IHZhciByYWYgPSB3aW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbi53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luLm1velJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB8fCB3aW4ubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgZnVuY3Rpb24oY2IpIHsgcmV0dXJuIHNldFRpbWVvdXQoY2IsIDE2KTsgfTtcbiIsImltcG9ydCB7IGlzTm9kZUxpc3QgfSBmcm9tIFwiLi9pc05vZGVMaXN0LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBdHRycyhlbHMsIGF0dHJzKSB7XG4gIGVscyA9IChpc05vZGVMaXN0KGVscykgfHwgZWxzIGluc3RhbmNlb2YgQXJyYXkpID8gZWxzIDogW2Vsc107XG4gIGF0dHJzID0gKGF0dHJzIGluc3RhbmNlb2YgQXJyYXkpID8gYXR0cnMgOiBbYXR0cnNdO1xuXG4gIHZhciBhdHRyTGVuZ3RoID0gYXR0cnMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gZWxzLmxlbmd0aDsgaS0tOykge1xuICAgIGZvciAodmFyIGogPSBhdHRyTGVuZ3RoOyBqLS07KSB7XG4gICAgICBlbHNbaV0ucmVtb3ZlQXR0cmlidXRlKGF0dHJzW2pdKTtcbiAgICB9XG4gIH1cbn0iLCIvLyBjcm9zcyBicm93c2VycyBhZGRSdWxlIG1ldGhvZFxuaW1wb3J0IHsgcmFmIH0gZnJvbSAnLi9yYWYuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNTU1J1bGUoc2hlZXQsIGluZGV4KSB7XG4gIC8vIHJldHVybiByYWYoZnVuY3Rpb24oKSB7XG4gICAgJ2RlbGV0ZVJ1bGUnIGluIHNoZWV0ID9cbiAgICAgIHNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpIDpcbiAgICAgIHNoZWV0LnJlbW92ZVJ1bGUoaW5kZXgpO1xuICAvLyB9KTtcbn0iLCJpbXBvcnQgeyBjbGFzc0xpc3RTdXBwb3J0LCBoYXNDbGFzcyB9IGZyb20gJy4vaGFzQ2xhc3MuanMnO1xudmFyIHJlbW92ZUNsYXNzID0gY2xhc3NMaXN0U3VwcG9ydCA/XG4gICAgZnVuY3Rpb24gKGVsLCBzdHIpIHtcbiAgICAgIGlmIChoYXNDbGFzcyhlbCwgIHN0cikpIHsgZWwuY2xhc3NMaXN0LnJlbW92ZShzdHIpOyB9XG4gICAgfSA6XG4gICAgZnVuY3Rpb24gKGVsLCBzdHIpIHtcbiAgICAgIGlmIChoYXNDbGFzcyhlbCwgc3RyKSkgeyBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShzdHIsICcnKTsgfVxuICAgIH07XG5cbmV4cG9ydCB7IHJlbW92ZUNsYXNzIH07IiwiaW1wb3J0IHsgcGFzc2l2ZU9wdGlvbiB9IGZyb20gJy4vcGFzc2l2ZU9wdGlvbi5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFdmVudHMoZWwsIG9iaikge1xuICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgIHZhciBvcHRpb24gPSBbJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJ10uaW5kZXhPZihwcm9wKSA+PSAwID8gcGFzc2l2ZU9wdGlvbiA6IGZhbHNlO1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIocHJvcCwgb2JqW3Byb3BdLCBvcHRpb24pO1xuICB9XG59IiwiaW1wb3J0IHsgZG9jRWxlbWVudCB9IGZyb20gJy4vZG9jRWxlbWVudC5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZha2VCb2R5IChib2R5LCBkb2NPdmVyZmxvdykge1xuICBpZiAoYm9keS5mYWtlKSB7XG4gICAgYm9keS5yZW1vdmUoKTtcbiAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gZG9jT3ZlcmZsb3c7XG4gICAgLy8gVHJpZ2dlciBsYXlvdXQgc28ga2luZXRpYyBzY3JvbGxpbmcgaXNuJ3QgZGlzYWJsZWQgaW4gaU9TNitcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBkb2NFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgfVxufSIsImltcG9ydCB7IGlzTm9kZUxpc3QgfSBmcm9tIFwiLi9pc05vZGVMaXN0LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRycyhlbHMsIGF0dHJzKSB7XG4gIGVscyA9IChpc05vZGVMaXN0KGVscykgfHwgZWxzIGluc3RhbmNlb2YgQXJyYXkpID8gZWxzIDogW2Vsc107XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXR0cnMpICE9PSAnW29iamVjdCBPYmplY3RdJykgeyByZXR1cm47IH1cblxuICBmb3IgKHZhciBpID0gZWxzLmxlbmd0aDsgaS0tOykge1xuICAgIGZvcih2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgICBlbHNbaV0uc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgZG9jRWxlbWVudCB9IGZyb20gJy4vZG9jRWxlbWVudC5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGYWtlQm9keSAoYm9keSkge1xuICB2YXIgZG9jT3ZlcmZsb3cgPSAnJztcbiAgaWYgKGJvZHkuZmFrZSkge1xuICAgIGRvY092ZXJmbG93ID0gZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdztcbiAgICAvL2F2b2lkIGNyYXNoaW5nIElFOCwgaWYgYmFja2dyb3VuZCBpbWFnZSBpcyB1c2VkXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgLy9TYWZhcmkgNS4xMy81LjEuNCBPU1ggc3RvcHMgbG9hZGluZyBpZiA6Oi13ZWJraXQtc2Nyb2xsYmFyIGlzIHVzZWQgYW5kIHNjcm9sbGJhcnMgYXJlIHZpc2libGVcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGRvY0VsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG4gIH1cblxuICByZXR1cm4gZG9jT3ZlcmZsb3c7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsU3RvcmFnZShzdG9yYWdlLCBrZXksIHZhbHVlLCBhY2Nlc3MpIHtcbiAgaWYgKGFjY2Vzcykge1xuICAgIHRyeSB7IHN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTsgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gdmFsdWU7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNob3dFbGVtZW50KGVsLCBmb3JjZUhpZGUpIHtcbiAgaWYgKGVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykgeyBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7IH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUgKHksIHgpIHtcbiAgcmV0dXJuIE1hdGguYXRhbjIoeSwgeCkgKiAoMTgwIC8gTWF0aC5QSSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHdoaWNoUHJvcGVydHkocHJvcHMpe1xuICBpZiAodHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBhcnIgPSBbcHJvcHNdLFxuICAgICAgICBQcm9wcyA9IHByb3BzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcHMuc3Vic3RyKDEpLFxuICAgICAgICBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdtcycsICdPJ107XG4gICAgICAgIFxuICAgIHByZWZpeGVzLmZvckVhY2goZnVuY3Rpb24ocHJlZml4KSB7XG4gICAgICBpZiAocHJlZml4ICE9PSAnbXMnIHx8IHByb3BzID09PSAndHJhbnNmb3JtJykge1xuICAgICAgICBhcnIucHVzaChwcmVmaXggKyBQcm9wcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcm9wcyA9IGFycjtcbiAgfVxuXG4gIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50JyksXG4gICAgICBsZW4gPSBwcm9wcy5sZW5ndGg7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKyl7XG4gICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICBpZiggZWwuc3R5bGVbcHJvcF0gIT09IHVuZGVmaW5lZCApeyByZXR1cm4gcHJvcDsgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlOyAvLyBleHBsaWNpdCBmb3IgaWU5LVxufVxuIiwiLy8gT2JqZWN0LmtleXNcbmlmICghT2JqZWN0LmtleXMpIHtcbiAgT2JqZWN0LmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgbmFtZSkpIHtcbiAgICAgICAga2V5cy5wdXNoKG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbiAgfTtcbn1cblxuLy8gQ2hpbGROb2RlLnJlbW92ZVxuaWYoIShcInJlbW92ZVwiIGluIEVsZW1lbnQucHJvdG90eXBlKSl7XG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCl7XG4gICAgaWYodGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgfVxuICB9O1xufVxuXG5pbXBvcnQgeyByYWYgfSBmcm9tICcuL2hlbHBlcnMvcmFmLmpzJztcbmltcG9ydCB7IGNhZiB9IGZyb20gJy4vaGVscGVycy9jYWYuanMnO1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi9oZWxwZXJzL2V4dGVuZC5qcyc7XG5pbXBvcnQgeyBjaGVja1N0b3JhZ2VWYWx1ZSB9IGZyb20gJy4vaGVscGVycy9jaGVja1N0b3JhZ2VWYWx1ZS5qcyc7XG5pbXBvcnQgeyBzZXRMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2hlbHBlcnMvc2V0TG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCB7IGdldFNsaWRlSWQgfSBmcm9tICcuL2hlbHBlcnMvZ2V0U2xpZGVJZC5qcyc7XG5pbXBvcnQgeyBjYWxjIH0gZnJvbSAnLi9oZWxwZXJzL2NhbGMuanMnO1xuaW1wb3J0IHsgcGVyY2VudGFnZUxheW91dCB9IGZyb20gJy4vaGVscGVycy9wZXJjZW50YWdlTGF5b3V0LmpzJztcbmltcG9ydCB7IG1lZGlhcXVlcnlTdXBwb3J0IH0gZnJvbSAnLi9oZWxwZXJzL21lZGlhcXVlcnlTdXBwb3J0LmpzJztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlU2hlZXQgfSBmcm9tICcuL2hlbHBlcnMvY3JlYXRlU3R5bGVTaGVldC5qcyc7XG5pbXBvcnQgeyBhZGRDU1NSdWxlIH0gZnJvbSAnLi9oZWxwZXJzL2FkZENTU1J1bGUuanMnO1xuaW1wb3J0IHsgcmVtb3ZlQ1NTUnVsZSB9IGZyb20gJy4vaGVscGVycy9yZW1vdmVDU1NSdWxlLmpzJztcbmltcG9ydCB7IGdldENzc1J1bGVzTGVuZ3RoIH0gZnJvbSAnLi9oZWxwZXJzL2dldENzc1J1bGVzTGVuZ3RoLmpzJztcbmltcG9ydCB7IHRvRGVncmVlIH0gZnJvbSAnLi9oZWxwZXJzL3RvRGVncmVlLmpzJztcbmltcG9ydCB7IGdldFRvdWNoRGlyZWN0aW9uIH0gZnJvbSAnLi9oZWxwZXJzL2dldFRvdWNoRGlyZWN0aW9uLmpzJztcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tICcuL2hlbHBlcnMvZm9yRWFjaC5qcyc7XG5pbXBvcnQgeyBoYXNDbGFzcyB9IGZyb20gJy4vaGVscGVycy9oYXNDbGFzcy5qcyc7XG5pbXBvcnQgeyBhZGRDbGFzcyB9IGZyb20gJy4vaGVscGVycy9hZGRDbGFzcy5qcyc7XG5pbXBvcnQgeyByZW1vdmVDbGFzcyB9IGZyb20gJy4vaGVscGVycy9yZW1vdmVDbGFzcy5qcyc7XG5pbXBvcnQgeyBoYXNBdHRyIH0gZnJvbSAnLi9oZWxwZXJzL2hhc0F0dHIuanMnO1xuaW1wb3J0IHsgZ2V0QXR0ciB9IGZyb20gJy4vaGVscGVycy9nZXRBdHRyLmpzJztcbmltcG9ydCB7IHNldEF0dHJzIH0gZnJvbSAnLi9oZWxwZXJzL3NldEF0dHJzLmpzJztcbmltcG9ydCB7IHJlbW92ZUF0dHJzIH0gZnJvbSAnLi9oZWxwZXJzL3JlbW92ZUF0dHJzLmpzJztcbmltcG9ydCB7IGFycmF5RnJvbU5vZGVMaXN0IH0gZnJvbSAnLi9oZWxwZXJzL2FycmF5RnJvbU5vZGVMaXN0LmpzJztcbmltcG9ydCB7IGhpZGVFbGVtZW50IH0gZnJvbSAnLi9oZWxwZXJzL2hpZGVFbGVtZW50LmpzJztcbmltcG9ydCB7IHNob3dFbGVtZW50IH0gZnJvbSAnLi9oZWxwZXJzL3Nob3dFbGVtZW50LmpzJztcbmltcG9ydCB7IGlzVmlzaWJsZSB9IGZyb20gJy4vaGVscGVycy9pc1Zpc2libGUuanMnO1xuaW1wb3J0IHsgd2hpY2hQcm9wZXJ0eSB9IGZyb20gJy4vaGVscGVycy93aGljaFByb3BlcnR5LmpzJztcbmltcG9ydCB7IGhhczNEVHJhbnNmb3JtcyB9IGZyb20gJy4vaGVscGVycy9oYXMzRFRyYW5zZm9ybXMuanMnO1xuaW1wb3J0IHsgZ2V0RW5kUHJvcGVydHkgfSBmcm9tICcuL2hlbHBlcnMvZ2V0RW5kUHJvcGVydHkuanMnO1xuaW1wb3J0IHsgYWRkRXZlbnRzIH0gZnJvbSAnLi9oZWxwZXJzL2FkZEV2ZW50cy5qcyc7XG5pbXBvcnQgeyByZW1vdmVFdmVudHMgfSBmcm9tICcuL2hlbHBlcnMvcmVtb3ZlRXZlbnRzLmpzJztcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4vaGVscGVycy9ldmVudHMuanMnO1xuaW1wb3J0IHsganNUcmFuc2Zvcm0gfSBmcm9tICcuL2hlbHBlcnMvanNUcmFuc2Zvcm0uanMnO1xuXG5leHBvcnQgdmFyIHRucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IGV4dGVuZCh7XG4gICAgY29udGFpbmVyOiAnLnNsaWRlcicsXG4gICAgbW9kZTogJ2Nhcm91c2VsJyxcbiAgICBheGlzOiAnaG9yaXpvbnRhbCcsXG4gICAgaXRlbXM6IDEsXG4gICAgZ3V0dGVyOiAwLFxuICAgIGVkZ2VQYWRkaW5nOiAwLFxuICAgIGZpeGVkV2lkdGg6IGZhbHNlLFxuICAgIGF1dG9XaWR0aDogZmFsc2UsXG4gICAgdmlld3BvcnRNYXg6IGZhbHNlLFxuICAgIHNsaWRlQnk6IDEsXG4gICAgY2VudGVyOiBmYWxzZSxcbiAgICBjb250cm9sczogdHJ1ZSxcbiAgICBjb250cm9sc1Bvc2l0aW9uOiAndG9wJyxcbiAgICBjb250cm9sc1RleHQ6IFsncHJldicsICduZXh0J10sXG4gICAgY29udHJvbHNDb250YWluZXI6IGZhbHNlLFxuICAgIHByZXZCdXR0b246IGZhbHNlLFxuICAgIG5leHRCdXR0b246IGZhbHNlLFxuICAgIG5hdjogdHJ1ZSxcbiAgICBuYXZQb3NpdGlvbjogJ3RvcCcsXG4gICAgbmF2Q29udGFpbmVyOiBmYWxzZSxcbiAgICBuYXZBc1RodW1ibmFpbHM6IGZhbHNlLFxuICAgIGFycm93S2V5czogZmFsc2UsXG4gICAgc3BlZWQ6IDMwMCxcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgYXV0b3BsYXlQb3NpdGlvbjogJ3RvcCcsXG4gICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAgIGF1dG9wbGF5RGlyZWN0aW9uOiAnZm9yd2FyZCcsXG4gICAgYXV0b3BsYXlUZXh0OiBbJ3N0YXJ0JywgJ3N0b3AnXSxcbiAgICBhdXRvcGxheUhvdmVyUGF1c2U6IGZhbHNlLFxuICAgIGF1dG9wbGF5QnV0dG9uOiBmYWxzZSxcbiAgICBhdXRvcGxheUJ1dHRvbk91dHB1dDogdHJ1ZSxcbiAgICBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5OiB0cnVlLFxuICAgIGFuaW1hdGVJbjogJ3Rucy1mYWRlSW4nLFxuICAgIGFuaW1hdGVPdXQ6ICd0bnMtZmFkZU91dCcsXG4gICAgYW5pbWF0ZU5vcm1hbDogJ3Rucy1ub3JtYWwnLFxuICAgIGFuaW1hdGVEZWxheTogZmFsc2UsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICByZXdpbmQ6IGZhbHNlLFxuICAgIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAgIHJlc3BvbnNpdmU6IGZhbHNlLFxuICAgIGxhenlsb2FkOiBmYWxzZSxcbiAgICBsYXp5bG9hZFNlbGVjdG9yOiAnLnRucy1sYXp5LWltZycsXG4gICAgdG91Y2g6IHRydWUsXG4gICAgbW91c2VEcmFnOiBmYWxzZSxcbiAgICBzd2lwZUFuZ2xlOiAxNSxcbiAgICBuZXN0ZWQ6IGZhbHNlLFxuICAgIHByZXZlbnRBY3Rpb25XaGVuUnVubmluZzogZmFsc2UsXG4gICAgcHJldmVudFNjcm9sbE9uVG91Y2g6IGZhbHNlLFxuICAgIGZyZWV6YWJsZTogdHJ1ZSxcbiAgICBvbkluaXQ6IGZhbHNlLFxuICAgIHVzZUxvY2FsU3RvcmFnZTogdHJ1ZSxcbiAgICBub25jZTogZmFsc2VcbiAgfSwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgdmFyIGRvYyA9IGRvY3VtZW50LFxuICAgICAgd2luID0gd2luZG93LFxuICAgICAgS0VZUyA9IHtcbiAgICAgICAgRU5URVI6IDEzLFxuICAgICAgICBTUEFDRTogMzIsXG4gICAgICAgIExFRlQ6IDM3LFxuICAgICAgICBSSUdIVDogMzlcbiAgICAgIH0sXG4gICAgICB0bnNTdG9yYWdlID0ge30sXG4gICAgICBsb2NhbFN0b3JhZ2VBY2Nlc3MgPSBvcHRpb25zLnVzZUxvY2FsU3RvcmFnZTtcblxuICBpZiAobG9jYWxTdG9yYWdlQWNjZXNzKSB7XG4gICAgLy8gY2hlY2sgYnJvd3NlciB2ZXJzaW9uIGFuZCBsb2NhbCBzdG9yYWdlIGFjY2Vzc1xuICAgIHZhciBicm93c2VySW5mbyA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgdmFyIHVpZCA9IG5ldyBEYXRlO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRuc1N0b3JhZ2UgPSB3aW4ubG9jYWxTdG9yYWdlO1xuICAgICAgaWYgKHRuc1N0b3JhZ2UpIHtcbiAgICAgICAgdG5zU3RvcmFnZS5zZXRJdGVtKHVpZCwgdWlkKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlQWNjZXNzID0gdG5zU3RvcmFnZS5nZXRJdGVtKHVpZCkgPT0gdWlkO1xuICAgICAgICB0bnNTdG9yYWdlLnJlbW92ZUl0ZW0odWlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZUFjY2VzcyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2VBY2Nlc3MpIHsgdG5zU3RvcmFnZSA9IHt9OyB9XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VBY2Nlc3MgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobG9jYWxTdG9yYWdlQWNjZXNzKSB7XG4gICAgICAvLyByZW1vdmUgc3RvcmFnZSB3aGVuIGJyb3dzZXIgdmVyc2lvbiBjaGFuZ2VzXG4gICAgICBpZiAodG5zU3RvcmFnZVsndG5zQXBwJ10gJiYgdG5zU3RvcmFnZVsndG5zQXBwJ10gIT09IGJyb3dzZXJJbmZvKSB7XG4gICAgICAgIFsndEMnLCAndFBMJywgJ3RNUScsICd0VGYnLCAndDNEJywgJ3RURHUnLCAndFREZScsICd0QUR1JywgJ3RBRGUnLCAndFRFJywgJ3RBRSddLmZvckVhY2goZnVuY3Rpb24oaXRlbSkgeyB0bnNTdG9yYWdlLnJlbW92ZUl0ZW0oaXRlbSk7IH0pO1xuICAgICAgfVxuICAgICAgLy8gdXBkYXRlIGJyb3dzZXJJbmZvXG4gICAgICBsb2NhbFN0b3JhZ2VbJ3Ruc0FwcCddID0gYnJvd3NlckluZm87XG4gICAgfVxuICB9XG5cbiAgdmFyIENBTEMgPSB0bnNTdG9yYWdlWyd0QyddID8gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndEMnXSkgOiBzZXRMb2NhbFN0b3JhZ2UodG5zU3RvcmFnZSwgJ3RDJywgY2FsYygpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgICAgUEVSQ0VOVEFHRUxBWU9VVCA9IHRuc1N0b3JhZ2VbJ3RQTCddID8gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndFBMJ10pIDogc2V0TG9jYWxTdG9yYWdlKHRuc1N0b3JhZ2UsICd0UEwnLCBwZXJjZW50YWdlTGF5b3V0KCksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgICBDU1NNUSA9IHRuc1N0b3JhZ2VbJ3RNUSddID8gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndE1RJ10pIDogc2V0TG9jYWxTdG9yYWdlKHRuc1N0b3JhZ2UsICd0TVEnLCBtZWRpYXF1ZXJ5U3VwcG9ydCgpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgICAgVFJBTlNGT1JNID0gdG5zU3RvcmFnZVsndFRmJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0VGYnXSkgOiBzZXRMb2NhbFN0b3JhZ2UodG5zU3RvcmFnZSwgJ3RUZicsIHdoaWNoUHJvcGVydHkoJ3RyYW5zZm9ybScpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgICAgSEFTM0RUUkFOU0ZPUk1TID0gdG5zU3RvcmFnZVsndDNEJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0M0QnXSkgOiBzZXRMb2NhbFN0b3JhZ2UodG5zU3RvcmFnZSwgJ3QzRCcsIGhhczNEVHJhbnNmb3JtcyhUUkFOU0ZPUk0pLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgICAgVFJBTlNJVElPTkRVUkFUSU9OID0gdG5zU3RvcmFnZVsndFREdSddID8gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndFREdSddKSA6IHNldExvY2FsU3RvcmFnZSh0bnNTdG9yYWdlLCAndFREdScsIHdoaWNoUHJvcGVydHkoJ3RyYW5zaXRpb25EdXJhdGlvbicpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgICAgVFJBTlNJVElPTkRFTEFZID0gdG5zU3RvcmFnZVsndFREZSddID8gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndFREZSddKSA6IHNldExvY2FsU3RvcmFnZSh0bnNTdG9yYWdlLCAndFREZScsIHdoaWNoUHJvcGVydHkoJ3RyYW5zaXRpb25EZWxheScpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgICAgQU5JTUFUSU9ORFVSQVRJT04gPSB0bnNTdG9yYWdlWyd0QUR1J10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0QUR1J10pIDogc2V0TG9jYWxTdG9yYWdlKHRuc1N0b3JhZ2UsICd0QUR1Jywgd2hpY2hQcm9wZXJ0eSgnYW5pbWF0aW9uRHVyYXRpb24nKSwgbG9jYWxTdG9yYWdlQWNjZXNzKSxcbiAgICAgIEFOSU1BVElPTkRFTEFZID0gdG5zU3RvcmFnZVsndEFEZSddID8gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndEFEZSddKSA6IHNldExvY2FsU3RvcmFnZSh0bnNTdG9yYWdlLCAndEFEZScsIHdoaWNoUHJvcGVydHkoJ2FuaW1hdGlvbkRlbGF5JyksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgICBUUkFOU0lUSU9ORU5EID0gdG5zU3RvcmFnZVsndFRFJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0VEUnXSkgOiBzZXRMb2NhbFN0b3JhZ2UodG5zU3RvcmFnZSwgJ3RURScsIGdldEVuZFByb3BlcnR5KFRSQU5TSVRJT05EVVJBVElPTiwgJ1RyYW5zaXRpb24nKSwgbG9jYWxTdG9yYWdlQWNjZXNzKSxcbiAgICAgIEFOSU1BVElPTkVORCA9IHRuc1N0b3JhZ2VbJ3RBRSddID8gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndEFFJ10pIDogc2V0TG9jYWxTdG9yYWdlKHRuc1N0b3JhZ2UsICd0QUUnLCBnZXRFbmRQcm9wZXJ0eShBTklNQVRJT05EVVJBVElPTiwgJ0FuaW1hdGlvbicpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpO1xuXG4gIC8vIGdldCBlbGVtZW50IG5vZGVzIGZyb20gc2VsZWN0b3JzXG4gIHZhciBzdXBwb3J0Q29uc29sZVdhcm4gPSB3aW4uY29uc29sZSAmJiB0eXBlb2Ygd2luLmNvbnNvbGUud2FybiA9PT0gXCJmdW5jdGlvblwiLFxuICAgICAgdG5zTGlzdCA9IFsnY29udGFpbmVyJywgJ2NvbnRyb2xzQ29udGFpbmVyJywgJ3ByZXZCdXR0b24nLCAnbmV4dEJ1dHRvbicsICduYXZDb250YWluZXInLCAnYXV0b3BsYXlCdXR0b24nXSxcbiAgICAgIG9wdGlvbnNFbGVtZW50cyA9IHt9O1xuXG4gIHRuc0xpc3QuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zW2l0ZW1dID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHN0ciA9IG9wdGlvbnNbaXRlbV0sXG4gICAgICAgICAgZWwgPSBkb2MucXVlcnlTZWxlY3RvcihzdHIpO1xuICAgICAgb3B0aW9uc0VsZW1lbnRzW2l0ZW1dID0gc3RyO1xuXG4gICAgICBpZiAoZWwgJiYgZWwubm9kZU5hbWUpIHtcbiAgICAgICAgb3B0aW9uc1tpdGVtXSA9IGVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN1cHBvcnRDb25zb2xlV2FybikgeyBjb25zb2xlLndhcm4oJ0NhblxcJ3QgZmluZCcsIG9wdGlvbnNbaXRlbV0pOyB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIG1ha2Ugc3VyZSBhdCBsZWFzdCAxIHNsaWRlXG4gIGlmIChvcHRpb25zLmNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPCAxKSB7XG4gICAgaWYgKHN1cHBvcnRDb25zb2xlV2FybikgeyBjb25zb2xlLndhcm4oJ05vIHNsaWRlcyBmb3VuZCBpbicsIG9wdGlvbnMuY29udGFpbmVyKTsgfVxuICAgIHJldHVybjtcbiAgIH1cblxuICAvLyB1cGRhdGUgb3B0aW9uc1xuICB2YXIgcmVzcG9uc2l2ZSA9IG9wdGlvbnMucmVzcG9uc2l2ZSxcbiAgICAgIG5lc3RlZCA9IG9wdGlvbnMubmVzdGVkLFxuICAgICAgY2Fyb3VzZWwgPSBvcHRpb25zLm1vZGUgPT09ICdjYXJvdXNlbCcgPyB0cnVlIDogZmFsc2U7XG5cbiAgaWYgKHJlc3BvbnNpdmUpIHtcbiAgICAvLyBhcHBseSByZXNwb25zaXZlWzBdIHRvIG9wdGlvbnMgYW5kIHJlbW92ZSBpdFxuICAgIGlmICgwIGluIHJlc3BvbnNpdmUpIHtcbiAgICAgIG9wdGlvbnMgPSBleHRlbmQob3B0aW9ucywgcmVzcG9uc2l2ZVswXSk7XG4gICAgICBkZWxldGUgcmVzcG9uc2l2ZVswXTtcbiAgICB9XG5cbiAgICB2YXIgcmVzcG9uc2l2ZVRlbSA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiByZXNwb25zaXZlKSB7XG4gICAgICB2YXIgdmFsID0gcmVzcG9uc2l2ZVtrZXldO1xuICAgICAgLy8gdXBkYXRlIHJlc3BvbnNpdmVcbiAgICAgIC8vIGZyb206IDMwMDogMlxuICAgICAgLy8gdG86XG4gICAgICAvLyAgIDMwMDoge1xuICAgICAgLy8gICAgIGl0ZW1zOiAyXG4gICAgICAvLyAgIH1cbiAgICAgIHZhbCA9IHR5cGVvZiB2YWwgPT09ICdudW1iZXInID8ge2l0ZW1zOiB2YWx9IDogdmFsO1xuICAgICAgcmVzcG9uc2l2ZVRlbVtrZXldID0gdmFsO1xuICAgIH1cbiAgICByZXNwb25zaXZlID0gcmVzcG9uc2l2ZVRlbTtcbiAgICByZXNwb25zaXZlVGVtID0gbnVsbDtcbiAgfVxuXG4gIC8vIHVwZGF0ZSBvcHRpb25zXG4gIGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMgKG9iaikge1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmICghY2Fyb3VzZWwpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3NsaWRlQnknKSB7IG9ialtrZXldID0gJ3BhZ2UnOyB9XG4gICAgICAgIGlmIChrZXkgPT09ICdlZGdlUGFkZGluZycpIHsgb2JqW2tleV0gPSBmYWxzZTsgfVxuICAgICAgICBpZiAoa2V5ID09PSAnYXV0b0hlaWdodCcpIHsgb2JqW2tleV0gPSBmYWxzZTsgfVxuICAgICAgfVxuXG4gICAgICAvLyB1cGRhdGUgcmVzcG9uc2l2ZSBvcHRpb25zXG4gICAgICBpZiAoa2V5ID09PSAncmVzcG9uc2l2ZScpIHsgdXBkYXRlT3B0aW9ucyhvYmpba2V5XSk7IH1cbiAgICB9XG4gIH1cbiAgaWYgKCFjYXJvdXNlbCkgeyB1cGRhdGVPcHRpb25zKG9wdGlvbnMpOyB9XG5cblxuICAvLyA9PT0gZGVmaW5lIGFuZCBzZXQgdmFyaWFibGVzID09PVxuICBpZiAoIWNhcm91c2VsKSB7XG4gICAgb3B0aW9ucy5heGlzID0gJ2hvcml6b250YWwnO1xuICAgIG9wdGlvbnMuc2xpZGVCeSA9ICdwYWdlJztcbiAgICBvcHRpb25zLmVkZ2VQYWRkaW5nID0gZmFsc2U7XG5cbiAgICB2YXIgYW5pbWF0ZUluID0gb3B0aW9ucy5hbmltYXRlSW4sXG4gICAgICAgIGFuaW1hdGVPdXQgPSBvcHRpb25zLmFuaW1hdGVPdXQsXG4gICAgICAgIGFuaW1hdGVEZWxheSA9IG9wdGlvbnMuYW5pbWF0ZURlbGF5LFxuICAgICAgICBhbmltYXRlTm9ybWFsID0gb3B0aW9ucy5hbmltYXRlTm9ybWFsO1xuICB9XG5cbiAgdmFyIGhvcml6b250YWwgPSBvcHRpb25zLmF4aXMgPT09ICdob3Jpem9udGFsJyA/IHRydWUgOiBmYWxzZSxcbiAgICAgIG91dGVyV3JhcHBlciA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIGlubmVyV3JhcHBlciA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIG1pZGRsZVdyYXBwZXIsXG4gICAgICBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcixcbiAgICAgIGNvbnRhaW5lclBhcmVudCA9IGNvbnRhaW5lci5wYXJlbnROb2RlLFxuICAgICAgY29udGFpbmVySFRNTCA9IGNvbnRhaW5lci5vdXRlckhUTUwsXG4gICAgICBzbGlkZUl0ZW1zID0gY29udGFpbmVyLmNoaWxkcmVuLFxuICAgICAgc2xpZGVDb3VudCA9IHNsaWRlSXRlbXMubGVuZ3RoLFxuICAgICAgYnJlYWtwb2ludFpvbmUsXG4gICAgICB3aW5kb3dXaWR0aCA9IGdldFdpbmRvd1dpZHRoKCksXG4gICAgICBpc09uID0gZmFsc2U7XG4gIGlmIChyZXNwb25zaXZlKSB7IHNldEJyZWFrcG9pbnRab25lKCk7IH1cbiAgaWYgKGNhcm91c2VsKSB7IGNvbnRhaW5lci5jbGFzc05hbWUgKz0gJyB0bnMtdnBmaXgnOyB9XG5cbiAgLy8gZml4ZWRXaWR0aDogdmlld3BvcnQgPiByaWdodEJvdW5kYXJ5ID4gaW5kZXhNYXhcbiAgdmFyIGF1dG9XaWR0aCA9IG9wdGlvbnMuYXV0b1dpZHRoLFxuICAgICAgZml4ZWRXaWR0aCA9IGdldE9wdGlvbignZml4ZWRXaWR0aCcpLFxuICAgICAgZWRnZVBhZGRpbmcgPSBnZXRPcHRpb24oJ2VkZ2VQYWRkaW5nJyksXG4gICAgICBndXR0ZXIgPSBnZXRPcHRpb24oJ2d1dHRlcicpLFxuICAgICAgdmlld3BvcnQgPSBnZXRWaWV3cG9ydFdpZHRoKCksXG4gICAgICBjZW50ZXIgPSBnZXRPcHRpb24oJ2NlbnRlcicpLFxuICAgICAgaXRlbXMgPSAhYXV0b1dpZHRoID8gTWF0aC5mbG9vcihnZXRPcHRpb24oJ2l0ZW1zJykpIDogMSxcbiAgICAgIHNsaWRlQnkgPSBnZXRPcHRpb24oJ3NsaWRlQnknKSxcbiAgICAgIHZpZXdwb3J0TWF4ID0gb3B0aW9ucy52aWV3cG9ydE1heCB8fCBvcHRpb25zLmZpeGVkV2lkdGhWaWV3cG9ydFdpZHRoLFxuICAgICAgYXJyb3dLZXlzID0gZ2V0T3B0aW9uKCdhcnJvd0tleXMnKSxcbiAgICAgIHNwZWVkID0gZ2V0T3B0aW9uKCdzcGVlZCcpLFxuICAgICAgcmV3aW5kID0gb3B0aW9ucy5yZXdpbmQsXG4gICAgICBsb29wID0gcmV3aW5kID8gZmFsc2UgOiBvcHRpb25zLmxvb3AsXG4gICAgICBhdXRvSGVpZ2h0ID0gZ2V0T3B0aW9uKCdhdXRvSGVpZ2h0JyksXG4gICAgICBjb250cm9scyA9IGdldE9wdGlvbignY29udHJvbHMnKSxcbiAgICAgIGNvbnRyb2xzVGV4dCA9IGdldE9wdGlvbignY29udHJvbHNUZXh0JyksXG4gICAgICBuYXYgPSBnZXRPcHRpb24oJ25hdicpLFxuICAgICAgdG91Y2ggPSBnZXRPcHRpb24oJ3RvdWNoJyksXG4gICAgICBtb3VzZURyYWcgPSBnZXRPcHRpb24oJ21vdXNlRHJhZycpLFxuICAgICAgYXV0b3BsYXkgPSBnZXRPcHRpb24oJ2F1dG9wbGF5JyksXG4gICAgICBhdXRvcGxheVRpbWVvdXQgPSBnZXRPcHRpb24oJ2F1dG9wbGF5VGltZW91dCcpLFxuICAgICAgYXV0b3BsYXlUZXh0ID0gZ2V0T3B0aW9uKCdhdXRvcGxheVRleHQnKSxcbiAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZSA9IGdldE9wdGlvbignYXV0b3BsYXlIb3ZlclBhdXNlJyksXG4gICAgICBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ID0gZ2V0T3B0aW9uKCdhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5JyksXG4gICAgICBzaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQobnVsbCwgZ2V0T3B0aW9uKCdub25jZScpKSxcbiAgICAgIGxhenlsb2FkID0gb3B0aW9ucy5sYXp5bG9hZCxcbiAgICAgIGxhenlsb2FkU2VsZWN0b3IgPSBvcHRpb25zLmxhenlsb2FkU2VsZWN0b3IsXG4gICAgICBzbGlkZVBvc2l0aW9ucywgLy8gY29sbGVjdGlvbiBvZiBzbGlkZSBwb3NpdGlvbnNcbiAgICAgIHNsaWRlSXRlbXNPdXQgPSBbXSxcbiAgICAgIGNsb25lQ291bnQgPSBsb29wID8gZ2V0Q2xvbmVDb3VudEZvckxvb3AoKSA6IDAsXG4gICAgICBzbGlkZUNvdW50TmV3ID0gIWNhcm91c2VsID8gc2xpZGVDb3VudCArIGNsb25lQ291bnQgOiBzbGlkZUNvdW50ICsgY2xvbmVDb3VudCAqIDIsXG4gICAgICBoYXNSaWdodERlYWRab25lID0gKGZpeGVkV2lkdGggfHwgYXV0b1dpZHRoKSAmJiAhbG9vcCA/IHRydWUgOiBmYWxzZSxcbiAgICAgIHJpZ2h0Qm91bmRhcnkgPSBmaXhlZFdpZHRoID8gZ2V0UmlnaHRCb3VuZGFyeSgpIDogbnVsbCxcbiAgICAgIHVwZGF0ZUluZGV4QmVmb3JlVHJhbnNmb3JtID0gKCFjYXJvdXNlbCB8fCAhbG9vcCkgPyB0cnVlIDogZmFsc2UsXG4gICAgICAvLyB0cmFuc2Zvcm1cbiAgICAgIHRyYW5zZm9ybUF0dHIgPSBob3Jpem9udGFsID8gJ2xlZnQnIDogJ3RvcCcsXG4gICAgICB0cmFuc2Zvcm1QcmVmaXggPSAnJyxcbiAgICAgIHRyYW5zZm9ybVBvc3RmaXggPSAnJyxcbiAgICAgIC8vIGluZGV4XG4gICAgICBnZXRJbmRleE1heCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChmaXhlZFdpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gY2VudGVyICYmICFsb29wID8gc2xpZGVDb3VudCAtIDEgOiBNYXRoLmNlaWwoLSByaWdodEJvdW5kYXJ5IC8gKGZpeGVkV2lkdGggKyBndXR0ZXIpKTsgfTtcbiAgICAgICAgfSBlbHNlIGlmIChhdXRvV2lkdGgpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlQ291bnROZXc7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoc2xpZGVQb3NpdGlvbnNbaV0gPj0gLSByaWdodEJvdW5kYXJ5KSB7IHJldHVybiBpOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoY2VudGVyICYmIGNhcm91c2VsICYmICFsb29wKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzbGlkZUNvdW50IC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBsb29wIHx8IGNhcm91c2VsID8gTWF0aC5tYXgoMCwgc2xpZGVDb3VudE5ldyAtIE1hdGguY2VpbChpdGVtcykpIDogc2xpZGVDb3VudE5ldyAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSkoKSxcbiAgICAgIGluZGV4ID0gZ2V0U3RhcnRJbmRleChnZXRPcHRpb24oJ3N0YXJ0SW5kZXgnKSksXG4gICAgICBpbmRleENhY2hlZCA9IGluZGV4LFxuICAgICAgZGlzcGxheUluZGV4ID0gZ2V0Q3VycmVudFNsaWRlKCksXG4gICAgICBpbmRleE1pbiA9IDAsXG4gICAgICBpbmRleE1heCA9ICFhdXRvV2lkdGggPyBnZXRJbmRleE1heCgpIDogbnVsbCxcbiAgICAgIC8vIHJlc2l6ZVxuICAgICAgcmVzaXplVGltZXIsXG4gICAgICBwcmV2ZW50QWN0aW9uV2hlblJ1bm5pbmcgPSBvcHRpb25zLnByZXZlbnRBY3Rpb25XaGVuUnVubmluZyxcbiAgICAgIHN3aXBlQW5nbGUgPSBvcHRpb25zLnN3aXBlQW5nbGUsXG4gICAgICBtb3ZlRGlyZWN0aW9uRXhwZWN0ZWQgPSBzd2lwZUFuZ2xlID8gJz8nIDogdHJ1ZSxcbiAgICAgIHJ1bm5pbmcgPSBmYWxzZSxcbiAgICAgIG9uSW5pdCA9IG9wdGlvbnMub25Jbml0LFxuICAgICAgZXZlbnRzID0gbmV3IEV2ZW50cygpLFxuICAgICAgLy8gaWQsIGNsYXNzXG4gICAgICBuZXdDb250YWluZXJDbGFzc2VzID0gJyB0bnMtc2xpZGVyIHRucy0nICsgb3B0aW9ucy5tb2RlLFxuICAgICAgc2xpZGVJZCA9IGNvbnRhaW5lci5pZCB8fCBnZXRTbGlkZUlkKCksXG4gICAgICBkaXNhYmxlID0gZ2V0T3B0aW9uKCdkaXNhYmxlJyksXG4gICAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgZnJlZXphYmxlID0gb3B0aW9ucy5mcmVlemFibGUsXG4gICAgICBmcmVlemUgPSBmcmVlemFibGUgJiYgIWF1dG9XaWR0aCA/IGdldEZyZWV6ZSgpIDogZmFsc2UsXG4gICAgICBmcm96ZW4gPSBmYWxzZSxcbiAgICAgIGNvbnRyb2xzRXZlbnRzID0ge1xuICAgICAgICAnY2xpY2snOiBvbkNvbnRyb2xzQ2xpY2ssXG4gICAgICAgICdrZXlkb3duJzogb25Db250cm9sc0tleWRvd25cbiAgICAgIH0sXG4gICAgICBuYXZFdmVudHMgPSB7XG4gICAgICAgICdjbGljayc6IG9uTmF2Q2xpY2ssXG4gICAgICAgICdrZXlkb3duJzogb25OYXZLZXlkb3duXG4gICAgICB9LFxuICAgICAgaG92ZXJFdmVudHMgPSB7XG4gICAgICAgICdtb3VzZW92ZXInOiBtb3VzZW92ZXJQYXVzZSxcbiAgICAgICAgJ21vdXNlb3V0JzogbW91c2VvdXRSZXN0YXJ0XG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eUV2ZW50ID0geyd2aXNpYmlsaXR5Y2hhbmdlJzogb25WaXNpYmlsaXR5Q2hhbmdlfSxcbiAgICAgIGRvY21lbnRLZXlkb3duRXZlbnQgPSB7J2tleWRvd24nOiBvbkRvY3VtZW50S2V5ZG93bn0sXG4gICAgICB0b3VjaEV2ZW50cyA9IHtcbiAgICAgICAgJ3RvdWNoc3RhcnQnOiBvblBhblN0YXJ0LFxuICAgICAgICAndG91Y2htb3ZlJzogb25QYW5Nb3ZlLFxuICAgICAgICAndG91Y2hlbmQnOiBvblBhbkVuZCxcbiAgICAgICAgJ3RvdWNoY2FuY2VsJzogb25QYW5FbmRcbiAgICAgIH0sIGRyYWdFdmVudHMgPSB7XG4gICAgICAgICdtb3VzZWRvd24nOiBvblBhblN0YXJ0LFxuICAgICAgICAnbW91c2Vtb3ZlJzogb25QYW5Nb3ZlLFxuICAgICAgICAnbW91c2V1cCc6IG9uUGFuRW5kLFxuICAgICAgICAnbW91c2VsZWF2ZSc6IG9uUGFuRW5kXG4gICAgICB9LFxuICAgICAgaGFzQ29udHJvbHMgPSBoYXNPcHRpb24oJ2NvbnRyb2xzJyksXG4gICAgICBoYXNOYXYgPSBoYXNPcHRpb24oJ25hdicpLFxuICAgICAgbmF2QXNUaHVtYm5haWxzID0gYXV0b1dpZHRoID8gdHJ1ZSA6IG9wdGlvbnMubmF2QXNUaHVtYm5haWxzLFxuICAgICAgaGFzQXV0b3BsYXkgPSBoYXNPcHRpb24oJ2F1dG9wbGF5JyksXG4gICAgICBoYXNUb3VjaCA9IGhhc09wdGlvbigndG91Y2gnKSxcbiAgICAgIGhhc01vdXNlRHJhZyA9IGhhc09wdGlvbignbW91c2VEcmFnJyksXG4gICAgICBzbGlkZUFjdGl2ZUNsYXNzID0gJ3Rucy1zbGlkZS1hY3RpdmUnLFxuICAgICAgc2xpZGVDbG9uZWRDbGFzcyA9ICd0bnMtc2xpZGUtY2xvbmVkJyxcbiAgICAgIGltZ0NvbXBsZXRlQ2xhc3MgPSAndG5zLWNvbXBsZXRlJyxcbiAgICAgIGltZ0V2ZW50cyA9IHtcbiAgICAgICAgJ2xvYWQnOiBvbkltZ0xvYWRlZCxcbiAgICAgICAgJ2Vycm9yJzogb25JbWdGYWlsZWRcbiAgICAgIH0sXG4gICAgICBpbWdzQ29tcGxldGUsXG4gICAgICBsaXZlcmVnaW9uQ3VycmVudCxcbiAgICAgIHByZXZlbnRTY3JvbGwgPSBvcHRpb25zLnByZXZlbnRTY3JvbGxPblRvdWNoID09PSAnZm9yY2UnID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIC8vIGNvbnRyb2xzXG4gIGlmIChoYXNDb250cm9scykge1xuICAgIHZhciBjb250cm9sc0NvbnRhaW5lciA9IG9wdGlvbnMuY29udHJvbHNDb250YWluZXIsXG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVySFRNTCA9IG9wdGlvbnMuY29udHJvbHNDb250YWluZXIgPyBvcHRpb25zLmNvbnRyb2xzQ29udGFpbmVyLm91dGVySFRNTCA6ICcnLFxuICAgICAgICBwcmV2QnV0dG9uID0gb3B0aW9ucy5wcmV2QnV0dG9uLFxuICAgICAgICBuZXh0QnV0dG9uID0gb3B0aW9ucy5uZXh0QnV0dG9uLFxuICAgICAgICBwcmV2QnV0dG9uSFRNTCA9IG9wdGlvbnMucHJldkJ1dHRvbiA/IG9wdGlvbnMucHJldkJ1dHRvbi5vdXRlckhUTUwgOiAnJyxcbiAgICAgICAgbmV4dEJ1dHRvbkhUTUwgPSBvcHRpb25zLm5leHRCdXR0b24gPyBvcHRpb25zLm5leHRCdXR0b24ub3V0ZXJIVE1MIDogJycsXG4gICAgICAgIHByZXZJc0J1dHRvbixcbiAgICAgICAgbmV4dElzQnV0dG9uO1xuICB9XG5cbiAgLy8gbmF2XG4gIGlmIChoYXNOYXYpIHtcbiAgICB2YXIgbmF2Q29udGFpbmVyID0gb3B0aW9ucy5uYXZDb250YWluZXIsXG4gICAgICAgIG5hdkNvbnRhaW5lckhUTUwgPSBvcHRpb25zLm5hdkNvbnRhaW5lciA/IG9wdGlvbnMubmF2Q29udGFpbmVyLm91dGVySFRNTCA6ICcnLFxuICAgICAgICBuYXZJdGVtcyxcbiAgICAgICAgcGFnZXMgPSBhdXRvV2lkdGggPyBzbGlkZUNvdW50IDogZ2V0UGFnZXMoKSxcbiAgICAgICAgcGFnZXNDYWNoZWQgPSAwLFxuICAgICAgICBuYXZDbGlja2VkID0gLTEsXG4gICAgICAgIG5hdkN1cnJlbnRJbmRleCA9IGdldEN1cnJlbnROYXZJbmRleCgpLFxuICAgICAgICBuYXZDdXJyZW50SW5kZXhDYWNoZWQgPSBuYXZDdXJyZW50SW5kZXgsXG4gICAgICAgIG5hdkFjdGl2ZUNsYXNzID0gJ3Rucy1uYXYtYWN0aXZlJyxcbiAgICAgICAgbmF2U3RyID0gJ0Nhcm91c2VsIFBhZ2UgJyxcbiAgICAgICAgbmF2U3RyQ3VycmVudCA9ICcgKEN1cnJlbnQgU2xpZGUpJztcbiAgfVxuXG4gIC8vIGF1dG9wbGF5XG4gIGlmIChoYXNBdXRvcGxheSkge1xuICAgIHZhciBhdXRvcGxheURpcmVjdGlvbiA9IG9wdGlvbnMuYXV0b3BsYXlEaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/IDEgOiAtMSxcbiAgICAgICAgYXV0b3BsYXlCdXR0b24gPSBvcHRpb25zLmF1dG9wbGF5QnV0dG9uLFxuICAgICAgICBhdXRvcGxheUJ1dHRvbkhUTUwgPSBvcHRpb25zLmF1dG9wbGF5QnV0dG9uID8gb3B0aW9ucy5hdXRvcGxheUJ1dHRvbi5vdXRlckhUTUwgOiAnJyxcbiAgICAgICAgYXV0b3BsYXlIdG1sU3RyaW5ncyA9IFsnPHNwYW4gY2xhc3M9XFwndG5zLXZpc3VhbGx5LWhpZGRlblxcJz4nLCAnIGFuaW1hdGlvbjwvc3Bhbj4nXSxcbiAgICAgICAgYXV0b3BsYXlUaW1lcixcbiAgICAgICAgYW5pbWF0aW5nLFxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2VkLFxuICAgICAgICBhdXRvcGxheVVzZXJQYXVzZWQsXG4gICAgICAgIGF1dG9wbGF5VmlzaWJpbGl0eVBhdXNlZDtcbiAgfVxuXG4gIGlmIChoYXNUb3VjaCB8fCBoYXNNb3VzZURyYWcpIHtcbiAgICB2YXIgaW5pdFBvc2l0aW9uID0ge30sXG4gICAgICAgIGxhc3RQb3NpdGlvbiA9IHt9LFxuICAgICAgICB0cmFuc2xhdGVJbml0LFxuICAgICAgICBkaXNYLFxuICAgICAgICBkaXNZLFxuICAgICAgICBwYW5TdGFydCA9IGZhbHNlLFxuICAgICAgICByYWZJbmRleCxcbiAgICAgICAgZ2V0RGlzdCA9IGhvcml6b250YWwgP1xuICAgICAgICAgIGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEueCAtIGIueDsgfSA6XG4gICAgICAgICAgZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYS55IC0gYi55OyB9O1xuICB9XG5cbiAgLy8gZGlzYWJsZSBzbGlkZXIgd2hlbiBzbGlkZWNvdW50IDw9IGl0ZW1zXG4gIGlmICghYXV0b1dpZHRoKSB7IHJlc2V0VmFyaWJsZXNXaGVuRGlzYWJsZShkaXNhYmxlIHx8IGZyZWV6ZSk7IH1cblxuICBpZiAoVFJBTlNGT1JNKSB7XG4gICAgdHJhbnNmb3JtQXR0ciA9IFRSQU5TRk9STTtcbiAgICB0cmFuc2Zvcm1QcmVmaXggPSAndHJhbnNsYXRlJztcblxuICAgIGlmIChIQVMzRFRSQU5TRk9STVMpIHtcbiAgICAgIHRyYW5zZm9ybVByZWZpeCArPSBob3Jpem9udGFsID8gJzNkKCcgOiAnM2QoMHB4LCAnO1xuICAgICAgdHJhbnNmb3JtUG9zdGZpeCA9IGhvcml6b250YWwgPyAnLCAwcHgsIDBweCknIDogJywgMHB4KSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybVByZWZpeCArPSBob3Jpem9udGFsID8gJ1goJyA6ICdZKCc7XG4gICAgICB0cmFuc2Zvcm1Qb3N0Zml4ID0gJyknO1xuICAgIH1cblxuICB9XG5cbiAgaWYgKGNhcm91c2VsKSB7IGNvbnRhaW5lci5jbGFzc05hbWUgPSBjb250YWluZXIuY2xhc3NOYW1lLnJlcGxhY2UoJ3Rucy12cGZpeCcsICcnKTsgfVxuICBpbml0U3RydWN0dXJlKCk7XG4gIGluaXRTaGVldCgpO1xuICBpbml0U2xpZGVyVHJhbnNmb3JtKCk7XG5cbiAgLy8gPT09IENPTU1PTiBGVU5DVElPTlMgPT09IC8vXG4gIGZ1bmN0aW9uIHJlc2V0VmFyaWJsZXNXaGVuRGlzYWJsZSAoY29uZGl0aW9uKSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgY29udHJvbHMgPSBuYXYgPSB0b3VjaCA9IG1vdXNlRHJhZyA9IGFycm93S2V5cyA9IGF1dG9wbGF5ID0gYXV0b3BsYXlIb3ZlclBhdXNlID0gYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRTbGlkZSAoKSB7XG4gICAgdmFyIHRlbSA9IGNhcm91c2VsID8gaW5kZXggLSBjbG9uZUNvdW50IDogaW5kZXg7XG4gICAgd2hpbGUgKHRlbSA8IDApIHsgdGVtICs9IHNsaWRlQ291bnQ7IH1cbiAgICByZXR1cm4gdGVtJXNsaWRlQ291bnQgKyAxO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3RhcnRJbmRleCAoaW5kKSB7XG4gICAgaW5kID0gaW5kID8gTWF0aC5tYXgoMCwgTWF0aC5taW4obG9vcCA/IHNsaWRlQ291bnQgLSAxIDogc2xpZGVDb3VudCAtIGl0ZW1zLCBpbmQpKSA6IDA7XG4gICAgcmV0dXJuIGNhcm91c2VsID8gaW5kICsgY2xvbmVDb3VudCA6IGluZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFic0luZGV4IChpKSB7XG4gICAgaWYgKGkgPT0gbnVsbCkgeyBpID0gaW5kZXg7IH1cblxuICAgIGlmIChjYXJvdXNlbCkgeyBpIC09IGNsb25lQ291bnQ7IH1cbiAgICB3aGlsZSAoaSA8IDApIHsgaSArPSBzbGlkZUNvdW50OyB9XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihpJXNsaWRlQ291bnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudE5hdkluZGV4ICgpIHtcbiAgICB2YXIgYWJzSW5kZXggPSBnZXRBYnNJbmRleCgpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICByZXN1bHQgPSBuYXZBc1RodW1ibmFpbHMgPyBhYnNJbmRleCA6XG4gICAgICBmaXhlZFdpZHRoIHx8IGF1dG9XaWR0aCA/IE1hdGguY2VpbCgoYWJzSW5kZXggKyAxKSAqIHBhZ2VzIC8gc2xpZGVDb3VudCAtIDEpIDpcbiAgICAgICAgICBNYXRoLmZsb29yKGFic0luZGV4IC8gaXRlbXMpO1xuXG4gICAgLy8gc2V0IGFjdGl2ZSBuYXYgdG8gdGhlIGxhc3Qgb25lIHdoZW4gcmVhY2hlcyB0aGUgcmlnaHQgZWRnZVxuICAgIGlmICghbG9vcCAmJiBjYXJvdXNlbCAmJiBpbmRleCA9PT0gaW5kZXhNYXgpIHsgcmVzdWx0ID0gcGFnZXMgLSAxOyB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SXRlbXNNYXggKCkge1xuICAgIC8vIGZpeGVkV2lkdGggb3IgYXV0b1dpZHRoIHdoaWxlIHZpZXdwb3J0TWF4IGlzIG5vdCBhdmFpbGFibGVcbiAgICBpZiAoYXV0b1dpZHRoIHx8IChmaXhlZFdpZHRoICYmICF2aWV3cG9ydE1heCkpIHtcbiAgICAgIHJldHVybiBzbGlkZUNvdW50IC0gMTtcbiAgICAvLyBtb3N0IGNhc2VzXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdHIgPSBmaXhlZFdpZHRoID8gJ2ZpeGVkV2lkdGgnIDogJ2l0ZW1zJyxcbiAgICAgICAgICBhcnIgPSBbXTtcblxuICAgICAgaWYgKGZpeGVkV2lkdGggfHwgb3B0aW9uc1tzdHJdIDwgc2xpZGVDb3VudCkgeyBhcnIucHVzaChvcHRpb25zW3N0cl0pOyB9XG5cbiAgICAgIGlmIChyZXNwb25zaXZlKSB7XG4gICAgICAgIGZvciAodmFyIGJwIGluIHJlc3BvbnNpdmUpIHtcbiAgICAgICAgICB2YXIgdGVtID0gcmVzcG9uc2l2ZVticF1bc3RyXTtcbiAgICAgICAgICBpZiAodGVtICYmIChmaXhlZFdpZHRoIHx8IHRlbSA8IHNsaWRlQ291bnQpKSB7IGFyci5wdXNoKHRlbSk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFyci5sZW5ndGgpIHsgYXJyLnB1c2goMCk7IH1cblxuICAgICAgcmV0dXJuIE1hdGguY2VpbChmaXhlZFdpZHRoID8gdmlld3BvcnRNYXggLyBNYXRoLm1pbi5hcHBseShudWxsLCBhcnIpIDogTWF0aC5tYXguYXBwbHkobnVsbCwgYXJyKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2xvbmVDb3VudEZvckxvb3AgKCkge1xuICAgIHZhciBpdGVtc01heCA9IGdldEl0ZW1zTWF4KCksXG4gICAgICAgIHJlc3VsdCA9IGNhcm91c2VsID8gTWF0aC5jZWlsKChpdGVtc01heCAqIDUgLSBzbGlkZUNvdW50KS8yKSA6IChpdGVtc01heCAqIDQgLSBzbGlkZUNvdW50KTtcbiAgICByZXN1bHQgPSBNYXRoLm1heChpdGVtc01heCwgcmVzdWx0KTtcblxuICAgIHJldHVybiBoYXNPcHRpb24oJ2VkZ2VQYWRkaW5nJykgPyByZXN1bHQgKyAxIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2luZG93V2lkdGggKCkge1xuICAgIHJldHVybiB3aW4uaW5uZXJXaWR0aCB8fCBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvYy5ib2R5LmNsaWVudFdpZHRoO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5zZXJ0UG9zaXRpb24gKHBvcykge1xuICAgIHJldHVybiBwb3MgPT09ICd0b3AnID8gJ2FmdGVyYmVnaW4nIDogJ2JlZm9yZWVuZCc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDbGllbnRXaWR0aCAoZWwpIHtcbiAgICBpZiAoZWwgPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICB2YXIgZGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCByZWN0LCB3aWR0aDtcbiAgICBlbC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIHJlY3QgPSBkaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgd2lkdGggPSByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0O1xuICAgIGRpdi5yZW1vdmUoKTtcbiAgICByZXR1cm4gd2lkdGggfHwgZ2V0Q2xpZW50V2lkdGgoZWwucGFyZW50Tm9kZSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWaWV3cG9ydFdpZHRoICgpIHtcbiAgICB2YXIgZ2FwID0gZWRnZVBhZGRpbmcgPyBlZGdlUGFkZGluZyAqIDIgLSBndXR0ZXIgOiAwO1xuICAgIHJldHVybiBnZXRDbGllbnRXaWR0aChjb250YWluZXJQYXJlbnQpIC0gZ2FwO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzT3B0aW9uIChpdGVtKSB7XG4gICAgaWYgKG9wdGlvbnNbaXRlbV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVzcG9uc2l2ZSkge1xuICAgICAgICBmb3IgKHZhciBicCBpbiByZXNwb25zaXZlKSB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNpdmVbYnBdW2l0ZW1dKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBnZXQgb3B0aW9uOlxuICAvLyBmaXhlZCB3aWR0aDogdmlld3BvcnQsIGZpeGVkV2lkdGgsIGd1dHRlciA9PiBpdGVtc1xuICAvLyBvdGhlcnM6IHdpbmRvdyB3aWR0aCA9PiBhbGwgdmFyaWFibGVzXG4gIC8vIGFsbDogaXRlbXMgPT4gc2xpZGVCeVxuICBmdW5jdGlvbiBnZXRPcHRpb24gKGl0ZW0sIHd3KSB7XG4gICAgaWYgKHd3ID09IG51bGwpIHsgd3cgPSB3aW5kb3dXaWR0aDsgfVxuXG4gICAgaWYgKGl0ZW0gPT09ICdpdGVtcycgJiYgZml4ZWRXaWR0aCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHZpZXdwb3J0ICsgZ3V0dGVyKSAvIChmaXhlZFdpZHRoICsgZ3V0dGVyKSkgfHwgMTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVzdWx0ID0gb3B0aW9uc1tpdGVtXTtcblxuICAgICAgaWYgKHJlc3BvbnNpdmUpIHtcbiAgICAgICAgZm9yICh2YXIgYnAgaW4gcmVzcG9uc2l2ZSkge1xuICAgICAgICAgIC8vIGJwOiBjb252ZXJ0IHN0cmluZyB0byBudW1iZXJcbiAgICAgICAgICBpZiAod3cgPj0gcGFyc2VJbnQoYnApKSB7XG4gICAgICAgICAgICBpZiAoaXRlbSBpbiByZXNwb25zaXZlW2JwXSkgeyByZXN1bHQgPSByZXNwb25zaXZlW2JwXVtpdGVtXTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbSA9PT0gJ3NsaWRlQnknICYmIHJlc3VsdCA9PT0gJ3BhZ2UnKSB7IHJlc3VsdCA9IGdldE9wdGlvbignaXRlbXMnKTsgfVxuICAgICAgaWYgKCFjYXJvdXNlbCAmJiAoaXRlbSA9PT0gJ3NsaWRlQnknIHx8IGl0ZW0gPT09ICdpdGVtcycpKSB7IHJlc3VsdCA9IE1hdGguZmxvb3IocmVzdWx0KTsgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNsaWRlTWFyZ2luTGVmdCAoaSkge1xuICAgIHJldHVybiBDQUxDID9cbiAgICAgIENBTEMgKyAnKCcgKyBpICogMTAwICsgJyUgLyAnICsgc2xpZGVDb3VudE5ldyArICcpJyA6XG4gICAgICBpICogMTAwIC8gc2xpZGVDb3VudE5ldyArICclJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElubmVyV3JhcHBlclN0eWxlcyAoZWRnZVBhZGRpbmdUZW0sIGd1dHRlclRlbSwgZml4ZWRXaWR0aFRlbSwgc3BlZWRUZW0sIGF1dG9IZWlnaHRCUCkge1xuICAgIHZhciBzdHIgPSAnJztcblxuICAgIGlmIChlZGdlUGFkZGluZ1RlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZ2FwID0gZWRnZVBhZGRpbmdUZW07XG4gICAgICBpZiAoZ3V0dGVyVGVtKSB7IGdhcCAtPSBndXR0ZXJUZW07IH1cbiAgICAgIHN0ciA9IGhvcml6b250YWwgP1xuICAgICAgICAnbWFyZ2luOiAwICcgKyBnYXAgKyAncHggMCAnICsgZWRnZVBhZGRpbmdUZW0gKyAncHg7JyA6XG4gICAgICAgICdtYXJnaW46ICcgKyBlZGdlUGFkZGluZ1RlbSArICdweCAwICcgKyBnYXAgKyAncHggMDsnO1xuICAgIH0gZWxzZSBpZiAoZ3V0dGVyVGVtICYmICFmaXhlZFdpZHRoVGVtKSB7XG4gICAgICB2YXIgZ3V0dGVyVGVtVW5pdCA9ICctJyArIGd1dHRlclRlbSArICdweCcsXG4gICAgICAgICAgZGlyID0gaG9yaXpvbnRhbCA/IGd1dHRlclRlbVVuaXQgKyAnIDAgMCcgOiAnMCAnICsgZ3V0dGVyVGVtVW5pdCArICcgMCc7XG4gICAgICBzdHIgPSAnbWFyZ2luOiAwICcgKyBkaXIgKyAnOydcbiAgICB9XG5cbiAgICBpZiAoIWNhcm91c2VsICYmIGF1dG9IZWlnaHRCUCAmJiBUUkFOU0lUSU9ORFVSQVRJT04gJiYgc3BlZWRUZW0pIHsgc3RyICs9IGdldFRyYW5zaXRpb25EdXJhdGlvblN0eWxlKHNwZWVkVGVtKTsgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb250YWluZXJXaWR0aCAoZml4ZWRXaWR0aFRlbSwgZ3V0dGVyVGVtLCBpdGVtc1RlbSkge1xuICAgIGlmIChmaXhlZFdpZHRoVGVtKSB7XG4gICAgICByZXR1cm4gKGZpeGVkV2lkdGhUZW0gKyBndXR0ZXJUZW0pICogc2xpZGVDb3VudE5ldyArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBDQUxDID9cbiAgICAgICAgQ0FMQyArICcoJyArIHNsaWRlQ291bnROZXcgKiAxMDAgKyAnJSAvICcgKyBpdGVtc1RlbSArICcpJyA6XG4gICAgICAgIHNsaWRlQ291bnROZXcgKiAxMDAgLyBpdGVtc1RlbSArICclJztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTbGlkZVdpZHRoU3R5bGUgKGZpeGVkV2lkdGhUZW0sIGd1dHRlclRlbSwgaXRlbXNUZW0pIHtcbiAgICB2YXIgd2lkdGg7XG5cbiAgICBpZiAoZml4ZWRXaWR0aFRlbSkge1xuICAgICAgd2lkdGggPSAoZml4ZWRXaWR0aFRlbSArIGd1dHRlclRlbSkgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNhcm91c2VsKSB7IGl0ZW1zVGVtID0gTWF0aC5mbG9vcihpdGVtc1RlbSk7IH1cbiAgICAgIHZhciBkaXZpZGVuZCA9IGNhcm91c2VsID8gc2xpZGVDb3VudE5ldyA6IGl0ZW1zVGVtO1xuICAgICAgd2lkdGggPSBDQUxDID9cbiAgICAgICAgQ0FMQyArICcoMTAwJSAvICcgKyBkaXZpZGVuZCArICcpJyA6XG4gICAgICAgIDEwMCAvIGRpdmlkZW5kICsgJyUnO1xuICAgIH1cblxuICAgIHdpZHRoID0gJ3dpZHRoOicgKyB3aWR0aDtcblxuICAgIC8vIGlubmVyIHNsaWRlcjogb3ZlcndyaXRlIG91dGVyIHNsaWRlciBzdHlsZXNcbiAgICByZXR1cm4gbmVzdGVkICE9PSAnaW5uZXInID8gd2lkdGggKyAnOycgOiB3aWR0aCArICcgIWltcG9ydGFudDsnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2xpZGVHdXR0ZXJTdHlsZSAoZ3V0dGVyVGVtKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgLy8gZ3V0dGVyIG1heWJlIGludGVyZ2VyIHx8IDBcbiAgICAvLyBzbyBjYW4ndCB1c2UgJ2lmIChndXR0ZXIpJ1xuICAgIGlmIChndXR0ZXJUZW0gIT09IGZhbHNlKSB7XG4gICAgICB2YXIgcHJvcCA9IGhvcml6b250YWwgPyAncGFkZGluZy0nIDogJ21hcmdpbi0nLFxuICAgICAgICAgIGRpciA9IGhvcml6b250YWwgPyAncmlnaHQnIDogJ2JvdHRvbSc7XG4gICAgICBzdHIgPSBwcm9wICsgIGRpciArICc6ICcgKyBndXR0ZXJUZW0gKyAncHg7JztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q1NTUHJlZml4IChuYW1lLCBudW0pIHtcbiAgICB2YXIgcHJlZml4ID0gbmFtZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggLSBudW0pLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHByZWZpeCkgeyBwcmVmaXggPSAnLScgKyBwcmVmaXggKyAnLSc7IH1cblxuICAgIHJldHVybiBwcmVmaXg7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uRHVyYXRpb25TdHlsZSAoc3BlZWQpIHtcbiAgICByZXR1cm4gZ2V0Q1NTUHJlZml4KFRSQU5TSVRJT05EVVJBVElPTiwgMTgpICsgJ3RyYW5zaXRpb24tZHVyYXRpb246JyArIHNwZWVkIC8gMTAwMCArICdzOyc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbmltYXRpb25EdXJhdGlvblN0eWxlIChzcGVlZCkge1xuICAgIHJldHVybiBnZXRDU1NQcmVmaXgoQU5JTUFUSU9ORFVSQVRJT04sIDE3KSArICdhbmltYXRpb24tZHVyYXRpb246JyArIHNwZWVkIC8gMTAwMCArICdzOyc7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U3RydWN0dXJlICgpIHtcbiAgICB2YXIgY2xhc3NPdXRlciA9ICd0bnMtb3V0ZXInLFxuICAgICAgICBjbGFzc0lubmVyID0gJ3Rucy1pbm5lcicsXG4gICAgICAgIGhhc0d1dHRlciA9IGhhc09wdGlvbignZ3V0dGVyJyk7XG5cbiAgICBvdXRlcldyYXBwZXIuY2xhc3NOYW1lID0gY2xhc3NPdXRlcjtcbiAgICBpbm5lcldyYXBwZXIuY2xhc3NOYW1lID0gY2xhc3NJbm5lcjtcbiAgICBvdXRlcldyYXBwZXIuaWQgPSBzbGlkZUlkICsgJy1vdyc7XG4gICAgaW5uZXJXcmFwcGVyLmlkID0gc2xpZGVJZCArICctaXcnO1xuXG4gICAgLy8gc2V0IGNvbnRhaW5lciBwcm9wZXJ0aWVzXG4gICAgaWYgKGNvbnRhaW5lci5pZCA9PT0gJycpIHsgY29udGFpbmVyLmlkID0gc2xpZGVJZDsgfVxuICAgIG5ld0NvbnRhaW5lckNsYXNzZXMgKz0gUEVSQ0VOVEFHRUxBWU9VVCB8fCBhdXRvV2lkdGggPyAnIHRucy1zdWJwaXhlbCcgOiAnIHRucy1uby1zdWJwaXhlbCc7XG4gICAgbmV3Q29udGFpbmVyQ2xhc3NlcyArPSBDQUxDID8gJyB0bnMtY2FsYycgOiAnIHRucy1uby1jYWxjJztcbiAgICBpZiAoYXV0b1dpZHRoKSB7IG5ld0NvbnRhaW5lckNsYXNzZXMgKz0gJyB0bnMtYXV0b3dpZHRoJzsgfVxuICAgIG5ld0NvbnRhaW5lckNsYXNzZXMgKz0gJyB0bnMtJyArIG9wdGlvbnMuYXhpcztcbiAgICBjb250YWluZXIuY2xhc3NOYW1lICs9IG5ld0NvbnRhaW5lckNsYXNzZXM7XG5cbiAgICAvLyBhZGQgY29uc3RyYWluIGxheWVyIGZvciBjYXJvdXNlbFxuICAgIGlmIChjYXJvdXNlbCkge1xuICAgICAgbWlkZGxlV3JhcHBlciA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1pZGRsZVdyYXBwZXIuaWQgPSBzbGlkZUlkICsgJy1tdyc7XG4gICAgICBtaWRkbGVXcmFwcGVyLmNsYXNzTmFtZSA9ICd0bnMtb3ZoJztcblxuICAgICAgb3V0ZXJXcmFwcGVyLmFwcGVuZENoaWxkKG1pZGRsZVdyYXBwZXIpO1xuICAgICAgbWlkZGxlV3JhcHBlci5hcHBlbmRDaGlsZChpbm5lcldyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRlcldyYXBwZXIuYXBwZW5kQ2hpbGQoaW5uZXJXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBpZiAoYXV0b0hlaWdodCkge1xuICAgICAgdmFyIHdwID0gbWlkZGxlV3JhcHBlciA/IG1pZGRsZVdyYXBwZXIgOiBpbm5lcldyYXBwZXI7XG4gICAgICB3cC5jbGFzc05hbWUgKz0gJyB0bnMtYWgnO1xuICAgIH1cblxuICAgIGNvbnRhaW5lclBhcmVudC5pbnNlcnRCZWZvcmUob3V0ZXJXcmFwcGVyLCBjb250YWluZXIpO1xuICAgIGlubmVyV3JhcHBlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgLy8gYWRkIGlkLCBjbGFzcywgYXJpYSBhdHRyaWJ1dGVzXG4gICAgLy8gYmVmb3JlIGNsb25lIHNsaWRlc1xuICAgIGZvckVhY2goc2xpZGVJdGVtcywgZnVuY3Rpb24oaXRlbSwgaSkge1xuICAgICAgYWRkQ2xhc3MoaXRlbSwgJ3Rucy1pdGVtJyk7XG4gICAgICBpZiAoIWl0ZW0uaWQpIHsgaXRlbS5pZCA9IHNsaWRlSWQgKyAnLWl0ZW0nICsgaTsgfVxuICAgICAgaWYgKCFjYXJvdXNlbCAmJiBhbmltYXRlTm9ybWFsKSB7IGFkZENsYXNzKGl0ZW0sIGFuaW1hdGVOb3JtYWwpOyB9XG4gICAgICBzZXRBdHRycyhpdGVtLCB7XG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyAjIyBjbG9uZSBzbGlkZXNcbiAgICAvLyBjYXJvdXNlbDogbiArIHNsaWRlcyArIG5cbiAgICAvLyBnYWxsZXJ5OiAgICAgIHNsaWRlcyArIG5cbiAgICBpZiAoY2xvbmVDb3VudCkge1xuICAgICAgdmFyIGZyYWdtZW50QmVmb3JlID0gZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgICAgICBmcmFnbWVudEFmdGVyID0gZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgZm9yICh2YXIgaiA9IGNsb25lQ291bnQ7IGotLTspIHtcbiAgICAgICAgdmFyIG51bSA9IGolc2xpZGVDb3VudCxcbiAgICAgICAgICAgIGNsb25lRmlyc3QgPSBzbGlkZUl0ZW1zW251bV0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBhZGRDbGFzcyhjbG9uZUZpcnN0LCBzbGlkZUNsb25lZENsYXNzKTtcbiAgICAgICAgcmVtb3ZlQXR0cnMoY2xvbmVGaXJzdCwgJ2lkJyk7XG4gICAgICAgIGZyYWdtZW50QWZ0ZXIuaW5zZXJ0QmVmb3JlKGNsb25lRmlyc3QsIGZyYWdtZW50QWZ0ZXIuZmlyc3RDaGlsZCk7XG5cbiAgICAgICAgaWYgKGNhcm91c2VsKSB7XG4gICAgICAgICAgdmFyIGNsb25lTGFzdCA9IHNsaWRlSXRlbXNbc2xpZGVDb3VudCAtIDEgLSBudW1dLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICBhZGRDbGFzcyhjbG9uZUxhc3QsIHNsaWRlQ2xvbmVkQ2xhc3MpO1xuICAgICAgICAgIHJlbW92ZUF0dHJzKGNsb25lTGFzdCwgJ2lkJyk7XG4gICAgICAgICAgZnJhZ21lbnRCZWZvcmUuYXBwZW5kQ2hpbGQoY2xvbmVMYXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGZyYWdtZW50QmVmb3JlLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnRBZnRlcik7XG4gICAgICBzbGlkZUl0ZW1zID0gY29udGFpbmVyLmNoaWxkcmVuO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFNsaWRlclRyYW5zZm9ybSAoKSB7XG4gICAgLy8gIyMgaW1hZ2VzIGxvYWRlZC9mYWlsZWRcbiAgICBpZiAoaGFzT3B0aW9uKCdhdXRvSGVpZ2h0JykgfHwgYXV0b1dpZHRoIHx8ICFob3Jpem9udGFsKSB7XG4gICAgICB2YXIgaW1ncyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcblxuICAgICAgLy8gYWRkIGltZyBsb2FkIGV2ZW50IGxpc3RlbmVyXG4gICAgICBmb3JFYWNoKGltZ3MsIGZ1bmN0aW9uKGltZykge1xuICAgICAgICB2YXIgc3JjID0gaW1nLnNyYztcblxuICAgICAgICBpZiAoIWxhenlsb2FkKSB7XG4gICAgICAgICAgLy8gbm90IGRhdGEgaW1nXG4gICAgICAgICAgaWYgKHNyYyAmJiBzcmMuaW5kZXhPZignZGF0YTppbWFnZScpIDwgMCkge1xuICAgICAgICAgICAgaW1nLnNyYyA9ICcnO1xuICAgICAgICAgICAgYWRkRXZlbnRzKGltZywgaW1nRXZlbnRzKTtcbiAgICAgICAgICAgIGFkZENsYXNzKGltZywgJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgICAvLyBkYXRhIGltZ1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbWdMb2FkZWQoaW1nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBzZXQgaW1nc0NvbXBsZXRlXG4gICAgICByYWYoZnVuY3Rpb24oKXsgaW1nc0xvYWRlZENoZWNrKGFycmF5RnJvbU5vZGVMaXN0KGltZ3MpLCBmdW5jdGlvbigpIHsgaW1nc0NvbXBsZXRlID0gdHJ1ZTsgfSk7IH0pO1xuXG4gICAgICAvLyByZXNldCBpbWdzIGZvciBhdXRvIGhlaWdodDogY2hlY2sgdmlzaWJsZSBpbWdzIG9ubHlcbiAgICAgIGlmIChoYXNPcHRpb24oJ2F1dG9IZWlnaHQnKSkgeyBpbWdzID0gZ2V0SW1hZ2VBcnJheShpbmRleCwgTWF0aC5taW4oaW5kZXggKyBpdGVtcyAtIDEsIHNsaWRlQ291bnROZXcgLSAxKSk7IH1cblxuICAgICAgbGF6eWxvYWQgPyBpbml0U2xpZGVyVHJhbnNmb3JtU3R5bGVDaGVjaygpIDogcmFmKGZ1bmN0aW9uKCl7IGltZ3NMb2FkZWRDaGVjayhhcnJheUZyb21Ob2RlTGlzdChpbWdzKSwgaW5pdFNsaWRlclRyYW5zZm9ybVN0eWxlQ2hlY2spOyB9KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXQgY29udGFpbmVyIHRyYW5zZm9ybSBwcm9wZXJ0eVxuICAgICAgaWYgKGNhcm91c2VsKSB7IGRvQ29udGFpbmVyVHJhbnNmb3JtU2lsZW50KCk7IH1cblxuICAgICAgLy8gdXBkYXRlIHNsaWRlciB0b29scyBhbmQgZXZlbnRzXG4gICAgICBpbml0VG9vbHMoKTtcbiAgICAgIGluaXRFdmVudHMoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2xpZGVyVHJhbnNmb3JtU3R5bGVDaGVjayAoKSB7XG4gICAgaWYgKGF1dG9XaWR0aCAmJiBzbGlkZUNvdW50ID4gMSkge1xuICAgICAgLy8gY2hlY2sgc3R5bGVzIGFwcGxpY2F0aW9uXG4gICAgICB2YXIgbnVtID0gbG9vcCA/IGluZGV4IDogc2xpZGVDb3VudCAtIDE7XG5cbiAgICAgIChmdW5jdGlvbiBzdHlsZXNBcHBsaWNhdGlvbkNoZWNrKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHNsaWRlSXRlbXNbbnVtXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICB2YXIgcmlnaHQgPSBzbGlkZUl0ZW1zW251bSAtIDFdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0O1xuXG4gICAgICAgIChNYXRoLmFicyhsZWZ0IC0gcmlnaHQpIDw9IDEpID9cbiAgICAgICAgICBpbml0U2xpZGVyVHJhbnNmb3JtQ29yZSgpIDpcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHN0eWxlc0FwcGxpY2F0aW9uQ2hlY2soKSB9LCAxNik7XG4gICAgICB9KSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRTbGlkZXJUcmFuc2Zvcm1Db3JlKCk7XG4gICAgfVxuICB9XG5cblxuICBmdW5jdGlvbiBpbml0U2xpZGVyVHJhbnNmb3JtQ29yZSAoKSB7XG4gICAgLy8gcnVuIEZuKClzIHdoaWNoIGFyZSByZWx5IG9uIGltYWdlIGxvYWRpbmdcbiAgICBpZiAoIWhvcml6b250YWwgfHwgYXV0b1dpZHRoKSB7XG4gICAgICBzZXRTbGlkZVBvc2l0aW9ucygpO1xuXG4gICAgICBpZiAoYXV0b1dpZHRoKSB7XG4gICAgICAgIHJpZ2h0Qm91bmRhcnkgPSBnZXRSaWdodEJvdW5kYXJ5KCk7XG4gICAgICAgIGlmIChmcmVlemFibGUpIHsgZnJlZXplID0gZ2V0RnJlZXplKCk7IH1cbiAgICAgICAgaW5kZXhNYXggPSBnZXRJbmRleE1heCgpOyAvLyA8PSBzbGlkZVBvc2l0aW9ucywgcmlnaHRCb3VuZGFyeSA8PVxuICAgICAgICByZXNldFZhcmlibGVzV2hlbkRpc2FibGUoZGlzYWJsZSB8fCBmcmVlemUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlQ29udGVudFdyYXBwZXJIZWlnaHQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXQgY29udGFpbmVyIHRyYW5zZm9ybSBwcm9wZXJ0eVxuICAgIGlmIChjYXJvdXNlbCkgeyBkb0NvbnRhaW5lclRyYW5zZm9ybVNpbGVudCgpOyB9XG5cbiAgICAvLyB1cGRhdGUgc2xpZGVyIHRvb2xzIGFuZCBldmVudHNcbiAgICBpbml0VG9vbHMoKTtcbiAgICBpbml0RXZlbnRzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2hlZXQgKCkge1xuICAgIC8vIGdhbGxlcnk6XG4gICAgLy8gc2V0IGFuaW1hdGlvbiBjbGFzc2VzIGFuZCBsZWZ0IHZhbHVlIGZvciBnYWxsZXJ5IHNsaWRlclxuICAgIGlmICghY2Fyb3VzZWwpIHtcbiAgICAgIGZvciAodmFyIGkgPSBpbmRleCwgbCA9IGluZGV4ICsgTWF0aC5taW4oc2xpZGVDb3VudCwgaXRlbXMpOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gc2xpZGVJdGVtc1tpXTtcbiAgICAgICAgaXRlbS5zdHlsZS5sZWZ0ID0gKGkgLSBpbmRleCkgKiAxMDAgLyBpdGVtcyArICclJztcbiAgICAgICAgYWRkQ2xhc3MoaXRlbSwgYW5pbWF0ZUluKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgYW5pbWF0ZU5vcm1hbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gIyMjIyBMQVlPVVRcblxuICAgIC8vICMjIElOTElORS1CTE9DSyBWUyBGTE9BVFxuXG4gICAgLy8gIyMgUGVyY2VudGFnZUxheW91dDpcbiAgICAvLyBzbGlkZXM6IGlubGluZS1ibG9ja1xuICAgIC8vIHJlbW92ZSBibGFuayBzcGFjZSBiZXR3ZWVuIHNsaWRlcyBieSBzZXQgZm9udC1zaXplOiAwXG5cbiAgICAvLyAjIyBOb24gUGVyY2VudGFnZUxheW91dDpcbiAgICAvLyBzbGlkZXM6IGZsb2F0XG4gICAgLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xMDAlXG4gICAgLy8gICAgICAgICBtYXJnaW4tbGVmdDogflxuXG4gICAgLy8gUmVzb3VyY2U6IGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzE0N3VwMjQ1d3dUWGVRWXZlM0JSU0FENG9WY3ZRbXVHc0Z0ZUpPZUE1eE5RL2VkaXQ/dXNwPXNoYXJpbmdcbiAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgaWYgKFBFUkNFTlRBR0VMQVlPVVQgfHwgYXV0b1dpZHRoKSB7XG4gICAgICAgIGFkZENTU1J1bGUoc2hlZXQsICcjJyArIHNsaWRlSWQgKyAnID4gLnRucy1pdGVtJywgJ2ZvbnQtc2l6ZTonICsgd2luLmdldENvbXB1dGVkU3R5bGUoc2xpZGVJdGVtc1swXSkuZm9udFNpemUgKyAnOycsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7XG4gICAgICAgIGFkZENTU1J1bGUoc2hlZXQsICcjJyArIHNsaWRlSWQsICdmb250LXNpemU6MDsnLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuICAgICAgfSBlbHNlIGlmIChjYXJvdXNlbCkge1xuICAgICAgICBmb3JFYWNoKHNsaWRlSXRlbXMsIGZ1bmN0aW9uIChzbGlkZSwgaSkge1xuICAgICAgICAgIHNsaWRlLnN0eWxlLm1hcmdpbkxlZnQgPSBnZXRTbGlkZU1hcmdpbkxlZnQoaSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gIyMgQkFTSUMgU1RZTEVTXG4gICAgaWYgKENTU01RKSB7XG4gICAgICAvLyBtaWRkbGUgd3JhcHBlciBzdHlsZVxuICAgICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTikge1xuICAgICAgICB2YXIgc3RyID0gbWlkZGxlV3JhcHBlciAmJiBvcHRpb25zLmF1dG9IZWlnaHQgPyBnZXRUcmFuc2l0aW9uRHVyYXRpb25TdHlsZShvcHRpb25zLnNwZWVkKSA6ICcnO1xuICAgICAgICBhZGRDU1NSdWxlKHNoZWV0LCAnIycgKyBzbGlkZUlkICsgJy1tdycsIHN0ciwgZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpKTtcbiAgICAgIH1cblxuICAgICAgLy8gaW5uZXIgd3JhcHBlciBzdHlsZXNcbiAgICAgIHN0ciA9IGdldElubmVyV3JhcHBlclN0eWxlcyhvcHRpb25zLmVkZ2VQYWRkaW5nLCBvcHRpb25zLmd1dHRlciwgb3B0aW9ucy5maXhlZFdpZHRoLCBvcHRpb25zLnNwZWVkLCBvcHRpb25zLmF1dG9IZWlnaHQpO1xuICAgICAgYWRkQ1NTUnVsZShzaGVldCwgJyMnICsgc2xpZGVJZCArICctaXcnLCBzdHIsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7XG5cbiAgICAgIC8vIGNvbnRhaW5lciBzdHlsZXNcbiAgICAgIGlmIChjYXJvdXNlbCkge1xuICAgICAgICBzdHIgPSBob3Jpem9udGFsICYmICFhdXRvV2lkdGggPyAnd2lkdGg6JyArIGdldENvbnRhaW5lcldpZHRoKG9wdGlvbnMuZml4ZWRXaWR0aCwgb3B0aW9ucy5ndXR0ZXIsIG9wdGlvbnMuaXRlbXMpICsgJzsnIDogJyc7XG4gICAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04pIHsgc3RyICs9IGdldFRyYW5zaXRpb25EdXJhdGlvblN0eWxlKHNwZWVkKTsgfVxuICAgICAgICBhZGRDU1NSdWxlKHNoZWV0LCAnIycgKyBzbGlkZUlkLCBzdHIsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNsaWRlIHN0eWxlc1xuICAgICAgc3RyID0gaG9yaXpvbnRhbCAmJiAhYXV0b1dpZHRoID8gZ2V0U2xpZGVXaWR0aFN0eWxlKG9wdGlvbnMuZml4ZWRXaWR0aCwgb3B0aW9ucy5ndXR0ZXIsIG9wdGlvbnMuaXRlbXMpIDogJyc7XG4gICAgICBpZiAob3B0aW9ucy5ndXR0ZXIpIHsgc3RyICs9IGdldFNsaWRlR3V0dGVyU3R5bGUob3B0aW9ucy5ndXR0ZXIpOyB9XG4gICAgICAvLyBzZXQgZ2FsbGVyeSBpdGVtcyB0cmFuc2l0aW9uLWR1cmF0aW9uXG4gICAgICBpZiAoIWNhcm91c2VsKSB7XG4gICAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04pIHsgc3RyICs9IGdldFRyYW5zaXRpb25EdXJhdGlvblN0eWxlKHNwZWVkKTsgfVxuICAgICAgICBpZiAoQU5JTUFUSU9ORFVSQVRJT04pIHsgc3RyICs9IGdldEFuaW1hdGlvbkR1cmF0aW9uU3R5bGUoc3BlZWQpOyB9XG4gICAgICB9XG4gICAgICBpZiAoc3RyKSB7IGFkZENTU1J1bGUoc2hlZXQsICcjJyArIHNsaWRlSWQgKyAnID4gLnRucy1pdGVtJywgc3RyLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpOyB9XG5cbiAgICAvLyBub24gQ1NTIG1lZGlhcXVlcmllczogSUU4XG4gICAgLy8gIyMgdXBkYXRlIGlubmVyIHdyYXBwZXIsIGNvbnRhaW5lciwgc2xpZGVzIGlmIG5lZWRlZFxuICAgIC8vIHNldCBpbmxpbmUgc3R5bGVzIGZvciBpbm5lciB3cmFwcGVyICYgY29udGFpbmVyXG4gICAgLy8gaW5zZXJ0IHN0eWxlc2hlZXQgKG9uZSBsaW5lKSBmb3Igc2xpZGVzIG9ubHkgKHNpbmNlIHNsaWRlcyBhcmUgbWFueSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbWlkZGxlIHdyYXBwZXIgc3R5bGVzXG4gICAgICB1cGRhdGVfY2Fyb3VzZWxfdHJhbnNpdGlvbl9kdXJhdGlvbigpO1xuXG4gICAgICAvLyBpbm5lciB3cmFwcGVyIHN0eWxlc1xuICAgICAgaW5uZXJXcmFwcGVyLnN0eWxlLmNzc1RleHQgPSBnZXRJbm5lcldyYXBwZXJTdHlsZXMoZWRnZVBhZGRpbmcsIGd1dHRlciwgZml4ZWRXaWR0aCwgYXV0b0hlaWdodCk7XG5cbiAgICAgIC8vIGNvbnRhaW5lciBzdHlsZXNcbiAgICAgIGlmIChjYXJvdXNlbCAmJiBob3Jpem9udGFsICYmICFhdXRvV2lkdGgpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gZ2V0Q29udGFpbmVyV2lkdGgoZml4ZWRXaWR0aCwgZ3V0dGVyLCBpdGVtcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNsaWRlIHN0eWxlc1xuICAgICAgdmFyIHN0ciA9IGhvcml6b250YWwgJiYgIWF1dG9XaWR0aCA/IGdldFNsaWRlV2lkdGhTdHlsZShmaXhlZFdpZHRoLCBndXR0ZXIsIGl0ZW1zKSA6ICcnO1xuICAgICAgaWYgKGd1dHRlcikgeyBzdHIgKz0gZ2V0U2xpZGVHdXR0ZXJTdHlsZShndXR0ZXIpOyB9XG5cbiAgICAgIC8vIGFwcGVuZCB0byB0aGUgbGFzdCBsaW5lXG4gICAgICBpZiAoc3RyKSB7IGFkZENTU1J1bGUoc2hlZXQsICcjJyArIHNsaWRlSWQgKyAnID4gLnRucy1pdGVtJywgc3RyLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpOyB9XG4gICAgfVxuXG4gICAgLy8gIyMgTUVESUFRVUVSSUVTXG4gICAgaWYgKHJlc3BvbnNpdmUgJiYgQ1NTTVEpIHtcbiAgICAgIGZvciAodmFyIGJwIGluIHJlc3BvbnNpdmUpIHtcbiAgICAgICAgLy8gYnA6IGNvbnZlcnQgc3RyaW5nIHRvIG51bWJlclxuICAgICAgICBicCA9IHBhcnNlSW50KGJwKTtcblxuICAgICAgICB2YXIgb3B0cyA9IHJlc3BvbnNpdmVbYnBdLFxuICAgICAgICAgICAgc3RyID0gJycsXG4gICAgICAgICAgICBtaWRkbGVXcmFwcGVyU3RyID0gJycsXG4gICAgICAgICAgICBpbm5lcldyYXBwZXJTdHIgPSAnJyxcbiAgICAgICAgICAgIGNvbnRhaW5lclN0ciA9ICcnLFxuICAgICAgICAgICAgc2xpZGVTdHIgPSAnJyxcbiAgICAgICAgICAgIGl0ZW1zQlAgPSAhYXV0b1dpZHRoID8gZ2V0T3B0aW9uKCdpdGVtcycsIGJwKSA6IG51bGwsXG4gICAgICAgICAgICBmaXhlZFdpZHRoQlAgPSBnZXRPcHRpb24oJ2ZpeGVkV2lkdGgnLCBicCksXG4gICAgICAgICAgICBzcGVlZEJQID0gZ2V0T3B0aW9uKCdzcGVlZCcsIGJwKSxcbiAgICAgICAgICAgIGVkZ2VQYWRkaW5nQlAgPSBnZXRPcHRpb24oJ2VkZ2VQYWRkaW5nJywgYnApLFxuICAgICAgICAgICAgYXV0b0hlaWdodEJQID0gZ2V0T3B0aW9uKCdhdXRvSGVpZ2h0JywgYnApLFxuICAgICAgICAgICAgZ3V0dGVyQlAgPSBnZXRPcHRpb24oJ2d1dHRlcicsIGJwKTtcblxuICAgICAgICAvLyBtaWRkbGUgd3JhcHBlciBzdHJpbmdcbiAgICAgICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTiAmJiBtaWRkbGVXcmFwcGVyICYmIGdldE9wdGlvbignYXV0b0hlaWdodCcsIGJwKSAmJiAnc3BlZWQnIGluIG9wdHMpIHtcbiAgICAgICAgICBtaWRkbGVXcmFwcGVyU3RyID0gJyMnICsgc2xpZGVJZCArICctbXd7JyArIGdldFRyYW5zaXRpb25EdXJhdGlvblN0eWxlKHNwZWVkQlApICsgJ30nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW5uZXIgd3JhcHBlciBzdHJpbmdcbiAgICAgICAgaWYgKCdlZGdlUGFkZGluZycgaW4gb3B0cyB8fCAnZ3V0dGVyJyBpbiBvcHRzKSB7XG4gICAgICAgICAgaW5uZXJXcmFwcGVyU3RyID0gJyMnICsgc2xpZGVJZCArICctaXd7JyArIGdldElubmVyV3JhcHBlclN0eWxlcyhlZGdlUGFkZGluZ0JQLCBndXR0ZXJCUCwgZml4ZWRXaWR0aEJQLCBzcGVlZEJQLCBhdXRvSGVpZ2h0QlApICsgJ30nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29udGFpbmVyIHN0cmluZ1xuICAgICAgICBpZiAoY2Fyb3VzZWwgJiYgaG9yaXpvbnRhbCAmJiAhYXV0b1dpZHRoICYmICgnZml4ZWRXaWR0aCcgaW4gb3B0cyB8fCAnaXRlbXMnIGluIG9wdHMgfHwgKGZpeGVkV2lkdGggJiYgJ2d1dHRlcicgaW4gb3B0cykpKSB7XG4gICAgICAgICAgY29udGFpbmVyU3RyID0gJ3dpZHRoOicgKyBnZXRDb250YWluZXJXaWR0aChmaXhlZFdpZHRoQlAsIGd1dHRlckJQLCBpdGVtc0JQKSArICc7JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoVFJBTlNJVElPTkRVUkFUSU9OICYmICdzcGVlZCcgaW4gb3B0cykge1xuICAgICAgICAgIGNvbnRhaW5lclN0ciArPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25TdHlsZShzcGVlZEJQKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGFpbmVyU3RyKSB7XG4gICAgICAgICAgY29udGFpbmVyU3RyID0gJyMnICsgc2xpZGVJZCArICd7JyArIGNvbnRhaW5lclN0ciArICd9JztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNsaWRlIHN0cmluZ1xuICAgICAgICBpZiAoJ2ZpeGVkV2lkdGgnIGluIG9wdHMgfHwgKGZpeGVkV2lkdGggJiYgJ2d1dHRlcicgaW4gb3B0cykgfHwgIWNhcm91c2VsICYmICdpdGVtcycgaW4gb3B0cykge1xuICAgICAgICAgIHNsaWRlU3RyICs9IGdldFNsaWRlV2lkdGhTdHlsZShmaXhlZFdpZHRoQlAsIGd1dHRlckJQLCBpdGVtc0JQKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2d1dHRlcicgaW4gb3B0cykge1xuICAgICAgICAgIHNsaWRlU3RyICs9IGdldFNsaWRlR3V0dGVyU3R5bGUoZ3V0dGVyQlApO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBnYWxsZXJ5IGl0ZW1zIHRyYW5zaXRpb24tZHVyYXRpb25cbiAgICAgICAgaWYgKCFjYXJvdXNlbCAmJiAnc3BlZWQnIGluIG9wdHMpIHtcbiAgICAgICAgICBpZiAoVFJBTlNJVElPTkRVUkFUSU9OKSB7IHNsaWRlU3RyICs9IGdldFRyYW5zaXRpb25EdXJhdGlvblN0eWxlKHNwZWVkQlApOyB9XG4gICAgICAgICAgaWYgKEFOSU1BVElPTkRVUkFUSU9OKSB7IHNsaWRlU3RyICs9IGdldEFuaW1hdGlvbkR1cmF0aW9uU3R5bGUoc3BlZWRCUCk7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2xpZGVTdHIpIHsgc2xpZGVTdHIgPSAnIycgKyBzbGlkZUlkICsgJyA+IC50bnMtaXRlbXsnICsgc2xpZGVTdHIgKyAnfSc7IH1cblxuICAgICAgICAvLyBhZGQgdXBcbiAgICAgICAgc3RyID0gbWlkZGxlV3JhcHBlclN0ciArIGlubmVyV3JhcHBlclN0ciArIGNvbnRhaW5lclN0ciArIHNsaWRlU3RyO1xuXG4gICAgICAgIGlmIChzdHIpIHtcbiAgICAgICAgICBzaGVldC5pbnNlcnRSdWxlKCdAbWVkaWEgKG1pbi13aWR0aDogJyArIGJwIC8gMTYgKyAnZW0pIHsnICsgc3RyICsgJ30nLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFRvb2xzICgpIHtcbiAgICAvLyA9PSBzbGlkZXMgPT1cbiAgICB1cGRhdGVTbGlkZVN0YXR1cygpO1xuXG4gICAgLy8gPT0gbGl2ZSByZWdpb24gPT1cbiAgICBvdXRlcldyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgJzxkaXYgY2xhc3M9XCJ0bnMtbGl2ZXJlZ2lvbiB0bnMtdmlzdWFsbHktaGlkZGVuXCIgYXJpYS1saXZlPVwicG9saXRlXCIgYXJpYS1hdG9taWM9XCJ0cnVlXCI+c2xpZGUgPHNwYW4gY2xhc3M9XCJjdXJyZW50XCI+JyArIGdldExpdmVSZWdpb25TdHIoKSArICc8L3NwYW4+ICBvZiAnICsgc2xpZGVDb3VudCArICc8L2Rpdj4nKTtcbiAgICBsaXZlcmVnaW9uQ3VycmVudCA9IG91dGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcudG5zLWxpdmVyZWdpb24gLmN1cnJlbnQnKTtcblxuICAgIC8vID09IGF1dG9wbGF5SW5pdCA9PVxuICAgIGlmIChoYXNBdXRvcGxheSkge1xuICAgICAgdmFyIHR4dCA9IGF1dG9wbGF5ID8gJ3N0b3AnIDogJ3N0YXJ0JztcbiAgICAgIGlmIChhdXRvcGxheUJ1dHRvbikge1xuICAgICAgICBzZXRBdHRycyhhdXRvcGxheUJ1dHRvbiwgeydkYXRhLWFjdGlvbic6IHR4dH0pO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmF1dG9wbGF5QnV0dG9uT3V0cHV0KSB7XG4gICAgICAgIG91dGVyV3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoZ2V0SW5zZXJ0UG9zaXRpb24ob3B0aW9ucy5hdXRvcGxheVBvc2l0aW9uKSwgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtYWN0aW9uPVwiJyArIHR4dCArICdcIj4nICsgYXV0b3BsYXlIdG1sU3RyaW5nc1swXSArIHR4dCArIGF1dG9wbGF5SHRtbFN0cmluZ3NbMV0gKyBhdXRvcGxheVRleHRbMF0gKyAnPC9idXR0b24+Jyk7XG4gICAgICAgIGF1dG9wbGF5QnV0dG9uID0gb3V0ZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjdGlvbl0nKTtcbiAgICAgIH1cblxuICAgICAgLy8gYWRkIGV2ZW50XG4gICAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHtcbiAgICAgICAgYWRkRXZlbnRzKGF1dG9wbGF5QnV0dG9uLCB7J2NsaWNrJzogdG9nZ2xlQXV0b3BsYXl9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgIHN0YXJ0QXV0b3BsYXkoKTtcbiAgICAgICAgaWYgKGF1dG9wbGF5SG92ZXJQYXVzZSkgeyBhZGRFdmVudHMoY29udGFpbmVyLCBob3ZlckV2ZW50cyk7IH1cbiAgICAgICAgaWYgKGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHkpIHsgYWRkRXZlbnRzKGNvbnRhaW5lciwgdmlzaWJpbGl0eUV2ZW50KTsgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vID09IG5hdkluaXQgPT1cbiAgICBpZiAoaGFzTmF2KSB7XG4gICAgICB2YXIgaW5pdEluZGV4ID0gIWNhcm91c2VsID8gMCA6IGNsb25lQ291bnQ7XG4gICAgICAvLyBjdXN0b21pemVkIG5hdlxuICAgICAgLy8gd2lsbCBub3QgaGlkZSB0aGUgbmF2cyBpbiBjYXNlIHRoZXkncmUgdGh1bWJuYWlsc1xuICAgICAgaWYgKG5hdkNvbnRhaW5lcikge1xuICAgICAgICBzZXRBdHRycyhuYXZDb250YWluZXIsIHsnYXJpYS1sYWJlbCc6ICdDYXJvdXNlbCBQYWdpbmF0aW9uJ30pO1xuICAgICAgICBuYXZJdGVtcyA9IG5hdkNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICAgICAgZm9yRWFjaChuYXZJdGVtcywgZnVuY3Rpb24oaXRlbSwgaSkge1xuICAgICAgICAgIHNldEF0dHJzKGl0ZW0sIHtcbiAgICAgICAgICAgICdkYXRhLW5hdic6IGksXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnLFxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiBuYXZTdHIgKyAoaSArIDEpLFxuICAgICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBzbGlkZUlkLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgLy8gZ2VuZXJhdGVkIG5hdlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5hdkh0bWwgPSAnJyxcbiAgICAgICAgICAgIGhpZGRlblN0ciA9IG5hdkFzVGh1bWJuYWlscyA/ICcnIDogJ3N0eWxlPVwiZGlzcGxheTpub25lXCInO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlQ291bnQ7IGkrKykge1xuICAgICAgICAgIC8vIGhpZGUgbmF2IGl0ZW1zIGJ5IGRlZmF1bHRcbiAgICAgICAgICBuYXZIdG1sICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLW5hdj1cIicgKyBpICsnXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtY29udHJvbHM9XCInICsgc2xpZGVJZCArICdcIiAnICsgaGlkZGVuU3RyICsgJyBhcmlhLWxhYmVsPVwiJyArIG5hdlN0ciArIChpICsgMSkgKydcIj48L2J1dHRvbj4nO1xuICAgICAgICB9XG4gICAgICAgIG5hdkh0bWwgPSAnPGRpdiBjbGFzcz1cInRucy1uYXZcIiBhcmlhLWxhYmVsPVwiQ2Fyb3VzZWwgUGFnaW5hdGlvblwiPicgKyBuYXZIdG1sICsgJzwvZGl2Pic7XG4gICAgICAgIG91dGVyV3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoZ2V0SW5zZXJ0UG9zaXRpb24ob3B0aW9ucy5uYXZQb3NpdGlvbiksIG5hdkh0bWwpO1xuXG4gICAgICAgIG5hdkNvbnRhaW5lciA9IG91dGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcudG5zLW5hdicpO1xuICAgICAgICBuYXZJdGVtcyA9IG5hdkNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlTmF2VmlzaWJpbGl0eSgpO1xuXG4gICAgICAvLyBhZGQgdHJhbnNpdGlvblxuICAgICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTikge1xuICAgICAgICB2YXIgcHJlZml4ID0gVFJBTlNJVElPTkRVUkFUSU9OLnN1YnN0cmluZygwLCBUUkFOU0lUSU9ORFVSQVRJT04ubGVuZ3RoIC0gMTgpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBzdHIgPSAndHJhbnNpdGlvbjogYWxsICcgKyBzcGVlZCAvIDEwMDAgKyAncyc7XG5cbiAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgIHN0ciA9ICctJyArIHByZWZpeCArICctJyArIHN0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZENTU1J1bGUoc2hlZXQsICdbYXJpYS1jb250cm9sc149JyArIHNsaWRlSWQgKyAnLWl0ZW1dJywgc3RyLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuICAgICAgfVxuXG4gICAgICBzZXRBdHRycyhuYXZJdGVtc1tuYXZDdXJyZW50SW5kZXhdLCB7J2FyaWEtbGFiZWwnOiBuYXZTdHIgKyAobmF2Q3VycmVudEluZGV4ICsgMSkgKyBuYXZTdHJDdXJyZW50fSk7XG4gICAgICByZW1vdmVBdHRycyhuYXZJdGVtc1tuYXZDdXJyZW50SW5kZXhdLCAndGFiaW5kZXgnKTtcbiAgICAgIGFkZENsYXNzKG5hdkl0ZW1zW25hdkN1cnJlbnRJbmRleF0sIG5hdkFjdGl2ZUNsYXNzKTtcblxuICAgICAgLy8gYWRkIGV2ZW50c1xuICAgICAgYWRkRXZlbnRzKG5hdkNvbnRhaW5lciwgbmF2RXZlbnRzKTtcbiAgICB9XG5cblxuXG4gICAgLy8gPT0gY29udHJvbHNJbml0ID09XG4gICAgaWYgKGhhc0NvbnRyb2xzKSB7XG4gICAgICBpZiAoIWNvbnRyb2xzQ29udGFpbmVyICYmICghcHJldkJ1dHRvbiB8fCAhbmV4dEJ1dHRvbikpIHtcbiAgICAgICAgb3V0ZXJXcmFwcGVyLmluc2VydEFkamFjZW50SFRNTChnZXRJbnNlcnRQb3NpdGlvbihvcHRpb25zLmNvbnRyb2xzUG9zaXRpb24pLCAnPGRpdiBjbGFzcz1cInRucy1jb250cm9sc1wiIGFyaWEtbGFiZWw9XCJDYXJvdXNlbCBOYXZpZ2F0aW9uXCIgdGFiaW5kZXg9XCIwXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1jb250cm9scz1cInByZXZcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1jb250cm9scz1cIicgKyBzbGlkZUlkICsnXCI+JyArIGNvbnRyb2xzVGV4dFswXSArICc8L2J1dHRvbj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWNvbnRyb2xzPVwibmV4dFwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWNvbnRyb2xzPVwiJyArIHNsaWRlSWQgKydcIj4nICsgY29udHJvbHNUZXh0WzFdICsgJzwvYnV0dG9uPjwvZGl2PicpO1xuXG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVyID0gb3V0ZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy50bnMtY29udHJvbHMnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwcmV2QnV0dG9uIHx8ICFuZXh0QnV0dG9uKSB7XG4gICAgICAgIHByZXZCdXR0b24gPSBjb250cm9sc0NvbnRhaW5lci5jaGlsZHJlblswXTtcbiAgICAgICAgbmV4dEJ1dHRvbiA9IGNvbnRyb2xzQ29udGFpbmVyLmNoaWxkcmVuWzFdO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5jb250cm9sc0NvbnRhaW5lcikge1xuICAgICAgICBzZXRBdHRycyhjb250cm9sc0NvbnRhaW5lciwge1xuICAgICAgICAgICdhcmlhLWxhYmVsJzogJ0Nhcm91c2VsIE5hdmlnYXRpb24nLFxuICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuY29udHJvbHNDb250YWluZXIgfHwgKG9wdGlvbnMucHJldkJ1dHRvbiAmJiBvcHRpb25zLm5leHRCdXR0b24pKSB7XG4gICAgICAgIHNldEF0dHJzKFtwcmV2QnV0dG9uLCBuZXh0QnV0dG9uXSwge1xuICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogc2xpZGVJZCxcbiAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuY29udHJvbHNDb250YWluZXIgfHwgKG9wdGlvbnMucHJldkJ1dHRvbiAmJiBvcHRpb25zLm5leHRCdXR0b24pKSB7XG4gICAgICAgIHNldEF0dHJzKHByZXZCdXR0b24sIHsnZGF0YS1jb250cm9scycgOiAncHJldid9KTtcbiAgICAgICAgc2V0QXR0cnMobmV4dEJ1dHRvbiwgeydkYXRhLWNvbnRyb2xzJyA6ICduZXh0J30pO1xuICAgICAgfVxuXG4gICAgICBwcmV2SXNCdXR0b24gPSBpc0J1dHRvbihwcmV2QnV0dG9uKTtcbiAgICAgIG5leHRJc0J1dHRvbiA9IGlzQnV0dG9uKG5leHRCdXR0b24pO1xuXG4gICAgICB1cGRhdGVDb250cm9sc1N0YXR1cygpO1xuXG4gICAgICAvLyBhZGQgZXZlbnRzXG4gICAgICBpZiAoY29udHJvbHNDb250YWluZXIpIHtcbiAgICAgICAgYWRkRXZlbnRzKGNvbnRyb2xzQ29udGFpbmVyLCBjb250cm9sc0V2ZW50cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRFdmVudHMocHJldkJ1dHRvbiwgY29udHJvbHNFdmVudHMpO1xuICAgICAgICBhZGRFdmVudHMobmV4dEJ1dHRvbiwgY29udHJvbHNFdmVudHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGhpZGUgdG9vbHMgaWYgbmVlZGVkXG4gICAgZGlzYWJsZVVJKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0RXZlbnRzICgpIHtcbiAgICAvLyBhZGQgZXZlbnRzXG4gICAgaWYgKGNhcm91c2VsICYmIFRSQU5TSVRJT05FTkQpIHtcbiAgICAgIHZhciBldmUgPSB7fTtcbiAgICAgIGV2ZVtUUkFOU0lUSU9ORU5EXSA9IG9uVHJhbnNpdGlvbkVuZDtcbiAgICAgIGFkZEV2ZW50cyhjb250YWluZXIsIGV2ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRvdWNoKSB7IGFkZEV2ZW50cyhjb250YWluZXIsIHRvdWNoRXZlbnRzLCBvcHRpb25zLnByZXZlbnRTY3JvbGxPblRvdWNoKTsgfVxuICAgIGlmIChtb3VzZURyYWcpIHsgYWRkRXZlbnRzKGNvbnRhaW5lciwgZHJhZ0V2ZW50cyk7IH1cbiAgICBpZiAoYXJyb3dLZXlzKSB7IGFkZEV2ZW50cyhkb2MsIGRvY21lbnRLZXlkb3duRXZlbnQpOyB9XG5cbiAgICBpZiAobmVzdGVkID09PSAnaW5uZXInKSB7XG4gICAgICBldmVudHMub24oJ291dGVyUmVzaXplZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzaXplVGFza3MoKTtcbiAgICAgICAgZXZlbnRzLmVtaXQoJ2lubmVyTG9hZGVkJywgaW5mbygpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocmVzcG9uc2l2ZSB8fCBmaXhlZFdpZHRoIHx8IGF1dG9XaWR0aCB8fCBhdXRvSGVpZ2h0IHx8ICFob3Jpem9udGFsKSB7XG4gICAgICBhZGRFdmVudHMod2luLCB7J3Jlc2l6ZSc6IG9uUmVzaXplfSk7XG4gICAgfVxuXG4gICAgaWYgKGF1dG9IZWlnaHQpIHtcbiAgICAgIGlmIChuZXN0ZWQgPT09ICdvdXRlcicpIHtcbiAgICAgICAgZXZlbnRzLm9uKCdpbm5lckxvYWRlZCcsIGRvQXV0b0hlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKCFkaXNhYmxlKSB7IGRvQXV0b0hlaWdodCgpOyB9XG4gICAgfVxuXG4gICAgZG9MYXp5TG9hZCgpO1xuICAgIGlmIChkaXNhYmxlKSB7IGRpc2FibGVTbGlkZXIoKTsgfSBlbHNlIGlmIChmcmVlemUpIHsgZnJlZXplU2xpZGVyKCk7IH1cblxuICAgIGV2ZW50cy5vbignaW5kZXhDaGFuZ2VkJywgYWRkaXRpb25hbFVwZGF0ZXMpO1xuICAgIGlmIChuZXN0ZWQgPT09ICdpbm5lcicpIHsgZXZlbnRzLmVtaXQoJ2lubmVyTG9hZGVkJywgaW5mbygpKTsgfVxuICAgIGlmICh0eXBlb2Ygb25Jbml0ID09PSAnZnVuY3Rpb24nKSB7IG9uSW5pdChpbmZvKCkpOyB9XG4gICAgaXNPbiA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICAvLyBzaGVldFxuICAgIHNoZWV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBpZiAoc2hlZXQub3duZXJOb2RlKSB7IHNoZWV0Lm93bmVyTm9kZS5yZW1vdmUoKTsgfVxuXG4gICAgLy8gcmVtb3ZlIHdpbiBldmVudCBsaXN0ZW5lcnNcbiAgICByZW1vdmVFdmVudHMod2luLCB7J3Jlc2l6ZSc6IG9uUmVzaXplfSk7XG5cbiAgICAvLyBhcnJvd0tleXMsIGNvbnRyb2xzLCBuYXZcbiAgICBpZiAoYXJyb3dLZXlzKSB7IHJlbW92ZUV2ZW50cyhkb2MsIGRvY21lbnRLZXlkb3duRXZlbnQpOyB9XG4gICAgaWYgKGNvbnRyb2xzQ29udGFpbmVyKSB7IHJlbW92ZUV2ZW50cyhjb250cm9sc0NvbnRhaW5lciwgY29udHJvbHNFdmVudHMpOyB9XG4gICAgaWYgKG5hdkNvbnRhaW5lcikgeyByZW1vdmVFdmVudHMobmF2Q29udGFpbmVyLCBuYXZFdmVudHMpOyB9XG5cbiAgICAvLyBhdXRvcGxheVxuICAgIHJlbW92ZUV2ZW50cyhjb250YWluZXIsIGhvdmVyRXZlbnRzKTtcbiAgICByZW1vdmVFdmVudHMoY29udGFpbmVyLCB2aXNpYmlsaXR5RXZlbnQpO1xuICAgIGlmIChhdXRvcGxheUJ1dHRvbikgeyByZW1vdmVFdmVudHMoYXV0b3BsYXlCdXR0b24sIHsnY2xpY2snOiB0b2dnbGVBdXRvcGxheX0pOyB9XG4gICAgaWYgKGF1dG9wbGF5KSB7IGNsZWFySW50ZXJ2YWwoYXV0b3BsYXlUaW1lcik7IH1cblxuICAgIC8vIGNvbnRhaW5lclxuICAgIGlmIChjYXJvdXNlbCAmJiBUUkFOU0lUSU9ORU5EKSB7XG4gICAgICB2YXIgZXZlID0ge307XG4gICAgICBldmVbVFJBTlNJVElPTkVORF0gPSBvblRyYW5zaXRpb25FbmQ7XG4gICAgICByZW1vdmVFdmVudHMoY29udGFpbmVyLCBldmUpO1xuICAgIH1cbiAgICBpZiAodG91Y2gpIHsgcmVtb3ZlRXZlbnRzKGNvbnRhaW5lciwgdG91Y2hFdmVudHMpOyB9XG4gICAgaWYgKG1vdXNlRHJhZykgeyByZW1vdmVFdmVudHMoY29udGFpbmVyLCBkcmFnRXZlbnRzKTsgfVxuXG4gICAgLy8gY2FjaGUgT2JqZWN0IHZhbHVlcyBpbiBvcHRpb25zICYmIHJlc2V0IEhUTUxcbiAgICB2YXIgaHRtbExpc3QgPSBbY29udGFpbmVySFRNTCwgY29udHJvbHNDb250YWluZXJIVE1MLCBwcmV2QnV0dG9uSFRNTCwgbmV4dEJ1dHRvbkhUTUwsIG5hdkNvbnRhaW5lckhUTUwsIGF1dG9wbGF5QnV0dG9uSFRNTF07XG5cbiAgICB0bnNMaXN0LmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSkge1xuICAgICAgdmFyIGVsID0gaXRlbSA9PT0gJ2NvbnRhaW5lcicgPyBvdXRlcldyYXBwZXIgOiBvcHRpb25zW2l0ZW1dO1xuXG4gICAgICBpZiAodHlwZW9mIGVsID09PSAnb2JqZWN0JyAmJiBlbCkge1xuICAgICAgICB2YXIgcHJldkVsID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZyA/IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgOiBmYWxzZSxcbiAgICAgICAgICAgIHBhcmVudEVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgZWwub3V0ZXJIVE1MID0gaHRtbExpc3RbaV07XG4gICAgICAgIG9wdGlvbnNbaXRlbV0gPSBwcmV2RWwgPyBwcmV2RWwubmV4dEVsZW1lbnRTaWJsaW5nIDogcGFyZW50RWwuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vIHJlc2V0IHZhcmlhYmxlc1xuICAgIHRuc0xpc3QgPSBhbmltYXRlSW4gPSBhbmltYXRlT3V0ID0gYW5pbWF0ZURlbGF5ID0gYW5pbWF0ZU5vcm1hbCA9IGhvcml6b250YWwgPSBvdXRlcldyYXBwZXIgPSBpbm5lcldyYXBwZXIgPSBjb250YWluZXIgPSBjb250YWluZXJQYXJlbnQgPSBjb250YWluZXJIVE1MID0gc2xpZGVJdGVtcyA9IHNsaWRlQ291bnQgPSBicmVha3BvaW50Wm9uZSA9IHdpbmRvd1dpZHRoID0gYXV0b1dpZHRoID0gZml4ZWRXaWR0aCA9IGVkZ2VQYWRkaW5nID0gZ3V0dGVyID0gdmlld3BvcnQgPSBpdGVtcyA9IHNsaWRlQnkgPSB2aWV3cG9ydE1heCA9IGFycm93S2V5cyA9IHNwZWVkID0gcmV3aW5kID0gbG9vcCA9IGF1dG9IZWlnaHQgPSBzaGVldCA9IGxhenlsb2FkID0gc2xpZGVQb3NpdGlvbnMgPSBzbGlkZUl0ZW1zT3V0ID0gY2xvbmVDb3VudCA9IHNsaWRlQ291bnROZXcgPSBoYXNSaWdodERlYWRab25lID0gcmlnaHRCb3VuZGFyeSA9IHVwZGF0ZUluZGV4QmVmb3JlVHJhbnNmb3JtID0gdHJhbnNmb3JtQXR0ciA9IHRyYW5zZm9ybVByZWZpeCA9IHRyYW5zZm9ybVBvc3RmaXggPSBnZXRJbmRleE1heCA9IGluZGV4ID0gaW5kZXhDYWNoZWQgPSBpbmRleE1pbiA9IGluZGV4TWF4ID0gcmVzaXplVGltZXIgPSBzd2lwZUFuZ2xlID0gbW92ZURpcmVjdGlvbkV4cGVjdGVkID0gcnVubmluZyA9IG9uSW5pdCA9IGV2ZW50cyA9IG5ld0NvbnRhaW5lckNsYXNzZXMgPSBzbGlkZUlkID0gZGlzYWJsZSA9IGRpc2FibGVkID0gZnJlZXphYmxlID0gZnJlZXplID0gZnJvemVuID0gY29udHJvbHNFdmVudHMgPSBuYXZFdmVudHMgPSBob3ZlckV2ZW50cyA9IHZpc2liaWxpdHlFdmVudCA9IGRvY21lbnRLZXlkb3duRXZlbnQgPSB0b3VjaEV2ZW50cyA9IGRyYWdFdmVudHMgPSBoYXNDb250cm9scyA9IGhhc05hdiA9IG5hdkFzVGh1bWJuYWlscyA9IGhhc0F1dG9wbGF5ID0gaGFzVG91Y2ggPSBoYXNNb3VzZURyYWcgPSBzbGlkZUFjdGl2ZUNsYXNzID0gaW1nQ29tcGxldGVDbGFzcyA9IGltZ0V2ZW50cyA9IGltZ3NDb21wbGV0ZSA9IGNvbnRyb2xzID0gY29udHJvbHNUZXh0ID0gY29udHJvbHNDb250YWluZXIgPSBjb250cm9sc0NvbnRhaW5lckhUTUwgPSBwcmV2QnV0dG9uID0gbmV4dEJ1dHRvbiA9IHByZXZJc0J1dHRvbiA9IG5leHRJc0J1dHRvbiA9IG5hdiA9IG5hdkNvbnRhaW5lciA9IG5hdkNvbnRhaW5lckhUTUwgPSBuYXZJdGVtcyA9IHBhZ2VzID0gcGFnZXNDYWNoZWQgPSBuYXZDbGlja2VkID0gbmF2Q3VycmVudEluZGV4ID0gbmF2Q3VycmVudEluZGV4Q2FjaGVkID0gbmF2QWN0aXZlQ2xhc3MgPSBuYXZTdHIgPSBuYXZTdHJDdXJyZW50ID0gYXV0b3BsYXkgPSBhdXRvcGxheVRpbWVvdXQgPSBhdXRvcGxheURpcmVjdGlvbiA9IGF1dG9wbGF5VGV4dCA9IGF1dG9wbGF5SG92ZXJQYXVzZSA9IGF1dG9wbGF5QnV0dG9uID0gYXV0b3BsYXlCdXR0b25IVE1MID0gYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSA9IGF1dG9wbGF5SHRtbFN0cmluZ3MgPSBhdXRvcGxheVRpbWVyID0gYW5pbWF0aW5nID0gYXV0b3BsYXlIb3ZlclBhdXNlZCA9IGF1dG9wbGF5VXNlclBhdXNlZCA9IGF1dG9wbGF5VmlzaWJpbGl0eVBhdXNlZCA9IGluaXRQb3NpdGlvbiA9IGxhc3RQb3NpdGlvbiA9IHRyYW5zbGF0ZUluaXQgPSBkaXNYID0gZGlzWSA9IHBhblN0YXJ0ID0gcmFmSW5kZXggPSBnZXREaXN0ID0gdG91Y2ggPSBtb3VzZURyYWcgPSBudWxsO1xuICAgIC8vIGNoZWNrIHZhcmlhYmxlc1xuICAgIC8vIFthbmltYXRlSW4sIGFuaW1hdGVPdXQsIGFuaW1hdGVEZWxheSwgYW5pbWF0ZU5vcm1hbCwgaG9yaXpvbnRhbCwgb3V0ZXJXcmFwcGVyLCBpbm5lcldyYXBwZXIsIGNvbnRhaW5lciwgY29udGFpbmVyUGFyZW50LCBjb250YWluZXJIVE1MLCBzbGlkZUl0ZW1zLCBzbGlkZUNvdW50LCBicmVha3BvaW50Wm9uZSwgd2luZG93V2lkdGgsIGF1dG9XaWR0aCwgZml4ZWRXaWR0aCwgZWRnZVBhZGRpbmcsIGd1dHRlciwgdmlld3BvcnQsIGl0ZW1zLCBzbGlkZUJ5LCB2aWV3cG9ydE1heCwgYXJyb3dLZXlzLCBzcGVlZCwgcmV3aW5kLCBsb29wLCBhdXRvSGVpZ2h0LCBzaGVldCwgbGF6eWxvYWQsIHNsaWRlUG9zaXRpb25zLCBzbGlkZUl0ZW1zT3V0LCBjbG9uZUNvdW50LCBzbGlkZUNvdW50TmV3LCBoYXNSaWdodERlYWRab25lLCByaWdodEJvdW5kYXJ5LCB1cGRhdGVJbmRleEJlZm9yZVRyYW5zZm9ybSwgdHJhbnNmb3JtQXR0ciwgdHJhbnNmb3JtUHJlZml4LCB0cmFuc2Zvcm1Qb3N0Zml4LCBnZXRJbmRleE1heCwgaW5kZXgsIGluZGV4Q2FjaGVkLCBpbmRleE1pbiwgaW5kZXhNYXgsIHJlc2l6ZVRpbWVyLCBzd2lwZUFuZ2xlLCBtb3ZlRGlyZWN0aW9uRXhwZWN0ZWQsIHJ1bm5pbmcsIG9uSW5pdCwgZXZlbnRzLCBuZXdDb250YWluZXJDbGFzc2VzLCBzbGlkZUlkLCBkaXNhYmxlLCBkaXNhYmxlZCwgZnJlZXphYmxlLCBmcmVlemUsIGZyb3plbiwgY29udHJvbHNFdmVudHMsIG5hdkV2ZW50cywgaG92ZXJFdmVudHMsIHZpc2liaWxpdHlFdmVudCwgZG9jbWVudEtleWRvd25FdmVudCwgdG91Y2hFdmVudHMsIGRyYWdFdmVudHMsIGhhc0NvbnRyb2xzLCBoYXNOYXYsIG5hdkFzVGh1bWJuYWlscywgaGFzQXV0b3BsYXksIGhhc1RvdWNoLCBoYXNNb3VzZURyYWcsIHNsaWRlQWN0aXZlQ2xhc3MsIGltZ0NvbXBsZXRlQ2xhc3MsIGltZ0V2ZW50cywgaW1nc0NvbXBsZXRlLCBjb250cm9scywgY29udHJvbHNUZXh0LCBjb250cm9sc0NvbnRhaW5lciwgY29udHJvbHNDb250YWluZXJIVE1MLCBwcmV2QnV0dG9uLCBuZXh0QnV0dG9uLCBwcmV2SXNCdXR0b24sIG5leHRJc0J1dHRvbiwgbmF2LCBuYXZDb250YWluZXIsIG5hdkNvbnRhaW5lckhUTUwsIG5hdkl0ZW1zLCBwYWdlcywgcGFnZXNDYWNoZWQsIG5hdkNsaWNrZWQsIG5hdkN1cnJlbnRJbmRleCwgbmF2Q3VycmVudEluZGV4Q2FjaGVkLCBuYXZBY3RpdmVDbGFzcywgbmF2U3RyLCBuYXZTdHJDdXJyZW50LCBhdXRvcGxheSwgYXV0b3BsYXlUaW1lb3V0LCBhdXRvcGxheURpcmVjdGlvbiwgYXV0b3BsYXlUZXh0LCBhdXRvcGxheUhvdmVyUGF1c2UsIGF1dG9wbGF5QnV0dG9uLCBhdXRvcGxheUJ1dHRvbkhUTUwsIGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHksIGF1dG9wbGF5SHRtbFN0cmluZ3MsIGF1dG9wbGF5VGltZXIsIGFuaW1hdGluZywgYXV0b3BsYXlIb3ZlclBhdXNlZCwgYXV0b3BsYXlVc2VyUGF1c2VkLCBhdXRvcGxheVZpc2liaWxpdHlQYXVzZWQsIGluaXRQb3NpdGlvbiwgbGFzdFBvc2l0aW9uLCB0cmFuc2xhdGVJbml0LCBkaXNYLCBkaXNZLCBwYW5TdGFydCwgcmFmSW5kZXgsIGdldERpc3QsIHRvdWNoLCBtb3VzZURyYWcgXS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHsgaWYgKGl0ZW0gIT09IG51bGwpIHsgY29uc29sZS5sb2coaXRlbSk7IH0gfSk7XG5cbiAgICBmb3IgKHZhciBhIGluIHRoaXMpIHtcbiAgICAgIGlmIChhICE9PSAncmVidWlsZCcpIHsgdGhpc1thXSA9IG51bGw7IH1cbiAgICB9XG4gICAgaXNPbiA9IGZhbHNlO1xuICB9XG5cbi8vID09PSBPTiBSRVNJWkUgPT09XG4gIC8vIHJlc3BvbnNpdmUgfHwgZml4ZWRXaWR0aCB8fCBhdXRvV2lkdGggfHwgIWhvcml6b250YWxcbiAgZnVuY3Rpb24gb25SZXNpemUgKGUpIHtcbiAgICByYWYoZnVuY3Rpb24oKXsgcmVzaXplVGFza3MoZ2V0RXZlbnQoZSkpOyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2l6ZVRhc2tzIChlKSB7XG4gICAgaWYgKCFpc09uKSB7IHJldHVybjsgfVxuICAgIGlmIChuZXN0ZWQgPT09ICdvdXRlcicpIHsgZXZlbnRzLmVtaXQoJ291dGVyUmVzaXplZCcsIGluZm8oZSkpOyB9XG4gICAgd2luZG93V2lkdGggPSBnZXRXaW5kb3dXaWR0aCgpO1xuICAgIHZhciBicENoYW5nZWQsXG4gICAgICAgIGJyZWFrcG9pbnRab25lVGVtID0gYnJlYWtwb2ludFpvbmUsXG4gICAgICAgIG5lZWRDb250YWluZXJUcmFuc2Zvcm0gPSBmYWxzZTtcblxuICAgIGlmIChyZXNwb25zaXZlKSB7XG4gICAgICBzZXRCcmVha3BvaW50Wm9uZSgpO1xuICAgICAgYnBDaGFuZ2VkID0gYnJlYWtwb2ludFpvbmVUZW0gIT09IGJyZWFrcG9pbnRab25lO1xuICAgICAgLy8gaWYgKGhhc1JpZ2h0RGVhZFpvbmUpIHsgbmVlZENvbnRhaW5lclRyYW5zZm9ybSA9IHRydWU7IH0gLy8gKj9cbiAgICAgIGlmIChicENoYW5nZWQpIHsgZXZlbnRzLmVtaXQoJ25ld0JyZWFrcG9pbnRTdGFydCcsIGluZm8oZSkpOyB9XG4gICAgfVxuXG4gICAgdmFyIGluZENoYW5nZWQsXG4gICAgICAgIGl0ZW1zQ2hhbmdlZCxcbiAgICAgICAgaXRlbXNUZW0gPSBpdGVtcyxcbiAgICAgICAgZGlzYWJsZVRlbSA9IGRpc2FibGUsXG4gICAgICAgIGZyZWV6ZVRlbSA9IGZyZWV6ZSxcbiAgICAgICAgYXJyb3dLZXlzVGVtID0gYXJyb3dLZXlzLFxuICAgICAgICBjb250cm9sc1RlbSA9IGNvbnRyb2xzLFxuICAgICAgICBuYXZUZW0gPSBuYXYsXG4gICAgICAgIHRvdWNoVGVtID0gdG91Y2gsXG4gICAgICAgIG1vdXNlRHJhZ1RlbSA9IG1vdXNlRHJhZyxcbiAgICAgICAgYXV0b3BsYXlUZW0gPSBhdXRvcGxheSxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlVGVtID0gYXV0b3BsYXlIb3ZlclBhdXNlLFxuICAgICAgICBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5VGVtID0gYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSxcbiAgICAgICAgaW5kZXhUZW0gPSBpbmRleDtcblxuICAgIGlmIChicENoYW5nZWQpIHtcbiAgICAgIHZhciBmaXhlZFdpZHRoVGVtID0gZml4ZWRXaWR0aCxcbiAgICAgICAgICBhdXRvSGVpZ2h0VGVtID0gYXV0b0hlaWdodCxcbiAgICAgICAgICBjb250cm9sc1RleHRUZW0gPSBjb250cm9sc1RleHQsXG4gICAgICAgICAgY2VudGVyVGVtID0gY2VudGVyLFxuICAgICAgICAgIGF1dG9wbGF5VGV4dFRlbSA9IGF1dG9wbGF5VGV4dDtcblxuICAgICAgaWYgKCFDU1NNUSkge1xuICAgICAgICB2YXIgZ3V0dGVyVGVtID0gZ3V0dGVyLFxuICAgICAgICAgICAgZWRnZVBhZGRpbmdUZW0gPSBlZGdlUGFkZGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXQgb3B0aW9uOlxuICAgIC8vIGZpeGVkIHdpZHRoOiB2aWV3cG9ydCwgZml4ZWRXaWR0aCwgZ3V0dGVyID0+IGl0ZW1zXG4gICAgLy8gb3RoZXJzOiB3aW5kb3cgd2lkdGggPT4gYWxsIHZhcmlhYmxlc1xuICAgIC8vIGFsbDogaXRlbXMgPT4gc2xpZGVCeVxuICAgIGFycm93S2V5cyA9IGdldE9wdGlvbignYXJyb3dLZXlzJyk7XG4gICAgY29udHJvbHMgPSBnZXRPcHRpb24oJ2NvbnRyb2xzJyk7XG4gICAgbmF2ID0gZ2V0T3B0aW9uKCduYXYnKTtcbiAgICB0b3VjaCA9IGdldE9wdGlvbigndG91Y2gnKTtcbiAgICBjZW50ZXIgPSBnZXRPcHRpb24oJ2NlbnRlcicpO1xuICAgIG1vdXNlRHJhZyA9IGdldE9wdGlvbignbW91c2VEcmFnJyk7XG4gICAgYXV0b3BsYXkgPSBnZXRPcHRpb24oJ2F1dG9wbGF5Jyk7XG4gICAgYXV0b3BsYXlIb3ZlclBhdXNlID0gZ2V0T3B0aW9uKCdhdXRvcGxheUhvdmVyUGF1c2UnKTtcbiAgICBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ID0gZ2V0T3B0aW9uKCdhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5Jyk7XG5cbiAgICBpZiAoYnBDaGFuZ2VkKSB7XG4gICAgICBkaXNhYmxlID0gZ2V0T3B0aW9uKCdkaXNhYmxlJyk7XG4gICAgICBmaXhlZFdpZHRoID0gZ2V0T3B0aW9uKCdmaXhlZFdpZHRoJyk7XG4gICAgICBzcGVlZCA9IGdldE9wdGlvbignc3BlZWQnKTtcbiAgICAgIGF1dG9IZWlnaHQgPSBnZXRPcHRpb24oJ2F1dG9IZWlnaHQnKTtcbiAgICAgIGNvbnRyb2xzVGV4dCA9IGdldE9wdGlvbignY29udHJvbHNUZXh0Jyk7XG4gICAgICBhdXRvcGxheVRleHQgPSBnZXRPcHRpb24oJ2F1dG9wbGF5VGV4dCcpO1xuICAgICAgYXV0b3BsYXlUaW1lb3V0ID0gZ2V0T3B0aW9uKCdhdXRvcGxheVRpbWVvdXQnKTtcblxuICAgICAgaWYgKCFDU1NNUSkge1xuICAgICAgICBlZGdlUGFkZGluZyA9IGdldE9wdGlvbignZWRnZVBhZGRpbmcnKTtcbiAgICAgICAgZ3V0dGVyID0gZ2V0T3B0aW9uKCdndXR0ZXInKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXBkYXRlIG9wdGlvbnNcbiAgICByZXNldFZhcmlibGVzV2hlbkRpc2FibGUoZGlzYWJsZSk7XG5cbiAgICB2aWV3cG9ydCA9IGdldFZpZXdwb3J0V2lkdGgoKTsgLy8gPD0gZWRnZVBhZGRpbmcsIGd1dHRlclxuICAgIGlmICgoIWhvcml6b250YWwgfHwgYXV0b1dpZHRoKSAmJiAhZGlzYWJsZSkge1xuICAgICAgc2V0U2xpZGVQb3NpdGlvbnMoKTtcbiAgICAgIGlmICghaG9yaXpvbnRhbCkge1xuICAgICAgICB1cGRhdGVDb250ZW50V3JhcHBlckhlaWdodCgpOyAvLyA8PSBzZXRTbGlkZVBvc2l0aW9uc1xuICAgICAgICBuZWVkQ29udGFpbmVyVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZpeGVkV2lkdGggfHwgYXV0b1dpZHRoKSB7XG4gICAgICByaWdodEJvdW5kYXJ5ID0gZ2V0UmlnaHRCb3VuZGFyeSgpOyAvLyBhdXRvV2lkdGg6IDw9IHZpZXdwb3J0LCBzbGlkZVBvc2l0aW9ucywgZ3V0dGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmaXhlZFdpZHRoOiA8PSB2aWV3cG9ydCwgZml4ZWRXaWR0aCwgZ3V0dGVyXG4gICAgICBpbmRleE1heCA9IGdldEluZGV4TWF4KCk7IC8vIGF1dG9XaWR0aDogPD0gcmlnaHRCb3VuZGFyeSwgc2xpZGVQb3NpdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZml4ZWRXaWR0aDogPD0gcmlnaHRCb3VuZGFyeSwgZml4ZWRXaWR0aCwgZ3V0dGVyXG4gICAgfVxuXG4gICAgaWYgKGJwQ2hhbmdlZCB8fCBmaXhlZFdpZHRoKSB7XG4gICAgICBpdGVtcyA9IGdldE9wdGlvbignaXRlbXMnKTtcbiAgICAgIHNsaWRlQnkgPSBnZXRPcHRpb24oJ3NsaWRlQnknKTtcbiAgICAgIGl0ZW1zQ2hhbmdlZCA9IGl0ZW1zICE9PSBpdGVtc1RlbTtcblxuICAgICAgaWYgKGl0ZW1zQ2hhbmdlZCkge1xuICAgICAgICBpZiAoIWZpeGVkV2lkdGggJiYgIWF1dG9XaWR0aCkgeyBpbmRleE1heCA9IGdldEluZGV4TWF4KCk7IH0gLy8gPD0gaXRlbXNcbiAgICAgICAgLy8gY2hlY2sgaW5kZXggYmVmb3JlIHRyYW5zZm9ybSBpbiBjYXNlXG4gICAgICAgIC8vIHNsaWRlciByZWFjaCB0aGUgcmlnaHQgZWRnZSB0aGVuIGl0ZW1zIGJlY29tZSBiaWdnZXJcbiAgICAgICAgdXBkYXRlSW5kZXgoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYnBDaGFuZ2VkKSB7XG4gICAgICBpZiAoZGlzYWJsZSAhPT0gZGlzYWJsZVRlbSkge1xuICAgICAgICBpZiAoZGlzYWJsZSkge1xuICAgICAgICAgIGRpc2FibGVTbGlkZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbmFibGVTbGlkZXIoKTsgLy8gPD0gc2xpZGVQb3NpdGlvbnMsIHJpZ2h0Qm91bmRhcnksIGluZGV4TWF4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJlZXphYmxlICYmIChicENoYW5nZWQgfHwgZml4ZWRXaWR0aCB8fCBhdXRvV2lkdGgpKSB7XG4gICAgICBmcmVlemUgPSBnZXRGcmVlemUoKTsgLy8gPD0gYXV0b1dpZHRoOiBzbGlkZVBvc2l0aW9ucywgZ3V0dGVyLCB2aWV3cG9ydCwgcmlnaHRCb3VuZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDw9IGZpeGVkV2lkdGg6IGZpeGVkV2lkdGgsIGd1dHRlciwgcmlnaHRCb3VuZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDw9IG90aGVyczogaXRlbXNcblxuICAgICAgaWYgKGZyZWV6ZSAhPT0gZnJlZXplVGVtKSB7XG4gICAgICAgIGlmIChmcmVlemUpIHtcbiAgICAgICAgICBkb0NvbnRhaW5lclRyYW5zZm9ybShnZXRDb250YWluZXJUcmFuc2Zvcm1WYWx1ZShnZXRTdGFydEluZGV4KDApKSk7XG4gICAgICAgICAgZnJlZXplU2xpZGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5mcmVlemVTbGlkZXIoKTtcbiAgICAgICAgICBuZWVkQ29udGFpbmVyVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0VmFyaWJsZXNXaGVuRGlzYWJsZShkaXNhYmxlIHx8IGZyZWV6ZSk7IC8vIGNvbnRyb2xzLCBuYXYsIHRvdWNoLCBtb3VzZURyYWcsIGFycm93S2V5cywgYXV0b3BsYXksIGF1dG9wbGF5SG92ZXJQYXVzZSwgYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eVxuICAgIGlmICghYXV0b3BsYXkpIHsgYXV0b3BsYXlIb3ZlclBhdXNlID0gYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSA9IGZhbHNlOyB9XG5cbiAgICBpZiAoYXJyb3dLZXlzICE9PSBhcnJvd0tleXNUZW0pIHtcbiAgICAgIGFycm93S2V5cyA/XG4gICAgICAgIGFkZEV2ZW50cyhkb2MsIGRvY21lbnRLZXlkb3duRXZlbnQpIDpcbiAgICAgICAgcmVtb3ZlRXZlbnRzKGRvYywgZG9jbWVudEtleWRvd25FdmVudCk7XG4gICAgfVxuICAgIGlmIChjb250cm9scyAhPT0gY29udHJvbHNUZW0pIHtcbiAgICAgIGlmIChjb250cm9scykge1xuICAgICAgICBpZiAoY29udHJvbHNDb250YWluZXIpIHtcbiAgICAgICAgICBzaG93RWxlbWVudChjb250cm9sc0NvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHByZXZCdXR0b24pIHsgc2hvd0VsZW1lbnQocHJldkJ1dHRvbik7IH1cbiAgICAgICAgICBpZiAobmV4dEJ1dHRvbikgeyBzaG93RWxlbWVudChuZXh0QnV0dG9uKTsgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29udHJvbHNDb250YWluZXIpIHtcbiAgICAgICAgICBoaWRlRWxlbWVudChjb250cm9sc0NvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHByZXZCdXR0b24pIHsgaGlkZUVsZW1lbnQocHJldkJ1dHRvbik7IH1cbiAgICAgICAgICBpZiAobmV4dEJ1dHRvbikgeyBoaWRlRWxlbWVudChuZXh0QnV0dG9uKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuYXYgIT09IG5hdlRlbSkge1xuICAgICAgaWYgKG5hdikge1xuICAgICAgICBzaG93RWxlbWVudChuYXZDb250YWluZXIpO1xuICAgICAgICB1cGRhdGVOYXZWaXNpYmlsaXR5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaWRlRWxlbWVudChuYXZDb250YWluZXIpXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0b3VjaCAhPT0gdG91Y2hUZW0pIHtcbiAgICAgIHRvdWNoID9cbiAgICAgICAgYWRkRXZlbnRzKGNvbnRhaW5lciwgdG91Y2hFdmVudHMsIG9wdGlvbnMucHJldmVudFNjcm9sbE9uVG91Y2gpIDpcbiAgICAgICAgcmVtb3ZlRXZlbnRzKGNvbnRhaW5lciwgdG91Y2hFdmVudHMpO1xuICAgIH1cbiAgICBpZiAobW91c2VEcmFnICE9PSBtb3VzZURyYWdUZW0pIHtcbiAgICAgIG1vdXNlRHJhZyA/XG4gICAgICAgIGFkZEV2ZW50cyhjb250YWluZXIsIGRyYWdFdmVudHMpIDpcbiAgICAgICAgcmVtb3ZlRXZlbnRzKGNvbnRhaW5lciwgZHJhZ0V2ZW50cyk7XG4gICAgfVxuICAgIGlmIChhdXRvcGxheSAhPT0gYXV0b3BsYXlUZW0pIHtcbiAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHsgc2hvd0VsZW1lbnQoYXV0b3BsYXlCdXR0b24pOyB9XG4gICAgICAgIGlmICghYW5pbWF0aW5nICYmICFhdXRvcGxheVVzZXJQYXVzZWQpIHsgc3RhcnRBdXRvcGxheSgpOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHsgaGlkZUVsZW1lbnQoYXV0b3BsYXlCdXR0b24pOyB9XG4gICAgICAgIGlmIChhbmltYXRpbmcpIHsgc3RvcEF1dG9wbGF5KCk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGF1dG9wbGF5SG92ZXJQYXVzZSAhPT0gYXV0b3BsYXlIb3ZlclBhdXNlVGVtKSB7XG4gICAgICBhdXRvcGxheUhvdmVyUGF1c2UgP1xuICAgICAgICBhZGRFdmVudHMoY29udGFpbmVyLCBob3ZlckV2ZW50cykgOlxuICAgICAgICByZW1vdmVFdmVudHMoY29udGFpbmVyLCBob3ZlckV2ZW50cyk7XG4gICAgfVxuICAgIGlmIChhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ICE9PSBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5VGVtKSB7XG4gICAgICBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ID9cbiAgICAgICAgYWRkRXZlbnRzKGRvYywgdmlzaWJpbGl0eUV2ZW50KSA6XG4gICAgICAgIHJlbW92ZUV2ZW50cyhkb2MsIHZpc2liaWxpdHlFdmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGJwQ2hhbmdlZCkge1xuICAgICAgaWYgKGZpeGVkV2lkdGggIT09IGZpeGVkV2lkdGhUZW0gfHwgY2VudGVyICE9PSBjZW50ZXJUZW0pIHsgbmVlZENvbnRhaW5lclRyYW5zZm9ybSA9IHRydWU7IH1cblxuICAgICAgaWYgKGF1dG9IZWlnaHQgIT09IGF1dG9IZWlnaHRUZW0pIHtcbiAgICAgICAgaWYgKCFhdXRvSGVpZ2h0KSB7IGlubmVyV3JhcHBlci5zdHlsZS5oZWlnaHQgPSAnJzsgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY29udHJvbHMgJiYgY29udHJvbHNUZXh0ICE9PSBjb250cm9sc1RleHRUZW0pIHtcbiAgICAgICAgcHJldkJ1dHRvbi5pbm5lckhUTUwgPSBjb250cm9sc1RleHRbMF07XG4gICAgICAgIG5leHRCdXR0b24uaW5uZXJIVE1MID0gY29udHJvbHNUZXh0WzFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXV0b3BsYXlCdXR0b24gJiYgYXV0b3BsYXlUZXh0ICE9PSBhdXRvcGxheVRleHRUZW0pIHtcbiAgICAgICAgdmFyIGkgPSBhdXRvcGxheSA/IDEgOiAwLFxuICAgICAgICAgICAgaHRtbCA9IGF1dG9wbGF5QnV0dG9uLmlubmVySFRNTCxcbiAgICAgICAgICAgIGxlbiA9IGh0bWwubGVuZ3RoIC0gYXV0b3BsYXlUZXh0VGVtW2ldLmxlbmd0aDtcbiAgICAgICAgaWYgKGh0bWwuc3Vic3RyaW5nKGxlbikgPT09IGF1dG9wbGF5VGV4dFRlbVtpXSkge1xuICAgICAgICAgIGF1dG9wbGF5QnV0dG9uLmlubmVySFRNTCA9IGh0bWwuc3Vic3RyaW5nKDAsIGxlbikgKyBhdXRvcGxheVRleHRbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNlbnRlciAmJiAoZml4ZWRXaWR0aCB8fCBhdXRvV2lkdGgpKSB7IG5lZWRDb250YWluZXJUcmFuc2Zvcm0gPSB0cnVlOyB9XG4gICAgfVxuXG4gICAgaWYgKGl0ZW1zQ2hhbmdlZCB8fCBmaXhlZFdpZHRoICYmICFhdXRvV2lkdGgpIHtcbiAgICAgIHBhZ2VzID0gZ2V0UGFnZXMoKTtcbiAgICAgIHVwZGF0ZU5hdlZpc2liaWxpdHkoKTtcbiAgICB9XG5cbiAgICBpbmRDaGFuZ2VkID0gaW5kZXggIT09IGluZGV4VGVtO1xuICAgIGlmIChpbmRDaGFuZ2VkKSB7XG4gICAgICBldmVudHMuZW1pdCgnaW5kZXhDaGFuZ2VkJywgaW5mbygpKTtcbiAgICAgIG5lZWRDb250YWluZXJUcmFuc2Zvcm0gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaXRlbXNDaGFuZ2VkKSB7XG4gICAgICBpZiAoIWluZENoYW5nZWQpIHsgYWRkaXRpb25hbFVwZGF0ZXMoKTsgfVxuICAgIH0gZWxzZSBpZiAoZml4ZWRXaWR0aCB8fCBhdXRvV2lkdGgpIHtcbiAgICAgIGRvTGF6eUxvYWQoKTtcbiAgICAgIHVwZGF0ZVNsaWRlU3RhdHVzKCk7XG4gICAgICB1cGRhdGVMaXZlUmVnaW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW1zQ2hhbmdlZCAmJiAhY2Fyb3VzZWwpIHsgdXBkYXRlR2FsbGVyeVNsaWRlUG9zaXRpb25zKCk7IH1cblxuICAgIGlmICghZGlzYWJsZSAmJiAhZnJlZXplKSB7XG4gICAgICAvLyBub24tbWVkaWFxdWVyaWVzOiBJRThcbiAgICAgIGlmIChicENoYW5nZWQgJiYgIUNTU01RKSB7XG4gICAgICAgIC8vIG1pZGRsZSB3cmFwcGVyIHN0eWxlc1xuXG4gICAgICAgIC8vIGlubmVyIHdyYXBwZXIgc3R5bGVzXG4gICAgICAgIGlmIChlZGdlUGFkZGluZyAhPT0gZWRnZVBhZGRpbmdUZW0gfHwgZ3V0dGVyICE9PSBndXR0ZXJUZW0pIHtcbiAgICAgICAgICBpbm5lcldyYXBwZXIuc3R5bGUuY3NzVGV4dCA9IGdldElubmVyV3JhcHBlclN0eWxlcyhlZGdlUGFkZGluZywgZ3V0dGVyLCBmaXhlZFdpZHRoLCBzcGVlZCwgYXV0b0hlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgIC8vIGNvbnRhaW5lciBzdHlsZXNcbiAgICAgICAgICBpZiAoY2Fyb3VzZWwpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGdldENvbnRhaW5lcldpZHRoKGZpeGVkV2lkdGgsIGd1dHRlciwgaXRlbXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHNsaWRlIHN0eWxlc1xuICAgICAgICAgIHZhciBzdHIgPSBnZXRTbGlkZVdpZHRoU3R5bGUoZml4ZWRXaWR0aCwgZ3V0dGVyLCBpdGVtcykgK1xuICAgICAgICAgICAgICAgICAgICBnZXRTbGlkZUd1dHRlclN0eWxlKGd1dHRlcik7XG5cbiAgICAgICAgICAvLyByZW1vdmUgdGhlIGxhc3QgbGluZSBhbmRcbiAgICAgICAgICAvLyBhZGQgbmV3IHN0eWxlc1xuICAgICAgICAgIHJlbW92ZUNTU1J1bGUoc2hlZXQsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSAtIDEpO1xuICAgICAgICAgIGFkZENTU1J1bGUoc2hlZXQsICcjJyArIHNsaWRlSWQgKyAnID4gLnRucy1pdGVtJywgc3RyLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGF1dG8gaGVpZ2h0XG4gICAgICBpZiAoYXV0b0hlaWdodCkgeyBkb0F1dG9IZWlnaHQoKTsgfVxuXG4gICAgICBpZiAobmVlZENvbnRhaW5lclRyYW5zZm9ybSkge1xuICAgICAgICBkb0NvbnRhaW5lclRyYW5zZm9ybVNpbGVudCgpO1xuICAgICAgICBpbmRleENhY2hlZCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChicENoYW5nZWQpIHsgZXZlbnRzLmVtaXQoJ25ld0JyZWFrcG9pbnRFbmQnLCBpbmZvKGUpKTsgfVxuICB9XG5cblxuXG5cblxuICAvLyA9PT0gSU5JVElBTElaQVRJT04gRlVOQ1RJT05TID09PSAvL1xuICBmdW5jdGlvbiBnZXRGcmVlemUgKCkge1xuICAgIGlmICghZml4ZWRXaWR0aCAmJiAhYXV0b1dpZHRoKSB7XG4gICAgICB2YXIgYSA9IGNlbnRlciA/IGl0ZW1zIC0gKGl0ZW1zIC0gMSkgLyAyIDogaXRlbXM7XG4gICAgICByZXR1cm4gIHNsaWRlQ291bnQgPD0gYTtcbiAgICB9XG5cbiAgICB2YXIgd2lkdGggPSBmaXhlZFdpZHRoID8gKGZpeGVkV2lkdGggKyBndXR0ZXIpICogc2xpZGVDb3VudCA6IHNsaWRlUG9zaXRpb25zW3NsaWRlQ291bnRdLFxuICAgICAgICB2cCA9IGVkZ2VQYWRkaW5nID8gdmlld3BvcnQgKyBlZGdlUGFkZGluZyAqIDIgOiB2aWV3cG9ydCArIGd1dHRlcjtcblxuICAgIGlmIChjZW50ZXIpIHtcbiAgICAgIHZwIC09IGZpeGVkV2lkdGggPyAodmlld3BvcnQgLSBmaXhlZFdpZHRoKSAvIDIgOiAodmlld3BvcnQgLSAoc2xpZGVQb3NpdGlvbnNbaW5kZXggKyAxXSAtIHNsaWRlUG9zaXRpb25zW2luZGV4XSAtIGd1dHRlcikpIC8gMjtcbiAgICB9XG5cbiAgICByZXR1cm4gd2lkdGggPD0gdnA7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRCcmVha3BvaW50Wm9uZSAoKSB7XG4gICAgYnJlYWtwb2ludFpvbmUgPSAwO1xuICAgIGZvciAodmFyIGJwIGluIHJlc3BvbnNpdmUpIHtcbiAgICAgIGJwID0gcGFyc2VJbnQoYnApOyAvLyBjb252ZXJ0IHN0cmluZyB0byBudW1iZXJcbiAgICAgIGlmICh3aW5kb3dXaWR0aCA+PSBicCkgeyBicmVha3BvaW50Wm9uZSA9IGJwOyB9XG4gICAgfVxuICB9XG5cbiAgLy8gKHNsaWRlQnksIGluZGV4TWluLCBpbmRleE1heCkgPT4gaW5kZXhcbiAgdmFyIHVwZGF0ZUluZGV4ID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbG9vcCA/XG4gICAgICBjYXJvdXNlbCA/XG4gICAgICAgIC8vIGxvb3AgKyBjYXJvdXNlbFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGxlZnRFZGdlID0gaW5kZXhNaW4sXG4gICAgICAgICAgICAgIHJpZ2h0RWRnZSA9IGluZGV4TWF4O1xuXG4gICAgICAgICAgbGVmdEVkZ2UgKz0gc2xpZGVCeTtcbiAgICAgICAgICByaWdodEVkZ2UgLT0gc2xpZGVCeTtcblxuICAgICAgICAgIC8vIGFkanVzdCBlZGdlcyB3aGVuIGhhcyBlZGdlIHBhZGRpbmdzXG4gICAgICAgICAgLy8gb3IgZml4ZWQtd2lkdGggc2xpZGVyIHdpdGggZXh0cmEgc3BhY2Ugb24gdGhlIHJpZ2h0IHNpZGVcbiAgICAgICAgICBpZiAoZWRnZVBhZGRpbmcpIHtcbiAgICAgICAgICAgIGxlZnRFZGdlICs9IDE7XG4gICAgICAgICAgICByaWdodEVkZ2UgLT0gMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGZpeGVkV2lkdGgpIHtcbiAgICAgICAgICAgIGlmICgodmlld3BvcnQgKyBndXR0ZXIpJShmaXhlZFdpZHRoICsgZ3V0dGVyKSkgeyByaWdodEVkZ2UgLT0gMTsgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjbG9uZUNvdW50KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiByaWdodEVkZ2UpIHtcbiAgICAgICAgICAgICAgaW5kZXggLT0gc2xpZGVDb3VudDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCBsZWZ0RWRnZSkge1xuICAgICAgICAgICAgICBpbmRleCArPSBzbGlkZUNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSA6XG4gICAgICAgIC8vIGxvb3AgKyBnYWxsZXJ5XG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChpbmRleCA+IGluZGV4TWF4KSB7XG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPj0gaW5kZXhNaW4gKyBzbGlkZUNvdW50KSB7IGluZGV4IC09IHNsaWRlQ291bnQ7IH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgaW5kZXhNaW4pIHtcbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA8PSBpbmRleE1heCAtIHNsaWRlQ291bnQpIHsgaW5kZXggKz0gc2xpZGVDb3VudDsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSA6XG4gICAgICAvLyBub24tbG9vcFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGluZGV4ID0gTWF0aC5tYXgoaW5kZXhNaW4sIE1hdGgubWluKGluZGV4TWF4LCBpbmRleCkpO1xuICAgICAgfTtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiBkaXNhYmxlVUkgKCkge1xuICAgIGlmICghYXV0b3BsYXkgJiYgYXV0b3BsYXlCdXR0b24pIHsgaGlkZUVsZW1lbnQoYXV0b3BsYXlCdXR0b24pOyB9XG4gICAgaWYgKCFuYXYgJiYgbmF2Q29udGFpbmVyKSB7IGhpZGVFbGVtZW50KG5hdkNvbnRhaW5lcik7IH1cbiAgICBpZiAoIWNvbnRyb2xzKSB7XG4gICAgICBpZiAoY29udHJvbHNDb250YWluZXIpIHtcbiAgICAgICAgaGlkZUVsZW1lbnQoY29udHJvbHNDb250YWluZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByZXZCdXR0b24pIHsgaGlkZUVsZW1lbnQocHJldkJ1dHRvbik7IH1cbiAgICAgICAgaWYgKG5leHRCdXR0b24pIHsgaGlkZUVsZW1lbnQobmV4dEJ1dHRvbik7IH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVVSSAoKSB7XG4gICAgaWYgKGF1dG9wbGF5ICYmIGF1dG9wbGF5QnV0dG9uKSB7IHNob3dFbGVtZW50KGF1dG9wbGF5QnV0dG9uKTsgfVxuICAgIGlmIChuYXYgJiYgbmF2Q29udGFpbmVyKSB7IHNob3dFbGVtZW50KG5hdkNvbnRhaW5lcik7IH1cbiAgICBpZiAoY29udHJvbHMpIHtcbiAgICAgIGlmIChjb250cm9sc0NvbnRhaW5lcikge1xuICAgICAgICBzaG93RWxlbWVudChjb250cm9sc0NvbnRhaW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJldkJ1dHRvbikgeyBzaG93RWxlbWVudChwcmV2QnV0dG9uKTsgfVxuICAgICAgICBpZiAobmV4dEJ1dHRvbikgeyBzaG93RWxlbWVudChuZXh0QnV0dG9uKTsgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZyZWV6ZVNsaWRlciAoKSB7XG4gICAgaWYgKGZyb3plbikgeyByZXR1cm47IH1cblxuICAgIC8vIHJlbW92ZSBlZGdlIHBhZGRpbmcgZnJvbSBpbm5lciB3cmFwcGVyXG4gICAgaWYgKGVkZ2VQYWRkaW5nKSB7IGlubmVyV3JhcHBlci5zdHlsZS5tYXJnaW4gPSAnMHB4JzsgfVxuXG4gICAgLy8gYWRkIGNsYXNzIHRucy10cmFuc3BhcmVudCB0byBjbG9uZWQgc2xpZGVzXG4gICAgaWYgKGNsb25lQ291bnQpIHtcbiAgICAgIHZhciBzdHIgPSAndG5zLXRyYW5zcGFyZW50JztcbiAgICAgIGZvciAodmFyIGkgPSBjbG9uZUNvdW50OyBpLS07KSB7XG4gICAgICAgIGlmIChjYXJvdXNlbCkgeyBhZGRDbGFzcyhzbGlkZUl0ZW1zW2ldLCBzdHIpOyB9XG4gICAgICAgIGFkZENsYXNzKHNsaWRlSXRlbXNbc2xpZGVDb3VudE5ldyAtIGkgLSAxXSwgc3RyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdG9vbHNcbiAgICBkaXNhYmxlVUkoKTtcblxuICAgIGZyb3plbiA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiB1bmZyZWV6ZVNsaWRlciAoKSB7XG4gICAgaWYgKCFmcm96ZW4pIHsgcmV0dXJuOyB9XG5cbiAgICAvLyByZXN0b3JlIGVkZ2UgcGFkZGluZyBmb3IgaW5uZXIgd3JhcHBlclxuICAgIC8vIGZvciBtb3JkZXJuIGJyb3dzZXJzXG4gICAgaWYgKGVkZ2VQYWRkaW5nICYmIENTU01RKSB7IGlubmVyV3JhcHBlci5zdHlsZS5tYXJnaW4gPSAnJzsgfVxuXG4gICAgLy8gcmVtb3ZlIGNsYXNzIHRucy10cmFuc3BhcmVudCB0byBjbG9uZWQgc2xpZGVzXG4gICAgaWYgKGNsb25lQ291bnQpIHtcbiAgICAgIHZhciBzdHIgPSAndG5zLXRyYW5zcGFyZW50JztcbiAgICAgIGZvciAodmFyIGkgPSBjbG9uZUNvdW50OyBpLS07KSB7XG4gICAgICAgIGlmIChjYXJvdXNlbCkgeyByZW1vdmVDbGFzcyhzbGlkZUl0ZW1zW2ldLCBzdHIpOyB9XG4gICAgICAgIHJlbW92ZUNsYXNzKHNsaWRlSXRlbXNbc2xpZGVDb3VudE5ldyAtIGkgLSAxXSwgc3RyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdG9vbHNcbiAgICBlbmFibGVVSSgpO1xuXG4gICAgZnJvemVuID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlU2xpZGVyICgpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHsgcmV0dXJuOyB9XG5cbiAgICBzaGVldC5kaXNhYmxlZCA9IHRydWU7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IGNvbnRhaW5lci5jbGFzc05hbWUucmVwbGFjZShuZXdDb250YWluZXJDbGFzc2VzLnN1YnN0cmluZygxKSwgJycpO1xuICAgIHJlbW92ZUF0dHJzKGNvbnRhaW5lciwgWydzdHlsZSddKTtcbiAgICBpZiAobG9vcCkge1xuICAgICAgZm9yICh2YXIgaiA9IGNsb25lQ291bnQ7IGotLTspIHtcbiAgICAgICAgaWYgKGNhcm91c2VsKSB7IGhpZGVFbGVtZW50KHNsaWRlSXRlbXNbal0pOyB9XG4gICAgICAgIGhpZGVFbGVtZW50KHNsaWRlSXRlbXNbc2xpZGVDb3VudE5ldyAtIGogLSAxXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdmVydGljYWwgc2xpZGVyXG4gICAgaWYgKCFob3Jpem9udGFsIHx8ICFjYXJvdXNlbCkgeyByZW1vdmVBdHRycyhpbm5lcldyYXBwZXIsIFsnc3R5bGUnXSk7IH1cblxuICAgIC8vIGdhbGxlcnlcbiAgICBpZiAoIWNhcm91c2VsKSB7XG4gICAgICBmb3IgKHZhciBpID0gaW5kZXgsIGwgPSBpbmRleCArIHNsaWRlQ291bnQ7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBzbGlkZUl0ZW1zW2ldO1xuICAgICAgICByZW1vdmVBdHRycyhpdGVtLCBbJ3N0eWxlJ10pO1xuICAgICAgICByZW1vdmVDbGFzcyhpdGVtLCBhbmltYXRlSW4pO1xuICAgICAgICByZW1vdmVDbGFzcyhpdGVtLCBhbmltYXRlTm9ybWFsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdG9vbHNcbiAgICBkaXNhYmxlVUkoKTtcblxuICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZVNsaWRlciAoKSB7XG4gICAgaWYgKCFkaXNhYmxlZCkgeyByZXR1cm47IH1cblxuICAgIHNoZWV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSArPSBuZXdDb250YWluZXJDbGFzc2VzO1xuICAgIGRvQ29udGFpbmVyVHJhbnNmb3JtU2lsZW50KCk7XG5cbiAgICBpZiAobG9vcCkge1xuICAgICAgZm9yICh2YXIgaiA9IGNsb25lQ291bnQ7IGotLTspIHtcbiAgICAgICAgaWYgKGNhcm91c2VsKSB7IHNob3dFbGVtZW50KHNsaWRlSXRlbXNbal0pOyB9XG4gICAgICAgIHNob3dFbGVtZW50KHNsaWRlSXRlbXNbc2xpZGVDb3VudE5ldyAtIGogLSAxXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2FsbGVyeVxuICAgIGlmICghY2Fyb3VzZWwpIHtcbiAgICAgIGZvciAodmFyIGkgPSBpbmRleCwgbCA9IGluZGV4ICsgc2xpZGVDb3VudDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgaXRlbSA9IHNsaWRlSXRlbXNbaV0sXG4gICAgICAgICAgICBjbGFzc04gPSBpIDwgaW5kZXggKyBpdGVtcyA/IGFuaW1hdGVJbiA6IGFuaW1hdGVOb3JtYWw7XG4gICAgICAgIGl0ZW0uc3R5bGUubGVmdCA9IChpIC0gaW5kZXgpICogMTAwIC8gaXRlbXMgKyAnJSc7XG4gICAgICAgIGFkZENsYXNzKGl0ZW0sIGNsYXNzTik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHRvb2xzXG4gICAgZW5hYmxlVUkoKTtcblxuICAgIGRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMaXZlUmVnaW9uICgpIHtcbiAgICB2YXIgc3RyID0gZ2V0TGl2ZVJlZ2lvblN0cigpO1xuICAgIGlmIChsaXZlcmVnaW9uQ3VycmVudC5pbm5lckhUTUwgIT09IHN0cikgeyBsaXZlcmVnaW9uQ3VycmVudC5pbm5lckhUTUwgPSBzdHI7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExpdmVSZWdpb25TdHIgKCkge1xuICAgIHZhciBhcnIgPSBnZXRWaXNpYmxlU2xpZGVSYW5nZSgpLFxuICAgICAgICBzdGFydCA9IGFyclswXSArIDEsXG4gICAgICAgIGVuZCA9IGFyclsxXSArIDE7XG4gICAgcmV0dXJuIHN0YXJ0ID09PSBlbmQgPyBzdGFydCArICcnIDogc3RhcnQgKyAnIHRvICcgKyBlbmQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWaXNpYmxlU2xpZGVSYW5nZSAodmFsKSB7XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7IHZhbCA9IGdldENvbnRhaW5lclRyYW5zZm9ybVZhbHVlKCk7IH1cbiAgICB2YXIgc3RhcnQgPSBpbmRleCwgZW5kLCByYW5nZXN0YXJ0LCByYW5nZWVuZDtcblxuICAgIC8vIGdldCByYW5nZSBzdGFydCwgcmFuZ2UgZW5kIGZvciBhdXRvV2lkdGggYW5kIGZpeGVkV2lkdGhcbiAgICBpZiAoY2VudGVyIHx8IGVkZ2VQYWRkaW5nKSB7XG4gICAgICBpZiAoYXV0b1dpZHRoIHx8IGZpeGVkV2lkdGgpIHtcbiAgICAgICAgcmFuZ2VzdGFydCA9IC0gKHBhcnNlRmxvYXQodmFsKSArIGVkZ2VQYWRkaW5nKTtcbiAgICAgICAgcmFuZ2VlbmQgPSByYW5nZXN0YXJ0ICsgdmlld3BvcnQgKyBlZGdlUGFkZGluZyAqIDI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhdXRvV2lkdGgpIHtcbiAgICAgICAgcmFuZ2VzdGFydCA9IHNsaWRlUG9zaXRpb25zW2luZGV4XTtcbiAgICAgICAgcmFuZ2VlbmQgPSByYW5nZXN0YXJ0ICsgdmlld3BvcnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0IHN0YXJ0LCBlbmRcbiAgICAvLyAtIGNoZWNrIGF1dG8gd2lkdGhcbiAgICBpZiAoYXV0b1dpZHRoKSB7XG4gICAgICBzbGlkZVBvc2l0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHBvaW50LCBpKSB7XG4gICAgICAgIGlmIChpIDwgc2xpZGVDb3VudE5ldykge1xuICAgICAgICAgIGlmICgoY2VudGVyIHx8IGVkZ2VQYWRkaW5nKSAmJiBwb2ludCA8PSByYW5nZXN0YXJ0ICsgMC41KSB7IHN0YXJ0ID0gaTsgfVxuICAgICAgICAgIGlmIChyYW5nZWVuZCAtIHBvaW50ID49IDAuNSkgeyBlbmQgPSBpOyB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgLy8gLSBjaGVjayBwZXJjZW50YWdlIHdpZHRoLCBmaXhlZCB3aWR0aFxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGlmIChmaXhlZFdpZHRoKSB7XG4gICAgICAgIHZhciBjZWxsID0gZml4ZWRXaWR0aCArIGd1dHRlcjtcbiAgICAgICAgaWYgKGNlbnRlciB8fCBlZGdlUGFkZGluZykge1xuICAgICAgICAgIHN0YXJ0ID0gTWF0aC5mbG9vcihyYW5nZXN0YXJ0L2NlbGwpO1xuICAgICAgICAgIGVuZCA9IE1hdGguY2VpbChyYW5nZWVuZC9jZWxsIC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW5kID0gc3RhcnQgKyBNYXRoLmNlaWwodmlld3BvcnQvY2VsbCkgLSAxO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjZW50ZXIgfHwgZWRnZVBhZGRpbmcpIHtcbiAgICAgICAgICB2YXIgYSA9IGl0ZW1zIC0gMTtcbiAgICAgICAgICBpZiAoY2VudGVyKSB7XG4gICAgICAgICAgICBzdGFydCAtPSBhIC8gMjtcbiAgICAgICAgICAgIGVuZCA9IGluZGV4ICsgYSAvIDI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVuZCA9IGluZGV4ICsgYTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZWRnZVBhZGRpbmcpIHtcbiAgICAgICAgICAgIHZhciBiID0gZWRnZVBhZGRpbmcgKiBpdGVtcyAvIHZpZXdwb3J0O1xuICAgICAgICAgICAgc3RhcnQgLT0gYjtcbiAgICAgICAgICAgIGVuZCArPSBiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YXJ0ID0gTWF0aC5mbG9vcihzdGFydCk7XG4gICAgICAgICAgZW5kID0gTWF0aC5jZWlsKGVuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW5kID0gc3RhcnQgKyBpdGVtcyAtIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RhcnQgPSBNYXRoLm1heChzdGFydCwgMCk7XG4gICAgICBlbmQgPSBNYXRoLm1pbihlbmQsIHNsaWRlQ291bnROZXcgLSAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3N0YXJ0LCBlbmRdO1xuICB9XG5cbiAgZnVuY3Rpb24gZG9MYXp5TG9hZCAoKSB7XG4gICAgaWYgKGxhenlsb2FkICYmICFkaXNhYmxlKSB7XG4gICAgICB2YXIgYXJnID0gZ2V0VmlzaWJsZVNsaWRlUmFuZ2UoKTtcbiAgICAgIGFyZy5wdXNoKGxhenlsb2FkU2VsZWN0b3IpO1xuXG4gICAgICBnZXRJbWFnZUFycmF5LmFwcGx5KG51bGwsIGFyZykuZm9yRWFjaChmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgIGlmICghaGFzQ2xhc3MoaW1nLCBpbWdDb21wbGV0ZUNsYXNzKSkge1xuICAgICAgICAgIC8vIHN0b3AgcHJvcGFnYXRpb24gdHJhbnNpdGlvbmVuZCBldmVudCB0byBjb250YWluZXJcbiAgICAgICAgICB2YXIgZXZlID0ge307XG4gICAgICAgICAgZXZlW1RSQU5TSVRJT05FTkRdID0gZnVuY3Rpb24gKGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfTtcbiAgICAgICAgICBhZGRFdmVudHMoaW1nLCBldmUpO1xuXG4gICAgICAgICAgYWRkRXZlbnRzKGltZywgaW1nRXZlbnRzKTtcblxuICAgICAgICAgIC8vIHVwZGF0ZSBzcmNcbiAgICAgICAgICBpbWcuc3JjID0gZ2V0QXR0cihpbWcsICdkYXRhLXNyYycpO1xuXG4gICAgICAgICAgLy8gdXBkYXRlIHNyY3NldFxuICAgICAgICAgIHZhciBzcmNzZXQgPSBnZXRBdHRyKGltZywgJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgaWYgKHNyY3NldCkgeyBpbWcuc3Jjc2V0ID0gc3Jjc2V0OyB9XG5cbiAgICAgICAgICBhZGRDbGFzcyhpbWcsICdsb2FkaW5nJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uSW1nTG9hZGVkIChlKSB7XG4gICAgaW1nTG9hZGVkKGdldFRhcmdldChlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkltZ0ZhaWxlZCAoZSkge1xuICAgIGltZ0ZhaWxlZChnZXRUYXJnZXQoZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW1nTG9hZGVkIChpbWcpIHtcbiAgICBhZGRDbGFzcyhpbWcsICdsb2FkZWQnKTtcbiAgICBpbWdDb21wbGV0ZWQoaW1nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltZ0ZhaWxlZCAoaW1nKSB7XG4gICAgYWRkQ2xhc3MoaW1nLCAnZmFpbGVkJyk7XG4gICAgaW1nQ29tcGxldGVkKGltZyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbWdDb21wbGV0ZWQgKGltZykge1xuICAgIGFkZENsYXNzKGltZywgaW1nQ29tcGxldGVDbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoaW1nLCAnbG9hZGluZycpO1xuICAgIHJlbW92ZUV2ZW50cyhpbWcsIGltZ0V2ZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbWFnZUFycmF5IChzdGFydCwgZW5kLCBpbWdTZWxlY3Rvcikge1xuICAgIHZhciBpbWdzID0gW107XG4gICAgaWYgKCFpbWdTZWxlY3RvcikgeyBpbWdTZWxlY3RvciA9ICdpbWcnOyB9XG5cbiAgICB3aGlsZSAoc3RhcnQgPD0gZW5kKSB7XG4gICAgICBmb3JFYWNoKHNsaWRlSXRlbXNbc3RhcnRdLnF1ZXJ5U2VsZWN0b3JBbGwoaW1nU2VsZWN0b3IpLCBmdW5jdGlvbiAoaW1nKSB7IGltZ3MucHVzaChpbWcpOyB9KTtcbiAgICAgIHN0YXJ0Kys7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltZ3M7XG4gIH1cblxuICAvLyBjaGVjayBpZiBhbGwgdmlzaWJsZSBpbWFnZXMgYXJlIGxvYWRlZFxuICAvLyBhbmQgdXBkYXRlIGNvbnRhaW5lciBoZWlnaHQgaWYgaXQncyBkb25lXG4gIGZ1bmN0aW9uIGRvQXV0b0hlaWdodCAoKSB7XG4gICAgdmFyIGltZ3MgPSBnZXRJbWFnZUFycmF5LmFwcGx5KG51bGwsIGdldFZpc2libGVTbGlkZVJhbmdlKCkpO1xuICAgIHJhZihmdW5jdGlvbigpeyBpbWdzTG9hZGVkQ2hlY2soaW1ncywgdXBkYXRlSW5uZXJXcmFwcGVySGVpZ2h0KTsgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbWdzTG9hZGVkQ2hlY2sgKGltZ3MsIGNiKSB7XG4gICAgLy8gZXhlY3V0ZSBjYWxsYmFjayBmdW5jdGlvbiBpZiBhbGwgaW1hZ2VzIGFyZSBjb21wbGV0ZVxuICAgIGlmIChpbWdzQ29tcGxldGUpIHsgcmV0dXJuIGNiKCk7IH1cblxuICAgIC8vIGNoZWNrIGltYWdlIGNsYXNzZXNcbiAgICBpbWdzLmZvckVhY2goZnVuY3Rpb24gKGltZywgaW5kZXgpIHtcbiAgICAgIGlmICghbGF6eWxvYWQgJiYgaW1nLmNvbXBsZXRlKSB7IGltZ0NvbXBsZXRlZChpbWcpOyB9IC8vIENoZWNrIGltYWdlLmNvbXBsZXRlXG4gICAgICBpZiAoaGFzQ2xhc3MoaW1nLCBpbWdDb21wbGV0ZUNsYXNzKSkgeyBpbWdzLnNwbGljZShpbmRleCwgMSk7IH1cbiAgICB9KTtcblxuICAgIC8vIGV4ZWN1dGUgY2FsbGJhY2sgZnVuY3Rpb24gaWYgc2VsZWN0ZWQgaW1hZ2VzIGFyZSBhbGwgY29tcGxldGVcbiAgICBpZiAoIWltZ3MubGVuZ3RoKSB7IHJldHVybiBjYigpOyB9XG5cbiAgICAvLyBvdGhlcndpc2UgZXhlY3V0ZSB0aGlzIGZ1bmN0aW9uYSBhZ2FpblxuICAgIHJhZihmdW5jdGlvbigpeyBpbWdzTG9hZGVkQ2hlY2soaW1ncywgY2IpOyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZGl0aW9uYWxVcGRhdGVzICgpIHtcbiAgICBkb0xhenlMb2FkKCk7XG4gICAgdXBkYXRlU2xpZGVTdGF0dXMoKTtcbiAgICB1cGRhdGVMaXZlUmVnaW9uKCk7XG4gICAgdXBkYXRlQ29udHJvbHNTdGF0dXMoKTtcbiAgICB1cGRhdGVOYXZTdGF0dXMoKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gdXBkYXRlX2Nhcm91c2VsX3RyYW5zaXRpb25fZHVyYXRpb24gKCkge1xuICAgIGlmIChjYXJvdXNlbCAmJiBhdXRvSGVpZ2h0KSB7XG4gICAgICBtaWRkbGVXcmFwcGVyLnN0eWxlW1RSQU5TSVRJT05EVVJBVElPTl0gPSBzcGVlZCAvIDEwMDAgKyAncyc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWF4U2xpZGVIZWlnaHQgKHNsaWRlU3RhcnQsIHNsaWRlUmFuZ2UpIHtcbiAgICB2YXIgaGVpZ2h0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSBzbGlkZVN0YXJ0LCBsID0gTWF0aC5taW4oc2xpZGVTdGFydCArIHNsaWRlUmFuZ2UsIHNsaWRlQ291bnROZXcpOyBpIDwgbDsgaSsrKSB7XG4gICAgICBoZWlnaHRzLnB1c2goc2xpZGVJdGVtc1tpXS5vZmZzZXRIZWlnaHQpO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSBpbm5lciB3cmFwcGVyIGhlaWdodFxuICAvLyAxLiBnZXQgdGhlIG1heC1oZWlnaHQgb2YgdGhlIHZpc2libGUgc2xpZGVzXG4gIC8vIDIuIHNldCB0cmFuc2l0aW9uRHVyYXRpb24gdG8gc3BlZWRcbiAgLy8gMy4gdXBkYXRlIGlubmVyIHdyYXBwZXIgaGVpZ2h0IHRvIG1heC1oZWlnaHRcbiAgLy8gNC4gc2V0IHRyYW5zaXRpb25EdXJhdGlvbiB0byAwcyBhZnRlciB0cmFuc2l0aW9uIGRvbmVcbiAgZnVuY3Rpb24gdXBkYXRlSW5uZXJXcmFwcGVySGVpZ2h0ICgpIHtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gYXV0b0hlaWdodCA/IGdldE1heFNsaWRlSGVpZ2h0KGluZGV4LCBpdGVtcykgOiBnZXRNYXhTbGlkZUhlaWdodChjbG9uZUNvdW50LCBzbGlkZUNvdW50KSxcbiAgICAgICAgd3AgPSBtaWRkbGVXcmFwcGVyID8gbWlkZGxlV3JhcHBlciA6IGlubmVyV3JhcHBlcjtcblxuICAgIGlmICh3cC5zdHlsZS5oZWlnaHQgIT09IG1heEhlaWdodCkgeyB3cC5zdHlsZS5oZWlnaHQgPSBtYXhIZWlnaHQgKyAncHgnOyB9XG4gIH1cblxuICAvLyBnZXQgdGhlIGRpc3RhbmNlIGZyb20gdGhlIHRvcCBlZGdlIG9mIHRoZSBmaXJzdCBzbGlkZSB0byBlYWNoIHNsaWRlXG4gIC8vIChpbml0KSA9PiBzbGlkZVBvc2l0aW9uc1xuICBmdW5jdGlvbiBzZXRTbGlkZVBvc2l0aW9ucyAoKSB7XG4gICAgc2xpZGVQb3NpdGlvbnMgPSBbMF07XG4gICAgdmFyIGF0dHIgPSBob3Jpem9udGFsID8gJ2xlZnQnIDogJ3RvcCcsXG4gICAgICAgIGF0dHIyID0gaG9yaXpvbnRhbCA/ICdyaWdodCcgOiAnYm90dG9tJyxcbiAgICAgICAgYmFzZSA9IHNsaWRlSXRlbXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbYXR0cl07XG5cbiAgICBmb3JFYWNoKHNsaWRlSXRlbXMsIGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICAgIC8vIHNraXAgdGhlIGZpcnN0IHNsaWRlXG4gICAgICBpZiAoaSkgeyBzbGlkZVBvc2l0aW9ucy5wdXNoKGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbYXR0cl0gLSBiYXNlKTsgfVxuICAgICAgLy8gYWRkIHRoZSBlbmQgZWRnZVxuICAgICAgaWYgKGkgPT09IHNsaWRlQ291bnROZXcgLSAxKSB7IHNsaWRlUG9zaXRpb25zLnB1c2goaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVthdHRyMl0gLSBiYXNlKTsgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gdXBkYXRlIHNsaWRlXG4gIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlU3RhdHVzICgpIHtcbiAgICB2YXIgcmFuZ2UgPSBnZXRWaXNpYmxlU2xpZGVSYW5nZSgpLFxuICAgICAgICBzdGFydCA9IHJhbmdlWzBdLFxuICAgICAgICBlbmQgPSByYW5nZVsxXTtcblxuICAgIGZvckVhY2goc2xpZGVJdGVtcywgZnVuY3Rpb24oaXRlbSwgaSkge1xuICAgICAgLy8gc2hvdyBzbGlkZXNcbiAgICAgIGlmIChpID49IHN0YXJ0ICYmIGkgPD0gZW5kKSB7XG4gICAgICAgIGlmIChoYXNBdHRyKGl0ZW0sICdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAgICAgcmVtb3ZlQXR0cnMoaXRlbSwgWydhcmlhLWhpZGRlbicsICd0YWJpbmRleCddKTtcbiAgICAgICAgICBhZGRDbGFzcyhpdGVtLCBzbGlkZUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgLy8gaGlkZSBzbGlkZXNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzQXR0cihpdGVtLCAnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICAgIHNldEF0dHJzKGl0ZW0sIHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZW1vdmVDbGFzcyhpdGVtLCBzbGlkZUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gZ2FsbGVyeTogdXBkYXRlIHNsaWRlIHBvc2l0aW9uXG4gIGZ1bmN0aW9uIHVwZGF0ZUdhbGxlcnlTbGlkZVBvc2l0aW9ucyAoKSB7XG4gICAgdmFyIGwgPSBpbmRleCArIE1hdGgubWluKHNsaWRlQ291bnQsIGl0ZW1zKTtcbiAgICBmb3IgKHZhciBpID0gc2xpZGVDb3VudE5ldzsgaS0tOykge1xuICAgICAgdmFyIGl0ZW0gPSBzbGlkZUl0ZW1zW2ldO1xuXG4gICAgICBpZiAoaSA+PSBpbmRleCAmJiBpIDwgbCkge1xuICAgICAgICAvLyBhZGQgdHJhbnNpdGlvbnMgdG8gdmlzaWJsZSBzbGlkZXMgd2hlbiBhZGp1c3RpbmcgdGhlaXIgcG9zaXRpb25zXG4gICAgICAgIGFkZENsYXNzKGl0ZW0sICd0bnMtbW92aW5nJyk7XG5cbiAgICAgICAgaXRlbS5zdHlsZS5sZWZ0ID0gKGkgLSBpbmRleCkgKiAxMDAgLyBpdGVtcyArICclJztcbiAgICAgICAgYWRkQ2xhc3MoaXRlbSwgYW5pbWF0ZUluKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgYW5pbWF0ZU5vcm1hbCk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uc3R5bGUubGVmdCkge1xuICAgICAgICBpdGVtLnN0eWxlLmxlZnQgPSAnJztcbiAgICAgICAgYWRkQ2xhc3MoaXRlbSwgYW5pbWF0ZU5vcm1hbCk7XG4gICAgICAgIHJlbW92ZUNsYXNzKGl0ZW0sIGFuaW1hdGVJbik7XG4gICAgICB9XG5cbiAgICAgIC8vIHJlbW92ZSBvdXRsZXQgYW5pbWF0aW9uXG4gICAgICByZW1vdmVDbGFzcyhpdGVtLCBhbmltYXRlT3V0KTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmluZyAnLnRucy1tb3ZpbmcnXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGZvckVhY2goc2xpZGVJdGVtcywgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoZWwsICd0bnMtbW92aW5nJyk7XG4gICAgICB9KTtcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgLy8gc2V0IHRhYmluZGV4IG9uIE5hdlxuICBmdW5jdGlvbiB1cGRhdGVOYXZTdGF0dXMgKCkge1xuICAgIC8vIGdldCBjdXJyZW50IG5hdlxuICAgIGlmIChuYXYpIHtcbiAgICAgIG5hdkN1cnJlbnRJbmRleCA9IG5hdkNsaWNrZWQgPj0gMCA/IG5hdkNsaWNrZWQgOiBnZXRDdXJyZW50TmF2SW5kZXgoKTtcbiAgICAgIG5hdkNsaWNrZWQgPSAtMTtcblxuICAgICAgaWYgKG5hdkN1cnJlbnRJbmRleCAhPT0gbmF2Q3VycmVudEluZGV4Q2FjaGVkKSB7XG4gICAgICAgIHZhciBuYXZQcmV2ID0gbmF2SXRlbXNbbmF2Q3VycmVudEluZGV4Q2FjaGVkXSxcbiAgICAgICAgICAgIG5hdkN1cnJlbnQgPSBuYXZJdGVtc1tuYXZDdXJyZW50SW5kZXhdO1xuXG4gICAgICAgIHNldEF0dHJzKG5hdlByZXYsIHtcbiAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnLFxuICAgICAgICAgICdhcmlhLWxhYmVsJzogbmF2U3RyICsgKG5hdkN1cnJlbnRJbmRleENhY2hlZCArIDEpXG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVDbGFzcyhuYXZQcmV2LCBuYXZBY3RpdmVDbGFzcyk7XG5cbiAgICAgICAgc2V0QXR0cnMobmF2Q3VycmVudCwgeydhcmlhLWxhYmVsJzogbmF2U3RyICsgKG5hdkN1cnJlbnRJbmRleCArIDEpICsgbmF2U3RyQ3VycmVudH0pO1xuICAgICAgICByZW1vdmVBdHRycyhuYXZDdXJyZW50LCAndGFiaW5kZXgnKTtcbiAgICAgICAgYWRkQ2xhc3MobmF2Q3VycmVudCwgbmF2QWN0aXZlQ2xhc3MpO1xuXG4gICAgICAgIG5hdkN1cnJlbnRJbmRleENhY2hlZCA9IG5hdkN1cnJlbnRJbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMb3dlckNhc2VOb2RlTmFtZSAoZWwpIHtcbiAgICByZXR1cm4gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQnV0dG9uIChlbCkge1xuICAgIHJldHVybiBnZXRMb3dlckNhc2VOb2RlTmFtZShlbCkgPT09ICdidXR0b24nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNBcmlhRGlzYWJsZWQgKGVsKSB7XG4gICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpID09PSAndHJ1ZSc7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNFbmFibGVFbGVtZW50IChpc0J1dHRvbiwgZWwsIHZhbCkge1xuICAgIGlmIChpc0J1dHRvbikge1xuICAgICAgZWwuZGlzYWJsZWQgPSB2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHZhbC50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgJ2Rpc2FibGVkJyB0byB0cnVlIG9uIGNvbnRyb2xzIHdoZW4gcmVhY2ggdGhlIGVkZ2VzXG4gIGZ1bmN0aW9uIHVwZGF0ZUNvbnRyb2xzU3RhdHVzICgpIHtcbiAgICBpZiAoIWNvbnRyb2xzIHx8IHJld2luZCB8fCBsb29wKSB7IHJldHVybjsgfVxuXG4gICAgdmFyIHByZXZEaXNhYmxlZCA9IChwcmV2SXNCdXR0b24pID8gcHJldkJ1dHRvbi5kaXNhYmxlZCA6IGlzQXJpYURpc2FibGVkKHByZXZCdXR0b24pLFxuICAgICAgICBuZXh0RGlzYWJsZWQgPSAobmV4dElzQnV0dG9uKSA/IG5leHRCdXR0b24uZGlzYWJsZWQgOiBpc0FyaWFEaXNhYmxlZChuZXh0QnV0dG9uKSxcbiAgICAgICAgZGlzYWJsZVByZXYgPSAoaW5kZXggPD0gaW5kZXhNaW4pID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlTmV4dCA9ICghcmV3aW5kICYmIGluZGV4ID49IGluZGV4TWF4KSA/IHRydWUgOiBmYWxzZTtcblxuICAgIGlmIChkaXNhYmxlUHJldiAmJiAhcHJldkRpc2FibGVkKSB7XG4gICAgICBkaXNFbmFibGVFbGVtZW50KHByZXZJc0J1dHRvbiwgcHJldkJ1dHRvbiwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmICghZGlzYWJsZVByZXYgJiYgcHJldkRpc2FibGVkKSB7XG4gICAgICBkaXNFbmFibGVFbGVtZW50KHByZXZJc0J1dHRvbiwgcHJldkJ1dHRvbiwgZmFsc2UpO1xuICAgIH1cbiAgICBpZiAoZGlzYWJsZU5leHQgJiYgIW5leHREaXNhYmxlZCkge1xuICAgICAgZGlzRW5hYmxlRWxlbWVudChuZXh0SXNCdXR0b24sIG5leHRCdXR0b24sIHRydWUpO1xuICAgIH1cbiAgICBpZiAoIWRpc2FibGVOZXh0ICYmIG5leHREaXNhYmxlZCkge1xuICAgICAgZGlzRW5hYmxlRWxlbWVudChuZXh0SXNCdXR0b24sIG5leHRCdXR0b24sIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgZHVyYXRpb25cbiAgZnVuY3Rpb24gcmVzZXREdXJhdGlvbiAoZWwsIHN0cikge1xuICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04pIHsgZWwuc3R5bGVbVFJBTlNJVElPTkRVUkFUSU9OXSA9IHN0cjsgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2xpZGVyV2lkdGggKCkge1xuICAgIHJldHVybiBmaXhlZFdpZHRoID8gKGZpeGVkV2lkdGggKyBndXR0ZXIpICogc2xpZGVDb3VudE5ldyA6IHNsaWRlUG9zaXRpb25zW3NsaWRlQ291bnROZXddO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2VudGVyR2FwIChudW0pIHtcbiAgICBpZiAobnVtID09IG51bGwpIHsgbnVtID0gaW5kZXg7IH1cblxuICAgIHZhciBnYXAgPSBlZGdlUGFkZGluZyA/IGd1dHRlciA6IDA7XG4gICAgcmV0dXJuIGF1dG9XaWR0aCA/ICgodmlld3BvcnQgLSBnYXApIC0gKHNsaWRlUG9zaXRpb25zW251bSArIDFdIC0gc2xpZGVQb3NpdGlvbnNbbnVtXSAtIGd1dHRlcikpLzIgOlxuICAgICAgZml4ZWRXaWR0aCA/ICh2aWV3cG9ydCAtIGZpeGVkV2lkdGgpIC8gMiA6XG4gICAgICAgIChpdGVtcyAtIDEpIC8gMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJpZ2h0Qm91bmRhcnkgKCkge1xuICAgIHZhciBnYXAgPSBlZGdlUGFkZGluZyA/IGd1dHRlciA6IDAsXG4gICAgICAgIHJlc3VsdCA9ICh2aWV3cG9ydCArIGdhcCkgLSBnZXRTbGlkZXJXaWR0aCgpO1xuXG4gICAgaWYgKGNlbnRlciAmJiAhbG9vcCkge1xuICAgICAgcmVzdWx0ID0gZml4ZWRXaWR0aCA/IC0gKGZpeGVkV2lkdGggKyBndXR0ZXIpICogKHNsaWRlQ291bnROZXcgLSAxKSAtIGdldENlbnRlckdhcCgpIDpcbiAgICAgICAgZ2V0Q2VudGVyR2FwKHNsaWRlQ291bnROZXcgLSAxKSAtIHNsaWRlUG9zaXRpb25zW3NsaWRlQ291bnROZXcgLSAxXTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCA+IDApIHsgcmVzdWx0ID0gMDsgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbnRhaW5lclRyYW5zZm9ybVZhbHVlIChudW0pIHtcbiAgICBpZiAobnVtID09IG51bGwpIHsgbnVtID0gaW5kZXg7IH1cblxuICAgIHZhciB2YWw7XG4gICAgaWYgKGhvcml6b250YWwgJiYgIWF1dG9XaWR0aCkge1xuICAgICAgaWYgKGZpeGVkV2lkdGgpIHtcbiAgICAgICAgdmFsID0gLSAoZml4ZWRXaWR0aCArIGd1dHRlcikgKiBudW07XG4gICAgICAgIGlmIChjZW50ZXIpIHsgdmFsICs9IGdldENlbnRlckdhcCgpOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZGVub21pbmF0b3IgPSBUUkFOU0ZPUk0gPyBzbGlkZUNvdW50TmV3IDogaXRlbXM7XG4gICAgICAgIGlmIChjZW50ZXIpIHsgbnVtIC09IGdldENlbnRlckdhcCgpOyB9XG4gICAgICAgIHZhbCA9IC0gbnVtICogMTAwIC8gZGVub21pbmF0b3I7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbCA9IC0gc2xpZGVQb3NpdGlvbnNbbnVtXTtcbiAgICAgIGlmIChjZW50ZXIgJiYgYXV0b1dpZHRoKSB7XG4gICAgICAgIHZhbCArPSBnZXRDZW50ZXJHYXAoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzUmlnaHREZWFkWm9uZSkgeyB2YWwgPSBNYXRoLm1heCh2YWwsIHJpZ2h0Qm91bmRhcnkpOyB9XG5cbiAgICB2YWwgKz0gKGhvcml6b250YWwgJiYgIWF1dG9XaWR0aCAmJiAhZml4ZWRXaWR0aCkgPyAnJScgOiAncHgnO1xuXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvQ29udGFpbmVyVHJhbnNmb3JtU2lsZW50ICh2YWwpIHtcbiAgICByZXNldER1cmF0aW9uKGNvbnRhaW5lciwgJzBzJyk7XG4gICAgZG9Db250YWluZXJUcmFuc2Zvcm0odmFsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvQ29udGFpbmVyVHJhbnNmb3JtICh2YWwpIHtcbiAgICBpZiAodmFsID09IG51bGwpIHsgdmFsID0gZ2V0Q29udGFpbmVyVHJhbnNmb3JtVmFsdWUoKTsgfVxuICAgIGNvbnRhaW5lci5zdHlsZVt0cmFuc2Zvcm1BdHRyXSA9IHRyYW5zZm9ybVByZWZpeCArIHZhbCArIHRyYW5zZm9ybVBvc3RmaXg7XG4gIH1cblxuICBmdW5jdGlvbiBhbmltYXRlU2xpZGUgKG51bWJlciwgY2xhc3NPdXQsIGNsYXNzSW4sIGlzT3V0KSB7XG4gICAgdmFyIGwgPSBudW1iZXIgKyBpdGVtcztcbiAgICBpZiAoIWxvb3ApIHsgbCA9IE1hdGgubWluKGwsIHNsaWRlQ291bnROZXcpOyB9XG5cbiAgICBmb3IgKHZhciBpID0gbnVtYmVyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gc2xpZGVJdGVtc1tpXTtcblxuICAgICAgLy8gc2V0IGl0ZW0gcG9zaXRpb25zXG4gICAgICBpZiAoIWlzT3V0KSB7IGl0ZW0uc3R5bGUubGVmdCA9IChpIC0gaW5kZXgpICogMTAwIC8gaXRlbXMgKyAnJSc7IH1cblxuICAgICAgaWYgKGFuaW1hdGVEZWxheSAmJiBUUkFOU0lUSU9OREVMQVkpIHtcbiAgICAgICAgaXRlbS5zdHlsZVtUUkFOU0lUSU9OREVMQVldID0gaXRlbS5zdHlsZVtBTklNQVRJT05ERUxBWV0gPSBhbmltYXRlRGVsYXkgKiAoaSAtIG51bWJlcikgLyAxMDAwICsgJ3MnO1xuICAgICAgfVxuICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgY2xhc3NPdXQpO1xuICAgICAgYWRkQ2xhc3MoaXRlbSwgY2xhc3NJbik7XG5cbiAgICAgIGlmIChpc091dCkgeyBzbGlkZUl0ZW1zT3V0LnB1c2goaXRlbSk7IH1cbiAgICB9XG4gIH1cblxuICAvLyBtYWtlIHRyYW5zZmVyIGFmdGVyIGNsaWNrL2RyYWc6XG4gIC8vIDEuIGNoYW5nZSAndHJhbnNmb3JtJyBwcm9wZXJ0eSBmb3IgbW9yZGVybiBicm93c2Vyc1xuICAvLyAyLiBjaGFuZ2UgJ2xlZnQnIHByb3BlcnR5IGZvciBsZWdhY3kgYnJvd3NlcnNcbiAgdmFyIHRyYW5zZm9ybUNvcmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYXJvdXNlbCA/XG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc2V0RHVyYXRpb24oY29udGFpbmVyLCAnJyk7XG4gICAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04gfHwgIXNwZWVkKSB7XG4gICAgICAgICAgLy8gZm9yIG1vcmRlbiBicm93c2VycyB3aXRoIG5vbi16ZXJvIGR1cmF0aW9uIG9yXG4gICAgICAgICAgLy8gemVybyBkdXJhdGlvbiBmb3IgYWxsIGJyb3dzZXJzXG4gICAgICAgICAgZG9Db250YWluZXJUcmFuc2Zvcm0oKTtcbiAgICAgICAgICAvLyBydW4gZmFsbGJhY2sgZnVuY3Rpb24gbWFudWFsbHlcbiAgICAgICAgICAvLyB3aGVuIGR1cmF0aW9uIGlzIDAgLyBjb250YWluZXIgaXMgaGlkZGVuXG4gICAgICAgICAgaWYgKCFzcGVlZCB8fCAhaXNWaXNpYmxlKGNvbnRhaW5lcikpIHsgb25UcmFuc2l0aW9uRW5kKCk7IH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGZvciBvbGQgYnJvd3NlciB3aXRoIG5vbi16ZXJvIGR1cmF0aW9uXG4gICAgICAgICAganNUcmFuc2Zvcm0oY29udGFpbmVyLCB0cmFuc2Zvcm1BdHRyLCB0cmFuc2Zvcm1QcmVmaXgsIHRyYW5zZm9ybVBvc3RmaXgsIGdldENvbnRhaW5lclRyYW5zZm9ybVZhbHVlKCksIHNwZWVkLCBvblRyYW5zaXRpb25FbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFob3Jpem9udGFsKSB7IHVwZGF0ZUNvbnRlbnRXcmFwcGVySGVpZ2h0KCk7IH1cbiAgICAgIH0gOlxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBzbGlkZUl0ZW1zT3V0ID0gW107XG5cbiAgICAgICAgdmFyIGV2ZSA9IHt9O1xuICAgICAgICBldmVbVFJBTlNJVElPTkVORF0gPSBldmVbQU5JTUFUSU9ORU5EXSA9IG9uVHJhbnNpdGlvbkVuZDtcbiAgICAgICAgcmVtb3ZlRXZlbnRzKHNsaWRlSXRlbXNbaW5kZXhDYWNoZWRdLCBldmUpO1xuICAgICAgICBhZGRFdmVudHMoc2xpZGVJdGVtc1tpbmRleF0sIGV2ZSk7XG5cbiAgICAgICAgYW5pbWF0ZVNsaWRlKGluZGV4Q2FjaGVkLCBhbmltYXRlSW4sIGFuaW1hdGVPdXQsIHRydWUpO1xuICAgICAgICBhbmltYXRlU2xpZGUoaW5kZXgsIGFuaW1hdGVOb3JtYWwsIGFuaW1hdGVJbik7XG5cbiAgICAgICAgLy8gcnVuIGZhbGxiYWNrIGZ1bmN0aW9uIG1hbnVhbGx5XG4gICAgICAgIC8vIHdoZW4gdHJhbnNpdGlvbiBvciBhbmltYXRpb24gbm90IHN1cHBvcnRlZCAvIGR1cmF0aW9uIGlzIDBcbiAgICAgICAgaWYgKCFUUkFOU0lUSU9ORU5EIHx8ICFBTklNQVRJT05FTkQgfHwgIXNwZWVkIHx8ICFpc1Zpc2libGUoY29udGFpbmVyKSkgeyBvblRyYW5zaXRpb25FbmQoKTsgfVxuICAgICAgfTtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiByZW5kZXIgKGUsIHNsaWRlck1vdmVkKSB7XG4gICAgaWYgKHVwZGF0ZUluZGV4QmVmb3JlVHJhbnNmb3JtKSB7IHVwZGF0ZUluZGV4KCk7IH1cblxuICAgIC8vIHJlbmRlciB3aGVuIHNsaWRlciB3YXMgbW92ZWQgKHRvdWNoIG9yIGRyYWcpIGV2ZW4gdGhvdWdoIGluZGV4IG1heSBub3QgY2hhbmdlXG4gICAgaWYgKGluZGV4ICE9PSBpbmRleENhY2hlZCB8fCBzbGlkZXJNb3ZlZCkge1xuICAgICAgLy8gZXZlbnRzXG4gICAgICBldmVudHMuZW1pdCgnaW5kZXhDaGFuZ2VkJywgaW5mbygpKTtcbiAgICAgIGV2ZW50cy5lbWl0KCd0cmFuc2l0aW9uU3RhcnQnLCBpbmZvKCkpO1xuICAgICAgaWYgKGF1dG9IZWlnaHQpIHsgZG9BdXRvSGVpZ2h0KCk7IH1cblxuICAgICAgLy8gcGF1c2UgYXV0b3BsYXkgd2hlbiBjbGljayBvciBrZXlkb3duIGZyb20gdXNlclxuICAgICAgaWYgKGFuaW1hdGluZyAmJiBlICYmIFsnY2xpY2snLCAna2V5ZG93biddLmluZGV4T2YoZS50eXBlKSA+PSAwKSB7IHN0b3BBdXRvcGxheSgpOyB9XG5cbiAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgdHJhbnNmb3JtQ29yZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFRyYW5zZmVyIHByZWZpeGVkIHByb3BlcnRpZXMgdG8gdGhlIHNhbWUgZm9ybWF0XG4gICAqIENTUzogLVdlYmtpdC1UcmFuc2Zvcm0gPT4gd2Via2l0dHJhbnNmb3JtXG4gICAqIEpTOiBXZWJraXRUcmFuc2Zvcm0gPT4gd2Via2l0dHJhbnNmb3JtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBwcm9wZXJ0eVxuICAgKlxuICAgKi9cbiAgZnVuY3Rpb24gc3RyVHJhbnMgKHN0cikge1xuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tL2csICcnKTtcbiAgfVxuXG4gIC8vIEFGVEVSIFRSQU5TRk9STVxuICAvLyBUaGluZ3MgbmVlZCB0byBiZSBkb25lIGFmdGVyIGEgdHJhbnNmZXI6XG4gIC8vIDEuIGNoZWNrIGluZGV4XG4gIC8vIDIuIGFkZCBjbGFzc2VzIHRvIHZpc2libGUgc2xpZGVcbiAgLy8gMy4gZGlzYWJsZSBjb250cm9scyBidXR0b25zIHdoZW4gcmVhY2ggdGhlIGZpcnN0L2xhc3Qgc2xpZGUgaW4gbm9uLWxvb3Agc2xpZGVyXG4gIC8vIDQuIHVwZGF0ZSBuYXYgc3RhdHVzXG4gIC8vIDUuIGxhenlsb2FkIGltYWdlc1xuICAvLyA2LiB1cGRhdGUgY29udGFpbmVyIGhlaWdodFxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQgKGV2ZW50KSB7XG4gICAgLy8gY2hlY2sgcnVubmluZyBvbiBnYWxsZXJ5IG1vZGVcbiAgICAvLyBtYWtlIHN1cmUgdHJhbnRpb25lbmQvYW5pbWF0aW9uZW5kIGV2ZW50cyBydW4gb25seSBvbmNlXG4gICAgaWYgKGNhcm91c2VsIHx8IHJ1bm5pbmcpIHtcbiAgICAgIGV2ZW50cy5lbWl0KCd0cmFuc2l0aW9uRW5kJywgaW5mbyhldmVudCkpO1xuXG4gICAgICBpZiAoIWNhcm91c2VsICYmIHNsaWRlSXRlbXNPdXQubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlSXRlbXNPdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IHNsaWRlSXRlbXNPdXRbaV07XG4gICAgICAgICAgLy8gc2V0IGl0ZW0gcG9zaXRpb25zXG4gICAgICAgICAgaXRlbS5zdHlsZS5sZWZ0ID0gJyc7XG5cbiAgICAgICAgICBpZiAoQU5JTUFUSU9OREVMQVkgJiYgVFJBTlNJVElPTkRFTEFZKSB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlW0FOSU1BVElPTkRFTEFZXSA9ICcnO1xuICAgICAgICAgICAgaXRlbS5zdHlsZVtUUkFOU0lUSU9OREVMQVldID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbW92ZUNsYXNzKGl0ZW0sIGFuaW1hdGVPdXQpO1xuICAgICAgICAgIGFkZENsYXNzKGl0ZW0sIGFuaW1hdGVOb3JtYWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIHVwZGF0ZSBzbGlkZXMsIG5hdiwgY29udHJvbHMgYWZ0ZXIgY2hlY2tpbmcgLi4uXG4gICAgICAgKiA9PiBsZWdhY3kgYnJvd3NlcnMgd2hvIGRvbid0IHN1cHBvcnQgJ2V2ZW50J1xuICAgICAgICogICAgaGF2ZSB0byBjaGVjayBldmVudCBmaXJzdCwgb3RoZXJ3aXNlIGV2ZW50LnRhcmdldCB3aWxsIGNhdXNlIGFuIGVycm9yXG4gICAgICAgKiA9PiBvciAnZ2FsbGVyeScgbW9kZTpcbiAgICAgICAqICAgKyBldmVudCB0YXJnZXQgaXMgc2xpZGUgaXRlbVxuICAgICAgICogPT4gb3IgJ2Nhcm91c2VsJyBtb2RlOlxuICAgICAgICogICArIGV2ZW50IHRhcmdldCBpcyBjb250YWluZXIsXG4gICAgICAgKiAgICsgZXZlbnQucHJvcGVydHkgaXMgdGhlIHNhbWUgd2l0aCB0cmFuc2Zvcm0gYXR0cmlidXRlXG4gICAgICAgKi9cbiAgICAgIGlmICghZXZlbnQgfHxcbiAgICAgICAgICAhY2Fyb3VzZWwgJiYgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUgPT09IGNvbnRhaW5lciB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCA9PT0gY29udGFpbmVyICYmIHN0clRyYW5zKGV2ZW50LnByb3BlcnR5TmFtZSkgPT09IHN0clRyYW5zKHRyYW5zZm9ybUF0dHIpKSB7XG5cbiAgICAgICAgaWYgKCF1cGRhdGVJbmRleEJlZm9yZVRyYW5zZm9ybSkge1xuICAgICAgICAgIHZhciBpbmRleFRlbSA9IGluZGV4O1xuICAgICAgICAgIHVwZGF0ZUluZGV4KCk7XG4gICAgICAgICAgaWYgKGluZGV4ICE9PSBpbmRleFRlbSkge1xuICAgICAgICAgICAgZXZlbnRzLmVtaXQoJ2luZGV4Q2hhbmdlZCcsIGluZm8oKSk7XG5cbiAgICAgICAgICAgIGRvQ29udGFpbmVyVHJhbnNmb3JtU2lsZW50KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5lc3RlZCA9PT0gJ2lubmVyJykgeyBldmVudHMuZW1pdCgnaW5uZXJMb2FkZWQnLCBpbmZvKCkpOyB9XG4gICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgaW5kZXhDYWNoZWQgPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC8vICMgQUNUSU9OU1xuICBmdW5jdGlvbiBnb1RvICh0YXJnZXRJbmRleCwgZSkge1xuICAgIGlmIChmcmVlemUpIHsgcmV0dXJuOyB9XG5cbiAgICAvLyBwcmV2IHNsaWRlQnlcbiAgICBpZiAodGFyZ2V0SW5kZXggPT09ICdwcmV2Jykge1xuICAgICAgb25Db250cm9sc0NsaWNrKGUsIC0xKTtcblxuICAgIC8vIG5leHQgc2xpZGVCeVxuICAgIH0gZWxzZSBpZiAodGFyZ2V0SW5kZXggPT09ICduZXh0Jykge1xuICAgICAgb25Db250cm9sc0NsaWNrKGUsIDEpO1xuXG4gICAgLy8gZ28gdG8gZXhhY3Qgc2xpZGVcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgaWYgKHByZXZlbnRBY3Rpb25XaGVuUnVubmluZykgeyByZXR1cm47IH0gZWxzZSB7IG9uVHJhbnNpdGlvbkVuZCgpOyB9XG4gICAgICB9XG5cbiAgICAgIHZhciBhYnNJbmRleCA9IGdldEFic0luZGV4KCksXG4gICAgICAgICAgaW5kZXhHYXAgPSAwO1xuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPT09ICdmaXJzdCcpIHtcbiAgICAgICAgaW5kZXhHYXAgPSAtIGFic0luZGV4O1xuICAgICAgfSBlbHNlIGlmICh0YXJnZXRJbmRleCA9PT0gJ2xhc3QnKSB7XG4gICAgICAgIGluZGV4R2FwID0gY2Fyb3VzZWwgPyBzbGlkZUNvdW50IC0gaXRlbXMgLSBhYnNJbmRleCA6IHNsaWRlQ291bnQgLSAxIC0gYWJzSW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldEluZGV4ICE9PSAnbnVtYmVyJykgeyB0YXJnZXRJbmRleCA9IHBhcnNlSW50KHRhcmdldEluZGV4KTsgfVxuXG4gICAgICAgIGlmICghaXNOYU4odGFyZ2V0SW5kZXgpKSB7XG4gICAgICAgICAgLy8gZnJvbSBkaXJlY3RseSBjYWxsZWQgZ29UbyBmdW5jdGlvblxuICAgICAgICAgIGlmICghZSkgeyB0YXJnZXRJbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHNsaWRlQ291bnQgLSAxLCB0YXJnZXRJbmRleCkpOyB9XG5cbiAgICAgICAgICBpbmRleEdhcCA9IHRhcmdldEluZGV4IC0gYWJzSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZ2FsbGVyeTogbWFrZSBzdXJlIG5ldyBwYWdlIHdvbid0IG92ZXJsYXAgd2l0aCBjdXJyZW50IHBhZ2VcbiAgICAgIGlmICghY2Fyb3VzZWwgJiYgaW5kZXhHYXAgJiYgTWF0aC5hYnMoaW5kZXhHYXApIDwgaXRlbXMpIHtcbiAgICAgICAgdmFyIGZhY3RvciA9IGluZGV4R2FwID4gMCA/IDEgOiAtMTtcbiAgICAgICAgaW5kZXhHYXAgKz0gKGluZGV4ICsgaW5kZXhHYXAgLSBzbGlkZUNvdW50KSA+PSBpbmRleE1pbiA/IHNsaWRlQ291bnQgKiBmYWN0b3IgOiBzbGlkZUNvdW50ICogMiAqIGZhY3RvciAqIC0xO1xuICAgICAgfVxuXG4gICAgICBpbmRleCArPSBpbmRleEdhcDtcblxuICAgICAgLy8gbWFrZSBzdXJlIGluZGV4IGlzIGluIHJhbmdlXG4gICAgICBpZiAoY2Fyb3VzZWwgJiYgbG9vcCkge1xuICAgICAgICBpZiAoaW5kZXggPCBpbmRleE1pbikgeyBpbmRleCArPSBzbGlkZUNvdW50OyB9XG4gICAgICAgIGlmIChpbmRleCA+IGluZGV4TWF4KSB7IGluZGV4IC09IHNsaWRlQ291bnQ7IH1cbiAgICAgIH1cblxuICAgICAgLy8gaWYgaW5kZXggaXMgY2hhbmdlZCwgc3RhcnQgcmVuZGVyaW5nXG4gICAgICBpZiAoZ2V0QWJzSW5kZXgoaW5kZXgpICE9PSBnZXRBYnNJbmRleChpbmRleENhY2hlZCkpIHtcbiAgICAgICAgcmVuZGVyKGUpO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgLy8gb24gY29udHJvbHMgY2xpY2tcbiAgZnVuY3Rpb24gb25Db250cm9sc0NsaWNrIChlLCBkaXIpIHtcbiAgICBpZiAocnVubmluZykge1xuICAgICAgaWYgKHByZXZlbnRBY3Rpb25XaGVuUnVubmluZykgeyByZXR1cm47IH0gZWxzZSB7IG9uVHJhbnNpdGlvbkVuZCgpOyB9XG4gICAgfVxuICAgIHZhciBwYXNzRXZlbnRPYmplY3Q7XG5cbiAgICBpZiAoIWRpcikge1xuICAgICAgZSA9IGdldEV2ZW50KGUpO1xuICAgICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChlKTtcblxuICAgICAgd2hpbGUgKHRhcmdldCAhPT0gY29udHJvbHNDb250YWluZXIgJiYgW3ByZXZCdXR0b24sIG5leHRCdXR0b25dLmluZGV4T2YodGFyZ2V0KSA8IDApIHsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7IH1cblxuICAgICAgdmFyIHRhcmdldEluID0gW3ByZXZCdXR0b24sIG5leHRCdXR0b25dLmluZGV4T2YodGFyZ2V0KTtcbiAgICAgIGlmICh0YXJnZXRJbiA+PSAwKSB7XG4gICAgICAgIHBhc3NFdmVudE9iamVjdCA9IHRydWU7XG4gICAgICAgIGRpciA9IHRhcmdldEluID09PSAwID8gLTEgOiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXdpbmQpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gaW5kZXhNaW4gJiYgZGlyID09PSAtMSkge1xuICAgICAgICBnb1RvKCdsYXN0JywgZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGluZGV4TWF4ICYmIGRpciA9PT0gMSkge1xuICAgICAgICBnb1RvKCdmaXJzdCcsIGUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRpcikge1xuICAgICAgaW5kZXggKz0gc2xpZGVCeSAqIGRpcjtcbiAgICAgIGlmIChhdXRvV2lkdGgpIHsgaW5kZXggPSBNYXRoLmZsb29yKGluZGV4KTsgfVxuICAgICAgLy8gcGFzcyBlIHdoZW4gY2xpY2sgY29udHJvbCBidXR0b25zIG9yIGtleWRvd25cbiAgICAgIHJlbmRlcigocGFzc0V2ZW50T2JqZWN0IHx8IChlICYmIGUudHlwZSA9PT0gJ2tleWRvd24nKSkgPyBlIDogbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgLy8gb24gbmF2IGNsaWNrXG4gIGZ1bmN0aW9uIG9uTmF2Q2xpY2sgKGUpIHtcbiAgICBpZiAocnVubmluZykge1xuICAgICAgaWYgKHByZXZlbnRBY3Rpb25XaGVuUnVubmluZykgeyByZXR1cm47IH0gZWxzZSB7IG9uVHJhbnNpdGlvbkVuZCgpOyB9XG4gICAgfVxuXG4gICAgZSA9IGdldEV2ZW50KGUpO1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoZSksIG5hdkluZGV4O1xuXG4gICAgLy8gZmluZCB0aGUgY2xpY2tlZCBuYXYgaXRlbVxuICAgIHdoaWxlICh0YXJnZXQgIT09IG5hdkNvbnRhaW5lciAmJiAhaGFzQXR0cih0YXJnZXQsICdkYXRhLW5hdicpKSB7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlOyB9XG4gICAgaWYgKGhhc0F0dHIodGFyZ2V0LCAnZGF0YS1uYXYnKSkge1xuICAgICAgdmFyIG5hdkluZGV4ID0gbmF2Q2xpY2tlZCA9IE51bWJlcihnZXRBdHRyKHRhcmdldCwgJ2RhdGEtbmF2JykpLFxuICAgICAgICAgIHRhcmdldEluZGV4QmFzZSA9IGZpeGVkV2lkdGggfHwgYXV0b1dpZHRoID8gbmF2SW5kZXggKiBzbGlkZUNvdW50IC8gcGFnZXMgOiBuYXZJbmRleCAqIGl0ZW1zLFxuICAgICAgICAgIHRhcmdldEluZGV4ID0gbmF2QXNUaHVtYm5haWxzID8gbmF2SW5kZXggOiBNYXRoLm1pbihNYXRoLmNlaWwodGFyZ2V0SW5kZXhCYXNlKSwgc2xpZGVDb3VudCAtIDEpO1xuICAgICAgZ29Ubyh0YXJnZXRJbmRleCwgZSk7XG5cbiAgICAgIGlmIChuYXZDdXJyZW50SW5kZXggPT09IG5hdkluZGV4KSB7XG4gICAgICAgIGlmIChhbmltYXRpbmcpIHsgc3RvcEF1dG9wbGF5KCk7IH1cbiAgICAgICAgbmF2Q2xpY2tlZCA9IC0xOyAvLyByZXNldCBuYXZDbGlja2VkXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gYXV0b3BsYXkgZnVuY3Rpb25zXG4gIGZ1bmN0aW9uIHNldEF1dG9wbGF5VGltZXIgKCkge1xuICAgIGF1dG9wbGF5VGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBvbkNvbnRyb2xzQ2xpY2sobnVsbCwgYXV0b3BsYXlEaXJlY3Rpb24pO1xuICAgIH0sIGF1dG9wbGF5VGltZW91dCk7XG5cbiAgICBhbmltYXRpbmcgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RvcEF1dG9wbGF5VGltZXIgKCkge1xuICAgIGNsZWFySW50ZXJ2YWwoYXV0b3BsYXlUaW1lcik7XG4gICAgYW5pbWF0aW5nID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVBdXRvcGxheUJ1dHRvbiAoYWN0aW9uLCB0eHQpIHtcbiAgICBzZXRBdHRycyhhdXRvcGxheUJ1dHRvbiwgeydkYXRhLWFjdGlvbic6IGFjdGlvbn0pO1xuICAgIGF1dG9wbGF5QnV0dG9uLmlubmVySFRNTCA9IGF1dG9wbGF5SHRtbFN0cmluZ3NbMF0gKyBhY3Rpb24gKyBhdXRvcGxheUh0bWxTdHJpbmdzWzFdICsgdHh0O1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRBdXRvcGxheSAoKSB7XG4gICAgc2V0QXV0b3BsYXlUaW1lcigpO1xuICAgIGlmIChhdXRvcGxheUJ1dHRvbikgeyB1cGRhdGVBdXRvcGxheUJ1dHRvbignc3RvcCcsIGF1dG9wbGF5VGV4dFsxXSk7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3BBdXRvcGxheSAoKSB7XG4gICAgc3RvcEF1dG9wbGF5VGltZXIoKTtcbiAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHsgdXBkYXRlQXV0b3BsYXlCdXR0b24oJ3N0YXJ0JywgYXV0b3BsYXlUZXh0WzBdKTsgfVxuICB9XG5cbiAgLy8gcHJvZ3JhbWFpdGNhbGx5IHBsYXkvcGF1c2UgdGhlIHNsaWRlclxuICBmdW5jdGlvbiBwbGF5ICgpIHtcbiAgICBpZiAoYXV0b3BsYXkgJiYgIWFuaW1hdGluZykge1xuICAgICAgc3RhcnRBdXRvcGxheSgpO1xuICAgICAgYXV0b3BsYXlVc2VyUGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHBhdXNlICgpIHtcbiAgICBpZiAoYW5pbWF0aW5nKSB7XG4gICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgIGF1dG9wbGF5VXNlclBhdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQXV0b3BsYXkgKCkge1xuICAgIGlmIChhbmltYXRpbmcpIHtcbiAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgYXV0b3BsYXlVc2VyUGF1c2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRBdXRvcGxheSgpO1xuICAgICAgYXV0b3BsYXlVc2VyUGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25WaXNpYmlsaXR5Q2hhbmdlICgpIHtcbiAgICBpZiAoZG9jLmhpZGRlbikge1xuICAgICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgICBzdG9wQXV0b3BsYXlUaW1lcigpO1xuICAgICAgICBhdXRvcGxheVZpc2liaWxpdHlQYXVzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXV0b3BsYXlWaXNpYmlsaXR5UGF1c2VkKSB7XG4gICAgICBzZXRBdXRvcGxheVRpbWVyKCk7XG4gICAgICBhdXRvcGxheVZpc2liaWxpdHlQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZW92ZXJQYXVzZSAoKSB7XG4gICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgc3RvcEF1dG9wbGF5VGltZXIoKTtcbiAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlb3V0UmVzdGFydCAoKSB7XG4gICAgaWYgKGF1dG9wbGF5SG92ZXJQYXVzZWQpIHtcbiAgICAgIHNldEF1dG9wbGF5VGltZXIoKTtcbiAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBrZXlkb3duIGV2ZW50cyBvbiBkb2N1bWVudFxuICBmdW5jdGlvbiBvbkRvY3VtZW50S2V5ZG93biAoZSkge1xuICAgIGUgPSBnZXRFdmVudChlKTtcbiAgICB2YXIga2V5SW5kZXggPSBbS0VZUy5MRUZULCBLRVlTLlJJR0hUXS5pbmRleE9mKGUua2V5Q29kZSk7XG5cbiAgICBpZiAoa2V5SW5kZXggPj0gMCkge1xuICAgICAgb25Db250cm9sc0NsaWNrKGUsIGtleUluZGV4ID09PSAwID8gLTEgOiAxKTtcbiAgICB9XG4gIH1cblxuICAvLyBvbiBrZXkgY29udHJvbFxuICBmdW5jdGlvbiBvbkNvbnRyb2xzS2V5ZG93biAoZSkge1xuICAgIGUgPSBnZXRFdmVudChlKTtcbiAgICB2YXIga2V5SW5kZXggPSBbS0VZUy5MRUZULCBLRVlTLlJJR0hUXS5pbmRleE9mKGUua2V5Q29kZSk7XG5cbiAgICBpZiAoa2V5SW5kZXggPj0gMCkge1xuICAgICAgaWYgKGtleUluZGV4ID09PSAwKSB7XG4gICAgICAgIGlmICghcHJldkJ1dHRvbi5kaXNhYmxlZCkgeyBvbkNvbnRyb2xzQ2xpY2soZSwgLTEpOyB9XG4gICAgICB9IGVsc2UgaWYgKCFuZXh0QnV0dG9uLmRpc2FibGVkKSB7XG4gICAgICAgIG9uQ29udHJvbHNDbGljayhlLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBzZXQgZm9jdXNcbiAgZnVuY3Rpb24gc2V0Rm9jdXMgKGVsKSB7XG4gICAgZWwuZm9jdXMoKTtcbiAgfVxuXG4gIC8vIG9uIGtleSBuYXZcbiAgZnVuY3Rpb24gb25OYXZLZXlkb3duIChlKSB7XG4gICAgZSA9IGdldEV2ZW50KGUpO1xuICAgIHZhciBjdXJFbGVtZW50ID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKCFoYXNBdHRyKGN1ckVsZW1lbnQsICdkYXRhLW5hdicpKSB7IHJldHVybjsgfVxuXG4gICAgLy8gdmFyIGNvZGUgPSBlLmtleUNvZGUsXG4gICAgdmFyIGtleUluZGV4ID0gW0tFWVMuTEVGVCwgS0VZUy5SSUdIVCwgS0VZUy5FTlRFUiwgS0VZUy5TUEFDRV0uaW5kZXhPZihlLmtleUNvZGUpLFxuICAgICAgICBuYXZJbmRleCA9IE51bWJlcihnZXRBdHRyKGN1ckVsZW1lbnQsICdkYXRhLW5hdicpKTtcblxuICAgIGlmIChrZXlJbmRleCA+PSAwKSB7XG4gICAgICBpZiAoa2V5SW5kZXggPT09IDApIHtcbiAgICAgICAgaWYgKG5hdkluZGV4ID4gMCkgeyBzZXRGb2N1cyhuYXZJdGVtc1tuYXZJbmRleCAtIDFdKTsgfVxuICAgICAgfSBlbHNlIGlmIChrZXlJbmRleCA9PT0gMSkge1xuICAgICAgICBpZiAobmF2SW5kZXggPCBwYWdlcyAtIDEpIHsgc2V0Rm9jdXMobmF2SXRlbXNbbmF2SW5kZXggKyAxXSk7IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdkNsaWNrZWQgPSBuYXZJbmRleDtcbiAgICAgICAgZ29UbyhuYXZJbmRleCwgZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RXZlbnQgKGUpIHtcbiAgICBlID0gZSB8fCB3aW4uZXZlbnQ7XG4gICAgcmV0dXJuIGlzVG91Y2hFdmVudChlKSA/IGUuY2hhbmdlZFRvdWNoZXNbMF0gOiBlO1xuICB9XG4gIGZ1bmN0aW9uIGdldFRhcmdldCAoZSkge1xuICAgIHJldHVybiBlLnRhcmdldCB8fCB3aW4uZXZlbnQuc3JjRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVG91Y2hFdmVudCAoZSkge1xuICAgIHJldHVybiBlLnR5cGUuaW5kZXhPZigndG91Y2gnKSA+PSAwO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJldmVudERlZmF1bHRCZWhhdmlvciAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNb3ZlRGlyZWN0aW9uRXhwZWN0ZWQgKCkge1xuICAgIHJldHVybiBnZXRUb3VjaERpcmVjdGlvbih0b0RlZ3JlZShsYXN0UG9zaXRpb24ueSAtIGluaXRQb3NpdGlvbi55LCBsYXN0UG9zaXRpb24ueCAtIGluaXRQb3NpdGlvbi54KSwgc3dpcGVBbmdsZSkgPT09IG9wdGlvbnMuYXhpcztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGFuU3RhcnQgKGUpIHtcbiAgICBpZiAocnVubmluZykge1xuICAgICAgaWYgKHByZXZlbnRBY3Rpb25XaGVuUnVubmluZykgeyByZXR1cm47IH0gZWxzZSB7IG9uVHJhbnNpdGlvbkVuZCgpOyB9XG4gICAgfVxuXG4gICAgaWYgKGF1dG9wbGF5ICYmIGFuaW1hdGluZykgeyBzdG9wQXV0b3BsYXlUaW1lcigpOyB9XG5cbiAgICBwYW5TdGFydCA9IHRydWU7XG4gICAgaWYgKHJhZkluZGV4KSB7XG4gICAgICBjYWYocmFmSW5kZXgpO1xuICAgICAgcmFmSW5kZXggPSBudWxsO1xuICAgIH1cblxuICAgIHZhciAkID0gZ2V0RXZlbnQoZSk7XG4gICAgZXZlbnRzLmVtaXQoaXNUb3VjaEV2ZW50KGUpID8gJ3RvdWNoU3RhcnQnIDogJ2RyYWdTdGFydCcsIGluZm8oZSkpO1xuXG4gICAgaWYgKCFpc1RvdWNoRXZlbnQoZSkgJiYgWydpbWcnLCAnYSddLmluZGV4T2YoZ2V0TG93ZXJDYXNlTm9kZU5hbWUoZ2V0VGFyZ2V0KGUpKSkgPj0gMCkge1xuICAgICAgcHJldmVudERlZmF1bHRCZWhhdmlvcihlKTtcbiAgICB9XG5cbiAgICBsYXN0UG9zaXRpb24ueCA9IGluaXRQb3NpdGlvbi54ID0gJC5jbGllbnRYO1xuICAgIGxhc3RQb3NpdGlvbi55ID0gaW5pdFBvc2l0aW9uLnkgPSAkLmNsaWVudFk7XG4gICAgaWYgKGNhcm91c2VsKSB7XG4gICAgICB0cmFuc2xhdGVJbml0ID0gcGFyc2VGbG9hdChjb250YWluZXIuc3R5bGVbdHJhbnNmb3JtQXR0cl0ucmVwbGFjZSh0cmFuc2Zvcm1QcmVmaXgsICcnKSk7XG4gICAgICByZXNldER1cmF0aW9uKGNvbnRhaW5lciwgJzBzJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25QYW5Nb3ZlIChlKSB7XG4gICAgaWYgKHBhblN0YXJ0KSB7XG4gICAgICB2YXIgJCA9IGdldEV2ZW50KGUpO1xuICAgICAgbGFzdFBvc2l0aW9uLnggPSAkLmNsaWVudFg7XG4gICAgICBsYXN0UG9zaXRpb24ueSA9ICQuY2xpZW50WTtcblxuICAgICAgaWYgKGNhcm91c2VsKSB7XG4gICAgICAgIGlmICghcmFmSW5kZXgpIHsgcmFmSW5kZXggPSByYWYoZnVuY3Rpb24oKXsgcGFuVXBkYXRlKGUpOyB9KTsgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb25FeHBlY3RlZCA9PT0gJz8nKSB7IG1vdmVEaXJlY3Rpb25FeHBlY3RlZCA9IGdldE1vdmVEaXJlY3Rpb25FeHBlY3RlZCgpOyB9XG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uRXhwZWN0ZWQpIHsgcHJldmVudFNjcm9sbCA9IHRydWU7IH1cbiAgICAgIH1cblxuICAgICAgaWYgKCh0eXBlb2YgZS5jYW5jZWxhYmxlICE9PSAnYm9vbGVhbicgfHwgZS5jYW5jZWxhYmxlKSAmJiBwcmV2ZW50U2Nyb2xsKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYW5VcGRhdGUgKGUpIHtcbiAgICBpZiAoIW1vdmVEaXJlY3Rpb25FeHBlY3RlZCkge1xuICAgICAgcGFuU3RhcnQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FmKHJhZkluZGV4KTtcbiAgICBpZiAocGFuU3RhcnQpIHsgcmFmSW5kZXggPSByYWYoZnVuY3Rpb24oKXsgcGFuVXBkYXRlKGUpOyB9KTsgfVxuXG4gICAgaWYgKG1vdmVEaXJlY3Rpb25FeHBlY3RlZCA9PT0gJz8nKSB7IG1vdmVEaXJlY3Rpb25FeHBlY3RlZCA9IGdldE1vdmVEaXJlY3Rpb25FeHBlY3RlZCgpOyB9XG4gICAgaWYgKG1vdmVEaXJlY3Rpb25FeHBlY3RlZCkge1xuICAgICAgaWYgKCFwcmV2ZW50U2Nyb2xsICYmIGlzVG91Y2hFdmVudChlKSkgeyBwcmV2ZW50U2Nyb2xsID0gdHJ1ZTsgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZS50eXBlKSB7IGV2ZW50cy5lbWl0KGlzVG91Y2hFdmVudChlKSA/ICd0b3VjaE1vdmUnIDogJ2RyYWdNb3ZlJywgaW5mbyhlKSk7IH1cbiAgICAgIH0gY2F0Y2goZXJyKSB7fVxuXG4gICAgICB2YXIgeCA9IHRyYW5zbGF0ZUluaXQsXG4gICAgICAgICAgZGlzdCA9IGdldERpc3QobGFzdFBvc2l0aW9uLCBpbml0UG9zaXRpb24pO1xuICAgICAgaWYgKCFob3Jpem9udGFsIHx8IGZpeGVkV2lkdGggfHwgYXV0b1dpZHRoKSB7XG4gICAgICAgIHggKz0gZGlzdDtcbiAgICAgICAgeCArPSAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHBlcmNlbnRhZ2VYID0gVFJBTlNGT1JNID8gZGlzdCAqIGl0ZW1zICogMTAwIC8gKCh2aWV3cG9ydCArIGd1dHRlcikgKiBzbGlkZUNvdW50TmV3KTogZGlzdCAqIDEwMCAvICh2aWV3cG9ydCArIGd1dHRlcik7XG4gICAgICAgIHggKz0gcGVyY2VudGFnZVg7XG4gICAgICAgIHggKz0gJyUnO1xuICAgICAgfVxuXG4gICAgICBjb250YWluZXIuc3R5bGVbdHJhbnNmb3JtQXR0cl0gPSB0cmFuc2Zvcm1QcmVmaXggKyB4ICsgdHJhbnNmb3JtUG9zdGZpeDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblBhbkVuZCAoZSkge1xuICAgIGlmIChwYW5TdGFydCkge1xuICAgICAgaWYgKHJhZkluZGV4KSB7XG4gICAgICAgIGNhZihyYWZJbmRleCk7XG4gICAgICAgIHJhZkluZGV4ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChjYXJvdXNlbCkgeyByZXNldER1cmF0aW9uKGNvbnRhaW5lciwgJycpOyB9XG4gICAgICBwYW5TdGFydCA9IGZhbHNlO1xuXG4gICAgICB2YXIgJCA9IGdldEV2ZW50KGUpO1xuICAgICAgbGFzdFBvc2l0aW9uLnggPSAkLmNsaWVudFg7XG4gICAgICBsYXN0UG9zaXRpb24ueSA9ICQuY2xpZW50WTtcbiAgICAgIHZhciBkaXN0ID0gZ2V0RGlzdChsYXN0UG9zaXRpb24sIGluaXRQb3NpdGlvbik7XG5cbiAgICAgIGlmIChNYXRoLmFicyhkaXN0KSkge1xuICAgICAgICAvLyBkcmFnIHZzIGNsaWNrXG4gICAgICAgIGlmICghaXNUb3VjaEV2ZW50KGUpKSB7XG4gICAgICAgICAgLy8gcHJldmVudCBcImNsaWNrXCJcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGUpO1xuICAgICAgICAgIGFkZEV2ZW50cyh0YXJnZXQsIHsnY2xpY2snOiBmdW5jdGlvbiBwcmV2ZW50Q2xpY2sgKGUpIHtcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0QmVoYXZpb3IoZSk7XG4gICAgICAgICAgICByZW1vdmVFdmVudHModGFyZ2V0LCB7J2NsaWNrJzogcHJldmVudENsaWNrfSk7XG4gICAgICAgICAgfX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhcm91c2VsKSB7XG4gICAgICAgICAgcmFmSW5kZXggPSByYWYoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiAhYXV0b1dpZHRoKSB7XG4gICAgICAgICAgICAgIHZhciBpbmRleE1vdmVkID0gLSBkaXN0ICogaXRlbXMgLyAodmlld3BvcnQgKyBndXR0ZXIpO1xuICAgICAgICAgICAgICBpbmRleE1vdmVkID0gZGlzdCA+IDAgPyBNYXRoLmZsb29yKGluZGV4TW92ZWQpIDogTWF0aC5jZWlsKGluZGV4TW92ZWQpO1xuICAgICAgICAgICAgICBpbmRleCArPSBpbmRleE1vdmVkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIG1vdmVkID0gLSAodHJhbnNsYXRlSW5pdCArIGRpc3QpO1xuICAgICAgICAgICAgICBpZiAobW92ZWQgPD0gMCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaW5kZXhNaW47XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobW92ZWQgPj0gc2xpZGVQb3NpdGlvbnNbc2xpZGVDb3VudE5ldyAtIDFdKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpbmRleE1heDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBzbGlkZUNvdW50TmV3ICYmIG1vdmVkID49IHNsaWRlUG9zaXRpb25zW2ldKSB7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICBpZiAobW92ZWQgPiBzbGlkZVBvc2l0aW9uc1tpXSAmJiBkaXN0IDwgMCkgeyBpbmRleCArPSAxOyB9XG4gICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlbmRlcihlLCBkaXN0KTtcbiAgICAgICAgICAgIGV2ZW50cy5lbWl0KGlzVG91Y2hFdmVudChlKSA/ICd0b3VjaEVuZCcgOiAnZHJhZ0VuZCcsIGluZm8oZSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uRXhwZWN0ZWQpIHtcbiAgICAgICAgICAgIG9uQ29udHJvbHNDbGljayhlLCBkaXN0ID4gMCA/IC0xIDogMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVzZXRcbiAgICBpZiAob3B0aW9ucy5wcmV2ZW50U2Nyb2xsT25Ub3VjaCA9PT0gJ2F1dG8nKSB7IHByZXZlbnRTY3JvbGwgPSBmYWxzZTsgfVxuICAgIGlmIChzd2lwZUFuZ2xlKSB7IG1vdmVEaXJlY3Rpb25FeHBlY3RlZCA9ICc/JzsgfVxuICAgIGlmIChhdXRvcGxheSAmJiAhYW5pbWF0aW5nKSB7IHNldEF1dG9wbGF5VGltZXIoKTsgfVxuICB9XG5cbiAgLy8gPT09IFJFU0laRSBGVU5DVElPTlMgPT09IC8vXG4gIC8vIChzbGlkZVBvc2l0aW9ucywgaW5kZXgsIGl0ZW1zKSA9PiB2ZXJ0aWNhbF9jb25lbnRXcmFwcGVyLmhlaWdodFxuICBmdW5jdGlvbiB1cGRhdGVDb250ZW50V3JhcHBlckhlaWdodCAoKSB7XG4gICAgdmFyIHdwID0gbWlkZGxlV3JhcHBlciA/IG1pZGRsZVdyYXBwZXIgOiBpbm5lcldyYXBwZXI7XG4gICAgd3Auc3R5bGUuaGVpZ2h0ID0gc2xpZGVQb3NpdGlvbnNbaW5kZXggKyBpdGVtc10gLSBzbGlkZVBvc2l0aW9uc1tpbmRleF0gKyAncHgnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFnZXMgKCkge1xuICAgIHZhciByb3VnaCA9IGZpeGVkV2lkdGggPyAoZml4ZWRXaWR0aCArIGd1dHRlcikgKiBzbGlkZUNvdW50IC8gdmlld3BvcnQgOiBzbGlkZUNvdW50IC8gaXRlbXM7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGguY2VpbChyb3VnaCksIHNsaWRlQ291bnQpO1xuICB9XG5cbiAgLypcbiAgICogMS4gdXBkYXRlIHZpc2libGUgbmF2IGl0ZW1zIGxpc3RcbiAgICogMi4gYWRkIFwiaGlkZGVuXCIgYXR0cmlidXRlcyB0byBwcmV2aW91cyB2aXNpYmxlIG5hdiBpdGVtc1xuICAgKiAzLiByZW1vdmUgXCJoaWRkZW5cIiBhdHRydWJ1dGVzIHRvIG5ldyB2aXNpYmxlIG5hdiBpdGVtc1xuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlTmF2VmlzaWJpbGl0eSAoKSB7XG4gICAgaWYgKCFuYXYgfHwgbmF2QXNUaHVtYm5haWxzKSB7IHJldHVybjsgfVxuXG4gICAgaWYgKHBhZ2VzICE9PSBwYWdlc0NhY2hlZCkge1xuICAgICAgdmFyIG1pbiA9IHBhZ2VzQ2FjaGVkLFxuICAgICAgICAgIG1heCA9IHBhZ2VzLFxuICAgICAgICAgIGZuID0gc2hvd0VsZW1lbnQ7XG5cbiAgICAgIGlmIChwYWdlc0NhY2hlZCA+IHBhZ2VzKSB7XG4gICAgICAgIG1pbiA9IHBhZ2VzO1xuICAgICAgICBtYXggPSBwYWdlc0NhY2hlZDtcbiAgICAgICAgZm4gPSBoaWRlRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKG1pbiA8IG1heCkge1xuICAgICAgICBmbihuYXZJdGVtc1ttaW5dKTtcbiAgICAgICAgbWluKys7XG4gICAgICB9XG5cbiAgICAgIC8vIGNhY2hlIHBhZ2VzXG4gICAgICBwYWdlc0NhY2hlZCA9IHBhZ2VzO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluZm8gKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBzbGlkZUl0ZW1zOiBzbGlkZUl0ZW1zLFxuICAgICAgbmF2Q29udGFpbmVyOiBuYXZDb250YWluZXIsXG4gICAgICBuYXZJdGVtczogbmF2SXRlbXMsXG4gICAgICBjb250cm9sc0NvbnRhaW5lcjogY29udHJvbHNDb250YWluZXIsXG4gICAgICBoYXNDb250cm9sczogaGFzQ29udHJvbHMsXG4gICAgICBwcmV2QnV0dG9uOiBwcmV2QnV0dG9uLFxuICAgICAgbmV4dEJ1dHRvbjogbmV4dEJ1dHRvbixcbiAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgIHNsaWRlQnk6IHNsaWRlQnksXG4gICAgICBjbG9uZUNvdW50OiBjbG9uZUNvdW50LFxuICAgICAgc2xpZGVDb3VudDogc2xpZGVDb3VudCxcbiAgICAgIHNsaWRlQ291bnROZXc6IHNsaWRlQ291bnROZXcsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBpbmRleENhY2hlZDogaW5kZXhDYWNoZWQsXG4gICAgICBkaXNwbGF5SW5kZXg6IGdldEN1cnJlbnRTbGlkZSgpLFxuICAgICAgbmF2Q3VycmVudEluZGV4OiBuYXZDdXJyZW50SW5kZXgsXG4gICAgICBuYXZDdXJyZW50SW5kZXhDYWNoZWQ6IG5hdkN1cnJlbnRJbmRleENhY2hlZCxcbiAgICAgIHBhZ2VzOiBwYWdlcyxcbiAgICAgIHBhZ2VzQ2FjaGVkOiBwYWdlc0NhY2hlZCxcbiAgICAgIHNoZWV0OiBzaGVldCxcbiAgICAgIGlzT246IGlzT24sXG4gICAgICBldmVudDogZSB8fCB7fSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnMi45LjMnLFxuICAgIGdldEluZm86IGluZm8sXG4gICAgZXZlbnRzOiBldmVudHMsXG4gICAgZ29UbzogZ29UbyxcbiAgICBwbGF5OiBwbGF5LFxuICAgIHBhdXNlOiBwYXVzZSxcbiAgICBpc09uOiBpc09uLFxuICAgIHVwZGF0ZVNsaWRlckhlaWdodDogdXBkYXRlSW5uZXJXcmFwcGVySGVpZ2h0LFxuICAgIHJlZnJlc2g6IGluaXRTbGlkZXJUcmFuc2Zvcm0sXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICByZWJ1aWxkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0bnMoZXh0ZW5kKG9wdGlvbnMsIG9wdGlvbnNFbGVtZW50cykpO1xuICAgIH1cbiAgfTtcbn07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkxhenlMb2FkID0gZmFjdG9yeSgpKTtcbn0odGhpcywgZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cblx0Y29uc3QgcnVubmluZ09uQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG5cdGNvbnN0IGlzQm90ID1cclxuXHRcdChydW5uaW5nT25Ccm93c2VyICYmICEoXCJvbnNjcm9sbFwiIGluIHdpbmRvdykpIHx8XHJcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG5cdFx0XHQvKGdsZXxpbmd8cm8pYm90fGNyYXdsfHNwaWRlci9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpO1xyXG5cclxuXHRjb25zdCBzdXBwb3J0c0ludGVyc2VjdGlvbk9ic2VydmVyID1cclxuXHRcdHJ1bm5pbmdPbkJyb3dzZXIgJiYgXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdztcclxuXHJcblx0Y29uc3Qgc3VwcG9ydHNDbGFzc0xpc3QgPVxyXG5cdFx0cnVubmluZ09uQnJvd3NlciAmJiBcImNsYXNzTGlzdFwiIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5cdGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcclxuXHRcdGVsZW1lbnRzX3NlbGVjdG9yOiBcImltZ1wiLFxyXG5cdFx0Y29udGFpbmVyOiBpc0JvdCB8fCBydW5uaW5nT25Ccm93c2VyID8gZG9jdW1lbnQgOiBudWxsLFxyXG5cdFx0dGhyZXNob2xkOiAzMDAsXHJcblx0XHR0aHJlc2hvbGRzOiBudWxsLFxyXG5cdFx0ZGF0YV9zcmM6IFwic3JjXCIsXHJcblx0XHRkYXRhX3NyY3NldDogXCJzcmNzZXRcIixcclxuXHRcdGRhdGFfc2l6ZXM6IFwic2l6ZXNcIixcclxuXHRcdGRhdGFfYmc6IFwiYmdcIixcclxuXHRcdGRhdGFfcG9zdGVyOiBcInBvc3RlclwiLFxyXG5cdFx0Y2xhc3NfbG9hZGluZzogXCJsb2FkaW5nXCIsXHJcblx0XHRjbGFzc19sb2FkZWQ6IFwibG9hZGVkXCIsXHJcblx0XHRjbGFzc19lcnJvcjogXCJlcnJvclwiLFxyXG5cdFx0bG9hZF9kZWxheTogMCxcclxuXHRcdGF1dG9fdW5vYnNlcnZlOiB0cnVlLFxyXG5cdFx0Y2FsbGJhY2tfZW50ZXI6IG51bGwsXHJcblx0XHRjYWxsYmFja19leGl0OiBudWxsLFxyXG5cdFx0Y2FsbGJhY2tfcmV2ZWFsOiBudWxsLFxyXG5cdFx0Y2FsbGJhY2tfbG9hZGVkOiBudWxsLFxyXG5cdFx0Y2FsbGJhY2tfZXJyb3I6IG51bGwsXHJcblx0XHRjYWxsYmFja19maW5pc2g6IG51bGwsXHJcblx0XHR1c2VfbmF0aXZlOiBmYWxzZVxyXG5cdH07XHJcblxyXG5cdHZhciBnZXRJbnN0YW5jZVNldHRpbmdzID0gY3VzdG9tU2V0dGluZ3MgPT4ge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTZXR0aW5ncywgY3VzdG9tU2V0dGluZ3MpO1xyXG5cdH07XG5cblx0LyogQ3JlYXRlcyBpbnN0YW5jZSBhbmQgbm90aWZpZXMgaXQgdGhyb3VnaCB0aGUgd2luZG93IGVsZW1lbnQgKi9cclxuXHRjb25zdCBjcmVhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uKGNsYXNzT2JqLCBvcHRpb25zKSB7XHJcblx0XHR2YXIgZXZlbnQ7XHJcblx0XHRsZXQgZXZlbnRTdHJpbmcgPSBcIkxhenlMb2FkOjpJbml0aWFsaXplZFwiO1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IGNsYXNzT2JqKG9wdGlvbnMpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Ly8gV29ya3MgaW4gbW9kZXJuIGJyb3dzZXJzXHJcblx0XHRcdGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50U3RyaW5nLCB7IGRldGFpbDogeyBpbnN0YW5jZSB9IH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdC8vIFdvcmtzIGluIEludGVybmV0IEV4cGxvcmVyIChhbGwgdmVyc2lvbnMpXHJcblx0XHRcdGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcclxuXHRcdFx0ZXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50U3RyaW5nLCBmYWxzZSwgZmFsc2UsIHsgaW5zdGFuY2UgfSk7XHJcblx0XHR9XHJcblx0XHR3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0fTtcclxuXHJcblx0LyogQXV0byBpbml0aWFsaXphdGlvbiBvZiBvbmUgb3IgbW9yZSBpbnN0YW5jZXMgb2YgbGF6eWxvYWQsIGRlcGVuZGluZyBvbiB0aGUgXHJcblx0ICAgIG9wdGlvbnMgcGFzc2VkIGluIChwbGFpbiBvYmplY3Qgb3IgYW4gYXJyYXkpICovXHJcblx0ZnVuY3Rpb24gYXV0b0luaXRpYWxpemUoY2xhc3NPYmosIG9wdGlvbnMpIHtcclxuXHRcdGlmICghb3B0aW9ucykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAoIW9wdGlvbnMubGVuZ3RoKSB7XHJcblx0XHRcdC8vIFBsYWluIG9iamVjdFxyXG5cdFx0XHRjcmVhdGVJbnN0YW5jZShjbGFzc09iaiwgb3B0aW9ucyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBBcnJheSBvZiBvYmplY3RzXHJcblx0XHRcdGZvciAobGV0IGkgPSAwLCBvcHRpb25zSXRlbTsgKG9wdGlvbnNJdGVtID0gb3B0aW9uc1tpXSk7IGkgKz0gMSkge1xyXG5cdFx0XHRcdGNyZWF0ZUluc3RhbmNlKGNsYXNzT2JqLCBvcHRpb25zSXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XG5cblx0Y29uc3QgZGF0YVByZWZpeCA9IFwiZGF0YS1cIjtcclxuXHRjb25zdCBwcm9jZXNzZWREYXRhTmFtZSA9IFwid2FzLXByb2Nlc3NlZFwiO1xyXG5cdGNvbnN0IHRpbWVvdXREYXRhTmFtZSA9IFwibGwtdGltZW91dFwiO1xyXG5cdGNvbnN0IHRydWVTdHJpbmcgPSBcInRydWVcIjtcclxuXHJcblx0Y29uc3QgZ2V0RGF0YSA9IChlbGVtZW50LCBhdHRyaWJ1dGUpID0+IHtcclxuXHRcdHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShkYXRhUHJlZml4ICsgYXR0cmlidXRlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXREYXRhID0gKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpID0+IHtcclxuXHRcdHZhciBhdHRyTmFtZSA9IGRhdGFQcmVmaXggKyBhdHRyaWJ1dGU7XHJcblx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcclxuXHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgdmFsdWUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlc2V0V2FzUHJvY2Vzc2VkRGF0YSA9IGVsZW1lbnQgPT5cclxuXHRcdHNldERhdGEoZWxlbWVudCwgcHJvY2Vzc2VkRGF0YU5hbWUsIG51bGwpO1xyXG5cclxuXHRjb25zdCBzZXRXYXNQcm9jZXNzZWREYXRhID0gZWxlbWVudCA9PlxyXG5cdFx0c2V0RGF0YShlbGVtZW50LCBwcm9jZXNzZWREYXRhTmFtZSwgdHJ1ZVN0cmluZyk7XHJcblxyXG5cdGNvbnN0IGdldFdhc1Byb2Nlc3NlZERhdGEgPSBlbGVtZW50ID0+XHJcblx0XHRnZXREYXRhKGVsZW1lbnQsIHByb2Nlc3NlZERhdGFOYW1lKSA9PT0gdHJ1ZVN0cmluZztcclxuXHJcblx0Y29uc3Qgc2V0VGltZW91dERhdGEgPSAoZWxlbWVudCwgdmFsdWUpID0+XHJcblx0XHRzZXREYXRhKGVsZW1lbnQsIHRpbWVvdXREYXRhTmFtZSwgdmFsdWUpO1xyXG5cclxuXHRjb25zdCBnZXRUaW1lb3V0RGF0YSA9IGVsZW1lbnQgPT4gZ2V0RGF0YShlbGVtZW50LCB0aW1lb3V0RGF0YU5hbWUpO1xuXG5cdGNvbnN0IHB1cmdlUHJvY2Vzc2VkRWxlbWVudHMgPSBlbGVtZW50cyA9PiB7XHJcblx0XHRyZXR1cm4gZWxlbWVudHMuZmlsdGVyKGVsZW1lbnQgPT4gIWdldFdhc1Byb2Nlc3NlZERhdGEoZWxlbWVudCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHB1cmdlT25lRWxlbWVudCA9IChlbGVtZW50cywgZWxlbWVudFRvUHVyZ2UpID0+IHtcclxuXHRcdHJldHVybiBlbGVtZW50cy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50ICE9PSBlbGVtZW50VG9QdXJnZSk7XHJcblx0fTtcblxuXHRjb25zdCBzYWZlQ2FsbGJhY2sgPSAoY2FsbGJhY2ssIGFyZzEsIGFyZzIsIGFyZzMpID0+IHtcclxuXHRcdGlmICghY2FsbGJhY2spIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChhcmczICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Y2FsbGJhY2soYXJnMSwgYXJnMiwgYXJnMyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmIChhcmcyICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Y2FsbGJhY2soYXJnMSwgYXJnMik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNhbGxiYWNrKGFyZzEpO1xyXG5cdH07XG5cblx0Y29uc3QgdXBkYXRlTG9hZGluZ0NvdW50ID0gKGluc3RhbmNlLCBwbHVzTWludXMpID0+IHtcclxuXHQgICAgaW5zdGFuY2UubG9hZGluZ0NvdW50ICs9IHBsdXNNaW51cztcclxuXHQgICAgaWYgKGluc3RhbmNlLl9lbGVtZW50cy5sZW5ndGggPT09IDAgJiYgaW5zdGFuY2UubG9hZGluZ0NvdW50ID09PSAwKSB7XHJcblx0ICAgICAgICBzYWZlQ2FsbGJhY2soaW5zdGFuY2UuX3NldHRpbmdzLmNhbGxiYWNrX2ZpbmlzaCwgaW5zdGFuY2UpO1xyXG5cdCAgICB9XHJcblx0fTtcblxuXHRjb25zdCBnZXRTb3VyY2VUYWdzID0gcGFyZW50VGFnID0+IHtcclxuXHRcdGxldCBzb3VyY2VUYWdzID0gW107XHJcblx0XHRmb3IgKGxldCBpID0gMCwgY2hpbGRUYWc7IChjaGlsZFRhZyA9IHBhcmVudFRhZy5jaGlsZHJlbltpXSk7IGkgKz0gMSkge1xyXG5cdFx0XHRpZiAoY2hpbGRUYWcudGFnTmFtZSA9PT0gXCJTT1VSQ0VcIikge1xyXG5cdFx0XHRcdHNvdXJjZVRhZ3MucHVzaChjaGlsZFRhZyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBzb3VyY2VUYWdzO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldEF0dHJpYnV0ZUlmVmFsdWUgPSAoZWxlbWVudCwgYXR0ck5hbWUsIHZhbHVlKSA9PiB7XHJcblx0XHRpZiAoIXZhbHVlKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0SW1hZ2VBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIHNldHRpbmdzKSA9PiB7XHJcblx0XHRzZXRBdHRyaWJ1dGVJZlZhbHVlKFxyXG5cdFx0XHRlbGVtZW50LFxyXG5cdFx0XHRcInNpemVzXCIsXHJcblx0XHRcdGdldERhdGEoZWxlbWVudCwgc2V0dGluZ3MuZGF0YV9zaXplcylcclxuXHRcdCk7XHJcblx0XHRzZXRBdHRyaWJ1dGVJZlZhbHVlKFxyXG5cdFx0XHRlbGVtZW50LFxyXG5cdFx0XHRcInNyY3NldFwiLFxyXG5cdFx0XHRnZXREYXRhKGVsZW1lbnQsIHNldHRpbmdzLmRhdGFfc3Jjc2V0KVxyXG5cdFx0KTtcclxuXHRcdHNldEF0dHJpYnV0ZUlmVmFsdWUoZWxlbWVudCwgXCJzcmNcIiwgZ2V0RGF0YShlbGVtZW50LCBzZXR0aW5ncy5kYXRhX3NyYykpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldFNvdXJjZXNJbWcgPSAoZWxlbWVudCwgc2V0dGluZ3MpID0+IHtcclxuXHRcdGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuXHJcblx0XHRpZiAocGFyZW50ICYmIHBhcmVudC50YWdOYW1lID09PSBcIlBJQ1RVUkVcIikge1xyXG5cdFx0XHRsZXQgc291cmNlVGFncyA9IGdldFNvdXJjZVRhZ3MocGFyZW50KTtcclxuXHRcdFx0c291cmNlVGFncy5mb3JFYWNoKHNvdXJjZVRhZyA9PiB7XHJcblx0XHRcdFx0c2V0SW1hZ2VBdHRyaWJ1dGVzKHNvdXJjZVRhZywgc2V0dGluZ3MpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRJbWFnZUF0dHJpYnV0ZXMoZWxlbWVudCwgc2V0dGluZ3MpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldFNvdXJjZXNJZnJhbWUgPSAoZWxlbWVudCwgc2V0dGluZ3MpID0+IHtcclxuXHRcdHNldEF0dHJpYnV0ZUlmVmFsdWUoZWxlbWVudCwgXCJzcmNcIiwgZ2V0RGF0YShlbGVtZW50LCBzZXR0aW5ncy5kYXRhX3NyYykpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldFNvdXJjZXNWaWRlbyA9IChlbGVtZW50LCBzZXR0aW5ncykgPT4ge1xyXG5cdFx0bGV0IHNvdXJjZVRhZ3MgPSBnZXRTb3VyY2VUYWdzKGVsZW1lbnQpO1xyXG5cdFx0c291cmNlVGFncy5mb3JFYWNoKHNvdXJjZVRhZyA9PiB7XHJcblx0XHRcdHNldEF0dHJpYnV0ZUlmVmFsdWUoXHJcblx0XHRcdFx0c291cmNlVGFnLFxyXG5cdFx0XHRcdFwic3JjXCIsXHJcblx0XHRcdFx0Z2V0RGF0YShzb3VyY2VUYWcsIHNldHRpbmdzLmRhdGFfc3JjKVxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0XHRzZXRBdHRyaWJ1dGVJZlZhbHVlKFxyXG5cdFx0XHRlbGVtZW50LFxyXG5cdFx0XHRcInBvc3RlclwiLFxyXG5cdFx0XHRnZXREYXRhKGVsZW1lbnQsIHNldHRpbmdzLmRhdGFfcG9zdGVyKVxyXG5cdFx0KTtcclxuXHRcdHNldEF0dHJpYnV0ZUlmVmFsdWUoZWxlbWVudCwgXCJzcmNcIiwgZ2V0RGF0YShlbGVtZW50LCBzZXR0aW5ncy5kYXRhX3NyYykpO1xyXG5cdFx0ZWxlbWVudC5sb2FkKCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0U291cmNlc0JnSW1hZ2UgPSAoZWxlbWVudCwgc2V0dGluZ3MpID0+IHtcclxuXHRcdGNvbnN0IHNyY0RhdGFWYWx1ZSA9IGdldERhdGEoZWxlbWVudCwgc2V0dGluZ3MuZGF0YV9zcmMpO1xyXG5cdFx0Y29uc3QgYmdEYXRhVmFsdWUgPSBnZXREYXRhKGVsZW1lbnQsIHNldHRpbmdzLmRhdGFfYmcpO1xyXG5cclxuXHRcdGlmIChzcmNEYXRhVmFsdWUpIHtcclxuXHRcdFx0ZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtzcmNEYXRhVmFsdWV9XCIpYDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYmdEYXRhVmFsdWUpIHtcclxuXHRcdFx0ZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBiZ0RhdGFWYWx1ZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXRTb3VyY2VzRnVuY3Rpb25zID0ge1xyXG5cdFx0SU1HOiBzZXRTb3VyY2VzSW1nLFxyXG5cdFx0SUZSQU1FOiBzZXRTb3VyY2VzSWZyYW1lLFxyXG5cdFx0VklERU86IHNldFNvdXJjZXNWaWRlb1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldFNvdXJjZXMgPSAoZWxlbWVudCwgaW5zdGFuY2UpID0+IHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gaW5zdGFuY2UuX3NldHRpbmdzO1xyXG5cdFx0Y29uc3QgdGFnTmFtZSA9IGVsZW1lbnQudGFnTmFtZTtcclxuXHRcdGNvbnN0IHNldFNvdXJjZXNGdW5jdGlvbiA9IHNldFNvdXJjZXNGdW5jdGlvbnNbdGFnTmFtZV07XHJcblx0XHRpZiAoc2V0U291cmNlc0Z1bmN0aW9uKSB7XHJcblx0XHRcdHNldFNvdXJjZXNGdW5jdGlvbihlbGVtZW50LCBzZXR0aW5ncyk7XHJcblx0XHRcdHVwZGF0ZUxvYWRpbmdDb3VudChpbnN0YW5jZSwgMSk7XHJcblx0XHRcdGluc3RhbmNlLl9lbGVtZW50cyA9IHB1cmdlT25lRWxlbWVudChpbnN0YW5jZS5fZWxlbWVudHMsIGVsZW1lbnQpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRzZXRTb3VyY2VzQmdJbWFnZShlbGVtZW50LCBzZXR0aW5ncyk7XHJcblx0fTtcblxuXHRjb25zdCBhZGRDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcclxuXHRcdGlmIChzdXBwb3J0c0NsYXNzTGlzdCkge1xyXG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0ZWxlbWVudC5jbGFzc05hbWUgKz0gKGVsZW1lbnQuY2xhc3NOYW1lID8gXCIgXCIgOiBcIlwiKSArIGNsYXNzTmFtZTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCByZW1vdmVDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcclxuXHRcdGlmIChzdXBwb3J0c0NsYXNzTGlzdCkge1xyXG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0ZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5cclxuXHRcdFx0cmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMrKVwiICsgY2xhc3NOYW1lICsgXCIoXFxcXHMrfCQpXCIpLCBcIiBcIikuXHJcblx0XHRcdHJlcGxhY2UoL15cXHMrLywgXCJcIikuXHJcblx0XHRcdHJlcGxhY2UoL1xccyskLywgXCJcIik7XHJcblx0fTtcblxuXHRjb25zdCBnZW5lcmljTG9hZEV2ZW50TmFtZSA9IFwibG9hZFwiO1xyXG5cdGNvbnN0IG1lZGlhTG9hZEV2ZW50TmFtZSA9IFwibG9hZGVkZGF0YVwiO1xyXG5cdGNvbnN0IGVycm9yRXZlbnROYW1lID0gXCJlcnJvclwiO1xyXG5cclxuXHRjb25zdCBhZGRFdmVudExpc3RlbmVyID0gKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikgPT4ge1xyXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IChlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpID0+IHtcclxuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGFkZEV2ZW50TGlzdGVuZXJzID0gKGVsZW1lbnQsIGxvYWRIYW5kbGVyLCBlcnJvckhhbmRsZXIpID0+IHtcclxuXHRcdGFkZEV2ZW50TGlzdGVuZXIoZWxlbWVudCwgZ2VuZXJpY0xvYWRFdmVudE5hbWUsIGxvYWRIYW5kbGVyKTtcclxuXHRcdGFkZEV2ZW50TGlzdGVuZXIoZWxlbWVudCwgbWVkaWFMb2FkRXZlbnROYW1lLCBsb2FkSGFuZGxlcik7XHJcblx0XHRhZGRFdmVudExpc3RlbmVyKGVsZW1lbnQsIGVycm9yRXZlbnROYW1lLCBlcnJvckhhbmRsZXIpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlbW92ZUV2ZW50TGlzdGVuZXJzID0gKGVsZW1lbnQsIGxvYWRIYW5kbGVyLCBlcnJvckhhbmRsZXIpID0+IHtcclxuXHRcdHJlbW92ZUV2ZW50TGlzdGVuZXIoZWxlbWVudCwgZ2VuZXJpY0xvYWRFdmVudE5hbWUsIGxvYWRIYW5kbGVyKTtcclxuXHRcdHJlbW92ZUV2ZW50TGlzdGVuZXIoZWxlbWVudCwgbWVkaWFMb2FkRXZlbnROYW1lLCBsb2FkSGFuZGxlcik7XHJcblx0XHRyZW1vdmVFdmVudExpc3RlbmVyKGVsZW1lbnQsIGVycm9yRXZlbnROYW1lLCBlcnJvckhhbmRsZXIpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50LCBzdWNjZXNzLCBpbnN0YW5jZSkge1xyXG5cdFx0dmFyIHNldHRpbmdzID0gaW5zdGFuY2UuX3NldHRpbmdzO1xyXG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gc3VjY2VzcyA/IHNldHRpbmdzLmNsYXNzX2xvYWRlZCA6IHNldHRpbmdzLmNsYXNzX2Vycm9yO1xyXG5cdFx0Y29uc3QgY2FsbGJhY2sgPSBzdWNjZXNzXHJcblx0XHRcdD8gc2V0dGluZ3MuY2FsbGJhY2tfbG9hZGVkXHJcblx0XHRcdDogc2V0dGluZ3MuY2FsbGJhY2tfZXJyb3I7XHJcblx0XHRjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuXHRcdHJlbW92ZUNsYXNzKGVsZW1lbnQsIHNldHRpbmdzLmNsYXNzX2xvYWRpbmcpO1xyXG5cdFx0YWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcclxuXHRcdHNhZmVDYWxsYmFjayhjYWxsYmFjaywgZWxlbWVudCwgaW5zdGFuY2UpO1xyXG5cclxuXHRcdHVwZGF0ZUxvYWRpbmdDb3VudChpbnN0YW5jZSwgLTEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGFkZE9uZVNob3RFdmVudExpc3RlbmVycyA9IChlbGVtZW50LCBpbnN0YW5jZSkgPT4ge1xyXG5cdFx0Y29uc3QgbG9hZEhhbmRsZXIgPSBldmVudCA9PiB7XHJcblx0XHRcdGV2ZW50SGFuZGxlcihldmVudCwgdHJ1ZSwgaW5zdGFuY2UpO1xyXG5cdFx0XHRyZW1vdmVFdmVudExpc3RlbmVycyhlbGVtZW50LCBsb2FkSGFuZGxlciwgZXJyb3JIYW5kbGVyKTtcclxuXHRcdH07XHJcblx0XHRjb25zdCBlcnJvckhhbmRsZXIgPSBldmVudCA9PiB7XHJcblx0XHRcdGV2ZW50SGFuZGxlcihldmVudCwgZmFsc2UsIGluc3RhbmNlKTtcclxuXHRcdFx0cmVtb3ZlRXZlbnRMaXN0ZW5lcnMoZWxlbWVudCwgbG9hZEhhbmRsZXIsIGVycm9ySGFuZGxlcik7XHJcblx0XHR9O1xyXG5cdFx0YWRkRXZlbnRMaXN0ZW5lcnMoZWxlbWVudCwgbG9hZEhhbmRsZXIsIGVycm9ySGFuZGxlcik7XHJcblx0fTtcblxuXHRjb25zdCBtYW5hZ2VkVGFncyA9IFtcIklNR1wiLCBcIklGUkFNRVwiLCBcIlZJREVPXCJdO1xyXG5cclxuXHRjb25zdCBvbkVudGVyID0gKGVsZW1lbnQsIGVudHJ5LCBpbnN0YW5jZSkgPT4ge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSBpbnN0YW5jZS5fc2V0dGluZ3M7XHJcblx0XHRzYWZlQ2FsbGJhY2soc2V0dGluZ3MuY2FsbGJhY2tfZW50ZXIsIGVsZW1lbnQsIGVudHJ5LCBpbnN0YW5jZSk7XHJcblx0XHRpZiAoIXNldHRpbmdzLmxvYWRfZGVsYXkpIHtcclxuXHRcdFx0cmV2ZWFsQW5kVW5vYnNlcnZlKGVsZW1lbnQsIGluc3RhbmNlKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0ZGVsYXlMb2FkKGVsZW1lbnQsIGluc3RhbmNlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCByZXZlYWxBbmRVbm9ic2VydmUgPSAoZWxlbWVudCwgaW5zdGFuY2UpID0+IHtcclxuXHRcdHZhciBvYnNlcnZlciA9IGluc3RhbmNlLl9vYnNlcnZlcjtcclxuXHRcdHJldmVhbEVsZW1lbnQoZWxlbWVudCwgaW5zdGFuY2UpO1xyXG5cdFx0aWYgKG9ic2VydmVyICYmIGluc3RhbmNlLl9zZXR0aW5ncy5hdXRvX3Vub2JzZXJ2ZSkge1xyXG5cdFx0XHRvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25FeGl0ID0gKGVsZW1lbnQsIGVudHJ5LCBpbnN0YW5jZSkgPT4ge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSBpbnN0YW5jZS5fc2V0dGluZ3M7XHJcblx0XHRzYWZlQ2FsbGJhY2soc2V0dGluZ3MuY2FsbGJhY2tfZXhpdCwgZWxlbWVudCwgZW50cnksIGluc3RhbmNlKTtcclxuXHRcdGlmICghc2V0dGluZ3MubG9hZF9kZWxheSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjYW5jZWxEZWxheUxvYWQoZWxlbWVudCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2FuY2VsRGVsYXlMb2FkID0gZWxlbWVudCA9PiB7XHJcblx0XHR2YXIgdGltZW91dElkID0gZ2V0VGltZW91dERhdGEoZWxlbWVudCk7XHJcblx0XHRpZiAoIXRpbWVvdXRJZCkge1xyXG5cdFx0XHRyZXR1cm47IC8vIGRvIG5vdGhpbmcgaWYgdGltZW91dCBkb2Vzbid0IGV4aXN0XHJcblx0XHR9XHJcblx0XHRjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuXHRcdHNldFRpbWVvdXREYXRhKGVsZW1lbnQsIG51bGwpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGF5TG9hZCA9IChlbGVtZW50LCBpbnN0YW5jZSkgPT4ge1xyXG5cdFx0dmFyIGxvYWREZWxheSA9IGluc3RhbmNlLl9zZXR0aW5ncy5sb2FkX2RlbGF5O1xyXG5cdFx0dmFyIHRpbWVvdXRJZCA9IGdldFRpbWVvdXREYXRhKGVsZW1lbnQpO1xyXG5cdFx0aWYgKHRpbWVvdXRJZCkge1xyXG5cdFx0XHRyZXR1cm47IC8vIGRvIG5vdGhpbmcgaWYgdGltZW91dCBhbHJlYWR5IHNldFxyXG5cdFx0fVxyXG5cdFx0dGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV2ZWFsQW5kVW5vYnNlcnZlKGVsZW1lbnQsIGluc3RhbmNlKTtcclxuXHRcdFx0Y2FuY2VsRGVsYXlMb2FkKGVsZW1lbnQpO1xyXG5cdFx0fSwgbG9hZERlbGF5KTtcclxuXHRcdHNldFRpbWVvdXREYXRhKGVsZW1lbnQsIHRpbWVvdXRJZCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmV2ZWFsRWxlbWVudCA9IChlbGVtZW50LCBpbnN0YW5jZSwgZm9yY2UpID0+IHtcclxuXHRcdHZhciBzZXR0aW5ncyA9IGluc3RhbmNlLl9zZXR0aW5ncztcclxuXHRcdGlmICghZm9yY2UgJiYgZ2V0V2FzUHJvY2Vzc2VkRGF0YShlbGVtZW50KSkge1xyXG5cdFx0XHRyZXR1cm47IC8vIGVsZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQgYW5kIGZvcmNlIHdhc24ndCB0cnVlXHJcblx0XHR9XHJcblx0XHRpZiAobWFuYWdlZFRhZ3MuaW5kZXhPZihlbGVtZW50LnRhZ05hbWUpID4gLTEpIHtcclxuXHRcdFx0YWRkT25lU2hvdEV2ZW50TGlzdGVuZXJzKGVsZW1lbnQsIGluc3RhbmNlKTtcclxuXHRcdFx0YWRkQ2xhc3MoZWxlbWVudCwgc2V0dGluZ3MuY2xhc3NfbG9hZGluZyk7XHJcblx0XHR9XHJcblx0XHRzZXRTb3VyY2VzKGVsZW1lbnQsIGluc3RhbmNlKTtcclxuXHRcdHNldFdhc1Byb2Nlc3NlZERhdGEoZWxlbWVudCk7XHJcblx0XHRzYWZlQ2FsbGJhY2soc2V0dGluZ3MuY2FsbGJhY2tfcmV2ZWFsLCBlbGVtZW50LCBpbnN0YW5jZSk7XHJcblx0XHRzYWZlQ2FsbGJhY2soc2V0dGluZ3MuY2FsbGJhY2tfc2V0LCBlbGVtZW50LCBpbnN0YW5jZSk7XHJcblx0fTtcblxuXHRjb25zdCBpc0ludGVyc2VjdGluZyA9IGVudHJ5ID0+XHJcblx0XHRlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XHJcblxyXG5cdGNvbnN0IGdldE9ic2VydmVyU2V0dGluZ3MgPSBzZXR0aW5ncyA9PiAoe1xyXG5cdFx0cm9vdDogc2V0dGluZ3MuY29udGFpbmVyID09PSBkb2N1bWVudCA/IG51bGwgOiBzZXR0aW5ncy5jb250YWluZXIsXHJcblx0XHRyb290TWFyZ2luOiBzZXR0aW5ncy50aHJlc2hvbGRzIHx8IHNldHRpbmdzLnRocmVzaG9sZCArIFwicHhcIlxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBzZXRPYnNlcnZlciA9IGluc3RhbmNlID0+IHtcclxuXHRcdGlmICghc3VwcG9ydHNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpbnN0YW5jZS5fb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcblx0XHRcdGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PlxyXG5cdFx0XHRcdGlzSW50ZXJzZWN0aW5nKGVudHJ5KVxyXG5cdFx0XHRcdFx0PyBvbkVudGVyKGVudHJ5LnRhcmdldCwgZW50cnksIGluc3RhbmNlKVxyXG5cdFx0XHRcdFx0OiBvbkV4aXQoZW50cnkudGFyZ2V0LCBlbnRyeSwgaW5zdGFuY2UpXHJcblx0XHRcdCk7XHJcblx0XHR9LCBnZXRPYnNlcnZlclNldHRpbmdzKGluc3RhbmNlLl9zZXR0aW5ncykpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcblxuXHRjb25zdCBuYXRpdmVMYXp5VGFncyA9IFtcIklNR1wiLCBcIklGUkFNRVwiXTtcclxuXHJcblx0Y29uc3Qgc2hvdWxkVXNlTmF0aXZlID0gc2V0dGluZ3MgPT5cclxuXHRcdHNldHRpbmdzLnVzZV9uYXRpdmUgJiYgXCJsb2FkaW5nXCIgaW4gSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGU7XHJcblxyXG5cdGNvbnN0IGxvYWRBbGxOYXRpdmUgPSBpbnN0YW5jZSA9PiB7XHJcblx0XHRpbnN0YW5jZS5fZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHRcdFx0aWYgKG5hdGl2ZUxhenlUYWdzLmluZGV4T2YoZWxlbWVudC50YWdOYW1lKSA9PT0gLTEpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJsb2FkaW5nXCIsIFwibGF6eVwiKTtcclxuXHRcdFx0cmV2ZWFsRWxlbWVudChlbGVtZW50LCBpbnN0YW5jZSk7XHJcblx0XHR9KTtcclxuXHR9O1xuXG5cdGNvbnN0IG5vZGVTZXRUb0FycmF5ID0gbm9kZVNldCA9PiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlU2V0KTtcblxuXHRjb25zdCBxdWVyeUVsZW1lbnRzID0gc2V0dGluZ3MgPT5cclxuXHRcdHNldHRpbmdzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLmVsZW1lbnRzX3NlbGVjdG9yKTtcclxuXHJcblx0Y29uc3QgZ2V0RWxlbWVudHMgPSAoZWxlbWVudHMsIHNldHRpbmdzKSA9PlxyXG5cdFx0cHVyZ2VQcm9jZXNzZWRFbGVtZW50cyhub2RlU2V0VG9BcnJheShlbGVtZW50cyB8fCBxdWVyeUVsZW1lbnRzKHNldHRpbmdzKSkpO1xuXG5cdGNvbnN0IHJldHJ5TGF6eUxvYWQgPSBpbnN0YW5jZSA9PiB7XHJcblx0XHR2YXIgc2V0dGluZ3MgPSBpbnN0YW5jZS5fc2V0dGluZ3M7XHJcblx0XHR2YXIgZXJyb3JFbGVtZW50cyA9IHNldHRpbmdzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHRcIi5cIiArIHNldHRpbmdzLmNsYXNzX2Vycm9yXHJcblx0XHQpO1xyXG5cdFx0ZXJyb3JFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdFx0XHRyZW1vdmVDbGFzcyhlbGVtZW50LCBzZXR0aW5ncy5jbGFzc19lcnJvcik7XHJcblx0XHRcdHJlc2V0V2FzUHJvY2Vzc2VkRGF0YShlbGVtZW50KTtcclxuXHRcdH0pO1xyXG5cdFx0aW5zdGFuY2UudXBkYXRlKCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0T25saW5lQ2hlY2sgPSBpbnN0YW5jZSA9PiB7XHJcblx0XHRpZiAoIXJ1bm5pbmdPbkJyb3dzZXIpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIiwgZXZlbnQgPT4ge1xyXG5cdFx0XHRyZXRyeUxhenlMb2FkKGluc3RhbmNlKTtcclxuXHRcdH0pO1xyXG5cdH07XG5cblx0Y29uc3QgTGF6eUxvYWQgPSBmdW5jdGlvbihjdXN0b21TZXR0aW5ncywgZWxlbWVudHMpIHtcclxuXHQgICAgdGhpcy5fc2V0dGluZ3MgPSBnZXRJbnN0YW5jZVNldHRpbmdzKGN1c3RvbVNldHRpbmdzKTtcclxuXHQgICAgdGhpcy5sb2FkaW5nQ291bnQgPSAwO1xyXG5cdCAgICBzZXRPYnNlcnZlcih0aGlzKTtcclxuXHQgICAgdGhpcy51cGRhdGUoZWxlbWVudHMpO1xyXG5cdCAgICBzZXRPbmxpbmVDaGVjayh0aGlzKTtcclxuXHR9O1xyXG5cclxuXHRMYXp5TG9hZC5wcm90b3R5cGUgPSB7XHJcblx0ICAgIHVwZGF0ZTogZnVuY3Rpb24oZWxlbWVudHMpIHtcclxuXHQgICAgICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuX3NldHRpbmdzO1xyXG5cdCAgICAgICAgdGhpcy5fZWxlbWVudHMgPSBnZXRFbGVtZW50cyhlbGVtZW50cywgc2V0dGluZ3MpO1xyXG5cdCAgICAgICAgaWYgKGlzQm90IHx8ICF0aGlzLl9vYnNlcnZlcikge1xyXG5cdCAgICAgICAgICAgIHRoaXMubG9hZEFsbCgpO1xyXG5cdCAgICAgICAgICAgIHJldHVybjtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICAgIGlmIChzaG91bGRVc2VOYXRpdmUoc2V0dGluZ3MpKSB7XHJcblx0ICAgICAgICAgICAgbG9hZEFsbE5hdGl2ZSh0aGlzKTtcclxuXHQgICAgICAgICAgICB0aGlzLl9lbGVtZW50cyA9IGdldEVsZW1lbnRzKGVsZW1lbnRzLCBzZXR0aW5ncyk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICB0aGlzLl9lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdCAgICAgICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XHJcblx0ICAgICAgICB9KTtcclxuXHQgICAgfSxcclxuXHJcblx0ICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG5cdCAgICAgICAgaWYgKHRoaXMuX29ic2VydmVyKSB7XHJcblx0ICAgICAgICAgICAgdGhpcy5fZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xyXG5cdCAgICAgICAgICAgIH0pO1xyXG5cdCAgICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gbnVsbDtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICAgIHRoaXMuX2VsZW1lbnRzID0gbnVsbDtcclxuXHQgICAgICAgIHRoaXMuX3NldHRpbmdzID0gbnVsbDtcclxuXHQgICAgfSxcclxuXHJcblx0ICAgIGxvYWQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGZvcmNlKSB7XHJcblx0ICAgICAgICByZXZlYWxFbGVtZW50KGVsZW1lbnQsIHRoaXMsIGZvcmNlKTtcclxuXHQgICAgfSxcclxuXHJcblx0ICAgIGxvYWRBbGw6IGZ1bmN0aW9uKCkge1xyXG5cdCAgICAgICAgdGhpcy5fZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHQgICAgICAgICAgICByZXZlYWxBbmRVbm9ic2VydmUoZWxlbWVudCwgdGhpcyk7XHJcblx0ICAgICAgICB9KTtcclxuXHQgICAgfVxyXG5cdH07XHJcblxyXG5cdC8qIEF1dG9tYXRpYyBpbnN0YW5jZXMgY3JlYXRpb24gaWYgcmVxdWlyZWQgKHVzZWZ1bCBmb3IgYXN5bmMgc2NyaXB0IGxvYWRpbmcpICovXHJcblx0aWYgKHJ1bm5pbmdPbkJyb3dzZXIpIHtcclxuXHQgICAgYXV0b0luaXRpYWxpemUoTGF6eUxvYWQsIHdpbmRvdy5sYXp5TG9hZE9wdGlvbnMpO1xyXG5cdH1cblxuXHRyZXR1cm4gTGF6eUxvYWQ7XG5cbn0pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=