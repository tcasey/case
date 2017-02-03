angular.module('myApp')
  .directive('svgLeft', function() {
    return {
      restrict: 'E',
      template: '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">'+
                  '<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>'+
                  '<path d="M0 0h24v24H0z" fill="none"/>'+
                '</svg>'
    };
  });
