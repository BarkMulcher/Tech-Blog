const router = require("express").Router();
const { Blog } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
    Blog.findAll({
      where: {
        userId: req.session.userId
      }
    })
      .then(dbBlogData => {
        const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));
        res.render("all-posts-admin", {
          layout: "dashboard",
          blogs
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
});
module.exports = router;