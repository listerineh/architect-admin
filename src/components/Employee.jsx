import { useNavigate } from "react-router-dom";
import {
  UserIcon,
  PhoneIcon,
  HomeIcon,
  IdentificationIcon,
  XIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";

const Employee = ({ employee, handleDelete }) => {
  const navigate = useNavigate();
  const { id, name, lastName, position, phone, homephone } = employee;

  return (
    <div className="mt-5 bg-white dark:bg-gray-900 shadow-md px-5 py-8 rounded-xl text-gray-700 dark:text-white">
      <div className="flow-root">
        <div className="float-left w-4/5">
          <div className="flex">
            <UserIcon
              className="md:h-7 h-5 md:w-7 w-5 mr-2 mt-1"
              aria-hidden="true"
            />
            <p className="font-bold uppercase md:text-2xl text-base">
              {name} {lastName} {""}
              {employee.nickname && (
                <span className="italic font-normal">
                  ({employee.nickname})
                </span>
              )}
            </p>
          </div>
          <div className="md:ml-9 ml-7 md:text-sm text-xs">
            <p className="uppercase text-indigo-600 italic mb-2">{position}</p>
            <div className="font-extralight italic">
            <div className="flex">
                <IdentificationIcon className="mr-2 block md:h-5 h-4 md:w-5 w-4" aria-hidden="true" />
                <p>{id}</p>
              </div>
              <div className="flex">
                <PhoneIcon className="mr-2 block md:h-5 h-4 md:w-5 w-4" aria-hidden="true" />
                <p>{phone}</p>
              </div>
              <div className="flex">
                <HomeIcon className="mr-2 block md:h-5 h-4 md:w-5 w-4" aria-hidden="true" />
                <p>{homephone}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="float-right">
          <button
            type="button"
            className="md:mr-3 hover:text-yellow-500 transition-all hover:animate-pulse"
            onClick={() => navigate(`/employees/edit/${id}`)}
          >
            <PencilAltIcon className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="md:mr-3 hover:text-red-500 transition-all hover:animate-ping"
            onClick={() => handleDelete(id, name)}
          >
            <XIcon className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
