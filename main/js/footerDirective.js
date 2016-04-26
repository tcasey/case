angular.module('myApp')
  .directive('tcFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'html/templates/footer.html',
      scope: {
        text: "@"
      }

    };
  });
