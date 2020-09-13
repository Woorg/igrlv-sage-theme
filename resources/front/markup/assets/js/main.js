import svg4everybody from 'svg4everybody';
import Tabby from 'tabbyjs';
import Sticky from 'sticky-js';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';
import css from 'highlight.js/lib/languages/css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('javascript', php);
hljs.registerLanguage('javascript', css);

import nav from '../../blocks/nav/nav';
import {noise} from '../../blocks/hero/hero';
import {heroSlider} from '../../blocks/hero/hero';
import LazyLoad from 'vanilla-lazyload';


(function ($) {

    svg4everybody();

    let styles = [
        'padding: 2px 9px',
        'background: #2948ff',
        'color: #fff',
        'line-height: 1.56',
        'font-size: 16px',
    ].join(';');

    console.log('%c Made with love ❤️ by Igor Gorlov https://igrl.ru', styles);


    /*
    Lazyload images
    */


    let lazyLoadInstance = new LazyLoad({
        elements_selector: '.lazy',
        // load_delay: 500,
        use_native: true
    });


    if (lazyLoadInstance) {
        lazyLoadInstance.update();
    }



    $(function () {

        // Nav

        nav();

        // Slider

        heroSlider();

        // Faq

        const $faqItem = $('.faq__item');

        $faqItem.on('click', function () {
            $(this).toggleClass('faq__item_active');
        });

        // Hijs

        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });


        // Table of content

        const $tocTop = $('.table-of-contents__top');
        const $toc = $('.table-of-contents');

        $tocTop.on( 'click', () => {
            $toc.toggleClass('table-of-contents_closed');
        });

        /* Tabs */

        const $worksTabs = document.querySelector('.works__tabs .tabs__nav');

        if ( $worksTabs ) {
            new Tabby('[data-tabs]');
        }

        // Sticky side
        const $mainRow = document.querySelector('.main .page__row');
        const $side = document.querySelector('.side');

        if ($side) {
            $side.setAttribute('style', 'min-height:' + $mainRow.offsetHeight + 'px;');
        }
        const sideNavSticky = new Sticky('.side__block-w');


        // Noise

        noise();



    });




})(jQuery);
