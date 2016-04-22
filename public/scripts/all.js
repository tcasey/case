angular.module('myApp', ['ui.router', 'ngAnimate', 'ngTouch'])

.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){

 $urlRouterProvider
  .otherwise('home');

 $stateProvider

 .state('home', {
		 url: '/home',
		 templateUrl: 'html/templates/templates/home.html',
 })
 .state('bio',{
		 url: '/bio',
		 templateUrl: 'html/templates/templates/bio.html',
 })
 .state('projects',{
		 url: '/projects',
		 templateUrl: 'html/templates/templates/projects.html',
 })
 .state('skills',{
		 url: '/skills',
		 templateUrl: 'html/templates/templates/skillset.html',
 })
 .state('waka',{
		 url: '/waka',
		 templateUrl: 'html/templates/templates/waka.html',
		 controller: 'wakaCtrl',
 });
	//  $locationProvider.html5Mode(true);
}]);

angular.module('myApp')
  .directive('tcFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'html/templates/templates/footer.html',
      scope: {
        text: "@"
      }

    };
  });

angular.module('myApp')
  .directive('tcHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'html/templates/templates/header.html',
      scope: {
        text: "@"
      }

    };
  });

angular.module('myApp')
  .controller('mainCtrl', ["$scope", function($scope) {

    $('#icon-wrap-2').click(function() {
      if ($('#icon-wrap-2').hasClass('toClose')) {
        $('#icon-wrap-2').removeClass('toClose').addClass('toOpen');
      } else {
        $('#icon-wrap-2').removeClass('toOpen').addClass('toClose');
      }
    });

    $('.menu-nav').click(function() {
      $('#icon-wrap-2').removeClass('toClose').addClass('toOpen');
    });

    $('#menu-wrapper').click(function() {
      $('menu-nav').show();
    });
    $('#menu-wrapper').on('click', function() {
      $('.menu-nav').slideToggle(500);
    });

  }]);

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

angular.module('myApp')
  .directive('tcTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'html/templates/templates/title.html',
      scope: {
        text: "@"
      },

      // link: function(scope, element, attrs) {
      //   $('.menu-nav').mouseenter(function() {
      //
      //   })
      //
      //
      // }

    };
  });

angular.module('myApp')
  .controller('wakaCtrl', ["$scope", "wakaService", function($scope, wakaService) {

    wakaService.getWaka().then( function(waka) {
      $scope.waka = waka;
    });


  }]);

angular.module('myApp')
  .service('wakaService', ["$http", function($http){

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

  }]);

// HEX CTRL 10
function tabsSwipeCtrlFn10() {
    var responsive = this;
    responsive.ngIncludeTemplates = [
      {
        index: 0,
        name: 'first',
        url: 'html/templates/hex/hex10Image.html'
      },
      {
        index: 1,
        name: 'second',
        url: 'html/templates/hex/hex10Content.html'
      },
    ];

    responsive.selectPage = selectPage;

    /**
    * Initialize with the first page opened
    */
    responsive.ngIncludeSelected = responsive.ngIncludeTemplates[0];

    function selectPage(indexSelected) {
        if (responsive.ngIncludeTemplates[indexSelected].index > responsive.ngIncludeSelected.index) {
            responsive.moveToLeft = false;
        } else {
            responsive.moveToLeft = true;
        }
        responsive.ngIncludeSelected = responsive.ngIncludeTemplates[indexSelected];
    }
}

angular.module('myApp')
    .controller('hex10Ctrl', tabsSwipeCtrlFn10);

// HEX CTRL 11
function tabsSwipeCtrlFn11() {
    var responsive = this;
    responsive.ngIncludeTemplates = [
      {
        index: 0,
        name: 'first',
        url: 'html/templates/hex/hex11Image.html'
      },
      {
        index: 1,
        name: 'second',
        url: 'html/templates/hex/hex11Content.html'
      },
    ];

    responsive.selectPage = selectPage;

    /**
    * Initialize with the first page opened
    */
    responsive.ngIncludeSelected = responsive.ngIncludeTemplates[0];

    function selectPage(indexSelected) {
        if (responsive.ngIncludeTemplates[indexSelected].index > responsive.ngIncludeSelected.index) {
            responsive.moveToLeft = false;
        } else {
            responsive.moveToLeft = true;
        }
        responsive.ngIncludeSelected = responsive.ngIncludeTemplates[indexSelected];
    }
}

angular.module('myApp')
    .controller('hex11Ctrl', tabsSwipeCtrlFn11);

// HEX CTRL 12
function tabsSwipeCtrlFn12() {
    var responsive = this;
    responsive.ngIncludeTemplates = [
      {
        index: 0,
        name: 'first',
        url: 'html/templates/hex/hex12Image.html'
      },
      {
        index: 1,
        name: 'second',
        url: 'html/templates/hex/hex12Content.html'
      },
    ];

    responsive.selectPage = selectPage;

    /**
    * Initialize with the first page opened
    */
    responsive.ngIncludeSelected = responsive.ngIncludeTemplates[0];

    function selectPage(indexSelected) {
        if (responsive.ngIncludeTemplates[indexSelected].index > responsive.ngIncludeSelected.index) {
            responsive.moveToLeft = false;
        } else {
            responsive.moveToLeft = true;
        }
        responsive.ngIncludeSelected = responsive.ngIncludeTemplates[indexSelected];
    }
}

