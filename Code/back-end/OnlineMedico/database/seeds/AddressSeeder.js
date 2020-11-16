'use strict'

/*
|--------------------------------------------------------------------------
| AddressSeeder
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

class AddressSeeder {
  async run () {
    const eventlog = [
      {
        id: 1,
        firstName: 'onlinemedico',
        mobile: '6605280997',
        address1: '1115N COLLEGE DRIVE',
        address2: '101',
        zip: 64468,
        state:'MO',
        customerId:1
        
      }
    ]
    await Database.insert(eventlog).into('addresses')
    
  }
}

module.exports = AddressSeeder
