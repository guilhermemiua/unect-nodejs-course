const Story = require('../../models/story')
const stories = require('../../utils/stories/index')

function create(req, res) {
  if (!req.body.name) {
    res.status(404).send({ message: 'Name was not sent' })
  }

  if (!req.body.story) {
    res.status(404).send({ message: 'Story was not sent' })
  }

  // Instanciating a new object
  const story = new Story(stories.length + 1, req.body.name, req.body.story, new Date())

  // Adding to stories array
  stories.push(story)

  res.status(201).send({ message: 'Created' })
}

module.exports = create