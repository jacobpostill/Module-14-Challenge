const router = require('express').Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
  try {
    const data = await Post.findAll();
    const posts = data.map((post) =>
    post.get({ plain: true })
    );
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login', {signupStatus: req.session.signupStatus});
});

module.exports = router;
