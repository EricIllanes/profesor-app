import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import FormHorario from "./formHorario";
import { HeartIcon } from "../assets/icons";
import HoursCalculator from "./hoursCalculator";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);

  async function probanding() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }

  useEffect(() => {
    probanding();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <header className="w-full">
        <NavBar />
      </header>
      <main className="flex flex-col w-3/5 justify-center items-center content-center">
        {isLoading ? (
          <h1 className="flex items-center justify-center w-1/5 bg-yellow-400 h-screen">
            ...Loading{" "}
          </h1>
        ) : (
          <section className="flex w-full h-screen justify-center items-start">
            <FormHorario />
          </section>
        )}

        <HoursCalculator />
      </main>
      <footer className="flex w-full items-center justify-center text-white fixed bottom-0">
        Hecho con{" "}
        <span className="mx-2">
          <HeartIcon />{" "}
        </span>
        por Eric Illanes
      </footer>
    </div>
  );
}
