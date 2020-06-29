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
  console.log("enteredddd")
  Route.post("/signup", "CustomerController.signup");
  Route.post("/login", "CustomerController.login");
  Route.post("/forgotpassword", "CustomerController.forgotPassword");
  Route.post("/newpassword", "CustomerController.newPassword");

}).prefix("/onlinemedico");

