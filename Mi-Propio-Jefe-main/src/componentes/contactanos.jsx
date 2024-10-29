import React from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";

function Contactanos () {
    return (
        <div className="p-3">
            
            <Menu showWelcome={false} />
            <div style={{ margin: "40px" }}></div>
            <div className="card text-center">
                <div className="card-header" style={{ backgroundColor: "#c0d7d7" }}>
                    <strong>NUESTRAS REDES SOCIALES</strong>
                </div>
                <div className="card-body" style={{ backgroundColor: "#ffffff" }}>
                    <p className="card-body row">
                        <strong>INSTAGRAM</strong>
                        <p>@mipropiojefe.oficial</p>
                        <strong>WHATSAPP</strong>
                        <p>+57 305 3026121</p>
                        <strong>FACEBOOK</strong>
                        <p>Mi Propio Jefe</p>
                    </p>
                    <div style={{ margin: "300px" }}>
                    </div>


                    <Link to="/"> 
                        <button className="btn btn-dark">Inicio</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Contactanos;
