{{--
  Title: Недавние работы
  Description: Недавние работы
  Category: common
  Icon: admin-users
  Mode: preview
  Align: full
  PostTypes: page post
  SupportsAlign: left right full
  SupportsMode: false
  SupportsMultiple: false
--}}

<div class="works">
  <div class="works__container">
    <div class="container">
      <h2 class="works__title title title_big">{{ the_field( 'recent-works_title' ) }}</h2>
    </div>

    <div class="works__tabs tabs ">
      <div class="container">
        <div class="works__text text">{{ the_field( 'recent-works_text' ) }}</div>
        <div class="works__tabs-top ">
          <ul class="tabs__nav" data-tabs>
            @php $i = 0; $i2 = 0; @endphp
            @php while ( have_rows( 'tabs' ) ) : the_row(); $i++; @endphp
            @php $data_attr = $i > 1 ? '' : 'data-tabby-default '; @endphp
            <li class="tabs__nav-item">
              <a {{ $data_attr }} href="#tab-0{{ $i }}" class="tabs__nav-link title title_small">{{ the_sub_field( 'tab_title' ) }}
              </a>
            </li>
            @php endwhile @endphp
          </ul>
        </div>
      </div>

      @php while ( have_rows( 'tabs' ) ) : the_row(); $i2++; @endphp

      <div id="tab-0{{ $i2 }}" class="tabs__tab">
        <div class="works__w flex">
        @php while ( have_rows( 'tab_works' ) ) : the_row(); @endphp
        @php $post_object = get_sub_field( 'tab_work' ); @endphp

        @if ( $post_object )
          @php
            $post = $post_object;
            setup_postdata( $post );
            $work_image_color = get_field('work_image_color', $post->ID);
          @endphp

          <div class="works__work work">
            <a href="{{ get_the_permalink( $post->ID ) }}" class="work__link">
              <figure class="work__image">
                {!! get_the_post_thumbnail( $post->ID, 'full' ) !!}
                {{-- {{ rwd_attachment_image( get_post_thumbnail_id( $post_id ), 'full', 'picture', [] ) }} --}}
              </figure>
            </a>
          </div>

          @php wp_reset_postdata(); @endphp
        @endif

        @php endwhile; @endphp
        </div>

      </div>
      @php endwhile; @endphp

    </div>
    <!-- end tabs -->

    <div class="works__button-w container">
      <a href="{{ get_post_type_archive_link( 'portfolio' ) }}" class="works__button button button_general">{{ the_field( 'recent-works_button' ) }}</a>
    </div>

  </div>
</div>
<!-- end recent-works-->
