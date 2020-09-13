<?php

function cptui_register_my_cpts() {

  /**
   * Post Type: Портфолио.
   */

  $labels = array(
    "name" => __( "Портфолио", "webjeb" ),
    "singular_name" => __( "Портфолио", "webjeb" ),
    "menu_name" => __( "Portfolio", "webjeb" ),
  );

  $args = array(
    "label" => __( "Портфолио", "webjeb" ),
    "labels" => $labels,
    "description" => "",
    "public" => true,
    "publicly_queryable" => true,
    "show_ui" => true,
    "delete_with_user" => false,
    "show_in_rest" => true,
    "rest_base" => "",
    "rest_controller_class" => "WP_REST_Posts_Controller",
    "has_archive" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "exclude_from_search" => false,
    "capability_type" => "post",
    "map_meta_cap" => true,
    "hierarchical" => true,
    "rewrite" => array( "slug" => "portfolio", "with_front" => true ),
    "query_var" => true,
    'yarpp_support' => true,
    "supports" => array( "title", "editor", "thumbnail" ),
    "taxonomies" => array( "kind", "tools", "type_of_site" ),
  );

  register_post_type( "portfolio", $args );

  /**
   * Post Type: Блог .
   */


  $labels = [
    "name" => __( "Блог ", "webjeb" ),
    "singular_name" => __( "Блог", "webjeb" ),
  ];

  $args = [
    "label" => __( "Блог ", "webjeb" ),
    "labels" => $labels,
    "description" => "",
    "public" => true,
    "publicly_queryable" => true,
    "show_ui" => true,
    "delete_with_user" => false,
    "show_in_rest" => true,
    "rest_base" => "",
    "rest_controller_class" => "WP_REST_Posts_Controller",
    "has_archive" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "delete_with_user" => false,
    "exclude_from_search" => false,
    "capability_type" => "post",
    "map_meta_cap" => true,
    "hierarchical" => true,
    "rewrite" => [ "slug" => "blog", "with_front" => true ],
    "query_var" => true,
    'yarpp_support' => true,
    "supports" => [ "title", "editor", "thumbnail", "custom-fields", "comments" ],
    "taxonomies" => [ "blog_cat", "blog_tag" ],
  ];

  register_post_type( "blog", $args );


  /**
   * Post Type: Отзывы .
   */

  $labels = array(
    "name" => __( "Отзывы ", "webjeb" ),
    "singular_name" => __( "Отзыв", "webjeb" ),
  );

  $args = array(
    "label" => __( "Отзывы ", "webjeb" ),
    "labels" => $labels,
    "description" => "",
    "public" => true,
    "publicly_queryable" => true,
    "show_ui" => true,
    "delete_with_user" => false,
    "show_in_rest" => true,
    "rest_base" => "",
    "rest_controller_class" => "WP_REST_Posts_Controller",
    "has_archive" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "exclude_from_search" => false,
    "capability_type" => "post",
    "map_meta_cap" => true,
    "hierarchical" => true,
    "rewrite" => array( "slug" => "testimonials", "with_front" => true ),
    "query_var" => true,
    'yarpp_support' => true,
    "supports" => array( "title", "editor", "thumbnail", "comments" ),
  );

  register_post_type( "testimonials", $args );
}

add_action( 'init', 'cptui_register_my_cpts' );


