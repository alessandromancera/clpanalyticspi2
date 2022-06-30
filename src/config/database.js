const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    dialect: process.env.DB_DIALECT,
    // host: process.env.DB_HOST,
    // database: process.env.DB_NAME,
    // username: process.env.DB_USER,
    // password: process.env.DB_PASS,
    host: "us-cdbr-east-05.cleardb.net",
    database: "heroku_b49f2fc3475df13",
    username: "b0aaf76ab20c2a",
    password: "e706d75b",
    port: process.env.DB_PORT,
    logging: false,
    //timezone: "-03:00",
    define: {
        timestamps: true,
        underscored: true,
        paranoid: true,
    },
}
