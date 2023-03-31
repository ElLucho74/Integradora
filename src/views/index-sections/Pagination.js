import React from "react";

// reactstrap components
import {
  Badge,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function PaginationSection() {
  const [pills, setPills] = React.useState("2");
  return (
    <>
     <br></br>
    <br></br>
    <br></br>
      <div className="section section-pagination">
        <Container>
          <Row>
            <Col md="6">
              
              <h4>Acerca de nuestro Proyecto</h4>
              <h5 style={{textAlign:"justify"}}>
                
                Cáhuitl del náhuat: "Medicion del Timpo" 
                es una estación meteorológica creada con el objetivo de hacer un pronostico del 
                tiempo en el lugar donde se encuentren cultivos exteriores, con el fin de crear un historial y hacer predicciones 
                para evitar perdidas de los cultivos por el cambio climatico.
              </h5>
              
              <br></br>
              
              
              </Col>
            <Col sm="6">
              <h4>Cáhuitl en accion</h4>
              <img src={require("../../assets/img/estazione.jpeg")} height="440px" ></img>
            </Col>
          </Row>
          <br></br>
          <div className="space"></div>
         
        </Container>
      </div>
    </>
  );
}

export default PaginationSection;
