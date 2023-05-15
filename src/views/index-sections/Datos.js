import React, { useState, useEffect } from 'react';
import ExportExcel from 'react-export-excel';

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
    <>
        <ExcelFile element={<button>Exportar a Excel</button>} filename="Registros 30 dias" >
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
    </> );
}

export default Datos;