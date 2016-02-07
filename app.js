var app = angular.module('linkHunt', []);

app.controller('main', [
	'$scope',
	function($scope){
		$scope.links = [
			{title: 'Link 1', upvotes: 1},
			{title: 'Link 2', upvotes: 3},
			{title: 'Link 3', upvotes: 8},
			{title: 'Link 4', upvotes: 2},
			{title: 'Link 5', upvotes: 1}
		];

		$scope.addLink = function() {
			if (!$scope.title) { return; }
			$scope.links.push({title: $scope.title, upvotes: 0});
			$scope.title = '';
		}
}]);