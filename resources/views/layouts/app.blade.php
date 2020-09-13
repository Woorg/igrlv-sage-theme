<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')
  <body id="top" @php body_class('page') @endphp>
    @php do_action('get_header') @endphp
    @include('partials.header')

    <div class="page__inner" >
      <main class="page__main" >

        @yield('content')

      </main>
    </div>

    @php do_action('get_footer') @endphp
    @include('partials.footer')
    @php wp_footer() @endphp


  </body>
</html>
