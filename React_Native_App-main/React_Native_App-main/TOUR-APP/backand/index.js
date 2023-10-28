const express = require('express');
const dotenv = require("dotenv");
const mongose = require('mongoose');
const app = express();
const tripRouter = require('./routes/trips');
const port = 3000;

dotenv.config()
mongose.connect(process.env.MONGO_URL).then(()=> console.log("connected")).catch((err)=> console.log(err))

app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({limit:'10mb',extended: true}))

app.use('/api/trips', tripRouter)
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT}!`))