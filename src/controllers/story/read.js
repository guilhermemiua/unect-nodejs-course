const stories = require('../../utils/stories/index')

function read(req, res) {
  res.status(200).send({ stories })
}

module.exports = read