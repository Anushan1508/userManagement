const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection')

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8000;

// Log Requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// Parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}))

// Set view engine
app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views/ejs"))

// Load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// Load Routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})