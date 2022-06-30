const {reverse} = require('dns');
const Blogs = require('../models/blog')

const getAllBlogs = async (req, res) => {
    try {
        const list = await Blogs.find({});
        res
            .status(200)
            .render("home", {posts: list});
    } catch (error) {
        reverse
            .status(500)
            .send(error);
    }
}

const getSomething = (req, res) => {
    res.send("Getting Something");
}

const createBlog = async (req, res) => {
    res.render("compose");
}
const composeBlog = async (req, res) => {
    try {
        await Blogs.create(
            {title: req.body.postTitle, writer: req.body.postWriter, content: req.body.postBody}
        );
        res
            .status(201)
            .redirect("home");
    } catch (error) {
        console.log(req.body);
        res
            .status(500)
            .write("Please try again")
            .json({msg: error});
    }
}
module.exports = {
    getAllBlogs,
    getSomething,
    createBlog,
    composeBlog
}