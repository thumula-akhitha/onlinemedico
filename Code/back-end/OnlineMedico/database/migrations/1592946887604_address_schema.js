'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up() {
    this.create('addresses', (table) => {
      table.increments()
      // this will store the street name in the database
      table.string('street').notNullable()
      // this will store the city name in the database
      table.string('city').notNullable()
      // this will store the state name in the database
      table.string('state').notNullable()
      // this will store the country name in the database
      table.string('country').notNullable()
      // this will store the zip name in the database
      table.integer('zip', 60).notNullable()
      // this will store the time stamp of the data entry in the database
      table.timestamps()
    })
  }

  down() {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
