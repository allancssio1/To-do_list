const db = require('../../config/bd')

module.exports = {
  all() {
    return db.query(`
      SELECT * FROM tasks
    `)
  },
  create (data) {
    const query = `
      INSERT INTO tasks (title, description, priority, situation)
      VALUES ($1, $2, $3, $4)
      RETURNING id
    `
    const values = [data.title, data.description, data.priority, data.situation]

    return db.query(query, values)
  }
}