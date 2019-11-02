const stories = require('../../utils/stories/index')

function update(req, res) {
  if (!req.body.id) {
    res.status(404).send({ message: 'ID was not sent' })
  }

  if (stories[req.body.id - 1] == null) {
    res.status(404).send({ message: 'Story was deleted' })
  }

  if (req.body.name) {
    stories[req.body.id - 1].name = req.body.name
  }

  if (req.body.story) {
    stories[req.body.id - 1].story = req.body.story
  }

  res.status(200).send({ message: 'Updated' })
}

module.exports = update