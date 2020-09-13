<?php

namespace App;

use Roots\Sage\Container;
use Roots\Sage\Assets\JsonManifest;
use Roots\Sage\Template\Blade;
use Roots\Sage\Template\BladeProvider;

/**
 * Theme assets
 */
add_action('wp_enqueue_scripts', function () {
    // styles
    wp_enqueue_style( 'tabs', get_template_directory_uri() . '/front/static/dev/assets/css/separate-css/tabby-ui.min.css', false, null);

    wp_enqueue_style( 'likely', get_template_directory_uri() . '/front/static/dev/assets/css/separate-css/likely.css', false, null);

    wp_enqueue_style('highlight', get_template_directory_uri() . '/front/static/dev/assets/css/separate-css/github.css', false, null);


    if ( is_page(545) ) {
        wp_enqueue_style( 'tiny-slider', get_template_directory_uri() . '/front/static/dev/assets/css/separate-css/tiny-slider.css', false, null);
    }

    wp_enqueue_style('main', get_template_directory_uri() . '/front/static/dev/assets/css/main.css', false, null);


    // scripts

    wp_enqueue_script('jquery');
    wp_script_add_data( 'jquery', 'defer', true );
    wp_script_add_data('jquery', 'async', true);



     if ( is_page(441) ) {
    // maps
      wp_enqueue_script('maps', '//maps.googleapis.com/maps/api/js?key=AIzaSyDDO60TDSumlziHzbybxGGbAEegP7zLX0Y&amp;callback=initMap', array('jquery'), '', true);
      wp_script_add_data( 'maps', 'defer', true );
      wp_script_add_data( 'maps', 'async', true );

    }

    wp_enqueue_script('main', get_template_directory_uri() . '/front/static/dev/assets/js/main.js', ['jquery'], null, true);
    wp_script_add_data( 'main', 'defer', true );


    if (is_single() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}, 100);

/**
 * Theme setup
 */
add_action('after_setup_theme', function () {
    /**
     * Enable features from Soil when plugin is activated
     * @link https://roots.io/plugins/soil/
     */
    add_theme_support('soil-clean-up');
    add_theme_support('soil-jquery-cdn');
    // add_theme_support('soil-nav-walker');
    add_theme_support('soil-nice-search');
    add_theme_support('soil-relative-urls');

    /**
     * Enable plugins to manage the document title
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#title-tag
     */
    add_theme_support('title-tag');

    /**
     * Register navigation menus
     * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
     */
    register_nav_menus([
        'menu-1' => esc_html__('Primary', 'igrlv'),
        'menu-2' => esc_html__('Portfolio', 'igrlv'),
        'menu-3' => esc_html__('Blog', 'igrlv'),
        'menu-4' => esc_html__('Portfolio type of site', 'igrlv'),
        'menu-5' => esc_html__('Footer', 'igrlv'),
    ]);

    /**
     * Enable post thumbnails
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');

    /**
     * Enable HTML5 markup support
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#html5
     */
    add_theme_support('html5', [
        'caption',
        'comment-form',
        'comment-list',
        'gallery',
        'search-form',
        'script',
        'style'
    ]);


    // add_theme_support('custom-logo');


    /**
     * Enable selective refresh for widgets in customizer
     * @link https://developer.wordpress.org/themes/advanced-topics/customizer-api/#theme-support-in-sidebars
     */
    add_theme_support('customize-selective-refresh-widgets');

    /**
     * Use main stylesheet for visual editor
     * @see resources/assets/styles/layouts/_tinymce.scss
     */
    add_editor_style(asset_path('styles/main.css'));
}, 20);


// Favicon

add_action( 'wp_head', 'wp_site_icon', 99 );



/**
 * Register sidebars
 */
add_action('widgets_init', function () {
    $config = [
        'before_widget' => '<section class="widget %1$s %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3>',
        'after_title'   => '</h3>'
    ];
    register_sidebar([
        'name'          => __('Primary', 'sage'),
        'id'            => 'sidebar-primary'
    ] + $config);
    register_sidebar([
        'name'          => __('Footer', 'sage'),
        'id'            => 'sidebar-footer'
    ] + $config);

    register_sidebar([
        'name'          => __('Сайдбар', 'sage'),
        'id'            => 'sidebar-side',
        'before_widget' => '',
        'after_widget'  => '',
        'before_title'  => '',
        'after_title'   => ''
    ]);

});

/**
 * Updates the `$post` variable on each iteration of the loop.
 * Note: updated value is only available for subsequently loaded views, such as partials
 */
add_action('the_post', function ($post) {
    sage('blade')->share('post', $post);
});



/**
 * Setup Sage options
 */
add_action('after_setup_theme', function () {
    /**
     * Add JsonManifest to Sage container
     */
    sage()->singleton('sage.assets', function () {
        return new JsonManifest(config('assets.manifest'), config('assets.uri'));
    });

    /**
     * Add Blade to Sage container
     */
    sage()->singleton('sage.blade', function (Container $app) {
        $cachePath = config('view.compiled');
        if (!file_exists($cachePath)) {
            wp_mkdir_p($cachePath);
        }
        (new BladeProvider($app))->register();
        return new Blade($app['view']);
    });

    /**
     * Create @asset() Blade directive
     */
    sage('blade')->compiler()->directive('asset', function ($asset) {
        return "<?= " . __NAMESPACE__ . "\\asset_path({$asset}); ?>";
    });
});


/**
   * Functions which enhance the theme by hooking into WordPress.
  */
require_once 'template-functions.php';


/**
    * Custom widget
*/


require_once 'inc/widget-contact.php';
