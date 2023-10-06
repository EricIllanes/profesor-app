import { useState } from "react";
import scheduleProfessor from "../scripts";
import ModalInfo from "./infoForm";
import toast, { Toaster } from "react-hot-toast";
// import AsideMenu from "./asideMenu";

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
    console.log('data', data[event.target])
    if(data)
    console.log('evento', event.target)
    if(data[event.target.name] === ""){
      alert('Faltan Campos')
    }
    notification();
    setInfo(scheduleProfessor(data));
    setSend(!send);
  };
  const validateInputs = (event) => {
    console.log("event", event.target.value);
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
          className="bg-green-200 flex flex-col w-full content-center"
          onSubmit={handleSubmit}
        >
          <label className="bg-sky-200 flex w-full justify-center items-center  py-2">
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
          <label className="bg-sky-200 flex w-full justify-center items-center  py-2">
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
          <label className="bg-sky-200 flex w-full justify-center items-center  py-2">
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
          <label className="bg-sky-200 flex w-full justify-center items-center  py-2">
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
          {/* <label className="bg-sky-200 flex w-full justify-center items-center py-2">
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
          </label> */}
          <section className="w-full flex bg-sky-200 items-center justify-center">
            <button className="my-4 group relative self-center h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
              <div className="absolute inset-0 w-3 bg-cyanColor transition-all duration-[1,m00ms] ease-out group-hover:w-full"></div>
              <span className="relative text-grayColor font-bold group-hover:text-white">
                Calcular
              </span>
            </button>
          </section>
          <Toaster />
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
  );
}
