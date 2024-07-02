const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    policy_number: { type: String },
    company_name: { type: String }
}, {
    collection: 'policy_carrier'
});

const userModel = mongoose.model('policy_carrier', userSchema);

module.exports = userModel;



