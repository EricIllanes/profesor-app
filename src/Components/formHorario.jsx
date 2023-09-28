import { useState } from "react";


export default function FormHorario() {
  const [data, setDataForm] = useState({
    horasContrato: "",
    horasLectivas: "",
    horasNoLectivas: "",
    duracionPeriodo: "",
    duracionAlmuerzo: "",
  });

  // const [errors, setErrors] = useState({
  //   horasContrato: false,
  //   horasLectivas: false,
  //   horasNoLectivas: false,
  //   duracionPeriodo: false,
  //   duracionAlmuerzo: false
  // })
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataForm({
      ...data,
      [name]: value,
    });
    setErrors(validators({
      ...data,
      [name]:value
    }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log({ data });
  };

  const validateInputs = (event) =>{
    console.log(111, event.target.name)
    const name = event.target.name;
    console.log(2222, name, 3333, data[name])
    const value = data[name]
    console.log(4444, value)
    let message= '';
    if(!value){
      message = `${name} is required`
    }
    console.log(55, message)
  }

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <h2 className="flex w-full bg-yellow-400">Calcula tus horas: </h2>
      <p>
        ***Completa el formulario con los datos requeridos, <br /> para poder
        calcular tus horas lectivas y no lectivas.
      </p>

      <section className="border-2 w-2/3 items-center justify-center m-4">
        <form
          className="flex flex-col w-full justify-center items-center"
          onSubmit={handleSubmit}
        >
          <label className="flex w-full justify-center items-center  py-2">
            <span className="flex w-2/5"> Cantidad horas contrato:</span>
            <input
              onChange={handleChange}
              onBlur={validateInputs}
              name="horasContrato"
              className="flex w-1/3 rounded-md border border-gray-300 focus:border-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-700 py-1 px-1.5 text-gray-500"
              type="number"
              placeholder="44 hrs"
            />
          </label>
          <label className="flex w-full justify-center items-center  py-2">
            <span className="w-2/5"> Porcentaje horas lectivas:</span>
            <input
              onChange={handleChange}
              onBlur={validateInputs}
              name="horasLectivas"
              className="flex w-1/3 rounded-md border border-gray-300 focus:border-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-700 py-1 px-1.5 text-gray-500"
              type="percent"
              placeholder="60%"
            />
          </label>
          <label className="flex w-full justify-center items-center  py-2">
            <span className="w-2/5"> Porcentaje horas no lectivas:</span>
            <input
              onChange={handleChange}
              name="horasNoLectivas"
              className="flex w-1/3 rounded-md border border-gray-300 focus:border-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-700 py-1 px-1.5 text-gray-500"
              placeholder="40%"
            />
          </label>
          <label className="flex w-full justify-center items-center  py-2">
            <span className="w-2/5"> Duración período de clases:</span>
            <input
              onChange={handleChange}
              name="duracionPeriodo"
              className="flex w-1/3 rounded-md border border-gray-300 focus:border-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-700 py-1 px-1.5 text-gray-500"
              placeholder="45 minutos"
            />
          </label>
          <label className="flex w-full justify-center items-center py-2">
            <span className="w-2/5"> Duración período almuerzo:</span>
            <input
              onChange={handleChange}
              name="duracionAlmuerzo"
              className="flex w-1/3 rounded-md border border-gray-300 focus:border-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-700 py-1 px-1.5 text-gray-500"
              placeholder="45 minutos"
            />
          </label>
          <button className="my-4 group relative self-center h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-sky-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">
              Calcular
            </span>
          </button>
        </form>
      </section>
    </div>
  );
}

/*
import React, { Component } from 'react';

class FormHorario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horarios: {
        lunes: { entrada: '08:00', salida: '18:00', almuerzo: 45 },
        martes: { entrada: '08:00', salida: '18:00', almuerzo: 45 },
        miercoles: { entrada: '08:00', salida: '18:00', almuerzo: 45 },
        jueves: { entrada: '08:00', salida: '18:00', almuerzo: 45 },
        viernes: { entrada: '08:00', salida: '18:00', almuerzo: 45 },
        sabado: { entrada: '08:00', salida: '18:00', almuerzo: 45 },
        domingo: { entrada: '08:00', salida: '18:00', almuerzo: 45 },
      },
    };
  }

  calcularHorasTrabajadas = (entrada, salida, almuerzo) => {
    const entradaParts = entrada.split(':').map(Number);
    console.log({})
    const salidaParts = salida.split(':').map(Number);

    const entradaMinutos = entradaParts[0] * 60 + entradaParts[1];
    const salidaMinutos = salidaParts[0] * 60 + salidaParts[1];

    const tiempoTrabajado = salidaMinutos - entradaMinutos - almuerzo;
    const horasTrabajadas = tiempoTrabajado / 60;

    return horasTrabajadas.toFixed(2); // Redondear a dos decimales
  };

  handleInputChange = (dia, campo, valor) => {
    this.setState((prevState) => ({
      horarios: {
        ...prevState.horarios,
        [dia]: {
          ...prevState.horarios[dia],
          [campo]: valor,
        },
      },
    }));
  };

  render() {
    return (
      <div>
        <h2>Horario Semanal</h2>
        <table>
          <thead>
            <tr>
              <th>Día</th>
              <th>Entrada</th>
              <th>Salida</th>
              <th>Almuerzo (min)</th>
              <th>Horas Trabajadas</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.horarios).map((dia) => (
              <tr key={dia}>
                <td>{dia}</td>
                <td>
                  <input
                    type="time"
                    value={this.state.horarios[dia].entrada}
                    onChange={(e) =>
                      this.handleInputChange(dia, 'entrada', e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="time"
                    value={this.state.horarios[dia].salida}
                    onChange={(e) =>
                      this.handleInputChange(dia, 'salida', e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={this.state.horarios[dia].almuerzo}
                    onChange={(e) =>
                      this.handleInputChange(dia, 'almuerzo', e.target.value)
                    }
                  />
                </td>
                <td>
                  {this.calcularHorasTrabajadas(
                    this.state.horarios[dia].entrada,
                    this.state.horarios[dia].salida,
                    this.state.horarios[dia].almuerzo
                  )}{' '}
                  horas
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FormHorario;


*/