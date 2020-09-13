@extends('layouts.app-portfolio')

@section('content')
    <h1 class="works__title title title_big">{{ post_type_archive_title() }}</h1>

    <nav class="works__nav nav nav_third">
        {!! wp_nav_menu([

            'theme_location' => 'menu-2',
            'menu_id'        => '',
            'container'      => '',
            'menu_class'     => 'nav__list',
            'before'         => '',
            'after'          => '',
            'link_before'    => '',
            'link_after'     => ''
        ]) !!}
    </nav>

    <ul class="works__list flex">
        @while (have_posts()) @php the_post(); @endphp
            @php
                $work_image_color = get_field( 'work_image_color', get_the_id() );
                $company_logo = get_field( 'company_logo', get_the_id() );
                $logo_text = get_field('logo_text', get_the_id() );
            @endphp

            <li class="works__item work">
                <a href="{{ get_the_permalink( get_the_ID() ) }}" class="work__link">
                    <figure class="work__image">
                    {!! get_the_post_thumbnail( get_the_ID(), 'full' ) !!}
                    <span class="work__bg" style="background: linear-gradient(to top, {{ $work_image_color }} 30%, transparent 50%);"></span>
                    </figure>
                    <div class="work__title title title_regular">{!! get_the_title( get_the_ID() ) !!}</div>
                </a>
            </li>
        @endwhile

    </ul>


    <div class="pagination ">
    @php
        global $wp_query;

        $big = 999999999; // need an unlikely integer

        echo paginate_links( array(
        'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
        'format' => '?paged=%#%',
        'current' => max( 1, get_query_var('paged') ),
        'total' => $wp_query->max_num_pages
        ) );

    @endphp
    <!-- end pagination -->
@endsection
