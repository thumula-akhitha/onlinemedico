'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      
        table.increments()
        table.string('fullName').notNullable()
         table.string('contactNumber').notNullable()
        table.string('email', 60)
        table.string('password').notNullable()
        
        table.timestamps()
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomerSchema
