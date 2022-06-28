const express = require('express');
const user = require('../../models/home/user');
const service = require('../../models/service');
const appliedService = require('../../models/appliedService');
var router = express.Router();

router.use(express.json());
const QRCode = require('qrcode');
const { async } = require('jshint/src/prod-params');


router.get('/official/qrcode',(req,res)=>{
    let phone = "9113937543";
    let password ="test1234";
    const opts = {
        errorCorrectionLevel: 'H',
        type: 'terminal',
        quality: 0.95,
        margin: 1,
        color: {
         dark: '#208698',
         light: '#FFF',
        },
       };
       QRCode.toDataURL('Hi testing QR code', opts).then(doc=>{
        console.log("URL",doc);
        res.send(doc);
       });
});

module.exports = router;