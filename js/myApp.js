//ngMadLibs refactor3

"use strict";

angular.module('myApp', [])
	.controller('MadLibController', function($scope) {
		$scope.showMadLibs = false;

		$scope.madLibValid = function() {
			$scope.showMadLibs = true;
		};

		$scope.resetForm = function() {
			$scope.showMadLibs = false;
			mlForm.reset();
			$scope.data = {};
		};
	})
