angular.module('myApp')
  .directive('svgMaterial', function() {
    return {
      restrict: 'E',
      template: '  <svg width="332px" height="359px" viewBox="-285 -402 332 359" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><ellipse id="path-1" cx="166.013348" cy="179.598663" rx="71" ry="165.5"></ellipse><mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="142" height="331" fill="white"><use xlink:href="#path-1"></use></mask><ellipse id="path-3" cx="166.013348" cy="179.598663" rx="71" ry="165.5"></ellipse><mask id="mask-4" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="142" height="331" fill="white"><use xlink:href="#path-3"></use></mask><ellipse id="path-5" cx="166.013348" cy="179.598663" rx="71" ry="165.5"></ellipse><mask id="mask-6" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="142" height="331" fill="white"><use xlink:href="#path-5"></use></mask></defs><g id="React" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-285.000000, -402.000000)"><use id="Oval" stroke="#5ADAFD" mask="url(#mask-2)" stroke-width="36" transform="translate(166.013348, 179.598663) rotate(-30.000000) translate(-166.013348, -179.598663) " xlink:href="#path-1"></use><use id="Oval" stroke="#5ADAFD" mask="url(#mask-4)" stroke-width="36" transform="translate(166.013348, 179.598663) rotate(90.000000) translate(-166.013348, -179.598663) " xlink:href="#path-3"></use><use id="Oval" stroke="#5ADAFD" mask="url(#mask-6)" stroke-width="36" transform="translate(166.013348, 179.598663) rotate(30.000000) translate(-166.013348, -179.598663) " xlink:href="#path-5"></use><circle id="Oval-2" fill="#5ADAFD" cx="166.5" cy="179.5" r="28.5"></circle></g></svg>'
    };
  });
