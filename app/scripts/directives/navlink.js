'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:navLink
 * @description
 * # navLink
 */
angular.module('publicApp')
  .directive('navLink', function ($location, $document, $timeout) {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        /**
         * Update nav link.
         */

        function updateNavLink() {
          var routeName = $location.path();
          var link      = element.find('a');
          if (routeName === link.attr('href')) {
            // set active nav link
            element.addClass('active');

            // set nav title
            var navTitle = $document[0].getElementById('nav-title');
            navTitle.textContent = link.attr('title');
          } else {
            element.removeClass('active');
          }
        } updateNavLink();

        /**
         * Handle "viewLoaded" events.
         */

        scope.$on('viewLoaded', function() {
          $timeout(updateNavLink);
        });
      }
    };
  });
