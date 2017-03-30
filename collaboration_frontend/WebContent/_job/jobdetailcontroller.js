app.controller('JobDetailController', function($scope,$log,$routeParams, $location, JobService) {
	
	console.log('**********From JobDetailController.js => Entering JobDetailController')
	
	var jobId = $routeParams.jobId 
	
	// Get job Details of a Job
	function getJobDetail(jobId) { 
		console.log('**********From JobDetailController.js => getJobDetail() => Entering the getJobDetail function')
		JobService.getJobDetail(jobId)
		.then(
		function(response) {
			console.log("**********From JobDetailController.js => getJobDetail() => success - Entering success function for getJobDetail") 
			console.log("**********response.status => " + response.status)
			console.log(response.data) 
			$scope.jobDetail= response.data
		}), 
		function(response) {
			console.log("**********From JobDetailController.js => getJobDetail() => failure - Entering failure function for getJobDetail") 
			console.log("**********response.status => " + response.status) 
		}
	}
	
	// calling the function => Get job Details of a Job
	getJobDetail(jobId)
	
})