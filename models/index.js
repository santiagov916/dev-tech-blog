const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const { Model, Dataypes } = require('sequelize');
const sequelize = require('../config/connection');

// User associations
User.hasMany(Post, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// Post associations
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
    foreignKey: post_id
});

// Comment associations
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
}),

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});



module.exports = { User, Post, Comment };