const withAuth = require('../utils/auth');
const router = require('express').Router();
const { Post } = require('../models');

router.get('/', withAuth, async (req, res) => {
  try {
    res.render('post-now', {loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const data = await Post.findByPk(req.params.id);
    const post = data.get({ plain: true });
    res.render('post-now', {post, loggedIn: req.session.loggedIn});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
