var express = require("express");
var router = express.Router();
const upload = require("../Utils/multer");
const protect = require('../Middleware/jwt')


const adminsignup = require("../controller/AdminController/adminSignup");
const adminlogin = require('../controller/AdminController/adminlogin')
const blockunblock = require("../controller/AdminController/blockandunblockuser");
const addvehicle = require("../controller/AdminController/addvehicle");
const ShowAllUSer = require("../controller/AdminController/ShowAllUser");
const ShowAllVehicle = require("../controller/AdminController/showAllVehicles");
const deleteVehicle = require("../controller/AdminController/DeleteVehicle");
const editVehicle = require("../controller/AdminController/editVehicle");
const ShowAllUserVehicle = require("../controller/AdminController/ShowAllUserVehicle");
const userBikeAccept = require("../controller/AdminController/userBikeAccept");
const userBikeReject = require("../controller/AdminController/userBikeReject");
const addCoupon = require("../controller/AdminController/addCoupon");
const getBookingDetails = require("../controller/AdminController/getBookingDetails");
const addLocation = require("../controller/AdminController/AddLocation");

const getAllDetails = require("../controller/AdminController/Dashboard")
const getSalesReport = require("../controller/AdminController/SalesReport")

/* GET users listing. */
router.route("/adminsignup").post(adminsignup.Adminsignup);
router.route("/adminlogin").post(adminlogin.Adminlogin);
router.route("/blockunblock").put(blockunblock.blockunblock);
router
  .route("/addvehicle")
  .post(upload.array("images"), addvehicle.npmaddvehicle);
router.route("/ShowAllUSer").get(ShowAllUSer.ShowAllUSer);
router.route("/searchuser").get(ShowAllUSer.searchUser);

router.route("/showvehicle").get(ShowAllVehicle.ShowAllVehicle);
router.route("/searchvehicle").get(ShowAllVehicle.searchVehicle);

router.route("/deletevehicle").delete(deleteVehicle.deleteVehicle);
router
  .route("/editvehicle")
  .post(upload.array("images"), editVehicle.editVehicle);
router.route("/searchuservehicle").get(ShowAllUserVehicle.SearchUserVehicle) 
router.route("/showuserbikes").get(ShowAllUserVehicle.ShowAllUserVehicle);

router.route("/bikeaccept").put(userBikeAccept.userBikeAccept);
router.route("/bikereject").put(userBikeReject.userBikeReject);
router.route("/addcoupon").post(addCoupon.addCoupon);
router.route("/getcoupon").get(addCoupon.getCoupon);
router.route("/deletecoupon").delete(addCoupon.deleteCoupon);


router.route("/getbookingdetails").get(getBookingDetails.getBookingDetails);

router.route("/addlocation").post(addLocation.addLocation);
router.route("/getlocation").get(addLocation.getLocation);
router.route("/deletelocation").delete(addLocation.deleteLocation);
router.route("/editlocation").post(addLocation.editLocation);


router.route("/getdashboard").get(protect,getAllDetails.getAllDetails);
router.route("/getsalesreport").get(getSalesReport.getSalesReport);



module.exports = router;
