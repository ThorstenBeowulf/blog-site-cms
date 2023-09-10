const router = router('express').Router();
const { User, BlogPost, Comment } = require('../models');
const checkAuth = require('../utils/authRedir');

// homepage

router.get('/', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogPosts = blogPostData.map((blogPost) =>
      blogPost.get({ plain: true })
    );

    res.render('homepage', {
      blogPosts,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// login

router.get('/login', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogPosts = blogPostData.map((blogPost) =>
      blogPost.get({ plain: true })
    );

    res.render('login', {
      blogPosts,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// signup

router.get('/signup', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogPosts = blogPostData.map((blogPost) =>
      blogPost.get({ plain: true })
    );

    res.render('homepage', {
      blogPosts,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// profile

router.get('/dashboard/:id', checkAuth, async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      where: {user_id: req.params.id},
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogPosts = blogPostData.map((blogPost) =>
      blogPost.get({ plain: true })
    );

    res.render('dashboard', {
      blogPosts,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
