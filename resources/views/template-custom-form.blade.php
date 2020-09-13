{{--
  Template Name: Custom Form 2
--}}

@extends('layouts.app')

@section('content')
    <div class="custom-form container">
        <form
            action="{{ admin_url('admin-post.php') }}"
            method="post"
            class="form">
            <input type="hidden" name="action" value="i_custom_form">
            <div class="form__row">
                <div class="form__field">
                    <input type="text" class="form__input" name="i_name" value="" placeholder="Name">
                </div>
                <div class="form__field">
                    <input type="text" class="form__input" name="i_phone" value="" placeholder="Phone">
                </div>
                <input type="submit" class="form__submit button" value="Send">
            </div>
        </form>

        {{-- <button
            class="likes button"
            data-href="{{ admin_url('admin-ajax.php') }}"
            data-id="{{ $post->ID }}">
            <span class="likes__count">{{ the_field('likes') }}</span>
            Лайков
        </button>

        <script>
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
                    // e.preventDefault();
                    let hasLike = getAboutLike(postID);
                    var data = new FormData();
                    data.append('action', 'post-likes');
                    let todo = hasLike ? 'minus' : 'plus';
                    data.append('todo', todo);
                    data.append('id', postID);

                    var xhr = new new XMLHttpRequest();
                    xhr.open('POST', $likeBtn.getAttribute('data-href'));
                    xhr.send(data);
                    // $likeBtn.disabled = true;
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


        {{ the_content() }}


    </div>


@endsection
