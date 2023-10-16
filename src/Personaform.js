import React, { Component } from 'react';
import axios from 'axios';

class PersonaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { nombre, apellido } = this.state;

    axios.post('http://localhost:5000/personas', { nombre, apellido })
      .then(() => alert('Persona insertada correctamente'))
      .catch(() => alert('Error insertando persona'));
  };

  render() {
    return (
      <div>
        <h1>Formulario de Persona</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={this.state.nombre}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={this.state.apellido}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default PersonaForm;