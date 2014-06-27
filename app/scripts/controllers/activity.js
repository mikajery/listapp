app.controller('activityCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('/data/activity.json').success(function(data) {
    $scope.activity = data;
  });
}]);
