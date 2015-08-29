angular
  .module('app')
  .controller('eventCtrl', ['$scope','$rootScope','Event', function($scope, $rootScope,Event) {
    //$scope.reviews = Review.find({
    //  filter: {
    //    include: [
    //      'coffeeShop',
    //      'reviewer'
    //    ]
    //  }
    //});

    //$scope.Date.prototype.addHours = function(hours) {
    //  this.setHours(this.getHours() + hours);
    //  return this;
    //};
    //
    //$scope.maxTime = Date.now().addHours(12);
    //console.log(maxTime)

    $scope.event = {
      "eventType": 'Bar',
      "maxPeople": 3,
      "startTime": '7:00PM',
      "location": currentUser.location,
      "owner": currentUser
    }

    $scope.createEvent = function() {
      Event.create($scope.event).$promise
        .then(function(response){
          console.log('New Event Created')
        });
    }

    $scope.user = $rootScope.currentUser;
  }])