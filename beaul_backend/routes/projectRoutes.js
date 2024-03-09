const express = require('express');
const router = express.Router();

// Project routes
router.get('/api/projects', (req, res) => {
    // Logic to list all projects
})
router.post('/api/projects', (req, res) => {
    // Logic to create a new project
})
router.get('/api/projects/:id', (req, res) => {
    // Logic to get a single project by ID
})
router.put('/api/projects/:id', (req, res) => {
    // Logic to update a project by ID
})
router.delete('/api/projects/:id', (req, res) => {
    // Logic to delete a project by ID
})

module.exports = router;
