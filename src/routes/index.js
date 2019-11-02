const express = require('express')
const routes = express.Router()
const storyController = require('../controllers/story/index')

routes.get('/story', function(req, res) {
  storyController.read(req, res)
})

routes.post('/story', function(req, res) {
  storyController.create(req, res)
})

routes.put('/story', function(req, res) {
  storyController.update(req, res)
})

routes.delete('/story/:id', function(req, res) {
  storyController.remove(req, res)
})

module.exports = routes