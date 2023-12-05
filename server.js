const express = require('express');
const app = express();
const path = require('path')


//middleware
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

//view enginee
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//connect to db
const connectDB = require('./config/db');
connectDB();


//routers
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show.js'));
app.use('/files/download',require('./routes/download.js'))


//
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`server started at PORT=${PORT}`));