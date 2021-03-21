const express = require('express')
const controllerTodo = require('./app/controller/controllerTodo')
const Route = express.Router()

Route.get('/', (req, res) => res.render('layout'))

Route.get('/todo', controllerTodo.create)
Route.post('/todo', controllerTodo.post)
Route.get('/create', (req, res) => {
  return res.render('login/create.njk')
})

module.exports = Route