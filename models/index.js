// user
// id
// username
// password
// posts ids fk
// comments ids fk

// blogpost
// id
// userid fk
// username
// comments ids fk
// title
// content
// date created

// comment
// id
// userid fk
// username
// post id fk
// content
// date created

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

BlogPost.belongsTo(User);
Comment.belongsTo(User);
Comment.belongsTo(BlogPost);
User.hasMany(BlogPost);
User.hasMany(Comment);
BlogPost.hasMany(Comment);

module.exports = { User, BlogPost, Comment };
