'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PrescriptionSchema extends Schema {
  up () {
    this.create('prescriptions', (table) => {
      table.increments()
      table.binary('image').notNullable()
      table.string('status').notNullable()
      table.integer('customerId', 10).unsigned().notNullable()
      table.foreign('customerId').references('customers.id').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('prescriptions')
  }
}

module.exports = PrescriptionSchema
