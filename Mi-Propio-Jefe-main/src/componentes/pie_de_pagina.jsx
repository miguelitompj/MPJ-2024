import React from "react"
import { Link } from "react-router-dom"
import Designer from '../imagenes/dioss.jpeg'

function pie_de_pagina() {
  return (
    <div className="footer">
      <div className="container fluid">
        <div className="row mx-auto">
          <div className="card text-center">
          <div className="card-header" style={{ backgroundColor: "#c0d7d7" }}>
            <strong>TRABAJA CON NOSOTROS</strong>
          </div>
          <div className="card-body" style={{ backgroundColor: "#ffffff" }}>
          <img src={Designer} alt="imagen" width={300}/>
            <p className="card-text">
            ¿Eres emprendedor? presenta tu emprendimiento para recibir el apoyo necesario para darte a conocer en el mercado.
            </p>
          </div>
        </div>
    
          <div className="text-center mx-auto">
            <h2 className="encabezado mt-3 pt-3">
              <strong>
              <p style={{ color: 'black' }}>¡TODOS SOMOS UNO!</p>
              </strong>
            </h2>
            <p className="px-0">
              <small>
                  Sumergete en el mundo de los emprendedores y aprende a ser el mejor.
              </small>
            </p>
            <div style={{ margin: "50px" }}></div>
          </div>
        </div> 
      </div>  
    </div>
  );
}

export default pie_de_pagina;