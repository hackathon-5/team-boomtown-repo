angular
  .module('app')
  .controller('createEventCtrl','$rootScope', ['$scope', function($scope, $rootScope) {
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