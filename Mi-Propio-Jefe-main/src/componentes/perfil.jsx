import React from "react";
import { IoLogoTwitter } from 'react-icons/io';
import { BsInstagram }  from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

function Profile() {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-4">

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                  className="rounded-circle img-fluid" style={{ width: "150px" }} />
                <h5 className="my-3">Julio Jaramillo</h5>
                <p className="text-muted mb-1">Emprendedor novato</p>
                <p className="text-muted mb-4">Campoamor, Medellin-Antioquia</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary">Personalizar</button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                 
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <IoLogoTwitter style={{color: "#55acee"}}/>
                    <p className="mb-0">@JulioJaramillo01</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsInstagram style={{color: "#ac2bac"}}/>
                    <p className="mb-0">01__Jaramillo</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsFacebook style={{color: "#3b5998"}}/>
                    <p className="mb-0">Julio Jaramillo Laurido</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Nombre Completo</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Julio Alfredo Jaramillo Laurido</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Correo Electronico</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">juliojara@gmail.com</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Numero de Contacto</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">+57 314 5302894</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Numero de Respaldo</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">+57 310 3862843</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Direccion</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Campoamor, Medellin-Antioquia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">Tu Progreso Mensual</span> </p>
                    <p className="mb-1" style={{ fontSize: ".77rem" }}>Ventas</p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Promedio de Clientes</p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "62%" }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Calificacion</p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "98%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  
                    
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">Tu Progreso Anual</span> </p>
                    <p className="mb-1" style={{ fontSize: ".77rem" }}>Ventas </p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Promedio de Clientes</p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "43%" }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Calificacion</p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "89%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                    
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
