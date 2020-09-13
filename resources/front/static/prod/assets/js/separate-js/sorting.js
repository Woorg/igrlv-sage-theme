(function ($) {

  $('#filter').submit(function (e) {
    e.preventDefault();
    var that = $(this);
    $.ajax({
      url: ajaxurl, // обработчик
      data: that.serialize(), // данные
      type: that.attr('method'), // тип запроса
      beforeSend: function(xhr){
        that.find('button').text('Загружаю...'); // изменяем текст кнопки
      },
      error: function () {

      },
      success: function (data){
        that.find('button').text('Применить фильтр'); // возвращаеи текст кнопки
        $('.main__articles').html(data);
      }
    });
  });

})(jQuery);