'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RatingSchema extends Schema {
  up () {
    this.create('ratings', (table) => {
      table.increments()
      table.integer('rating').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('ratings')
  }
}

module.exports = RatingSchema
