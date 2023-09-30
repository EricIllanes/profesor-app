import { useState } from "react";
import scheduleProfessor from "../scripts";
import ModalInfo from "./infoForm";

export default function FormHorario() {
  const [data, setDataForm] = useState({
    contractHours: "",
    classHours: "",
    planificationHours: "",
    durationClass: "",
    durationLunch: "",
  });
  const [send, setSend] = useState(false)
  const [info, setInfo] = useState({})
  // const [errors, setErrors] = useState({
  //   contractHours: false,
  //   classHours: false,
  //   planificationHours: false,
  //   durationClass: false,
  //   durationLunch: false
  // })
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataForm({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setInfo(scheduleProfessor(data))
    setSend(true)
  };
  const validateInputs = (event) => {
    // console.log(111, event.target.name);
    // const name = event.target.name;
    // console.log(2222, name, 3333, data[name]);
    // const value = data[name];
    // console.log(4444, value);
    // let message = "";
    // if (!value) {
    //   message = `${name} is required`;
    // }
    // console.log(55, message);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <h2 className="flex w-2/3 text-white">Calcula tus horas: </h2>
      <p className="text-white">
        ***Completa el formulario con los datos requeridos, <br /> para poder
        calcular tus horas lectivas y no lectivas.
      </p>

      <section className="border-2 border-cyanColor w-2/3 items-center justify-center m-4">
        <form
          className="flex flex-col w-full justify-center items-center"
          onSubmit={handleSubmit}
        >
          <label className="flex w-full justify-center items-center  py-2">
            <span className="flex w-2/5 text-white">
              {" "}
              Cantidad de horas contrato:
            </span>
            <input
              onChange={handleChange}
              onBlur={validateInputs}
              name="contractHours"
              className="flex w-1/3 rounded-md border border-gray-300 focus:border-cyanColor focus:outline-none focus:ring-2 focus:ring-cyanColor py-1 px-1.5 text-gray-500"
              type="number"
              placeholder="44 hrs"
            />
          </label>
          <label className="flex w-full justify-center items-center  py-2">
            <span className="w-2/5 text-white">
              {" "}
              Porcentaje de horas lectivas:
            </span>
            <input
              onChange={handleChange}
              onBlur={validateInputs}
              name="classHours"
              className="flex w-1/3 rounded-md border border-gray-300 focus:border-cyanColor focus:outline-none focus:ring-2 focus:ring-cyanColor py-1 px-1.5 text-gray-500"
              type="number"
              placeholder="60%"
            />
          </label>
          <label className="flex w-full justify-center items-center  py-2">
            <span className="w-2/5 text-white">
              {" "}
              Porcentaje de horas no lectivas:
            </span>
            <input
              onChange={handleChange}
              name="planificationHours"
              className="flex w-1/3 rounded-md border border-gray-300 focus:border-cyanColor focus:outline-none focus:ring-2 focus:ring-cyanColor py-1 px-1.5 text-gray-500"
              placeholder="40%"
              type="number"
            />
          </label>
          <label className="flex w-full justify-center items-center  py-2">
            <span className="w-2/5 text-white">
              {" "}
              Duración de la hora pedagógica:
            </span>
            <input
              onChange={handleChange}
              name="durationClass"
              className="flex w-1/3 rounded-md border border-gray-300 focus:border-cyanColor focus:outline-none focus:ring-2 focus:ring-cyanColor py-1 px-1.5 text-gray-500"
              type="number"
              placeholder="45 minutos"
            />
          </label>
          <label className="flex w-full justify-center items-center py-2">
            <span className="w-2/5 text-white">
              {" "}
              Duración del período de almuerzo:
            </span>
            <input
              onChange={handleChange}
              name="durationLunch"
              className="flex w-1/3 rounded-md border border-gray-300 focus:border-cyanColor focus:outline-none focus:ring-2 focus:ring-cyanColor py-1 px-1.5 text-gray-500"
              type="number"
              placeholder="45 minutos"
            />
          </label>
          <button className="my-4 group relative self-center h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-cyanColor transition-all duration-[1,m00ms] ease-out group-hover:w-full"></div>
            <span className="relative text-grayColor font-bold group-hover:text-white">
              Calcular
            </span>
          </button>
        </form>
      </section>

      {
        (send) ? 
        <section className="flex w-full">
          <ModalInfo totalLectures={info.totalLectures} totalPlanification = {info.totalPlanification} />
        </section>
        :
        <></>
      }
    </div>
  );
}
