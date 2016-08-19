angular.module('myApp')
  .controller('mainCtrl', ['$scope', 'ImageLoader', function($scope, ImageLoader) {
    
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

    // hex 1 images
  var bike_img_1 = 'web-img/portfolio/road-bike-junkie/about.png';
      ImageLoader.loadImage(bike_img_1).then(function(loadedSrc) {
      $scope.bike1 = loadedSrc;
    });
  var bike_img_2 = 'web-img/portfolio/road-bike-junkie/general.png';
      ImageLoader.loadImage(bike_img_2).then(function(loadedSrc) {
      $scope.bike2 = loadedSrc;
    });
    // hex 2 images
  var hc_img_1 = 'web-img/portfolio/h+c/how-to.png';
      ImageLoader.loadImage(hc_img_1).then(function(loadedSrc) {
      $scope.hc1 = loadedSrc;
    });
  var hc_img_2 = 'web-img/portfolio/h+c/game.png';
      ImageLoader.loadImage(hc_img_2).then(function(loadedSrc) {
      $scope.hc2 = loadedSrc;
    });
    // hex 3 images
  var ncaa_img_1 = 'web-img/portfolio/ncaa/landing.png';
      ImageLoader.loadImage(ncaa_img_1).then(function(loadedSrc) {
      $scope.ncaa1 = loadedSrc;
    });
  var ncaa_img_2 = 'web-img/portfolio/ncaa/questions.png';
      ImageLoader.loadImage(ncaa_img_2).then(function(loadedSrc) {
      $scope.ncaa2 = loadedSrc;
    });
  var ncaa_img_3 = 'web-img/portfolio/ncaa/feedback.png';
      ImageLoader.loadImage(ncaa_img_3).then(function(loadedSrc) {
      $scope.ncaa3 = loadedSrc;
    });
  var ncaa_img_4 = 'web-img/portfolio/ncaa/score.png';
      ImageLoader.loadImage(ncaa_img_4).then(function(loadedSrc) {
      $scope.ncaa4 = loadedSrc;
    });
    // hex 4 images
  var karma_img_1 = 'web-img/portfolio/karma/CTA.png';
      ImageLoader.loadImage(karma_img_1).then(function(loadedSrc) {
      $scope.karma1 = loadedSrc;
    });
  var karma_img_2 = 'web-img/portfolio/karma/simplicity.png';
      ImageLoader.loadImage(karma_img_2).then(function(loadedSrc) {
      $scope.karma2 = loadedSrc;
    });
    // hex 5 images
  var junior_img_1 = 'web-img/portfolio/junior/CTA.png';
      ImageLoader.loadImage(junior_img_1).then(function(loadedSrc) {
      $scope.junior1 = loadedSrc;
    });
  var junior_img_2 = 'web-img/portfolio/junior/about.png';
      ImageLoader.loadImage(junior_img_2).then(function(loadedSrc) {
      $scope.junior2 = loadedSrc;
    });
  var junior_img_3 = 'web-img/portfolio/junior/skills.png';
      ImageLoader.loadImage(junior_img_3).then(function(loadedSrc) {
      $scope.junior3 = loadedSrc;
    });
  var junior_img_4 = 'web-img/portfolio/junior/work.png';
      ImageLoader.loadImage(junior_img_4).then(function(loadedSrc) {
      $scope.junior4 = loadedSrc;
    });
    // hex 6 images
  var todo_img_1 = 'web-img/portfolio/todo/app.png';
      ImageLoader.loadImage(todo_img_1).then(function(loadedSrc) {
      $scope.todo1 = loadedSrc;
    });
    // hex 7 images
  var shopper_img_1 = 'web-img/portfolio/smart-shopper/shopper.png';
      ImageLoader.loadImage(shopper_img_1).then(function(loadedSrc) {
      $scope.shopper1 = loadedSrc;
    });
    // hex 8 images
  var twitter_img_1 = 'web-img/portfolio/twitter-clone/app.png';
      ImageLoader.loadImage(twitter_img_1).then(function(loadedSrc) {
      $scope.twitter1 = loadedSrc;
    });
    // hex 9 images
  var ryu_img_1 = 'web-img/portfolio/street-fighter/street.png';
      ImageLoader.loadImage(ryu_img_1).then(function(loadedSrc) {
      $scope.ryu1 = loadedSrc;
    });
  var ryu_img_2 = 'web-img/portfolio/street-fighter/pose.png';
      ImageLoader.loadImage(ryu_img_2).then(function(loadedSrc) {
      $scope.ryu2 = loadedSrc;
    });
  var ryu_img_3 = 'web-img/portfolio/street-fighter/hadouken.png';
      ImageLoader.loadImage(ryu_img_3).then(function(loadedSrc) {
      $scope.ryu3 = loadedSrc;
    });
    // hex 10 images
    var golf_img_1 = 'web-img/portfolio/golf/home.png';
        ImageLoader.loadImage(golf_img_1).then(function(loadedSrc) {
        $scope.golf1 = loadedSrc;
      });
    var golf_img_2 = 'web-img/portfolio/golf/bio.png';
        ImageLoader.loadImage(golf_img_2).then(function(loadedSrc) {
        $scope.golf2 = loadedSrc;
      });
    // hex 11 images
    var fizz_buzz_img = 'web-img/portfolio/fizz-buzz/app.png';
        ImageLoader.loadImage(fizz_buzz_img).then(function(loadedSrc) {
        $scope.imageSrc = loadedSrc;
      });
    // hex 12 images
    var dot_img = 'web-img/portfolio/dots/app.png';
        ImageLoader.loadImage(dot_img).then(function(loadedSrc) {
        $scope.dotsSrc = loadedSrc;
      });
      // hex 13 images
    var memory_img_1 = 'web-img/portfolio/memory-game/general.png';
        ImageLoader.loadImage(memory_img_1).then(function(loadedSrc) {
        $scope.memory1 = loadedSrc;
      });
    var memory_img_2 = 'web-img/portfolio/memory-game/select.png';
        ImageLoader.loadImage(memory_img_2).then(function(loadedSrc) {
        $scope.memory2 = loadedSrc;
      });
    var memory_img_3 = 'web-img/portfolio/memory-game/selected.png';
        ImageLoader.loadImage(memory_img_3).then(function(loadedSrc) {
        $scope.memory3 = loadedSrc;
      });
    var memory_img_4 = 'web-img/portfolio/memory-game/finished-game.png';
        ImageLoader.loadImage(memory_img_4).then(function(loadedSrc) {
        $scope.memory4 = loadedSrc;
      });
    // hex 14 images
    var pre_img_1 = 'web-img/portfolio/pre-course/login.png';
        ImageLoader.loadImage(pre_img_1).then(function(loadedSrc) {
        $scope.pre1 = loadedSrc;
      });
    var pre_img_2 = 'web-img/portfolio/pre-course/test.png';
        ImageLoader.loadImage(pre_img_2).then(function(loadedSrc) {
        $scope.pre2 = loadedSrc;
      });
    var pre_img_3 = 'web-img/portfolio/pre-course/assessment.png';
        ImageLoader.loadImage(pre_img_3).then(function(loadedSrc) {
        $scope.pre3 = loadedSrc;
      });
    var pre_img_4 = 'web-img/portfolio/pre-course/radar.png';
        ImageLoader.loadImage(pre_img_4).then(function(loadedSrc) {
        $scope.pre4 = loadedSrc;
      });

}]);
