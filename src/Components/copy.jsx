import { useEffect, useState } from "react";

export default function HoursCalculator() {
  const [hours, setHours] = useState({
    Lunes: { entrada: "08:00", salida: "18:00", almuerzo: 45 },
    Martes: { entrada: "08:00", salida: "18:00", almuerzo: 45 },
    Miércoles: { entrada: "08:00", salida: "18:00", almuerzo: 45 },
    Jueves: { entrada: "08:00", salida: "18:00", almuerzo: 45 },
    Viernes: { entrada: "08:00", salida: "13:00", almuerzo: 45 },
  });
  useEffect(() => {
    console.log(hours);
  }, [hours]);
  const totalHoursWorked = (entrada, salida, almuerzo) => {
    const entrieValue = entrada.split(":").map(Number);
    console.log(entrieValue)
    const exitValue = salida.split(":").map(Number);

    const startMinute = entrieValue[0] * 60 + entrieValue[1];
    const exitMinute = exitValue[0] * 60 + exitValue[1];
    console.log(startMinute, exitMinute)
    const timeWorked = exitMinute - startMinute - almuerzo;
    const hoursWorked = timeWorked / 60;

    return hoursWorked.toFixed(2); // Redondear a dos decimales
  };

  const handleInputChange = (dia, campo, valor) => {
    console.log(dia, campo, valor);
    setHours((prevState) => ({
      ...prevState,
      [dia]: { ...prevState[dia], [campo]: valor },
    }));
  };

  return (
    <div
      id="hours-calculator"
      className="flex w-full h-screen items-start justify-center mt-10"
    >
      <div>
        <h2>Horario Semanal</h2>
        <table className="bg-yello-200">
          <thead>
            <tr>
              <th>Día</th>
              <th>Entrada</th>
              <th>Salida</th>
              <th>Almuerzo (minutos)</th>
              <th>Horas Trabajadas</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(hours).map((dia) => (
              <tr key={dia}>
                <td>{dia}</td>
                <td>
                  <input
                    type="time"
                    step="1"
                    value={hours[dia].entrada}
                    onChange={(e) =>
                      handleInputChange(dia, "entrada", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    step="1"
                    type="time"
                    value={hours[dia].salida}
                    onChange={(e) =>
                      handleInputChange(dia, "salida", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    step="1"
                    type="number"
                    value={hours[dia].almuerzo}
                    onChange={(e) =>
                      handleInputChange(dia, "almuerzo", e.target.value)
                    }
                  />
                </td>
                <td>
                  {totalHoursWorked(
                    hours[dia].entrada,
                    hours[dia].salida,
                    hours[dia].almuerzo
                  )}{" "}
                  horas
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}