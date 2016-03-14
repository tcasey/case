angular.module('myApp')
  .directive('tcTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/title.html',
      scope: {
        text: "@"
      },

      // link: function(scope, element, attrs) {
      //   $('.menu-nav').mouseenter(function() {
      //
      //   })
      //
      //
      // }

    };
  });
