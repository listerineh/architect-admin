import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Tool from "../components/Tool";

const Equipment = () => {
  const [equipment, setEquipment] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const getEquipmentFromAPI = async () => {
      try {
        const URL = "http://localhost:4000/equipment";
        const response = await fetch(URL);
        const result = await response.json();
        setEquipment(result);
      } catch (error) {
        console.log("ERROR:", error);
      }
    };
    getEquipmentFromAPI();
  }, []);

  const handleDelete = async (id, name) => {
    const response = confirm(`Esta seguro de eliminar la herramienta ${name}?`);

    if (response) {
      try {
        const URL = `http://localhost:4000/equipment/${id}`;
        const response = await fetch(URL, {
          method: "DELETE",
        });
        await response.json();

        const updatedEquipment = equipment.filter((tool) => tool.id !== id);
        setEmployees(updatedEquipment);
      } catch (error) {
        console.log("ERROR:", error);
      }
    }
  };

  return (
    <>
      <div className="md:flow-root">
        <div className="md:float-left">
          <h1 className="font-black text-4xl text-indigo-900 dark:text-indigo-400">Equipos</h1>
          <p className="mt-3 text-indigo-400 dark:text-indigo-800 font-semibold">
            Administra facilmente tus herramientas!
          </p>
        </div>
        <div className="mt-3 md:float-right">
          <button
            type="button"
            className="bg-green-800 py-2 lg:px-10 px-2 md:w-auto w-full text-sm text-center rounded-lg shadow text-white font-bold uppercase hover:bg-green-900 transition-all"
            onClick={() => navigate("/equipment/new")}
          >
            Nuevo
          </button>
        </div>
      </div>

      <div className="w-full">
        {equipment.map((tool) => (
          <Tool key={tool.id} tool={tool} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default Equipment;
