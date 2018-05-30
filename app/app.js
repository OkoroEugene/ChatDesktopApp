
module.exports = () => {
    var express = require('express')
    var router = express.Router();
    // var cookieParser = require('cookie-parser');
    var mongoose = require('mongoose')
    var bodyParser = require('body-parser')
    var app = express();
    var port = process.env.PORT || 4000;
    // var io = require('socket.io').listen(server);
    var currentDate = new Date();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    var Schema = mongoose.Schema
    var path = require('path');
    // var passport = require("passport");
    app.use(express.static(path.join(__dirname, 'public')));
    // app.use(session);
    // app.use(logErrors);
    var database = require('../app/config/database');

    mongoose.connect(database.localUrl, (err, database) => {
        if (err) console.log(err.message)
        else {
            console.log('Database is Connected!')
        }
    });

    // async function logErrors(err, req, res, next) {
    //     await model.ErrorStackModel.create({ error: err.stack, date: Date.now() });
    //     next(err);
    // }

    require('../app/routes.js')(app);
    require('../app/utils/session.js')(app);
    require('../app/utils/passport.js')(app);
    app.listen(port);
    // module.exports.server = server;
    // module.exports.myPassport = passport;
}