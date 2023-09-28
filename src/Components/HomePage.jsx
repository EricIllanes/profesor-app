import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import FormHorario from "./formHorario";

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
    <div className="w-full h-screen flex flex-col bg-white">
      <header className="w-full bg-yellow-600">
        <NavBar />
      </header>
      <main className="flex w-full items-center justify-center">
        {isLoading ? (
          <h1 className="flex items-center justify-center w-1/5 bg-yellow-400">...Loading </h1>
        ) : (
          <FormHorario />
        )}
      </main>
    </div>
  );
}
