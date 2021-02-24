const express = require('express');
const db = require("./models/tables");
const bodyParser = require('body-parser');
const app = express();

app.use(require("cors")());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/auth', (req, res, next) => {
    db.usuarios.findOne({ where: { login: req.query.login, senha: req.query.senha } }).then((usuario) => {
        if (usuario) {
            res.send({ token: true, idUser: usuario.id, login: usuario.login })
        }
        else {
            res.send({msg: "Login e/ou senha errados."})
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

app.get('/listaUrls', (req, res, next) => {
    console.log(req.query.idUser)
    db.urls.findAll({ where: { idUser: req.query.idUser } }).then(function (urls) {
        res.json(urls)
    })
})

app.listen(5000);