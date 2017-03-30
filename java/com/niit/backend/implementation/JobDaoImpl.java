package com.niit.backend.implementation;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.niit.backend.dao.JobDao;
import com.niit.backend.model.Job;

@Repository
public class JobDaoImpl implements JobDao {

	@Autowired
	private SessionFactory sessionFactory;

	// to post a job
	public void postJob(Job job) {
		Session session = sessionFactory.openSession();
		session.save(job);
		session.flush();
		session.close();
	}

	// to get all jobs
	public List<Job> getAllJobs() {
		Session session = sessionFactory.openSession();
		Query query = session.createQuery("from Job");
		List<Job> jobs = query.list();
		session.close();
		return jobs;
	}

	// to get job details
	public Job getJobDetail(int jobId) {
		Session session = sessionFactory.openSession();
		Job job = (Job)session.get(Job.class, jobId);
		session.close();
		return job;
	}

}
