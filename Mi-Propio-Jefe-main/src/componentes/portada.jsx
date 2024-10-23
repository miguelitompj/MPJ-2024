import React from 'react'
import logo from "../imagenes/logo.jpeg"
import {Link} from "react-router-dom"

function Portada() {
  return (
    <div className='container' style={{backgroundColor:"#ffffff"}}>
      <div className='row'>
        <img 
          src= {logo} alt="logo" style={{ maxWidth: "600px"}}>
        </img>
        <div className= "mx auto">
          <p className="text-center">Empieza a emprender!</p>
        </div>

        <Link to="/registro">
          <div class="d-grid gap-2 col-6 mx-auto pb-1" >
            <button type="button" class="btn btn-dark">
              Regístrate
            </button>
          </div>
        </Link>
        <Link to="/login">
          <div class="d-grid gap-2 col-6 mx-auto pb-3">
<button type="button" class="btn btn-dark">Iniciar Sesión</button>
          </div>
        </Link>
    </div>
</div>

);
}

export default Portada;