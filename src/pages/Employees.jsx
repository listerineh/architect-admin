import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAddIcon } from "@heroicons/react/outline";
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

  const handleDelete = async (id, name) => {
    const response = confirm(`Esta seguro de eliminar al empleado ${name}?`);

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
          <h1 className="font-black text-4xl text-indigo-900 dark:text-indigo-400">
            Empleados
          </h1>
          <p className="mt-3 text-indigo-400 dark:text-indigo-800 font-semibold">
            Administra facilmente tus empleados!
          </p>
        </div>
        <div className="mt-3 md:float-right dark:text-white text-black">
          <button
            type="button"
            className="w-full transition-all"
            onClick={() => navigate("/employees/new")}
          >
            <UserAddIcon className="md:block hidden md:h-7 h-6 md:w-7 w-6 hover:text-green-500 hover:animate-pulse float-none" />
            <p className="block md:hidden bg-green-600 p-2 rounded-lg shadow text-white font-bold uppercase hover:bg-green-500 transition-all">Agregar nuevo</p>
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
