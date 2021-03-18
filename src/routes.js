const express = require('express')
const Route = express.Router()

Route.get('/', (req, res) => res.render('layout'))

Route.get('/todo', (req, res) => {
  return res.render('list/to-do.njk')
})
Route.get('/create', (req, res) => {
  return res.render('login/create.njk')
})

module.exports = Route