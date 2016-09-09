angular.module('myApp', ['ui.router', 'sap.imageloader'])

.config(function($urlRouterProvider, $stateProvider, $locationProvider){

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
		 templateUrl: 'html/templates/skillset.html',
     onEnter: scrollContent
 })

 .state('bike',{
    url: '/projects/road-bike-junkie',
    templateUrl: 'html/templates/hex/hex1Content.html',
    onEnter: scrollContent
 })
 .state('h+c',{
    url: '/projects/h+c',
    templateUrl: 'html/templates/hex/hex2Content.html',
    onEnter: scrollContent
 })
 .state('ncaa',{
    url: '/projects/ncaa',
    templateUrl: 'html/templates/hex/hex3Content.html',
    onEnter: scrollContent
 })
 .state('karma',{
    url: '/projects/karma',
    templateUrl: 'html/templates/hex/hex4Content.html',
    onEnter: scrollContent
 })
 .state('junior',{
    url: '/projects/junior',
    templateUrl: 'html/templates/hex/hex5Content.html',
    onEnter: scrollContent
 })
 .state('do-it',{
    url: '/projects/do-it',
    templateUrl: 'html/templates/hex/hex6Content.html',
    onEnter: scrollContent
 })
 .state('smart-shopper',{
    url: '/projects/smart-shopper',
    templateUrl: 'html/templates/hex/hex7Content.html',
    onEnter: scrollContent
 })
 .state('twitter-clone',{
    url: '/projects/twitter-clone',
    templateUrl: 'html/templates/hex/hex8Content.html',
    onEnter: scrollContent
 })
 .state('hadouken',{
    url: '/projects/hadouken',
    templateUrl: 'html/templates/hex/hex9Content.html',
    onEnter: scrollContent
 })
 .state('golf',{
    url: '/projects/golf',
    templateUrl: 'html/templates/hex/hex10Content.html',
    onEnter: scrollContent
 })
 .state('fizz-buzz',{
    url: '/projects/fizz-buzz',
    templateUrl: 'html/templates/hex/hex11Content.html',
    onEnter: scrollContent
 })
 .state('dots',{
    url: '/projects/dots',
    templateUrl: 'html/templates/hex/hex12Content.html',
    onEnter: scrollContent
 })
 .state('memory',{
    url: '/projects/memory',
    templateUrl: 'html/templates/hex/hex13Content.html',
    onEnter: scrollContent
 })
 .state('nerd',{
    url: '/projects/nerd',
    templateUrl: 'html/templates/hex/hex14Content.html',
    onEnter: scrollContent
 })
 .state('react-material',{
    url: '/projects/react-material',
    templateUrl: 'html/templates/hex/hex15Content.html',
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
