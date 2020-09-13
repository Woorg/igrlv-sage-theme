<?php


//add support for async and defer params

add_filter( 'script_loader_tag', function($tag, $handle){
    if ( wp_scripts()->get_data( $handle, 'defer' ) ) {
        $tag = str_replace( '></', ' defer></', $tag );
    }
    if ( wp_scripts()->get_data( $handle, 'async' ) ) {
        $tag = str_replace( '></', ' async></', $tag );
    }
    return $tag;
}, 10, 2 );


// Add style attributes

function igrlv_app_style_add_attributes( $html, $handle ) {
    if ( 'main' === $handle ) {
        return str_replace( "media='all'", "media='print' onload=this.media='all'", $html );
    } else if ('tabs' === $handle) {
      return str_replace("media='all'", "media='print' onload=this.media='all'", $html);
    } else if ('likely' === $handle) {
      return str_replace("media='all'", "media='print' onload=this.media='all'", $html);
    } else if ('highlight' === $handle) {
      return str_replace("media='all'", "media='print' onload=this.media='all'", $html);
    } else if ('wp-block-library' === $handle) {
      return str_replace("media='all'", "media='print' onload=this.media='all'", $html);
    }

    return $html;
  }
add_filter( 'style_loader_tag', 'igrlv_app_style_add_attributes', 10, 2 );


// ACF

if (function_exists('acf_add_options_page')) {

    acf_add_options_page(
        array(
        'page_title'  => 'Настройки igrlv',
        'menu_title'  => 'Настройки igrlv',
        'menu_slug'   => 'theme-settings',
        'capability'  => 'edit_posts',
        'icon_url'    => 'dashicons-admin-settings',
        'redirect'    => false
        )
    );
}

// Contacts form 7

  add_filter('wpcf7_form_elements', function($content) {
    $content = preg_replace('/<(span).*?class="\s*(?:.*\s)?wpcf7-form-control-wrap(?:\s[^"]+)?\s*"[^\>]*>(.*)<\/\1>/i', '\2', $content);

    return $content;
  });


  // Excerpt

  function igrlv_excerpt_length() {
    return 30;
  }

  add_filter( 'excerpt_length', 'igrlv_excerpt_length' );

  function igrlv_excerpt_more( $more ) {
      return ' ...';
  }
  add_filter('excerpt_more', 'igrlv_excerpt_more');



  // Popular posts

  function igrlv_popular_posts($post_id) {
    $count_key = 'popular_posts';
    $count = get_post_meta($post_id, $count_key, true);
    if ($count == '') {
      $count = 0;
      delete_post_meta($post_id, $count_key);
      add_post_meta($post_id, $count_key, '0');
    } else {
      $count++;
      update_post_meta($post_id, $count_key, $count);
    }
  }

  function igrlv_track_posts($post_id) {
    if (!is_single()) return;
    if (empty($post_id)) {
      global $post;
      $post_id = $post->ID;
    }
    igrlv_popular_posts($post_id);
  }

  add_action('wp_head', 'igrlv_track_posts');


  // Add custom text to console

  function igrlv_footer_text() {
    echo '<p>Made with love ❤️ by Igor Gorlov <a href="//igrlv.ru" target="_blank">igrlv.ru</a></p>';
  }

  add_filter('admin_footer_text', 'igrlv_footer_text');


  // Add custom logo to wordpress login page

  function igrlv_custom_logo() { ?>

    <style>
      #login h1 {
        overflow: hidden; }

      #login h1 a {
        width: 100%;
        height: auto;
        min-height: 70px;
        background: url("<?php echo get_template_directory_uri(); ?>/assets/images/general/custom-login-image.png") 0 0 / cover no-repeat;
        transform: scale(1.5); }

      .login .message {
        border-left: 4px solid #009688 !important; }

      .login .button-primary {
        background: #212121 !important;
        border-color: none !important;
        box-shadow: none !important;
        text-shadow: none !important;
      }

    </style>

  <?php }

  // add_filter('login_enqueue_scripts', 'igrlv_custom_logo');

  // Remove image width & height

  add_filter( 'post_thumbnail_html', 'remove_wps_width_attribute', 10 );
  add_filter( 'image_send_to_editor', 'remove_wps_width_attribute', 10 );

  function remove_wps_width_attribute( $html ) {
    $html = preg_replace( '/(width|height)=\"\d*\"\s/', "", $html );
    return $html;
  }


  function igrlv_read_time() {
    $text = get_the_content( '' );
    $words = str_word_count( strip_tags( $text ), 0, 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ' );
    if ( ! empty( $words ) ) {
        $time_in_minutes = ceil( $words / 180 );
        return $time_in_minutes;
    }
    return false;
}



// add support webp

function igrlv_mime_types( $mime_types ) {
  $mime_types['webp'] = 'image/webp';     // Adding .webp extension

//  unset( $mime_types['xls'] );  // Remove .xls extension
//  unset( $mime_types['xlsx'] ); // Remove .xlsx extension

  return $mime_types;

}
add_filter( 'upload_mimes', 'igrlv_mime_types', 1, 1 );


add_filter('sage/display_sidebar', function ($display) {
    static $display;

    isset($display) || $display = in_array(true, [
      // The sidebar will be displayed if any of the following return true
      is_single(),
      is_404(),
      is_archive(),

    //   is_page_template('views/taxonomy-blog_cat.blade.php')
    ]);

    return $display;
});


// Hooks

add_action('add_meta_boxes', 'igrlv_meta_boxes');

function igrlv_meta_boxes( ) {
    add_meta_box(
        'igrlv-likes',
        'Лайки',
        'igrlv_likes_cb',
        'post'
    );
}
function igrlv_likes_cb( $post_obj ) {

    $likes = get_post_meta( $post_obj->ID, 'igrlv-likes', true);
    $likes = $likes ? $likes : 0;

    // echo '<strong>' . $likes . '</strong>';
}

// Sugar for assets

function front_assets() {

  $path = get_template_directory_uri();
  return $path;

}

add_action('admin_post_nopriv_i_custom_form', 'i_custom_form_handler');
add_action('admin_post_i_custom_form', 'i_custom_form_handler');
add_action('wp_ajax_nopriv_post-likes', 'post_likes_handler');
add_action('wp_ajax_post-likes', 'post_likes_handler');
add_action('manage_posts_custom_column', 'liked_column', 5, 2);
add_filter('manage_posts_columns', 'add_col_likes');


function i_custom_form_handler() {
  var_dump($_POST);
  header('Location: ' . home_url());
}

function post_likes_handler() {
  $id = $_POST['id'];
  $todo = $_POST['todo'];
  $current_data = get_post_meta($id, 'likes', true);
  $current_data = $current_data ? $current_data : 0;
  if ( $todo === 'plus' ) {
    $current_data++;
  } else {
    $current_data--;
  }
  $res = update_post_meta($id, 'likes', $current_data);

  if ( $res ) {
    echo $current_data;
  } else {
    wp_die('Like don\'t save. Try again');

  }
  wp_die();
}

function liked_column( $col_name, $id ) {
  if( $col_name !== 'col_likes' ) return;
  $likes = get_post_meta( $id, 'likes', true );
  echo $likes ? $likes : 0;

}

function add_col_likes( $defaults ) {
  $type = get_current_screen();
  if ( $type->post_type === 'post' ) {
    $defaults['col_likes'] = 'Likes';
  }
  return $defaults;
}