{{--
  Title: Cta
  Description: Cta
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
	$ctaTitle       = get_field('call-to-action_title');
	$ctaButtonText  = get_field('call-to-action_button');
@endphp

<!-- begin call-to-action-->
<section class="call-to-action section lines">
	<div class="call-to-action__container container container_borders">
		<h2 class="call-to-action__title title ">{{ $ctaTitle }}</h2>
		<a class="call-to-action__button button popup-open" href="#form-popup">{{ $ctaButtonText }}</a>
	</div>
</section>
<!-- end call-to-action-->