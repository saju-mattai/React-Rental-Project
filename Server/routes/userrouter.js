var express = require('express');
var router = express.Router();
const protect = require('../Middleware/jwt')
const upload = require('../Utils/multer')


const signup = require('../controller/UserController/userlogin')
const login = require('../controller/UserController/userlogin')
const updataprofile = require('../controller/UserController/adduserProfile')
const edituser = require('../controller/UserController/edituser')
const otpLogin = require('../controller/UserController/OtpLogin')
const getAllVehicle = require('../controller/UserController/getAllVehicle')
const booking = require('../controller/UserController/booking')
const addBikeUser = require('../controller/UserController/addBikeUser')
const getAllUserVehicle = require('../controller/UserController/getAllUserVehicle')
// const home = require('../controller/UserController/userlogin')
const getWalletDetails = require('../controller/UserController/Wallet')
const saveBooking = require('../controller/UserController/savebooking')
const getMyRentedBikeDetails = require('../controller/UserController/GetRentedBike')
const CancelMyRide = require('../controller/UserController/CancelMyRide')
const applyCoupon = require('../controller/UserController/applyCoupon')

/* GET users listing. */
router.route('/signup').post(signup.signup)
router.route('/login').post(login.login)
router.route('/addprofile').post(upload.single('image'), updataprofile.uploadprofile)
router.route('/edituser').post(edituser.edituser)
router.route('/otplogin').post(otpLogin.otpLogin)
router.route('/getallvehilce').get(getAllVehicle.getAllVehicle)
router.route('/getalluservehilce').get(getAllUserVehicle.getAllUserVehicle)



router.route('/booking').post(protect,booking.booking)



router.route('/adduserbike').post(upload.array('images'),addBikeUser.addBikeUser)
router.route('/getwallet').get(getWalletDetails.getWalletDetails)
router.route('/getrentedbike').get(getMyRentedBikeDetails.getMyRentedBikeDetails)
router.route('/savebooking').post(saveBooking.saveBooking)
router.route('/cancelride').put(CancelMyRide.CancelMyRide)
router.route('/applycoupon').post(applyCoupon.applyCoupon)





// router.route('/home').get(protect,home.home)



module.exports = router;
