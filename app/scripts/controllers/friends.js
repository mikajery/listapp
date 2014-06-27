app.controller('friendsCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('/data/friends.json').success(function(data) {
    $scope.friends = data;
  });
}]);
