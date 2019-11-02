const stories = require('../../utils/stories/index')

function remove(req, res) {
  if (!req.params.id) {
    res.status(404).send({ message: 'ID was not sent' })
  }

  stories[req.params.id - 1] = null

  res.status(404).send({ message: 'Story not found' })
}

module.exports = remove