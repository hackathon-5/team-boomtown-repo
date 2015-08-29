angular
  .module('app')
  .controller('joinEventCtrl', ['$stateParams','Meeter','$scope','$rootScope','Event', function($stateParams, Meeter, $scope, $rootScope, Event) {


    $scope.event = {};
    $scope.loadEvent = Event.find({
      filter: {
        where: {
          id: $stateParams.eventId
        }
      }
    })
      .$promise.then(function(resolve){
        console.log('I am resolve: ' + resolve);
        $scope.events = resolve;
      }
    );

    $scope.questions = {
      one: '',
      two: '',
      three: ''
    }

    $scope.joinEvent = function() {
      Event.joiners.push({
        user: $rootScope.currentUser,
        questions: $scope.questions
      });

      console.log('questions:' + $scope.questions);
      console.log('Event is' + Event);
      Event.$save();
    }



  }]);