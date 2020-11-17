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
        firstName: 'Goutham',
        lastName: 'kumar',
        contactNumber: '9441585134',
        email: 'user@gmail.com',
        password: 'User@1234',
        role:'user'
        
      },
      {
        id: 2,
        firstName: 'Rishi',
        lastName: 'kumar',
        contactNumber: '9441203257',
        email: 'admin@gmail.com',
        password: 'Admin@1234',
        role:'admin'
        
      }


    ]
    await Database.insert(eventlog).into('customers')
  }
}

module.exports = CustomerSeeder
