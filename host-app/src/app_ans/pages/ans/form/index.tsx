const FormANSView: React.FC = () => {

  return (
    <body className="bg-gray-100 flex items-center justify-center min-h-screen">

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Registro de ANS</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre del ANS</label>
            <input type="text" id="nombre" name="nombre" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2" placeholder="Ingrese el nombre del ANS" />
          </div>

          <div className="mb-4">
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción</label>
            <textarea id="descripcion" name="descripcion" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2" placeholder="Ingrese una descripción del ANS"></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="tiempo_respuesta" className="block text-sm font-medium text-gray-700">Tiempo de Respuesta (en horas)</label>
            <input type="number" id="tiempo_respuesta" name="tiempo_respuesta" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2" placeholder="Ingrese el tiempo de respuesta" />
          </div>

          <div className="mb-6">
            <label htmlFor="tiempo_solucion" className="block text-sm font-medium text-gray-700">Tiempo de Solución (en horas)</label>
            <input type="number" id="tiempo_solucion" name="tiempo_solucion" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2" placeholder="Ingrese el tiempo de solución" />
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700">Registrar ANS</button>
        </form>
      </div>

    </body>
  )

}

export default FormANSView;