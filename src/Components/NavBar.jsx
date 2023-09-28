export default function NavBar() {
  return (
    <nav className="bg-white">
      <div className="flex flex-row justify-between items-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300 flew-row space-between">
        <div>
          <a
            href="/"
            className="text-3xl cursor-pointer font-bold bg-gradient-to-tl from-sky-800 to-gray-600 bg-clip-text text-transparent"
          >
            #P  r  o  f e i n f o 
          </a>
        </div>
        <div>
        <a
            href="/"
            className="border-b-4 text-sky-900 font-bold border-transparent hover:border-green-500 mx-1.5 sm:mx-6"
          >
            Inicio
          </a>
          <a
            href="/estatutos"
            className="border-b-4 text-sky-900 font-bold border-transparent hover:text-gray-800  hover:border-green-500 mx-1.5 sm:mx-6"
          >
            Más Información
          </a>
          <a
            href="/about"
            className="border-b-4 text-sky-900 font-bold border-transparent hover:border-green-500 mx-1.5 sm:mx-6"
          >
            Nosotros
          </a>
        </div>
      </div>
    </nav>
  );
}
