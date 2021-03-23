const express = require('express')
const controllerTodo = require('./app/controller/controllerTodo')
const controllerUser = require('./app/controller/controllerUser')
const Route = express.Router()

Route.get('/', (req, res) => res.render('layout'))

Route.get('/todo', controllerTodo.create)
Route.post('/todo', controllerTodo.post)
Route.get('/create', controllerUser.create)

module.exports = Route