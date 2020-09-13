{{--
  Title: Недавние посты
  Description: Недавние посты
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
	$latestPosts = get_field('latest_posts_title');
@endphp

<!-- begin latest-posts-->
<section class="latest-posts">
	<div class="latest-posts__container container container_borders">

		@if ($latestPosts)
		<h2 class="latest-posts__title title title_big">{{ $latestPosts }}</h2>
		@endif

			@php
				$args = array(
					'post_type'      => 'blog',
					'posts_per_page' => 5
				);

				$q = new WP_Query($args);

			@endphp

			<ul class="latest-posts__list">
				@php while ( $q->have_posts()) : $q->the_post(); @endphp
				<li class="latest-posts__item">
					<h3 class="latest-posts__post-title title title_small">
						<a href="{{ the_permalink() }}" class="latest-posts__link">{{ the_title() }}</a>
					</h3>
				</li>
				@php endwhile; wp_reset_postdata(); @endphp
			</ul>
	</div>
</section>
<!-- end latest-posts-->