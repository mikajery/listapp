app.directive('headerComponent', ['$compile', '$location', function($compile, $location) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      headerTitle: "@",
      grid: '='
    },
    templateUrl: function(tElement, tAttrs) {
      var htmlEl = angular.element(document.documentElement);
      if (htmlEl.hasClass('no-touch')) return 'views/components/header-desktop.html';
      return 'views/components/header.html';
    },
    link: function(scope, iElement, iAttrs, controller) {
      scope.isActive = function (viewLocation) {
        return viewLocation === $location.path().split("/")[2];
      };
    }
  };
}]);

app.directive('headerLightComponent', ['$compile', '$location', function($compile, $location) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      leftIcon: "@",
      leftUrl: "@",
      headerTitle: "@",
      rightIcon: "@",
      rightUrl: "@",
      rightMethod: "@"
    },
    templateUrl: function(tElement, tAttrs) {
      var htmlEl = angular.element(document.documentElement);
      if (htmlEl.hasClass('no-touch')) return 'views/components/header-light-desktop.html';
      return 'views/components/header-light.html';
    },
    link: function(scope, iElement, iAttrs, controller) {
      scope.rightClick = function() {
        var htmlEl = angular.element(document.documentElement);
        if (htmlEl.hasClass('no-touch')) return
        if (!scope.rightMethod) return;
        if (scope.rightMethod === "showExtension") {
          scope.$emit("showExtension");
        }
      }
    }
  };
}]);