import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Employee from "../components/Employee";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

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
    const response = confirm("Esta seguro de eliminar el empleado?");

    if (response) {
      try {
        const URL = `http://localhost:4000/employees/${id}`;
        const response = await fetch(URL, {
          method: "DELETE",
        });
        await response.json();

        const updatedEmployees = employees.filter(
          (employee) => employee.id !== id
        );
        setEmployees(updatedEmployees);
      } catch (error) {
        console.log("ERROR:", error);
      }
    }
  };

  return (
    <>
      <div className="md:flow-root">
        <div className="md:float-left">
          <h1 className="font-black text-4xl text-indigo-900">Empleados</h1>
          <p className="mt-3 text-indigo-400 font-semibold">
            Administra facilmente tus empleados!
          </p>
        </div>
        <div className="mt-3 md:float-right">
          <button 
            type="button"
            className="bg-green-800 py-2 lg:px-10 px-2 md:w-auto w-full text-center rounded-lg shadow text-white font-bold uppercase hover:bg-green-900 transition-all"
            onClick={() => navigate('/employees/new') }
          >
            New
          </button>
        </div>
      </div>

      <div className="w-full">
        {employees.map((employee) => (
          <Employee
            key={employee.id}
            employee={employee}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default Employees;
