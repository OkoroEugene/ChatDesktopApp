
electronApp.factory('ElectronRequest', ['$http', function ($http) {
    return {
        get: function (api) {
            return $http.get(api);
        },
        post: function (api, data) {
            // if (typeof data === 'function' && data())
            return $http.post(api, data);
        }
    }
}]);