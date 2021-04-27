module.exports = (app) => {
    var aws = require('aws-sdk');
    var multer = require('multer');
    var multerS3 = require('multer-s3');
    var fs = require('fs');
    var https = require('https');
    var downloadsFolder = require('downloads-folder');

    var spacesEndpoint = new aws.Endpoint('fra1.digitaloceanspaces.com Copy');
    var s3 = new aws.S3({
        endpoint: spacesEndpoint
    });

    var upload = multer({ 
        storage: multerS3({
            s3: s3,
            bucket: 'sncf-intership',
            acl:'public-read',
            key: (req, file, cb) => {
                cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
            }
        }), fileFilter : function(req, file, callback) { 
            if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
                return callback(new Error('Wrong extension type'));
            }
            callback(null, true);
        }
    });

    app.post('/rexmat', upload.array('file', 1), function(req, res) {
        //console.log(req.files, req.body, downloadsFolder());
        https.get(req.files[0].location, (res, err) => {
            const path = `${downloadsFolder()}/${req.files[0].key}`;
            const filePath = fs.createWriteStream(path);
            res.pipe(filePath);
        })
    });
}