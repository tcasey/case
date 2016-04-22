angular.module('myApp')
  .directive('tcFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'html/templates/templates/footer.html',
      scope: {
        text: "@"
      }

    };
  });
