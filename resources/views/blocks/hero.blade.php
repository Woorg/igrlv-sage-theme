{{--
  Title: Первый экран
  Description: Чем я занимаюсь
  Category: common
  Icon: admin-users
  Mode: preview
  Align: full
  PostTypes: page post
  SupportsAlign: left right full
  SupportsMode: false
  SupportsMultiple: false
--}}


@php
	$heroImage 		  = get_field( 'hero_image' );
	$heroTitle 		  = get_field( 'hero_title' );
	$heroText 		  = get_field( 'hero_text' );
	$heroButtonText   = get_field( 'hero_button_text' );
	$telegram         = get_field( 'telegram', 'option' );
@endphp

<!-- begin hero-->
<section class="hero  lazy" data-bg="url({{ $heroImage['url'] }})">
	<canvas class="hero__noise"></canvas>
	@php if ( have_rows( 'hero_slider' ) ) : $i = 0; @endphp
	<div class="hero__slider">

		@php while ( have_rows( 'hero_slider' ) ) : the_row(); $i++; @endphp

			@if ($i > 0)

			@endif

		<div class="hero__slider-item">

			<div class="hero__container container">

					<div class="hero__w">

						<div class="hero__text text">
                            {{ the_sub_field( 'hero_text' ) }}
						</div>

						@if ($heroButtonText)
						<a class="hero__button button button_general popup-open" href="{{ $telegram }}" target="_blank" rel="noopener noreferrer">{{ $heroButtonText }}</a>
						@endif

					</div>
			</div>

		</div>


		@php endwhile; @endphp

	</div>
	@php endif; @endphp

</section>
<!-- end hero-->
