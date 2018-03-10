"use strict";

//create the controller and inject Angular's $scope
angular
  .module("app")
  .controller("ratingController", function(
    $scope,
    dataService,
    updateDataService
  ) {
    $scope.allProjects = dataService.data;
    $scope.starsTotal = updateDataService.starsTotal;
    $scope.ratingData = updateDataService.ratingData;
  });
