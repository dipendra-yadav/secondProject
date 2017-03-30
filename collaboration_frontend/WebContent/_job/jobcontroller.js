app.controller('JobController', function($scope,$log ,$rootScope, $location, JobService) {
	
	console.log('**********From JobController.js => Entering JobController')
	
	$scope.job = {
		jobTitle : '',
		jobDescription : '',
		skillsRequired : '',
		salary : '',
		location : ''
	} 
	
	$scope.jobs

	// Post Job in createJob.html
	$scope.saveJob = function() {
		console.log('**********From JobController.js => saveJob() => Entering the saveJob function')
		JobService.saveJob($scope.job)
		.then(
		function(response) {
			console.log("**********From JobController.js => saveJob() => success - Entering success function for saveJob")
			console.log("**********response.status => " + response.status)
			alert("Job Posted Successfully")
			$location.path("/home")
		}), 
		function(response) {
			console.log("**********From JobController.js => saveJob() => failure - Entering failure function for saveJob")
			console.log("**********response.status => " + response.status)
			console.log("**********error message returned from backend => " + response.data.message)
			$location.path("/postJob")
		}
	}
	
	// Get All Jobs
	function getAllJobs(){
		console.log('**********From JobController.js => getAllJobs() => Entering the getAllJobs function')
		JobService.getAllJobs()
		.then(
		function(response) {
			console.log("**********From JobController.js => getAllJobs() => success - Entering success function for getAllJobs")
			console.log("**********response.status => " + response.status)
			$scope.jobs = response.data
		}), 
		function(response) {
			console.log("**********From JobController.js => getAllJobs() => failure - Entering failure function for getAllJobs")
			console.log("**********response.status => " + response.status)
		}
	}

	// calling the function => to get all jobs
	getAllJobs() 
	
})