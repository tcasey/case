
angular.module('myApp', ['ui.router', 'ngAnimate', 'ngTouch'])
.config(function($urlRouterProvider, $stateProvider){

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
	//  $locationProvider.html5Mode(true);
});
