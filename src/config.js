const cors = require('cors')
const express = require('express');
const app = express();

const Route = require('./routes/routes');

require('./database/index');

app.use(cors());
app.use(express.json());

app.use('/', Route);

module.exports = app;