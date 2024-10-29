import React from "react";
import Menu from "./menu";
import logo from "../imagenes/logo.jpeg";

function SobreNosotros() {
  return (
    <div className="p-3">
      <Menu />
      <div className="card text-center">
        <div className="card-header" style={{ backgroundColor: "#c0d7d7" }}>
          <strong>¿QUIENES SOMOS?</strong>
        </div>
        <div className="card-body" style={{ backgroundColor: "#ffffff" }}>
          <p className="card-text">
            Somos una plataforma dedicada a brindar apoyo integral a emprendedores y pequeñas empresas, facilitando su crecimiento y conectándolos con las herramientas y recursos necesarios para alcanzar el éxito.
          </p>
        </div>
        <div className="card text-center">
          <div className="card-header" style={{ backgroundColor: "#c0d7d7" }}>
            <strong>MISION</strong>
          </div>
          <div className="card-body" style={{ backgroundColor: "#ffffff" }}>
            <p className="card-text">
              Nuestra misión es impulsar y potenciar los sueños de los emprendedores, ayudándoles a convertir sus ideas en proyectos sólidos y sostenibles.
            </p>
          </div>
          <div className="card text-center">
            <div className="card-header" style={{ backgroundColor: "#c0d7d7" }}>
              <strong>VISION</strong>
            </div>
            <div className="card-body" style={{ backgroundColor: "#ffffff" }}>
              <p className="card-text">
                Queremos ser el aliado principal de quienes se atreven a emprender, ofreciendo un espacio de crecimiento continuo, aprendizaje y oportunidades para todos.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <img src={logo} alt="Logo" style={{ width: '300px', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
