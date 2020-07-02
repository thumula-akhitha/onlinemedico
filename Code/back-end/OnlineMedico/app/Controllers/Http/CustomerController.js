'use strict'
const Customer = use("App/Models/Customer");
const Hash = use('Hash')
const { validateAll } = use("Validator");
const logger = use("Logger");
var nodeoutlook = require('nodejs-nodemailer-outlook')
const nodemailer = require('nodemailer');

class CustomerController {
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
    async login({ request, response, auth }) {
        const k = await Customer.query().where("email", request.body.email).fetch();
        console.log(k.toJSON().length)

        if (k.toJSON().length > 0) {
            const token = await auth.generate(k.toJSON()[0])

            const passwordDb = k.toJSON()[0].password;

            const isSame = await Hash.verify(request.body.password, passwordDb)

            console.log(isSame)
            if (isSame) {
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
                    html: `<p>Hi ${customerRecord.toJSON()[0].fullName},</p><p>You recently requested a new password. Click on the link below to continue your password reset.</p> <a href="http://localhost:3000/Reset" style="background-color: #008CBA;
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;">Reset Password</a><br/>
                    <p> If you did not request a new password, please ignore this message.`,
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
    async newPassword({ request, response, auth }) {
        const newPassword = request.body;
        const customerRecord = await Customer.findBy('email', newPassword.email)
        if (customerRecord != null) {
            customerRecord.password = await Hash.make(newPassword.newpassword)
            await customerRecord.save();
            return response.json({
                status: 'success',
                message: "Password success"
            })
        }
        else {
            return response.json({
                message: "check email correctly",
            });
        }
    }
}

module.exports = CustomerController 
