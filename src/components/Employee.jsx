import { useNavigate } from 'react-router-dom'

const Employee = ({ employee, handleDelete }) => {

  const navigate = useNavigate()
  const {id, name, position} = employee

  return (
    <tr className="border-b-2 hover:bg-gray-50 text-center">
      <td className="p-3">{name}</td>
      <td className="p-3 uppercase">{position}</td>
      <td className="p-3">
        <button
          type="button"
          className="rounded-md bg-yellow-500 hover:bg-yellow-400 block w-full text-white p-2 uppercase font-bold text-xs mt-2"
          onClick={() => navigate(`/employees/edit/${id}`)}
        >
          Edit
        </button>
        <button
          type="button"
          className="rounded-md bg-red-500 hover:bg-red-400 block w-full text-white p-2 uppercase font-bold text-xs mt-2"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Employee;
