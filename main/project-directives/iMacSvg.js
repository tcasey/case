angular.module('myApp')
  .directive('svgImac', function() {
    return {
      restrict: 'E',
      template: '<svg id="Layer_1" x="0px" y="0px" viewBox="0 0 620 338" enable-background="new 0 0 620 338" xml:space="preserve"><g><g id="screen-outside"><g><path fill="#313742" d="M458.2 80.5H181.8c-6.5 0-11.8 5.3-11.8 11.8V251h300V92.3C470 85.8 464.7 80.5 458.2 80.5z"></path></g></g><g id="camera"><g><circle fill="#464B54" cx="320" cy="87.2" r="2.8"></circle></g></g><g id="screen-main"><g><rect x="183" y="93.1" fill="#444" width="274" height="144.1"></rect></g></g><g id=""><g id="screen-background"><rect x="183" y="105.1" fill="#FFFFFF" width="274" height="132.1"></rect><image x="130" y="93.1" width="274" height="144.2" transform="scale(1.2,1)" /><!--  xlink:href="../../web-img/golf.jpg"--></g></g><g id="screen-bottom"><g><path fill="#DCDFE2" d="M170 245.4V266c0 6.5 5.3 11.8 11.8 11.8h276.3c6.5 0 11.8-5.3 11.8-11.8v-20.5H170z"></path></g></g><g id="stand"><g><path fill="#DCDFE2" d="M355.3 303.4c-0.7-3.7-4-34.2-4-34.2h-62.7c0 0-3.3 30.5-4 34.2c-1.6 8.6-4.6 9.6-4.6 9.6h79.7 C359.9 312.9 356.9 312 355.3 303.4z"></path></g></g><g id="bottom-button"><g><circle fill="#313742" cx="320" cy="263.2" r="5.8"></circle></g></g><g id="stand-bottom"><g><rect x="267.9" y="311" fill="#D1D6DA" width="105" height="5.1"></rect></g></g></g><g></g></svg>'
    };
  });
