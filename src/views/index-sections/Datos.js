import React, { useState, useEffect } from 'react';
import ExportExcel from 'react-export-excel';

import { Alert } from 'reactstrap';

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

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

function Datos() {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
      fetch('https://inte-theta.vercel.app/api/filtro')
        .then(response => response.json())
        .then(data => setDatos(data))
        .catch(error => console.error(error));
    }, []);

    return ( 
    <div align="center">
        <Alert color="primary">
            Bienvenido
</Alert>
        <p>Registro de los ultimos 30 dias {''} <i className="now-ui-icons arrows-1_minimal-right"></i> {''}
            <ExcelFile element={<Button className="btn-round" size="lg" color="success" outline> <i className="now-ui-icons arrows-1_cloud-download-93"></i> Exportar a Excel</Button>} filename="Registros 30 dias" >
                    <ExcelSheet data={datos} name="Registros 30 dias">
                        <ExcelColumn label="Dispositivo" value="Dispositivo"/>
                        <ExcelColumn label="Velocidad_viento" value="Velocidad_viento"/>
                        <ExcelColumn label="Temperatura" value="Temperatura"/>
                        <ExcelColumn label="Humedad_atm" value="Humedad_atm"/>
                        <ExcelColumn label="Humedad_cultivo" value="Humedad_cultivo"/>
                        <ExcelColumn label="Date" value="Date"/>
                        <ExcelColumn label="Hour" value="Hour"/>
                    </ExcelSheet>
                </ExcelFile>
                {' '}
                18 mb
                </p>
    </div> 
    );
}

export default Datos;