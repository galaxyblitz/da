"use strict";

//configure our routes
angular.module('app').config(function($routeProvider){
    $routeProvider
    //route for the home page
        .when('/',{
            templateUrl:'public/views/index.html',
            controller:'indexController',
            activetab:'index'
        })
        //route for the about page
        .when('/home',{
            templateUrl:'public/views/home.html',
            controller:'homeController',
            activetab:'home'
        })
        //route for the about page
        .when('/trends',{
            templateUrl:'public/views/trends.html',
            controller:'trendsController',
            activetab:'trends'
        })
        //route for the contact page
        .when('/status',{
            templateUrl:'public/views/status.html',
            controller:'statusController',
            activetab:'status'
        });
})