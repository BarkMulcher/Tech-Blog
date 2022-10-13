const { Comment } = require('../models');
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

// try {
//     const user_id = req.session.user_id;
//     const { blog_id, content } = req.body;

//     if (!user_id || !blog_id || !content) {
//         res.json({ message: 'No comment'});
//     }

//     const newComment = await Comment.create({
//         content,
//         blog_id,
//         user_id
//     })
//     res.status(200).json(newComment)
// } catch (err) {
//     res.status(500).json(err)
// }