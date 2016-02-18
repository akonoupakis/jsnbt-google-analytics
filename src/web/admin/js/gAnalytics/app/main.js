; (function () {
    "use strict";

    angular.module("jsnbt-google-analytics", ['ngPathRouter'])
    .config(['$routerProvider', function ($routerProvider) {

        var TEMPLATE_BASE = jsnbt.constants.TEMPLATE_BASE;

        var router = new jsnbt.ViewRouter('gAnalytics', $routerProvider);

        router.when('/modules/gAnalytics', function (x) {
            x.section('gAnalytics');
            x.baseTemplate(TEMPLATE_BASE.settings);
            x.template('tmpl/gAnalytics/settings.html');
            x.controller('GAnalyticsController');
        });

    }]);

})();