require('dotenv').config();
const mongoose = require('mongoose');

function connectDB(){

     // mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify:true});
     // const connection = mongoose.connection;

     // connection.once('open', ()=>{
     //      console.log('database connected.')
     // }).catch((err)=>console.log('connection failed'))



     mongoose
     .connect(process.env.MONGO_CONNECTION_URL)
     .then((err)=>console.log('mongod connected'));
}



module.exports = connectDB;