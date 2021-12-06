import React from "react";
import Table from "react-bootstrap/Table";

function Empleados() {
  return (
    <div className="container">
      <h1 className="titulo-principal">Empleados</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Area de Trabajo</th>
            <th>Tiempo de Trabajo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Massimo</td>
            <td>Abelardo</td>
            <td>Fabricacion</td>
            <td>10 hrs</td>
          </tr>
          <tr>
            <td>Juan</td>
            <td>Gonzalez</td>
            <td>Compras de Indirectos</td>
            <td>7 hrs</td>
          </tr>
          <tr>
            <td>Lemon</td>
            <td>Moon</td>
            <td>Marketing</td>
            <td>5 hrs</td>
          </tr>
          <tr>
            <td>Peter</td>
            <td>Parker</td>
            <td>Disenio</td>
            <td>8 hrs</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Empleados;
