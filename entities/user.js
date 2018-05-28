const mongoose = require('mongoose')
const Schema = mongoose.Schema
var bcrypt = require('bcrypt-nodejs')
var SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
})

UserSchema.pre('save', function (next) {
    var user = this;
    if (user.password !== '000000') {
        if (this.isModified(user.password) || this.isNew) {
            bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
                if (err) return next(err);
                bcrypt.hash(user.password, salt, null, function (err, hash) {
                    if (err) return next(err);
                    user.password = hash;
                    next();
                });
            });
        }
    }
    else {
        next();
    }
});

UserSchema.methods.comparePassword = function (userPassword, cb) {
    bcrypt.compare(userPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


var User = mongoose.model('User', UserSchema);
module.exports.UserEntity = User;