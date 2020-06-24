'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Customer extends Model {
    static get primaryKey () {
        return 'id'
      }
      
}

module.exports = Customer
