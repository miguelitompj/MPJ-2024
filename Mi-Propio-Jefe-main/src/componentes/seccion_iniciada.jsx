import React, { useState } from 'react';
import Menu from '../componentes/menu';

function Seccion_iniciada_c() {
  // Estado que simula si la sesión está activa (puede ser reemplazado por un valor real de autenticación)
  const [isSessionActive, setIsSessionActive] = useState(true); // Suponiendo que el usuario ha iniciado sesión

  return (
    <div className="Inicio" style={{ backgroundColor: "#ffffff", padding: "0px" }}>
      {/* Pasar el estado de sesión al componente Menu */}
      <Menu isSessionActive={isSessionActive} />
      <div style={{ margin: "80px" }}></div>
      <div className="text-center pb-4 mt-4">
        
        <h3 className="fw-bold mt-2 mb-4" style={{ color: "#2d2d2d" }}>
          ¡Bienvenido a <span className="fst-italic" style={{ color: "#81ab86" }}>Mi Propio Jefe</span>!
        </h3>
        <p className="lead mb-4" style={{ fontSize: "18px", lineHeight: "1.6", color: "#3b3b3b" }}>
          En esta página encontrarás diversas formas y todo el apoyo necesario para hacer crecer tu negocio o impulsar tus ideas emprendedoras.
        </p>
        
          </div>
        </div>
      
  );
}

export default Seccion_iniciada_c;
