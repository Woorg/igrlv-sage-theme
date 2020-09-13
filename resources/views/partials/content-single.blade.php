
@if ( have_posts() )
  @while ( have_posts() ) @php the_post(); @endphp

  <article
    class="page__article article article_full"
    itemscope
    itemtype="http://schema.org/Article
  ">

    <h1
      class="article__title title title_big"
      itemprop="name">{{ the_title() }}
    </h1>
    <!-- end title -->

    @if (has_post_thumbnail())
      <figure class="article__image" itemprop="thumbnailUrl">
        {{ the_post_thumbnail('full') }}
      </figure>
    @endif
    <!-- end image -->

    {{-- <button
        class="likes button"
        data-href="{{ admin_url('admin-ajax.php') }}"
        data-id="{{ $post->ID }}">
        <span class="likes__count">{{ the_field('likes') }}</span>
        Лайков
    </button> --}}


    {{-- <script>
            document.addEventListener('load', function () {
                console.log('loaded');
                var $likeBtn = document.querySelector('.likes');
                var postID = $likeBtn.getAttribute('data-id');
                try {
                    if (!localStorage.getItem('liked')) {
                        localStorage.setItem('liked', '');
                    }
                } catch (e) {
                    console.log(e);
                }

                function getAboutLike(id) {
                    let hasLike = false;
                    try {
                        hasLike = localStorage
                            .getItem('liked')
                            .split(',')
                            .includes(id);
                    } catch (e) {
                        console.log(e)
                    }

                    return hasLike;
                }

                let hasLike = getAboutLike(postID);

                if (hasLike) {
                    $likeBtn.classList.add('like_liked');
                }
                $likeBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    let hasLike = getAboutLike(postID);
                    var data = new FormData();
                    data.append('action', 'post-likes');
                    let todo = hasLike ? 'minus' : 'plus';
                    data.append('todo', todo);
                    data.append('id', postID);

                    var xhr = new new XMLHttpRequest();
                    xhr.open('POST', $likeBtn.getAttribute('data-href'));
                    xhr.send(data);
                    $likeBtn.disabled = true;
                    xhr.addEventListener('readystatechange', function () {
                        if (xhr.readyState !== 4) return;
                        if (xhr.status === 200) {
                            $likeBtn.querySelector('.like__count').innerText = xhr.responseText;
                            let localData = localStorage.getItem('liked');
                            let newData = '';
                            if (hasLike) {
                                newData = localData
                                    .split(',')
                                    .filter(function (el) {
                                        return el !== postID
                                    })
                                    .join(',');
                            } else {
                                newData = localData
                                    .split(',')
                                    .filter(function (el) {
                                        return el !== ''
                                    })
                                    .concat(postID)
                                    .join(',');
                            }
                            localStorage.setItem('liked', newData);
                            $likeBtn.classList.toggle('like_liked');

                        } else {
                            console.log(xhr.statusText);
                        };
                        $likeBtn.disabled = false;

                    });

                });
            });

        </script> --}}

    <div class="article__meta text-top">
      <span class="article__read">
        <svg class="article__read-icon" width="14" height="16">
          <use xlink:href="#date-icon"></use>
        </svg>~ {{ igrlv_read_time() }} мин
      </span>
      <span class="article__date">
        <svg class="article__date-icon" width="15" height="15">
          <use xlink:href="#calendar-icon"></use>
        </svg>{{ the_time('j F Y') }}
      </span>
      {{-- @if( has_term('', 'blog_tag') )
        <span class="article__tags">Категории:
          {{ the_terms($post->ID, 'blog_cat') }}
        </span>
      @endif --}}

      <span class="article__author">
        <svg class="article__author-icon" width="14" height="16">
          <use xlink:href="#user-icon"></use>
        </svg>{{ get_the_author() }}
      </span>

      @if( has_term('', 'blog_tag') )
      <span class="article__tags">
        <svg class="article__tags-icon" width="14" height="16">
          <use xlink:href="#hashtag-icon"></use>
        </svg>{{ the_terms($post->ID, 'blog_tag') }}
      </span>
      @endif
    </div>
    <!-- end meta -->

    {{-- <div class="article__social">
      <div class="likely">
        <div class="telegram">Отправить</div>
        <div class="facebook">Поделиться</div>
        <div class="vkontakte">Поделиться</div>
        <div class="twitter">Твитнуть</div>
      </div>
    </div> --}}

    <div class="article__text wysiwyg " itemprop="articleBody">
      {{ the_content() }}
    </div>

  </article>

  {{ edit_post_link() }}

  <footer>
    {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
  </footer>

  <!-- end article -->
  @endwhile


  @if ( comments_open() || get_comments_number() )
    @php comments_template('/partials/comments.blade.php') @endphp
  @endif

@endif

</article>
