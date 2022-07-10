import { Outlet, Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon, MoonIcon, SunIcon } from "@heroicons/react/outline";
import Logo from "../images/logo.webp";

const Layout = ({ theme, handleThemeSwitch }) => {
  const location = useLocation();
  const currentURL = location.pathname;

  const openOptions = () => {};

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="md:flex md:min-h-screen md:max-h-screen">
            <div className="md:w-1/5 bg-gray-900 px-5 sm:py-10 py-5">
              <div className="flow-root">
                <div className="float-right block">
                  <button
                    type="button"
                    onClick={handleThemeSwitch}
                    className="p-2 md:mt-2 text-white text-lg hover:animate-pulse"
                  >
                    {theme === "light" ? (
                      <SunIcon
                        className="block h-6 w-6 hover:text-yellow-300"
                        aria-hidden="true"
                      />
                    ) : (
                      <MoonIcon
                        className="block h-6 w-6 hover:text-gray-400"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </div>
                <div className="sm:float-left float-right">
                  <Link
                    to=""
                    className="text-5xl font-black text-indigo-300 hover:text-indigo-400"
                  >
                    <div className="flex">
                      <img
                        src={Logo}
                        alt="Web page Logo"
                        className="sm:w-12 w-10 sm:h-12 h-10"
                      />
                      <h1 className="text-3xl pl-2 mt-2 sm:block hidden uppercase">
                        Inicio
                      </h1>
                    </div>
                  </Link>
                </div>
                <div className="float-left block sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
              <Disclosure.Panel className="sm:hidden">
                <div className="p-2 pt-2 pb-3 space-y-0">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="rounded-lg flex w-full px-3 py-2 text-white hover:bg-indigo-300 text-base font-medium shadow">
                          <span className="uppercase font-bold text-xl">Registros</span>
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          <div className="pl-2 pt-2 pb-3 space-y-0">
                            <Link
                              to="/employees"
                              className={`${
                                currentURL === "/employees"
                                  ? "bg-indigo-300 text-indigo-900 font-bold"
                                  : "text-white"
                              }  pl-5 py-2 block ml-5 hover:text-indigo-200 rounded-lg shadow`}
                            >
                              Empleados
                            </Link>
                            <Link
                              to="/providers"
                              className={`${
                                currentURL === "/providers"
                                  ? "bg-indigo-300 text-indigo-900 font-bold"
                                  : "text-white"
                              }  pl-5 py-2 block ml-5 hover:text-indigo-200 rounded-lg shadow`}
                            >
                              Proveedores
                            </Link>
                            <Link
                              to="/equipment"
                              className={`${
                                currentURL === "/equipment"
                                  ? "bg-indigo-300 text-indigo-900 font-bold"
                                  : "text-white"
                              }  pl-5 py-2 block ml-5 hover:text-indigo-200 rounded-lg shadow`}
                            >
                              Equipos
                            </Link>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full px-3 py-2 text-white hover:bg-indigo-300 rounded-lg text-base font-medium shadow">
                        <span className="uppercase font-bold text-xl">Servicios</span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="">
                          <div className="px-2 pt-2 pb-3 space-y-0">
                            <Link
                              to="/workflow"
                              className={`${
                                currentURL === "/workflow"
                                  ? "bg-indigo-300 text-indigo-900 font-bold"
                                  : "text-white"
                              }  pl-5 py-2 block ml-5 hover:text-indigo-200 rounded-lg shadow`}
                            >
                              Flujo de trabajo
                            </Link>
                            <Link
                              to="/rentals"
                              className={`${
                                currentURL === "/rentals"
                                  ? "bg-indigo-300 text-indigo-900 font-bold"
                                  : "text-white"
                              }  pl-5 py-2 block ml-5 hover:text-indigo-200 rounded-lg shadow`}
                            >
                              Alquileres
                            </Link>
                            <Link
                              to="/shopping"
                              className={`${
                                currentURL === "/shopping"
                                  ? "bg-indigo-300 text-indigo-900 font-bold"
                                  : "text-white"
                              }  pl-5 py-2 block ml-5 hover:text-indigo-200 rounded-lg shadow`}
                            >
                              Materiales
                            </Link>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Link
                    to="/reports"
                    className="uppercase font-bold text-xl flex w-full px-3 py-2 text-white hover:bg-indigo-300 rounded-lg shadow"
                  >
                    Reportes
                  </Link>
                </div>
              </Disclosure.Panel>

              <div className="bg-white h-0.5 mt-10 sm:block hidden"></div>

              <nav className="mt-10 pl-2 sm:block hidden">
                <Link
                  to="/employees"
                  className={`${
                    currentURL === "/employees"
                      ? "text-indigo-300 font-bold"
                      : "text-white"
                  }  text-xl block mt-2 hover:text-indigo-200`}
                >
                  Empleados
                </Link>
                <Link
                  to="/providers"
                  className={`${
                    currentURL === "/providers"
                      ? "text-indigo-300 font-bold"
                      : "text-white"
                  }  text-xl block mt-2 hover:text-indigo-200`}
                >
                  Proveedores
                </Link>
                <Link
                  to="/equipment"
                  className={`${
                    currentURL === "/equipment"
                      ? "text-indigo-300 font-bold"
                      : "text-white"
                  }  text-xl block mt-2 hover:text-indigo-200`}
                >
                  Equipos
                </Link>
              </nav>

              <div className="bg-white h-0.5 mt-10 sm:block hidden"></div>

              <nav className="mt-10 pl-2 sm:block hidden">
                <Link
                  to="/workflow"
                  className={`${
                    currentURL === "/workflow"
                      ? "text-indigo-300 font-bold"
                      : "text-white"
                  }  text-xl block mt-2 hover:text-indigo-200`}
                >
                  Flujo de trabajo
                </Link>
                <Link
                  to="/rentals"
                  className={`${
                    currentURL === "/rentals"
                      ? "text-indigo-300 font-bold"
                      : "text-white"
                  }  text-xl block mt-2 hover:text-indigo-200`}
                >
                  Alquileres
                </Link>
                <Link
                  to="/shopping"
                  className={`${
                    currentURL === "/shopping"
                      ? "text-indigo-300 font-bold"
                      : "text-white"
                  }  text-xl block mt-2 hover:text-indigo-200`}
                >
                  Materiales
                </Link>
              </nav>

              <div className="bg-white h-0.5 mt-10 sm:block hidden"></div>

              <nav className="mt-10 pl-2 sm:block hidden">
                <Link
                  to="/reports"
                  className={`${
                    currentURL === "/reports"
                      ? "text-indigo-300 font-bold"
                      : "text-white"
                  }  text-xl block mt-2 hover:text-indigo-200`}
                >
                  Reportes
                </Link>
              </nav>
            </div>
            <div className="md:w-4/5 p-10 md:h-screen md:overflow-y-scroll dark:bg-black transition-all">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Layout;
