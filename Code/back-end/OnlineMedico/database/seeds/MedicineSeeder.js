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
        title: 'Paracetamol',
        description: 'Paracetamol is a pain reliever and a fever reducer.',
        price: 5,
        count: 1,
        src: 'https://cdn.shopify.com/s/files/1/1346/8165/products/1129154_1400x.jpg?v=1575891053',
        
      },
      {
        id: 2,
        title: 'NytQuill',
        description: 'Nyquil Cold & Flu is used to treat headache, fever.',
        price: 12,
        count: 1,
        src: 'https://cdn.shopify.com/s/files/1/0086/7821/1642/products/IMG_1449_480x480.jpg?v=1580943657',
        
      },
      {
        id: 3,
        title: 'Homeopathic tonic',
        description: "Syrup is an overall tonic for your baby's health.",
        price: 7.99,
        count: 1,
        src: 'https://3.imimg.com/data3/OQ/RY/FCP-5047705/images-baby_cure-500x500.jpg',
        
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
                title:'Baby wipes',
                price:7.99,
                src:'https://cdn.boundtree.com/emp/products/D1329_515Wx515H_8814032257054',
                description:' cleanses the poop off a babys bottom without damaging the skin',
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
            {
              id:9,
                title:'Baby Nasal Aspirator',
                price:15.99,
                src:"https://ae01.alicdn.com/kf/HTB1IrmbVVzqK1RjSZFCq6zbxVXaK/Newborn-Baby-Nasal-Aspirator-Set-Straw-Brush-Feeding-Medicine-Device-Snot-Nose-Shit-Cleaner-Nose-Aspirator.jpg_Q90.jpg_.webp",
                description:"Device to remove mucus from baby's nose",
                count: 1,
            },
            {
              id:10,
                title:'Vitamin C Tablets',
                price:2.99,
                src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTiNOCkuULSPbb_i7GblGV-DOmIhjUx0RVP6svFz8D6q5dwTmezfUfA2Vrh7ugEdECgHXSgg&usqp=CAc",
                description:"Boost your immunity",
                count: 1,
            },
            {
              id:11,
                title:'Johnsons Baby Product',
                price:3.25,
                src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yOopwZbUU_qGHpUREOfaQQ07OFNqIl6nqC8RUOsNIrfLr8lSLjNtmstmBLfcxLMBtz6BbpY&usqp=CAc",
                description:"Mositurizing products for baby",
                count: 1,
            },
            {
              id:12,
                title:'Systane Lubricant Eye Drops',
                price:10.97,
                src:"https://i5.walmartimages.com/asr/02e21621-3214-47c4-9634-c4b04310dda7.b12b4006a572b4f128ae4f2366b0c9ec.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
                description:"Ultra High Performing Dry Eye Relief",
                count: 1,
            }

    ]
    await Database.insert(eventlog).into('medicines')
      
  }
}

module.exports = MedicineSeeder
