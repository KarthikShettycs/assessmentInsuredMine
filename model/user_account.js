const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    policy_number: { type: String },
    account_name: { type: String }
}, {
    collection: 'user_accounts'
});

const userModel = mongoose.model('user_accounts', userSchema);

module.exports = userModel;
