{{--
  Title: FAQ
  Description: FAQ
  Category: common
  Icon: admin-users
  Mode: preview
  Align: full
  PostTypes: page post
  SupportsAlign: left right full
  SupportsMode: false
  SupportsMultiple: false
--}}

<section class="faq">
  <div class="faq__container container">
    @if ( $name = get_field( 'name' ) )
    <h2 class="faq__title title title_big">{{ $name }}</h2>
    @endif

    @if ( have_rows( 'list' ) )
    <dl class="faq__list">
      @while ( have_rows( 'list' ) ) @php the_row(); @endphp
        @if ( $guestion = get_sub_field( 'guestion' ) )
        <div class="faq__item">
          <dt class="faq__question title title_small">{{ $guestion }}</dt>

          @if ( $answer = get_sub_field( 'answer' ) )
          <dd class="faq__answer">{!! $answer !!}</dd>
          @endif
        </div>
        @endif
      @endwhile
    </dl>
    @endif

  </div>
</section>
<!-- end faq section -->