angular.module("home",[]).
	controller('homeCtrl', ['$scope', function($scope){
		$scope.hello = "hello home!";
	}])