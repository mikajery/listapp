app.directive('navComponent', ['$compile', '$location', function($compile, $location) {
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    templateUrl: function(tElement, tAttrs) {
      var htmlEl = angular.element(document.documentElement);
      if (htmlEl.hasClass('no-touch')) return 'views/components/nav-desktop.html';
      return 'views/components/nav.html';
    },
    link: function(scope, iElement, iAttrs, controller) {
      scope.isActive = function (viewLocation) {
        return viewLocation === $location.path().split("/")[1];
      };
    }
  };
}]);