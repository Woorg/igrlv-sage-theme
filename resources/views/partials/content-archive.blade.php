
@if ( have_posts() )
    <div class="page__list  flex fles_start flex_stretch flex_wrap">
        @while ( have_posts() ) @php the_post(); @endphp
            <article class="page__article article">
            @if (has_post_thumbnail())
                <figure class="article__image">
                    <a class="article__link" href="{{ the_permalink() }}">
                        {{ the_post_thumbnail('full') }}
                    </a>
                </figure>
            @endif

            <div class="article__w">
                <div class="article__title title title_small">
                    <a href="{{ the_permalink() }}" class="article__link">
                        {{ the_title() }}
                    </a>
                </div>

                <div class="article__meta text-top">
                    <span class="article__date">
                        <svg class="article__date-icon" width="15" height="15">
                            <use xlink:href="#calendar-icon"></use>
                        </svg>{{ the_time('j F Y') }}
                    </span>

                    @if( has_term('', 'blog_tag') )
                    {{-- <span class="article__tags">Категории: {{ the_terms($post->ID, 'blog_cat') }}</span> --}}
                    @endif

                    @if( has_term('', 'blog_tag') )
                        <span class="article__tags">
                            <svg class="article__tags-icon" width="14" height="16">
                                <use xlink:href="#hashtag-icon"></use>
                            </svg>{{ the_terms($post->ID, 'blog_tag') }}
                        </span>
                    @endif
                </div>

                {{-- <div class="article__text wysiwyg">
                    {{ the_excerpt() }}
                </div> --}}
            </div>

            </article>
        @endwhile
    </div>

@endif