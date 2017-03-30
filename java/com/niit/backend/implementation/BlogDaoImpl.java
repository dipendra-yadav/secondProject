package com.niit.backend.implementation;

import java.util.Date;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.niit.backend.dao.BlogDao;
import com.niit.backend.model.BlogComment;
import com.niit.backend.model.Blog;
import com.niit.backend.model.User;

@Repository
public class BlogDaoImpl implements BlogDao {
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public List<Blog> getAllBlogs() {
		Session session = sessionFactory.openSession();
		Query query = session.createQuery("from Blog");
		List<Blog> blogs = query.list();
		session.close();
		return blogs;
	}

	@Override
	public Blog getBlogById(int id) {
		Session session = sessionFactory.openSession();
		Blog blog = (Blog) session.get(Blog.class, id);
		session.close();
		return blog;
	}

	@Override
	public Blog createBlog(User user, Blog blog) {
		Session session = sessionFactory.openSession();
		blog.setCreatedBy(user);
		blog.setCreatedOn(new Date());
		session.save(blog);
		session.flush();
		Blog addedBlog = (Blog) session.get(Blog.class, blog.getId());
		return addedBlog;
	}

	@Override
	public Blog addBlogPostComment(User user, BlogComment blogComment) {
		Session session = sessionFactory.openSession();
		blogComment.setCreatedBy(user);
		blogComment.setCreatedOn(new Date());
		Blog blogPost = (Blog) session.get(Blog.class, blogComment.getBlog().getId());
		blogComment.setBlog(blogPost);
		session.merge(blogComment);
		session.flush();
		session.close();
		return blogPost;

	}

	@Override
	public List<BlogComment> getBlogComments(int id) {
		Session session = sessionFactory.openSession();
		Blog blog = (Blog) session.get(Blog.class, id);
		List<BlogComment> blogComments = blog.getComments();
		session.close();
		return blogComments;
	}

}
