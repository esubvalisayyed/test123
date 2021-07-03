const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const mongoose = require('mongoose');
const routesURLs = require('./routes/routes');
const cors = require('cors');
mongoose.connect(process.env.DATABASE_ACCESS,{ useNewUrlParser: true, useUnifiedTopology:true }, () => { console.log('database successfully connected') });
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({

//     extended: true

// }));
app.use(express.json());
//app.use(express.bodyParser());
app.use(cors());
app.use('/app', routesURLs);
app.listen("4000",()=>{ console.log('express server is running')})
