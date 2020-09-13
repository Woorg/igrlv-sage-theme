{{--
  Title: Inner
  Description: Test inner block acf feature
  Category: formatting
  Icon: admin-tools
  Mode: preview
  Align: full
  PostTypes: page post
  SupportsAlign: false
  SupportsMode: true
  SupportsInnerBlocks: true


--}}

  <div class="inner-block" data-acf="{{$block['data']['some_thing']}}">
    <h1 class="inner-block__title">{{ the_field('title') }}</h1>
    <div class="inner-block__text">
      {{ the_field('text') }}
      <InnerBlocks  />
    </div>
  </div>


