const index = require('../app');
var passport = require('Passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var cookieParser = require('cookie-parser');

module.exports = function(app) {
    app.use(cookieParser('secret'));
    app.set('trust proxy', 1) // trust first proxy
    var session = require("express-session")({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 },
        cookie: true
    });
    app.use(session);
    // module.exports = session;
}

require('../utils/passport.js');



