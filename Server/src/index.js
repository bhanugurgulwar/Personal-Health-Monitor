const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const port = process.env.PORT || 8008;
const url = process.env.MONGODB_URL;
let server;

mongoose
  .connect(url, {
    useNewUrlParser: true, //avoids deprecated warning
  })
  .then((db) => {
    console.log("Connected to DB");
    server = app.listen(port, () => {
      console.log("Server is up on 8008");
    });
  });
