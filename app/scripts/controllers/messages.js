app.controller('messagesCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('/data/messages.json').success(function(data) {
    $scope.messages = data;
  });
}]);
