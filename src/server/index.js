const express = require('express')
const server = express()
const port = 3000
const routes = require('../routes')

server.use(express.json())
server.use(routes)

server.listen(port, function() {
  console.log(`Server is listening on port: ${port}`)
})