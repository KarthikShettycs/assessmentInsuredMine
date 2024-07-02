const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    policy_number: { type: String },
    policy_start_date: { type: String },
    policy_end_date: { type: String },
    category_name: { type: String },
    collection_id: { type: String },
    company_collection_id: { type: String },
    premium_amount: { type: String },
    policy_type: { type: String },
    policy_mode: { type: String },
    email: { type: String },
}, {
    collection: 'policy_info'
});

const userModel = mongoose.model('policy_info', userSchema);

module.exports = userModel;



