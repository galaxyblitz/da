"use strict";

angular
  .module("app")
  .controller("indexController", function(
    $scope,
    dataService,
    updateDataService
  ) {
    $scope.allProjects = dataService.data;
    $scope.starsTotal = updateDataService.starsTotal;
    $scope.ratingData = updateDataService.ratingData;

    /*
    $scope.rating = {};
    $scope.rating.obj = {
        "scatter": $scope.allProjects[0].rating,
        "old_scatter": 3.8
    }

    $scope.ratingData.push($scope.ratings);

    $scope.getRatingsActivated = function getRatings() {
        for(let rating in $scope.allProjects[0].rating) {
            $scope.ratingCatcher = rating;

            $scope.starPercentage = ($scope.ratings[$scope.ratingCatcher] );
        }
    }

    console.log($scope.ratingData);
    */
  });
