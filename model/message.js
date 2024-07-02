const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    message: { type: String },
    datetime: { type: Date }
}, {
    collection: 'message'
});

const userModel = mongoose.model('message', userSchema);

module.exports = userModel;
