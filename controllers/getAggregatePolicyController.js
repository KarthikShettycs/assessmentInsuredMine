const userService = require('../services/userService');
const policyService = require('../services/policyInfoService');

const getAggregatorPolicy = async (req, res) => {
    try {
        const userData = await userService.fetchAllUserData();

        if (!userData || !Array.isArray(userData)) {
            return res.status(404).json({ message: 'User not found or invalid data format' });
        }

        let policyPromises = userData.map(async (user) => {
            let policyData = await policyService.fetchAggregateData(user.email);

            if (!policyData || !Array.isArray(policyData)) {
                return {
                    userName: user.firstname,
                    userEmail: user.email,
                    totalPolicy: 0,
                    totalPremiumAmout: 0,
                    policyDetails: []
                };
            }

            let totalPremiumAmt = 0;
            let policyDetails = policyData.map(policyAggData => {
                totalPremiumAmt += Number(policyAggData.premium_amount);
                return {
                    policyNumber: policyAggData.policy_number,
                    policyCategory: policyAggData.category_name,
                    policyType: policyAggData.policy_type,
                    policyMode: policyAggData.policy_mode,
                    premiumAmount: policyAggData.premium_amount
                };
            });

            return {
                userName: user.firstname,
                userEmail: user.email,
                totalPolicy: policyData.length,
                totalPremiumAmout: totalPremiumAmt,
                policyDetails: policyDetails
            };
        });

        const policyData = await Promise.all(policyPromises);

        if (policyData.length === 0) {
            return res.status(404).json({ message: 'No Policy details found for any policy' });
        }

        res.status(200).json(policyData);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getAggregatorPolicy };