angular.module('myApp')
    .controller('hex12Ctrl', tabsSwipeCtrlFn12);

// HEX CTRL 13
function tabsSwipeCtrlFn13() {
    var responsive = this;
    responsive.ngIncludeTemplates = [
      {
        index: 0,
        name: 'first',
        url: 'html/templates/hex/hex13Image.html'
      },
      {
        index: 1,
        name: 'second',
        url: 'html/templates/hex/hex13Content.html'
      },
    ];

    responsive.selectPage = selectPage;

    /**
    * Initialize with the first page opened
    */
    responsive.ngIncludeSelected = responsive.ngIncludeTemplates[0];

    function selectPage(indexSelected) {
        if (responsive.ngIncludeTemplates[indexSelected].index > responsive.ngIncludeSelected.index) {
            responsive.moveToLeft = false;
        } else {
            responsive.moveToLeft = true;
        }
        responsive.ngIncludeSelected = responsive.ngIncludeTemplates[indexSelected];
    }
}

angular.module('myApp')
    .controller('hex13Ctrl', tabsSwipeCtrlFn13);

// HEX CTRL 1
function tabsSwipeCtrlFn1() {
    var responsive = this;
    responsive.ngIncludeTemplates = [{
      index: 0,
      name: 'first',
      url: 'html/templates/hex/hex1Image.html'
    },
      {
        index: 1,
        name: 'second',
        url: 'html/templates/hex/hex1Content.html'
      }
    ];

    responsive.selectPage = selectPage;

    /**
    * Initialize with the first page opened
    */
    responsive.ngIncludeSelected = responsive.ngIncludeTemplates[0];

    function selectPage(indexSelected) {
        if (responsive.ngIncludeTemplates[indexSelected].index > responsive.ngIncludeSelected.index) {
            responsive.moveToLeft = false;
        } else {
            responsive.moveToLeft = true;
        }
        responsive.ngIncludeSelected = responsive.ngIncludeTemplates[indexSelected];
    }
}

angular.module('myApp')
    .controller('hex1Ctrl', tabsSwipeCtrlFn1);

// HEX CTRL 2
function tabsSwipeCtrlFn2() {
    var responsive = this;
    responsive.ngIncludeTemplates = [
      {
        index: 0,
        name: 'first',
        url: 'html/templates/hex/hex2Image.html'
      },
      {
        index: 1,
        name: 'second',
        url: 'html/templates/hex/hex2Content.html'
      },
    ];

    responsive.selectPage = selectPage;

    /**
    * Initialize with the first page opened
    */
    responsive.ngIncludeSelected = responsive.ngIncludeTemplates[0];

    function selectPage(indexSelected) {
        if (responsive.ngIncludeTemplates[indexSelected].index > responsive.ngIncludeSelected.index) {
            responsive.moveToLeft = false;
        } else {
            responsive.moveToLeft = true;
        }
        responsive.ngIncludeSelected = responsive.ngIncludeTemplates[indexSelected];
    }
}

angular.module('myApp')
    .controller('hex2Ctrl', tabsSwipeCtrlFn2);

// HEX CTRL 3
function tabsSwipeCtrlFn3() {
    var responsive = this;
    responsive.ngIncludeTemplates = [
      {
        index: 0,
        name: 'first',
        url: 'html/templates/hex/hex3Image.html'
      },
      {
        index: 1,
        name: 'second',
        url: 'html/templates/hex/hex3Content.html'
      },
    ];

    responsive.selectPage = selectPage;

    /**
    * Initialize with the first page opened
    */
    responsive.ngIncludeSelected = responsive.ngIncludeTemplates[0];

    function selectPage(indexSelected) {
        if (responsive.ngIncludeTemplates[indexSelected].index > responsive.ngIncludeSelected.index) {
            responsive.moveToLeft = false;
        } else {
            responsive.moveToLeft = true;
        }
        responsive.ngIncludeSelected = responsive.ngIncludeTemplates[indexSelected];
    }
}

angular.module('myApp')
    .controller('hex3Ctrl', tabsSwipeCtrlFn3);

// HEX CTRL 4
function tabsSwipeCtrlFn4() {
    var responsive = this;
    responsive.ngIncludeTemplates = [
      {
        index: 0,
        name: 'first',
        url: 'html/templates/hex/hex4Image.html'
      },
      {
        index: 1,
        name: 'second',
        url: 'html/templates/hex/hex4Content.html'
      },
    ];

    responsive.selectPage = selectPage;

    /**
    * Initialize with the first page opened
    */
    responsive.ngIncludeSelected = responsive.ngIncludeTemplates[0];

    function selectPage(indexSelected) {
        if (responsive.ngIncludeTemplates[indexSelected].index > responsive.ngIncludeSelected.index) {
            responsive.moveToLeft = false;
        } else {
            responsive.moveToLeft = true;
        }
        responsive.ngIncludeSelected = responsive.ngIncludeTemplates[indexSelected];
    }
}

