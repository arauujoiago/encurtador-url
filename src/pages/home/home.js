import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import ShortUrl from 'node-url-shortener';
import React, { useState, useEffect } from 'react';
import './home.css'

function Home() {
    const [url, setUrl] = useState('');

    function handleInputChange(event) {
        event.preventDefault();
        let x = document.getElementById("urlOriginal")
        ShortUrl.short(x.value, function (err, url) {
            setUrl(url);
        });
    }

    return (
        <div id="painel" className="d-flex justify-content-center">
            <div id="painelHome">
                <h1 id="tituloHome">ENCURTADOR DE URL :)</h1>
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
                    <div id="urlEncurtada"><p>{url}</p></div>
                    <Button variant="warning" type="submit" size="lg" onClick={handleInputChange} block>Encurtar</Button>
                </Form>
                <Link id="linkListar" to="/listaUrls"><Button id="btnListar" variant="info" size="lg" block>Listar URLs</Button></Link>
            </div>

        </div>
    )
}

export default Home;