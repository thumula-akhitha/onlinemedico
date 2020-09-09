'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicineSchema extends Schema {
  up () {
    this.create('medicines', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.integer('cost').notNullable()
      table.integer('quantity').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('medicines')
  }
}

module.exports = MedicineSchema
