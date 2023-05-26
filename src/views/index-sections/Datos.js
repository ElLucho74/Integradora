import React, { useState, useEffect } from 'react';
import ExportExcel from 'react-export-excel';
import styles from '../themes/Theme.css'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

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

    const username = localStorage.getItem('username');

    const [data, setData] = useState(null);
    const [datos, setDatos] = useState([]);

    const history = useHistory();

    useEffect(() => {
        const isLoggedIn = !!localStorage.getItem('username');
        if (!isLoggedIn) {
          toast.error('No has iniciado sesión');
          history.push('/login-page');
        }
      }, []);

    const handleLogout = () => {
        // Eliminar los datos del localStorage
        localStorage.removeItem('username');
    
        // Mostrar alerta utilizando react-toastify
        toast.info('Se cerró la sesión');
    
        // Redireccionar al inicio de sesión u otra página
        history.push('/login-page'); // Redirige al componente de inicio de sesión
      };
    

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
            Bienvenido {username}
</Alert>
<div align="right"><Button color="danger" onClick={handleLogout}> <i className='now-ui-icons users_circle-08'></i> Cerrar sesión</Button></div>
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
                    <h4 >Velocidad del viento:</h4>
                    <div className='speedometer-container'>
                        <div className='speedometer-text'>
                            <div className='static'></div>
                            <div className='dynamic'>
                                <span className='km'>{item.Velocidad_viento} km/h</span>
                            </div>
                        </div>
                        <div className='center-point'></div>
                        <div className='speedometer-center-hide'></div>
                        <div className='speedometer-bottom-hide'></div>
                            <div className='arrow-container'>
                                <div className='arrow-wrapper' style={{ transform: `rotate(${item.Velocidad_viento}deg)` } }>
                                    <div className='arrow'></div>
                                </div>
                            </div>
                        <div className='speedometer-scale speedometer-scale-1'></div>
                        <div className='speedometer-scale speedometer-scale-2'></div>
                        <div className='speedometer-scale speedometer-scale-3'></div>
                        <div className='speedometer-scale speedometer-scale-4'></div>
                        <div className='speedometer-scale speedometer-scale-5'></div>
                        <div className='speedometer-scale speedometer-scale-6'></div>
                        <div className='speedometer-scale speedometer-scale-7'></div>
                        <div className='speedometer-scale speedometer-scale-8'></div>
                        <div className='speedometer-scale speedometer-scale-9'></div>
                        <div className='speedometer-scale speedometer-scale-10'></div>
                        <div className='speedometer-scale speedometer-scale-11'></div>
                        <div className='speedometer-scale speedometer-scale-12'></div>
                        <div className='speedometer-scale speedometer-scale-13'></div>
                        <div className='speedometer-scale speedometer-scale-14'></div>
                        <div className='speedometer-scale speedometer-scale-15'></div>
                        <div className='speedometer-scale speedometer-scale-16'></div>
                        <div className='speedometer-scale speedometer-scale-17'></div>
                        <div className='speedometer-scale speedometer-scale-18'></div>
                        <div className='speedometer-scale speedometer-scale-19'></div>
                    </div>
                    </div>
                ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
            </div>
            <p className='espacio'></p>
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
                60 mb aprox.
                </p>
    </div> 
    );
}

export default Datos;