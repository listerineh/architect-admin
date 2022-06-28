import { useState, useEffect } from "react";
import Provider from "../components/Provider";

const Providers = () => {

  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const getProvidersFromAPI = async () => {
      try {
        const URL = "http://localhost:4000/providers";
        const response = await fetch(URL);
        const result = await response.json();
        setProviders(result);
      } catch (error) {
        console.log("ERROR:", error);
      }
    };
    getProvidersFromAPI();
  }, []);

  const handleDelete = async (id) => {
    const response = confirm('Esta seguro de eliminar el proveedor?')

    if(response) {
      try {
        const URL = `http://localhost:4000/providers/${id}`
        const response = await fetch(URL, {
          method: 'DELETE'
        })
        await response.json()
        
        const updatedproviders = providers.filter( provider => provider.id !== id)
        setEmployees(updatedproviders)

      } catch (error) {
        console.log('ERROR:', error)
      }
    }
  }

  return (
    <>
      <h1 className="font-black text-4xl text-indigo-900">Proveedores</h1>
      <p className="mt-3 text-indigo-400 font-semibold">Administra facilmente tus proveedores!</p>

      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-indigo-900 text-white">
          <tr>
            <th className="p-5">Nombre</th>
            <th className="p-5">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {providers.map((provider) => (
            <Provider
              key={provider.id}
              provider={provider}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Providers
