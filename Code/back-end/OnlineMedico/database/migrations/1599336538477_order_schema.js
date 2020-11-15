'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.integer('addressId').unsigned().notNullable()
      table.foreign('addressId').references('addresses.id').onDelete('cascade')
      table.integer('cardId').unsigned().notNullable()
      table.foreign('cardId').references('card_details.id').onDelete('cascade')
      table.string('status').notNullable()
      table.integer('total').notNullable()
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
