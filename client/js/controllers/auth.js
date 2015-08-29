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
      description: 'asdf',
      photo:'asdf',
      occupation:'asdf',
      location: 'Charleston',
      phoneNumber:'asdf',
      favorites:{
        "ncaaf": true,
        "nfl": true,
        "ncaab": true,
        "nba": true,
        "mlb": true,
        "nhl": true,
        "soccer": true,
        "pga": true,
        "sportsDontMatter": true,
        "hipHopRap": true,
        "rockAlternative": true,
        "pop": true,
        "randb": true,
        "country": true,
        "latin": true,
        "edm": true,
        "actionAdventure": true,
        "comedy": true,
        "romance": true,
        "drama": true,
        "horrorThrillers": true,
        "documentaries": true,
        "classicFilms": true,
        "americanFood": true,
        "mexicanFood": true,
        "asian": true,
        "mediterraneanGreek":true,
        "italian": true,
        "vegetarian": true,
        "glutenFree": true,
        "politics":'Republican',
        "smoking": 'Yes',
        "drinking": 'Yes',
      }
    };

    $scope.register = function() {
      AuthService.register($scope.user)
        .then(function() {
          $state.transitionTo('signup-success');
        });
    };
  }]);
