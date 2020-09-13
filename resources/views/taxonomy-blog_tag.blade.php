@extends('layouts.app-archive')

@section('content')

  @php
    $term = get_term_by(
      'slug',
      get_query_var( 'term' ),
      get_query_var( 'taxonomy' )
    );
  @endphp

	<h1 class="main__title title title_big">
        {{ $term->name }}
    </h1>

  <div class="main__description wysiwyg">
    {!! category_description() !!}
  </div>

  <div class="page__row flex flex_start flex_top flex_wrap">
    <div class="page__content content">
    @if ( have_posts() )
    <div class="page__grid grid">
      <div class="page__list grid__list flex fles_start flex_stretch flex_wrap">
      @while ( have_posts() ) @php the_post(); @endphp
        <article class="page__article article article_grid">
          @if (has_post_thumbnail())
            <figure class="article__image">
              <a class="article__link" href="{{ the_permalink() }}">
                {{ the_post_thumbnail('full') }}
              </a>
            </figure>
          @endif
          <div class="article__w">
            <div class="article__title title title_small">
              <a href="{{ the_permalink() }}" class="article__link link link_secondary">{{ the_title() }}</a>
            </div>
            <div class="article__meta text-top">
            <span class="article__date">
              <svg class="article__date-icon" width="15" height="15">
                <use xlink:href="#calendar-icon"></use>
              </svg>{{ the_time('j F Y') }}</span>
              @if( has_term('', 'blog_tag') )
              {{-- <span class="article__tags">Категории:
                {{ the_terms($post->ID, 'blog_cat') }}
              </span> --}}
              @endif

              @if( has_term('', 'blog_tag') )
              <span class="article__tags">
                <svg class="article__tags-icon" width="14" height="16">
                  <use xlink:href="#hashtag-icon"></use>
                </svg>
                {{ the_terms($post->ID, 'blog_tag') }}
              </span>
              @endif

            </div>
          </div>
        </article>
      @endwhile
      </div>
    </div>
    <!-- end page grid -->
    @endif
    </div>
    <!-- end content -->

    @if (App\display_sidebar(true))
      <aside class="page__side side" data-sticky-container>
        @include('partials.sidebar')
      </aside>
    @endif

    <!-- end side -->

  </div>

  <div class="pagination doublelines">
    @php
      global $wp_query;

      $big = 999999999;

      echo paginate_links( array(
        'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
        'format' => '?paged=%#%',
        'current' => max( 1, get_query_var('paged') ),
        'total' => $wp_query->max_num_pages
      ) );
    @endphp
  </div>
  <!-- end pagination -->


@endsection
