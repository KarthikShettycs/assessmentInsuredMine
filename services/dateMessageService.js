const MessageModel = require("../model/message");

async function fetchAggregateData(messageContent) {
    try {
        let datetime = new Date();
        const newMessage = new MessageModel({ message: messageContent, datetime });
        await newMessage.save();
        return newMessage;
    } catch (error) {
        throw new Error(`Error while saving message to MongoDB: ${error.message}`);
    }
}

module.exports = { fetchAggregateData };
