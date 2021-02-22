import './login.css';
import Users from './users.svg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';
import Axios from 'axios'


function Login({ setToken }) {

  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();


  async function loginUser(credentials) {
    // console.log(credentials)
    Axios.get('http://localhost:5000/auth', { params: credentials }).then(response => {
      console.log(response.data.token)
      setToken(response.data);
      localStorage.setItem('idUser', response.data.idUser);
      localStorage.setItem('login', response.data.login);
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({ login, senha });
  }


  return (
    <div id="painel" className="d-flex justify-content-center">
      <div id="formulario">
        <img id="usersIcon" src={Users}></img>
        <Form onSubmit={handleSubmit} >
          <Form.Group>
            <Form.Label>Login</Form.Label>
            <Form.Control type="text" onChange={e => setLogin(e.target.value)} id="login" name="login" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" onChange={e => setSenha(e.target.value)} id="senha" name="senha" />
          </Form.Group>
          <Button variant="primary" type="submit">Entrar</Button>
        </Form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;
