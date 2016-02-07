var app = angular.module('linkHunt', []);

app.controller('main', [
	'$scope',
	function($scope){
		$scope.links = [
			{title: 'Link 1', votes: 1},
			{title: 'Link 2', votes: 3},
			{title: 'Link 3', votes: 8},
			{title: 'Link 4', votes: 2},
			{title: 'Link 5', votes: 1}
		];

		$scope.addLink = function() {
			if (!$scope.title) { return; }
			$scope.links.push({title: $scope.title, votes: 0});
			$scope.title = '';
		}

		$scope.incrementVotes = function(link) {
			link.votes = link.votes + 1;
		}

		$scope.decrementVotes = function(link) {
			link.votes = link.votes - 1;
		}
}]);