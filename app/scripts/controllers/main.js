app.controller('mainCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.extension = false;

  $scope.isExtended = function() {
    return $location.path() === "/activity";
  }

  $scope.$on('$routeChangeStart', function(next, current) {
     $scope.noextension = null;
   });

  $scope.$on("showExtension", function() {
    $scope.extension   = !$scope.extension;
    $scope.noextension = $scope.noextension === null ? false : !$scope.noextension;
  })
}]);