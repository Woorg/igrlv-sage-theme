{{--
  Title: Как работаю
  Description: Как работаю
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
	$howTitle = get_field('how_title');
@endphp

<!-- begin how-->
<section id="section-2" class="how section lines">
	<div class="how__container container container_borders ">

		<h2 class="how__title title title_big">{{ $howTitle }}</h2>


	@if( have_rows('how_list') )

		@php
			$inc = 0;
		@endphp

	<div class="how__list flex flex_start flex_top slider">

	 @php while( have_rows('how_list') ): the_row(); $inc++; @endphp

		@php
			$howItem     = get_sub_field('how_item');
			$howItemText = get_sub_field('how_item_text');
		@endphp

		<div data-number="{{ $inc }}" class="how__item">

			<h3 class="how__item-title title title_regular">{{ $howItem }}</h3>
			<div class="how__text text">
                {{ $howItemText }}
			</div>

		</div>

	 @php endwhile; @endphp

	</div>

	@endif
	</div>
</section>
<!-- end how-->