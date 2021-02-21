var http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require("./models/tables");

app.use(require("cors")());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.json({ message: "Servidor Rodando" });
})

app.post('/insertUrl', (req, res, next) => {
    db.urls.create({
        urlOriginal: req.body.urlOriginal,
        urlCurta: req.body.urlCurta
    })
})

app.get('/listaUrl', (req, res, next) => {
    db.urls.findAll().then(function (urls) {
        res.json(urls)  
    })
})

var server = http.createServer(app);
server.listen(5000);
console.log("Servidor escutando na porta 5000...")