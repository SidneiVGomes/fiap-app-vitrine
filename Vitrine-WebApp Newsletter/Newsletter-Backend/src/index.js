require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

mongoose.connect(process.env.MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(express.json());
app.use(routes);

app.listen(port, ()=>{
    console.log('=====================================================');
    console.log('      App running at: http://localhost:'+ port);
    console.log('=====================================================');
});
