angular.module('myApp')
  .directive('svgDot', function() {
    return {
      restrict: 'E',
      template: '<svg x="0px" y="0px" width="870px" height="399px" viewBox="0 0 870 399" style="enable-background:new 0 0 870 399;"xml:space="preserve"><style type="text/css">.style12-0 {fill: #6CFFC6;}.style12-1 {fill: #FF5539;}.style12-2 {fill: #226EFF;}.style12-3 {fill: #D06E00;}.style12-4 {fill: #7312B2;}.style12-5 {fill: #4D4B45;}</style><defs></defs><circle class="style12-0" cx="762" cy="135" r="75" /><ellipse class="style12-1" cx="405.5" cy="296.5" rx="82.5" ry="82.5" /><circle class="style12-2" cx="612" cy="185" r="75" /><circle class="style12-3" cx="267" cy="135" r="75" /><circle class="style12-4" cx="426" cy="75" r="75" /><ellipse class="style12-1" cx="487.8" cy="214.3" rx="29.2" ry="29.7" /><ellipse class="style12-2" cx="55.7" cy="240.5" rx="55.7" ry="55.5" /><circle class="style12-0" cx="186" cy="323" r="75" /><ellipse class="style12-5" cx="778.7" cy="310.6" rx="91.3" ry="88.4" /><circle class="style12-5" cx="236" cy="244" r="75" /><circle class="style12-3" cx="625.5" cy="270.5" r="37.5" /></svg>'
    };
  });
