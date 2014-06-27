app.controller('messageCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('/data/message.json').success(function(data) {
    $scope.message = data;
  });
}]);
