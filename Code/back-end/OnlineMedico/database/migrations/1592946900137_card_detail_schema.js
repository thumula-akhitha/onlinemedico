'use strict'

// we are storing these details to buy any products from our application
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CardDetailSchema extends Schema {
  up() {
    this.create('card_details', (table) => 
    {
      table.increments()
      table.string('nameOnCard').notNullable()
      table.string('cardNo').notNullable()
      table.string('exp').notNullable()
      table.string('year').notNullable()
      table.string('cvv').notNullable()
     
      table.integer('customerId', 10).unsigned().notNullable()
      table.foreign('customerId').references('customers.id').onDelete('cascade')
      table.timestamps()
    });
  }

  down() {
    this.drop('card_details');
  }
}

module.exports = CardDetailSchema
