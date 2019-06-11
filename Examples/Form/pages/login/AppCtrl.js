angular.module("myApp");

(function() {
    'use strict';
  
    angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
        .controller('AppCtrl', AppCtrl);
  
    function AppCtrl($scope) {
      $scope.currentNavItem = 'page1';
  
      $scope.goto = function(page) {
        $scope.status = "Goto " + page;
      };
    }
  })();
  
 