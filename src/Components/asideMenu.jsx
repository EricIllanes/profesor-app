export default function AsideMenu({ isOpen, onClose }) {
  const sideBarClass = isOpen
    ? "fixed inset-0 bg-black opacity-50 transition-opacity z-40"
    : "hidden";

  const contentSideBarClass = isOpen
    ? "transform translate-x-0 transition-transform ease-in-out duration-200 fixed inset-y-0 left-0 w-2/3 h-2/3 bg-grayColor overflow-y-auto z-50"
    : "transform -translate-x-full transition-transform ease-in-out duration-200 fixed inset-y-0 left-0 w-64 bg-white overflow-y-auto z-50";

  return (
    <>
      <div className={sideBarClass} onClick={onClose}></div>
      <div className={contentSideBarClass}>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>

        <div className="p-4">Contenido del menú</div>
      </div>
    </>
  );
}
