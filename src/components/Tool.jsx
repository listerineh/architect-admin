import { useNavigate } from "react-router-dom";

const Tool = ({ tool, handleDelete }) => {
  const navigate = useNavigate();
  const { id, name, brand, model, serie, cantity } = tool;

  return (
    <div className="my-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Herramienta: {""}
        <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Marca: {""}
        <span className="font-normal normal-case">{brand}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Modelo: {""}
        <span className="font-normal normal-case">{model}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        No. Serie: {""}
        <span className="font-normal normal-case">{serie}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Cantidad: {""}
        <span className="font-normal normal-case">{cantity}</span>
      </p>

      <div className="md:flex justify-between mt-10">
        <button
          type="button"
          className="py-2 md:mb-0 mb-2 md:w-auto w-full lg:px-20 px-10 bg-yellow-600 hover:bg-yellow-700 text-white font-bold uppercase rounded-lg cursor-pointer transition-all"
          onClick={() => navigate(`/equipment/edit/${id}`) }
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 md:mb-0 mb-2 md:w-auto w-full lg:px-20 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg cursor-pointer transition-all"
          onClick={() => handleDelete(id, name)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Tool;
