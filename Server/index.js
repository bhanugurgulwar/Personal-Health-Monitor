const url = 'mongodb://localhost:27017/personal-health-monitor';
const mongoose = require('mongoose');

try{
    mongoose.connect(url)
    console.log('connected to db');
}catch(e){
    console.log(e.message);
}