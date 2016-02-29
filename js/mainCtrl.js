angular.module('myApp')
  .controller('mainCtrl', function($scope) {
    $('#icon-wrap-2').click(function(){
      if ($(this).hasClass('toClose')){
        $(this).removeClass('toClose').addClass('toOpen');
      } else {
        $(this).removeClass('toOpen').addClass('toClose');
      }
    });
    $('#icon-wrap-2').click(function() {
      $('menu-nav').show();
    })
    $('#icon-wrap-2').on('click', function(){
  $('.menu-nav').slideToggle(500);
 });
  });
