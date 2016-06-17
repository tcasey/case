angular.module('myApp', ['ui.router', 'ngAnimate', 'ngTouch'])

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
 .state('waka',{
		 url: '/waka',
		 templateUrl: 'html/templates/waka.html',
		 controller: 'wakaCtrl',
 });
	//  $locationProvider.html5Mode(true);
});
