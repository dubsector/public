/*jshint newcap: false */
'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('PortfolioCtrl', function ($window, $scope) {
    /**
     * Module dependencies.
     */

    var Lazy = $window.Lazy;

    /**
     * Portfolio.
     */

    $scope.projects = [
      // Garry's Mod
      {
        avocational: true,
        name:        '-',
        small:       '(“Dash”)',
        language:    'Lua',
        download:    '-.zip',
        type:        'Addon',
        for:         'Garry’s Mod',
        description: 'Adds real-time scripting to Garry’s Mod.',
        when:        2013
      },
      {
        avocational: true,
        name:        'Trouble in Terrorist Town: Connection',
        language:    'Lua',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/Trouble%20In%20Terrorist%20Town%20Connection.r32.portfolio.png',
        type:        'Addon',
        for:         'Garry’s Mod',
        description: 'Trouble in Terrorist Town: Connection is a ' +
                     'beautifully flat and modern redesign of TTT’s head-up ' +
                     'display and core UI.',
        when:        2013
      },
      // Half-Life 2: Sandbox
      {
        avocational: true,
        name:        'Half-Life 2: Sandbox',
        language:    'C++',
        repository:  'https://code.google.com/p/hl2sb-src/',
        type:        'Game',
        for:         'Source Engine',
        description: 'Half-Life 2: Sandbox is an open-source sandbox ' +
                     'modification of the Source Engine which provides Lua ' +
                     'as a scripting platform for developers to quickly ' +
                     'prototype game ideas.',
        when:        2011
      },
      // Knight Game II
      {
        avocational: true,
        name:        'Knight Game II',
        language:    'Lua',
        type:        'Game',
        for:         'LÖVE',
        description: 'A pixel-perfect recreation of Knight Game II from ' +
                     'Antics comic strip #203.',
        when:        2011
      },
      // Lua Libraries
      {
        avocational: true,
        name:        'lbass',
        language:    'C',
        download:    'lbass.zip',
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        description: 'BASS Audio Library bindings for Lua 5.1',
        when:        2012
      },
      {
        avocational: true,
        name:        'lclass',
        language:    'Lua',
        repository:  'https://github.com/andrewmcwatters/lclass',
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        description: 'lclass is a class implementation for Lua 5.1. It has ' +
                     'been designed to be the simplest, most ' +
                     'comprehensive, and smallest class implementation for ' +
                     'Lua.',
        when:        2012
      },
      {
        avocational: true,
        name:        'lopensteamworks',
        language:    'C',
        download:    'lopensteamworks.zip',
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        description: 'Open Steamworks bindings for Lua 5.1',
        when:        2011
      },
      {
        avocational: true,
        name:        'lsapi',
        language:    'C',
        download:    'lsapi.zip',
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        description: 'Microsoft Speech API bindings for Lua 5.1',
        when:        2012
      },
      {
        avocational: true,
        name:        'lwinapi',
        language:    'C',
        download:    'lwinapi.zip',
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        description: 'Windows API bindings for Lua 5.1',
        when:        2012
      },
      {
        avocational: true,
        name:        'lwolframalpha',
        language:    'Lua',
        download:    'lwolframalpha.zip',
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        description: 'Wolfram|Alpha Webservice API bindings for Lua 5.1',
        when:        2012
      },
      {
        avocational: true,
        name:        'steamcommunity-utils',
        language:    'Lua',
        download:    'steamcommunity-utils.zip',
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        description: 'A toolkit in Lua for interacting with Steam Community',
        when:        2011
      },
      {
        avocational: true,
        name:        'Steam Web Lua API',
        language:    'Lua',
        download:    'steamweb-lua-api.zip',
        type:        'Reverse Engineering',
        for:         'Steam’s Web API',
        description: 'The Steam Web Lua API is a small library originally ' +
                     'designed to provide the web interfaces utilized in ' +
                     'Steam Mobile. These interfaces were reverse ' +
                     'engineered before Steam Mobile had been officially ' +
                     'released, during the application’s beta.',
        when:        2012
      },
      {
        avocational: true,
        name:        'Steam Web PHP API',
        language:    'PHP',
        download:    'steamweb-php-api.zip',
        type:        'Libraries and APIs',
        for:         'PHP',
        description: 'An API wrapper for interfacing with Steam’s Web API ' +
                     'using PHP',
        when:        2014
      },
      // Websites
      {
        avocational: false,
        name:        'andrewmcwatters.com (2014)',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/andrewmcwatters.com.r208.portfolio.png',
        repository:  'https://github.com/andrewmcwatters/public',
        type:        'Website',
        for:         'Andrew McWatters',
        description: 'Personal website, portfolio, and résumé',
        when:        2014
      },
      {
        avocational: true,
        name:        'Metrics Hunter',
        language:    'PHP',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/metrics-hunter.r34.portfolio.r2.png',
        type:        'Website',
        for:         'Dota 2',
        description: 'The First Open-Source Decentralized Dota 2 ' +
                     'Statistics Tracker',
        when:        2014
      },
      {
        avocational: false,
        name:        'Binocular',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/binocular.r61.portfolio.png',
        type:        'Website',
        for:         '(Private Client)',
        description: 'Internal project tracker for small teams',
        when:        2013
      },
      {
        avocational: false,
        name:        'andrewmcwatters.com (2013)',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/andrewmcwatters.com.r159.portfolio.png',
        type:        'Website',
        for:         'Andrew McWatters',
        description: 'Personal website, portfolio, and résumé',
        when:        2013
      },
      {
        avocational: false,
        name:        'Let the Koran Speak',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/letthekoranspeak.com.r39.portfolio.png',
        type:        'Website',
        for:         'Adam & Eve’s Alter',
        description: 'Religious educational program',
        when:        2013
      },
      {
        avocational: false,
        name:        'Individual Executive Layer',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/I.E.L.r47.portfolio.png',
        type:        'Website',
        for:         'boo1ean GmbH',
        description: 'Product website for boo1ean’s digital rights ' +
                     'management software',
        when:        2013
      },
      {
        avocational: false,
        name:        'boo1ean.de',
        language:    'CSS',
        type:        'Website',
        for:         'boo1ean GmbH',
        description: 'Company website',
        when:        2013
      },
      {
        avocational: true,
        name:        'northsidechurchofchrist.org',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/northsidechurchofchrist.org.r35.portfolio.png',
        small:       'Redesign Proposal',
        type:        'Website',
        for:         'Northside church of Christ',
        description: 'Church website',
        when:        2012
      },
      {
        avocational: false,
        name:        'elpishost.com',
        language:    'CSS',
        type:        'Website',
        for:         'Elpis Host',
        description: 'Game server provider website',
        when:        2012
      },
      {
        avocational: false,
        name:        'andrewmcwatters.com (2012)',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/andrewmcwatters.com.r85.portfolio.png',
        type:        'Website',
        for:         'Andrew McWatters',
        description: 'Personal website, portfolio, and résumé',
        when:        2012
      },
      {
        avocational: false,
        name:        'phxfaction.com',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/phoenixfaction.com.r60.portfolio.png',
        type:        'Website',
        for:         'Phoenix Faction Studios',
        description: 'Game journalism blog',
        when:        2012
      },
      {
        avocational: false,
        name:        'phoenixerve.com',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/phoenixerve.com.r19.portfolio.png',
        type:        'Website',
        for:         'Phoenixerve',
        description: 'Game server provider website',
        when:        2011
      },
      {
        avocational: false,
        name:        'andrewmcwatters.com (2011)',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/andrewmcwatters.com.r6.portfolio.png',
        type:        'Website',
        for:         'Andrew McWatters',
        description: 'Personal website, portfolio, and résumé',
        when:        2011
      },
      {
        avocational: false,
        name:        'brohoster.com',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/brohoster.com.r11.portfolio.png',
        type:        'Website',
        for:         'Brohoster',
        description: 'Game server provider website',
        when:        2011
      },
      // Webapps
      {
        avocational: false,
        name:        'NPL Time',
        language:    'CSS',
        concept:     'https://www.pixelapse.com/andrewmcwatters/projects/NPL%20Time',
        type:        'Webapp',
        for:         'NPL Construction Co.',
        description: 'Mobile payroll iOS application',
        when:        2014
      },
      // APIs
      {
        avocational: false,
        name:        'NPL API',
        language:    'JavaScript',
        type:        'Libraries and APIs',
        for:         'NPL Construction Co.',
        description: 'Payroll, telemetrics, auditing, and internal file ' +
                     'sharing API',
        when:        2014
      },
      // Minecraft
      {
        avocational: true,
        name:        'PluginSync',
        language:    'Java',
        download:    'PluginSync.zip',
        type:        'Addon',
        for:         'Minecraft',
        description: 'A Bukkit plugin to sync your server to a plugin depot.',
        when:        2013
      },
      // Desktop Services
      {
        avocational: true,
        name:        'scrnshot',
        language:    'C#',
        download:    'scrnshot.zip',
        type:        'Application',
        for:         'Windows',
        description: 'A simple screenshot tool',
        when:        2013
      }
    ];

    /**
     * Category count.
     */

    $scope.count = function(type) {
      return Lazy($scope.projects)
        .where({type: type})
        .toArray()
        .length;
    };

    /**
    * Functional "type" length helper.
    */

    function typeLength(project) {
      return $scope.count(project.type);
    }

    /**
    * Descending chronology.
    */

    var descending = true;

    /**
     * Categories.
     */

    $scope.categories = Lazy($scope.projects)
      .sortBy(typeLength, descending)
      .pluck('type')
      .uniq()
      .toArray();

    /**
     * Options.
     */

    $scope.options = {
      hideAvocational: false
    };

    $scope.$watch('options.hideAvocational', function() {
      $scope.filter($scope.activeFilter);
    });

    /**
     * Functional "when" helper.
     */

    function when(project) {
      return project.when;
    }

    /**
     * Filter results.
     */

    $scope.filter = function(type) {
      if (type === $scope.activeFilter) {
        $scope.activeFilter = null;
        $scope.filter();
        return;
      }

      // set active filter
      $scope.activeFilter = type;
      $scope.results = Lazy($scope.projects);

      // filter by type
      if (type) {
        $scope.results =
        $scope.results
          .where({type: type});
      }

      // hide avocational projects
      if ($scope.options.hideAvocational) {
        $scope.results =
        $scope.results
          .where({avocational: false});
      }

      // list years of results
      $scope.years = Lazy($scope.results.toArray())
        .sortBy(when, descending)
        .pluck('when')
        .uniq()
        .toArray();

      // list results
      $scope.results = $scope.results
        .groupBy(when)
        .toObject();
    }; $scope.filter();

    /**
     * Result count.
     */

    $scope.resultCount = function() {
      var size = 0;
      function count(year) {size += year.length;}
      Lazy($scope.results)
        .each(count);
      return size;
    };
  });
