export default function ModalInfo(props) {
  return (
    <section className="flex w-full flex-col items-center justify-center m-8">
      <span className="w-4/5 text-white font-bold">
        Hola! De acuerdo a tu información, tu carga horaria quedaría así:
        </span>
        <ul>
          <li className=" flex text-white">
            {props && props.totalLectures} horas pedagógicas (en sala con
            estudiantes, es decir, horas lectivas)
          </li>
          <li className=" flex text-white">
            {props && props.totalPlanification} horas cronológicas NO lectivas,
            o sea, planificación, atención de apoderados, etc
          </li>
        </ul>
      

      <p className="flex text-white font-bold text-center my-8">
        <span className="underline mr-2">IMPORTANTE:</span> Recuerda que de estas {props.totalPlanification} horas tu colegio puede disponer de
        hasta un 50% (hasta {props.totalPlanification/2} hrs) para talleres, <br /> reforzamientos, consejo de profesores, etc.
      </p>
    </section>
  );
}
