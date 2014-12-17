// var seeker = angular.module('jobseeker', []);

  // seeker.controller('BodyController', function($scope){
  //   $scope.message = 'Hello world'

  // });

  var seeker = angular.module('jobseeker', ['ngRoute']);

    seeker.config( ['$routeProvider', function ($routeProvider){
      $routeProvider.

        //homepage route
        when('/home', {
          templateUrl : 'pages/home.html',
          controller : 'mainController'
        }).

        //aboutpage route
        when('/about', {
          templateUrl : 'pages/about.html',
          controller : 'aboutController'
        }).

        //contactPage route
        when('/contact', {
          templateUrl : 'pages/contact.html',
          controller : 'contactController'
        }).

        //servicesPage route
        when('/services', {
          templateUrl : 'pages/services.html',
          controller : 'servicesController'
        }).

        //homePage route
        otherwise({
        redirectTo: '/home'
      });

       // $locationProvider.html5Mode(true);

    }]);

  seeker.controller('mainController', function($scope){
    $scope.message = 'Hello world';

  });

  seeker.controller('aboutController', function($scope){
    $scope.message = 'Hello love';

  });

  seeker.controller('contactController', function($scope){
    $scope.message = 'Hello sweet';

  });

  seeker.controller('servicesController', function($scope){
    $scope.message = 'Hello sugar';

  });
