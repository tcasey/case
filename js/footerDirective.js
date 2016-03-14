angular.module('myApp')
  .directive('tcFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/footer.html',
      scope: {
        text: "@"
      }

    };
  });
