angular.module('myApp', ['ui.router', 'sap.imageloader'])

.config(function($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider){

  //Enable cross domain calls
   $httpProvider.defaults.useXDomain = true;

  var scrollContent = function() {
     window.scrollTo(0, 0);
   };

 $urlRouterProvider
  .otherwise('home');

 $stateProvider

 .state('home', {
		 url: '/home',
		 templateUrl: 'html/templates/home.html',
     onEnter: scrollContent
 })
 .state('bio',{
		 url: '/bio',
		 templateUrl: 'html/templates/bio.html',
     onEnter: scrollContent
 })
 .state('projects',{
		 url: '/projects',
		 templateUrl: 'html/templates/projects.html',
     onEnter: scrollContent
 })
 .state('skills',{
		 url: '/skills',
		 templateUrl: 'html/templates/skills.html',
     onEnter: scrollContent
 })

 .state('bike',{
    url: '/projects/road-bike-junkie',
    templateUrl: 'html/templates/hex/roadBike.html',
    onEnter: scrollContent
 })
 .state('h+c',{
    url: '/projects/h+c',
    templateUrl: 'html/templates/hex/hotCold.html',
    onEnter: scrollContent
 })
 .state('ncaa',{
    url: '/projects/ncaa',
    templateUrl: 'html/templates/hex/ncaa.html',
    onEnter: scrollContent
 })
 .state('karma',{
    url: '/projects/karma',
    templateUrl: 'html/templates/hex/karma.html',
    onEnter: scrollContent
 })
 .state('junior',{
    url: '/projects/junior',
    templateUrl: 'html/templates/hex/junior.html',
    onEnter: scrollContent
 })
 .state('do-it',{
    url: '/projects/do-it',
    templateUrl: 'html/templates/hex/doIt.html',
    onEnter: scrollContent
 })
 .state('smart-shopper',{
    url: '/projects/smart-shopper',
    templateUrl: 'html/templates/hex/hex7Content.html',
    onEnter: scrollContent
 })
 .state('twitter-clone',{
    url: '/projects/twitter-clone',
    templateUrl: 'html/templates/hex/twitterClone.html',
    onEnter: scrollContent
 })
 .state('hadouken',{
    url: '/projects/hadouken',
    templateUrl: 'html/templates/hex/hadouken.html',
    onEnter: scrollContent
 })
 .state('golf',{
    url: '/projects/golf',
    templateUrl: 'html/templates/hex/golf.html',
    onEnter: scrollContent
 })
 .state('fizz-buzz',{
    url: '/projects/fizz-buzz',
    templateUrl: 'html/templates/hex/hex11Content.html',
    onEnter: scrollContent
 })
 .state('dots',{
    url: '/projects/dots',
    templateUrl: 'html/templates/hex/dots.html',
    onEnter: scrollContent
 })
 .state('memory',{
    url: '/projects/memory',
    templateUrl: 'html/templates/hex/memory.html',
    onEnter: scrollContent
 })
 .state('nerd',{
    url: '/projects/nerd',
    templateUrl: 'html/templates/hex/nerd.html',
    onEnter: scrollContent
 })
 .state('react-material',{
    url: '/projects/react-material',
    templateUrl: 'html/templates/hex/reactMaterial.html',
    onEnter: scrollContent
 })
 .state('office',{
    url: '/projects/office-quiz',
    templateUrl: 'html/templates/hex/officeQuiz.html',
    onEnter: scrollContent
 })

 .state('waka',{
		 url: '/waka',
		 templateUrl: 'html/templates/waka.html',
		 controller: 'wakaCtrl',
     onEnter: scrollContent
 })

	//  $locationProvider.html5Mode(true);
});
