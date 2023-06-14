
const chatSchema = require("../../../Models/chatSchema");



exports.addMessageController = async (req, res) => {
    try {
      const { from, to, message } = req.body.data;
  
      const data = await chatSchema.create({
        message: {
          text: message,
          image: "",
        },
        users: [from, to],
        sender: from,
      });
  
      if (data) {
        res.status(201).json(data);
        console.log("done it");
      } else {
        res.status(400).json({ msg: "Failed to add Message to the database" });
        console.log("not done it");
      }
    } catch (error) {
      console.log("error in adding msgs", error);
      res.status(500).json("Internal Server Error");
    }
  };

exports.getAllMessages = async (req, res) => {
    try {
      const { from, to } = req.body.data;
      const messages = await chatSchema
        .find({
          users: {
            $all: [from, to],
          },
        })
        .sort({ updatedAt: 1 });
  
      return res.status(200).json(messages);
    } catch (error) {
      console.log("error finding msgs", error);
      return res.status(500).json("error while finding messages");
    }
  };