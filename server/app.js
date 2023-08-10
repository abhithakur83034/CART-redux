const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const adminRoute = require('./routes/adminRoute')
// var bodyParser = require('body-parser')
const app = express();
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

app.use('/img', express.static("./uploads")); 

app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/admin',adminRoute)
module.exports = app;
