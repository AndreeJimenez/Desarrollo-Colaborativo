import './App.css';
import React from 'react';
import MostrarProveedores from './pages/MostrarProveedores';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
//import Home from './pages';
import Empleados from './pages/Empleados';
import Proveedores from './pages/MostrarProveedores';
import Reporte from './pages/reporte';


//import { Navbar } from 'react-bootstrap';

function App() {
  return (
    
    <Router>
      <Navbar/>
      
      <Routes>
        <Route  exact path='/Empleados' element={<Empleados/>} />
        <Route exact path='/Proveedores' element={<Proveedores/>} />
        <Route exact path='/Reporte' element={<Reporte/>} />
      </Routes>
      
      
     
    </Router>
  );
}

export default App;
