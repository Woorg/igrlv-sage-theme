<?php

/**
 * YARPP Template: Thumbs irglv
 * Author: mitcho (Michael Yoshitaka Erlewine)
 * Description: A simple example YARPP template.
 */

?>

<div class="related">
	<?php if (have_posts()): ?>
	<h3 class="related__title title title_regular">Похожие записи</h3>
	<ul class="related__list">
		<?php while (have_posts()): the_post() ?>
		<li class="related__item">
			<a href="{{ the_permalink() }}" class="related__link" rel="bookmark">
				<?php if ( has_post_thumbnail() ): ?>
				<span class="related__image">
                    <?php the_post_thumbnail('medium') ?>
                </span>
				<?php endif; ?>
				<div class="related__item-w">
					<span class="related__item-title"><?php the_title() ?></span>
				</div>
			</a>
		</li>
		<?php endwhile; ?>
	</ul>
	<?php else: ?>
	<p class="related__text">Похожих записей не найдено</p>
	<?php endif; ?>
</div>
