require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routers/index");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const errorHandler = require("./error/errorHandler");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.use(errorHandler);

const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    app.listen(port, () => {
      console.log(`${port} is running`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
