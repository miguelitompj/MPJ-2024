import React from "react";
import Menu from "./menu";
import logo from "../imagenes/logo.jpeg";

function SobreNosotros() {
  return (
    <div className="p-0">
<Menu />
      <div className="card text-center" style={{ marginTop: '20px' }}>
        
        <div className="card-header" style={{ backgroundColor: "#c0d7d7" }}>
            
          <strong>¿QUIENES SOMOS?</strong>
        </div>
        <div className="card-body" style={{ backgroundColor: "#ffffff" }}>
          <p className="card-text">
            Somos unos jovenes dedicados a brindar apoyo a aquellos emprendedores que lo necesiten, facilitando su crecimiento para alcanzar el éxito.
          </p>
        </div>
      </div>
      <div className="card text-center" style={{ marginTop: '20px' }}>
        <div className="card-header" style={{ backgroundColor: "#c0d7d7" }}>
          <strong>MISION</strong>
        </div>
        <div className="card-body" style={{ backgroundColor: "#ffffff" }}>
          <p className="card-text">
          Nuestra misión es impulsar y potenciar los emprendimientos, brindándoles las herramientas necesarias para crecer. Nos enfocamos en ofrecer apoyo estratégico, orientándolos a superar obstáculos y aprovechar oportunidades para alcanzar el éxito.          </p>
        </div>
      </div>
      <div className="card text-center" style={{ marginTop: '20px' }}>
        <div className="card-header" style={{ backgroundColor: "#c0d7d7" }}>
          <strong>VISION</strong>
        </div>
        <div className="card-body" style={{ backgroundColor: "#ffffff" }}>
          <p className="card-text">
            Queremos ser el aliado principal de quienes se atreven a emprender, ofreciendo un espacio de crecimiento continuo, aprendizaje y oportunidades para todos.
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img src={logo} alt="Logo" style={{ width: '300px', height: 'auto' }} />
      </div>
    </div>
    
  );
}

export default SobreNosotros;
