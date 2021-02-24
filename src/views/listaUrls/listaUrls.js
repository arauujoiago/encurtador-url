import './listaUrls.css'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react';
import Axios from 'axios'

function ListaUrls() {
    const [urls, setUrl] = useState([]);
    var count = 1
    var idUser = localStorage.getItem('idUser');

    useEffect(() => {
        Axios.get('http://localhost:5000/listaUrls', { params: { idUser } }).then(response => {
            setUrl(response.data);
        })
    }, []);

    function formatDate(date) {
        date = new Date(date)
        const time = date.toString().substr(16, 9)
        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear()
        const formatted = `${time} - ${day}/${month}/${year}`

        return formatted
    }

    function removeToken() {
        localStorage.removeItem('token');
        localStorage.removeItem('idUser');
        localStorage.removeItem('login');
        window.location.reload();
    }

    return (
        <div id="painel" className="d-flex justify-content-center">
            <div id="painelListaUrls">
                <Link id="linkListar" to="/home"><Button id="btnVoltar" variant="warning">Voltar</Button></Link>
                <h1 id="tituloListaUrls">LISTA DE URLS</h1>
                <Table responsive striped bordered hover size="sm" id="tabelaUrls">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Url Original</th>
                            <th>Url Encurtada</th>
                            <th>Data de Criação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {urls.map(urls => (<tr key={urls.id}>
                            <td>{count++}</td>
                            <td>{urls.urlOriginal}</td>
                            <td>{urls.urlCurta}</td>
                            <td>{formatDate(urls.createdAt)}</td>
                        </tr>))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ListaUrls;