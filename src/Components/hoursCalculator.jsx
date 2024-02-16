import { useEffect, useState } from "react";
import { totalHoursWorked, totalWeeklyHours} from "../scripts";
import "../styles/hoursCalculator.css"

export default function HoursCalculator() {
  const prueba= 123
  const [hours, setHours] = useState({
    Lunes: {
      startMorning: "07:50",
      exitMorning: "13:45",
      startAfternoon: "14:30",
      exitAfternoon: "17:30",
    },
    Martes: {
      startMorning: "07:50",
      exitMorning: "13:45",
      startAfternoon: "14:30",
      exitAfternoon: "17:30",
    },
    Miércoles: {
      startMorning: "07:50",
      exitMorning: "13:45",
      startAfternoon: "14:30",
      exitAfternoon: "17:30",
    },
    Jueves: {
      startMorning: "07:50",
      exitMorning: "13:45",
      startAfternoon: "14:30",
      exitAfternoon: "17:30",
    },
    Viernes:{
      startMorning: "07:50",
      exitMorning: "14:00",
      startAfternoon: "",
      exitAfternoon: "",
    },
  });
  useEffect(() => {
    totalWeeklyHours(hours);
  }, [hours]);

  const handleInputChange = (dia, campo, valor) => {
    setHours((prevState) => ({
      ...prevState,
      [dia]: { ...prevState[dia], [campo]: valor },
    }));
  };

  return (
    // <div
    //   className="flex w-full items-center justify-center bg-yellow-200"
    // >
    //   <div className="overflow-x-auto">
    //     <h2 className="">Horario Semanal</h2>
    //     <table className="min-w-full text-left text-sm font-light">
    //     <thead className="border-b font-medium dark:border-neutral-500">
    //         <tr className="">
    //           <th>Día</th>
    //           <th>Entrada Mañana</th>
    //           <th>Salida Mañana</th>
    //           <th>Entrada Tarde</th>
    //           <th>Salida Tarde</th>
    //           <th>Horas Trabajadas</th>
    //         </tr>
    //       </thead>
    //       <tbody className="">
    //         {Object.keys(hours).map((dia) => (
    //         <tr key={dia} className="border-b dark:border-neutral-500">
    //             <td>{dia}</td>
    //             <td>
    //               <input
    //                 className="text-white bg-transparent"
    //                 type="time"
    //                 step="1"
    //                 value={hours[dia].startMorning}
    //                 onChange={(e) =>
    //                   handleInputChange(dia, "startMorning", e.target.value)
    //                 }
    //               />
    //             </td>
    //             <td>
    //               <input
    //                 className="text-white bg-transparent"
    //                 step="1"
    //                 type="time"
    //                 value={hours[dia].exitMorning}
    //                 onChange={(e) =>
    //                   handleInputChange(dia, "exitMorning", e.target.value)
    //                 }
    //               />
    //             </td>
    //             <td>
    //               <input
    //                 className="text-white bg-transparent"
    //                 step="1"
    //                 type="time"
    //                 value={hours[dia].startAfternoon}
    //                 onChange={(e) =>
    //                   handleInputChange(dia, "startAfternoon", e.target.value)
    //                 }
    //               />
    //             </td>
    //             <td>
    //               <input
    //                 className="text-white bg-transparent"
    //                 step="1"
    //                 type="time"
    //                 value={hours[dia].exitAfternoon}
    //                 onChange={(e) =>
    //                   handleInputChange(dia, "exitAfternoon", e.target.value)
    //                 }
    //               />
    //             </td>
    //             <td className="flex justify-center">
    //               {totalHoursWorked(
    //                 hours[dia].startMorning,
    //                 hours[dia].exitMorning,
    //                 hours[dia].startAfternoon,
    //                 hours[dia].exitAfternoon
    //               )}
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //     <span className="text-white flex mt-10 justify-center">Tus horas trabajadas a la semana son: {totalWeeklyHours(hours)} </span>
    //   </div>
    // </div>


<div
className="hours-main"
>
<div className="hours-container">
  <h2 className="title-section">Horario Semanal</h2>
  <table className="hours-table">
  <thead className="">
      <tr className="">
        <th>Día</th>
        <th>Entrada Mañana</th>
        <th>Salida Mañana</th>
        <th>Entrada Tarde</th>
        <th>Salida Tarde</th>
        <th>Horas Trabajadas</th>
      </tr>
    </thead>
    <tbody className="">
      {Object.keys(hours).map((dia) => (
      <tr key={dia} className="">
          <td>{dia}</td>
          <td>
            <input
              className=""
              type="time"
              step="1"
              value={hours[dia].startMorning}
              onChange={(e) =>
                handleInputChange(dia, "startMorning", e.target.value)
              }
            />
          </td>
          <td>
            <input
              className=""
              step="1"
              type="time"
              value={hours[dia].exitMorning}
              onChange={(e) =>
                handleInputChange(dia, "exitMorning", e.target.value)
              }
            />
          </td>
          <td>
            <input
              className=""
              step="1"
              type="time"
              value={hours[dia].startAfternoon}
              onChange={(e) =>
                handleInputChange(dia, "startAfternoon", e.target.value)
              }
            />
          </td>
          <td>
            <input
              className=""
              step="1"
              type="time"
              value={hours[dia].exitAfternoon}
              onChange={(e) =>
                handleInputChange(dia, "exitAfternoon", e.target.value)
              }
            />
          </td>
          <td className="">
            {totalHoursWorked(
              hours[dia].startMorning,
              hours[dia].exitMorning,
              hours[dia].startAfternoon,
              hours[dia].exitAfternoon
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  <span className="">Tus horas trabajadas a la semana son: {totalWeeklyHours(hours)} </span>
</div>
</div>
  );
}
