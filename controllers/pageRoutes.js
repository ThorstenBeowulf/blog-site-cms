const router = router('express').Router();
const { User, BlogPost, Comment } = require('../models');
const checkLoggedIn = require('../utils/authRedir');

// homepage

router.get('/', async (req, res) => {
  try {
    const blogPostSQL = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogPosts = blogPostSQL.map((blogPost) =>
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

// signup
