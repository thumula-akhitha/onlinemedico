'use strict'

/*
|--------------------------------------------------------------------------
| MedicineSeeder
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

class MedicineSeeder {
  async run () {
    const eventlog = [
      {
        id: 1,
        title: 'paracetamol',
        description: 'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known.',
        price: 5,
        count: 1,
        src: 'https://cdn.shopify.com/s/files/1/1346/8165/products/1129154_1400x.jpg?v=1575891053',
        
      },
      {
        id: 2,
        title: 'nytQuill',
        description: 'Nyquil Cold & Flu is a combination medicine used to treat headache, fever.',
        price: 12,
        count: 1,
        src: 'https://cdn.shopify.com/s/files/1/0086/7821/1642/products/IMG_1449_480x480.jpg?v=1580943657',
        
      },
      {
        id: 3,
        title: 'paracetamol',
        description: 'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known.',
        price: 5,
        count: 1,
        src: 'https://cdn.shopify.com/s/files/1/1346/8165/products/1129154_1400x.jpg?v=1575891053',
        
      },
      {
            id:4,
            title:'Cetirizine',
            price:4.99,
            src:"https://content.jdmagicbox.com/quickquotes/images_main/cetirizine-dihydrochloride-tablets-ip-10mg-347254771-dnps5.jpg",
            description:'fever,allergy symptoms',
            count: 1,
        },
        {
              id:5,
              title:'Meftal',
              price:11.99,
              src:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROD1ZbcFjU9mwn5q1YpcXIYb3E59W-9HNBfg&usqp=CAU',
              description:'To treat of abdominal pain',
              count: 1,
          },
           {
                id:6,
                title:'Migraine',
                price:4.99,
                src:'https://www.dollargeneral.com/media/catalog/product/cache/6e5ff7de2a46bb5e4325e62839d28016/d/g/dghl_migraine_relief_50ct_2.jpg',
                description:'Migraine Reliever',
                count: 1,
            },
             {
                id:7,
                title:'Koflet',
                price:4.99,
                src:'https://www.dowa.co/content/images/thumbs/0005440_koflet-syrup-200-ml_600.jpeg',
                description:'Cough Syrup',
                count: 1,
            },
             {
                id:8,
                title:'Panado',
                price:11.99,
                src:"https://cdn-prd-02.pnp.co.za/sys-master/images/h58/he0/9268395573278/silo-6009695584769-front-317817_400Wx400H",
                description:"rapid pain,fever reliever",
                count: 1,
            },
    ]
    await Database.insert(eventlog).into('medicines')
      
  }
}

module.exports = MedicineSeeder
