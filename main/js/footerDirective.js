angular.module('myApp')
  .directive('tcFooter', function() {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'html/templates/footer.html'
    };
  });
