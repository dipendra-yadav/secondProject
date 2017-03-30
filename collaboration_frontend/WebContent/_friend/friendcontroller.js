app.controller('FriendController', function($scope, $location, FriendService) {
	
	console.log('**********From friendcontroller.js => Entering FriendController')
	
	$scope.friends = []
	
	$scope.pendingRequest = []
	
	$scope.friends = FriendService.getAllFriends()
	.then(
	function(response) {
		console.log("**********From friendcontroller.js => friends() => success - Entering success function for friends")
		console.log("**********response.status => " + response.status)
		console.log("**********response.data => " + response.data)
		$scope.friends = response.data;
	}, 
	function(response) {
		console.log("**********From friendcontroller.js => friends() => failure - Entering failure function for friends")
		console.log("**********response.status => " + response.status)
		console.log("**********response.data => " + response.data)
	})

	$scope.pendingRequest = FriendService.pendingRequest()
		.then(
		function(response) {
			console.log("**********From friendcontroller.js => pendingRequest() => success - Entering success function for pendingRequest")
			console.log("**********response.status => " + response.status)
			console.log("**********response.data => " + response.data)
			$scope.pendingRequest = response.data
			console.log("**********response.pendingRequest => " + response.pendingRequest)
		}, 
		function(response) {
			console.log("**********From friendcontroller.js => pendingRequest() => failure - Entering failure function for pendingRequest")
			console.log("**********response.status => " + response.status)
		})

	$scope.updatePendingRequest = function(fromId, friendStatus) {
		console.log('**********From friendcontroller.js => updatePendingRequest() => Entering the updatePendingRequest function')
		FriendService.updateFriendRequest(friendStatus, fromId)
		.then(
		function(response) {
			console.log("**********From friendcontroller.js => updatePendingRequest() => success - Entering success function for updatePendingRequest")
			console.log("**********response.status => " + response.status)
				if (friendStatus == 'A') {
					alert('You have accepted the friend request. You and '
								+ fromId + " are friends");
					$location.path('/friendsList')
				} 
				else {
					alert('You have Denied the friend requet!')
				}
			}, 
		function(response) {
			console.log("**********From friendcontroller.js => updatePendingRequest() => failure - Entering failure function for updatePendingRequest")
			console.log("**********response.log => " + response.log)
		})
	}
	
})