function cptui_register_my_taxes() {


  /**
   * Taxonomy: Технологии .
   */

  $labels = array(
    "name" => __( "Технологии ", "webjeb" ),
    "singular_name" => __( "Технология", "webjeb" ),
  );

  $args = array(
    "label" => __( "Технологии ", "webjeb" ),
    "labels" => $labels,
    "public" => true,
    "publicly_queryable" => true,
    "hierarchical" => true,
    "show_ui" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "query_var" => true,
    "rewrite" => array( 'slug' => 'tools', 'with_front' => true, ),
    "show_admin_column" => true,
    "show_in_rest" => false,
    "rest_base" => "tools",
    "rest_controller_class" => "WP_REST_Terms_Controller",
    "show_in_quick_edit" => true,
    );
  register_taxonomy( "tools", array( "portfolio" ), $args );



  /**
   * Taxonomy: Категории.
   */

  $labels = [
    "name" => __( "Категории", "webjeb" ),
    "singular_name" => __( "Категория", "webjeb" ),
  ];

  $args = [
    "label" => __( "Категории", "webjeb" ),
    "labels" => $labels,
    "public" => true,
    "publicly_queryable" => true,
    "hierarchical" => true,
    "show_ui" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "query_var" => true,
    "rewrite" => [ 'slug' => 'portfolio_cat', 'with_front' => true,  'hierarchical' => true, ],
    "show_admin_column" => true,
    "show_in_rest" => true,
    "rest_base" => "portfolio_cat",
    "rest_controller_class" => "WP_REST_Terms_Controller",
    "show_in_quick_edit" => true,
    ];
  register_taxonomy( "portfolio_cat", [ "portfolio" ], $args );



  /**
   * Taxonomy: Рубрики.
   */

  $labels = [
    "name" => __( "Рубрики", "webjeb" ),
    "singular_name" => __( "Рубрика", "webjeb" ),
  ];

  $args = [
    "label" => __( "Рубрики", "webjeb" ),
    "labels" => $labels,
    "public" => true,
    "publicly_queryable" => true,
    "hierarchical" => true,
    "show_ui" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "query_var" => true,
    "rewrite" => [ 'slug' => 'blog_cat', 'with_front' => true,  'hierarchical' => true, ],
    "show_admin_column" => true,
    "show_in_rest" => true,
    "rest_base" => "blog_cat",
    "rest_controller_class" => "WP_REST_Terms_Controller",
    "show_in_quick_edit" => true,
    ];
  register_taxonomy( "blog_cat", [ "blog" ], $args );





  /**
   * Taxonomy: Тэги.
   */

  $labels = [
    "name" => __( "Тэги", "webjeb" ),
    "singular_name" => __( "Тэг", "webjeb" ),
  ];

  $args = [
    "label" => __( "Тэги", "webjeb" ),
    "labels" => $labels,
    "public" => true,
    "publicly_queryable" => true,
    "hierarchical" => true,
    "show_ui" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "query_var" => true,
    "rewrite" => [ 'slug' => 'blog_tag', 'with_front' => true,  'hierarchical' => true, ],
    "show_admin_column" => true,
    "show_in_rest" => true,
    "rest_base" => "blog_tag",
    "rest_controller_class" => "WP_REST_Terms_Controller",
    "show_in_quick_edit" => true,
    ];
  register_taxonomy( "blog_tag", [ "blog" ], $args );



}


add_action( 'init', 'cptui_register_my_taxes' );


// Register Custom Post Type
function clients() {

  $labels = array(
    'name'                  => _x( 'Клиенты', 'Post Type General Name', 'clients' ),
    'singular_name'         => _x( 'Клиент', 'Post Type Singular Name', 'clients' ),
    'menu_name'             => __( 'Клиенты', 'clients' ),
    'name_admin_bar'        => __( 'Post Type', 'clients' ),
    'archives'              => __( 'Item Archives', 'clients' ),
    'attributes'            => __( 'Item Attributes', 'clients' ),
    'parent_item_colon'     => __( 'Parent Item:', 'clients' ),
    'all_items'             => __( 'All Items', 'clients' ),
    'add_new_item'          => __( 'Add New Item', 'clients' ),
    'add_new'               => __( 'Add New', 'clients' ),
    'new_item'              => __( 'New Item', 'clients' ),
    'edit_item'             => __( 'Edit Item', 'clients' ),
    'update_item'           => __( 'Update Item', 'clients' ),
    'view_item'             => __( 'View Item', 'clients' ),
    'view_items'            => __( 'View Items', 'clients' ),
    'search_items'          => __( 'Search Item', 'clients' ),
    'not_found'             => __( 'Not found', 'clients' ),
    'not_found_in_trash'    => __( 'Not found in Trash', 'clients' ),
    'featured_image'        => __( 'Featured Image', 'clients' ),
    'set_featured_image'    => __( 'Set featured image', 'clients' ),
    'remove_featured_image' => __( 'Remove featured image', 'clients' ),
    'use_featured_image'    => __( 'Use as featured image', 'clients' ),
    'insert_into_item'      => __( 'Insert into item', 'clients' ),
    'uploaded_to_this_item' => __( 'Uploaded to this item', 'clients' ),
    'items_list'            => __( 'Items list', 'clients' ),
    'items_list_navigation' => __( 'Items list navigation', 'clients' ),
    'filter_items_list'     => __( 'Filter items list', 'clients' ),
  );
  $args = array(
    'label'                 => __( 'Клиент', 'clients' ),
    'description'           => __( 'Post Type Description', 'clients' ),
    'labels'                => $labels,
    'supports'              => array( 'title', 'editor', 'thumbnail' ),
    'hierarchical'          => false,
    'public'                => true,
    'show_ui'               => true,
    'show_in_menu'          => true,
    'menu_position'         => 5,
    'show_in_admin_bar'     => true,
    'show_in_nav_menus'     => true,
    'can_export'            => true,
    'has_archive'           => true,
    'exclude_from_search'   => false,
    'publicly_queryable'    => true,
    'capability_type'       => 'page',
  );
  register_post_type( 'clients', $args );

}
add_action( 'init', 'clients', 0 );