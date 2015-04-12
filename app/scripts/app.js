'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */
angular
  .module('publicApp', [
    'ngRoute',
    'ui.odometer',
    'scrollto',
    'btford.socket-io'
  ])

  /**
   * Configure routes.
   */

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        redirectTo: '/'
      })
      .when('/wiwo', {
        templateUrl: 'views/wiwo.html',
        controller: 'WiwoCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .when('/theme', {
        templateUrl: 'views/theme.html'
      })
      .when('/404', {
        templateUrl: 'views/404.html'
      })
      .when('/status', {
        templateUrl: 'views/status.html',
        controller: 'StatusCtrl'
      })
      .otherwise({
        redirectTo: '/404'
      });
  })

  /**
   * Configure application deep linking.
   */

  .config(function ($locationProvider) {
    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');
  })

  /**
   * Decorate controllers with route name.
   */

  .config(function ($provide) {
    $provide.decorator('$controller', function ($location, $delegate) {
      return function(constructor, locals, later, indent) {
        function updateRouteName() {
          var routeName = $location.path().replace('/', '');
          if (routeName === '') {
         // routeName = 'main';
            routeName = 'about';
          }

          locals.$scope.routeName = routeName;
        } updateRouteName();

        locals.$scope.$on('$viewContentLoaded', updateRouteName);
        return $delegate(constructor, locals, later, indent);
      };
    });
  })

  /**
   * Instantiate FastClick.
   */

  .run(function($window, $document) {
    var FastClick = $window.FastClick;
    FastClick.attach($document[0].body);
  })

  /**
   * Default ease.
   */

  .run(function($window) {
    var TweenLite = $window.TweenLite;
    var Quint     = $window.Quint;
    TweenLite.defaultEase = Quint.easeOut;
  });
