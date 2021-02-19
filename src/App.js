import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div id="painel" className="d-flex justify-content-center">
      <div id="formulario">
        <Form action="" method="POST">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Login</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Entrar
  </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
