'use strict'

/*
|--------------------------------------------------------------------------
| CardDetailSeeder
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

class CardDetailSeeder {
  async run () {
    const eventlog = [
      {
        id: 1,
        nameOnCard	: 'satish',
        cardNo: '1234567812345678',
        exp: '1',
        year: '2021',
        cvv: '100',
       
        customerId:1
        
      }
    ]
    await Database.insert(eventlog).into('card_details')
  }
}

module.exports = CardDetailSeeder
