'use strict'
const Customer = use("App/Models/Customer");
const Hash = use('Hash')
const { validateAll } = use("Validator");
const logger = use("Logger");
var nodeoutlook = require('nodejs-nodemailer-outlook')
const nodemailer = require('nodemailer'); 

class CustomerController {
    async signup({ request, response, auth }) {
        console.log("entreedddfdsfsdfsdfsdfsdafsdfasdfsd")
        console.log(request.body)
        const userData = request.body
       
        console.log(userData)
       // userData.password = await Hash.make(userData.password);
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
            console.log("success")
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
    async forgotPassword({ request, response, auth }) {
        console.log(request.body)
        const {email} = request.body;
        console.log(email)
        const customerRecord =  await Customer.query().where("email", "=", email).fetch();
        console.log(customerRecord.toJSON().length)
        if(customerRecord.toJSON().length>0){
   

  try{
    console.log('sending Mail')
    var transporter= nodemailer.createTransport({
        service: 'gmail',
      auth: {
        user: 'onlinemedico782@gmail.com',
        pass: 'OnlineMedico782'
      },
    });
     var mailOptions= {
      from: 'onlinemedico782@gmail.com',
      to: 'mandapallisatish64@gmail.com',
      subject: 'Set Password for Online Medico',
      html: '<p>Click below button to set password </p> <br> <a href="https://www.w3schools.com">Set Password</a>',
      text: ''
    }
    await transporter.sendMail(mailOptions,function(error,info){
        if(error){
            return response.status(401).json({
                error: {
                    status: 401,
                    message: "Please check email correctly",
                },
            });
        }
        else {
            console.log("mail send sucdfsdfsd")
            return response.json({
                status: 200,
                message: "Mail Sent Successfully",
        })
    }
})
     
    
} 
    catch(e){
      console.log(e)
    }
}
else {
    return response.status(401).json({
        error: {
            status: 401,
            message: "Please check email correctly",
        },
    });
}
    
    }
}

module.exports = CustomerController
