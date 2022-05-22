const dotenv = require('dotenv');
const cors = require('cors')
const express = require('express')

const Route = require('./routes/routes');

require('./database/index');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', Route);

dotenv.config();
app.listen(process.env.APP_PORT, () => console.log('Sproesser: Server Up and running in port',process.env.APP_PORT));