import React from "react";
import Table from "react-bootstrap/Table";

function MostrarProveedores() {
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Material</th>
            <th>Teléfono</th>
            <th>Correo electrónico</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Andree</td>
            <td>Jimenez</td>
            <td>Telas de mezclilla</td>
            <td>477 102 1172</td>
            <td>andree@mail.com</td>
          </tr>
          <tr>
            <td>Manuel</td>
            <td>Garcia</td>
            <td>Telas de algodon</td>
            <td>477 332 1461</td>
            <td>manuel@mail.com</td>
          </tr>
          <tr>
            <td>Cesar</td>
            <td>Jamit</td>
            <td>Herramientas de costura</td>
            <td>477 766 4359</td>
            <td>cesar@mail.com</td>
          </tr>
          <tr>
            <td>Salomon</td>
            <td>Romero</td>
            <td>Cordones y decoraciones</td>
            <td>477 257 8901</td>
            <td>salomon@mail.com</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MostrarProveedores;
