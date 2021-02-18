var express = require('express');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var middlewareConfigurations = require("./configurations/middlewareConfig")
var routesConfiguration = require("./configurations/routesConfig")
var errorConfiguration = require("./configurations/errorConfig")
var dbContext = require("./configurations/mongoDbConfig")

var app = express();

middlewareConfigurations(app)
routesConfiguration(app)
errorConfiguration(app)

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
