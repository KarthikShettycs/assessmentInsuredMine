const Upload = require('../model/client_info')
const connectionDB = require('../databaseConfig/config')

async function uploadToMongoDB(data) {
  try {
    await Upload.insertMany(data);
  } catch (error) {
    throw new Error(`Error while uploading file data to MongoDB:${error.message}`);
  }
}

module.exports = {
  uploadToMongoDB
};
