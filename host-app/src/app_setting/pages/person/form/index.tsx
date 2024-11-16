const EmployeView: React.FC = () => {

  return (
    <body className="bg-gray-100 flex items-center justify-center min-h-screen" >

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" >

        <h1 className="text-2xl font-semibold text-center mb-6" > Registro de Empleados </h1>

        < form >

          <div className="mb-4" >

            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700" > Nombre </label>

            < input type="text" id="nombre" name="nombre" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2" placeholder="Ingrese el nombre" />

          </div>


          < div className="mb-4" >

            <label htmlFor="apellido" className="block text-sm font-medium text-gray-700" > Apellido </label>

            < input type="text" id="apellido" name="apellido" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2" placeholder="Ingrese el apellido" />

          </div>


          < div className="mb-4" >

            <label htmlFor="email" className="block text-sm font-medium text-gray-700" > Correo Electrónico </label>

            < input type="email" id="email" name="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2" placeholder="Ingrese el correo electrónico" />

          </div>


          < div className="mb-4" >

            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700" > Número de Teléfono </label>

            < input type="tel" id="telefono" name="telefono" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2" placeholder="Ingrese el número de teléfono" />

          </div>


          < div className="mb-4" >

            <label htmlFor="cargo" className="block text-sm font-medium text-gray-700" > Cargo </label>

            < input type="text" id="cargo" name="cargo" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2" placeholder="Ingrese el cargo" />

          </div>


          < div className="mb-4" >

            <label htmlFor="fecha_inicio" className="block text-sm font-medium text-gray-700" > Fecha de Inicio </label>

            < input type="date" id="fecha_inicio" name="fecha_inicio" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2" />

          </div>


          < button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700" > Registrar Empleado </button>

        </form>

      </div>


    </body>
  )

}

export default EmployeView;