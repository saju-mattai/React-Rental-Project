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
const getWalletDetails = require('../Controller/UserController/Wallet')
const saveBooking = require('../Controller/UserController/savebooking')
const getMyRentedBikeDetails = require('../Controller/UserController/GetRentedBike')
const CancelMyRide = require('../Controller/UserController/CancelMyRide')
const applyCoupon = require('../Controller/UserController/applyCoupon')
const getCancelledVehicle = require('../Controller/UserController/getCancelledBike')
const getAllUser = require('../Controller/UserController/Chat/getAllUser')
const Chat = require('../Controller/UserController/Chat/messageController')


/* GET users listing. */
router.route('/signup').post(signup.signup)
router.route('/login').post(login.login)
router.route('/addprofile').post(upload.single('image'), updataprofile.uploadprofile)
router.route('/edituser').post(edituser.edituser)
router.route('/otplogin').post(otpLogin.otpLogin)
router.route('/getallvehilce').get(getAllVehicle.getAllVehicle)
router.route('/searchvehicle').get(getAllVehicle.searchVehicle)
router.route('/filterbybrand').post(getAllVehicle.filterByBrand)
router.route('/filterbymodel').post(getAllVehicle.filterByModel)

router.route('/getalluservehilce').get(getAllUserVehicle.getAllUserVehicle)



router.route('/booking').post(protect,booking.booking)



router.route('/adduserbike').post(upload.array('images'),protect,addBikeUser.addBikeUser)
router.route('/getwallet').get(getWalletDetails.getWalletDetails)
router.route('/getrentedbike').get(getMyRentedBikeDetails.getMyRentedBikeDetails)
router.route('/savebooking').post(saveBooking.saveBooking)
router.route('/cancelride').put(CancelMyRide.CancelMyRide)
router.route('/getcancelledbike').get(getCancelledVehicle.getCancelledVehicle)
router.route('/applycoupon').post(applyCoupon.applyCoupon)
router.route('/getalluser').get(getAllUser.getAllUser)
router.route('/addmsg').post(Chat.addMessageController)
router.route('/getmsg').post(Chat.getAllMessages)

























// router.route('/home').get(protect,home.home)
// router.route('/getonride').get(getMyRentedBikeDetails.getOnride)



module.exports = router;
