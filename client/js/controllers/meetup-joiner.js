angular
  .module('app')
  .controller('meetup-joinerCtrl', ['AuthService','$stateParams','Meeter','$scope','$rootScope','Event', function(AuthService,$stateParams, Meeter, $scope, $rootScope, Event) {


    console.log(AuthService.eventData().image1);
    $scope.event = {};
    $scope.loadEvent = Event.find({
      filter: {
        where: {
          id: $stateParams.eventId
        }
      }
    }).$promise.then(function(resolve){
        console.log(resolve[0]);
        $scope.event = resolve[0];
      }
    );

  }]);