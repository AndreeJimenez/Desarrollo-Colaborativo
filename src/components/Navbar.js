import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './navbars';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/Proveedores' activeStyle>
            Proveedores
          </NavLink>
          <NavLink to='/Empleados' activeStyle>
            Empleados
          </NavLink>
          <NavLink to='/Reporte' activeStyle>
            Reporte
          </NavLink>
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar;