const express = require('express');
const Blogpost = require('../models/blogpost');
const router = express.Router();

// Blog post routes
router.get('/', (request, response) => {
    // Logic to list all blog posts
    console.log('in blogpost router')
    Blogpost.find({}).then(blogposts => {
        response.json(blogposts)
      })
})
router.post('/', (request, response) => {
    // Logic to create a new blog post
})
router.get('/:id', (request, response) => {
    // Logic to get a single blog post by ID
    Blogpost.findById(request.params.id).then(blogpost => {
        if (blogpost) {
          response.json(blogpost)
        } else {
            console.log('couldnt find blogpost by id')
          response.status(404).end()
        }
      })
        .catch(error => next(error))
})
router.put('/:id', (request, response) => {
    // logic to update a blog post by ID
})
router.delete('/:id', (request, response) => {
    // Logic to delete a blog post by ID
})

module.exports = router;
