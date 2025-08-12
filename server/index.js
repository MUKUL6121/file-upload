const express = require('express');
const app = express();
const fileupload = require('express-fileupload');

app.use(fileupload());

app.get('/', (req, res) => {
    res.send("your file uploading is site is working");
});

app.post('/upload', (req, res) => {
    let samplefile;
    let uploadpath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    // Use the mv() method to place the file somewhere on your server
    else {
        samplefile = req.files.samplefile;
        uploadpath = __dirname + '/assets' + samplefile.name;

        samplefile.mv(uploadpath, (err) => {
            if (err) {
                return res.send(err);
            }
            res.send(`File uploaded ${samplefile.name}`);
        })
    }
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});