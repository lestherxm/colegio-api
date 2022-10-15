const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

/**
 * TODO: Acá se deben poner las rutas hacia los modelos
 */

db.personas = require("./persona.model.js")(sequelize, Sequelize);
db.grados = require("./grado.model.js")(sequelize, Sequelize);
db.grupos = require("./grupo.model.js")(sequelize, Sequelize);
db.roles = require("./rol.model.js")(sequelize, Sequelize);
db.secciones = require("./seccion.model.js")(sequelize, Sequelize);

module.exports = db;
