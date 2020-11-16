'use strict'

/*
|--------------------------------------------------------------------------
| CustomerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Hash = use('Hash')

class CustomerSeeder {
  async run () {
    const eventlog = [
      {
        id: 1,
        title: 'paracetamol',
        description: 'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known.',
        price: 5,
        count: 1,
        src: 'https://cdn.shopify.com/s/files/1/1346/8165/products/1129154_1400x.jpg?v=1575891053',
        
      }
    ]
    await Database.insert(eventlog).into('medicines')
  }
}

module.exports = CustomerSeeder
