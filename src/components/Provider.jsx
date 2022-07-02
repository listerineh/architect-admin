import { useNavigate } from 'react-router-dom'

const Provider = ({ provider, handleDelete}) => {

    const navigate = useNavigate()
    const {id, name, phone, address} = provider
  
    return (
      <div className="my-5 bg-white shadow-md px-5 py-10 rounded-xl md:text-sm text-xs">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">{name}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Teléfono: {""}
          <span className="font-normal normal-case">{phone}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Dirección: {""}
          <span className="font-normal normal-case">{address}</span>
        </p>
  
        <div className="md:flex justify-between mt-10">
        <button
          type="button"
          className="py-2 md:mb-0 mb-2 md:w-auto w-full lg:px-20 px-10 bg-yellow-600 hover:bg-yellow-700 text-white font-bold uppercase rounded-lg cursor-pointer transition-all"
          onClick={() => navigate(`/provider/edit/${id}`) }
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
}

export default Provider
