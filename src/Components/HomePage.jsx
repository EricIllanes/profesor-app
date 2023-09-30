import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import FormHorario from "./formHorario";
import { HeartIcon } from "../assets/icons";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);

  async function probanding() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    probanding();
  }, []);

  return (
    <div className="bg-grayColor w-full h-screen flex flex-col">
      <header className="w-full">
        <NavBar />
      </header>
      <main className="flex w-full items-center justify-center">
        {isLoading ? (
          <h1 className="flex items-center justify-center w-1/5 bg-yellow-400">
            ...Loading{" "}
          </h1>
        ) : (
          <section className="w-full">
          <FormHorario />

          </section>


        )}
      </main>
      <footer className="flex w-full items-center justify-center text-white fixed bottom-0">
        Hecho con <span className="mx-2"><HeartIcon /> </span>por Eric Illanes
      </footer>
    </div>
  );
}
