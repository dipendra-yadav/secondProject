var app = angular.module("myApp", [ 'ngRoute','ngCookies' ])
app.config(function($routeProvider) {
	console.log('**********From App.js => Entering myApp')
	$routeProvider

	// loads this page first - home
	.when('/', {
		templateUrl : '_home/home.html'
	})

	
	// Home
	.when('/home', {
		templateUrl : '_home/home.html'
	})
	
	
	// Login
	.when('/login', {
		controller : 'UserController',
		templateUrl : '_user/login.html'
	})
	
	
	// for a new user to register
	.when('/register', {
		controller : 'UserController',
		templateUrl : '_user/register.html'
	})

	
	// to post a new job
	.when('/postJob', {
		controller : 'JobController',
		templateUrl : '_job/createJob.html'
	})

	
	// to view all the jobs
	.when('/getAllJobs', {
		controller : 'JobController',
		templateUrl : '_job/jobsTitles.html'
	})

	
	// to view the job detail of a job
	.when('/jobDetail/:jobId', {
		controller : 'JobDetailController',
		templateUrl : '_job/jobDetail.html'
	})
	
	
	// to upload a picture
	.when('/uploadPicture', {
		templateUrl : '_user/uploadPicture.html'
	})
	
	
	// to view list of friends
	.when('/friendsList',{
		controller:'FriendController',
		templateUrl:'_friend/listOfFriends.html'
	})
	
	
	// to view list of pending firend requests
	.when('/pendingRequest',{
		controller:'FriendController',
		templateUrl:'_friend/pendingRequest.html'
	})
	
	
	// to view list of all users
	.when('/getAllUsers',{
		controller:'UserController',
		templateUrl:'_user/listOfUsers.html'
	})
	
	
	// to create a new blog
	.when('/createBlog',{
		controller:'BlogController',
		templateUrl:'_blog/createBlog.html'
	})
	
	
	// to view all blogs
	.when('/getAllBlogs',{
		controller:'BlogController',
		templateUrl:'_blog/listOfBlogs.html'
	})
	
	
	// to view the Blog detail of a blog
    .when('/getBlogDetails/:id',{
		controller:'BlogDetailController',
		templateUrl:'_blog/blogDetails.html'
	})
	
	
	// to chat
	.when('/chat',{
		controller:'ChatController',
		templateUrl:'_chat/chat.html'
	})
})

app.run(function($cookieStore,$rootScope,$location,UserService){
	
	if($rootScope.currentUser==undefined)
		$rootScope.currentUser=$cookieStore.get('currentUser')
		
	$rootScope.logout=function(){
		console.log('logout function')
		delete $rootScope.currentUser;
		$cookieStore.remove('currentUser')
		UserService.logout()
		.then(function(response){
			console.log("logged out successfully..");
			$rootScope.message="Logged out Successfully";
			$location.path('/login')
		},
		function(response){
			console.log(response.status);
		})
		
	}	
})