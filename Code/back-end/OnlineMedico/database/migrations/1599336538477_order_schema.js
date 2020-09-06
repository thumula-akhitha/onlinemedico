'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.integer('addressId').notNullable()
      table.integer('cardId').notNullable()
      table.string('status').notNullable()
      table.integer('customerId', 10).unsigned().notNullable()
      table.foreign('customerId').references('customers.id').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
