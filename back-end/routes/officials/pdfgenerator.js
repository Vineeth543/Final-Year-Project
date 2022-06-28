
const PDFDocument = require('pdfkit');

const express = require('express');
const user = require('../../models/home/user');
const service = require('../../models/service');
const appliedService = require('../../models/appliedService');
var router = express.Router();

router.use(express.json());
const QRCode = require('qrcode');
const { async } = require('jshint/src/prod-params');

var html_to_pdf = require('html-pdf-node');

let options = { format: 'A4' };
var fs = require('fs');
var nodemailer = require('nodemailer');



router.get('/official/pdf', (req, res) => {
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
  var dtls = "Heyy\nhow are you\tthis is true\nright";
  QRCode.toDataURL(dtls, opts).then(doc => {
    console.log("URL", doc);

    //let file = { content: "<div><h1>Welcome to html-pdf-node</h1><div><img src='"+doc+"' /></div></div>" };
    let format = fs.readFileSync('./middlewares/income.html').toString();
    format = format.replace("@$headername$@", "Domicile certificate");
    format = format.replace("@$certificateId$@", "12345");
    format = format.replace("@$username$@", "Vineeth serigar");
    format = format.replace("@$fatherName$@", "Jaya serigar");
    format = format.replace("@$motherName$@", "Jayashree serigar");
    format = format.replace("@$address$@", "yennehole,karkala,udupi");
    format = format.replace("@$description$@", "he/she has be reciding in this village from last few years");
    format = format.replace("@$validity$@", "5");
    format = format.replace("@$date$@", "5/10/2022");
    format = format.replace("@$qrcode$@",''+doc+'');
    format = format.replace("@$pdoname$@", "Ramesh");
    format = format.replace("@$village$@","yennehole");
    format = format.replace("@$taluk$@","karkala");
    format = format.replace("@$district$@","udupi");
    let file = { content: format };
    html_to_pdf.generatePdf(file, options)
      .then(pdfBuffer => {
        console.log("PDF Buffer:-", pdfBuffer);
        fs.writeFile("./Certificates/testFile.pdf", pdfBuffer, function (err) {
          if (err) {
            return console.log(err);
          }
          console.log("The file was saved!");
        });
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'dmind2051@gmail.com', 
            pass: 'oizxzivgmcultxku'
          }
        });
        var mailOptions = {
          from: 'demo28052002@yahoo.com',
          to: 'vineethserigar17@gmail.com',
          subject: 'Sending Email using Node.js',
          text: 'That was easy!',
          attachments: [
            {   // file on disk as an attachment
              filename: 'sendfile.pdf',
              path: './Certificates/testFile.pdf' // stream this file
            }
          ]
        };
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        res.send("pdfBuffer");
      });

  });


});

module.exports = router;