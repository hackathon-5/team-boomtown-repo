angular
  .module('app', [
    'ui.router',
    'lbServices'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('forbidden', {
        url: '/forbidden',
        templateUrl: 'views/forbidden.html',
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthLoginController'
      })
      .state('logout', {
        url: '/logout',
        controller: 'AuthLogoutController'
      })
      .state('sign-up', {
        url: '/sign-up',
        templateUrl: 'views/sign-up-form.html',
        controller: 'SignUpController',
      })
      .state('feed', {
        url: '/feed',
        templateUrl: 'views/feed.html',
        controller: 'feedCtrl',
      })
      .state('profile', {
        url: '/profile/:username',
        templateUrl: 'views/profile.html',
        controller: 'profileCtrl',
      })
      .state('createEvent', {
        url: '/createEvent',
        templateUrl: 'views/createEvent.html',
        controller: 'eventCtrl',
      })
      .state('viewEvent', {
        url: '/event/:eventId',
        templateUrl: 'views/viewEvent.html',
        controller: 'viewEventCtrl',
      })
      .state('signup-success', {
        url: '/sign-up/success',
        templateUrl: 'views/sign-up-success.html'
      });
    $urlRouterProvider.otherwise('sign-up');
  }])
  .run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
      // redirect to login page if not logged in
      if (next.authenticate && !$rootScope.currentUser) {
        event.preventDefault(); //prevent current page from loading
        $state.go('forbidden');
      }
    });
  }]);
