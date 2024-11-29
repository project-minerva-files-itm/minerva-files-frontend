import React from 'react';

const Notification = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center">
      {/* Componente Principal */}
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-8">
        {/* Cabecera */}
        <Header />

        {/* Mensaje Principal */}
        <MainMessage />

        {/* Icono Central */}
        <NotificationIcon />

        {/* Botones */}
        <ActionButtons />

        {/* Información Adicional */}
        <Footer />
      </div>
    </div>
  );
};

/** Componente de cabecera: Título y confirmación visual */
const Header = () => {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      {/* Título */}
      <h1 className="text-3xl font-bold text-indigo-700">
        Seguimiento de Solicitud
      </h1>

      {/* Icono de Confirmación */}
      <div className="text-yellow-500 text-2xl font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

/** Componente de Mensaje Principal */
const MainMessage = () => {
  return (
    <div className="mt-6">
      <p className="text-gray-700 text-lg leading-8">
        <span className="font-semibold text-gray-800">
          ¡Seguimiento de su solicitud!
        </span>{" "}
        Su solicitud está siendo procesada. Hemos actualizado el estado de su
        solicitud en el sistema. Le recomendamos revisar la información más
        reciente en su cuenta. Si necesita más detalles, por favor no dude en
        contactar a nuestro soporte.
      </p>

      {/* Submensaje */}
      <AdditionalInfo />
    </div>
  );
};

/** Información adicional */
const AdditionalInfo = () => {
  return (
    <div className="mt-4 bg-gray-50 p-4 rounded-lg border">
      <p className="text-gray-500 text-sm">
        Esta notificación es generada automáticamente por el sistema. Si tiene
        dudas, por favor contacte a nuestro soporte técnico.
      </p>
    </div>
  );
};

/** Icono Central Decorativo */
const NotificationIcon = () => {
  return (
    <div className="flex justify-center my-8">
      {/* Contenedor del icono */}
      <div className="relative w-24 h-24 bg-yellow-100 rounded-full shadow-lg flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        {/* Efecto Animado */}
        <div className="absolute inset-0 bg-yellow-300 rounded-full opacity-20 animate-ping"></div>
      </div>
    </div>
  );
};

/** Botones de acción */
const ActionButtons = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Botón 1 */}
      <button
        onClick={() => alert("Ver detalles del seguimiento")}
        className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg text-center font-semibold hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300"
      >
        Ver Detalles
      </button>

      {/* Botón 2 */}
      <button
        onClick={() => window.history.back()}
        className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg text-center font-semibold hover:bg-gray-300 shadow-md hover:shadow-lg transition-all duration-300"
      >
        Regresar
      </button>
    </div>
  );
};

/** Pie de Página */
const Footer = () => {
  return (
    <div className="mt-8 text-center text-gray-500 text-sm">
      {/* Mensaje */}
      <p>
        Si tiene alguna pregunta, comuníquese con nuestro equipo de soporte al
        correo{" "}
        <a
          href="mailto:soporte@empresa.com"
          className="text-indigo-600 underline hover:text-indigo-800"
        >
          soporte@empresa.com
        </a>
        .
      </p>

      {/* Separador */}
      <hr className="my-4 border-gray-200" />

      {/* Derechos */}
      <p>&copy; 2024 Empresa. Todos los derechos reservados.</p>
    </div>
  );
};

export default Notification;
