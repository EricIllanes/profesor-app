import { ArrowIcon, BriefcaseIcon } from "../assets/icons";
import { scrollingFunction } from "../scripts";
import "../styles/bentoComponent.css";
import NavBar from "./navBar";

export default function BentoGrid() {
  return (
    <main className="bentogrid-container">
      <NavBar />
      <div className="bentogrid">
        <section>
          <span className="span-title">
            {" "}
            Revisa la distribución <br />
            de tu carga horaria <br />
          </span>
          <span className="span-content">
            {" "}
            Ingresa tu carga horaria y verifica tu distribución <br />
            de horas lectivas y no lectivas.{" "}
          </span>
          <a
            className="span-link"
            onClick={() => {
              scrollingFunction("form-calculator");
            }}
          >
            Ver más <ArrowIcon />
          </a>
        </section>
        <section>
          <span className="span-title"> Haz tu horario</span>
          <span className="span-content">
            {" "}
            Personaliza tu horario de entrada colación y salida, para verificar
            si cumples tus horas de contrato.
          </span>
          <a
            onClick={() => {
              scrollingFunction("hours-calculator");
            }}
            className="span-link"
          >
            Ver más <ArrowIcon />
          </a>
        </section>
        <section>
          <span className="span-title">
            {" "}
            Estatuto Docente
            <br />
          </span>
          <span className="span-content">
            {" "}
            Revisa toda la legislación chilena relacionada a profesores y
            profesoras.
          </span>
          <a href="/estatutos" className="span-link">
            Ver más <ArrowIcon />
          </a>
        </section>
        <section>
          <span className="span-title">
            {" "}
            ¿Cuánto ganarías en carrera docente? <br />
          </span>
          <span className="span-content">
            {" "}
            Calcula cómo quedaría tu sueldo aproximadamente al trabajar en un
            colegio con carrera docente.
          </span>
          <a className="span-link">
            Ver más <ArrowIcon />
          </a>
        </section>
        <section>
          <span className="span-title">
            {" "}
            Si has tenido un hijo recientemente
            <br />
          </span>
          <span className="span-content">
            {" "}
            Conoce tus derechos como madre o padre en el mundo docente.
          </span>
          <a className="span-link">
            Ver más <ArrowIcon />
          </a>
        </section>
      </div>
    </main>
  );
}
