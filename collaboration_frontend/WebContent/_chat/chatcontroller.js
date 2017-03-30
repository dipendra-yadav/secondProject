app.controller("ChatController", function($scope, $rootScope, ChatService) {
	
	console.log('**********From chatcontroller.js => Entering ChatController')
	
	$scope.messages = [];
	
	$scope.message = "";
	
	$scope.max = 140;

	$scope.addMessage = function() {
		console.log('**********From chatcontroller.js => addMessage() => Entering the addMessage function')
		ChatService.send($rootScope.currentUser.username + " : " + $scope.message);
		$scope.message = "";
	};

	ChatService.receive().then(null, null, function(message) {
		console.log("**********From chatcontroller.js => receive() => Entering function for login")
		$scope.messages.push(message);
	});
});