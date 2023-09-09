const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');
const userData = require('./userData.json');
const blogpostData = require('./blogpostData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await BlogPost.bulkCreate(blogpostData, {
    returning: true,
  });
  await Comment.bulkCreate(commentData, {
    returning: true,
  });

  process.exit(0);
};
