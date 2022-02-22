const express    = require('express');
const bodyparser = require('body-parser');
const mongoose   = require('mongoose');
const path       = require('path');
const app        = express();
const port       = 4050;
require('dotenv').config();

//Requiring the dynamic route
const formroute = require('./routes/formRoute.js')


//mongoose method specify the connection url from the dotenv file
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//Mongoose method to open a connection to the database
mongoose.connection
    .on("open", () => {
        console.log(`Mongoose Connection Open on port: ${port}`);
    })
    .on("error", (err) => {
        console.log(`Connection error: ${err.message}`)
    });

//Setting our views folder to views and the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Midlleware 
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

//Routes for Dynamic pages
app.use('/', formroute);



//Routes for Static pages
// app.get("/", (req, res) => {
//     res.json({ status: "success", message: "Welcome To Testing API" });
//   });
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});
app.get('/success', (req, res) => {
    res.sendFile(__dirname + '/views/form2.html')
});






















app.listen(port, () => {
    console.log(`We are listening on port: ${port}`)
});