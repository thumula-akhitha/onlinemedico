'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CardDetail extends Model {
    static get primaryKey () {
    
        return 'id'
      }
    user(){
        return this.hasOne("App/Models/Customer", "id", "id")
}
}

module.exports = CardDetail
