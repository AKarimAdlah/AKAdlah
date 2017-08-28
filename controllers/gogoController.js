angular
.module("vetApp")
.controller("gogoController", function($scope, $state) {

  $scope.myVar = false;
  $scope.toggle = function() {
      $scope.myVar = !$scope.myVar;
  };
    












})