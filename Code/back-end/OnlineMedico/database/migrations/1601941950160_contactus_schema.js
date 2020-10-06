'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactusSchema extends Schema {
  up () {
    this.create('contactuses', (table) => {
      table.increments()
      table.string('firstName').notNullable()
      table.string('lastName').notNullable()
      table.string('emailId').notNullable()
      table.string('comment').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('contactuses')
  }
}

module.exports = ContactusSchema
