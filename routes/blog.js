const express = require("express");
const router = express.Router();

const {getAllBlogs,createBlog, composeBlog} = require("../controllers/blog");

router.route('/').get(getAllBlogs);
router.route('/createBlog').get(createBlog).post(composeBlog);



module.exports = router;