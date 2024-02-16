import { useState } from "react";
import { scheduleProfessor } from "../scripts";
import ModalInfo from "./infoForm";
import "../styles/formHorario.css"
import NavBar from "./navBar";

export default function FormHorario() {
  const [data, setDataForm] = useState({
    contractHours: "",
    classHours: "",
    planificationHours: "",
    durationClass: "",
    durationLunch: "",
  });
  const [send, setSend] = useState(false);
  const [info, setInfo] = useState({});
  // const [errors, setErrors] = useState({
  //   contractHours: false,
  //   classHours: false,
  //   planificationHours: false,
  //   durationClass: false,
  //   durationLunch: false
  // })
  const [errors, setErrors] = useState({});
  const notification = () => toast("Hello madafaka");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataForm({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data[event.target.name] === "") {
      alert("Faltan Campos");
    }
    // notification();
    setInfo(scheduleProfessor(data));
    setSend(!send);
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
    <div className="form-container">
      <NavBar />
      <section className="form-header-section">
        <h2 className="title-section">Calcula tus horas: </h2>
        <p className="form-span-header">
          ***Completa el formulario con los datos requeridos, para poder
          calcular tus horas lectivas y no lectivas.
        </p>
      </section>
      <section className="form-main-section">
        <form
          className="form-main"
          onSubmit={handleSubmit}
        >
          <label className=" flex w-full justify-center items-center  py-2">
          <span className="form-span">
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
          <label className=" flex w-full justify-center items-center  py-2">
          <span className="form-span">
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
          <label className=" flex w-full justify-center items-center  py-2">
            <span className="form-span">
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
          <label className=" flex w-full justify-center items-center  py-2">
          <span className="form-span">
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
          <section className="w-full flex items-center justify-center">
            <button className="my-4 group relative self-center h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
              <div className="absolute inset-0 w-3 bg-cyanColor transition-all duration-[1,m00ms] ease-out group-hover:w-full"></div>
              <span className="relative text-grayColor font-bold group-hover:text-white">
                Calcular
              </span>
            </button>
          </section>
        </form>
      </section>

      {send ? (
        <section className="flex w-full flex-col">
          <ModalInfo
            totalLectures={info.totalLectures}
            totalPlanification={info.totalPlanification}
          />
          <button
            onClick={() => {
              setSend(false);
              setDataForm({
                contractHours: "",
                classHours: "",
                planificationHours: "",
                durationClass: "",
                durationLunch: "",
              });
            }}
            className="my-4 group relative self-center h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
          >
            <div className="absolute inset-0 w-3 bg-cyanColor transition-all duration-[1,m00ms] ease-out group-hover:w-full"></div>
            <span className="relative text-grayColor font-bold group-hover:text-white">
              Reiniciar
            </span>
          </button>
        </section>
      ) : (
        <></>
      )}
      {/* {send ? (
        <div className="">
          <button
            onClick={toggleSidebar}
            className="p-2 bg-blue-500 text-white"
          >
            Abrir Menú
          </button>
          <AsideMenu isOpen={isOpen} onClose={toggleSidebar} />
        </div>
      ) : (
        <></>
      )} */}
    </div>
  )}