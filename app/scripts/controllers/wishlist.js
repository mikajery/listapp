app.controller('wishlistCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('/data/wishlist.json').success(function(data) {
    $scope.wishlist = data;
  });
}]);
