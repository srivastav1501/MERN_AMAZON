require("dotenv").config();
const express = require("express");
const app = express();
// const mongoose = require('mongoose')
require('./db/conn');
const cookieParser = require("cookie-parser")


const Products = require('./modals/productsSchema')
const DefaultData = require('./defaultdata.js');
const cors = require('cors')
const router = require('./routes/router')



app.use(cors({credential: true, origin: `http://localhost:${process.env.PORT}`}));
app.use(express.json()); 
app.use(cookieParser(""))
app.use(router);


const port = process.env.PORT || 8005;

app.listen(port, ()=>{
    console.log(`Running on ${port}`);
})

DefaultData();