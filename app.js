require("dotenv").config();
const express = require("express");
const app = express();
// const mongoose = require('mongoose')
require('./db/conn');
const cookieParser = require("cookie-parser")
const cors = require('cors')


const Products = require('./modals/productsSchema')
const DefaultData = require('./defaultdata.js');
const router = require('./routes/router')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

app.use(cors());
app.use(express.json()); 
app.use(cookieParser(""))
app.use(router);


const port = process.env.PORT || 8005;

app.listen(port, ()=>{
    console.log(`Running on ${port}`);
})

DefaultData();