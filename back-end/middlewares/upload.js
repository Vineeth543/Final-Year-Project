//const express = require('express');
const multer = require("multer");

// const storage = multer.diskStorage({
//     dest : "./complaintFiles",
//     filename:(req,file,cb)=>{
//         cb(null,Date.now()+file.originalname);
//     }
// });

const uploadComplaint = multer({
  // storage:storage
  dest: "./complaintFiles/",
});

const uploadUserDetails = multer({
  // storage:storage
  dest: "./UserDocuments/",
});

module.exports = { uploadComplaint, uploadUserDetails };
