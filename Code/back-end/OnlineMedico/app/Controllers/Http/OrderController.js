'use strict'
const Order = use("App/Models/Order");
class OrderController {
  async createOrder({ request, response, auth }) {
    console.log("entered create order")
     const k = request.all();
    //console.log(k)
    const orderData = k.order;
    let random = Math.floor(1000000000 + Math.random() * 9000000000);
    orderData.orderId = random
    const orderCreated = await Order.create(orderData);
    
    await orderCreated.order_medicines().attach(k.medicines, (medicine) => {
      medicine.quantity = 1;
  });
  const order = await Order.query().where("id", "=", orderCreated.toJSON().id).with('order_medicines').with('order_card').with('order_address').with('user').fetch();
  console.log(order.toJSON())
  return response.json(order);
  }
  async getAllOrders({ request, response, auth }) {
    const order = await Order.query().select('*').with('order_medicines').with('order_card').with('order_address').fetch();
    return response.json(order);
  }
  async getPastOrders({ request, response, auth }) {
    const order = await Order.query().where("status", "=","completed").with('order_medicines').with('order_card').with('order_address').fetch();
  
  return response.json(order);
  }
  async getActiveOrders({ request, response, auth }) {
    const order = await Order.query().where("status", "=","pending").with('order_medicines').with('order_card').with('order_address').fetch();
  
  return response.json(order);
  }
  async getOrder({ request, response, auth,params }) {
    const order = await Order.query().where("id", "=", params.orderId).with('order_medicines').with('order_card').with('order_address').fetch();
  
  return response.json(order);
  }
  async cancelOrder({ request, response, auth,params }) {
    const order = await Order.find(params.orderId)
    await order.delete();
  return response.json(order);
  }

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
