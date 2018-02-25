"use strict";

//create the controller and inject Angular's $scope
angular.module('app').controller('navController',['$scope', function($scope){
    //The only thing missing is highlighting current path
    $scope.items = [
        {path: '#/!',title: 'Index'},
        {path: '#!home',title: 'Home'},
        {path: '#!trends',title: 'Trends'},
        {path: '#!status',title: 'Status'}
    ];
}]);