const jwt = require("jsonwebtoken");
const asynhandler = require("express-async-handler");
require("dotenv").config();

const protect = asynhandler((req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.TOKEN_CODE);
      console.log('decoded',decoded);

      next();
    } catch (error) {
      res.status(401).json("Token Invalid");
    }
  }
  if (!token) {
    res.status(401).json("TOKEN NOT FOUND");
  }
});

module.exports = protect;
