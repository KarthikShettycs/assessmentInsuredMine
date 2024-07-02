const agent = require('../model/agent')
const user = require('../model/user')
const policy_carrier = require('../model/policy_carrier')
const policy_catagory = require('../model/policy_catagory')
const user_account = require('../model/user_account')
const policy_info = require('../model/policy_info')
const connectionDB = require('../databaseConfig/config')

async function uploadToMongoDB(data) {
  try {
    await agent.insertMany(data);
    await user.insertMany(data);
    await policy_carrier.insertMany(data);
    await policy_catagory.insertMany(data);
    await user_account.insertMany(data);
    await policy_info.insertMany(data);

  } catch (error) {
    throw new Error(`Error while uploading file data to MongoDB:${error.message}`);
  }
}

module.exports = {
  uploadToMongoDB
};
