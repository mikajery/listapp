app.directive('itemArticle', ['$compile', '$location', function($compile, $location) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      item: "="
    },
    templateUrl: function(tElement, tAttrs) {
      var htmlEl = angular.element(document.documentElement);
      if (htmlEl.hasClass('no-touch')) return 'views/components/item-article-desktop.html';
      return 'views/components/item-article.html';
    },
    link: function(scope, iElement, iAttrs, controller) {
    }
  };
}]);
