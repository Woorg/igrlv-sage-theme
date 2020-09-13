@extends('layouts.app-portfolio-term')

@section('content')


    <section class="recent-works section">
        <h1 class="works__title title title_big">Портфолио <span>{{ single_term_title() }}</span></h1>


        {!!
            wp_nav_menu([
                'theme_location' => 'menu-2',
                'menu_id' => '',
                'container' => '',
                'menu_class' => 'list-filter'
            ])
        !!}

        {!!
            wp_nav_menu([
                'theme_location' => 'menu-4',
                'menu_id' => '',
                'container' => '',
                'menu_class' => 'list-filter list-filter_second'
            ])
        !!}

        @if (have_posts())
        <ul class="recent-works__list">
            @while (have_posts()) @php the_post(); @endphp
                <li class="recent-works__item">
                    <a href="{{ the_permalink() }}" class="recent-works__image">
                        {{ the_post_thumbnail('medium_large') }}
                    </a>
                    <div class="recent-works__item-title">{{ the_title() }}</div>
                    <div class="recent-works__cat">
                        {{ the_category() }}
                    </div>
                </li>
            @endwhile

        </ul>
        @endif

        <div class="pagination">

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

    </section>
@endsection
