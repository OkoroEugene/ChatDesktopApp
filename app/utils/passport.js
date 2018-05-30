var model = require('../entities/user');
var bcrypt = require('bcrypt-nodejs')
// var methodOverride = require('method-override')


module.exports = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        // console.log(user);
        done(null, user.id)
    })

    passport.deserializeUser((userId, done) => {
        // console.log(userId);
        model.UserModel.findById(userId, (error, user) => {
            if (error) return done(error, false)
            //console.log(user)
            done(null, user)
        })
    })

    passport.use('local-sign-in', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
        function (req, username, password, done) {
            model.UserEntity.findOne({ username: username }, function (err, user) {
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                bcrypt.compare(password, user.password, function (err, res) {
                    if (res) {
                        // Passwords match
                        return done(null, user);
                    } else {
                        // Passwords don't match
                        return done(null, false, { message: 'bad password' });
                    }
                });
                // if (user.password != password) { return done(null, false, { message: 'bad password' }); }
                // console.log(user)
            });
        }
    ));
}