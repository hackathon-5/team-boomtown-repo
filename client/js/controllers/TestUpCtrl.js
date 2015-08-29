angular
  .module('app')
  .controller('TestUpCtrl', ['$scope', 'Review', function($scope,
                                                                    Review) {
    $scope.reviews = Review.find({
      filter: {
        include: [
          'coffeeShop',
          'reviewer'
        ]
      }


    });
  }])
