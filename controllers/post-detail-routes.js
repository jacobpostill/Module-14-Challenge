const withAuth = require('../utils/auth');
const router = require('express').Router();
const { Post, Comment } = require('../models');

router.get('/:id', withAuth, async (req, res) => {
    try {
    const data1 = await Post.findByPk(req.params.id);
    const post = data1.get({ plain: true });
    const data2 = await Comment.findAll(
    {
      where: {
        post_id: req.params.id,
      },
    });
    const comments = data2.map((commentObj) =>
      commentObj.get({ plain: true })
    );
    res.render('post-detail', { post, comments, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;