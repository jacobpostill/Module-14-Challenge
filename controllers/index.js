const router = require('express').Router();

const apiRoutes = require('./api');
const dashboard = require('./dashboard-routes.js');
const post = require('./post-now-routes.js');
const details = require('./post-detail-routes.js');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboard);
router.use('/post', details);
router.use('/postnow', post);


module.exports = router;
