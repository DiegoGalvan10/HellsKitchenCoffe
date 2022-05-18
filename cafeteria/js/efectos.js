$(document).ready(function () {
  $(".menu a").each(function (index, elemento) {
    $(this).css({
      top: "-200px",
    });
    $(this).animate(
      {
        top: "0",
      },
    );
  });

  if ($(window).width() > 800) {
    $("header .textos").css({
      opacity: 0,
      marginTop: 0,
    });
    $("header .textos").animate(
      {
        opacity: 1,
        marginTop: "-52px",
      },
      1500
    );
  }

  var acercaDe = $("#acerca-de").offset().top,
    menu = $("#platillos").offset().top,
    galeria = $("#galeria").offset().top,
    ubicacion = $("#ubicacion").offset().top;

  $("#btn-acerca-de").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 580,
      },
      500
    );
  });

  $("#btn-menu").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: menu - 40,
    });
  });

  $("#btn-galeria").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: galeria - 40,
    });
  });

  $("#btn-ubicacion").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: ubicacion - 60,
    });
  });
});
