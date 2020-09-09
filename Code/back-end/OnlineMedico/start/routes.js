'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/*
|--------------------------------------------------------------------------
| Customer Routes
|--------------------------------------------------------------------------
|
| Https routes used too authenticate user login and logout
| 
*/
Route.group(() => {
  Route.post("/signup", "CustomerController.signup");
  Route.post("/login", "CustomerController.login");
  Route.post("/forgotpassword", "CustomerController.forgotPassword");
  Route.post("/newpassword", "CustomerController.newPassword");
  Route.post("/address/:customerId", "CustomerController.newPassword");
  Route.post("/card-details/:customerId", "CustomerController.newPassword");
  Route.get("/address/:customerId", "CustomerController.newPassword");
  Route.get("/card-details/:customerId", "CustomerController.newPassword");
}).prefix("/onlinemedico/user");

/*
|--------------------------------------------------------------------------
| order  Routes
|--------------------------------------------------------------------------
|
| Https routes used too authenticate user login and logout
| 
*/

Route.group(() => {
  Route.get("/orders", "CustomerController.signup");
  Route.post("/order", "CustomerController.login");
  Route.get("/order/:orderId", "CustomerController.forgotPassword");
  Route.post("/updateOrders/:orderId", "CustomerController.newPassword");
  Route.delete("/orders/:orderId", "CustomerController.newPassword");
}).prefix("/onlinemedico/order");

/*
|--------------------------------------------------------------------------
| Prescription  Routes
|--------------------------------------------------------------------------
|
| Https routes used too authenticate user login and logout
| 
*/
Route.group(() => {
  Route.post("/uploadPrescription", "CustomerController.signup");
  Route.get("/prescriptionDetails", "CustomerController.login");
  Route.post("/updatePrescription/:PrescriptionId", "CustomerController.forgotPassword");
  Route.delete("/prescription/:PrescriptionId", "CustomerController.newPassword");
}).prefix("/onlinemedico/prescription");




/*
|--------------------------------------------------------------------------
| Medicine Routes
|--------------------------------------------------------------------------
|
| Https routes used too authenticate user login and logout
| 
*/

Route.group(() => {
  Route.post("/addMedicine", "CustomerController.signup");
  Route.get("/medicines", "CustomerController.login");
  Route.post("/updateMedicine/:medicineId", "CustomerController.forgotPassword");
  Route.delete("/medicine/:medicineId", "CustomerController.newPassword");
}).prefix("/onlinemedico/prescription");