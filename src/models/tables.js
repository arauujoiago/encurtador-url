const db = require("./db");
const conn = db.conn;
const Sequelize = db.Sequelize;

const urls = conn.define("urls", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    notNull: true,
    autoIncrement: true,
  },
  urlOriginal: {
    type: Sequelize.STRING,
  },
  urlCurta: {
    type: Sequelize.STRING,
  },
  idUser: {
    type: Sequelize.INTEGER,
  }
});

// Fazer a sincronização das tabelas antes de iniciar o projeto, depois é preciso comentar o código abaixo:

// urls.sync({ force: true });
// usuarios.sync({ force: true });
// salas.sync({ force: true });

module.exports = {
  urls: urls
};