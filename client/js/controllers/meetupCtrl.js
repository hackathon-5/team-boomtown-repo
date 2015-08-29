angular
  .module('app')
  .controller('meetupCtrl', ['AuthService','$scope','$rootScope','Event', function(AuthService,$scope, $rootScope,Event) {


    $scope.urls = AuthService.eventData();
    $scope.events = {};
    $scope.loadEvent = Event.find()
      .$promise.then(function(resolve){
        console.log(resolve);
        $scope.events = resolve;
      }
    );


  }]);