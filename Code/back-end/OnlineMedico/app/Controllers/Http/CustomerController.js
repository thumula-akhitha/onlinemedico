'use strict'
const Customer = use("App/Models/Customer");
const Hash = use('Hash')
const { validateAll } = use("Validator");
const logger = use("Logger");
var nodeoutlook = require('nodejs-nodemailer-outlook')

class CustomerController {
    async signup({ request, response, auth }) {
         
        const userData = request.all()
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
        const {email} = request.only(['email']);
        const customerRecord =  await Customer.query().where("email", "=", email);
        if(customerRecord.toJSON().length>0){
    const userName = Env.get('MAIL_ID')
    const password = Env.get('MAIL_PASSWORD')

  try{
    console.log('sending Mail')
    await nodeoutlook.sendEmail({
      auth: {
        user: userName,
        pass: password
      },
      tls:{
        rejectUnauthorized: false
      },
      from: userName,
      to: student_emailid,
      subject: 'Set Password for Online Medico',
      html: '<p>Click below button to set password </p> <br> <a href="https://www.w3schools.com">Set Password</a>',
      text: '',
      onError: (e) => { console.log(e)
        return response.status(401).json({
            error: {
                status: 401,
                message: "Please check email correctly",
            },
        });
    },
      onSuccess: (i) => {console.log(i)
          
         return response.status(200).json({
        message: "Mail Sent Successfully",
    });
     }
    }
    );  
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
