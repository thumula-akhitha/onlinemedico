'use strict'

class OrderController {

    async getRandomIntBetween() {
        
        // min = Math.ceil(1000);
        // max = Math.floor(10000);
        // response= Math.floor(Math.random() * (max - min + 1)) + min;
        // //await use('Database').table('ordered').insert(gen)
        // console.log(response);
        
        return Math.floor(100000 + Math.random() * 900000);
      }

      
}

module.exports = OrderController
