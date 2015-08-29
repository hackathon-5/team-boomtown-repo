angular
  .module('app')
  .controller('AuthLoginController', ['$scope', 'AuthService', '$state',
      function($scope, AuthService, $state) {
    $scope.user = {
      email: 'briceayres@gmail.com',
      password: 'test'
    };

    $scope.login = function() {
      AuthService.login($scope.user.email, $scope.user.password)
        .then(function() {
          $state.go('feed');
        });
    };
  }])
  .controller('AuthLogoutController', ['$scope', 'AuthService', '$state',
      function($scope, AuthService, $state) {
    AuthService.logout()
      .then(function() {
        $state.go('login');
      });
  }])
  .controller('SignUpController', ['$scope', 'AuthService', '$state',
      function($scope, AuthService, $state) {
    $scope.user = {
      email: 'briceayres@gmail.com',
      password: 'test',
      age: 27,
      firstName: 'Brice',
      lastName: 'Ayres',
      gender: 'male',
      photo:'asdf',
      location: 'Charleston',
      phoneNumber:'asdf',

    };

    $scope.register = function() {
      AuthService.register($scope.user)
        .then(function() {
          $state.transitionTo('signup-success');
        });
    };
  }]);
