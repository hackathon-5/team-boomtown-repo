angular.module('app', [
  'ui.router'
  'lbServices'
]).config [
  '$stateProvider'
  '$urlRouterProvider'
  ($stateProvider, $urlRouterProvider) ->
    $stateProvider.state('add-review',
      url: '/add-review'
      templateUrl: 'views/review-form.html'
      controller: 'AddReviewController'
      authenticate: true).state('all-reviews',
      url: '/all-reviews'
      templateUrl: 'views/all-reviews.html'
      controller: 'AllReviewsController').state('edit-review',
      url: '/edit-review/:id'
      templateUrl: 'views/review-form.html'
      controller: 'EditReviewController'
      authenticate: true).state('delete-review',
      url: '/delete-review/:id'
      controller: 'DeleteReviewController'
      authenticate: true).state('forbidden',
      url: '/forbidden'
      templateUrl: 'views/forbidden.html').state('login',
      url: '/login'
      templateUrl: 'views/login.html'
      controller: 'AuthLoginController').state('logout',
      url: '/logout'
      controller: 'AuthLogoutController').state('my-reviews',
      url: '/my-reviews'
      templateUrl: 'views/my-reviews.html'
      controller: 'MyReviewsController'
      authenticate: true).state('sign-up',
      url: '/sign-up'
      templateUrl: 'views/sign-up-form.html'
      controller: 'SignUpController').state('test-up',
      url: '/test-up'
      templateUrl: 'views/test-up.html'
      controller: 'TestUpCtrl').state 'sign-up-success',
      url: '/sign-up/success'
      templateUrl: 'views/sign-up-success.html'
    $urlRouterProvider.otherwise 'all-reviews'
    return
]
$locationProvider.html5Mode(true).run [
  '$rootScope'
  '$state'
  ($rootScope, $state) ->
    $rootScope.$on '$stateChangeStart', (event, next) ->
      # redirect to login page if not logged in
      if next.authenticate and !$rootScope.currentUser
        event.preventDefault()
        #prevent current page from loading
        $state.go 'forbidden'
      return
    return
]
