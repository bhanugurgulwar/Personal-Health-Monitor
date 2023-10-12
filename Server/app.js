const express = require('express');
const routes = require('./src/routes/index')
const mongoServer = require('./index')

const app = express();

const port = 8008;

app.listen(port,()=>{
    console.log("server is up on server 8008")
});

// JSON requests are received as plain text. We need to parse the json request body.
app.use(express.json());

app.use('/', routes);
// Send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next();
  // next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});


module.exports = app;