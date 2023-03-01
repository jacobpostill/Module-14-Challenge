const { Post, Comment } = require('../../models');
const router = require('express').Router();

router.post('/', async (req, res) => {
  console.log(req.session)
  try {
    const data = await Post.create({
      subject: req.body.postSubject,
      detail: req.body.postDetail,
      img_url: req.body.postImgurl,
      poster_id: req.session.userid,
      poster: req.session.username,
      created_time: Date.now(),
      updated_time: Date.now(),
    });

    res.status(200).json(data);
  } catch (err) {
    console.log(err);

    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const data = await Post.update({
      subject: req.body.postSubject,
      detail: req.body.postDetail,
      img_url: req.body.postImgurl,
      updated_time: Date.now(),
      
    }, 
    {where: {
      id: req.params.id,
    }});

    res.status(200).json(data);
  } catch (err) {
    console.log(err);

    res.status(500).json(err);
  }
});


router.delete('/:id', async (req, res) => {  
  try {
    let data = await Post.findByPk(req.params.id, {});
    if (!data) {
      res.status(404).json({ message: `There is no post with this iD ${req.params.id}!` });
      return;
    }
    data = await Post.destroy({
      where: {
        id: req.params.id,
      },});
    const comment = await Comment.destroy({
      where: {
        post_id: req.params.id,
      },});
    if (data)
      res.status(200).json(`The following post has been removed: ${req.params.id}`);
    else
      res.status(200).json(`Post ${req.params.id} was unable to be removed.`);
  } catch (err) {
    console.log(err);

    res.status(500).json(err);
  }
});

module.exports = router;