import { useState, useEffect } from "react";
import Tool from "../components/Tool";

const Equipment = () => {

  const [equipment, setEquipment] = useState([]);

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

  const handleDelete = async (id) => {
    const response = confirm('Esta seguro de eliminar la herramienta?')

    if(response) {
      try {
        const URL = `http://localhost:4000/equipment/${id}`
        const response = await fetch(URL, {
          method: 'DELETE'
        })
        await response.json()
        
        const updatedEquipment = equipment.filter( tool => tool.id !== id)
        setEmployees(updatedEquipment)

      } catch (error) {
        console.log('ERROR:', error)
      }
    }
  }

  return (
    <>
      <h1 className="font-black text-4xl text-indigo-900">Equipos</h1>
      <p className="mt-3 text-indigo-400 font-semibold">Administra facilmente tus herramientas!</p>

      <div className="w-full">
        {equipment.map((tool) => (
          <Tool
            key={tool.id}
            tool={tool}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  )
}

export default Equipment
