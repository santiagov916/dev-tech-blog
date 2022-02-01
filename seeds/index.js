const { Comment, Post, User } = require('../models');

const userSeed = require('./user-seeds');
const postSeed = require('./post-seeds');
const commentSeed = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('-sequelize');
  await userSeed();
  console.log('-seedUser');

  await postSeed();
  console.log('-seedPost');

  await commentSeed();
  console.log('-seedComments');

  process.exit(0);
};

seedAll();