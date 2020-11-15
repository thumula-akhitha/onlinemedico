'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
    static get primaryKey () {
    
        return 'id'
      }
    user(){
        return this.hasOne("App/Models/Customer", "customerId", "id")
}
order_medicines() {
    return this.belongsToMany("App/Models/Medicine", "orderId", "medicineId", "id", "id")
        .pivotTable('order_medicines').withPivot(["quantity"]);
}
order_card(){
    return this.hasOne("App/Models/CardDetail", "cardId", "id")
}
order_address(){
    return this.hasOne("App/Models/Address", "addressId", "id")
}
}

module.exports = Order
