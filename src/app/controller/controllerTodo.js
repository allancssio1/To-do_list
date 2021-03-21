module.exports = {
  async create(req, res) {
    return res.render('list/to-do.njk')
  },
  async post (req, res) {
    const keys = Object.keys(req.body)
    const {title, priority, situation} = req.body

    for (key of keys) {
      if((title || priority || situation) == "" ){
        res.send(`Por favor, preencha o campos.`)
      }
    }
    return res.redirect('/todo')
  }
}