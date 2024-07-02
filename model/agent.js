const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    policy_number: { type: String },
    agent: { type: String }
}, {
    collection: 'agent'
});

const userModel = mongoose.model('agent', userSchema);

module.exports = userModel;
