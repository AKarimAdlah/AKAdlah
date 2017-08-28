angular
  .module("vetApp")
  .service("usersService", function ($http, $state) {

    var _users = []
    var _userId = 10
    var _currentUser = null

    this.getUsers = function (cb) {
      if (_users.length == 0) {
        $http.get("../db/users.json")
          .success(function (response) {
            _users = response
            cb(_users)
          })
          .error(function (error) {
            console.log(error);
          })
      }
      else {
        cb(_users)
      }
    }

    this.getUserById = function (id, cb) {
      if (id === "" || id === undefined || id === null) {
        var user = {
          firstName: "",
          lastName: "",
          dob: "",
          email: "",
          password: "",
          phone: "",
          street1: "",
          city: "",
          state: "",
          zip: "",
        }
        cb(user)
      } else {
        for (var i = 0; i < _users.length; i++) {
          if (id == _users[i].id) {
            cb(_users[i])
          }
        }
      }
    }

    this.addUser = function (user) {
      user.id = _userId++
      _users.unshift(user)
      $state.go("showUser", { id: user.id })
      console.log(_users);
    }

    this.updateUser = function (user) {
      for (var i = 0; i < _users.length; i++) {
        if (_users[i].id == user.id) {
          _users.splice(i, 1, user)
          $state.go("showUser", { id: user.id })
        }
      }
    }


    this.deleteUser = function (id) {
      for (var i = 0; i < _users.length; i++) {
        if (_users[i].id == id) {
          _users.splice(i, 1)
          $state.go("users")
        }
      }
    }

    this.login = function (user) {
      console.log(user)
      for (var i = 0; i < _users.length; i++) {
        if (_users[i].email == user.email && _users[i].password == user.password) {
          _currentUser = _users[i]
          $state.go("showUser", { id: _currentUser.id})
        }
      }
    }

    this.getCurrentUser = function () {
      return _currentUser
    }

  })
45