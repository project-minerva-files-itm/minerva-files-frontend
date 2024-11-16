import { useState } from 'react';

const PersonDepartament = () => {
  const [departamento, setDepartamento] = useState('');
  const [persona, setPersona] = useState('');
  const [descripcion, setDescripcion] = useState('');


  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Vincular a un trabajador</h1>
        <form >
          <div className="mb-4">
            <label htmlFor="departamento" className="block text-sm font-medium text-gray-700">Seleccionar Departamento</label>
            <select
              id="departamento"
              name="departamento"
              value={departamento}
              onChange={(e) => setDepartamento(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
            >
              <option value="">Seleccione un departamento</option>
              <option value="ventas">Ventas</option>
              <option value="marketing">Marketing</option>
              <option value="desarrollo">Desarrollo</option>
              <option value="recursos_humanos">Recursos Humanos</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="persona" className="block text-sm font-medium text-gray-700">Seleccionar Persona</label>
            <select
              id="persona"
              name="persona"
              value={persona}
              onChange={(e) => setPersona(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
            >
              <option value="">Seleccione una persona</option>
              <option value="persona1">Persona 1</option>
              <option value="persona2">Persona 2</option>
              <option value="persona3">Persona 3</option>
              <option value="persona4">Persona 4</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción</label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
              placeholder="Ingrese una descripción"
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default PersonDepartament;