const router = require('express').Router();

// link to the homepage api
const homeRoutes = require('./home-routes');
router.use('/', homeRoutes);

// link to mysql database api
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const dashboardRoutes = require('./dashboard-routes');
router.use('/dashboard', dashboardRoutes);

module.exports = router;