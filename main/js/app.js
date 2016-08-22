angular.module('myApp', ['ui.router', 'sap.imageloader'])

.config(function($urlRouterProvider, $stateProvider, $locationProvider){

 $urlRouterProvider
  .otherwise('home');

 $stateProvider
 
 .state('home', {
		 url: '/home',
		 templateUrl: 'html/templates/home.html',
 })
 .state('bio',{
		 url: '/bio',
		 templateUrl: 'html/templates/bio.html',
 })
 .state('projects',{
		 url: '/projects',
		 templateUrl: 'html/templates/projects.html',
 })
 .state('skills',{
		 url: '/skills',
		 templateUrl: 'html/templates/skillset.html',
 })

 .state('bike',{
    url: '/projects/road-bike-junkie',
    templateUrl: 'html/templates/hex/hex1Content.html',
 })
 .state('h+c',{
    url: '/projects/h+c',
    templateUrl: 'html/templates/hex/hex2Content.html',
 })
 .state('ncaa',{
    url: '/projects/ncaa',
    templateUrl: 'html/templates/hex/hex3Content.html',
 })
 .state('karma',{
    url: '/projects/karma',
    templateUrl: 'html/templates/hex/hex4Content.html',
 })
 .state('junior',{
    url: '/projects/junior',
    templateUrl: 'html/templates/hex/hex5Content.html',
 })
 .state('do-it',{
    url: '/projects/do-it',
    templateUrl: 'html/templates/hex/hex6Content.html',
 })
 .state('smart-shopper',{
    url: '/projects/smart-shopper',
    templateUrl: 'html/templates/hex/hex7Content.html',
 })
 .state('twitter-clone',{
    url: '/projects/twitter-clone',
    templateUrl: 'html/templates/hex/hex8Content.html',
 })
 .state('hadouken',{
    url: '/projects/hadouken',
    templateUrl: 'html/templates/hex/hex9Content.html',
 })
 .state('golf',{
    url: '/projects/golf',
    templateUrl: 'html/templates/hex/hex10Content.html',
 })
 .state('fizz-buzz',{
    url: '/projects/fizz-buzz',
    templateUrl: 'html/templates/hex/hex11Content.html',
 })
 .state('dots',{
    url: '/projects/dots',
    templateUrl: 'html/templates/hex/hex12Content.html',
 })
 .state('memory',{
    url: '/projects/memory',
    templateUrl: 'html/templates/hex/hex13Content.html',
 })
 .state('nerd',{
    url: '/projects/nerd',
    templateUrl: 'html/templates/hex/hex14Content.html',
 })

 .state('waka',{
		 url: '/waka',
		 templateUrl: 'html/templates/waka.html',
		 controller: 'wakaCtrl',
 });
	//  $locationProvider.html5Mode(true);
});
