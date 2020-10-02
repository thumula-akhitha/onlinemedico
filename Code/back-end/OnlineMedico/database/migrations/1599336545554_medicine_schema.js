'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicineSchema extends Schema {
  up () {
    this.create('medicines', (table) => {
      table.increments()
      table.string('title',250).notNullable()
      table.string('description',250).notNullable()
      table.string('src',250).notNullable()
      table.integer('price').notNullable()
      table.integer('count').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('medicines')
  }
}

module.exports = MedicineSchema
