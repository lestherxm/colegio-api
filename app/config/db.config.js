module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "postgres",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
