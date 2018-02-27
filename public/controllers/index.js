"use strict";

//create the controller and inject Angular's $scope
angular.module('app').controller('indexController',function($scope,dataService){
    
    $scope.dataService = dataService;
    $scope.allProjects = dataService.allProjects;
    $scope.selectedData = dataService.selectedData;

    $scope.searchLimit = 10;
    $scope.selectLimit = 5;

    $scope.rowSelected = function(index,name){

        $scope.selectedRow = ($scope.selectedRow == index) ? null : index;

        if($scope.selectedRow == index){
            //Find selected name
            for(var i=0;i<$scope.allProjects.length;i++){
                if(name==$scope.allProjects[i].name){
                    $scope.selected = {};
                    $scope.selected.trend = $scope.allProjects[i].trend;
                    $scope.selected.logo = $scope.allProjects[i].logo;
                    $scope.selected.name = $scope.allProjects[i].name;
                    $scope.selected.rating = $scope.allProjects[i].rating;
                    $scope.selected.website = $scope.allProjects[i].website;
                    $scope.selected.version = $scope.allProjects[i].version;
                    $scope.selected.author = $scope.allProjects[i].author;
                    $scope.selected.licence = $scope.allProjects[i].licence;
                    $scope.selected.tag = $scope.allProjects[i].tag;
                    $scope.selected.image = $scope.allProjects[i].image;
                    $scope.selected.review = $scope.allProjects[i].review;
                    $scope.selected.comment = $scope.allProjects[i].comment;

                    $scope.selectedData.push($scope.selected);
                    console.log($scope.selected);

                    $scope.selected.counter = $scope.selectedData.length;
                }
            }
        }else{
            console.log("No table is currently selected");
        }
    }

    $scope.isVisible = false;
    $scope.showHideSelected = function() {
        $scope.isVisible = $scope.isVisible ? false : true;
    }
});