export default function nav() {

(function ($) {

  const $navButton = $('.nav_primary .nav__button');
  const $page = $('.page');

  $navButton.on('click', function (e) {
      e.preventDefault();

      $page.toggleClass('page_nav-active');
      $(this).parent('.nav_primary').toggleClass('nav_active');
      $(this).children('.nav__text').text( $(this).children('.nav__text').text() === 'Меню' ? 'Закрыть' : 'Меню' );
  });

  $('.table-of-contents__link, .article__gotop').on( 'click', function (e) {
      e.preventDefault();
      let _scroll = $(this).attr('href');
      if ( _scroll !== '#' && $(_scroll).length ) {
          $('html, body').animate({scrollTop: $(_scroll).offset().top - 130}, 100);
      }
  });

})(jQuery);

}


