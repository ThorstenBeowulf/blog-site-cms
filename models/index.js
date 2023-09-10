// a post has many comments
// a post has one user

// a comment has one post
// a comment has one user

// a user has many posts and many comments

// a user owns a post
// a user owns a comment
// if a user ceases to exist, their owned posts and comments cease to exist
// if a post ceases to exist, the comments on the post cease to exist

const User = require('./user');
const BlogPost = require('./blogpost');
const Comment = require('./comment');

User.hasMany(BlogPost);
BlogPost.belongsTo(User);
User.hasMany(Comment);
Comment.belongsTo(User);
BlogPost.hasMany(Comment);
Comment.belongsTo(BlogPost);



module.exports = { User, BlogPost, Comment };
