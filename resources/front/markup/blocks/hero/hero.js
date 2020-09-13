import {tns} from 'tiny-slider/src/tiny-slider';



export const noise = () => {


    let canvas, ctx;

    let wWidth, wHeight;

    let noiseData = [];
    let frame = 0;

    let loopTimeout;


    // Create Noise
    const createNoise = () => {
        const idata = ctx.createImageData(wWidth, wHeight);
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
            if (Math.random() < 0.1) {
                buffer32[i] = 0xffffffff;
            }
        }

        noiseData.push(idata);
    };


    // Play Noise
    const paintNoise = () => {
        if (frame === 9) {
            frame = 0;
        } else {
            frame++;
        }

        ctx.putImageData(noiseData[frame], 0, 0);
    };


    // Loop
    const loop = () => {
        paintNoise(frame);

        loopTimeout = window.setTimeout(() => {
            window.requestAnimationFrame(loop);
        }, (1000 / 25));
    };


    // Setup
    const setup = () => {
        wWidth = window.innerWidth;
        wHeight = window.innerHeight;

        canvas.width = wWidth;
        canvas.height = wHeight;

        for (let i = 0; i < 10; i++) {
            createNoise();
        }

        loop();
    };


    // Reset
    let resizeThrottle;
    const reset = () => {
        window.addEventListener('resize', () => {
            window.clearTimeout(resizeThrottle);

            resizeThrottle = window.setTimeout(() => {
                window.clearTimeout(loopTimeout);
                setup();
            }, 200);
        }, false);
    };


    canvas = document.querySelector('canvas');

    if ( typeof(canvas) != 'undefined' && canvas != null ) {

    // Init
    const init = (() => {
        ctx = canvas.getContext('2d');

        setup();
    })();


    }
};

// noise();



// Slider

export function heroSlider () {


(function ($) {

    let $heroSlider = $('.hero__slider');

    if ( $heroSlider.length > 0 ) {

        $heroSlider = tns({
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
            mouseDrag: true,
        });

    }


})(jQuery);

}
