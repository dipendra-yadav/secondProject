package com.niit.backend.implementation;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.niit.backend.dao.UserDao;
import com.niit.backend.model.User;

@Repository
public class UserDaoImpl implements UserDao {

	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private SessionFactory sessionFactory;

	// setters + getters
	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	// authenticate the user
	public User authenticate(User user) {
		Session session = sessionFactory.openSession();
		Query query = session.createQuery("from User where username=?  and password=?");
		// select * from User where username='smith' and password='123'
		query.setString(0, user.getUsername());
		query.setString(1, user.getPassword());
		User validUser = (User) query.uniqueResult();
		session.flush();
		session.close();
		return validUser;

	}

	// update the user
	public void updateUser(User user) {
		Session session = sessionFactory.openSession();
		User existingUser = (User) session.get(User.class, user.getId());

		// update online status as true
		existingUser.setOnline(user.isOnline());

		session.update(existingUser);
		session.flush();
		session.close();
	}

	// register the user
	public User registerUser(User user) {
		logger.debug("USERDAOIMPL - registerUser");

		Session session = sessionFactory.openSession();
		session.save(user);
		session.flush();
		session.close();

		logger.debug("User id in Dao " + user.getId());

		return user;

	}

	public List<User> getAllUsers(User user) {
		Session session = sessionFactory.openSession();
		SQLQuery query = session.createSQLQuery(
				"select * from collaboration_user where username in (select username from collaboration_user where username!=? minus(select to_id from collaboration_friend where from_id=? and status!='D' union select from_id from collaboration_friend where to_id=? and status!='D'))");
		query.setString(0, user.getUsername());
		query.setString(1, user.getUsername());
		query.setString(2, user.getUsername());
		query.addEntity(User.class);
		List<User> users = query.list();
		System.out.println(users);
		session.close();
		return users;
	}
}