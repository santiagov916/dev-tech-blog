const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');


// Post associations
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

// Comment associations
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
}),

module.exports = { User, Post, Comment };