"use strict";

//create the controller and inject Angular's $scope
angular.module('app').controller('ratingController',function($scope,dataService){
    
    $scope.allProjects = dataService.allProjects;
    
});