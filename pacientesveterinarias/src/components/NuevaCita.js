import React, { Component } from 'react';
import uuid from 'uuid';

const stateInicial = {
    cita: {
        mascota: '',
        owner: '',
        fecha: '',
        hora: '',
        sintomas: ''
    },
    error: false
}

class NuevaCita extends Component {
    
    state = {...stateInicial}

    updateState = e => {
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit =  e => {
        e.preventDefault();

        //extraer valores del state
        const {mascota, owner, fecha, hora, sintomas} = this.state.cita;
        
        //validar
        if(!mascota || !owner || !fecha || !hora || !sintomas){
            this.setState({
                error: true
            })
            return;
        }

        //generar objeto con los datos
        const nuevaCita = {...this.state.cita}
        nuevaCita.id = uuid();

        //agregar la cita al state de App
        this.props.crearNuevaCita(nuevaCita); 

        //Colocar en el state estado inicial
        //this.setState(stateInicial)
    }

    render() {
        const cita = this.state.cita;
        const error = this.state.error;
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center">
                        Todos los campos son obligatorios
                    </div> : null}

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange={this.updateState}
                                    value={cita.mascota}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Owner</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Owner"
                                    name="owner"
                                    onChange={this.updateState}
                                    value={cita.owner}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.updateState}
                                    value={cita.fecha}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.updateState}
                                    value={cita.hora}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="fomr-control col-sm-12"
                                    name="sintomas"
                                    placeholder="Describe los sintomas"
                                    onChange={this.updateState}
                                    value={cita.sintomas}
                                ></textarea>
                            </div>
                        </div>

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block"
                            value="Agregar nueva cita"
                        ></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default NuevaCita;