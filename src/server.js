
const app = require('./config')

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.APP_PORT || 8081;

app.listen(PORT, () => console.log('Sproesser: Server Up and running in port',PORT));