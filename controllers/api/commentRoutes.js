const router = require('express').Router();
const { Comment } = require('../../models');
const checkAuth = require('../../utils/authRedir');

// post
router.post('/', checkAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      // remember to add blogpost_id to body
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update

router.put('/:id', checkAuth, async (req, res) => {  res.status(200).json(req.body);});

// delete

router.delete('/:id', checkAuth, async (req, res) => {
  try {
    const commentData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
