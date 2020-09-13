
@php

    $taxonomies = array(
      'blog_cat'
    );

    $args = array(
      'orderby'       => 'name',
      'order'         => 'ASC',
      'hide_empty'    => true,
      'exclude'       => array(),
      'exclude_tree'  => array(),
      'include'       => array(),
      'number'        => '',
      'fields'        => 'all',
      'slug'          => '',
      'parent'         => '',
      'hierarchical'  => true,
      'child_of'      => 0,
      'get'           => '',
      'name__like'    => '',
      'pad_counts'    => false,
      'offset'        => '',
      'search'        => '',
      'cache_domain'  => 'core'
    );

    $blog_cats = get_terms( $taxonomies , $args);
@endphp

    <div class="side__block-w">
        <nav class="side__block side__nav">
            <div class="side__block-title title title_small">Категории:</div>
            <ul class="side__nav-list">
            @foreach ($blog_cats as $blog_cat)
                <li class="side__nav-item">
                    <a
                        class="side__nav-link"
                        href="{{ get_term_link($blog_cat->term_id, 'blog_cat') }}">
                        {{ $blog_cat->name }}
                    </a>
                </li>
            @endforeach
            </ul>
      </nav>
</div>


    {{ dynamic_sidebar('sidebar-side') }}
