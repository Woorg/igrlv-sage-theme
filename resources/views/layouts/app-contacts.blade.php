<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')
  <body id="top" @php body_class('page') @endphp>
    @php do_action('get_header') @endphp
    @include('partials.header')

    <div class="page__inner" >
        <main class="main main_contacts container" >
            @if ( function_exists('yoast_breadcrumb') )
                {{ yoast_breadcrumb('<div class="breadcrumbs doublelines text">','</div>') }}
            @endif

            @if(function_exists('bcn_display'))
            <div class="breadcrumbs" typeof="BreadcrumbList" vocab="http://schema.org/">
                {{ bcn_display() }}
            </div>
            @endif

            @yield('content')

        </main>
        <div id="map" class="page__map"></div>
    </div>



    @php do_action('get_footer') @endphp
    @include('partials.footer')
    @php wp_footer() @endphp


  </body>
</html>
