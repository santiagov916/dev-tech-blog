const router = require('express').Router();

// link to the homepage api
const homeRoutes = require('./home-routes');
router.use('/', homeRoutes);

// link to mysql database api
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

module.exports = router;