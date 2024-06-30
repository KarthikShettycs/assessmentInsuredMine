// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { Worker } = require('worker_threads');

const upload = multer({ dest: 'assets/' });

router.post('/fileupload', upload.single('file'), async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        const worker = new Worker(path.resolve(__dirname, '../controllers/fileuploadController.js'), {
            workerData: { filePath: req.file.path, fileType: req.file.mimetype }
        });
        
        worker.on('message', (message) => {
            res.status(200).send(message);
        });
    
        worker.on('error', (error) => {
            res.status(500).send(error.message);
        });
    
        worker.on('exit', (code) => {
            if (code !== 0) {
                res.status(500).send(`Worker stopped with exit code ${code}`);
            }
        });

    } catch (e) {
        console.log(e)
    }
});


module.exports = router;
