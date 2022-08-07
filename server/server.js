require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routers/index");
const app = express();

app.use(router);

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
