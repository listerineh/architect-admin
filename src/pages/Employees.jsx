import { useState, useEffect } from "react";
import Employee from "../components/Employee";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployeesFromAPI = async () => {
      try {
        const URL = "http://localhost:4000/employees";
        const response = await fetch(URL);
        const result = await response.json();
        setEmployees(result);
      } catch (error) {
        console.log("ERROR:", error);
      }
    };
    getEmployeesFromAPI();
  }, []);

  const handleDelete = async (id) => {
    const response = confirm('Esta seguro de eliminar el empleado?')

    if(response) {
      try {
        const URL = `http://localhost:4000/employees/${id}`
        const response = await fetch(URL, {
          method: 'DELETE'
        })
        await response.json()
        
        const updatedEmployees = employees.filter( employee => employee.id !== id)
        setEmployees(updatedEmployees)

      } catch (error) {
        console.log('ERROR:', error)
      }
    }
  }

  return (
    <>
      <h1 className="font-black text-4xl text-indigo-900">Empleados</h1>
      <p className="mt-3 text-indigo-400 font-semibold">Administra facilmente tus empleados!</p>

      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-indigo-900 text-white rounded-md">
          <tr>
            <th className="p-5">Nombre</th>
            <th className="p-5">Posicion</th>
            <th className="p-5">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <Employee
              key={employee.id}
              employee={employee}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Employees;
