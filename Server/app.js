const express = require('express');

const app = express();

const port = 8008;

app.listen(port,()=>{
    console.log("server is up on server 8008")
})

module.exports = app;