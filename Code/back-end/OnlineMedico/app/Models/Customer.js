'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Customer extends Model {
  static get primaryKey () {
        return 'id'
      }
     addresses() {
      return this.hasMany('App/Models/Address',"id","id")
     }
     prescriptions() {
      return this.hasMany('App/Models/Prescription',"id","id")
     }
     orders() {
      return this.hasMany('App/Models/Order',"id","id")
     }
     card_details() {
      return this.hasMany('App/Models/CardDetail',"id","id")
     }
}


module.exports = Customer
