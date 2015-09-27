; (function () {
    "use strict";

    angular.module("jsnbt-google-analytics", ['ngRoute'])
    .config(function ($routeProvider) {

        var router = angular.getRouter($routeProvider);

        router.
            when('/modules/gAnalytics', {
                controller: 'GAnalyticsController',
                baseTemplateUrl: 'tmpl/core/base/settings.html',
                templateUrl: 'tmpl/gAnalytics/settings.html',
                section: 'gAnalytics',
                domain: 'gAnalytics'
            });
    });

})();