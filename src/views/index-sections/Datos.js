import React, { useState, useEffect } from 'react';
import ExportExcel from 'react-export-excel';
import styles from '../themes/Theme.css'

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

    const [data, setData] = useState(null);
    const [datos, setDatos] = useState([]);

    const fetchData = async () => {
        try {
          const response = await fetch('https://inte-theta.vercel.app/api/ultimo');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
      fetch('https://inte-theta.vercel.app/api/filtro')
        .then(response => response.json())
        .then(data => setDatos(data))
        .catch(error => console.error(error));
    }, []);
    

    fetchData();

    return ( 
    <div className='contenedor'>
        <Alert color="primary" align="center">
            Bienvenido
</Alert>
            <div>
            {data ? (
                <div>
                {data.map((item) => (
                    <div>
                    <h2 align='center'>Monitoreo en tiempo real</h2>
                    <div className='date'> 
                        <h5>Dispositivo: {item.Dispositivo}</h5>
                         <h5>Fecha: {item.Date} Hora: {item.Hour} </h5>
                    </div>
                    <h3 className='temperatura' align='center'>{item.Temperatura}</h3>
                    <h4>Humedad Atmosferica:</h4>
                    <div className='barra'>
                        <div className='inner' style={{ width: `${item.Humedad_atm}%` } } >
                            <p className='titulo'> {item.Humedad_atm}% </p>
                        </div>
                    </div>

                    <h4>Humedad Cultivo:</h4>
                    <div className='barra'>
                        <div className='inner' style={{ width: `${item.Humedad_cultivo}%` } } >
                            <p className='titulo'> {item.Humedad_cultivo}% </p>
                        </div>
                    </div>
                    <p className='espacio'>Velocidad del viento: {item.Velocidad_viento}</p>
                    </div>
                ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
            </div>
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