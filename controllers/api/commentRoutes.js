const { Comment } = require('../../models');
const router = require('express').Router();

router.post('/', async (req, res) => {
    Comment.create({ 
        ...req.body, 
        user_id: req.session.user_id 
    })
    .then(newComment => {
      console.log(newComment);
      res.json(newComment);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router;

