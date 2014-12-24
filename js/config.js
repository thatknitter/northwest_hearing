;(function(){
  'use strict';
  
  angular.module('nwHearing')
    .config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/children', {
        templateUrl: 'views/children.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact_us.html'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html'
      })
      .when('/home', {
        templateUrl: 'views/home.html'
      })
      .when('/hearing_loss', {
        templateUrl: 'views/hearing_loss.html'
      })
      .when('/locations', {
        templateUrl: 'views/locations.html'
      })
      .when('/technology', {
        templateUrl: 'views/technology.html'
      })
      .otherwise({redirectTo: '/'});
    });
  
}());
