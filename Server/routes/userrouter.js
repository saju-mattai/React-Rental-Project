var express = require('express');
var router = express.Router();
const protect = require('../Middleware/jwt')
const upload = require('../Utils/multer')


const signup = require('../Controller/UserController/userlogin')
const login = require('../Controller/UserController/userlogin')
const updataprofile = require('../Controller/UserController/adduserProfile')
const edituser = require('../Controller/UserController/edituser')
const otpLogin = require('../Controller/UserController/OtpLogin')
const getAllVehicle = require('../Controller/UserController/getAllVehicle')
const booking = require('../Controller/UserController/booking')
const addBikeUser = require('../Controller/UserController/addBikeUser')
const getAllUserVehicle = require('../Controller/UserController/getAllUserVehicle')
// const home = require('../Controller/UserController/userlogin')

/* GET users listing. */
router.route('/signup').post(signup.signup)
router.route('/login').post(login.login)
router.route('/addprofile').post(upload.single('image'), updataprofile.uploadprofile)
router.route('/edituser').post(edituser.edituser)
router.route('/otplogin').post(otpLogin.otpLogin)
router.route('/getallvehilce').get(getAllVehicle.getAllVehicle)
router.route('/getalluservehilce').get(getAllUserVehicle.getAllUserVehicle)



router.route('/booking').post(booking.booking)
router.route('/adduserbike').post(upload.array('images'),addBikeUser.addBikeUser)

// router.route('/home').get(protect,home.home)



module.exports = router;
