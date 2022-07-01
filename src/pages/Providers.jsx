import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Provider from "../components/Provider";

const Providers = () => {
  const [providers, setProviders] = useState([]);

  const navigate = useNavigate()

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

  const handleDelete = async (id, name) => {
    const response = confirm(`Esta seguro de eliminar al proveedor ${name}?`);

    if (response) {
      try {
        const URL = `http://localhost:4000/providers/${id}`;
        const response = await fetch(URL, {
          method: "DELETE",
        });
        await response.json();

        const updatedproviders = providers.filter(
          (provider) => provider.id !== id
        );
        setEmployees(updatedproviders);
      } catch (error) {
        console.log("ERROR:", error);
      }
    }
  };

  return (
    <>
      <div className="md:flow-root">
        <div className="md:float-left">
          <h1 className="font-black text-4xl text-indigo-900">Proveedores</h1>
          <p className="mt-3 text-indigo-400 font-semibold">
            Administra facilmente tus proveedores!
          </p>
        </div>
        <div className="mt-3 md:float-right">
          <button
            type="button"
            className="bg-green-800 py-2 lg:px-10 px-2 md:w-auto w-full text-center rounded-lg shadow text-white font-bold uppercase hover:bg-green-900 transition-all"
            onClick={() => navigate("/providers/new")}
          >
            New
          </button>
        </div>
      </div>

      <div className="w-full">
        {providers.map((provider) => (
          <Provider
            key={provider.id}
            provider={provider}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default Providers;
