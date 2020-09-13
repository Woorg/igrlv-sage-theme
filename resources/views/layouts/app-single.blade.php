<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')
  <body id="top"  {{ body_class('page') }}>
    @php do_action('get_header') @endphp
    @include('partials.header')

    <div class="page__inner container" >
        <main class="main">
        @if ( function_exists('yoast_breadcrumb') )
            {{ yoast_breadcrumb(
                '<div class="breadcrumbs doublelines text">','</div>'
            ) }}
        @endif

        @yield('content')

        </main>
    </div>


    @php do_action('get_footer') @endphpa
    @include('partials.footer')
    @php wp_footer() @endphp

  </body>
</html>
