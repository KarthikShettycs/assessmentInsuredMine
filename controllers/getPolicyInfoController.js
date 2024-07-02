const userService = require('../services/userService');
const policyService = require('../services/policyInfoService');

const getPolicyInfo = async (req, res) => {
    const { username } = req.body;

    try {
        if (!username) {
            return res.status(400).json({ message: 'Username is required in the request body' });
        }

        const userData = await userService.fetchUserData(username);

        if (!userData || !Array.isArray(userData)) {
            return res.status(404).json({ message: 'User not found or invalid data format' });
        }

        const policyPromises = userData.map(async (user) => {
            const policyData = await policyService.fetchPolicyData(user.policy_number);
            return policyData;
        });

        const policyData = await Promise.all(policyPromises);

        if (policyData.length === 0) {
            return res.status(404).json({ message: 'No Policy details found for this user' });
        }

        res.status(200).json(policyData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getPolicyInfo };