angular.module('myApp')
    .controller('hex4Ctrl', tabsSwipeCtrlFn4);

// HEX CTRL 5
function tabsSwipeCtrlFn5() {
    var responsive = this;
    responsive.ngIncludeTemplates = [
      {
        index: 0,
        name: 'first',
        url: 'html/templates/hex/hex5Image.html'
      },
      {
        index: 1,
        name: 'second',
        url: 'html/templates/hex/hex5Content.html'
      },
    ];

    responsive.selectPage = selectPage;

    /**
    * Initialize with the first page opened
    */
    responsive.ngIncludeSelected = responsive.ngIncludeTemplates[0];

    function selectPage(indexSelected) {
        if (responsive.ngIncludeTemplates[indexSelected].index > responsive.ngIncludeSelected.index) {
            responsive.moveToLeft = false;
        } else {
            responsive.moveToLeft = true;
        }
        responsive.ngIncludeSelected = responsive.ngIncludeTemplates[indexSelected];
    }
}

angular.module('myApp')
    .controller('hex5Ctrl', tabsSwipeCtrlFn5);

// HEX CTRL 6
function tabsSwipeCtrlFn6() {
    var responsive = this;
    responsive.ngIncludeTemplates = [
      {
        index: 0,
        name: 'first',
        url: 'html/templates/hex/hex6Image.html'
      },
      {
        index: 1,
        name: 'second',
        url: 'html/templates/hex/hex6Content.html'
      },
    ];

    responsive.selectPage = selectPage;

    /**
    * Initialize with the first page opened
    */
    responsive.ngIncludeSelected = responsive.ngIncludeTemplates[0];

    function selectPage(indexSelected) {
        if (responsive.ngIncludeTemplates[indexSelected].index > responsive.ngIncludeSelected.index) {
            responsive.moveToLeft = false;
        } else {
            responsive.moveToLeft = true;
        }
        responsive.ngIncludeSelected = responsive.ngIncludeTemplates[indexSelected];
    }
}

angular.module('myApp')
    .controller('hex6Ctrl', tabsSwipeCtrlFn6);

// HEX CTRL 7
function tabsSwipeCtrlFn7() {
    var responsive = this;
    responsive.ngIncludeTemplates = [
      {
        index: 0,
        name: 'first',
        url: 'html/templates/hex/hex7Image.html'
      },
      {
        index: 1,
        name: 'second',
        url: 'html/templates/hex/hex7Content.html'
      },
    ];

    responsive.selectPage = selectPage;

    /**
    * Initialize with the first page opened
    */
    responsive.ngIncludeSelected = responsive.ngIncludeTemplates[0];

    function selectPage(indexSelected) {
        if (responsive.ngIncludeTemplates[indexSelected].index > responsive.ngIncludeSelected.index) {
            responsive.moveToLeft = false;
        } else {
            responsive.moveToLeft = true;
        }
        responsive.ngIncludeSelected = responsive.ngIncludeTemplates[indexSelected];
    }
}

angular.module('myApp')
    .controller('hex7Ctrl', tabsSwipeCtrlFn7);

// HEX CTRL 8
function tabsSwipeCtrlFn8() {
    var responsive = this;
    responsive.ngIncludeTemplates = [
      {
        index: 0,
        name: 'first',
        url: 'html/templates/hex/hex8Image.html'
      },
      {
        index: 1,
        name: 'second',
        url: 'html/templates/hex/hex8Content.html'
      },
    ];

    responsive.selectPage = selectPage;

    /**
    * Initialize with the first page opened
    */
    responsive.ngIncludeSelected = responsive.ngIncludeTemplates[0];

    function selectPage(indexSelected) {
        if (responsive.ngIncludeTemplates[indexSelected].index > responsive.ngIncludeSelected.index) {
            responsive.moveToLeft = false;
        } else {
            responsive.moveToLeft = true;
        }
        responsive.ngIncludeSelected = responsive.ngIncludeTemplates[indexSelected];
    }
}

angular.module('myApp')
    .controller('hex8Ctrl', tabsSwipeCtrlFn8);

// HEX CTRL 9
function tabsSwipeCtrlFn9() {
    var responsive = this;
    responsive.ngIncludeTemplates = [
      {
        index: 0,
        name: 'first',
        url: 'html/templates/hex/hex9Image.html'
      },
      {
        index: 1,
        name: 'second',
        url: 'html/templates/hex/hex9Content.html'
      },
    ];

    responsive.selectPage = selectPage;

    /**
    * Initialize with the first page opened
    */
    responsive.ngIncludeSelected = responsive.ngIncludeTemplates[0];

    function selectPage(indexSelected) {
        if (responsive.ngIncludeTemplates[indexSelected].index > responsive.ngIncludeSelected.index) {
            responsive.moveToLeft = false;
        } else {
            responsive.moveToLeft = true;
        }
        responsive.ngIncludeSelected = responsive.ngIncludeTemplates[indexSelected];
    }
}

angular.module('myApp')
    .controller('hex9Ctrl', tabsSwipeCtrlFn9);
