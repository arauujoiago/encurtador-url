import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import ShortUrl from 'node-url-shortener';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import './home.css'

function Home() {
    const [urlCurta, setUrl] = useState('');

    useEffect(() => {
        var urlOriginal = document.getElementById("urlOriginal").value
        if (urlOriginal != '') {
            Axios.post('http://localhost:5000/insertUrl', { urlOriginal, urlCurta })
        }
    })

    function handleSubmit(event) {
        event.preventDefault();
        var urlOriginal = document.getElementById("urlOriginal").value
        var re = /(http:\/\/|https:\/\/|www)(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/

        if (re.test(urlOriginal)) {
            ShortUrl.short(urlOriginal, function (err, url) {
                setUrl(url);
                // Axios.post('http://localhost:5000/insertUrl', { urlOriginal, urlCurta })
            });

        } else {
            setUrl('URL Inválida.')
        }
    }

    return (
        <div id="painel" className="d-flex justify-content-center">
            <div id="painelHome">
                <h1 id="tituloHome">ENCURTADOR DE URL</h1>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor="inlineFormInputGroup" />
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>URL</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="urlOriginal" />
                        </InputGroup>
                    </Form.Group>
                    <div id="urlEncurtada"><p>{urlCurta}</p></div>
                    <Button variant="warning" type="submit" size="lg" onClick={handleSubmit} block>Encurtar</Button>
                </Form>
                <Link id="linkListar" to="/listaUrls"><Button id="btnListar" variant="info" size="lg" block>Listar URLs</Button></Link>
            </div>

        </div>
    )
}

export default Home;