
angular.module('myApp', ['ui.router', 'ngAnimate', 'ngTouch', 'angulartics', 'angulartics.google.analytics'])
.config(function($urlRouterProvider, $stateProvider, $analyticsProvider){

 $urlRouterProvider
	 .otherwise('home');

 $stateProvider

 .state('home', {
		 url: '/home',
		 templateUrl: 'templates/home.html',
		 // controller: 'homeCtrl',
 })
 .state('bio',{
		 url: '/bio',
		 templateUrl: 'templates/bio.html',
		 // controller: 'bioCtrl',
 })
 .state('projects',{
		 url: '/projects',
		 templateUrl: 'templates/projects.html',
		 // controller: 'projectsCtrl',
 })
 .state('skills',{
		 url: '/skills',
		 templateUrl: 'templates/skillset.html',
		 // controller: 'skillsCtrl',
 })
 .state('waka',{
		 url: '/waka',
		 templateUrl: 'templates/waka.html',
		 controller: 'wakaCtrl',
 });
	//  $locationProvider.html5Mode(true);
});
