electronApp.controller('AuthController', ['$scope', 'ElectronRequest', function ($scope, ElectronRequest) {


    $scope.btnCreateUser = function () {
        $('#imgLoader').css('display', 'block');
        var req = {
            'email': $scope.email,
            'username': $scope.username,
            'password': $scope.password,
            'repeatpassword': $scope.repeatpassword
        };
        ElectronRequest.post('/api/register', req).then((response) => {
            if (response.data === 1) {
                $location.path("home");
            }
        });
    }
}]);