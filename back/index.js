const express = require("express");
const axios = require("axios");
// const csvtojson = require("csvtojson");

const randomstring = require("randomstring");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

var ImpMedia = require("./models/ImpMedia");
const authRout = require("./routes/auth");
const userRout = require("./routes/users");
const regionRout = require("./routes/regions");
const fbapiRout = require("./routes/fbapi");
var impcsv = require("./routes/impmedia");

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json,text,multipart/form-data"
  );
  next();
});
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRout);
app.use("/api/users", userRout);
// app.use("/api/fbapis", fbapiRout);

app.use("/regions", regionRout);
app.use("/api/impmedia", impcsv);

// app.use("/api/categories", categoryRout)

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend is running ");
});
