'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
       table.increments()
        table.string('firstName').notNullable()
        table.string('mobile').notNullable()
        table.string('address1').notNullable()
        table.string('address2').notNullable()
        table.integer('zip', 60).notNullable()
        table.string('state').notNullable()
        table.integer('customerId', 10).unsigned().notNullable()
        table.foreign('customerId').references('customers.id').onDelete('cascade')
        table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
