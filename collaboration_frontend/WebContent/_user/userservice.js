app.factory('UserService', function($http) {

	console.log('**********From userservice.js => Entering UserService')
	
	var userService = this
	var BASE_URL = "http://localhost:9090/collaboration_backend"
	
	userService.login = function(user) {
		console.log('**********From UserService.js => login() => calling backend for /login')
		return $http.post(BASE_URL + "/login", user)
	}

	userService.logout=function(){
		console.log('**********From UserService.js => logout() => calling backend for /logout')
		return $http.put(BASE_URL + "/logout")
	}
	
	userService.registerUser = function(user) {
		console.log('**********From UserService.js => registerUser() => calling backend for /register')
		return $http.post(BASE_URL + "/register", user)
	}
	
	userService.getAllUsers=function(){
		console.log('**********From UserService.js => getAllUsers() => calling backend for /getUsers')
		return $http.get(BASE_URL +"/getUsers")
	}
	
	userService.friendRequest=function(username){
		console.log('**********From UserService.js => friendRequest() => calling backend for /friendRequest');
		return $http.post(BASE_URL+ '/friendRequest',username);
	}
	
	return userService
})