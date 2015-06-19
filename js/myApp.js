//ngMadLibs refactor3

"use strict";

var app = angular.module('myApp', ['ngAnimate'])
		.controller('MadLibController', ['$scope', function($scope) {
			$scope.showMadLibs = false;

			$scope.madLibValid = function() {
				$scope.showMadLibs = true;
			};

			$scope.resetForm = function() {
				mlForm.reset();
				$scope.data = {};
				$scope.showMadLibs = false;
			};
		}])
