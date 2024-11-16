const FormANSDocumentView: React.FC = () => {

  return (
    <body className="bg-gray-100 flex items-center justify-center min-h-screen">


      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">

        <h1 className="text-2xl font-semibold text-center mb-6">Gestión de Solicitudes</h1>

        <form>

          <div className="mb-4">

            <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">Seleccione Tipo de documento</label>

            <select id="usuario" name="usuario" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2">

              <option value="">Seleccione Tipo de documento</option>

              <option value="usuario1">documento 1</option>

              <option value="usuario2">documento 2</option>

            </select>

          </div>


          <div className="mb-4">

            <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">Asignar a Usuario/Departamento</label>

            <select id="usuario" name="usuario" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2">

              <option value="">Seleccione un usuario o departamento</option>

              <option value="usuario1">Usuario 1</option>

              <option value="usuario2">Usuario 2</option>

              <option value="departamento1">Departamento 1</option>

              <option value="departamento2">Departamento 2</option>

            </select>

          </div>

          <div className="mb-4">

            <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">Asignar ANS</label>

            <select id="usuario" name="usuario" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2">

              <option value="">Seleccione ANS</option>

              <option value="usuario1">Usuario 1</option>

              <option value="usuario2">Usuario 2</option>

              <option value="departamento1">Departamento 1</option>

              <option value="departamento2">Departamento 2</option>

            </select>

          </div>

          <div className="mb-4">
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción</label>
            <textarea id="descripcion" name="descripcion" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2" placeholder="Ingrese una descripción del ANS"></textarea>
          </div>


          <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700">Registrar Solicitud</button>

        </form>

      </div>


    </body>
  )

}

export default FormANSDocumentView;