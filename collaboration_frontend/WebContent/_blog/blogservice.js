app.factory('BlogService',function($http){
	
	console.log('**********From blogservice.js => Entering BlogService')
	
	var blogService=this;
	var BASE_URL = "http://localhost:9090/collaboration_backend"
	
	// create a new blog
	blogService.createBlog=function(blog){
		console.log('**********From blogservice.js => createBlog() => calling backend for /createBlog')
		return $http.post(BASE_URL + "/blog/createBlog", blog);
	}
	
	// get all blogs
	blogService.getAllBlogs=function(){
		console.log('**********From blogservice.js => getAllBlogs() => calling backend for /getAllBlogs')
		return $http.get(BASE_URL + "/blog/getAllBlogs")
	}
	
	// get blog details
	blogService.getBlogDetails=function(id){
		console.log('**********From blogservice.js => getBlogDetails() => calling backend for /getBlogDetails')
		return $http.get(BASE_URL + "/blog/getBlogDetails/" + id)
	}
	
	// get all comments
	blogService.getBlogComments=function(id){
		console.log('**********From blogservice.js => getBlogComments() => calling backend for /getBlogComments')
		return $http.get(BASE_URL + "/blog/getBlogComments/"+id)
	}
	
	// Add Blog comment
	blogService.addBlogComment=function(comment){
		console.log('**********From blogservice.js => addBlogComment() => calling backend for /addBlogComment')
		return $http.post(BASE_URL + "/blog/addBlogComment", comment)
	}

	return blogService;
})