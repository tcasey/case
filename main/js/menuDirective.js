angular.module('myApp')
  .directive('tcMenu', function() {
    return {
      restrict: 'E',
      controller: 'mainCtrl',
      templateUrl: 'html/templates/templates/menu.html',
      scope: {
        info: '=',
        text: "@",
        whatever: "@"
      }
    }
  })
