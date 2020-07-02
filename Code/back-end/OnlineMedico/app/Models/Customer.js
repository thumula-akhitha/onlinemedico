'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Customer extends Model {
  // this will set the ID as the primary key for the customer table.
    static get primaryKey () {
      // return ID
        return 'id'
      }
      // end of static method
}
// end of customer class.

module.exports = Customer
