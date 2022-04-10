const express = require('express')

const bodyParser = require('body-parser');
 const app = express();
 app.use(bodyParser.json());
 const dotenv = require('dotenv');


/*app.get('/', (req, res)=>{
    res.send("hello world")

});
app.get('/students', (req, res)=>{
    res.send("students")

});*/
const connectDB = require('./config/db');
// Load Config
dotenv.config({path: './config/config.env'})

connectDB();

app.use('/', require('./routes/index'))


 app.listen(3000);