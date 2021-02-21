import './listaUrls.css'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react';
import Axios from 'axios'

function ListaUrls() {
    const [urls, setUrl] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5000/listaUrl').then(response => {
            setUrl(response.data);
        })
    }, []);

    return (
        <div id="painel" className="d-flex justify-content-center">
            <div id="painelListaUrls">
                <Link id="linkListar" to="/home"><Button id="btnVoltar" variant="warning">Voltar</Button></Link>
                <h1 id="tituloListaUrls">Olá, Fulano.<br />Lista de urls encurtadas:</h1>
                <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Url Original</th>
                            <th>Url Encurtada</th>
                            <th>Data de Criação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {urls.map(urls => (<tr>
                            <td>{urls.id}</td>
                            <td>{urls.urlOriginal}</td>
                            <td>{urls.urlCurta}</td>
                            <td>{urls.createdAt}</td>
                        </tr>))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ListaUrls;