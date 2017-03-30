app.controller('BlogDetailController',function($routeParams,$scope,BlogService){
	
	console.log('**********From blogdetailcontroller.js => Entering BlogDetailController')
	
	var id = $routeParams.id
	
	$scope.blogDetails={}
	
	$scope.comment={body:'',blog:{}}
	
	// get blog details
	$scope.getBlogDetails = BlogService.getBlogDetails(id)
		.then(function(response){
			console.log("**********From blogdetailcontroller.js => getBlogDetails() => success - Entering success function for getBlogDetails")
			console.log("**********response.data => " + response.data)
			console.log("**********response.status => " + response.status)
			$scope.blogDetails=response.data;
			$scope.showComments=false;
		},
		function(response){
			console.log("**********From blogdetailcontroller.js => getBlogById() => failure - Entering failure function for getBlogById")
			console.log("**********response.status => " + response.status)
		}
	)
	
	// Edit blog
	$scope.editBlog=function(){
		$scope.isEditPost=true;
		BlogService.editPost()
	}
	
	// get all blog comments
	$scope.getBlogComments=function(id){
		console.log('**********From blogdetailcontroller.js => getBlogComments() => Entering the getBlogComments function')
		$scope.showComments=true;
		$scope.blogComments=BlogService.getBlogComments(id)
		.then(
		function(response){
			console.log("**********From blogdetailcontroller.js => getBlogComments() => success - Entering success function for getBlogComments")
			$scope.blogComments=response.data;
			console.log("**********response.data => " + response.data)
			console.log("**********response.status => " + response.status)
		},
		function(response){
			console.log("**********From blogdetailcontroller.js => getBlogComments() => failure - Entering failure function for getBlogComments")
			console.log("**********response.status => " + response.status)
		})
		
	}
	
	// add blog comment
	$scope.addBlogComment=function(){
		console.log('**********From blogdetailcontroller.js => addBlogComment() => Entering the addBlogComment function')
		$scope.comment.blog.id = $scope.blogDetails.id;
		$scope.comment.blog = $scope.blogDetails
        BlogService.addBlogComment($scope.comment)
        .then(
        function(response){
        	alert("Commented Successfully!")
        	$scope.comment.body = ''
        	console.log("**********From blogdetailcontroller.js => addBlogComment() => success - Entering success function for addBlogComment")
        	console.log("**********response.data => " + response.data)
			console.log("**********response.status => " + response.status)
        },
        function(response){
        	console.log("**********From blogdetailcontroller.js => addBlogComment() => failure - Entering failure function for addBlogComment")
			console.log("**********response.status => " + response.status)
        })
	}
})