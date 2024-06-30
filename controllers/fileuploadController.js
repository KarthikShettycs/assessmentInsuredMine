const { workerData, parentPort } = require('worker_threads');
const csvToJson = require('../utils/csvTojson')
const xlsxToJson = require('../utils/xlxsTojson')
const fs = require('fs');
const uploadClientInfo = require('../services/uploadClientInfo')
try {
    async function uploadFile() {
        const { filePath, fileType } = workerData;
        let data;
        try {
            if (fileType === 'text/csv') {
                data = await csvToJson.uploadCSVfile(filePath);
            } else if (fileType.includes('spreadsheetml')) {
                data = xlsxToJson.uploadXLSXfile(filePath);
            } else {
                throw new Error('Unsupported file type');
            }

            await uploadClientInfo.uploadToMongoDB(data);
            fs.unlinkSync(filePath);
            parentPort.postMessage({status:200, Message:'File uploaded successfully'});
        } catch (error) {
            parentPort.postMessage({status:500, Message:error.message});
        }
    }
    uploadFile()
} catch (e) {
    console.log(e)
}