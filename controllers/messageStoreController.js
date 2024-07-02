const dateMessageService = require('../services/dateMessageService');
const schedule = require('node-schedule');

const getMessageStore = async (req, res) => {
    try {
        const { message, day, time } = req.body;

        if (!message || !day || !time) {
            return res.status(400).send('Message, day, and time are required.');
        }

        try {
            const datetime = new Date(`${day}T${time}`);
            schedule.scheduleJob(datetime, () => {
                dateMessageService.fetchAggregateData(message)
            });
            console.log(`Task scheduled for ${datetime}`);
        res.status(200).json({status:200, message:'Message scheduled successfully.'});
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }catch(error){
        res.status(500).json({ message: error.message });
    }
    };

    module.exports = { getMessageStore };
