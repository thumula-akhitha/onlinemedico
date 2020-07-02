'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Address extends Model {
    // this will set the ID as the primary key for the address table.
    static get primaryKey () {
        // return ID
        return 'id'
      }
      // end of static method
}
// end of address class.

module.exports = Address
