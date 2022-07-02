import { Outlet, Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../images/arquitecto.webp";

const Layout = () => {
  const location = useLocation();
  const currentURL = location.pathname;

  return (
    <Disclosure as="nav" className="sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="md:flex md:min-h-screen">
            <div className="md:w-1/4 bg-gray-900 px-5 sm:py-10 py-5">
              <div className="flow-root">
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
                      <h1 className="text-5xl pl-2 sm:block hidden">Inicio</h1>
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
                <div className="px-2 pt-2 pb-3 space-y-0">
                  <Link
                    to="/"
                    className={`${
                      currentURL === "/"
                        ? "bg-indigo-300 text-white"
                        : "text-gray-300 hover:bg-zinc-500 hover:text-white"
                    }  block px-3 py-2 rounded-sm text-base font-medium shadow`}
                  >
                    Registros
                  </Link>
                  <Link
                    to="/portfolio"
                    className={`${
                      currentURL === "/portfolio"
                        ? "bg-indigo-300 text-white"
                        : "text-gray-300 hover:bg-zinc-500 hover:text-white"
                    }  block px-3 py-2 rounded-sm text-base font-medium shadow`}
                  >
                    Servicios
                  </Link>
                  <Link
                    to="/contacts"
                    className={`${
                      currentURL === "/contacts"
                        ? "bg-indigo-300 text-white"
                        : "text-gray-300 hover:bg-zinc-500 hover:text-white"
                    }  block px-3 py-2 rounded-sm text-base font-medium shadow`}
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
            <div className="md:w-3/4 p-10 md:h-screen md:overflow-scroll">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Layout;
