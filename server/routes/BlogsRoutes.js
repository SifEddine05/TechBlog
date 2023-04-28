const express = require('express')
const router = express.Router()
const Blogs = require('../models/Blogs')
const BlogsController = require('../Controllers/BlogsController')

router.get('/blogs' , BlogsController.getblogs)

router.post('/newBlog' ,BlogsController.addBlog)  ; 


router.get('/getBlog/:id', BlogsController.getBlog)

router.put('/edit',BlogsController.editBlog)

router.delete('/delete/:id' , BlogsController.delete)


module.exports = router