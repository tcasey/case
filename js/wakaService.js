angular.module('myApp')
  .service('wakaService', function($http){

  var baseUrl = 'https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=1183f7db-a10f-465e-863c-ac6518941a6f';

    this.getWaka = function() {
      return $http({
        method: 'GET',
        url: baseUrl,

      })
      .then(function (response) {
        console.log(response);
        return response.data;
      });
    };

  });
