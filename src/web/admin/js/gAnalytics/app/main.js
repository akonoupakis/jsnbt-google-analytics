; (function () {
    "use strict";

    angular.module("jsnbt-google-analytics", ['ngRoute'])
    .config(function ($routeProvider) {

        var TEMPLATE_BASE = jsnbt.TEMPLATE_BASE;

        var router = new jsnbt.router('gAnalytics', $routeProvider);

        router.when('/modules/gAnalytics', function (x) {
            x.section('gAnalytics');
            x.baseTemplate(TEMPLATE_BASE.settings);
            x.template('tmpl/gAnalytics/settings.html');
            x.controller('GAnalyticsController');
        });

    });

})();