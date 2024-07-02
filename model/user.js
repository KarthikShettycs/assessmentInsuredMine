const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new mongoose.Schema({
    policy_number : { type: String },
    userType: { type: String },
    email: { type: String},
    gender: { type: String },
    firstname: { type: String },
    lastname: { type: String }, 
    address: { type: String },
    phone: { type: String },
    state: { type: String },
    zip: { type: String },
    dob: { type: String }, 
}, {
    collection: 'user'
});


const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
