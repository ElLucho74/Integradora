import React from "react";

// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Navbars() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      <div className="section section-navbars">
        <Container id="menu-dropdown">
          <Row>
            <Col md="6" className="mt-5">
              <br></br>
              <h4>Acerca de Nosotros</h4>
                <Container style={{textAlign: "justify"}}>
                 <h5>Somos un equipo de la carrera de Tecnologías de la Información (TI) de la Universidad Tecnológica de Durango encargada de diseñar y crear una estación meteorológica para darle solución a un problema presentado en el Instituto Tecnológico del Valle del Guadiana (ITVG).</h5>
                </Container>
            </Col>
            <Col className="mt-5">
              <br></br>
            <img src={require("assets/img/guapitos.jpeg")}></img>
            </Col>
           
          </Row>
          
        </Container>
       </div>
      </>
                    
  );
}

export default Navbars;
