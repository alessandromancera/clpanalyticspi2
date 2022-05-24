const dotenv = require('dotenv');
const cors = require('cors')
const express = require('express')

const Route = require('./routes/routes');

require('./database/index');

const app = express();

// PORT process.env.APP_PORT
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

app.use('/', Route);

dotenv.config();
app.listen(PORT, () => console.log('Sproesser: Server Up and running in port',PORT));