var electronApp = angular.module('electronApp', ['ngRoute'])

electronApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../views/index.html"
    })
    .when("/register", {
        templateUrl : "../views/register.html"
    })
    
    // .state('login', {
    //     url: '/login',
    //     data: {
    //         pageTitle: 'Login'
    //     },
    //     templateUrl: '../views/login.html',
    //     controller: 'authController'
    // })

    // .state('error', {
    //     url: '/error',
    //     data: {
    //         pageTitle: 'Error'
    //     },
    //     templateUrl: '../views/error.html',
    //     controller: 'authController'
    // });

    // $urlRouterProvider
    //     .otherwise('*');
});