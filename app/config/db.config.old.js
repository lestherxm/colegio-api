module.exports = {
  DB: "cebe",
  USER: "root",
  PASSWORD: "root",
  HOST: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
