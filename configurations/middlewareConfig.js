var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

module.exports = (app) => {
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
};