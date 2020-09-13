@php while ( have_posts() ) : the_post(); @endphp
    <article class="article article_full article_contacts wysiwyg">
    <h1 class="article__title title title_big">{{ the_title() }}</h1>
        {{ the_content() }}
    </article>
@php endwhile; @endphp