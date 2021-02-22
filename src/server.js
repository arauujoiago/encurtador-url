var http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require("./models/tables");
const bcrypt = require('bcrypt');

app.use(require("cors")());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.json({ message: "Servidor Rodando" });
})

app.get('/auth', (req, res) => {
    db.usuarios.findOne({ where: { login: req.query.login, senha: req.query.senha } }).then((usuario) => {
        if (usuario) {
            res.send({ token: true, idUser: usuario.id, login: usuario.login })
        }
    })

})

app.post('/insertUrl', (req, res, next) => {
    db.urls.create({
        urlOriginal: req.body.urlOriginal,
        urlCurta: req.body.urlCurta,
        idUser: req.body.idUser
    })
})

app.get('/listaUrl', (req, res, next) => {
    console.log(req.query.idUser)
    db.urls.findAll({ where: { idUser: req.query.idUser } }).then(function (urls) {
        res.json(urls)
    })
})

var server = http.createServer(app);
server.listen(5000);