angular
  .module('app')
  .controller('profileCtrl', ['$scope','Meeter','$rootScope', function($scope, Meeter, $rootScope) {
    //$scope.reviews = Review.find({
    //  filter: {
    //    include: [
    //      'coffeeShop',
    //      'reviewer'
    //    ]
    //  }
    //});
    //$scope.user = Meeter.find(
    //  {
    //    where: {id: 'ObjectId("55e147d2e9b243457c2d2234")'}
    //  }
    //).$promise;
    $scope.user = $rootScope.currentUser.id;
    //$scope.foundUser = Meeter.find(
    //  {
    //    where: {id: $scope.user.id}
    //  }
    //);
    $scope.test = ["one", "two", "three"];
  }])