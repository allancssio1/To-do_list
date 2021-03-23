const Todos = require('../models/Todo')

module.exports = {
  async create(req, res) {

    let result = await Todos.all()
    const tasks = result.rows
    return res.render('list/to-do.njk', {tasks})
  },
  async post (req, res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
      if(req.body[key] == "" ){
        res.send(`Por favor, preencha os campos.`)
      }
    }
    
    let result = await Todos.create(req.body)
    result = await Todos.all()
    const tasks = result.rows
    return res.render('list/to-do.njk', {tasks})
  }
}