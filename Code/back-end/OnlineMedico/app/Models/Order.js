'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
    static get primaryKey () {
    
        return 'id'
      }
    user(){
        return this.hasOne("App/Models/Customer", "id", "id")
}
order_medicines() {
    return this.belongsToMany("App/Models/Medicine", "id", "id", "id", "id")
        .pivotTable('order_medicines').withPivot(["quantity"]);
}
}

module.exports = Order
