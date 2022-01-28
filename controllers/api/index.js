const router = require('express').Router();

const userRoutes = require('./user-routes');
router.use('/user', userRoutes);

const postRoutes = require('./post-routes');
router.use('/post', postRoutes);

const commentRoute = require('./comment-routes');
router.use('/comment', commentRoute);

module.exports = router;