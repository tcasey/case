angular.module('myApp')
  .directive('tcHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'html/templates/templates/header.html',
      scope: {
        text: "@"
      }

    };
  });
