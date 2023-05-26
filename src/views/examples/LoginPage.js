import React, {useState, useEffect} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  useEffect(() => {
    // Borrar los datos del localStorage al cargar la página de inicio de sesión
    localStorage.clear();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://inte-theta.vercel.app/api/login', {
        username,
        password,
      });

      if (response.status === 200) {
        console.log(response.data); // Mostrar respuesta en la consola

        // Redireccionar a otra página
        localStorage.setItem('username', username);
        // Mostrar alerta utilizando react-toastify
        toast.success('Inicio de sesión exitoso', {
          autoClose: 1000,
          onClose: () => {
            // Redireccionar a otra página después de la duración especificada
            history.push('/datos-page');
          },
          position: toast.POSITION.TOP_CENTER
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('Error en el inicio de sesión', {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };



  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/cultivo_1.jpeg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form className="form">
                  <CardHeader className="text-center">
                      <img
                        alt="..."
                        src={require("assets/img/now-logo.png")}
                      ></img>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Inserte su usuario"
                        type="text"
                        onChange={e => setUsername(e.target.value)}
                        value={ username }
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Ingrese su contraseña"
                        type="password"
                         onChange={e => setPassword(e.target.value)}
                        value={ password }
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      size="lg"
                      onClick={handleLogin}
                    >
                      Iniciar Sesión
                    </Button>
                    <ToastContainer />
                    <div className="pull-left">
                      
                    </div>
                    <div className="pull-right">
                      
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
      
      </div>
    </>
  );
}

export default LoginPage;
