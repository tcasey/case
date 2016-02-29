angular.module('myApp')
  .controller('mainCtrl', function($scope) {
    $('#menu-wrapper').click(function(){
      if ($(this).hasClass('toClose')){
        $(this).removeClass('toClose').addClass('toOpen');
      } else {
        $(this).removeClass('toOpen').addClass('toClose');
      }
    });
    $('#menu-wrapper').click(function() {
      $('menu-nav').show();
    })
    $('#menu-wrapper').on('click', function(){
  $('.menu-nav').slideToggle(500);
 });
  });
