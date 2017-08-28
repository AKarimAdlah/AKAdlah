angular
.module("vetApp")
.service("resourceService", function($http, $state, $stateParams) {

  var _sites = []
  var _siteId = 7

  function Site(id, name, url, twitter, facebook) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.twitter = twitter;
    this.facebook = facebook;   
  }

  this.getSites = function(cb) {
    if(_sites.length == 0) {
      $http.get("../db/websites.json")
        .success(function(response) {
          _sites = response
          cb(_sites)
        })
        .error(function(error) {
          console.log(error);
        })
    }
    else {
      cb(_sites)
    }
  }

  this.getSiteById = function(id) {
    if (id === undefined || id === null || id === "") {
      var site = {
        id: "",
        name: "",
        url: "",
        twitter: "",
        facebook: "",
              }
      return site
    }
    else {
      for (var i = 0; i < _sites.length; i++) {
        if (_sites[i].id == id) {
          return _sites[i]
        }
      }
    }
  }

  this.addSite = function(id, name, url, twitter, facebook) {
    _sites.unshift(new Site(id, name, url, twitter, facebook))
    console.log(_sites);
  }

  this.updateSite = function(id, name, url, twitter, facebook) {
    console.log("service works")
    _sites.splice($stateParams.id, new Site(id, name, url, twitter, facebook))
    console.log(_sites)
    $state.go("showResource", { "id": $stateParams.id})
  }

  this.deleteSite = function(site) {
    for (var i = 0; i < _sites.length; i++) {
      if(_sites[i] ==  site) {
        _sites.splice(i,1)
      }
    }
  }


})