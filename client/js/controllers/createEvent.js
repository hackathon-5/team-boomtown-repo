angular
  .module('app')
  .controller('createEventCtrl', ['$scope','$rootScope', function($scope, $rootScope) {
    //$scope.reviews = Review.find({
    //  filter: {
    //    include: [
    //      'coffeeShop',
    //      'reviewer'
    //    ]
    //  }
    //});

    $scope.user = $rootScope.currentUser;
  }])