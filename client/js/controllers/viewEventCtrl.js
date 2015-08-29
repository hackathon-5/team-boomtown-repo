angular
  .module('app')
  .controller('viewEventCtrl', ['$stateParams','AuthService','$scope','$rootScope','Event', function($stateParams, AuthService,$scope, $rootScope,Event) {


    $scope.urls = AuthService.eventData();

    $scope.eventId = $stateParams.eventId;


    $scope.event = {};
    $scope.loadEvent = Event.find({
      filter: {
        where: {
          id: $scope.eventId
        }
      }
    })
      .$promise.then(function(resolve){
        console.log(resolve);
        $scope.events = resolve;
      }
    );


  }]);