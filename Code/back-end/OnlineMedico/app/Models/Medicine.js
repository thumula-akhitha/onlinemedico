'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Medicine extends Model {
    static get primaryKey () {
    
        return 'id'
      }
      medicine_orders() {
        return this.belongsToMany("App/Models/Order", "id", "id", "id", "id")
            .pivotTable('order_medicines').withPivot(["quantity"]);
    }
}

module.exports = Medicine
