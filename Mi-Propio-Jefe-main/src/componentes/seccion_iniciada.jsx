import React, { useState } from 'react';
import Menu from '../componentes/menu';

function Seccion_iniciada_c() {
  // Estado que simula si la sesión está activa (puede ser reemplazado por un valor real de autenticación)
  const [isSessionActive, setIsSessionActive] = useState(true); // Suponiendo que el usuario ha iniciado sesión

  return (
    <div className="Inicio">
      {/* Pasar el estado de sesión al componente Menu */}
      <Menu isSessionActive={isSessionActive} />
      <div className="text-center pb-4">
        <h2 className="encabezado mt-3 pt-3">
          <span className="text-primary"><p>¡Bienvenido!</p></span>
        </h2>
        <h2>¡Bienvenido a Mi Propio Jefe!</h2>
        <p>
          En esta página encontrarás distintas maneras y apoyo para hacer.
        </p>
      </div>
    </div>
  );
}

export default Seccion_iniciada_c;
