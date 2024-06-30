const mongoose = require('mongoose');

const fileUploadSchema = new mongoose.Schema({}, { strict: false });
const Upload = mongoose.model('client_info', fileUploadSchema);

module.exports = Upload;