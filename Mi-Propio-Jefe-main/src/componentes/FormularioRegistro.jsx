import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class FormularioRegistro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            form: {
                Id: '',
                Nombres: '',
                Apellidos: '',
                Correo: '',
                Contraseña: '',
                Departamento: '',
                Ciudad: '',
                Ocupacion: ''
            }
        }
    }

    peticionPost = async () => {
        delete this.state.form.id;
        await axios.post('http://localhost:4001/api/usuarios', this.state.form)
            .then(response => {
                alert('Bienvenido');
                if (this.props.onRegister) {  // Llama a la función si existe
                    this.props.onRegister();
                }
            }).catch(error => {
                console.log(error.message);
            })
    }

    handleChange = async (e) => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    render() {
        const { form } = this.state;

        return (
            <div className="bg-white col-md-8 order-md-1 container my-5">
                <h1 className="mb-3 text-center">Registro</h1>
                <form className="needs-validation" noValidate="">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Nombres</label>
                            <input type="text" className="form-control" name="Nombres" placeholder="Nombres" required="" onChange={this.handleChange} value={form.Nombres}></input>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Apellidos</label>
                            <input type="text" className="form-control" name="Apellidos" placeholder="Apellidos" required="" onChange={this.handleChange} value={form.Apellidos}></input>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Correo</label>
                        <input type="email" className="form-control" name="Correo" placeholder="you@example.com" onChange={this.handleChange} value={form.Correo}></input>
                    </div>
                    <div className="mb-3">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" name="Contraseña" onChange={this.handleChange} value={form.Contraseña}></input>
                    </div>
                    <div className="mb-3">
                        <label>Departamento</label>
                        <input type="text" className="form-control" name="Departamento" onChange={this.handleChange} value={form.Departamento}></input>
                    </div>
                    <div className="mb-3">
                        <label>Ciudad</label>
                        <input type="text" className="form-control" name="Ciudad" onChange={this.handleChange} value={form.Ciudad}></input>
                    </div>
                    <div className="mb-3">
                        <label>Ocupación</label>
                        <input type="text" className="form-control" name="Ocupacion" onChange={this.handleChange} value={form.Ocupacion}></input>
                    </div>
                    <hr className="mb-4"></hr>
                    <Link to="/seccion_iniciada">
                        <button className="btn btn-outline-primary btn-lg btn-block" type="button" onClick={() => this.peticionPost()}>
                            Registrarme
                        </button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default FormularioRegistro;
