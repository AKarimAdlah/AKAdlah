angular
.module("vetApp")
.service("jobsService", function($http){

var _jobs = [];

  this.getJobs = function(cb) {
    if(_jobs.length == 0) {
      $http.get("../db/jobs.json")
        .success(function(response) {
          _jobs = response
          cb(_jobs)
        })
        .error(function(error) {
          console.log(error);
        })
    }
    else {
      cb(_jobs)
    }
  }

  this.getJobById = function(id) {
    if (id === undefined || id === null || id === "") {
      var job = {
        id: "",
        name: "",
        description: "",
        keywords: "",
        finfo: "",
              }
      return job
    }
    else {
      for (var i = 0; i < _jobs.length; i++) {
        if (_jobs[i].id == id) {
          return _jobs[i]
        }
      }
    }
  }


})



