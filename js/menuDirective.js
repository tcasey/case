angular.module('myApp')
  .directive('tcMenu', function () {
    return{
      scope: {
        menuOptions: '',
      },
      controller: 'mainCtrl',
      templateUrl: 'templates/menu.html',
      restrict: 'E'
    };
  })
