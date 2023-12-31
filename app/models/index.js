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

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.clientes = require("./clientes.model.js")(sequelize, Sequelize);
db.facturas = require("./factura.model.js")(sequelize, Sequelize);
db.farmaciaInv = require("./farmaciaInv.model.js")(sequelize, Sequelize);
db.producto = require("./productos.model.js")(sequelize, Sequelize);

module.exports = db;
