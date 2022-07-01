const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//User routes
const index = require("./routes/User/index");
const eServices = require("./routes/User/eservices");
const events = require("./routes/User/events");
const complaints = require("./routes/User/complaints");
const profile = require("./routes/User/updateProfile");
const applyService = require("./routes/User/e-services/applyService");
const payment = require("./routes/User/payments");

//officials routes
const manageServiceRequest = require("./routes/officials/manageServiceRequest");
const QRgenerator = require("./routes/officials/qrgenerator");
const PDFgenerator = require("./routes/officials/pdfgenerator");
const services = require("./routes/officials/Services/services");
const officialIndex = require("./routes/officials/index");
const appliedService = require("./routes/officials/Services/appliedServices");
const uploadEvent = require("./routes/officials/events/uploadEvent");
const deleteEvent = require("./routes/officials/events/deleteEvent");
const updateEvent = require("./routes/officials/events/updateEvent");

const app = express();

app.use(cors());

//app.use(express.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

//connection to database
const uri =
  "mongodb+srv://Team:test1234@cluster0.abbkfog.mongodb.net/Panchayath?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(8080);
    console.log("Connection successfull");
  })
  .catch((err) => console.log(err));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// HOME
app.get("/", (req, res) => {
  res.json({ msg: "Hello" });
});

//*******************************USER*****************************//
//Index
app.use(index);

//user/e-services
app.use(eServices);

//user events
app.use(events);

//user complaints
app.use(complaints);

app.use(profile);

app.use(applyService);

app.use(payment);

//**********************************OFFICIALS ****************************//

app.use(manageServiceRequest);
app.use(QRgenerator);
app.use(PDFgenerator);
app.use(services);
app.use(officialIndex);
app.use(appliedService);
app.use(uploadEvent);
app.use(deleteEvent);
app.use(updateEvent);
