angular.module('myApp')
  .directive('tcHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/header.html',
      scope: {
        text: "@"
      }

    };
  });
