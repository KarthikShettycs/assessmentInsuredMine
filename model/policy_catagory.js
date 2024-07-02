const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    policy_number : { type: String },
    category_name: { type: String }
}, {
    collection: 'policy_category'
});

const userModel = mongoose.model('policy_category', userSchema);

module.exports = userModel;



