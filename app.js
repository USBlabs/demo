var app = angular.module('linkHunt', []);

app.controller('main', [
	'$scope',
	function($scope){
		$scope.links = [
			'link 1',
			'link 2',
			'link 3',
			'link 4',
			'link 5'
		];
}]);