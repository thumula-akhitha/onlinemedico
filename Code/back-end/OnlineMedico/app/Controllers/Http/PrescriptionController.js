"use strict";
const getStream = use("get-stream");
const Customer = use("App/Models/Customer");
const Mail = use("Mail");
// var nodeoutlook = require('nodejs-nodemailer-outlook')
const nodemailer = require("nodemailer");
const Database = use("Database");

class PrescriptionController {
  // This method is used for file upload for prescription.
  async fileUploader({ request, response, auth }) {
    try {
      let scenarioFiles = {
        email: "akhitha.adams@gmail.com",
      };
      // await request.multipart.file("file", {}, async function (file) {
      //   const fileContent = await getStream.buffer(file.stream);
      //   scenarioFiles.fileContent = fileContent;
      //   scenarioFiles.name = file.clientName;
      //   scenarioFiles.type = `${file.type}/${this.subtype}`;
      // });

      // await request.multipart.field((name1, value) => {
      //   console.log("cameee prescription controller");
      //   scenarioFiles.email = `${value}`;
      //   console.log("good hellooooo valueee " + name1 + " " + value);
      //   console.log(value);
      // });

      // await request.multipart.process();
      // await use("Database").table("prescription").insert(scenarioFiles);

      // // const emailConfirmation = await Customer.query().where("email", "=", ).fetch();
      // // console.log(emailConfirmation)

      console.log("===scenarioFiles", scenarioFiles);

      if (scenarioFiles.email) {
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "onlinemedico782@gmail.com",
            pass: "OnlineMedico782",
          },
        });

        var mailOptions = {
          from: "onlinemedico782@gmail.com",
          to: "akhitha.adams@gmail.com",
          subject: "Confirmation regarding your prescription",
          html: `<p style="font-size:18px; font-weight:bold;">Hi Akhitha,</p><p style="font-size:18px;">your prescription is approved and order has been placed successfully</p>`,
          text: "",
        };
        await transporter.sendMail(mailOptions, function (error, info) {
          console.log("mail sending");
          if (error) {
            console.log("error");
            return response.status(401).json({
              error: {
                status: 401,
                message: "Please check email correctly",
              },
            });
          } else {
            console.log("success");
            return response.json({
              message: "Success",
            });
          }
        });
      } else {
        return response.json({
          message: "error",
        });
      }
    } catch (e) {
      console.log(e);
      return response.json({
        message: "error",
      });
    }

    return "File uploaded";
  }
}

module.exports = PrescriptionController;
