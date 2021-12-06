import React from "react";
import Table from "react-bootstrap/Table";

function reporte() {
  return (
    <div className="container">
      <h1 className="titulo-principal">Reporte Mensual</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Area de Trabajo</th>
            <th>Horas trabajadas</th>
            <th>Actividad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Massimo</td>
            <td>Abelardo</td>
            <td>Fabricacion</td>
            <td>160 hrs</td>
            <td>Recorte de tela</td>
          </tr>
          <tr>
            <td>Juan</td>
            <td>Gonzalez</td>
            <td>Compras de Indirectos</td>
            <td>110 hrs</td>
            <td>Conseguri los Materiales</td>
          </tr>
          <tr>
            <td>Lemon</td>
            <td>Moon</td>
            <td>Marketing</td>
            <td>120 hrs</td>
            <td>Hacer promocion</td>
          </tr>
          <tr>
            <td>Peter</td>
            <td>Parker</td>
            <td>Disenio</td>
            <td>160 hrs</td>
            <td>Dibujar las Prendas</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default reporte;
