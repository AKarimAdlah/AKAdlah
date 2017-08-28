angular
  .module("vetApp")
  .controller("usersController", function ($scope, $state, $stateParams, usersService) {

    console.log($stateParams);
    $scope.cancelButton = true;
    $scope.errorMessage = false
    

    if ($stateParams.id == undefined || $stateParams.id == null || $stateParams.id == "") {
      $scope.formHeader = "Create An Account!"
      $scope.submitButton = true;
      $scope.saveButton = false;

      usersService.getUserById($stateParams.id, function (user) {
        $scope.user = user
        console.log($scope.user)
      })
    } else {
      $scope.formHeader = "Update Account"
      $scope.submitButton = false;
      $scope.saveButton = true;

      usersService.getUserById($stateParams.id, function (user) {
        $scope.user = user
        console.log($scope.user)
      })
    }

    usersService.getUsers(function (response) {
      $scope.users = response
    })


    $scope.addUser = function (user) {
      console.log(user)
      usersService.addUser(user)
      // $state.go("showUser")
    }

    $scope.saveUser = function (user) {
      usersService.updateUser(user)
    }

    $scope.deleteUser = function () {
      usersService.deleteUser($stateParams.id)
    }

    $scope.login = function () {
      if ($scope.user.email == "" || $scope.user.password == "") {
        $scope.errorMessage = true
      } else {
        usersService.login($scope.user)
      }
    }
  })




