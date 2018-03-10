"use strict";

//The best way to share data between controllers is by using services. (https://stackoverflow.com/questions/31112939/angularjs-correct-way-to-share-data-between-two-controllers)
angular.module("app").service("updateDataService", function($http) {
  this.starsTotal = 5;

  this.ratingData = [];
});
