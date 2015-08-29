angular
  .module('app')
  .controller('feedCtrl', ['Meeter','$scope','$rootScope','Event', function(Meeter, $scope, $rootScope, Event) {


    $scope.getMatchedEvents = $rootScope.currentUser;



    console.log($scope.getMatchedEvents);



    $scope.events = {};
    $scope.loadEvent = Event.find()
      .$promise.then(function(resolve){
        console.log(resolve);
        $scope.events = resolve;
      }
    );


    $scope.test = ["one", "two", "three"];
  }]);