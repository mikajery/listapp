'use strict';

var app = angular.module('listApp', ['ngRoute', 'ngSanitize', 'ngResource'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/splash.html'
      })
      .when('/user', {
        redirectTo: '/user/list'
      })
      .when('/user/friends', {
        templateUrl: 'views/friends.html',
        controller: 'friendsCtrl'
      })
      .when('/user/list', {
        templateUrl: 'views/list.html',
        controller: 'wishlistCtrl'
      })
      .when('/activity', {
        templateUrl: 'views/activity.html',
        controller: 'activityCtrl'
      })
      .when('/messages', {
        templateUrl: 'views/messages.html',
        controller: "messagesCtrl"
      })
      .when('/messages/new', {
        templateUrl: 'views/messages-new.html'
      })
      .when('/messages/:id', {
        templateUrl: 'views/message.html',
        controller: "messageCtrl"
      })
      .otherwise({
        redirectTo: '/user/list'
      });
  }]);
