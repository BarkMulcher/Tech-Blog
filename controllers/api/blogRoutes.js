const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// create new blog
router.post('/', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete a blog post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogData) {
            res.status(404).json({ message: 'No blog found with that ID!' });
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update a blog post
router.put('/edit/:id', withAuth, async (req, res) => {
    try {
        const updateBlog = await Blog.update(
            {
                where: {
                    id: req.params.id
                }
            });
        
        

        res.status(200).json(updateBlog);
        res.redirect('/editBlogPost');
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;