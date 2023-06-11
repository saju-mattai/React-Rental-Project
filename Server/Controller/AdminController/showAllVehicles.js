const vehiclemodel = require("../../Models/AdminModels/VehicleModel");

exports.ShowAllVehicle = (req, res) => {
  try {
    vehiclemodel
      .find({ Vrequest: "Accepted" })
      .then((data) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const StartIndex = (page - 1) * limit;
        const LastIndex = page * limit;

        const results = {};
        results.TotalVehicle = data.length;
        results.pageCount = Math.ceil(data.length / limit);

        if (LastIndex < data.length) {
          results.next = {
            page: page + 1,
          };
        }

        if (StartIndex > 0) {
          results.prev = {
            page: page - 1,
          };
        }

        results.result = data.slice(StartIndex, LastIndex);

        res.status(200).json(results);
      })
      .catch((err) => {
        res.status(500).json({ msg: "oopz.. Can't Find Vehicles !" });
      });
  } catch (error) {}
};

exports.searchVehicle = (req, res) => {
  const searchdata = req.query.searchdata;
  try {
    vehiclemodel.find({
      $or: [
        { Vname: { $regex: ".*" + searchdata + ".*", $options: "i" } },
        { Vbrand: { $regex: ".*" + searchdata + ".*", $options: "i" } },
        { Vlocation: { $regex: ".*" + searchdata + ".*", $options: "i" } },
        { Vcolor: { $regex: ".*" + searchdata + ".*", $options: "i" } },
      ],
    }).then((data) => {
      console.log(data);
      res.status(200).json(data);
    });
  } catch (error) {}
};
