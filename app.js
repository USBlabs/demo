var app = angular.module('linkHunt', []);

app.controller('main', [
	'$scope',
	function($scope){
		$scope.links = [
			{title: 'Link 1', url: 'http://www.example.com', votes: 1},
			{title: 'Link 2', url: 'http://www.example.com', votes: 3},
			{title: 'Link 3', url: 'http://www.example.com', votes: 8},
			{title: 'Link 4', url: 'http://www.example.com', votes: 2},
			{title: 'Link 5', url: 'http://www.example.com', votes: 1}
		];

		$scope.addLink = function() {
			if (!$scope.title || !$scope.url) { return; }
			$scope.links.push({
				title: $scope.title,
				url: $scope.url, 
				votes: 0
			});
			$scope.title = '';
			$scope.url = '';
		}

		$scope.incrementVotes = function(link) {
			link.votes = link.votes + 1;
		}

		$scope.decrementVotes = function(link) {
			link.votes = link.votes - 1;
		}
}]);