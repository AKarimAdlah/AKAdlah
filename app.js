var app = angular.module("vetApp", ['ngMap',"ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
   .state("home", {
    url: "/",
    templateUrl: "./views/home.html",
    controller: "homeController"
  })

  .state("gogoHome", {
    url: '/gogo',
    templateUrl: "./views/gogo.html",
    controller: "gogoController"
  })
  
    //about
    .state("about", {
      url: "/about",
      templateUrl: "./views/about_index.html",
      controller: "aboutController"
    })    

    //users
    .state("users", {
      url: '/users',
      templateUrl: "./views/users_index.html",
      controller: "usersController"
    })
    .state("newUsers", {
      url: '/users/new',
      templateUrl: "./views/users_form.html",
      controller: "usersController"      
    })
    .state("showUser", {
      url: '/users/:id',
      templateUrl: "./views/users_show.html",
      controller: "usersController"
    })
    .state("editUser", {
      url: '/users/:id/edit',
      templateUrl: "./views/users_form.html",
      controller: "usersController"
    })
    

    // discussion
    .state("discussion", {
      url: "/discuss",
      templateUrl: "./views/discussion.html",
      controller: "discussionController"
    })

    // Resources
    .state("resources", {
      url: '/resources',
      templateUrl: "./views/resources_index.html",
      controller: "resourceController"
        })
          .state("resourcesNew", {
            url: '/resource/new',
            templateUrl: "./views/resources_form.html",
            controller: "resourceController"
          })
          .state("showResource", {
            url: '/resource/:id',
            templateUrl: "./views/resources_show.html",
            controller: "resourceController"
          })
      
          .state("resourceEdit", {
            url: '/resource/:id/edit',
            templateUrl: "./views/resources_form.html",
            controller: "resourceController"
          })

          .state("jobs", {
            url: '/jobs',
            templateUrl: "./views/jobs.html",
            controller: "jobsController"
          })

          
})



