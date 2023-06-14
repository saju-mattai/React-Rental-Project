const Location = require("../../Models/LocationSchema");

exports.addLocation = async (req, res) => {
  try {
    let location = {
      Location: req.body.data,
    };

    Location.create(location).then(() => {
      Location.find().then((data) => {
        res.status(200).json(data);
      });
    });
  } catch (error) {
    console.log("Locatin Error", error);
    res.status(400).json(error);
  }
};

exports.getLocation = async (req, res) => {
  try {
    Location.find()
      .sort({ createdAt: -1 })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {}
};

exports.deleteLocation = async (req, res) => {
  try {
    Location.deleteOne({ _id: req.query.id }).then((response) => {
      Location.find().then((data) => {
        res.status(200).json(data);
      });
    });
  } catch (error) {}
};
exports.editLocation = async (req,res)=>{
  try {
    
  } catch (error) {
    
  }
}