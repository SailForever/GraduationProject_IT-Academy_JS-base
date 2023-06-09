/* когда окно браузера будет загружено - выполнится следующая функция */
$(
  /* анонимная функция*/
  function () {
    /* добавляем к событию scroll окна браузера следующую функцию */
    $(window).scroll(
      function () {
        /* проверяем положение полосы прокрутки
         * если оно более чем на 100 px от верха окна браузера
         */
        if ($(this).scrollTop() > 100) {
          /*елемент с классом scroll-up появляется */
          $(".scroll-up").fadeIn();
        } else {
          /* в противном случае елемент с классом scroll-up исчезает */
          $(".scroll-up").fadeOut();
        }
      }
    )

    /* добавляем к событию click елемента с классом 'scroll-up' следующую функцию */
    $(".scroll-up").click(

      function () {
        /* прокрутка окна до позиции 0px, в течении 500ms = 0,5 секунд */
        $("body,html").animate({ scrollTop: 0 }, 500);
      }
    );
  }
)