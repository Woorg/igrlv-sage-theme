@extends('layouts.app-single')

@section('content')

  <div class="page__row flex flex_start flex_top">
    <div class="page__content content">

      @include('partials.content-single')

    </div>
    <!-- end content -->


    @if (App\display_sidebar())
      <aside class="page__side side" data-sticky-container>
        @include('partials.sidebar')
      </aside>
    @endif
    <!-- end side -->

  </div>
  <!-- end page__row -->

@endsection
