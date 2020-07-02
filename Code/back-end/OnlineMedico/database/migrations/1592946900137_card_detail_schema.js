'use strict'

// we are storing these details to buy any products from our application
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CardDetailSchema extends Schema {
  up() {
    this.create('card_details', (table) => 
    {
      table.increments()
      // this will store the card type in the database
      table.string('cardType').notNullable()
      //this will store the card number in the database
      table.string('cardNumber').notNullable()
      //this will store the valid month in the database
      table.string('validMonth').notNullable()
      //this will store the valid year in the database
      table.string('validYear').notNullable()
      //this will store the security number in the database
      table.string('securityNumber').notNullable()
      table.timestamps()
    });
  }

  down() {
    this.drop('card_details');
  }
}

module.exports = CardDetailSchema
