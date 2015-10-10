; (function () {
    "use strict";

    var SettingsController = function ($scope, $rootScope, $route, $location, $jsnbt) {
        jsnbt.controllers.SettingsControllerBase.apply(this, $rootScope.getBaseArguments($scope));
        
        this.init();
    };
    SettingsController.prototype = Object.create(jsnbt.controllers.SettingsControllerBase.prototype);

    angular.module("jsnbt-google-analytics")
        .controller('GAnalyticsController', ['$scope', '$rootScope', '$route', '$location', '$jsnbt', SettingsController]);

})();