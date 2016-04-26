angular.module('myApp')
  .controller('wakaCtrl', function($scope, wakaService) {

    wakaService.getWaka().then( function(waka) {
      $scope.waka = waka;
    });


  });
