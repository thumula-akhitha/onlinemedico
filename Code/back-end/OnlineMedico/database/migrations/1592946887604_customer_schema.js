'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerSchema extends Schema {
  up() {
    this.create('customers', (table) => {
      table.increments()
      table.string('firstName').notNullable()
      table.string('lastName').notNullable()
      table.string('contactNumber').notNullable()
      table.string('email', 60).notNullable()
      table.string('password').notNullable()
      table.string('role').notNullable()
      table.timestamps()

     })
  }

  down() {
    this.drop('customers')
  }
}

module.exports = CustomerSchema
