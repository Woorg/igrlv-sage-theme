{{--
  Title: Контакты
  Description: Контакты
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
  $form = get_field('form');
@endphp

<div class="contacts">
    <div class="contacts__form form">
        {{ do_shortcode($form) }}
    </div>
</div>