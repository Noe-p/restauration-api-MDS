var Mongoose = require('mongoose');
var UserSchema = new Mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    role: {
        type: String,
        default: 'basic',
        required: true,
    },
    address: {
        type: String,
        unique: false,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: String,
        unique: true,
        required: true,
    },
    country: {
        type: String,
        unique: false,
        required: true,
    },
});
var User = Mongoose.model('user', UserSchema);
module.exports = User;
//# sourceMappingURL=user.js.map