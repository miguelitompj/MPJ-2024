import React from 'react';
import Menu from '../componentes/menu';
import { Link } from 'react-router-dom';

function Seccion_iniciada_c() {
  return(
    <div className='Inicio'>
      <Menu />
      <div className="text-center pb-4">
        <h2 className="encabezado mt-3 pt-3">
          <span className="text-primary"><p>¡Bienvenido!</p></span>
        </h2>
        <h2>¡Bienvenido a Mi Propio Jefe!</h2>
        <p>
          En esta página encontraras distintas maneras y apoyo para hacer.
        </p>
      </div>
    </div>
 );
}
export default Seccion_iniciada_c
