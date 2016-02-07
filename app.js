var app = angular.module('linkHunt', []);

app.controller('main', [
	'$scope',
	function($scope){
		$scope.hello = "Hello World";
}]);