var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();
//database
mongoose.connect("mongodb://127.0.0.1:27017/RENTAL-DATABASE").then((data)=>{
  console.log("connected")
}).catch((err)=>{
  console.log(err);
})

var adminRouter = require('./routes/adminroutes');
var usersRouter = require('./routes/userrouter');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


//cors
const corsOptions = {
  origin : "http://localhost:3001",
  credentials : true,
  optioSuccessStatus : 200
}
app.use(cors(corsOptions))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/admin', adminRouter);
app.use('/api/user', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
const PORT = process.env.PORT || 3000

app.listen(PORT,console.log('port',PORT))


module.exports = app;