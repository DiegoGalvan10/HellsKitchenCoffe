$(document).ready(function () {
  var ventana = $(window);
  var windowWidth = ventana.width();
  ventana.scroll(function () {
    if (windowWidth > 800) {
      var scroll = ventana.scrollTop();

      $('header .textos').css({
        'transform': 'translate(0px,' + scroll / 3 + '%)'
      });

      $('.acerca-de article').css({
        'transform': 'translate(0px, -' + scroll / 5 + '%)'
      });
    }
  });

  ventana.resize(function() {
    if (windowWidth > 800) {
      $('.acerca-de article').css({
        'transform': 'translate(0px, 0px)'
      });
    }
  })
});
