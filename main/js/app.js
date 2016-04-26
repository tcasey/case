angular.module('myApp', ['ui.router', 'ngAnimate', 'ngTouch'])
<<<<<<< HEAD:js/app.js
.config(function($urlRouterProvider, $stateProvider, $locationProvider){
=======

.config(function($urlRouterProvider, $stateProvider){
>>>>>>> d03b6f00dbed148cd01387d559f7f387d4848bb7:main/js/app.js

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
<<<<<<< HEAD:js/app.js
	 $locationProvider.html5Mode(true);
=======
 .state('waka',{
		 url: '/waka',
		 templateUrl: 'html/templates/waka.html',
		 controller: 'wakaCtrl',
 });
	//  $locationProvider.html5Mode(true);
>>>>>>> d03b6f00dbed148cd01387d559f7f387d4848bb7:main/js/app.js
});
