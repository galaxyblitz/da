"use strict";

angular.module("app").controller("navController", [
  "$scope",
  function($scope) {
    //The only thing missing is highlighting current path
    $scope.items = [
      { path: "#/!", title: "Index" },
      { path: "#!rating", title: "Rating" },
      { path: "#!about", title: "About" }
    ];
  }
]);
