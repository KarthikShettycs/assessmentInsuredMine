const UserModel = require('../model/user')
const connectionDB = require('../databaseConfig/config')

async function fetchUserData(username) {
  try {
    const user = await UserModel.find({ firstname:username }).populate('policy_number');
    return user
  } catch (error) {
    throw new Error(`Error while getting user data to MongoDB:${error.message}`);
  }
}

async function fetchAllUserData() {
    try {
      const user = await UserModel.find().populate('policy_number');
      return user
    } catch (error) {
      throw new Error(`Error while getting All user data to MongoDB:${error.message}`);
    }
  }

module.exports = {
    fetchUserData,
    fetchAllUserData
};
