angular.module('myApp')
  .controller('mainCtrl', function($scope) {

    $('#icon-wrap-2').click(function() {
      if ($('#icon-wrap-2').hasClass('toClose')) {
        $('#icon-wrap-2').removeClass('toClose').addClass('toOpen');
      } else {
        $('#icon-wrap-2').removeClass('toOpen').addClass('toClose');
      }
    });

    $('.menu-nav').click(function() {
      $('#icon-wrap-2').removeClass('toClose').addClass('toOpen');
    })

    $('#menu-wrapper').click(function() {
      $('menu-nav').show();
    })
    $('#menu-wrapper').on('click', function() {
      $('.menu-nav').slideToggle(500);
    });

  });
