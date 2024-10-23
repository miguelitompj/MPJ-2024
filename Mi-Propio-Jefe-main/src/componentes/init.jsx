import React from "react";
import "../estilos/index.css";
import { Link } from "react-router-dom";

function Init() {
   return (
      <div className="app">
         <header className="header">
            <div className="login-section">
               <h2>Iniciar Sesión</h2>
               <form>
                  <div>
                     <label>Usuario:</label>
                     <input type="text" name="username@gmail.com"></input>
                  </div>
                  <div>
                     <label>Contraseña:</label>
                     <input type="password" name="password"></input>
                  </div>
                  <Link to="/seccion_iniciada">
                     <button type="submit">Iniciar Sesión</button>
                  </Link>
               </form>
            </div>
            <div className="p-3">
        <div className="card text-center">
          <div className="card-header" style={{ backgroundColor: "#aaf0cb" }}>
            <strong>¿QUÉ ENCONTRARÁS AQUÍ?</strong>
          </div>
          <div className="card-body" style={{ backgroundColor: "#ffffff" }}>
            <p className="card-text">
            En nuestra página encontraras distintas maneras y apoyo para hacer crecer tus ideas y emprendimientos y asi darte a conocer en el mercado.
            </p>
          </div>
        </div>
      </div>
            
         </header>
      </div>
   );
}

export default Init;
