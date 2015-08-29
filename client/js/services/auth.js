angular
  .module('app')
  .factory('AuthService', ['Meeter', '$q', '$rootScope', function(Meeter, $q,
      $rootScope) {
    function login(email, password) {
      return Meeter
        .login({email: email, password: password})
        .$promise
        .then(function(response) {
          $rootScope.currentUser = response.user;
          console.log(response.user);
        });
    }

    function logout() {
      return Meeter
       .logout()
       .$promise
       .then(function() {
         $rootScope.currentUser = null;
       });
    }

    function register(user) {
      return Meeter
        .create({
          email: user.email,
          password: user.password,
          age: user.age,
          firstName: user.firstName,
          lastName: user.lastName,
          gender: user.gender,
          photo: user.photo,
       })
       .$promise;
    }

    return {
      login: login,
      logout: logout,
      register: register
    };
  }]);
