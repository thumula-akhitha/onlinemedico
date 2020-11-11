'use strict'
const Customer = use("App/Models/Customer");
const Address = use("App/Models/Address");
const CardDetail = use("App/Models/CardDetail");
const _  = use('lodash');
const Hash = use('Hash')
const getStream = use('get-stream')
const Helpers = use('Helpers');
const { validateAll } = use("Validator");
const logger = use("Logger");
var nodeoutlook = require('nodejs-nodemailer-outlook')
const nodemailer = require('nodemailer');
const Database = use('Database')

class CustomerController {
    //This route is used for signup 
    async signup({ request, response, auth }) {
        const userData = request.body
        const customer = await Customer.query().where("email", "=", userData.email).fetch();
        console.log(customer.toJSON().length)
        if (customer.toJSON().length == 0) {
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
            return response.json({
                message: "error"
            })
        }
    }
    //This method is used for login 
    async login({ request, response, auth }) {
        console.log("dfadfas")
        const customerData = await Customer.query().where("email", request.body.email).where("password", request.body.password) 
        //.with("addresses")
       //.with("orders").with("card_details")
       .fetch();
        //console.log(k.toJSON().length)
        console.log(customerData.toJSON())

        if (customerData.toJSON().length > 0) {
            const token = await auth.generate(customerData.toJSON()[0])

            // const passwordDb = customerData.toJSON()[0].password;

            // const isSame = await Hash.verify(request.body.password, passwordDb)

            // console.log(isSame)
            // if (isSame) {
                if(customerData.toJSON()[0].role == "admin")
                {
                    console.log("admin pageeeee")
                return response.status(200).json({
                    message: "Adminsuccess",
                    authentication: token,
                    data: customerData
                });
            }
            else {
                    
                return response.status(200).json({
                    message: "success",
                    authentication: token,
                    data: customerData
                });
            }

            // }
            // else {
            //     return response.json({
            //         message: "failure"
            //     });
            // }
        }
        else {
            return response.json({
                message: "email incorrect"
            })
        }

    }

    // This method is used to generate email when user forgots password.
    async forgotPassword({ request, response, auth }) {
        const { email } = request.body;
        const customerRecord = await Customer.query().where("email", "=", email).fetch();
        if (customerRecord.toJSON().length > 0) {
            try {
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'onlinemedico782@gmail.com',
                        pass: 'OnlineMedico782'
                    },
                });
                var mailOptions = {
                    from: 'onlinemedico782@gmail.com',
                    to: email,
                    subject: 'Set Password for Online Medico',
                    html: `<p style="font-size:18px; font-weight:bold;">Hi ${customerRecord.toJSON()[0].fullName},</p><p style="font-size:18px;">You recently requested a new password. Click on the link below to continue your password reset.</p> <a href="http://localhost:3000/Reset" style="background-color: #008CBA;
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;">Reset Password</a><br/>
                    <p style="font-size:12px;"> If you did not request a new password, please ignore this message.`,
                    text: '' 
                }
                await transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        return response.status(401).json({
                            error: {
                                status: 401,
                                message: "Please check email correctly",
                            },
                        });
                    }
                    else {
                        return response.json({
                            message: "Success",
                        })
                    }
                })
            }
            catch (e) {
                console.log(e)
            }
        }
        else {
            return response.json({
                message: "error",

            });
        }
    }
    /* 
    This method is used to for new password retrival.
    */
   async newPassword({ request, response, auth }) {
    // variable to store the body of the request (password)
    const newPassword = request.body;
    // variable to store mail ID
    const customerRecord = await Customer.findBy('email', newPassword.email)
    // to check wheather the mail id is emtry or not
    if (customerRecord != null) {
        // record the new password from the UI
        customerRecord.password = await Hash.make(newPassword.newpassword)
        // store the new password in database
        await customerRecord.save();
        return response.json({
            status: 'success',
            message: "Password success"
        })
    } 
    // end of IF
    else {
        return response.json({
            // if the newly entered mail ID does not 
            // match the mail ID's present in 
            // the database
            message: "check email correctly",
        });
    }
    // end of ELSE
}

async addAddress({ auth, request, response, params }) {

    const address = request.all();
    address.customerId = params.customerId
    addressData = await Address.create(address);
    return response.status(200).json(addressData);
}
async addCard({ auth, request, response, params }) {
    const card = request.all();
    card.customerId = params.customerId
    cardData = await CardDetail.create(card);
    return response.status(200).json(cardData);
}
async contactReview({ auth, request, response, params }){
    console.log("enteredjjkhk")
    const query = await Database.select('*').from('contactuses')
    return response.status(200).json(query);
    
}
async addProduct({ auth, request, response, params }) {
    console.log(request.body);
    await use('Database').table('medicines').insert(request.body)
    return 'added products';

}
async updateProfile({request,response,auth,params}){
    console.log("entered updated profile")
    console.log('request body',request.body);
    let userDetails = request.body;
    let user = await Customer.find(params.userID)
    user = _.merge(user,userDetails);
    await user.save();
    console.log('after',request.body)

//    const query= await use('Database').select('*').from('customer')
//    console.log(query)
}

async addShippingAddress({request, response }) {
    console.log(request.body);
    await use('Database').table('shipping_addresses').insert(request.body)
    return 'added shippingaddress';
}
async contactUs({ request, response, auth }) {
    console.log("cameeeee")
    console.log(request.body)
    await use('Database').table('contactuses').insert(request.body)
        return 'File uploaded';
}

// Star Component
async review({ request, response, auth }) {
    console.log(request.body)
    await use('Database').table('ratings').insert(request.body)
        return 'ratinguploaded';
}


// This function sends an confirmation email to the user regarding upload prescription

async uploadConfirmation({ request, response, auth }) {
    console.log("cameeeeeeeeeeeeeeeeeeeeeeeee")
    const { email } = request.body;
    const emailConfirmation = await Customer.query().where("email", "=", email).fetch();
    if (emailConfirmation.toJSON().length > 0) {
        try {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'onlinemedico782@gmail.com',
                    pass: 'OnlineMedico782'
                },
            });
            var mailOptions = {
                from: 'onlinemedico782@gmail.com',
                to: email,
                subject: 'Confirmation regarding your prescription',
                html: `<p style="font-size:18px; font-weight:bold;">Hi ${emailConfirmation.toJSON()[0].fullName},</p><p style="font-size:18px;">your prescription is approved and order has been placed successfully</p>`,
                text: '' 
            }
            await transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return response.status(401).json({
                        error: {
                            status: 401,
                            message: "Please check email correctly",
                        },
                    });
                }
                else {
                    return response.json({
                        message: "Success",
                    })
                }
            })
        }
        catch (e) {
            console.log(e)
        }
    }
    else {
        return response.json({
            message: "error",

        });
    }
}



}
// end of controller class.

module.exports = CustomerController 
