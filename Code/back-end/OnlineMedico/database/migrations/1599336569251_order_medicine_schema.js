'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderMedicineSchema extends Schema {
  up () {
    this.create('order_medicines', (table) => {
      
      table.integer('orderId').unsigned().notNullable()
      table.foreign('orderId').references('orders.id').onDelete('cascade')
      table.integer('medicineId').unsigned().notNullable()
      table.foreign('medicineId').references('medicines.id').onDelete('cascade')
      table.integer('quantity').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('order_medicines')
  }
}

module.exports = OrderMedicineSchema
