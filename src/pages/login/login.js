import './login.css';
import Users from './users.svg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login() {

  return (
    <div id="painel" className="d-flex justify-content-center">
      <div id="formulario">
        <img id="usersIcon" src={Users}></img>
        <Form action="" method="POST">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Login</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Button variant="primary" type="submit">Entrar</Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
