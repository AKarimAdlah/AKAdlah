angular
.module("vetApp")
.controller("jobsController", function($scope, jobsService, $stateParams) {

  var _job = jobsService.getJobById($stateParams.id)
  $scope.job = _job

  $scope.getJobs = function (){
    console.log("controller works")
  jobsService.getJobs(function(response) {
    $scope.jobs = response
console.log($scope.jobs)
  })
  }
  
  
})

