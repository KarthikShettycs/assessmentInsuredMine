
const policy_info = require('../model/policy_info')
const connectionDB = require('../databaseConfig/config')

async function fetchPolicyData(policyNo) {
  try {
    const user = await policy_info.findOne({ policy_number:policyNo });
    return user
  } catch (error) {
    throw new Error(`Error while policy aggregator data to MongoDB:${error.message}`);
  }
}

async function fetchAggregateData(emailId) {
    try {
      const user = await policy_info.find({ email:emailId });
      return user
    } catch (error) {
      throw new Error(`Error while geting policy aggregator data to MongoDB:${error.message}`);
    }
  }

module.exports = {
    fetchPolicyData,
    fetchAggregateData
};
