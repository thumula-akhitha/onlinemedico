'use strict'
const Customer = use("App/Models/Customer");
const { validateAll } = use("Validator");
const logger = use("Logger");

class CustomerController {
    async signup({ request, response, auth }) {
         
        const userData = request.all()
        try {
        const user = await Customer.create(userData)
        return response.json({
            status: 'success',
            data: userData
        })
    }
    catch (error) {
        return response.status(400).json({
            status: 'error',
            message: 'There was a problem creating the Customer, please try again later.' + error
        })
    }
    }
    async login({ request, response, auth }) {
        console.log("login")
        console.log(request.body)
        const { username, password} = request.only(["email","password"])
        
        const k = await Customer.query().where("email", request.body.email).where("password", request.body.password).fetch();
        console.log(k)
        if(k.toJSON().length>0){
            console.log("succes")
            return response.json({
                status: 'success',
                data: "user login successfully"
            })
        }
        else {
            return response.json({
                status: 'error',
                data: "Invalid username and password"
            })
        }
         
    }
}

module.exports = CustomerController
