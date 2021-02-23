const db = require("./db");
const conn = db.conn;
const Sequelize = db.Sequelize;

const usuarios = conn.define("usuarios", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        notNull: true,
        autoIncrement: true,
    },
    login: {
        type: Sequelize.STRING,
    },
    senha: {
        type: Sequelize.STRING,
    }
});

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

async function sync() {
    await urls.sync({ force: true });
    await usuarios.sync({ force: true });

    usuarios.create({
        login: "Admin",
        senha: "delta123"
    })

}

sync()