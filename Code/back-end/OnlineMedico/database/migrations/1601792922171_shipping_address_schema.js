'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShippingAddressSchema extends Schema {
  up () {
    this.create('shipping_addresses', (table) => {
      table.increments()
      table.string('customername').notNullable()
      table.string('mobile').notNullable()
      table.integer('address1').notNullable()
      table.string('address2').notNullable()
      table.string('state').notNullable()
      table.string('zip').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('shipping_addresses')
  }
}

module.exports = ShippingAddressSchema
