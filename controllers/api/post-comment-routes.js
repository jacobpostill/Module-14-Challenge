const { Comment } = require('../../models');
const router = require('express').Router();

router.post('/', async (req, res) => {
  try {
    const comment = await Comment.create({
      post_id: req.body.postid,
      detail: req.body.postCommentDetail,
      poster_id: req.session.userid,
      poster: req.session.username,
      created_time: Date.now(),
      updated_time: Date.now(),
    });

    res.status(200).json(comment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }});


module.exports = router;