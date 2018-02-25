"use strict";

//create the controller and inject Angular's $scope
angular.module('app').controller('indexController',function($scope,dataService){
    
    $scope.dataService = dataService;
    $scope.allProjects = dataService.allProjects;
    $scope.selectedData = dataService.selectedData;

    $scope.repeatLimit = 6;

    $scope.rowSelected = function(index,name){

        $scope.selectedRow = ($scope.selectedRow == index) ? null : index;

        if($scope.selectedRow == index){
            //Find selected name
            for(var i=0;i<$scope.allProjects.length;i++){
                if(name==$scope.allProjects[i].name){
                    $scope.selected = [];
                    $scope.selected.logo = $scope.allProjects[i].logo;
                    $scope.selected.name = $scope.allProjects[i].name;
                    $scope.selected.rating = $scope.allProjects[i].rating;
                    $scope.selected.website = $scope.allProjects[i].website;
                    $scope.selected.version = $scope.allProjects[i].version;
                    $scope.selected.author = $scope.allProjects[i].author;
                    $scope.selected.licence = $scope.allProjects[i].licence;
                    $scope.selected.tag = $scope.allProjects[i].tag;
                    $scope.selected.images = $scope.allProjects[i].images;
                    $scope.selected.reviews = $scope.allProjects[i].reviews;
                    $scope.selected.comments = $scope.allProjects[i].comments;

                    $scope.selectedData.push($scope.selected);

                    $scope.selected.counter = $scope.selectedData.length;
                    
                    console.log($scope.selectedData);
                }
            }
        }else{
            console.log("No table is currently selected");
        }
    }

    $scope.isVisible = false;
    $scope.showHide = function() {
        $scope.isVisible = $scope.isVisible ? false : true;
    }
});