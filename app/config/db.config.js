const { config } = require("dotenv");
config();

module.exports = {
    DB: process.env.DB_NAME1 || process.env.DB_NAME2,
    USER: process.env.DB_USER1 || process.env.DB_USER2,
    PASSWORD: process.env.DB_PASSWORD1 || process.env.DB_PASSWORD2,
    HOST: process.env.DB_HOST1 || process.env.DB_HOST2,
    dialect: DB_DIALECT1 || DB_DIALECT2,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
