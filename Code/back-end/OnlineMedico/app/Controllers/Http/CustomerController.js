'use strict'
const Customer = use("App/Models/Customer");
const Hash = use('Hash')
const { validateAll } = use("Validator");
const logger = use("Logger");
var nodeoutlook = require('nodejs-nodemailer-outlook')
const nodemailer = require('nodemailer'); 

class CustomerController {
    async signup({ request, response, auth }) {
       console.log("enteredddddd")
        const userData = request.body
       
        const customer =  await Customer.query().where("email", "=", userData.email).fetch();
        console.log(customer.toJSON().length)
        if(customer.toJSON().length==0){
        userData.password = await Hash.make(userData.password);
        try {
        const user = await Customer.create(userData)
        return response.json({
            message: 'success',
            data: userData
        })
    }
    catch (error) {
        return response.json({
           
            message: 'There was a problem creating the Customer, please try again later.'
        })
    }
}
else {
    console.log("signup pageee")
    return response.json({
               
        message: "error"
    })
}
    }
    async login({ request, response, auth }) {
        const k = await Customer.query().where("email", request.body.email).fetch();
        console.log(k.toJSON().length)
      
        if(k.toJSON().length>0){
            const token = await auth.generate(k.toJSON()[0])
            console.log("dfasjfsdjfasdfds")
        const passwordDb = k.toJSON()[0].password;
        console.log("dfasjfsdjfasdfdskkl")
        const isSame = await Hash.verify(request.body.password, passwordDb)
        console.log("dfasjfsdjfasdfds")
        console.log(isSame)
        if(isSame){
            return response.status(200).json({
                message: "success",
                data: token
            });
           
        }
        else {
            return response.json({
               message: "failure"
            });
        }
        }
        else {
            console.log("cameeee")
            return response.json({
               
                message: "email incorrect"
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
      to: email,
      subject: 'Set Password for Online Medico',
      html: '<p>Click below button to set password </p> <br> <a href="http://localhost:3000/Reset">Set Password</a>',
      text: ''
    }
    await transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log("errrorr")
            return response.status(401).json({
                error: {
                    status: 401,
                    message: "Please check email correctly",
                },
            });
        }
        else {
            console.log("mail send successfullyyyyyy")
            return response.json({
                 message: "Success",
        })
    }
})
     
    
} 
    catch(e){
      console.log(e)
    }
}
else {
    return response.json({
        
            message: "error",
       
    });
}
    
    }
    async newPassword({ request, response, auth }) {
        const newPassword = request.body;
        console.log(newPassword.email)
       // const customerRecord =  await Customer.query().where("email", "=", newPassword.email).fetch();
       const customerRecord =  await Customer.findBy('email',newPassword.email)
       // console.log(customerRecord)
     //  var customerRecordtemp = customerRecord.toJSON()[0]
       // console.log(customerRecord)
        //console.log(customerRecord.toJSON())
        if(customerRecord != null){
            console.log("entered")
            customerRecord.password = newPassword.newpassword
          // console.log( customerRecordtemp.password)
            await customerRecord.save();
          return response.json({
            status: 'success',
            message: "Password success"
        })
        }
        else {
            console.log("else block")
            return response.json({
               
                    message: "check email correctly",
                
            });
        }
    }
}

module.exports = CustomerController 
