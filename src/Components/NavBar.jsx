import { useEffect } from "react";
import { scrollingFunction } from "../scripts";
import { useLocation } from "react-router-dom";
export default function NavBar() {
  const {pathname} = useLocation();
  useEffect(()=>{
    console.log(pathname)
  }, [])
  return (
    <nav className="w-full">
      <div className="flex flex-row justify-between items-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300 flew-row space-between">
        <div>
          <a
            href="/"
            className="text-3xl cursor-pointer font-bold text-cyanColor"
          >
            #P r o f e i n f o
          </a>
        </div>
        <div>
          {pathname !== "/" ? (
            <a
              href="/"
              className="text-cyanColor font-bold border-b-4 border-transparent hover:border-green-500 mx-1.5 sm:mx-6"
            >
              Inicio
            </a>
          ) : (
            <a
              onClick={() => {
                scrollingFunction("hours-calculator");
              }}
              className={`border-b-4 text-cyanColor font-bold border-transparent hover:border-green-500 mx-1.5 sm:mx-6`}
            >
              Horario
            </a>
          )}

          <a
            href="/estatutos"
            className={`border-b-4 text-cyanColor font-bold border-transparent hover:border-green-500 mx-1.5 sm:mx-6`}
          >
            Más Información
          </a>
          <a
            href="/about"
            className={`border-b-4 text-cyanColor font-bold border-transparent hover:border-green-500 mx-1.5 sm:mx-6`}
          >
            Nosotros
          </a>
        </div>
      </div>
    </nav>
  );
}
