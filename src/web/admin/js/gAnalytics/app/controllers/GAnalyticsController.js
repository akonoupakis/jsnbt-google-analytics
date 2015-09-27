; (function () {
    "use strict";

    var SettingsController = function ($scope, $route, $location, $jsnbt) {
        jsnbt.SettingsControllerBase.apply(this, $scope.getBaseArguments($scope));


        $scope.init();
    };
    SettingsController.prototype = Object.create(jsnbt.SettingsControllerBase.prototype);

    angular.module("jsnbt-google-analytics")
        .controller('GAnalyticsController', ['$scope', '$route', '$location', '$jsnbt', SettingsController]);

})();