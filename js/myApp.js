//ngMadLibs refactor2

angular.module('myApp', [])
	.controller('MadLibController', function($scope) {
		$scope.showMadLibs = false;

		$scope.submit = function() {
			$scope.showMadLibs = true;
		};
	});
