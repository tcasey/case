angular.module('myApp')
  .controller('blogCtrl', function($scope, contentful) {

    contentful
     .entries()
     .then(

       // Success handler
       function(response){
         var entries = response.data.items;
         console.log(entries);
       },

       // Error handler
       function(response){
         console.log('Oops, error ' + response.status);
       }
     );

  });
