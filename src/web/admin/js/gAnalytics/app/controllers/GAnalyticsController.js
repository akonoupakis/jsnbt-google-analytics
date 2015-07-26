; (function () {
    "use strict";

    angular.module("jsnbt-google-analytics")
        .controller('GAnalyticsController', function ($scope, $controller, $location, $logger, $timeout) {

            var logger = $logger.create('GAnalyticsController');

            $controller('SettingsBaseController', $scope.base.settings);

            $scope.back = function () {
                $location.previous('/modules');
            };

            $timeout(function () {
                $scope.setLocation();
                $scope.load().then(function () {
                    $scope.setSpy(200);
                }, function (ex) {
                    logger.error(ex);
                });
            }, 200);

        });

})();