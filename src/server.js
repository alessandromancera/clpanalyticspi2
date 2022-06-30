
const app = require('./config')

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => console.log('Projeto Integrador II: Server Up and running in port',PORT));