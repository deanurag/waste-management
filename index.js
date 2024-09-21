const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { getData, postData } = require('./controllers');
const connectDB = require('./database/db');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.get('/', getData);
app.post('/', postData);

app.listen(process.env.PORT, () => console.log(`The server is working on port ${process.env.PORT}`));