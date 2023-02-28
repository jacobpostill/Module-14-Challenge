const router = require('express').Router();

const userRoutes = require('./user-routes');
const comment = require('./post-comment-routes');
const post = require('./post-routes');


router.use('/users', userRoutes);
router.use('/posts', post);
router.use('/comments', comment);

module.exports = router;
