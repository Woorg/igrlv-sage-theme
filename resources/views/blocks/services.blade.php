{{--
  Title: Услуги
  Description: Услуги
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
	$servicesTitle = get_field('services_title');
@endphp

<!-- begin services-->
<section class="services section lines">
	<div class="services__container container container_borders">

	<h2 class="services__title title title_big">{{ $servicesTitle }}</h2>


	@if( have_rows('services_list') )

		<ul class="services__list flex ">
		@php
			$inc       = 0;
			$inc_sec   = 0;
			$inc_third = 0;
		@endphp

		@php while ( have_rows('services_list') ) : the_row(); $inc++; $inc_sec++; $inc_third++; @endphp

			@php
				$servicesService     = get_sub_field('services_service');
				$servicesServiceText = get_sub_field('services_service_text');
			@endphp

			<li class="services__item services__item_{{ $inc }}">
				<div class="services__item-icon services__item-icon_{{ $inc_sec }}">
					<svg class="services__icon"><use xlink:href="#service-{{ $inc_third }}"></use></svg>
				</div>
				<h3 class="services__item-title title title_regular">{{ $servicesService }}</h3>
				<div class="services__item-text text">{{ $servicesServiceText }}</div>
			</li>

			@php endwhile; @endphp

		</ul>

	@endif
	</div>
</section>
<!-- end services-->
