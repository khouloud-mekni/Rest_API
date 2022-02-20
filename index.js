const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

//setting the localhost Port

const PORT = 5000 || process.env.PORT;


    //connect to the database
mongoose.connect(('mongodb://127.0.0.1:27017/RESTAPI_CHECKPOINT', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => { console.log('DATABASE IS CONNECTED') })
    .catch((err) => { console.log(`this is an error `) }))

app.use(express.json());
app.use(require('./routers'));
//setting the server to listen to requests

app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`the server is listening on ${PORT}`)
})