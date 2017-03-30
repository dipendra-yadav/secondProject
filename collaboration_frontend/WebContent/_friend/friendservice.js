app.factory('FriendService', function($http) {
	
	console.log('**********From friendservice.js => Entering FriendService')
	
	var BASE_URL = "http://localhost:9090/collaboration_backend"
	var friendService = this;

	friendService.getAllFriends = function() {
		console.log('**********From friendservice.js => getAllFriends() => calling backend for /getAllFriends')
		return $http.get(BASE_URL + "/getAllFriends");
	}
	
	
	friendService.pendingRequest = function() {
		console.log('**********From friendservice.js => pendingRequest() => calling backend for /pendingRequest')
		return $http.get(BASE_URL + "/pendingRequest")
	}
	
	
	friendService.updateFriendRequest = function(friendStatus, fromId) {
		console.log('**********From friendservice.js => updateFriendRequest() => calling backend for /updateFriendRequest')
		return $http.put(BASE_URL + "/updateFriendRequest/" + friendStatus
				+ "/" + fromId)
	}
	
	return friendService;
})