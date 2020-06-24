'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerSchema extends Schema {
  up() {
    this.create('customers', (table) => {
      table.increments()
      table.string('firstName', 80).notNullable()
      table.string('lastName').notNullable()
      table.integer('contactNumber').notNullable()
      table.string('email', 60)
      table.string('password').notNullable()
      table
        .integer('addressId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('addresses')
      table
        .integer('cardId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('card_details')
      table.timestamps()
    });
  }

  down() {
    this.drop('customers')
  }
}

module.exports = CustomerSchema
