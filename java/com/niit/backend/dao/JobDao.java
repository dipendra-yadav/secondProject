package com.niit.backend.dao;

import java.util.List;

import com.niit.backend.model.Job;

public interface JobDao {
	void postJob(Job job);

	List<Job> getAllJobs();

	Job getJobDetail(int jobId);
}
