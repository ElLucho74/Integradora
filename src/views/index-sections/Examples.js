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

function Examples() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
    
 
  
      <div className="section section-navbars">
        <Container id="menu-dropdown">
          <Row>
            <Col md="6" className="mt-5">
              <br></br>
              <h4>Cáhuitl en la Feria Mexicana de Ciencias e Ingenierías Durango 2023</h4>
                <Container style={{textAlign: "justify"}}>
                 <h5>Un equipo de representantes del proyecto Cáhuitl, fue a la feria nacional de Ciencias e Ingenierías para participar en la categoría "Ciencias Terrestres y Abientales", donde muchas universidades grandes participaron para solucionar problemas grandes a nivel mundial.</h5>
                </Container>
            </Col>
            <Col className="mt-5">
              <br></br>
            <img src={require("assets/img/concurso.jpeg")}
                ></img>
            </Col>
           
          </Row>
          
        </Container>
       </div>
      </>
                    
  );
}

export default Examples;