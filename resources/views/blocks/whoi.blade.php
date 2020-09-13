{{--
  Title: Кто я
  Description: Кто я
  Category: common
  Icon: admin-users
  Mode: preview
  Align: full
  PostTypes: page post
  SupportsAlign: left right full
  SupportsMode: false
  SupportsMultiple: false
--}}


<section class="whoi">
  <div class="whoi__container container">
      <h2 class="whoi__title title title_big">{{ the_field( 'title' ) }}</h2>
      <div class="whoi__text text">{{ the_field( 'text' ) }}</div>
  </div>
</section>