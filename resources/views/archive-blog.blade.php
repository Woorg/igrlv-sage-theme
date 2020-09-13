@extends('layouts.app-archive')

@section('content')

    <h1 class="main__title title title_big">
        {{ post_type_archive_title() }}
    </h1>

    <div class="main__description wysiwyg">
      {{ get_the_archive_description() }}
    </div>

    <div class="page__row flex flex_start flex_top flex_wrap">
        <div class="page__content content">

            @include('partials.content-archive')

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
