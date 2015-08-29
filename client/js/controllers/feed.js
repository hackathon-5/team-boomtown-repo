angular
  .module('app')
  .controller('feedCtrl', ['Meeter','$scope','$rootScope','Event', function(Meeter, $scope, $rootScope, Event) {

    var minUser = $rootScope.currentUser;
    var count = 0;
    //var user = Meeter
    //  .find({
    //    where: {id:minUser.id}
    //  });

    //$scope.events = Event.find().$promise
    //  .then(function() {
    //    angular.forEach($scope.events, function(value, key) {
    //      $scope.getMatchedEvents.push(value);
    //
    //  });
    //$scope.matchedEvents = Event.find().$promise
    //  .then(function() {
    //    console.log('got it');
    //
    //  });
    //$scope.nonMatchedEvents = Event
    //  .find()
    //  .$promise
    //  .then(function(response) {
    //    console.log(response[0]);
    //    for (var i = 0; i < response.length; i++) {
    //      for(item in response[i].owner.favorites){
    //
    //        console.log('item: ' + item)
    //        if(item === $rootScope.currentUser){
    //          count++;
    //        }
    //      }
    //      if(count > 0){
    //        $scope.events.push(response[i]);
    //      }
    //      count = 0;
    //    }
    //    return $scope.events;
    //  });
    //$scope.events = [];
    //$scope.matchedEvents = function() {
    //  console.log('at the top');
    //  for(event in $scope.nonMatchedEvents){
    //    console.log($scope.nonMatchedEvents);
    //    for(item in event.favorites){
    //      if(item === user.favorites[item]){
    //        count++;
    //      }
    //    }
    //    if(count > 1){
    //      $scope.events.push(event);
    //    }
    //    count = 0;
    //  }
    //  return $scope.events;
    //  console.log('made it here');
    //}
    //$scope.matchedEvents = function() {
    //      angular.forEach($scope.nonMatchedEvents, function(topVal, topKey){
    //        angular.forEach($scope.nonMatchedEvents, function(value,key) {
    //          console.log(key+':'+value);
    //          if(user.favorites[key] === value){
    //            count++;
    //          }
    //        });
    //        if(count > 1){
    //          $scope.events.push($scope.topVal);
    //        }
    //        count = 0;
    //      });
    //
    //    return $scope.events};

    $scope.getMatchedEvents = $rootScope.currentUser;


    $scope.test = ["one", "two", "three"];
  }]);