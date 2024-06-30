const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    dob: { type: Date },
    address: { type: String },
    phoneNumber: { type: Number },
    state: { type: String },
    zipCode: { type: Number },
    email: { type: String },
    gender: { type: String },
    userType: { type: String },
    jj:{ type: String },
}, {
    collection: 'user'
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
