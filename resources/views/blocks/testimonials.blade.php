{{--
  Title: Отзывы
  Description: Отзывы
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
	$testimTitle       = get_field('testim_title');
	$testimButtonText  = get_field('testim_button_text');
@endphp

<section class="testimonials lines">
	<div class="testimonials__container container container_borders">
		<h2 class="testimonials__title title title_big">{{ $testimTitle }}</h2>

			<!-- <div class="testimonials__grid "> -->

				<div class="testimonials__list flex flex_start flex_top flex_wrap slider">

				@php
					$args = array(
						'post_type'      => 'testimonials',
						'posts_per_page' => 5
					);

					$q = new WP_Query($args);

				@endphp

				@php while ( $q->have_posts()) : $q->the_post(); @endphp

					<div class="testimonials__item">
						@if ( has_post_thumbnail() )
						<div class="testimonials__avatar ">
                            {{ the_post_thumbnail() }}
						</div>
						@endif

						@php
							$name = get_post_meta( get_the_ID(), 'name', true );
							$project = get_post_meta( get_the_ID(), 'project', true );
							$testLink = get_post_meta( get_the_ID(), 'test_link', true );
						@endphp

							<div class="testimonials__name title title_regular">{{ $name }}</div>
							<div class="testimonials__subject text-top">{{ $project }}</div>
							<div class="testimonials__text text">
                                {{ the_excerpt() }}
							</div>

							@if ($testLink)
							<a href="{{ esc_url($testLink['url']) }}" class="testimonials__link text" rel="nofollow" target="_blank">{{ esc_attr($testLink['title']) }}</a>
							@endif

					</div>
                @php
                    endwhile;
                    wp_reset_query();
                @endphp

				</div>
		<!-- </div> -->

		<div class="testimonials__button-w">
			<a href="/testimonials/" class="testimonials__button button button_black">{{ $testimButtonText }}</a>
		</div>


	</div>
</section>
<!-- end testimonials-->
