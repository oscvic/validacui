const routes = require('express').Router()
const { IsValid } = require('../validator/valid')

routes.route('/cui').post((request, response) => {
  const { cui } = request.body
  response.setHeader('Content-Type','application/json')

  response.status(200).json({
    'cui': cui,
    'valid': IsValid(cui)
  })
})

module.exports = routes
