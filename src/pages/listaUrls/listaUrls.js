import './listaUrls.css'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'


function ListaUrls() {
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>https://www.globo.com/</td>
                            <td>https://glo.bo/2NpLPqL</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>https://www.facebook.com/</td>
                            <td>https://bit.ly/3kaG4t8</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ListaUrls;