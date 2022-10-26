const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//เรียกใช้ api
const { service , adduser } = require('./api/api');
app.get('/service' , service);
app.post('/adduser' , adduser);

app.listen(4000 , () =>{
    console.log('server connect');
})