var express = require('express');
var router = express.Router();
const upload = require('../Utils/multer')

const adminsignup = require('../Controller/AdminController/adminlogin')
// const adminlogin = require('../Controller/AdminController/adminlogin')
const blockunblock = require('../Controller/AdminController/blockandunblockuser')
const addvehicle = require('../Controller/AdminController/addvehicle')
const ShowAllUSer = require('../Controller/AdminController/ShowAllUser')
const ShowAllVehicle = require('../Controller/AdminController/showAllVehicles')
const deleteVehicle = require('../Controller/AdminController/DeleteVehicle')
const editVehicle = require('../Controller/AdminController/editVehicle')




/* GET users listing. */
router.route('/adminsignup').post(adminsignup.Adminsignup)
router.route('/adminlogin').post(adminsignup.Adminlogin)
router.route('/blockunblock').put(blockunblock.blockunblock)
router.route('/addvehicle').post(upload.array('images'), addvehicle.npmaddvehicle)
router.route('/ShowAllUSer').get(ShowAllUSer.ShowAllUSer)
router.route('/showvehicle').get(ShowAllVehicle.ShowAllVehicle)
router.route('/deletevehicle').delete(deleteVehicle.deleteVehicle)
router.route('/editvehicle').post(upload.array('images'),editVehicle.editVehicle)
// router.route('/edit').post(editVehicle.editVehicle)



module.exports = router;