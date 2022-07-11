import React from "react";

const NewEmployeeForm = () => {
  return (
    <>
      <div className="md:flow-root">
        <div className="md:float-left">
          <h1 className="font-black text-4xl text-indigo-900 dark:text-indigo-400 md:text-left text-center">
            Nuevo Empleado
          </h1>
          <p className="mt-3 text-indigo-400 dark:text-indigo-800 font-semibold md:text-left text-center">
            ¡Agrega un nuevo empleado facilmente!
          </p>
        </div>
      </div>
      <form>
        <div className="mt-5 bg-white dark:bg-gray-900 shadow-md px-5 py-8 rounded-xl text-gray-700 dark:text-white">
          <div className="md:flex block">
            <div className="block md:p-5 p-2 w-full md:space-y-2 space-y-1">
              <label htmlFor="name" className="mr-2 uppercase font-bold py-2">
                Nombre<span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Nombre del empleado"
                className="w-full rounded-md shadow px-4 md:py-4 py-2 md:text-sm text-xs dark:bg-black bg-white"
              />
            </div>
            <div className="block md:p-5 p-2 w-full md:space-y-2 space-y-1">
              <label
                htmlFor="lastname"
                className="mr-2 uppercase font-bold py-2"
              >
                Apellido<span className="text-red-500">*</span>
              </label>
              <input
                id="lastname"
                name="lastname"
                required
                placeholder="Apellido del empleado"
                className="w-full rounded-md shadow px-4 md:py-4 py-2 md:text-sm text-xs dark:bg-black bg-white"
              />
            </div>
          </div>
          <div className="md:flex block">
            <div className="block md:p-5 p-2 w-full md:space-y-2 space-y-1">
              <label
                htmlFor="nickname"
                className="mr-2 uppercase font-bold py-2"
              >
                Apodo
              </label>
              <input
                id="nickname"
                name="nickname"
                type="text"
                placeholder="Apodo del empleado"
                className="w-full rounded-md shadow px-4 md:py-4 py-2 md:text-sm text-xs dark:bg-black bg-white"
              />
            </div>
            <div className="block md:p-5 p-2 w-full md:space-y-2 space-y-1">
              <label htmlFor="id" className="mr-2 uppercase font-bold py-2">
                Cédula<span className="text-red-500">*</span>
              </label>
              <input
                id="id"
                name="id"
                type="number"
                required
                placeholder="Cédula del empleado"
                className="w-full rounded-md shadow px-4 md:py-4 py-2 md:text-sm text-xs dark:bg-black bg-white"
              />
            </div>
          </div>
          <div className="block md:p-5 p-2 w-full md:space-y-2 space-y-1 ">
            <label htmlFor="position" className="mr-2 uppercase font-bold py-2">
              Cargo<span className="text-red-500">*</span>
            </label>
            <select
              id="position"
              name="position"
              required
              className="w-full rounded-md shadow px-4 md:py-4 py-2 md:text-sm text-xs dark:bg-black bg-white"
            >
              <option className="w-full" value="" selected>
                -Seleccione-
              </option>
              <option className="w-full" value="master">
                Maestro
              </option>
              <option className="w-full" value="officer">
                Oficial
              </option>
            </select>
          </div>
          <div className="md:flex block">
            <div className="block md:p-5 p-2 w-full md:space-y-2 space-y-1">
              <label
                htmlFor="cellphone"
                className="mr-2 uppercase font-bold py-2"
              >
                Celular<span className="text-red-500">*</span>
              </label>
              <input
                id="cellphone"
                name="cellphone"
                required
                type="number"
                placeholder="Celular del empleado"
                className="w-full rounded-md shadow px-4 md:py-4 py-2 md:text-sm text-xs dark:bg-black bg-white"
              />
            </div>
            <div className="block md:p-5 p-2 w-full md:space-y-2 space-y-1">
              <label htmlFor="homephone" className="mr-2 uppercase font-bold py-2">
                Convencional<span className="text-red-500">*</span>
              </label>
              <input
                id="homephone"
                name="homephone"
                type="number"
                required
                placeholder="Convencional del empleado"
                className="w-full rounded-md shadow px-4 md:py-4 py-2 md:text-sm text-xs dark:bg-black bg-white"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="block w-full text-white bg-indigo-600 p-2 rounded-lg mt-5 uppercase font-bold hover:bg-indigo-400 hover:animate-pulse transition-all"
        >
          Crear
        </button>
      </form>
    </>
  );
};

export default NewEmployeeForm;
