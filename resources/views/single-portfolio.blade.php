@extends('layouts.app-portfolio-single')

@section('content')

    @if ( have_posts() )
        @while ( have_posts() ) @php the_post(); @endphp
            <div class="work work_full">
                <h1 class="work__title title title_regular">
                    {{ the_title() }}
                </h1>

                <div class="work__details text flex flex_top flex_wrap">

                <figure class="work__preview">
                    {{ the_post_thumbnail( 'full' ) }}
                    {{ edit_post_link() }}
                </figure>
                <!-- device preview -->

                @if ( have_rows('portfolio_links') )
                    <div class="work__links work__col">
                        <div class="work__details-title title title_small">Ссылка(и):</div>
                        <ul class="work__list">
                        @while ( have_rows('portfolio_links') ) @php the_row(); @endphp
                            <li class="work__item">
                                <a
                                    href="{{ the_sub_field('portfolio_link') }}" class="work__link link"
                                    rel="noopenner noreferrer"
                                    target="_blank">
                                    {{ the_sub_field('portfolio_link') }}
                                </a>
                            </li>
                        @endwhile
                        </ul>

                        @php
                            $git_link = get_field('git_link');
                        @endphp

                        @if ($git_link)
                        <div class="work__details-title title title_small">Github:</div>
                        <ul class="work__list">
                            <li class="work__item">
                                <a
                                    href="{{ $git_link }}"
                                    class="work__link link"
                                    rel="noopenner noreferrer"
                                    target="_blank">
                                    {{ $git_link }}
                                </a>
                            </li>
                        </ul>
                        @endif
                    </div>
                @endif

            @php $tools_used_terms = get_field( 'tools_used' ); @endphp
            @if ( $tools_used_terms )
                <div class="work__tools work__col">
                    <div class="work__details-title title title_small">Технологии:</div>

                    <ul class="work__list">
                    @foreach ( $tools_used_terms as $tools_used_term )
                        <li class="work__item">
                            {{ $tools_used_term->name }}
                        </li>
                    @endforeach
                    </ul>
                </div>
            @endif

            <div class="work__text text work__col work__col_desc">
                <div class="work__details-title title title_small">Описание:</div>
                {{ the_content() }}
                </div>
            </div>
            <!-- end work details -->

        </div>
        <!-- end work -->
        @endwhile
    @endif

    <div class="page__pagination pagination pagination_page doublelines">
    @php
        the_post_navigation([
            'next_text' => '<span class="meta-nav" aria-hidden="true">Далее</span> ' .
            '<span class="screen-reader-text">Следующая работа </span> ' .
            '<span class="post-title"> %title &rarr;</span>',
            'prev_text' => '<span class="meta-nav" aria-hidden="true">Назад</span> ' .
            '<span class="screen-reader-text">Предыдущая работа</span> ' .
            '<span class="post-title">&larr; %title</span>',
        ]);
    @endphp
    </div>
    <!-- end pagination -->

    {{-- <div class="page__comments">
    </div> --}}

@endsection
