angular.module('myApp')
  .directive('svgLogo', function() {
    return {
      restrict: 'E',
      template:   '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="220.2px" height="260.2px" viewBox="0 0 22.2 26.2" style="enable-background:new 0 0 22.2 26.2;" xml:space="preserve">'+
                    '<defs>'+
                      '<linearGradient id="Gradient" x1="0%" y1="0%" x2="0" y2="100%">'+
                        '<stop offset="0%" stop-color="#DBE8FF">'+
                          '<animate attributeName="stop-color" values="#DBE8FF;#8fb9ff;#8fb9ff;#8fb9ff;#8fb9ff;#8fb9ff;#DBE8FF;" dur="7s" repeatCount="indefinite" />'+
                        '</stop>'+
                        '<stop offset="50%" stop-color="#DBE8FF">'+
                          '<animate attributeName="stop-color" values="#DBE8FF;#DBE8FF;#8fb9ff;#8fb9ff;#8fb9ff;#DBE8FF;#DBE8FF;" dur="7s" repeatCount="indefinite" />'+
                        '</stop>'+
                        '<stop offset="100%" stop-color="#DBE8FF">'+
                          '<animate attributeName="stop-color" values="#8fb9ff;#DBE8FF;#DBE8FF;#8fb9ff;#DBE8FF;#DBE8FF;#8fb9ff;" dur="7s" repeatCount="indefinite" />'+
                        '</stop>'+
                      '</linearGradient>'+
                    '</defs>'+
                    '<g transform="translate(0.000000,1044.000000) scale(0.100000,-0.100000)">'+
                      '<path class="st0" fill="url(#Gradient)" d="M114,10438.3c3.6-1.9,7.7-4.6,25.1-15.7c19.5-12.5,35.3-22.6,50.1-31.8c6.6-4.1,13.9-8.7,16.1-10.2c4-2.6,13.5-8.5,15.7-9.7c0.7-0.4,1-0.7,0.9-1c-0.1-0.2-0.3-30.2-0.3-66.6c-0.3-65.7-0.3-66.2-0.8-66.6c-0.3-0.2-2-1.3-3.7-2.5c-1.8-1.2-9.1-5.8-16.5-10.5c-45.4-29-66.2-42.1-70.4-44.4c-2.7-1.5-3.4-1.6-3.8-0.9c-0.5,1.1-0.3,175.6,0.2,176c0.3,0.2,18.7-11.1,28.2-17.4c2.9-1.9,3.2-2.1,3.3-3c0.1-0.5,0.2-10.5,0.3-22.1c0.1-11.6,0.2-21.9,0.3-22.9l0.1-1.7l3.6,1.9c2,1.1,8.6,4.7,14.8,8.2l11.2,6.3l-0.1,23.6l-0.1,23.6l-10,6.3c-5.4,3.5-18.6,11.8-29.2,18.5c-21.6,13.8-31.9,20.2-35.6,22.4l-2.5,1.5l-1.1-0.6c-2.1-1.1-6.4-3.8-18.1-11.1c-14.3-9-45.1-28.4-53-33.4l-5.9-3.6l0.1-23.6l0.1-23.6l11.4-6.3c6.3-3.5,13-7.2,14.8-8.2l3.3-1.8v4.9c0.3,40.2,0.3,42.1,0.8,42.5c0.9,0.7,30.7,19.9,31.1,20c0.3,0.2,0.4-0.2,0.6-3.7c0.3-5.1,0.3-170.9,0-172.1c-0.1-0.7-0.3-1-0.6-1c-0.7,0-5.8,2.7-11.1,6.1c-7,4.4-36.1,23-47.6,30.4c-5.3,3.5-10.9,7-12.3,7.8c-1.5,0.8-7.2,4.4-12.8,8l-10,6.5l-0.2,2.1c-0.1,1.2-0.2,31.2-0.3,66.8l-0.1,64.8l1.9,1.2c1,0.7,5.4,3.4,9.8,6.2c11.9,7.6,20.8,13.3,33.7,21.4c6.4,4.1,20.4,12.9,31,19.6c29.9,18.9,33.4,21.1,34.3,21.1C111.1,10439.7,112.5,10439,114,10438.3z" />'+
                    '</g>'+
                  '</svg>'
    };
  });
