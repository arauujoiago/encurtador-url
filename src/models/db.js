const Sequelize = require("sequelize");

// const conn = new Sequelize(Database, User, Password, {
//   host: Host,
//   dialect: "mysql",
// });

const conn = new Sequelize("encurtadordeurl", "encurta", "delta123", {
  host: "localhost",
  dialect: "mysql",
});

conn.authenticate().catch(function (err) {
  console.log("Erro ao conectar ao BD.");
});

module.exports = {
  conn: conn,
  Sequelize: Sequelize,
};