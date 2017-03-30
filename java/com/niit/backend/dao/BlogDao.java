package com.niit.backend.dao;

import java.util.List;

import com.niit.backend.model.BlogComment;
import com.niit.backend.model.Blog;
import com.niit.backend.model.User;

public interface BlogDao {

	Blog createBlog(User user, Blog blog);

	List<Blog> getAllBlogs();

	Blog getBlogById(int id);

	List<BlogComment> getBlogComments(int id);

	Blog addBlogPostComment(User user, BlogComment blogComment);
}
