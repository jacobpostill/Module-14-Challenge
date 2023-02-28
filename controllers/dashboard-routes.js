const { Post } = require('../models');
const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
      const data = await Post.findAll({
        where: {
          poster_id: req.session.userid,
        },
      });
      const posts = data.map((post) =>
        post.get({ plain: true })
      );
      res.render('dashboard', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  