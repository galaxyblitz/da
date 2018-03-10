"use strict";

angular
  .module("app")
  .controller("aboutController", function(
    $scope,
    dataService,
    updateDataService
  ) {
    $scope.allProjects = dataService.data;
    $scope.starsTotal = updateDataService.starsTotal;
    $scope.ratingData = updateDataService.ratingData;
  });
