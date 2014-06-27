app.directive('expandableComment', ['$compile', '$location', '$timeout', function($compile, $location, $timeout) {
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    templateUrl: function(tElement, tAttrs) {
      var htmlEl = angular.element(document.documentElement);
      if (htmlEl.hasClass('no-touch')) return 'views/components/expandable-comment-desktop.html';
      return 'views/components/expandable-comment.html';
    },
    link: function(scope, iElement, iAttrs, controller) {
      scope.expand = function() {
        scope.expanded = true;
        $timeout(function() {
          var newEl = iElement.find("textarea")[0];
          if (newEl) newEl.focus();
        }, 0, false);
      }
    }
  };
}]);