; (function () {
    "use strict";

    angular.module("jsnbt")
    .config(function ($routeProvider) {
        $routeProvider.
            when('/modules/gAnalytics', {
                templateUrl: 'tmpl/gAnalytics/pages/main.html',
                controller: 'GAnalyticsController',
                section: 'gAnalytics',
                domain: 'gAnalytics'
            });
    });

})();