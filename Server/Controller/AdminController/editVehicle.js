const vehiclemodel = require('../../Models/AdminModels/VehicleModel')
const path = require('path')
const fs = require('fs')
const cloudinary = require('../../Utils/cloudinary')

exports.editVehicle= async (req,res)=>{
    console.log(req.query.id);
    console.log("sasasas",req.body,';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;');
    console.log("file",req.files);


    try {
        const uploader = async (path) => await cloudinary.uploads(path, 'Images');
        if (req.method === 'POST') {
            const urls = []
            const files = req.files;
            for (const file of files) {
                const { path } = file;

                const newPath = await uploader(path)
                urls.push(newPath)
                fs.unlinkSync(path)
            }
            const { Vname, Vmodel, Vbrand, Vprice, Vcolor, Vfuel, Vdesc, Vphoto ,Vnumber} = req.body
            
                vehiclemodel.updateOne({_id:req.query.id},
                    {
                        $set:{
                            Vname:Vname,
                            Vmodel:Vmodel,
                            Vbrand:Vbrand,
                            Vprice:Vprice,
                            Vcolor:Vcolor,
                            Vfuel:Vfuel,
                            Vdesc:Vdesc,
                            Vnumber:Vnumber,
                            Vphoto:urls
                        }
                    }).then((data)=>{
                        console.log(data);
                    })

        }
    } catch (error) {
        
    }
}