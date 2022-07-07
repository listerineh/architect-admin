import { useNavigate } from "react-router-dom";
import { UserIcon, PhoneIcon } from "@heroicons/react/outline";

const Employee = ({ employee, handleDelete }) => {
  const navigate = useNavigate();
  const { id, name, lastName, position, phone, homephone } = employee;

  return (
    <div className="my-5 bg-white dark:bg-gray-900 shadow-md px-5 py-8 rounded-xl text-gray-700 dark:text-white">
      <div className="flex">
        <UserIcon className="block md:h-7 h-5 md:w-7 w-5 mr-2 mt-1" aria-hidden="true" />
        <p className="font-bold uppercase md:text-2xl text-lg">
          {name} {lastName}{" "}
          {employee.nickname && (
            <span className="italic font-normal">({employee.nickname})</span>
          )}
        </p>
      </div>

      <div className="md:ml-9 ml-7 md:text-sm text-xs">
        <p className="uppercase text-indigo-600 italic mb-2">{position}</p>
        <div className="font-extralight italic">
          <div className="flex">
            <PhoneIcon className="mr-2 block h-4 w-4" aria-hidden="true" />
            <p>{phone}</p>
          </div>
          <div className="flex">
            <PhoneIcon className="mr-2 block h-4 w-4" aria-hidden="true" />
            <p>{homephone}</p>
          </div>
        </div>
      </div>

      <div className="md:flex justify-between mt-5">
        <button
          type="button"
          className="py-2 md:mb-0 mb-2 md:w-auto w-full lg:px-20 px-10 bg-yellow-600 hover:bg-yellow-700 text-white font-bold uppercase rounded-lg cursor-pointer transition-all"
          onClick={() => navigate(`/employees/edit/${id}`)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 md:w-auto w-full lg:px-20 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg cursor-pointer transition-all"
          onClick={() => handleDelete(id, name)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Employee;
